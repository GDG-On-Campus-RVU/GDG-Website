import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import UserProfileCard from "../UserProfileCard/UserProfileCard";
import TemplatePage from "../TemplatePage/TemplatePage";
import styles from './TeamPage.module.css';
import { ChevronDown, ChevronUp } from "lucide-react";

function TeamPage() {
  const [teamsData, setTeamsData] = useState(null);
  const [formerMembers, setFormerMembers] = useState([]);
  const [error, setError] = useState(null);
  const [activeTeam, setActiveTeam] = useState(null);
  const containerRef = useRef(null);

  const teamTextColors = [
    "text-[#DB4437]",
    "text-[#4285F4]",
    "text-[#0F9D58]",
    "text-[#F4B400]",
    "text-[#DB4437]",
    "text-[#4285F4]",
    "text-[#0F9D58]",
  ];

  const teamColors = [
    "bg-[#DB4437]",
    "bg-[#4285F4]",
    "bg-[#0F9D58]",
    "bg-[#F4B400]",
    "bg-[#DB4437]",
    "bg-[#4285F4]",
    "bg-[#0F9D58]",
  ];

  useEffect(() => {
    const fetchTeamsData = async () => {
      try {
        const response = await import('../../api/all_teams.json');
        setTeamsData(response.teams);
        setFormerMembers(response.formerMembers);
      } catch (err) {
        setError(err);
        console.error("Error fetching team data:", err);
      }
    };
    fetchTeamsData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!teamsData && formerMembers.length === 0) return;

      const teamElements = [
        ...Object.keys(teamsData || {}).map(team => document.getElementById(team)),
        document.getElementById("former-members")
      ].filter(Boolean);

      teamElements.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.7) {
          setActiveTeam(section.id);
        }
      });
    };

    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, [teamsData, formerMembers]);

  const scrollToTeam = (teamName) => {
    const section = document.getElementById(teamName);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const years = Object.keys(formerMembers).sort((a, b) => b - a);

  const membersByYear = years.reduce((acc, year) => {
    const domains = formerMembers[year];
    const members = Object.entries(domains).flatMap(([domain, domainMembers]) =>
      domainMembers.map((member) => ({ ...member, domain }))
    );
    acc[year] = members;
    return acc;
  }, {});

  const [selectedYear, setSelectedYear] = useState(null);

  return (
    <TemplatePage>
      <div className="fixed top-0 z-50 bg-black w-full flex gap-2 px-4 py-3">
        {teamsData && Object.keys(teamsData).map((teamName, index) => (
          <button
            key={teamName}
            onClick={() => scrollToTeam(teamName)}
            className={`w-4 h-4 rounded-full transition-colors duration-300 ${activeTeam === teamName ? teamColors[index] : "bg-gray-300"}`}
          />
        ))}
        {formerMembers.length > 0 && (
          <button
            onClick={() => scrollToTeam("former-members")}
            className={`w-4 h-4 rounded-full transition-colors duration-300 ${activeTeam === "former-members" ? "bg-red-500" : "bg-gray-300"}`}
          />
        )}
      </div>

      <div
        ref={containerRef}
        className={`w-full h-screen flex flex-wrap px-2 overflow-y-auto snap-y snap-mandatory ${styles.containerScrollbar}`}
      >
        {teamsData && Object.entries(teamsData).map(([teamName, members], index) => (
          <section
            key={teamName}
            id={teamName}
            className="snap-start min-h-screen w-full bg-black px-4 pt-12"
          >
            <div className="w-full flex flex-wrap flex-col-reverse lg:flex-row gap-12 text-white">
              <div className="flex-1">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className={`sticky top-11 text-4xl font-bold ${teamTextColors[index]} mb-3 z-10 py-2 bg-black`}
                >
                  {teamName}
                </motion.h2>

                <div className="flex flex-wrap gap-4">
                  {members.slice(1).map((member, idx) => (
                    <motion.div
                      key={`${teamName}-${idx}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 }}
                    >
                      <UserProfileCard
                        name={member.name}
                        surname={member.surname}
                        title={member.title}
                        image={member.profileImage}
                        github={member.links.github}
                        linkedin={member.links.linkedin}
                        website={member.links.portfolio}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-2 lg:mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="sticky top-12"
                >
                  <h2 className={`text-4xl font-bold -mt-2 mb-8 ${teamTextColors[index]}`}>Lead</h2>
                  <UserProfileCard
                    name={members[0].name}
                    surname={members[0].surname}
                    title={members[0].title}
                    image={members[0].profileImage}
                    github={members[0].links.github}
                    linkedin={members[0].links.linkedin}
                    website={members[0].links.portfolio}
                  />
                </motion.div>
              </div>
            </div>
          </section>
        ))}

        {formerMembers && Object.keys(formerMembers).length > 0 && (
          <section
            id="former-members"
            className="snap-start min-h-screen w-full bg-black px-4 pt-12"
          >
            <div className="w-full text-white">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-red-500 mb-8"
              >
                Former Members
              </motion.h2>

              <div className="flex flex-col gap-4 mb-4">
                {years.map((year) => (
                  <div
                    key={year}
                    className="border border-red-500 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setSelectedYear((prev) => (prev === year ? null : year))
                      }
                      className="w-full flex justify-between items-center px-4 py-3 bg-black text-white font-semibold text-left"
                    >
                      <span>GDG RVU Team {year}</span>
                      {selectedYear === year ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>

                    <AnimatePresence initial={false}>
                      {selectedYear === year && (
                        <motion.div
                          key={`content-${year}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="bg-neutral-900 px-4"
                        >
                          <div className="pt-2 pb-4 flex flex-col gap-6">
                            {Object.entries(formerMembers[year]).map(
                              ([domainName, domainMembers]) => (
                                <div key={`${year}-${domainName}`}>
                                  <h3 className="text-2xl font-semibold text-red-400 mb-3">
                                    {domainName}
                                  </h3>
                                  <div className="flex flex-wrap gap-4">
                                    {domainMembers.map((member, idx) => (
                                      <motion.div
                                        key={`former-${year}-${domainName}-${idx}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.05 }}
                                      >
                                        <UserProfileCard
                                          name={member.name}
                                          surname={member.surname}
                                          title={member.title}
                                          image={member.profileImage}
                                          github={member.links.github}
                                          linkedin={member.links.linkedin}
                                          website={member.links.portfolio}
                                        />
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </TemplatePage>
  );
}

export default TeamPage;