import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust the animation duration as needed
      once: true, // Whether animation should happen only once
      easing: "ease-out-back", // Choose the easing function
    });
  }, []);

  return (
    <section className="py-16 mb-12 bg-[#F0ECE5]" data-aos="fade-up">
      <div className="container mx-auto">
        <h2
          className="text-[#31304D] text-2xl lg:text-4xl font-bold mb-12 text-center"
          data-aos="fade-up"
        >
          About Our Organization
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center"
          data-aos="fade-up"
        >
          <div className="col-span-2">
            <p
              className="text-[#161A30] px-4 lg:px-8 text-base leading-relaxed"
              data-aos="fade-up"
            >
              Welcome to Athletic Zone, where fitness meets inspiration! Our
              mission is to guide and empower you on your fitness journey,
              promoting a healthy lifestyle and well-being.
            </p>
            <p
              className="text-[#161A30] px-4 lg:px-8 text-base leading-relaxed mt-4"
              data-aos="fade-up"
            >
              At Athletic Zone, we offer a diverse range of fitness programs
              designed to cater to all levels of fitness enthusiasts. Our
              experienced trainers are committed to creating a supportive and
              motivating environment to help you reach your goals.
            </p>
          </div>
          <div className="col-span-1" data-aos="fade-left">
            <img
              className="w-full h-auto object-cover pl-8 lg:pl-0 rounded-md shadow-md"
              src="https://i.ibb.co/pJdC7Xc/jelmer-assink-gze-Tj-Gu3b-k-unsplash.jpg"
              alt="About Us"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
