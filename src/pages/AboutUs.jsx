import React from "react";

function AboutUs() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-4xl font-bold text-green-700 mb-6">About NutriMate</h1>

      <p className="mb-4 text-lg">
        Welcome to <strong>NutriMate</strong> — your trusted partner in achieving
        your health and fitness goals. We bring you a curated range of
        supplements backed by science, helping you perform at your best every
        single day.
      </p>

      <p className="mb-4 text-lg">
        Our platform combines artificial intelligence with expert curation to
        recommend the right supplements tailored to your fitness goals, dietary
        needs, and health conditions. Whether you are looking to build muscle,
        recover faster, or maintain overall wellness, NutriMate is here to guide
        you.
      </p>

      <p className="mb-4 text-lg">
        We believe in transparency, quality, and a community-first approach.
        That’s why every product we feature is thoroughly researched and
        reviewed. Your progress is our mission!
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
        <p className="text-lg">
          Empower everyone to make informed health choices with smart technology
          and trustworthy recommendations.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Science-backed advice</li>
          <li>Personalized recommendations</li>
          <li>Commitment to quality</li>
          <li>Community trust</li>
        </ul>
      </div>
    </section>
  );
}

export default AboutUs;
