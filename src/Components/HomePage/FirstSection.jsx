import { useState, useEffect } from "react";

export default function FirstSection() {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-red-500 text-white text-center p-10">
        <h1 className="text-5xl font-bold mb-4">Welcome to Section 1</h1>
        <p className="text-lg mb-6">This is the first section with unique content.</p>
        <button className="mt-6 px-6 py-2 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-300 transition">Learn More</button>
      </div>
    );
  }
  