'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PAGES } from '@/app/config/pages.config';
import useBrowserTheme from '@/app/hooks/useBrowserTheme';

const DIV_CLASSNAME = 'border border-[var(--foreground)]/10 rounded-xl p-4 bg-[var(--background)] text-[var(--foreground)] shadow-md';

export const Tweet = ({ tweet }) => {
  const { author, text } = tweet;

  const isDarkTheme = useBrowserTheme();

  return (
    <div className={DIV_CLASSNAME}>
      <div className='flex items-center gap-3 mb-2'>
        <Image
          src={isDarkTheme ? '/x-logo.svg' : '/x-logo-dark.svg'}
          alt='X logo'
          width={24}
          height={24}
        />
        <Link href={PAGES.PROFILE(author)} className='font-semibold'>@{author}</Link>
      </div>
      <p className='text-[var(--foreground)]/90'>{text}</p> 
    </div>
  );
};
