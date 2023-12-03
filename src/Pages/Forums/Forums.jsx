import { useEffect } from "react";
import { useState } from "react";
import ForumPost from "./ForumPost";
import Pagination from "./Pagination";

const Forums = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:5000/api/forum-posts?page=${currentPage}`
      );
      const data = await response.json();

      if (data && data.forumPosts) {
        setPosts(data.forumPosts);
        setTotalPages(data.totalPages);
      } else {
        console.error("Invalid data format received from the API");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const handleVote = async (postId, voteType) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/forum-posts/${postId}/vote`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ voteType }),
        }
      );

      const result = await response.json();

      // Update UI
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === postId
            ? { ...post, upvotes: result.upvotes, downvotes: result.downvotes }
            : post
        )
      );
    } catch (error) {
      console.error("Error handling vote:", error);
    }
  };

  return (
    <div className="container mx-auto mt-8 p-4 lg:p-8">
      <h2 className="text-4xl font-bold mb-6 text-center text-[#31304D]">
        Recent Forums
      </h2>

      {loading ? (
        <p className="text-center">
          <span className="my-16 loading loading-infinity loading-md"></span>
        </p>
      ) : (
        <>
          {posts.map((post) => (
            <ForumPost key={post._id} post={post} onVote={handleVote} />
          ))}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      )}
    </div>
  );
};

export default Forums;
