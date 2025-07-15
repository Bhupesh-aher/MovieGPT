import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-10">
      <div className="max-w-3xl w-full bg-gray-800 rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-purple-400 mb-6 text-center">About This Project</h1>

        <p className="mb-4 text-lg leading-relaxed">
          This project is built solely for educational and personal portfolio purposes. It aims to demonstrate frontend development skills using React, Redux, Firebase Authentication, and OpenAI’s GPT API integration for movie recommendations.
        </p>

        <p className="mb-4 text-lg leading-relaxed">
          This site is <span className="font-semibold">not affiliated with, endorsed by, or connected to Netflix Inc.</span> or any of its subsidiaries. All trademarks and logos used or referenced (if any) are the property of their respective owners.
        </p>

        <p className="mb-4 text-lg leading-relaxed">
          No personal user data is stored, collected, or used. Authentication is simulated and only accepts dummy credentials for demo purposes. This project is open-source and publicly available on GitHub.
        </p>

        <p className="mt-6 text-center text-sm text-gray-400">
          If you're a representative of Netflix or Vercel and believe this page still violates any policy, please contact the developer for immediate correction or removal.
        </p>
      </div>
    </div>
  );
};

export default About;
