import React, { useState, useEffect } from 'react';
import UserProfileCard from '../UserProfileCard/UserProfileCard';
import leftArrow from '../../Images/Common/leftarrow.png';
import rightArrow from '../../Images/Common/rightarrow.png';
import TemplatePage from '../TemplatePage/TemplatePage';
import allTeamsData from '../../api/all_teams.json';
import './teamsection.css';

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    try {
      if (allTeamsData.teams && allTeamsData.teams["Core Team"]) {
        const coreTeamMembers = allTeamsData.teams["Core Team"];
        setTeamMembers(coreTeamMembers);
      } else {
        console.error("Core Team data not found in expected structure");
      }
    } catch (error) {
      console.error("Error loading team data:", error);
    }
  }, []);

  if (!teamMembers || teamMembers.length === 0) {
    return (
      <TemplatePage>
        <div className="team-section">
          <h2>Core Team</h2>
          <p>Loading team members...</p>
        </div>
      </TemplatePage>
    );
  }

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

  const currentMember = teamMembers[currentIndex];

  return (
    <TemplatePage>
      <div className="team-section">
        <h2>Core Team</h2>
        <div className="team-showcase">
          <div className="carousel-left">
            <button className="arrow-btn prev" onClick={prevSlide}>
              <img src={leftArrow} alt="Previous" />
            </button>
            
            <div className="carousel-content">
              {teamMembers.length > 0 && (
                <UserProfileCard
                  name={currentMember.name}
                  surname={currentMember.surname}
                  title={currentMember.title}
                  image={currentMember.profileImage}
                  github={currentMember.links.github}
                  linkedin={currentMember.links.linkedin}
                  website={currentMember.links.portfolio}
                />
              )}
            </div>
          </div>

          <div className="team-link-container">
            <a href="/team" style={{ textDecoration: 'none' }}>
              <div className="team-link-content">
                <h2>CHECK THE<br />WHOLE TEAM</h2>
                <p>(LINK TO TEAMS PAGE)</p>
              </div>
            </a>
          </div>

          <button className="arrow-btn next" onClick={nextSlide}>
            <img src={rightArrow} alt="Next" />
          </button>
        </div>
      </div>
    </TemplatePage>
  );
};

export default TeamSection;
