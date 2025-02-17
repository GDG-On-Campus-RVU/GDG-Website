import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import UserProfileCard from "../UserProfileCard/UserProfileCard";
import TemplatePage from "../TemplatePage/TemplatePage";

function TeamPage() {
    const [teamsData, setTeamsData] = useState(null);
    const [error, setError] = useState(null);
    const [selectedTeam, setSelectedTeam] = useState(null);

    useEffect(() => {
        const fetchTeamsData = async () => {
            try {
                const response = await import("../../api/all_teams.json");
                setTeamsData(response.teams);
                setSelectedTeam(Object.keys(response.teams)[0]);
            } catch (err) {
                setError(err);
                console.error("Error fetching team data:", err);
            }
        };

        fetchTeamsData();
    }, []);

    useEffect(() => {
        if (!teamsData) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setSelectedTeam(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.5,
                rootMargin: "0px 0px -50% 0px"
            }
        );

        Object.keys(teamsData).forEach(teamName => {
            const element = document.getElementById(teamName);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [teamsData]);

    const teamNames = teamsData ? Object.keys(teamsData) : [];

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

    const switchTeam = (teamName) => {
        const teamSection = document.getElementById(teamName);
        if (teamSection) {
            teamSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!teamsData) {
        return <div>Loading team data...</div>;
    }

    return (
        <TemplatePage>
            {teamNames.map((teamName, teamIndex) => (
                <div key={teamName} id={teamName} className="w-full h-auto flex flex-wrap">
                    <div className="w-full flex bg-black text-white p-4 gap-4">
                        <section className="flex-1 flex-wrap mb-4">
                            <h2 className={`text-4xl font-bold ${teamTextColors[teamIndex]} mb-4 flex items-center`}>
                                {teamName}
                                {/* Dots navigation next to team name */}
                                <div className="flex ml-4 gap-2">
                                    {teamNames.map((team, index) => (
                                        <motion.div
                                            key={team}
                                            className={`w-5 h-5 rounded-full cursor-pointer ${teamColors[index]} ${teamIndex === index ? "ring-4 ring-white" : ""}`}
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => switchTeam(team)}
                                        />
                                    ))}
                                </div>
                            </h2>
                            <div className="flex flex-wrap flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-4">
                                {teamsData[teamName].map((member, idx) => (
                                    <UserProfileCard
                                        key={idx}
                                        name={member.name}
                                        surname={member.surname}
                                        title={member.title}
                                        image={member.profileImage}
                                        github={member.links.github}
                                        linkedin={member.links.linkedin}
                                        website={member.links.portfolio}
                                    />
                                ))}
                            </div>
                        </section>
                        <section>
                            <h2 className="text-4xl font-bold text-red-500 mb-4">Lead</h2>
                            <div className="flex justify-center">
                                <div className="w-full">
                                    <UserProfileCard
                                        name={teamsData[teamName][0].name}
                                        surname={teamsData[teamName][0].surname}
                                        title={teamsData[teamName][0].title}
                                        image={teamsData[teamName][0].profileImage}
                                        github={teamsData[teamName][0].links.github}
                                        linkedin={teamsData[teamName][0].links.linkedin}
                                        website={teamsData[teamName][0].links.portfolio}
                                    />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            ))}
        </TemplatePage>
    );
}

export default TeamPage;