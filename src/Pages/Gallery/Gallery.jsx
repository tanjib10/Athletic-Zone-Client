import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchImages = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/images?skip=${(page - 1) * 12}&limit=12`
      );
      const newImages = await response.json();

      if (newImages.length === 0) {
        setHasMore(false);
        return;
      }

      setImages((prevImages) => [...prevImages, ...newImages]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto mt-8">
        <div className="bg-[#161A30] text-white text-center py-4 mb-8 rounded-md">
          <h1 className="text-4xl font-bold">Explore Our Gallery</h1>
        </div>
        <InfiniteScroll
          dataLength={images.length}
          next={fetchImages}
          hasMore={hasMore}
          loader={
            <span className="loading loading-spinner ml-20 lg:ml-[550px] my-12 lg:my-[150px] loading-lg"></span>
          }
          endMessage={<p className="text-center mt-4">No more images</p>}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image) => (
              <div
                key={image._id}
                className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition duration-300"
              >
                <img
                  src={image.image}
                  alt={`Image ${image._id}`}
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Gallery;
