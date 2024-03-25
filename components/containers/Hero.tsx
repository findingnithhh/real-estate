import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <div className="min-w-full h-screen p-5 mx-auto rounded-2xl">
        <Image
          src="/house.svg"
          width={100}
          height={100}
          alt={""}
          className="w-full h-96 object-cover rounded-2xl"
        />
      </div>
    </>
  );
};

export default Hero;
