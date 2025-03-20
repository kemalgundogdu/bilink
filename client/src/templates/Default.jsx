import React, { useEffect } from "react";
// router
import { Link } from "react-router";
// icons
import { RiTwitterXFill } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { FaMedium, FaGithub } from "react-icons/fa";

function Default() {
  useEffect(() => {
    document.body.classList.add("defaultThemeBody");
  }, []);

  return (
    <div className="max-w-[500px] mx-auto py-10 px-5">
      {/* image, name and description - hero section */}
      <div className="flex flex-col justify-center items-center gap-3">
        <img
          className="w-24 h-24 rounded-full border-3 border-white"
          src="./src/assets/examplePerson.png"
          alt="avatar"
        />
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl text-white">Kemal Gündoğdu</h1>
          <p className="text-gray-200 text-md mt-1">Software Developer</p>
        </div>
      </div>
      {/* social media links */}
      <div className="flex items-center gap-7 mt-7 justify-center w-full flex-wrap">
        <Link to={"https://instagram.com/kegundogdu"} target="_blank">
          <FiInstagram className="text-2xl text-cyan-300 hover:text-white transition-colors" />
        </Link>
        <Link to={"https://twitter.com/kegundogdu"} target="_blank">
          <RiTwitterXFill className="text-2xl text-cyan-300 hover:text-white transition-colors" />
        </Link>
        <Link to={"https://twitter.com/kegundogdu"} target="_blank">
          <FaMedium className="text-2xl text-cyan-300 hover:text-white transition-colors" />
        </Link>
        <Link to={"https://twitter.com/kegundogdu"} target="_blank">
          <FaGithub className="text-2xl text-cyan-300 hover:text-white transition-colors" />
        </Link>
      </div>
      {/* content */}
      <div className="mt-10">
        <div className="flex flex-col gap-5 mt-5 w-full">
          {/* title */}
          <h1 className="text-md uppercase text-cyan-300 w-full text-center">
            Useful Links
          </h1>
          {/* links */}
          <Link
            to={"https://roadmap.sh/"}
            target="_blank"
            className="text-cyan-700 bg-cyan-50 w-full text-center p-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-white"
          >
            Roadmap 🗺️
          </Link>
          <Link
            to={"https://roadmap.sh/"}
            target="_blank"
            className="text-cyan-700 bg-cyan-50 w-full text-center p-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-white"
          >
            English Education 📚
          </Link>
          <Link
            to={"https://roadmap.sh/"}
            target="_blank"
            className="text-cyan-700 bg-cyan-50 w-full text-center p-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-white"
          >
            Social Media Management Training 📚
          </Link>
          {/* title */}
          <h1 className="text-md uppercase text-cyan-300 w-full text-center">
            last posts
          </h1>
          {/* links */}
          <Link
            to={"https://roadmap.sh/"}
            target="_blank"
            className="text-cyan-700 bg-cyan-50 w-full text-center p-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-white"
          >
            Backend Learning 📚
          </Link>
          <Link
            to={"https://roadmap.sh/"}
            target="_blank"
            className="text-cyan-700 bg-cyan-50 w-full text-center p-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-white"
          >
            First Expo Project 🚀
          </Link>
          {/* title */}
          <h1 className="text-md uppercase text-cyan-300 w-full text-center">
            show your support
          </h1>
          {/* links */}
          <Link
            to={"https://roadmap.sh/"}
            target="_blank"
            className="text-cyan-700 bg-cyan-50 w-full text-center p-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-white"
          >
            Buy me a coffee ☕
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Default;
