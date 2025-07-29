import React from 'react';
import { Code, Brain, User, Linkedin } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const AboutUsSection = () => {
  const teamMembers = [
    {
      name: "Dhanush",
      title: "CEO & Founder",
      bio: "C++ Backend Developer with expertise in building scalable enterprise systems and leading technical innovation",
      icon: User,
      initials: "D",
      image: "/team_img/Dg1_dp.jpg",
      linkedinUrl: "https://www.linkedin.com/in/dhanushg29/"
    },
    {
      name: "Aanya",
      title: "COO & Co-Founder",
      bio: "Data Science Researcher specializing in AI model optimization and operational excellence",
      icon: Brain,
      initials: "A",
      image: "/team_img/Aanya_dp.JPG",
      linkedinUrl: "https://www.linkedin.com/in/aanya-gowdaa-837475369/"
    },
    {
      name: "Chirag",
      title: "CTO & Co-Founder",
      bio: "Ex-Flipkart Engineer with extensive experience in distributed systems and AI infrastructure at scale",
      icon: Code,
      initials: "C",
      image: "/team_img/chirag.jpg",
      linkedinUrl: "https://www.linkedin.com/in/chirag-v-k-67073b1a3/"
    },
    {
      name: "Gowri",
      title: "Ai & Research",
      bio: "Data Science Researcher specializing in AI model optimization and operational excellence",
      icon: Code,
      initials: "A",
      image: "/team_img/Gowri_1.JPG",
      linkedinUrl: "https://www.linkedin.com/in/gowrikatte/"
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-quantminds-purple/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Our Team
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meet the experts building the future of secure AI solutions
          </p>
        </div>

        {/* First Row: 3 members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {teamMembers.slice(0, 3).map((member, index) => (
            <div key={index} className="glassmorphism p-8 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="bg-quantminds-purple/20 text-quantminds-purple text-2xl font-bold">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
              </div>

              <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
              <p className="text-quantminds-purple font-medium mb-4">{member.title}</p>
              <p className="text-gray-300 leading-relaxed mb-6">{member.bio}</p>

              <div className="mt-6 flex justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-quantminds-purple/20 flex items-center justify-center">
                  <member.icon className="w-6 h-6 text-quantminds-purple" />
                </div>
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-600/20 hover:bg-blue-600/30 flex items-center justify-center transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4 text-blue-400 hover:text-blue-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row: 1 centered member */}
        <div className="flex justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3">
            {teamMembers.slice(3, 4).map((member, index) => (
              <div key={index} className="glassmorphism p-8 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-6">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="bg-quantminds-purple/20 text-quantminds-purple text-2xl font-bold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
                <p className="text-quantminds-purple font-medium mb-4">{member.title}</p>
                <p className="text-gray-300 leading-relaxed mb-6">{member.bio}</p>

                <div className="mt-6 flex justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-quantminds-purple/20 flex items-center justify-center">
                    <member.icon className="w-6 h-6 text-quantminds-purple" />
                  </div>
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-blue-600/20 hover:bg-blue-600/30 flex items-center justify-center transition-colors duration-200"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400 hover:text-blue-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUsSection;
