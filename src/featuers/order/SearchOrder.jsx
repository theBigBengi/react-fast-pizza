import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!query) return;

    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='search order #'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='input w-28 h-10 focus:ring-opacity-50 sm:w-64 sm:focus:w-72'
      />
    </form>
  );
}
