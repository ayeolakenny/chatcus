import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Join = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [pfpSrc, setPfpSrc] = useState("");

  useEffect(() => {
    const { room } = queryString.parse(location.search);
    console.log(queryString.parse(location.search));
    if (room) {
      setRoom(room);
    }
  }, []);
  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="sm:text-3xl md:text-5xl mt-40 mb-10 overflow-y-hidden">Welcome to Chatcus!</h1>
      <div className="flex flex-col sm:text-sm md:text-lg">
        <input
          placeholder="Name"
          className="w-70 mb-2 p-2 bg-green-100 outline-none"
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
          required
        ></input>
        <input
          placeholder="Room"
          className="w-70 mb-2 p-2 bg-green-100 outline-none"
          type="text"
          value={room}
          onChange={(event) => {
            setRoom(event.target.value);
          }}
          required
        ></input>
        <input
          placeholder="Profile Pic Link"
          className="w-70 p-2 bg-green-100 outline-none"
          type="text"
          value={pfpSrc}
          onChange={(event) => {
            setPfpSrc(event.target.value);
          }}
        ></input>
      </div>
      <Link
        onClick={(event) => (!name || !room ? event.preventDefault() : null)}
        to={`/chat?name=${name}&room=${room}&pfp=${pfpSrc}`}
      >
        <button
          className="bg-green-700 text-white mt-4 sm:text-sm md:text-lg p-4 rounded-md hover:bg-green-900"
          type="submit"
        >
          Sign in
        </button>
      </Link>
    </div>
  );
};

export default Join;
