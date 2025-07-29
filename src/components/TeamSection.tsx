
import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: "Dhanush G",
      title: "CEO",
      subtitle: "C++ & HPC Engineer",
      image: "/lovable-uploads/d97f1fe1-486c-4552-b2ed-9669a0710acf.png", // Placeholder - you can update with actual images
      bio: "Expert in high-performance computing and distributed systems architecture."
    },
    {
      name: "Aanya",
      title: "COO", 
      subtitle: "Data Science Researcher",
      image: "/lovable-uploads/d97f1fe1-486c-4552-b2ed-9669a0710acf.png", // Placeholder - you can update with actual images
      bio: "Specialized in machine learning model optimization and data pipeline architecture."
    },
    {
      name: "Chirag",
      title: "CTO",
      subtitle: "Ex-Flipkart Engineer", 
      image: "/lovable-uploads/d97f1fe1-486c-4552-b2ed-9669a0710acf.png", // Placeholder - you can update with actual images
      bio: "Veteran engineer with experience scaling systems for millions of users."
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="glassmorphism p-8 rounded-xl text-center group hover:scale-105 transition-transform duration-300">
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-quantminds-grey/20 border-4 border-quantminds-grey/30">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-6 h-6 bg-quantminds-grey rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">✓</span>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-quantminds-grey font-semibold mb-2">{member.title}</p>
              <p className="text-quantminds-blue text-sm mb-4">{member.subtitle}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{member.bio}</p>

              <div className="flex justify-center gap-4">
                <button className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-quantminds-grey transition-colors">
                  <Linkedin size={16} className="text-gray-400" />
                </button>
                <button className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-quantminds-grey transition-colors">
                  <Github size={16} className="text-gray-400" />
                </button>
                <button className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-quantminds-grey transition-colors">
                  <Mail size={16} className="text-gray-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
