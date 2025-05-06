import React from 'react';
import { Wheat } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="mr-2 text-[#155724]">
        <Wheat size={32} strokeWidth={1.5} />
      </div>
      <div>
        <h1 className="text-2xl font-bold text-[#155724]">FarmFresh</h1>
        <p className="text-xs text-[#5F4B32]">Agriculture and Organic Farms</p>
      </div>
    </div>
  );
};

export default Logo;