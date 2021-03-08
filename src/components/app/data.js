import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/contact',
    text: 'contact',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.instagram.com/healthy.foodyss/?hl=en',
    icon: <FaInstagram />,
  },
  {
    id: 2,
    url: 'https://github.com/tkhc',
    icon: <FaGithub />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/terrencekhchan/',
    icon: <FaLinkedin />,
  },
];
