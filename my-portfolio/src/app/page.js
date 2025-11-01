import Image from "next/image";
import React from "react";




export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="col-span-full flex flex-col items-center gap-4 row-start-1">
        <div className="flex flex-row items-center gap-4">
          <div className="flex flex-col items-center gap-4 py-4 md:py-8 px-8 md:px-16 bg-gray-700 rounded-lg shadow-xl shadow-box shadow-blue-500/70 rotate-shadow-animation">
            <Image
              src="/profile.jpg"
              alt="Matheos Amanuel"
              width={270}
              height={270}
              className="rounded-full border-2 bg-clip-border border-gray-700/50 shadow-xl shadow-black/100 hover:shadow-black/150 transition-shadow duration-500 ease-in-out"
            />
            <h1 className="text-5xl font-bold text-center bg-gradient-to-r">Matheos Amanuel</h1>
            <h2 className="text-2xl text-white-500 text-center">Software Developer & IT Support Specialist</h2>
          </div>
        </div>
      </header>

      <main className="col-span-full flex flex-col items-center gap-4 mt-20 mb-10 row-start-2">
        <div className="flex flex-col items-center gap-4 py-4 md:py-4 px-8 md:px-16 bg-gray-800 rounded-lg">
          <h2 className="text-3xl font-bold text-center">About Me</h2>
          <p className="text-lg text-white-500 text-center">
            Junior Software Developer & IT Support Specialist with hands-on experience developing web and desktop/mobile
            applications, alongside a proven track record of providing enterprise-level IT support across multiple locations via
            phone, on-site, and remote channels. Proficient in coding languages such as Python, C#, PHP, etc., experienced in
            managing workstations, user accounts, and process documentation. Committed to delivering exceptional customer
            service, effective technical support, and clear documentation while actively pursuing continuous learning and
            professional growth.
          </p>
        </div>


        {/* Education Completion */}
        <div className="flex flex-col items-center gap-4 py-4 mt-5 md:py-8 px-8 md:px-16 bg-gray-800 rounded-lg">
          <h1 className="text-3xl font-bold text-center">Education Completion</h1>
          <div className="flex flex-col items-center gap-4 border-t-4 border-b-4 border-white-500 pb-5">
            <Image
              src="/mohawk.png"
              alt="Matheos Amanuel"
              width={200}
              height={50}
              className="pt-5"
            />
            <div className="flex flex-row items-center gap-4">
            {/*Icons by Freepik */}
            <Image
              src="/diploma.png"
              alt="Matheos Amanuel"
              width={50}
              height={50}
              className="bg-clip-border shadow-xl shadow-gray-500/40 hover:shadow-white/70 transition-shadow duration-500 ease-in-out"
            />
            <h3 className="text-2xl text-white-500 text-center">Computer Systems Technology - Software Development Advanced Diploma</h3>
          </div>
          <div className="flex flex-row items-center gap-4">
            {/*Icons by Freepik */}
            <Image
              src="/advancedDiploma.png"
              alt="Matheos Amanuel"
              width={50}
              height={50}
              className="bg-clip-border shadow-xl shadow-gray-500/50 hover:shadow-white/60 transition-shadow duration-500 ease-in-out"
            />
            <h3 className="text-2xl text-white-500 text-center">Computer Systems Technician - Software Support Diploma</h3>
          </div>
          </div>
        </div>

        {/* Programming Languages */}
        <div className="flex flex-col flex-wrap items-center gap-4 py-4 mt-5 md:py-8 px-8 md:px-16 bg-gray-800 rounded-lg">
          <h1 className="text-3xl font-bold text-center">Programming Languages</h1>
          <div className="flex flex-row flex-wrap items-center justify-center gap-4 border-t-4 border-b-4 border-white-500 pb-5">
            <Image
              src="/python.png"
              alt="Python logo"
              width={75}
              height={75}
              className="rounded bg-clip-border"
            />
            <Image
              src="/java.png"
              alt="java logo"
              width={75}
              height={75}
              className="rounded bg-clip-border"
            />
            <Image
              src="/HtmlCssJs.png"
              alt="HTML/Css logo"
              width={300}
              height={175}
              className="bg-clip-border"
            />
            <Image
              src="/Sql.png"
              alt="SQL logo"
              width={70}
              height={50}
              className="bg-clip-border"
            />
            <Image
              src="/Php.png"
              alt="PHP logo"
              width={100}
              height={100}
              className="bg-clip-border"
            />
            <Image
              src="/CSharp.png"
              alt="C# logo"
              width={90}
              height={100}
              className="bg-clip-border"
            />
            <Image
              src="/React.png"
              alt="React logo"
              width={130}
              height={100}
              className="bg-clip-border"
            />
            <Image
              src="/Node.png"
              alt="Node logo"
              width={150}
              height={100}
              className="bg-clip-border"
            />
            {/* <Image
              src="/TWCSS.png"
              alt="TWCSS logo"
              width={100}
              height={75}
              className="bg-clip-border"
            /> */}
          </div>
        </div>

        {/* Projects */}
        <div className="flex flex-col items-center gap-4 py-4 mt-5 md:py-8 px-8 md:px-16 bg-gray-800 rounded-lg">
          <h1 className="text-3xl font-bold text-center">Projects</h1>
          <div className="flex flex-col items-center gap-4 border-t-4 border-b-2 border-white-500 ">
            <Image
              src="/project1.png"
              alt="Project 1"
              width={200}
              height={50}
              className="rounded bg-clip-border pt-5"
            />
            <h1 className="text-2xl text-white-500 text-center font-bold">Space Defense - 2D Unity Game</h1>
            {/* <h3 className="text-l text-white-500 text-center font-bold">Unity Game Engine | C# | PHP | SQL</h3> */}
            <div className="flex flex-row items-center gap-2">
              <Image
              src="/unity.png"
              alt="Unity"
              width={50}
              height={0}
              className="rounded bg-clip-border"
            />
            <Image
              src="/CSharp.png"
              alt="CSharp"
              width={50}
              height={0}
              className="rounded bg-clip-border"
            />
              <Image
              src="/php.png"
              alt="php"
              width={50}
              height={0}
              className="rounded bg-clip-border"
            />
            <Image
              src="/sql.png"
              alt="SQL"
              width={50}
              height={0}
              className="rounded bg-clip-border"
            />
            
            </div>
            <div className="flex flex-row items-center gap-2">
              <Image
                  src="/link.png"
                  alt="Project 1"
                  width={20}
                  height={25}
                  className="rounded bg-clip-border"
                />
              <h3 className="text-l text-white-500 text-center font-bold text-color-blue"><a className="underline decoration-sky-500" href="https://github.com/Matheos164/Space_Defense_Game" target="_blank" rel="noopener noreferrer">GitHub Repo</a> | <a className="underline decoration-sky-500" href="https://me-phrog.itch.io/space-defense-web-version" target="_blank" rel="noopener noreferrer">Try The Game</a> </h3>
              <Image
                  src="/link.png"
                  alt="Project 1"
                  width={20}
                  height={25}
                  className="rounded bg-clip-border"
                />
            </div>
            <p className="text-lg text-white-500 text-center pb-5">Developed a 2D game on Unity Engine using C# for gameplay functions and PHP and SQl for networks and server features. The player's main objective is to defende the earth from oncoming enemies while trying to acheave a high score. The game features consists for the following, The player which orbits around a planet with the ability to shoot and activate a sheald, the planet which the player must defend, three enemie types which consists of a Astroid, Elien Ship, and Boss Elien Ship.</p>
          </div>

          <div className="flex flex-col items-center gap-4 border-b-4 border-white-500 ">
            <Image
              src="/project2.png"
              alt="Project 2"
              width={250}
              height={150}
              className="rounded bg-clip-border pt-5"
            />
            <h1 className="text-2xl text-white-500 text-center font-bold">Employee Finder App – Dynamic Web App </h1>
            <h3 className="text-l text-white-500 text-center font-bold">PHP | JavaScript | SQL | HTML | CSS | Bootstrap</h3>
            <div className="flex flex-row items-center gap-2">
              <Image
              src="/php.png"
              alt="php"
              width={50}
              height={0}
              className="rounded bg-clip-border"
            />
            <Image
              src="/sql.png"
              alt="SQL"
              width={50}
              height={0}
              className="rounded bg-clip-border"
            />
            <Image
              src="/HtmlCssJS.png"
              alt="HtmlCssJS"
              width={120}
              height={0}
              className="rounded bg-clip-border"
            />
            <Image
              src="/bootstarp.png"
              alt="bootstarp"
              width={50}
              height={0}
              className="rounded bg-clip-border"
            />
            </div>
            <div className="flex flex-row items-center gap-2">
            <Image
              src="/lock.png"
              alt="lock"
              width={25}
              height={0}
              className="rounded bg-clip-border"
            />
            <h3 className="text-l text-white-500 text-center font-bold">Username: Admin | Password: admin </h3>
            <Image
              src="/lock.png"
              alt="lock"
              width={25}
              height={0}
              className="rounded bg-clip-border"
            />
            </div>
            <div className="flex flex-row items-center gap-2">
              <Image
                  src="/link.png"
                  alt="Project 1"
                  width={20}
                  height={25}

                />
              <h3 className="text-l text-white-500 text-center font-bold text-color-blue"><a className="underline decoration-sky-500" href="https://github.com/Matheos164/Emp_Finder" target="_blank" rel="noopener noreferrer">GitHub Repo</a> | <a className="underline decoration-sky-500" href="https://www.empfinder.free.nf" target="_blank" rel="noopener noreferrer">View The Site</a> </h3>
              <Image
                  src="/link.png"
                  alt="Project 1"
                  width={20}
                  height={25}
                className="rounded bg-clip-border"
                />
            </div>
            <p className="text-lg text-white-500 text-center pb-5">Developed and designed a full-stack dynamic web application that enables users to locate employees based on selected locations. The site allows regular users to select a location and search for an employee by name. If a match is found, the system displays the employee’s information along with a map of the corresponding area or floor. An admin login feature allows site administrators to add, edit, and remove employee profiles, which are stored in a SQL database.</p>
          </div>
        </div>

        {/* Extracurricular */}
        <div className="flex flex-col items-center gap-4 py-4 mt-5 md:py-8 px-8 md:px-16 bg-gray-800 rounded-lg">
          <h1 className="text-3xl font-bold text-center">Extracurricular</h1>
          <div className="flex flex-col items-center gap-4 border-t-4 border-b-2 border-white-500 pb-5 ">
              <Image
              src="/temi.png"
              alt="Extracurricular"
              width={200}
              height={50}
              className="rounded bg-clip-border pt-5"
              />
              <h1 className="text-2xl text-white-500 text-center font-bold">Tēmi Robot - Research & Documentation</h1>
            
            <div className="flex flex-row items-center gap-2">
              <Image
                  src="/link.png"
                  alt="Project 1"
                  width={20}
                  height={25}
                  className="rounded bg-clip-border"
                />
              <h3 className="text-xl text-white-500 text-center font-bold"><a href="/Temi_manual.pdf" className="underline decoration-sky-500" target="_blank" rel="noopener noreferrer">Project Documentation</a></h3>
              <Image
                  src="/link.png"
                  alt="Project 1"
                  width={20}
                  height={25}
                  className="rounded bg-clip-border"
                />
            </div>
            {/* <div className="border-2 border-dashed border-black w-full flex flex-col items-center gap-4 pt-4 bg-white shadow-xl shadow-black "> */}
              {/* <h2 className="text-xl text-black text-center underline decoration-black font-bold text-shadow-stone-500">About Project</h2> */}
              <p className="text-lg text-white-500 text-center pb-5">Conducted research on the Tēmi robot's SDK (Software Development Kit), focusing on its capabilities and functionalities. Developed a comprehensive user manual to guide developers in getting started with the Tēmi robot, covering installation, configuration, and basic functionalities to control the robot. The manual aims to provide a clear getting-started guide for developers interested in working with the Tēmi robot platform.
              </p>
            {/* </div> */}
          </div>
          <div className="flex flex-col items-center gap-4  ">
            <Image
              src="/crowdvision.png"
              alt="Extracurricular"
              width={200}
              height={50}
              className="rounded bg-clip-border pt-5"
            />
            <h1 className="text-2xl text-white-500 text-center font-bold">CrowdVision - Startup Proof of Concept</h1>
            <Image
              src="/python.png"
              alt="Python logo"
              width={45}
              height={75}
              className="rounded bg-clip-border"
            />
            <div className="flex flex-row items-center gap-2">
              <Image
                  src="/link.png"
                  alt="Project 1"
                  width={20}
                  height={25}
                  className="rounded bg-clip-border"
                />
              <h3 className="text-xl text-white-500 text-center font-bold"><a href="https://theforge.mcmaster.ca/startups/crowdvision/" className="underline decoration-sky-500" target="_blank" rel="noopener noreferrer">Project Article</a></h3>
              <Image
                  src="/link.png"
                  alt="Project 1"
                  width={20}
                  height={25}
                  className="rounded bg-clip-border"
                />
            </div>
            {/* Create Description */}
            {/* <h2 className="text-xl text-white-500 text-center pb-5 font-bold">About Project</h2> */}
              <p className="text-lg text-white-500 text-center pb-5">
                Researched and developed a proof of concept for CrowdVision, a startup focused on creating a event/concerts social media platform. The proof of concept involved developing a prototype backend system that demonstrated the core features and functionalities of the envisioned platform. This included a Upscaling system, Video stabilization system, Audio aligning system, and video sequence aligning and merging. The proof of concept aimed to showcase the technical feasibility and potential of the CrowdVision platform.
              </p>       
            </div>
          <div className="flex flex-col items-center gap-4 border-t-2 border-b-4 border-white-500 ">
            <Image
              src="/remembering.png"
              alt="Extracurricular"
              width={200}
              height={50}
              className="rounded bg-clip-border pt-5"
            />
            <h1 className="text-2xl text-white-500 text-center font-bold">Remembering Their Faces - Face Matching Research</h1>
            <Image
              src="/python.png"
              alt="Python logo"
              width={45}
              height={75}
              className="rounded bg-clip-border"
            />
            <div className="flex flex-row items-center gap-2">
              <Image
                  src="/link.png"
                  alt="Project 1"
                  width={20}
                  height={25}
                  className="rounded bg-clip-border"
                />
              <h3 className="text-xl text-white-500 text-center font-bold"><a href="https://www.mohawknewsdesk.ca/unlocking-canadas-military-aviation-history/" className="underline decoration-sky-500" target="_blank" rel="noopener noreferrer">Project Article</a></h3>
              <Image
                  src="/link.png"
                  alt="Project 1"
                  width={20}
                  height={25}
                  className="rounded bg-clip-border"
                />
            </div>
            {/* Create Description */}
            {/* <h2 className="text-xl text-white-500 text-center pb-5 font-bold">About Project</h2> */}
            <p className="text-lg text-white-500 text-center pb-5">
              Conducted research on facial recognition technology to assist in identifying and matching historical photographs of Canadian military personnel from World War II with existing records. Developed a prototype system using Python and relevant libraries to analyze and compare facial features in photographs, aiming to enhance the accuracy and efficiency of the identification process. The research aimed to contribute to preserving and honoring the legacy of Canadian military personnel by facilitating the identification of individuals in historical photographs.
            </p>
          </div>
        </div>

      </main>

      <footer className="col-span-full flex flex-col items-center justify-center gap-4 text-white-500 border-top-2 border-white-500 row-start-3">
        <div className="flex gap-6 flex-wrap items-center justify-center">
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
