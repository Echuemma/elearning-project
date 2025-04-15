import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BookOpen } from "lucide-react";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1
        className="text-4xl font-bold text-blue-600 flex items-center gap-2"
        data-aos="fade-down"
      >
        <BookOpen className="w-8 h-8 text-blue-600" />
        Welcome to eLearning
      </h1>
      
      <p className="text-gray-700 mt-4 text-lg max-w-md" data-aos="fade-up">
        Explore a variety of courses and improve your skills with our platform.
      </p>
      
      <button
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition flex items-center gap-2"
        data-aos="zoom-in"
      >
        <BookOpen className="w-5 h-5" />
        Get Started
      </button>

      <p data-aos="fade-right" className="mt-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nobis!
      </p>

      <p data-aos="fade-left" className="mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quod, fugit dolores illo aliquid est inventore harum veniam reiciendis quas, ex sit tenetur neque recusandae voluptatum iusto similique, odit sunt!
      </p>

      <p data-aos="flip-up" className="mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perferendis fuga et? Corrupti sed laboriosam voluptates autem, error ipsa iure cumque architecto laborum! Vel magnam ea unde ipsam praesentium voluptatem!
      </p>
    </div>
  );
}

export default Home;
