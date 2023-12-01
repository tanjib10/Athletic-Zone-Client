const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      img: "https://i.ibb.co/6s90fgD/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg",
      name: "John Doe",
      quote:
        "'Athletic Zone has transformed my fitness journey. The trainers are incredible, and the variety of classes keeps me motivated. I've achieved results I never thought possible!'",
    },
    {
      id: 2,
      img: "https://i.ibb.co/LJyNSCJ/alex-suprun-ZHv-M3-XIOHo-E-unsplash.jpg",
      name: "Jane Smith",
      quote:
        "'I love the positive and supportive community at Athletic Zone. The personalized training plans have helped me reach my fitness goals faster than I expected.'",
    },
    {
      id: 3,
      img: "https://i.ibb.co/jb2rJSv/alexander-hipp-i-EEBWg-Y-6l-A-unsplash.jpg",
      name: "Chris Johnson",
      quote:
        "'The mindfulness sessions have been a game-changer for me. Athletic Zone goes beyond physical fitness and focuses on overall well-being. I feel more energized.'",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#31304D]">
          Testimonials & Success Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <p className="text-gray-700 text-lg mb-4">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={testimonial.img}
                    alt={testimonial.name}
                  />
                </div>
                <div className="ml-4">
                  <div className="text-gray-800 font-semibold">
                    {testimonial.name}
                  </div>
                  {/* You can also add additional details like occupation, location, etc. */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
