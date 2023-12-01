const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/NFnYs7v/dumbbells-floor-gym-ai-generative.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Eat Sleep, Gym, and Repeat.
          </h1>
          <p className="mb-5 text-xl text-slate-200">
            Sore today, strong tomorrow..
          </p>
          <button className="btn btn-ghost bg-[#31304D] text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
