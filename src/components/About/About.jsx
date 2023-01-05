import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#2E4C78]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold tracking-wide">
            <p>
              Hi. I'm Jeffrey Graham, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div className="py-2">
            <p>
              My motto as a developer is if I am the smartest person in the
              room, I am in the wrong room. I love learning and want to become
              the best developer I can be in my career and after hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
