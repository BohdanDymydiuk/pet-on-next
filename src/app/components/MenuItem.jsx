import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

const MenuItem = ({ menu, isActive }) => {
  const { href, name } = menu;

  return (
    <Link className={clsx({'text-white': isActive})} href={href}>{name}</Link>
  );
};

export default MenuItem;
