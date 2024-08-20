"use client";

import { useState } from "react";

export default function LikeButton() {
  // useState hook to manage the 'likes' state, initialized to 0
  const [likes, setLikes] = useState<number>(0);

  // Function to handle button clicks, incrementing the 'likes' state by 1
  function handleClick() {
    setLikes(likes + 1);
  }

  {
    /* Button that displays the current number of likes and calls handleClick on click */
  }
  return (
    <button
      onClick={handleClick}
      className="bg-red-500 hover:bg-red-70 text-white py-2 px-4 rounded"
    >
      Like [{likes}]
    </button>
  );
}
