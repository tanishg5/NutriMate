import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function Recommendation() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [goal, setGoal] = useState("");
  const [diet, setDiet] = useState("");
  const [allergies, setAllergies] = useState("");
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setRecommendation(null);

    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

    const prompt = `
    Act as a supplement recommendation expert.
    Recommend a supplement plan for:
    - age: ${age}
    - gender: ${gender}
    - goal: ${goal}
    - diet: ${diet}
    - allergies: ${allergies}

    Please return the result strictly in JSON format like this:
    {
      "supplements": [
        {
          "name": "string",
          "dose": "string",
          "purpose": "string"
        }
      ]
    }
    `;

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);
      const text = result.response.text();

      // sometimes Gemini returns text with markdown triple backticks:
      const cleaned = text.replace(/```(json)?/g, "").trim();

      const data = JSON.parse(cleaned);
      console.log("Parsed:", data);
      setRecommendation(data);
    } catch (err) {
      console.error("JSON parse error", err);
      setError("Sorry, could not understand the response. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Get Your Supplement Recommendation</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border w-full p-2 rounded"
          required
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="border w-full p-2 rounded"
          required
        >
          <option value="">Select gender</option>
          <option>male</option>
          <option>female</option>
          <option>other</option>
        </select>
        <input
          type="text"
          placeholder="Goal (e.g. muscle gain, fat loss)"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="border w-full p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Diet (e.g. vegetarian, vegan, non-veg)"
          value={diet}
          onChange={(e) => setDiet(e.target.value)}
          className="border w-full p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Allergies (comma separated)"
          value={allergies}
          onChange={(e) => setAllergies(e.target.value)}
          className="border w-full p-2 rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 hover:bg-green-700 text-white p-2 rounded w-full"
        >
          {loading ? "Thinking..." : "Get Recommendation"}
        </button>
      </form>

      {error && (
        <div className="mt-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>
      )}

      {recommendation && (
        <div className="mt-6 p-4 bg-green-50 border rounded text-green-800">
          <h2 className="font-semibold mb-2">Recommended Supplements</h2>
          {recommendation.supplements.map((supp, idx) => (
            <div
              key={idx}
              className="border-b border-green-200 py-2 text-sm"
            >
              <strong>{supp.name}</strong><br />
              Dose: {supp.dose}<br />
              Purpose: {supp.purpose}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
