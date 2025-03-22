import React, { useEffect } from "react";
// router
import { Link } from "react-router";
// icons
import { RiTwitterXFill } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { FaMedium, FaGithub } from "react-icons/fa";

function Default({ name, surname, bio, links, social }) {
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
          <h1 className="text-2xl text-white">{name+" "+surname}</h1>
          <p className="text-gray-200 text-md mt-1">{bio}</p>
        </div>
      </div>
      {/* social media links */}
      <div className="flex items-center gap-7 mt-7 justify-center w-full flex-wrap">
        {/* social media links */}
        {(social || []).map((item, index) => (
          <Link key={index} to={item.link} target="_blank">
            {item.icon === "twitter" && (
              <RiTwitterXFill className="text-2xl text-cyan-300 hover:text-white transition-colors" />
            )}
            {item.icon === "medium" && (
              <FaMedium className="text-2xl text-cyan-300 hover:text-white transition-colors" />
            )}
            {item.icon === "github" && (
              <FaGithub className="text-2xl text-cyan-300 hover:text-white transition-colors" />
            )}
            {item.icon === "instagram" && (
              <FiInstagram className="text-2xl text-cyan-300 hover:text-white transition-colors" />
            )}
          </Link>
        ))}
      </div>
      {/* content */}
      <div className="mt-10">
        {/* links */}
        {(links || []).map((item, index) => (
          <div className="flex flex-col gap-5 mt-5 w-full" key={index}>
            {/* title */}
            <h1 className="text-md uppercase text-cyan-300 w-full text-center">
              {item.title}
            </h1>
            {/* links */}
            {(item.items || []).map((link, index) => (
              <Link
                key={index}
                to={link.url}
                target="_blank"
                className="text-cyan-700 bg-cyan-50 w-full text-center p-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Default;
