import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import UserProfileCard from "../UserProfileCard/UserProfileCard";
import TemplatePage from "../TemplatePage/TemplatePage";
import allTeamsData from "../../api/all_teams.json";
import team_section_logo from "../../assets/SVG/teams_section_logo.svg";

const TeamSection = ({ isActive }) => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSplit, setIsSplit] = useState(false);

  useEffect(() => {
    try {
      if (allTeamsData.teams && allTeamsData.teams["Core Team"]) {
        setTeamMembers(allTeamsData.teams["Core Team"]);
      } else {
        console.error("Core Team data not found in expected structure");
      }
    } catch (error) {
      console.error("Error loading team data:", error);
    }
  }, []);

  useEffect(() => {
    if (isActive) {
      setIsSplit(false);
      setTimeout(() => setIsSplit(true), 1200); // Delay before splitting
    }
  }, [isActive]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= teamMembers.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  if (teamMembers.length === 0) {
    return <p>Loading team members...</p>;
  }

  const prevIndex =
    currentIndex === 0 ? teamMembers.length - 1 : currentIndex - 1;
  const nextIndex =
    currentIndex + 1 >= teamMembers.length ? 0 : currentIndex + 1;

  return (
    <TemplatePage>
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-black overflow-hidden text-white px-10 py-20 relative">
        <h1 className="text-4xl font-bold text-white tracking-wide">
            GDG RVU 2024-25 Core Members
        </h1>
        {/* Container to Ensure Centering */}
        <div className="relative w-full h-full flex justify-center items-center">
          {/* Whole Logo Initially */}
          {!isSplit && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute"
            >
              <img src={team_section_logo} alt="Full Logo" className="w-48" />
            </motion.div>
          )}

          {/* Slideshow Cards Appearing */}
          {isSplit && (
            <>
              {/* Centered Cards with Adjusted Left Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute flex gap-8"
              >
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "-10vw" }} // Move left card slightly left
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <UserProfileCard
                    name={teamMembers[prevIndex].name}
                    surname={teamMembers[prevIndex].surname}
                    title={teamMembers[prevIndex].title}
                    image={teamMembers[prevIndex].profileImage}
                    github={teamMembers[prevIndex].links.github}
                    linkedin={teamMembers[prevIndex].links.linkedin}
                    website={teamMembers[prevIndex].links.portfolio}
                  />
                </motion.div>

                <UserProfileCard
                  name={teamMembers[nextIndex].name}
                  surname={teamMembers[nextIndex].surname}
                  title={teamMembers[nextIndex].title}
                  image={teamMembers[nextIndex].profileImage}
                  github={teamMembers[nextIndex].links.github}
                  linkedin={teamMembers[nextIndex].links.linkedin}
                  website={teamMembers[nextIndex].links.portfolio}
                />
              </motion.div>
            </>
          )}

          {/* Split Logo Acting as Navigation Buttons */}
          {isSplit && (
            <>
              {/* Left Half (Previous) at -35vw */}
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-35vw" }}
                transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
                className="absolute flex justify-center items-center cursor-pointer"
                onClick={prevSlide}
              >
                <img
                  src={team_section_logo}
                  alt="Left Half"
                  className="w-48"
                  style={{ clipPath: "inset(0 50% 0 0)" }}
                />
              </motion.div>

              {/* Right Half (Next) at 25vw */}
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "25vw" }}
                transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
                className="absolute flex justify-center items-center cursor-pointer"
                onClick={nextSlide}
              >
                <img
                  src={team_section_logo}
                  alt="Right Half"
                  className="w-48"
                  style={{ clipPath: "inset(0 0 0 50%)" }}
                />
              </motion.div>
            </>
          )}
        </div>
      </div>
    </TemplatePage>
  );
};

export default TeamSection;
