import React from "react";
import Image from "next/image";

const Welcome = () => {
  return (
    <div className="flex h-full items-center">
    <div className="flex flex-row w-full max-w-6xl mx-auto gap-8 items-center justify-center">
      <div className="flex flex-col w-1/2 gap-5 text-center">
        <h1 className="text-4xl font-bold">Welcome To SmartStay Lahore</h1> 
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
          aliquid illo libero, nobis vero aut hic distinctio eligendi nisi error
          architecto impedit! Nisi quam ad ullam molestiae incidunt dolorem
          quidem?
        </p>
      </div>
      <Image className="rounded-xl" src="/lobby.jpg" alt="HEHE" width={400} height={400}/>
    </div>
    </div>
  );
};

export default Welcome;
