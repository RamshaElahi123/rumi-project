"use client";

import React, { useState } from "react";
import { client } from "@/sanity/lib/client";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Save the form data in Sanity
      await client.create({
        _type: "contact",
        name,
        email,
        message,
      });

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Error submitting contact form:", err);
      setStatus("error");
    }
  };

  return (
    <main className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block font-medium mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status === "success" && (
        <p className="mt-4 text-green-600">Your message has been sent successfully!</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-600">Something went wrong. Please try again.</p>
      )}
    </main>
  );
}
