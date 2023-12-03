/* eslint-disable react/prop-types */

import { SlDislike } from "react-icons/sl";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const ForumPost = ({ post, onVote }) => {
  const [votingState, setVotingState] = useState(post.votingState);

  const handleVote = async (voteType) => {
    try {
      const newVoteType = votingState === voteType ? null : voteType;
      setVotingState(newVoteType);
      onVote(post._id, newVoteType);
      await fetch(`http://localhost:5000/api/forum-posts/${post._Id}/vote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ voteType: newVoteType }),
      });
    } catch (error) {
      console.error("Error handling vote:", error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h3 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h3>
      <p className="text-gray-600 mb-4">{post.content}</p>

      <div className="flex flex-col sm:flex-row  items-center">
        <button
          onClick={() => handleVote("upvote")}
          className={`py-0 px-0 lg:py-2 lg:px-4 rounded-md mb-2 sm:mb-0 ${
            votingState === "upvote" ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <FaHeart></FaHeart>
        </button>
        <button
          onClick={() => handleVote("downvote")}
          className={`py-2 px-4 rounded-md ${
            votingState === "downvote" ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <SlDislike></SlDislike>
        </button>
      </div>

      <div className="lg:flex  items-center">
        <span className="text-gray-600  lg:pl-4">{post.upvotes}</span>
        <span className="pl-5 lg:pl-9 text-gray-600">{post.downvotes}</span>
      </div>
    </div>
  );
};

export default ForumPost;
