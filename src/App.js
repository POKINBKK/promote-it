import React from "react";
import "./App.css";
import {
  FaPaintBrush,
  FaFileImage,
  FaSimplybuilt,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaGrinStars,
} from "react-icons/fa";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

function App() {
  /**
   * PurgeCSS:
   * bg-gray-50
   * bg-gray-100
   * bg-gray-200
   * bg-gray-300
   * bg-gray-400
   * bg-gray-500
   * bg-gray-600
   * bg-gray-700
   * bg-gray-800
   * bg-gray-900
   * bg-red-50
   * bg-red-100
   * bg-red-200
   * bg-red-300
   * bg-red-400
   * bg-red-500
   * bg-red-600
   * bg-red-700
   * bg-red-800
   * bg-red-900
   * bg-yellow-50
   * bg-yellow-100
   * bg-yellow-200
   * bg-yellow-300
   * bg-yellow-400
   * bg-yellow-500
   * bg-yellow-600
   * bg-yellow-700
   * bg-yellow-800
   * bg-yellow-900
   * bg-green-50
   * bg-green-100
   * bg-green-200
   * bg-green-300
   * bg-green-400
   * bg-green-500
   * bg-green-600
   * bg-green-700
   * bg-green-800
   * bg-green-900
   * bg-blue-50
   * bg-blue-100
   * bg-blue-200
   * bg-blue-300
   * bg-blue-400
   * bg-blue-500
   * bg-blue-600
   * bg-blue-700
   * bg-blue-800
   * bg-blue-900
   * bg-indigo-50
   * bg-indigo-100
   * bg-indigo-200
   * bg-indigo-300
   * bg-indigo-400
   * bg-indigo-500
   * bg-indigo-600
   * bg-indigo-700
   * bg-indigo-800
   * bg-indigo-900
   * bg-purple-50
   * bg-purple-100
   * bg-purple-200
   * bg-purple-300
   * bg-purple-400
   * bg-purple-500
   * bg-purple-600
   * bg-purple-700
   * bg-purple-800
   * bg-purple-900
   * bg-pink-50
   * bg-pink-100
   * bg-pink-200
   * bg-pink-300
   * bg-pink-400
   * bg-pink-500
   * bg-pink-600
   * bg-pink-700
   * bg-pink-800
   * bg-pink-900
   **/
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

  const [artistName, setArtistName] = React.useState("Your Artist(s) Name");
  const [songTitle, setSongTitle] = React.useState("Your Title");
  const [selectedStreaming, setSelectedStreaming] = React.useState([]);
  const [coverColor, setCoverColor] = React.useState("bg-pink-400");
  const [artwork, setArtwork] = React.useState(
    `${process.env.PUBLIC_URL}/asset/dummy_songcover.png`
  );
  const [logo, setLogo] = React.useState(
    `${process.env.PUBLIC_URL}/asset/dummy_logo.png`
  );
  const [fontMode, setFontMode] = React.useState("w");
  const [musicType, setMusicType] = React.useState("0");
  const [language, setLanguage] = React.useState("th");

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
      setArtwork(`${process.env.PUBLIC_URL}/asset/dummy_songcover.png`);
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
      setLogo(`${process.env.PUBLIC_URL}/asset/dummy_logo.png`);
    }
  };

  const handleMode = (e) => {
    setFontMode(e.target.value);
  };
  const handleType = (e) => {
    setMusicType(e.target.value);
  };
  const handleLanguage = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="w-full">
      <div className="text-center bg-gradient-to-br from-pink-500 to-red-500 shadow-xl z-50">
        <div className="flex items-center justify-center">
          <p className="text-3xl text-white header-style">Promote it! by</p>
          <img
            src={`${process.env.PUBLIC_URL}/asset/pok_logo_white.png`}
            className="w-16 ml-4"
            alt="pok supakit logo"
          />
        </div>
      </div>
      <div className="w-full px-8 py-4 grid grid-cols-4 gap-2 z-40">
        <div className="col-span-1 p-2 border rounded-xl bg-gray-50 shadow-md">
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
            <p className="text-xl pb-2">Song/EP./Album Title</p>
            <input
              onChange={handleSongTitle}
              className="border rounded-xl h-12 w-full text-xl px-2 focus-within:border-pink-500 focus:outline-none"
            />
          </div>
          <div className="w-full pt-4">
            <p className="text-xl pb-2">Language</p>
            <div>
              <input
                type="radio"
                id="th"
                name="lang"
                value="th"
                className="w-8"
                onClick={handleLanguage}
                defaultChecked
              />
              <label htmlFor="white" className="text-lg">
                Thai
              </label>
              <br />
              <input
                type="radio"
                id="en"
                name="lang"
                value="en"
                className="w-8"
                onClick={handleLanguage}
              />
              <label htmlFor="black" className="text-lg">
                English
              </label>
              <br />
            </div>
          </div>
          <div className="w-full pt-4">
            <p className="text-xl pb-2">Type</p>
            <div>
              <input
                type="radio"
                id="song"
                name="type"
                value={0}
                className="w-8"
                onClick={handleType}
                defaultChecked
              />
              <label htmlFor="song" className="text-lg">
                Song
              </label>
              <br />
              <input
                type="radio"
                id="ep"
                name="type"
                value={1}
                className="w-8"
                onClick={handleType}
              />
              <label htmlFor="ep" className="text-lg">
                EP.
              </label>
              <br />
              <input
                type="radio"
                id="album"
                name="type"
                value={3}
                className="w-8"
                onClick={handleType}
              />
              <label htmlFor="album" className="text-lg">
                Album
              </label>
              <br />
            </div>
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
            <p className="text-md pb-1 text-red-600">(recommended : up to 4)</p>
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
              (recommended : more than 1000px*1000px and square)
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
              (recommended : more than 800px*800px and square)
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
        <div className="col-span-3 items-center justify-center pl-4">
          <div className="pb-2 flex items-center justify-center">
            <FaSimplybuilt className="w-12 mt-2" size={24} />
            <p className="text-3xl">Preview</p>
          </div>
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
                {language === "th"
                  ? musicType === "0"
                    ? 'สามารถฟังเพลงใหม่จาก "' + artistName + '"'
                    : musicType === "1"
                    ? 'สามารถฟังEP.ใหม่จาก "' + artistName + '"'
                    : 'สามารถฟังอัลบั้มใหม่จาก "' + artistName + '"'
                  : musicType === "0"
                  ? 'New Song from "' + artistName + '"'
                  : musicType === "1"
                  ? 'New EP. from "' + artistName + '"'
                  : 'New Album from "' + artistName + '"'}
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
                {language === "th" ? "ได้แล้ววันนี้ที่" : "Available now on"}
              </p>
              <div className="pt-3 flex items-center justify-center overflow-x-hidden">
                {selectedStreaming.map((item) => (
                  <img
                    key={item.id}
                    className="w-1/6 mx-4"
                    src={
                      `${process.env.PUBLIC_URL}/asset/streaming-icon-` +
                      fontMode +
                      `/` +
                      item.name +
                      `.png`
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
          <div className="w-full border rounded-xl mt-8 bg-gray-50 shadow-md">
            <div className="py-6 flex w-fit mx-auto">
              <FaGrinStars className="w-12 text-yellow-400 mt-2" size={28} />
              <p className="text-4xl">Support me!</p>
            </div>
            <div className="flex w-fit mx-auto pb-4">
              <a
                href="https://www.youtube.com/channel/UCp-1AwMqegD9rj4SPKtw3sg"
                target="_blank"
                rel="noreferrer"
              >
                <div className="py-2 px-4 flex">
                  <FaYoutube className="w-12 mt-1 text-red-500" size={28} />
                  <p className="text-2xl">POK SUPAKIT</p>
                </div>
              </a>
              <a
                href="https://www.facebook.com/poksupakitishere"
                target="_blank"
                rel="noreferrer"
              >
                <div className="py-2 px-4 flex">
                  <FaFacebook className="w-12 mt-1 text-blue-600" size={28} />
                  <p className="text-2xl">POK SUPAKIT</p>
                </div>
              </a>
              <a
                href="https://www.instagram.com/p_o.k/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="py-2 px-4 flex">
                  <FaInstagram
                    className="w-12 mt-2 text-purple-600"
                    size={28}
                  />
                  <p className="text-2xl">p_o.k</p>
                </div>
              </a>
            </div>
            <div className="border-t py-4 text-center">
              <p>© Promote it! by POK SUPAKIT 2021, All Right Reserved. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
