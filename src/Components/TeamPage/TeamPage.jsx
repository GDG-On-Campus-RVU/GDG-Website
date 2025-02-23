import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import UserProfileCard from "../UserProfileCard/UserProfileCard";
import TemplatePage from "../TemplatePage/TemplatePage";

function TeamPage() {
    const [teamsData, setTeamsData] = useState(null);
    const [error, setError] = useState(null);
    const [activeTeam, setActiveTeam] = useState(null);
    const containerRef = useRef(null);

    const teamTextColors = [
        "text-blue-500",
        "text-pink-500",
        "text-green-500",
        "text-yellow-500",
        "text-purple-500",
        "text-orange-500",
    ];
    const teamColors = [
        "bg-blue-500",
        "bg-pink-500",
        "bg-green-500",
        "bg-yellow-500",
        "bg-purple-500",
        "bg-orange-500",
    ];

    useEffect(() => {
        const fetchTeamsData = async () => {
            try {
                const response = await import('../../api/all_teams.json');
                setTeamsData(response.teams);
            } catch (err) {
                setError(err);
                console.error("Error fetching team data:", err);
            }
        };
        fetchTeamsData();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!teamsData) return;
            
            const teamElements = Object.keys(teamsData).map(team => 
                document.getElementById(team)
            ).filter(Boolean);

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
    }, [teamsData]);

    const scrollToTeam = (teamName) => {
        const section = document.getElementById(teamName);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    if (error) return <div>Error: {error.message}</div>;
    if (!teamsData) return <div>Loading team data...</div>;

    return (
        <TemplatePage>
            <div className="fixed top-0 z-50 bg-black w-full flex gap-2 px-4 py-3">
                {Object.keys(teamsData).map((teamName, index) => (
                    <button
                        key={teamName}
                        onClick={() => scrollToTeam(teamName)}
                        className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                            activeTeam === teamName ? teamColors[index] : "bg-gray-300"
                        }`}
                    />
                ))}
            </div>

            <div 
                ref={containerRef}
                className="h-screen overflow-y-auto snap-y snap-mandatory"
            >
                {Object.entries(teamsData).map(([teamName, members], index) => (
                    <section 
                        key={teamName}
                        id={teamName}
                        className="snap-start min-h-screen w-full bg-black px-4 pt-12"
                    >
                        <div className="flex flex-col lg:flex-row gap-12 text-white">
                            <div className="flex-1">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className={`sticky top-12 text-4xl font-bold ${teamTextColors[index]} mb-4 z-10 bg-black py-2`}
                                >
                                    {teamName}
                                </motion.h2>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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

                            <div className="lg:w-72 xl:w-80 mt-4 lg:mt-0 ">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="sticky top-12"
                                >
                                    <h2 className="text-4xl font-bold text-red-500 mb-3">Lead</h2>
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
            </div>
        </TemplatePage>
    );
}

export default TeamPage;