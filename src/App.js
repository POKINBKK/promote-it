import React from "react";
import "./App.css";
import { FaPaintBrush, FaFileImage } from "react-icons/fa";

function App() {
  const streamingPlatforms = [
    {
      id: 1,
      name: "joox",
      display: "Joox",
    },
    {
      id: 2,
      name: "spotify",
      display: "Spotify",
    },
    {
      id: 3,
      name: "applemusic",
      display: "Apple Music",
    },
    {
      id: 4,
      name: "itunes",
      display: "iTunes",
    },
    {
      id: 5,
      name: "tidal",
      display: "Tidal",
    },
    {
      id: 6,
      name: "youtubemusic",
      display: "Youtube Music",
    },
    {
      id: 7,
      name: "soundcloud",
      display: "SoundCloud",
    },
    {
      id: 8,
      name: "deezer",
      display: "Deezer",
    },
    {
      id: 9,
      name: "kkbox",
      display: "KKBox",
    },
    {
      id: 10,
      name: "trueidmusic",
      display: "TrueID Music",
    },
  ];

  const [artistName, setArtistName] = React.useState("Your Artist Name");
  const [songTitle, setSongTitle] = React.useState("Your Song Title");

  const handleArtistName = (e) => {
    setArtistName(e.target.value);
  };

  const handleSongTitle = (e) => {
    setSongTitle(e.target.value);
  };

  return (
    <div className="w-full">
      <div className="text-center py-8">
        <p className="font-bold">Single Cover Editor by POK SUPAKIT</p>
      </div>
      <div className="w-full px-8 pb-8 grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <div
            id="cover-image"
            className="default-cover bg-red-200 text-center"
          >
            <p className="pt-20 text-4xl">
              สามารถฟังเพลงใหม่จาก "{artistName}"
            </p>
            <p className="pt-8 text-6xl">{songTitle}</p>
          </div>
        </div>
        <div className="col-span-1 p-2 border rounded">
          <div className="pb-2 border-b flex">
            <FaPaintBrush className="w-12 mt-2" size={24} />
            <p className="text-4xl">Editor</p>
          </div>
          <div className="w-full pt-4">
            <p className="text-xl pb-2">Artist Name(s)</p>
            <input
              onChange={handleArtistName}
              className="border rounded-xl h-12 w-full text-xl px-2 focus-within:border-pink-500 focus:outline-none"
            />
          </div>
          <div className="w-full pt-4">
            <p className="text-xl pb-2">Song Title</p>
            <input
              onChange={handleSongTitle}
              className="border rounded-xl h-12 w-full text-xl px-2 focus-within:border-pink-500 focus:outline-none"
            />
          </div>
          <div className="w-full pt-4">
            <p className="text-xl pb-2">Select Streaming Platforms</p>
            <div className="w-full">
              {streamingPlatforms.map((item) => (
                <div key={item.id}>
                  <input
                    className="w-8"
                    type="checkbox"
                    id={item.name}
                    name={item.name}
                    value={item.id}
                  />
                  <label className="text-lg" htmlFor={item.name}>
                    {item.display}
                  </label>
                  <br />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full pt-4">
            <p className="text-xl pb-2">Upload Your Artwork</p>
            <input className="border rounded-xl h-12 w-full text-xl px-2 focus-within:border-pink-500 focus:outline-none" />
          </div>
          <div className="w-full pt-4">
            <p className="text-xl pb-2">Upload Your Logo</p>
            <input className="border rounded-xl h-12 w-full text-xl px-2 focus-within:border-pink-500 focus:outline-none" />
          </div>
          <div className="w-full pt-4">
            <p className="text-xl pb-2">Upload Background Image</p>
            <input className="border rounded-xl h-12 w-full text-xl px-2 focus-within:border-pink-500 focus:outline-none" />
          </div>
          <div className="w-full pt-4">
            <p className="text-xl pb-2">Select Background Color</p>
            <input className="border rounded-xl h-12 w-full text-xl px-2 focus-within:border-pink-500 focus:outline-none" />
          </div>
          <div className="w-full py-4">
            <button className="flex mx-auto bg-pink-500 text-md p-2 rounded text-white hover:bg-pink-600 focus:outline-none">
              <FaFileImage className="my-auto" />
              <p className="pl-2">Save Image</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
