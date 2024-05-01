import React from "react";
import { Link } from "react-router-dom";
import write from "../asset/copywriting.gif";
import read from "../asset/newspaper.gif"
import photo from "../asset/new-story.png"

const Story = () => {
  return (
    <div className="h-fit p-14 pl-28 flex flex-col gap-14">
      <p className="text-6xl inria-sans-bold ">
        Where Every Story Finds Its Buzz
      </p>
     <div className="flex gap-32 ">
     <div className="flex flex-col gap-10 w-[800px] inria-sans-regular text-2xl tracking-wide space-y-3">
        <p>
          Welcome to BlogHive, where stories come to life! Our platform is
          designed to empower both seasoned writers and budding wordsmiths to
          share their unique perspectives with the world.{" "}
        </p>
        <p>
          At BlogHive, we believe that everyone has a story to tell, and our
          story page is the perfect place to share and explore those stories.
          Join our community of writers and readers today, and let your voice be
          heard!
        </p>
        <p>
          We're more than just a blogging platform. We're a community of
          passionate writers, thinkers, and creators, all united by our love for
          storytelling. Our journey began with a simple idea: to provide a
          platform where voices from all walks of life could be heard, where
          stories could be shared, and where connections could be made.
        </p>
      </div>
      <img src={photo} className="h-96" alt="" />
     </div>
      <div className="flex flex-col gap-6">
        <div className="flex ">
          <p className=" text-3xl inria-sans-regular2">Start Reading‎ ‎ ‎ </p>
          <Link to="/blogs">
          <img className="h-10" src={read} alt="" />
          </Link>
        </div>
        <div className="flex ">
          <p className=" text-3xl inria-sans-regular2">Start Writing‎ ‎ ‎ </p>
          <Link to="/write">
            <img className="h-10" src={write} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Story;
