
import React from "react";

interface HeaderProps {
  name: string;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ name, title }) => {
  return (
    <div className="mb-8 text-center relative">
      <div className="inline-block px-8 py-4 bg-sky-100/30 backdrop-blur-sm rounded-lg shadow-sm border border-sky-100/20">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-sky-950">{name}</h1>
        <p className="text-lg text-sky-700">{title}</p>
      </div>
    </div>
  );
};

export default Header;
