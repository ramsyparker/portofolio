import React from 'react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  credentialLink?: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  issuer,
  date,
  credentialLink
}) => {
  return (
    <div className="relative group cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-300"></div>
      <a 
        href={credentialLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block relative p-4 bg-black/80 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
      >
        <div>
          <h3 className="text-base font-semibold text-white mb-1 line-clamp-1">{title}</h3>
          <p className="text-blue-400 text-sm font-medium">{issuer}</p>
          <p className="text-gray-400 text-xs mt-1">{date}</p>
        </div>
      </a>
    </div>
  );
};

export default CertificationCard; 