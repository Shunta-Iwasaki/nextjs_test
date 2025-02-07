"use client";
import { useState } from "react";

const LikeButton = () => {
    const [likeCount, setLikeCount] = useState(0);

    return (
        <button onClick={() => setLikeCount(likeCount + 1)} className="p-2 border rounded-md bg-blue-500 text-white">
            いいね {likeCount}
        </button>
    );
};

export default LikeButton;