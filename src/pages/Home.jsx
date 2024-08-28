import React from "react";
import drawing from "../asset/huve.png";
import ink from "../asset/INK.png";
import Button2 from "../components/Button2";
import linkedin from "../asset/linkedin.png";
import twitter from "../asset/social-media.png";
import instagram from "../asset/instagram.png";
import telegram from "../asset/telegram.png";
import { Link } from "react-router-dom";
import Reload from "../components/Reload";

const Home = () => {
  Reload();
  return (
    <div className="inria-sans-light h-fit py-20 md:py-44 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-36">
      
      <div className="flex flex-col items-start gap-4 md:gap-8 text-left justify-between mt-0 md:-mt-28 w-full md:w-[750px] h-auto md:h-[250px]">
        <p className="text-2xl md:text-3xl">
          Put soul into your words and bring it to life.
        </p>
        <p className="text-5xl md:text-8xl font-semibold">BlogHive</p>
        <p className="text-2xl md:text-3xl">
          Unleash your thoughts, share your stories, and connect with a
          community buzzing with inspiration.
        </p>
        <div className="w-full flex justify-center md:justify-start">
          <Button2 text="Get Started" link="/login" />
        </div>
        <div className="flex items-center justify-center md:justify-between gap-6 md:gap-10 mt-4">
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/mark-zuckerberg-618bba58/"
          >
            <img className="h-6 md:h-7 hover:scale-110" src={linkedin} alt="" />
          </Link>
          <Link target="_blank" to="https://www.instagram.com/zuck/">
            <img className="h-6 md:h-7 hover:scale-110" src={instagram} alt="" />
          </Link>
          <Link target="_blank" to="https://twitter.com/finkd">
            <img className="h-6 md:h-7 hover:scale-110" src={twitter} alt="" />
          </Link>
          <Link target="_blank" to="https://telegram.me/NatGeoAll">
            <img className="h-6 md:h-7 hover:scale-110" src={telegram} alt="" />
          </Link>
        </div>
      </div>
      
      {/* Only display images on larger screens */}
      <div className="relative h-72 md:h-96 w-full md:w-[500px] mt-10 md:mt-0 hidden md:block">
        <img
          src={drawing}
          className="h-72 md:h-96 absolute object-contain top-0"
          alt=""
        />
        <img
          src={ink}
          className="h-48 md:h-72 absolute top-5 md:top-5 right-8 md:right-24"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
