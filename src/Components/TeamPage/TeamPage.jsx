import React, { useState, useEffect } from "react";
import UserProfileCard from "../UserProfileCard/UserProfileCard";
import TemplatePage from "../TemplatePage/TemplatePage";

function TeamPage() {
    const [teamsData, setTeamsData] = useState(null);
    const [error, setError] = useState(null);

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

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!teamsData) {
        return <div>Loading team data...</div>;
    }

    return (
        <TemplatePage>
            {Object.entries(teamsData).map(([teamName, members]) => (
                <div key={teamName} className="w-full h-auto flex flex-wrap">
                    <div className="w-full flex bg-black text-white p-4 gap-4">
                        <section className="flex-1 flex-wrap mb-4">
                            <h2 className="text-4xl font-bold text-red-500 mb-4">{teamName}</h2>
                            <div className="flex flex-wrap flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-4">
                                {members.map((member, index) => (
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
    );
}

export default TeamPage;




// import React from "react";
// import UserProfileCard from "../UserProfileCard/UserProfileCard";
// import TemplatePage from "../TemplatePage/TemplatePage";

// function TeamPage() {

//     const [teamsData, setTeamsData] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchTeamsData = async () => {
//             try {
//                 const response = await import('../../api/all_teams.json');
//                 setTeamsData(response.teams);
//             } catch (err) {
//                 setError(err);
//                 console.error("Error fetching team data:", err);
//             }
//         };

//         fetchTeamsData();
//     }, []);

//     if (error) {
//         return <div>Error: {error.message}</div>;
//     }

//     if (!teamsData) {
//         return <div>Loading team data...</div>;
//     }


//     return (
//         <TemplatePage>
//             {Object.entries(teamsData).map(([teamName, members], index) => (
                    
//                 // ))}
//             <div className="w-full h-auto flex flex-wrap">
//                 {/* Main Content */}
//                 <div className="w-full flex bg-black text-white p-4 gap-4">
//                     {/* Technical Team Section */}
//                     <section className="flex-1 flex-wrap mb-4 ">
//                         <h2 className="text-4xl font-bold text-red-500 mb-4">{teamName}</h2>
//                         {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> */}
//                         <div className="flex flex-wrap flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-4">
//                             {members.map((member, index) => (
//                                 <UserProfileCard key={index} name={member.name} surname={member.surname} title={member.title} image={member.profileImage} github={member.links.github} linkedin={member.links.linkedin} website={member.links.portfolio} />
//                             ))}
//                         </div>
//                     </section>

//                     {/* Leads Section */}
//                     <section>
//                         <h2 className="text-4xl font-bold text-red-500 mb-4">Lead</h2>
//                         <div className="flex justify-center">
//                             <div className="w-full">
//                                 <UserProfileCard name={members[0].name} surname={members[0].surname} title={members[0].title} image={members[0].profileImage} github={members[0].links.github} linkedin={members[0].links.linkedin} website={members[0].links.portfolio} />
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             </div>
//             ))}
//         </TemplatePage>
//     );
// }

// export default TeamPage;
