'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { MENU } from '../shared/menu.data';
import MenuItem from './MenuItem';
import { match } from 'path-to-regexp';

const Menu = () => {
  const pathname = usePathname();

  return (
    <nav className='flex gap-6 text-white/80'>
      {MENU.map(menu =>
        <MenuItem
          key={menu.name}
          menu={menu}
          isActive={!!match(menu.href)(pathname)}
        />
      )}
    </nav>
  );
};

export default Menu;
