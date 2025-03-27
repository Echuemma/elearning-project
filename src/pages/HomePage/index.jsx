import { BookOpen } from "lucide-react";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-4xl font-bold text-blue-600 flex items-center gap-2">
        <BookOpen className="w-8 h-8 text-blue-600" />
        Welcome to eLearning
      </h1>
      <p className="text-gray-700 mt-4 text-lg max-w-md">
        Explore a variety of courses and improve your skills with our platform.
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-blue-500 rounded-lg shadow-md hover:bg-blue-700 transition flex items-center gap-2">
        <BookOpen className="w-5 h-5" />
        Get Started
      </button>
    </div>
  );
}

export default Home;
