import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo1 from "/public/images/showroom_1.jpg";
import Logo2 from "/public/images/showroom2.jpg";
import YouTube from "react-youtube";
const MainShowRoom = ({ projects }) => {
  const opts = {
    width: "60%",
    height: "500px",
    // margin: "0 auto",
  };

  return (
    <div className="showroom-conatiner">
      <div className="showroom-images">
        <Image
          src={Logo2}
          alt="Photo with windows"
          className="show_room_photo"
        />
        <Image
          src={Logo1}
          alt="Photo with windows"
          className="show_room_photo"
        />
      </div>
      <div className="yt">
        <YouTube
          videoId="sTnm5jvjgjM"
          opts={opts}
        />
      </div>
    </div>
  );
};

export default MainShowRoom;
