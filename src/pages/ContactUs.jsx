import React from "react";

function ContactUs() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Contact Us</h1>

      <p className="text-lg mb-6">
        Have questions about NutriMate, our products, or your orders? We’re here to help!
        Reach out to us through any of the methods below, and our team will get back to you
        as soon as possible.
      </p>

      <div className="bg-white rounded shadow p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Our Contact Details</h2>
        <p><strong>Email:</strong> support@nutrimate.com</p>
        <p><strong>Phone:</strong> +91 8955703985</p>
        <p><strong>Address:</strong> 123 Health Avenue, FitCity, India</p>
      </div>

      <div className="bg-white rounded shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              className="w-full border px-3 py-2 rounded"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              className="w-full border px-3 py-2 rounded"
              rows="4"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
