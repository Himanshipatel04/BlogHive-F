import React from "react";
import drawing from "../asset/huve.png";
import ink from "../asset/INK.png";
import Button2 from "../components/Button2";
import linkedin from "../asset/linkedin.png";
import twitter from "../asset/social-media.png";
import instagram from "../asset/instagram.png";
import telegram from "../asset/telegram.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="inria-sans-light h-fit py-52 flex items-center justify-between pr-36 pl-36  ">
      <div className="flex flex-col items-start gap-8 text-left justify-between -mt-28 w-[750px] h-[250px] ">
        <p className="text-3xl ">
          Put soul into your words and bring it to life.
        </p>
        <p className="text-8xl font-semibold">BlogHive</p>
        <p className="text-3xl ">
          Unleash your thoughts, share your stories, and connect with a
          community buzzing with inspiration.
        </p>
        <Button2 text="Get Started" link="/login"/>
        <div className="flex items-center justify-between gap-10 mt-4">
           <Link to=""> <img className="h-7 hover:scale-110"  src={linkedin} alt="" /></Link>
           <Link to=""> <img className="h-7 hover:scale-110"  src={instagram} alt="" /></Link>
           <Link to=""> <img className="h-7 hover:scale-110"  src={twitter} alt="" /></Link>
           <Link to=""> <img className="h-7 hover:scale-110"  src={telegram} alt="" /></Link>
        </div>
      </div>
      <div className="relative h-96 w-[500px] -mt-12 ">
        <img
          src={drawing}
          className="h-96 bsolute object-contain top-0"
          alt=""
        />
        <img src={ink} className="h-72 absolute top-5 right-24" alt="" />
      </div>
    </div>
  );
};

export default Home;
