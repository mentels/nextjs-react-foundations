'use client'

import { useState } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes((prevLikes) => prevLikes + 1);
  }

  return <button onClick={handleClick}>Likes ({likes})</button>
}