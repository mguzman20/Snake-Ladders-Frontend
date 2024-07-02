import './styles/About.css'
import React from 'react';
import TeamMemberCard from '../components/MemberCard';
import Navbar from '../components/NavBar'

const teamMembers = [
    {
      name: 'Matías Guzmán',
      role: 'Developer',
      bio: 'Estudiante de 4° año de Ingeniería Civil en la Pontifica Universidad Católica de Chile con major en Ingeniería de Software y minor Investigación Operativa. Interesado en software de calidad y desarrollo de productos digitales.',
      image: '/imgs/avatar_matias.png'
    },
    {
      name: 'Martín Jara',
      role: 'Developer',
      bio: 'Estudiante de 4° año de Ingeniería Civil en la Pontifica Universidad Católica de Chile con major en Ingeniería de Software y minor Data Science. Apasionado por la tecnología y el desarrollo de software.',
      image: '/imgs/avatar_martin.png'
    },
  ];
  


export default function AboutUS() {
    return (
        <>
            <Navbar />
            <div>

            <div className="team-member-cards">
                {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} name={member.name} role={member.role} bio={member.bio} image={member.image} />
                ))}
            </div>
            </div>  
        </>
    )
}