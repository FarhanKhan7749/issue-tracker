'use client';

import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import { IoBugSharp } from "react-icons/io5";
import classnames from 'classnames';
 
const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    {label: 'Dashboard', href:'/'},
    {label: 'Issues', href:'/issues'},
  ];

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href="/"><IoBugSharp /></Link>
        <ul className='flex space-x-6'>
            {links.map((link)=>(
              <Link key={link.href} 
                className={`${link.href === currentPath ? 'text-zinc-800' : 'text-zinc-500'} text-zinc-500 hover:text-zinc-800 transition-colors`} 
                href={link.href}>
                  {link.label}
              </Link>
            ))}
        </ul>
    </nav>
  );
};

export default NavBar