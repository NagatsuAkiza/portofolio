"use client";
import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { HomeIcon, PersonIcon, ArchiveIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import Home from "@/components/sections/Home";
import { About } from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Main() {
  const [isLoaded, setIsLoaded] = useState(true);
  const [section, setSection] = useState<"home" | "about" | "projects" | "contact">("home");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeSection = (newSection: "home" | "about" | "projects" | "contact") => {
    if (newSection !== section) {
      setIsTransitioning(true);
      setTimeout(() => {
        setSection(newSection);
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <>
      {isLoaded && <LoadingScreen onComplete={() => setIsLoaded(false)} />}

      <div
        className={`min-h-screen z-50 flex flex-col justify-center items-center transition-opacity duration-700 ${
          !isLoaded ? "opacity-100" : "opacity-0"
        } text-gray-100`}>
        <div
          key={section}
          className={`transition-opacity duration-300 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}>
          {section === "home" && <Home />}
          {section === "about" && <About />}
          {section === "projects" && <Projects />}
          {section === "contact" && <Contact />}
        </div>

        <div className="fixed bottom-10 w-full flex justify-center">
          <Dock direction="middle" iconSize={50} iconDistance={100} className="space-x-6">
            <DockIcon onClick={() => changeSection("home")}>
              <HomeIcon className="w-10 h-10" />
            </DockIcon>
            <DockIcon onClick={() => changeSection("about")}>
              <PersonIcon className="w-10 h-10" />
            </DockIcon>
            <DockIcon onClick={() => changeSection("projects")}>
              <ArchiveIcon className="w-10 h-10" />
            </DockIcon>
            <DockIcon onClick={() => changeSection("contact")}>
              <EnvelopeClosedIcon className="w-10 h-10" />
            </DockIcon>
          </Dock>
        </div>
      </div>
    </>
  );
}
