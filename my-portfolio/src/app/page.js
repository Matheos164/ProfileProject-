import Image from "next/image";
import React from "react";
import Link from "next/link";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen mt-20  sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="col-span-full flex flex-col items-center gap-4 mt-20 mb-10 row-start-1 ">
        <div className="flex flex-row items-center gap-4 mt-20 ">
          <div className="flex flex-col items-center gap-4 py-4 md:py-8 px-8 md:px-16 bg-gray-700 rounded-lg shadow-xl shadow-blue-300/30 hover:shadow-blue-500/50">
            <Image
              src="/profile.jpg"
              alt="Matheos Amanuel"
              width={150}
              height={150}
              className="rounded-full border-2 bg-clip-border border-white"
            />
            <h1 className="text-4xl font-bold text-center bg-gradient-to-r">Matheos Amanuel</h1>
            <h2 className="text-2xl text-white-500 text-center">Software Developer</h2>
            <h3 className="text-xl text-white-500 text-center">IT Support Specialist</h3>
          </div>
        </div>
      </header>

      <main className="col-span-full flex flex-col items-center gap-4 mt-20 mb-10 row-start-2">
      <div className="flex flex-col items-center gap-4 py-4 md:py-4 px-8 md:px-16 bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-bold text-center">About Me</h2>
          <p className="text-lg text-white-500 text-center">
            I am a developer with a background in IT Support and a passion for creating engaging and efficient software. My projects include a 2D space shooter game, a multi-page Valorant Info React Native app, and full-stack Employee Finder MVC web applications. I thrive in collaborative, team-driven environments and love tackling challenges that drive innovation and challenge my knowledge. I'm always open to learning, collaborating, and making new connections!
          </p>
      </div>
      <div className="flex flex-col items-center gap-4 py-4 mt-5 md:py-8 px-8 md:px-16 bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-bold text-center">Education Completion</h2>
          
      </div>
      </main>

      <footer className=" col-span-full flex flex-col items-center justify-center gap-4 text-white-500 border-top-2 border-white-500">
        <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a href="https://www.linkedin.com/in/matheos-amanuel-81335b241/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/linkedin.png"
              alt="LinkedIn logo"
              width={42}
              height={42}
              priority
            />
          </a>
          <a href="https://github.com/Matheos164" target="_blank" rel="noopener noreferrer">
            <div style={{ backgroundColor: 'white', paddingTop: '0.5px', paddingBottom: '0.5px', paddingRight: '1px', paddingLeft: '1px', borderRadius: '5px' }}>
              <Image
                src="/github.png"
                alt="GitHub logo"
                width={40}
                height={40}
                priority
              />
            </div>
          </a>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-sm text-white-500">
            &copy; 2025 Matheos Amanuel
          </span>
        </div>
      </footer>
    </div>


  );



}
