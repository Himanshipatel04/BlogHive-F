import React from "react";
import { Link } from "react-router-dom";
import write from "../asset/copywriting.gif";
import read from "../asset/newspaper.gif";
import photo from "../asset/new-story.png";

const Story = () => {
  return (
    <div className="h-fit p-6 md:p-14 md:pl-28 flex flex-col gap-10 md:gap-14">
      <p className="text-5xl md:text-6xl inria-sans-bold text-center md:text-left">
        Where Every Story Finds Its Buzz
      </p>
      <div className="flex flex-col md:flex-row gap-8 md:gap-32 items-center">
        <div className="flex flex-col gap-6 md:gap-10 w-full md:w-[800px] inria-sans-regular text-lg md:text-2xl tracking-wide">
          <p>
            Welcome to BlogHive, where stories come to life! Our platform is
            designed to empower both seasoned writers and budding wordsmiths to
            share their unique perspectives with the world.{" "}
          </p>
          <p>
            At BlogHive, we believe that everyone has a story to tell, and our
            story page is the perfect place to share and explore those stories.
            Join our community of writers and readers today, and let your voice
            be heard!
          </p>
          <p>
            We're more than just a blogging platform. We're a community of
            passionate writers, thinkers, and creators, all united by our love
            for storytelling. Our journey began with a simple idea: to provide a
            platform where voices from all walks of life could be heard, where
            stories could be shared, and where connections could be made.
          </p>
        </div>
        <img src={photo} className="h-64 md:h-96 object-contain" alt="" />
      </div>
      <div className="flex flex-col gap-4 md:gap-6 mt-6">
        <div className="flex items-center justify-center md:justify-start">
          <p className="text-2xl md:text-3xl inria-sans-regular2">Start Reading</p>
          <Link to="/blogs" className="ml-2">
            <img className="h-8 md:h-10" src={read} alt="Start Reading" />
          </Link>
        </div>
        <div className="flex items-center justify-center md:justify-start">
          <p className="text-2xl md:text-3xl inria-sans-regular2">Start Writing</p>
          <Link to="/write" className="ml-2">
            <img className="h-8 md:h-10" src={write} alt="Start Writing" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Story;
