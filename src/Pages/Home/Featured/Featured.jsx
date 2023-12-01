import { useEffect, useState } from "react";

const Featured = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/featured.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div className="my-16">
      <h3 className="text-center text-[#31304D] text-4xl font-bold mb-10">
        Our Features
      </h3>
      <div className="ml-20 lg:ml-14 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <div key={item.id}>
            <div className="card w-64 h-80 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={item.imageSrc} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{item.title}</h2>
                <h2 className="text-sm">{item.description}</h2>
                <p></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
