import React from "react";
import Icons from "../assets/Icons";

function Home() {
  return (
    <main className="dark:bg-gray-800 font-mono bg-white relative overflow-hidden h-screen">
      <div className="flex relative z-20 items-center h-screen">
        <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
          <div className="flex flex-col">
            <p className="text-3xl my-6 text-center dark:text-white">
              Hi, I'm Smit 👨‍💻
            </p>
            <h2 className="max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">
              Building cool websites for brands.
            </h2>
            <div className="flex items-center justify-center mt-4">
              <a
                href="#"
                className="uppercase py-2 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md"
              >
                CONNECT WITH ME
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden md:block absolute -bottom-32 -left-32 w-96 h-96">
        <div className="absolute text-extrabold text-xl right-12 z-20 text-start top-1/4">
          <span className="text-7xl">🎨</span>
          <p>Got a project ?</p>
          <a href="#" className="underline">
            Let&#x27;s talk
          </a>
        </div>
        <Icons type="bg-shape" />
      </div>
      
    </main>
  );
}

export default Home;
