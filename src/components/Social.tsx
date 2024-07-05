import Link from 'next/link';
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';
import React from 'react';

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

interface SocialItem {
  icon: JSX.Element;
  path: string;
}

const socials: SocialItem[] = [
  {
    icon: <FaGithub />,
    path: '',
  },
  {
    icon: <FaYoutube />,
    path: '',
  },
  {
    icon: <FaLinkedin />,
    path: '',
  },
  {
    icon: <FaTwitter />,
    path: '',
  },
];

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
