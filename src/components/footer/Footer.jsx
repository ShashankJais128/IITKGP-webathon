import React from "react";
import bg from "../../public/bgex.png";
import squad from "../../public/squad.png";
import lin from "../../public/lin.png";
import yt from "../../public/yt.png";
import twi from "../../public/twi.png";
import fb from "../../public/fb.png";
import ig from "../../public/ig.png";

function Footer() {
  return (
    <div
      className="bg-black bg-cover  bg-bottom bg-fixed pb-8"
      style={{
        backgroundImage: ` url(${bg})`,
      }}
    >
      <div className="flex w-full justify-center py-5 items-center">
        <img src={squad} alt="" className="w-44" />
      </div>
      <div className="flex w-full justify-center space-x-8 sm:space-x-12">
        <a href="https://www.instagram.com/">
          <img src={ig} alt="" />
        </a>
        <a href="https://www.facebook.com/">
          <img src={fb} alt="" />
        </a>
        <a href="https://www.youtube.com/">
          <img src={yt} alt="" />
        </a>
        <a href="https://www.linkedin.com/feed/">
          <img src={lin} alt="" />
        </a>
        <a href="https://twitter.com/">
          <img src={twi} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
