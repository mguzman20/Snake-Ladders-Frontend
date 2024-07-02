import React, { useState } from 'react';

const TeamMemberCard = ({ name, role, bio, image }) => {
  const [showBio, setShowBio] = useState(false);

  const handleShowBio = () => {
    setShowBio(!showBio);
  }

  return (
    <div className="team-member-card">
      <img className="avatar-info" src={image} alt={`Photo of ${name}`} />
      <h3>{name}</h3>
      <p>{role}</p>
      <button className="button-green" onClick={handleShowBio}>{showBio ? 'Hide Bio' : 'Show Bio'}</button>
      {showBio && <p>{bio}</p>}
    </div>
  );
}

export default TeamMemberCard;