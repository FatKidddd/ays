import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/', label: 'Home' },
  { href: '/', label: 'About Us' },
  { href: '/', label: 'Community' },
];

export default function Header() {
  return (
    <header className='bg-primary-950 sticky top-0 z-50'>
      <div className='mx-auto flex h-20 max-w-[90%] items-center justify-between'>
        <UnstyledLink
          href='/'
          className='flex items-center space-x-5 p-2 text-white hover:text-gray-400'
        >
          <h1 className='h0 font-logo mt-1'>AYS</h1>
          <h4>AI Youth Singapore</h4>
        </UnstyledLink>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink
                  href={href}
                  className='text-white hover:text-gray-400'
                >
                  <div className='flex-1 p-2'>{label}</div>
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
