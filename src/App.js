import React from "react";
import "./App.css";
import { FaPaintBrush, FaFileImage } from "react-icons/fa";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

function App() {
  const streamingPlatforms = [
    {
      id: "1",
      name: "joox",
      display: "Joox",
    },
    {
      id: "2",
      name: "spotify",
      display: "Spotify",
    },
    {
      id: "3",
      name: "applemusic",
      display: "Apple Music",
    },
    {
      id: "4",
      name: "itunes",
      display: "iTunes",
    },
    {
      id: "5",
      name: "tidal",
      display: "Tidal",
    },
    {
      id: "6",
      name: "youtubemusic",
      display: "Youtube Music",
    },
    {
      id: "7",
      name: "soundcloud",
      display: "SoundCloud",
    },
    {
      id: "8",
      name: "deezer",
      display: "Deezer",
    },
    {
      id: "9",
      name: "kkbox",
      display: "KKBox",
    },
  ];

  const colors = [
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
  ];

  const levels = [
    "50",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ];

  const [artistName, setArtistName] = React.useState("Your Artist Name");
  const [songTitle, setSongTitle] = React.useState("Your Song Title");
  const [selectedStreaming, setSelectedStreaming] = React.useState([]);
  const [coverColor, setCoverColor] = React.useState("bg-red-200");
  const [artwork, setArtwork] = React.useState("asset/dummy_songcover.png");
  const [logo, setLogo] = React.useState("asset/dummy_logo.png");
  const [fontMode, setFontMode] = React.useState("w");

  const handleArtistName = (e) => {
    setArtistName(e.target.value);
  };

  const handleSongTitle = (e) => {
    setSongTitle(e.target.value);
  };

  const handleStreaming = (e) => {
    let cloneSelectedStreaming = [...selectedStreaming];
    let item;
    let isUncheck = false;
    for (let i = 0; i < streamingPlatforms.length; i++) {
      if (streamingPlatforms[i].id === e.target.value) {
        item = streamingPlatforms[i];
      }
    }
    if (cloneSelectedStreaming.length > 0) {
      for (let i = 0; i < cloneSelectedStreaming.length; i++) {
        if (cloneSelectedStreaming[i].id === item.id) {
          isUncheck = true;
          cloneSelectedStreaming.splice(i, 1);
        }
      }
    }
    if (!isUncheck) {
      cloneSelectedStreaming = [...cloneSelectedStreaming, item];
    }
    setSelectedStreaming(cloneSelectedStreaming);
  };

  const handlebgColor = (color, level) => {
    setCoverColor("bg-" + color + "-" + level);
  };

  const handleSaveAs = () => {
    domtoimage
      .toBlob(document.getElementById("cover-image"))
      .then(function (blob) {
        window.saveAs(blob, "single-cover.png");
      });
  };

  const handleArtwork = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setArtwork(reader.result);
      }
    };
    try {
      reader.readAsDataURL(e.target.files[0]);
    } catch (error) {
      setArtwork("asset/dummy_songcover.png");
    }
  };

  const handleLogo = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setLogo(reader.result);
      }
    };
    try {
      reader.readAsDataURL(e.target.files[0]);
    } catch (error) {
      setLogo("asset/dummy_logo.png");
    }
  };

  const handleMode = (e) => {
    setFontMode(e.target.value);
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
            className={"default-cover relative " + coverColor + " text-center"}
          >
            <div>
              <p
                className={
                  fontMode === "b"
                    ? "text-gray-900 pt-14 text-3xl"
                    : "text-white pt-14 text-3xl"
                }
              >
                สามารถฟังเพลงใหม่จาก "{artistName}"
              </p>
              <p
                className={
                  fontMode === "b"
                    ? "pt-4 text-7xl text-gray-900"
                    : "pt-4 text-7xl text-white"
                }
              >
                {songTitle}
              </p>
            </div>
            <div className="py-8">
              <img
                src={artwork}
                className="coverimg-size mx-auto shadow-2xl"
                alt="your song cover"
              />
            </div>
            <div>
              <p
                className={
                  fontMode === "b"
                    ? "pt-4 text-3xl text-gray-900"
                    : "pt-4 text-3xl text-white"
                }
              >
                ได้แล้ววันนี้ที่
              </p>
              <div className="pt-2 flex items-center justify-center overflow-x-hidden">
                {selectedStreaming.map((item) => (
                  <img
                    key={item.id}
                    className="w-1/6 mx-4"
                    src={
                      "asset/streaming-icon-" +
                      fontMode +
                      "/" +
                      item.name +
                      ".png"
                    }
                    alt={item.display}
                  />
                ))}
              </div>
            </div>
            <img
              src={logo}
              className="w-16 absolute bottom-2 right-2"
              alt="your logo"
            />
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
            <p className="text-xl pb-2">Mode</p>
            <div>
              <input
                type="radio"
                id="white"
                name="mode"
                value="w"
                className="w-8"
                onClick={handleMode}
                defaultChecked
              />
              <label htmlFor="white" className="text-lg">
                Light
              </label>
              <br />
              <input
                type="radio"
                id="black"
                name="mode"
                value="b"
                className="w-8"
                onClick={handleMode}
              />
              <label htmlFor="black" className="text-lg">
                Dark
              </label>
              <br />
            </div>
          </div>
          <div className="w-full pt-4">
            <p className="text-xl pb-2">Select Streaming Platforms</p>
            <p className="text-md pb-1 text-red-600">
              (recommended at up to 4)
            </p>
            <div className="w-full">
              {streamingPlatforms.map((item) => (
                <div key={item.id}>
                  <input
                    className="w-8"
                    type="checkbox"
                    id={item.name}
                    name={item.name}
                    value={item.id}
                    onChange={handleStreaming}
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
            <p className="text-md pb-1 text-red-600">
              (reacommended at more than 1000px*1000px and square)
            </p>
            <input
              type="file"
              name="artwork-upload"
              id="image-input1"
              accept="image/*"
              onChange={handleArtwork}
              className="border pt-2 rounded-xl h-12 w-full text-xl px-2 focus-within:border-pink-500 focus:outline-none"
            />
          </div>
          <div className="w-full pt-4">
            <p className="text-xl pb-2">Upload Your Logo</p>
            <p className="text-md pb-1 text-red-600">
              (reacommended at more than 800px*800px and square)
            </p>
            <input
              type="file"
              name="logo-upload"
              id="image-input2"
              accept="image/*"
              onChange={handleLogo}
              className="border pt-2 rounded-xl h-12 w-full text-xl px-2 focus-within:border-pink-500 focus:outline-none"
            />
          </div>
          <div className="w-full pt-4">
            <p className="text-xl pb-2">Select Background Color</p>
            {colors.map((color) => (
              <div key={color} className="grid grid-cols-10 gap-1 pt-1">
                {levels.map((level) => (
                  <div
                    className={
                      "col-span-1 h-8 rounded cursor-pointer bg-" +
                      color +
                      "-" +
                      level
                    }
                    onClick={() => handlebgColor(color, level)}
                    key={level}
                  ></div>
                ))}
              </div>
            ))}
          </div>
          <div className="w-full py-4">
            <button
              onClick={handleSaveAs}
              className="flex mx-auto bg-pink-500 text-md p-2 rounded text-white hover:bg-pink-600 focus:outline-none"
            >
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
