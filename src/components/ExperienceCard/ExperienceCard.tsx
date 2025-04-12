import React from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  period,
  description
}) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
      <div className="relative p-6 bg-black/90 backdrop-blur-sm rounded-2xl border border-white/10 h-full">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{title}</h3>
            <p className="text-purple-400 font-medium">{company}</p>
            <p className="text-gray-400 text-sm">{period}</p>
          </div>
          <p className="text-gray-300 text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard; 