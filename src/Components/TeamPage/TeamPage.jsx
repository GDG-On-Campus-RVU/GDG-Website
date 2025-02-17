import React, { useState, useEffect } from "react";
import UserProfileCard from "../UserProfileCard/UserProfileCard";
import TemplatePage from "../TemplatePage/TemplatePage";

function TeamPage() {
    const [teamsData, setTeamsData] = useState(null);
    const [error, setError] = useState(null);
    const [activeTeam, setActiveTeam] = useState(null);

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
            Object.keys(teamsData).forEach((team) => {
                const section = document.getElementById(team);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                        setActiveTeam(team);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [teamsData]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!teamsData) {
        return <div>Loading team data...</div>;
    }

    return (
        <>
            <TemplatePage>
                <div className="fixed top-0 z-50 bg-black w-full flex gap-2 px-4 py-4 mb-6">
                    {Object.keys(teamsData).map((teamName, index) => (
                        <a key={index} href={`#${teamName}`} className={`w-4 h-4 rounded-full ${activeTeam === teamName ? 'bg-red-500' : 'bg-gray-300'}`}/>
                    ))}
                </div>
                {Object.entries(teamsData).map(([teamName, members]) => (
                    <div key={teamName} id={teamName} className="w-full h-auto flex flex-wrap bg-black">
                        <div className="w-full flex bg-black text-white p-4 gap-4 mt-14">
                            <section className="flex-1 flex-wrap mb-4">
                                <h2 className="text-4xl font-bold text-red-500 mb-4">{teamName}</h2>
                                <div className="flex flex-wrap flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-4">
                                    {members.slice(1).map((member, index) => (
                                        <UserProfileCard
                                            key={index}
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
                                            name={members[0].name}
                                            surname={members[0].surname}
                                            title={members[0].title}
                                            image={members[0].profileImage}
                                            github={members[0].links.github}
                                            linkedin={members[0].links.linkedin}
                                            website={members[0].links.portfolio}
                                        />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                ))}
            </TemplatePage>
        </>
    );
}

export default TeamPage;