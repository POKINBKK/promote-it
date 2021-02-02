import React from "react";

function CoverStyleVinyl(props) {
  return (
    <div
      id="cover-image"
      className={"default-cover relative " + props.coverColor + " text-center"}
    >
      <div>
        <p
          className={
            props.fontMode === "b"
              ? "text-gray-900 pt-14 text-3xl"
              : "text-white pt-14 text-3xl"
          }
        >
          {props.language === "th"
            ? props.musicType === "0"
              ? 'สามารถฟังเพลงใหม่จาก "' + props.artistName + '"'
              : props.musicType === "1"
              ? 'สามารถฟัง EP ใหม่จาก "' + props.artistName + '"'
              : 'สามารถฟังอัลบั้มใหม่จาก "' + props.artistName + '"'
            : props.musicType === "0"
            ? 'New Song from "' + props.artistName + '"'
            : props.musicType === "1"
            ? 'New EP from "' + props.artistName + '"'
            : 'New Album from "' + props.artistName + '"'}
        </p>
        <p
          className={
            props.fontMode === "b"
              ? "pt-4 text-7xl text-gray-900"
              : "pt-4 text-7xl text-white"
          }
        >
          {props.songTitle}
        </p>
      </div>
      <div className="py-8 flex items-center justify-center">
        <img
          src={props.artwork}
          className="coverimg-size shadow-2xl z-40"
          alt="your song cover"
        />
        <img
          src={`${process.env.PUBLIC_URL}/asset/vinyl.png`}
          className="w-72 z-30"
          alt="vinyl"
        />
        <img
          src={props.artwork}
          className="w-60 right-64 transform rotate-45 shadow-2xl z-20 absolute"
          alt="your song cover"
        />
      </div>
      <div>
        <p
          className={
            props.fontMode === "b"
              ? "pt-4 text-3xl text-gray-900"
              : "pt-4 text-3xl text-white"
          }
        >
          {props.language === "th" ? "ได้แล้ววันนี้ที่" : "Available now on"}
        </p>
        <div className="pt-3 flex items-center justify-center overflow-x-hidden">
          {props.selectedStreaming.map((item) => (
            <img
              key={item.id}
              className="w-1/6 mx-4"
              src={
                `${process.env.PUBLIC_URL}/asset/streaming-icon-` +
                props.fontMode +
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
        src={props.logo}
        className="w-16 absolute bottom-2 right-2"
        alt="your logo"
      />
    </div>
  );
}

export default CoverStyleVinyl;
