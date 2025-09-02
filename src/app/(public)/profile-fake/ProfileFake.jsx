'use client';

import Title from '@/app/components/Title';
import { PAGES } from '@/app/config/pages.config';
import { useRouter } from 'next/navigation';
import React from 'react';

const ProfileFake = () => {
  const router = useRouter();

  return (
    <div>
      <Title text={'Fake Profile'} />
      <button className='w-full cursor-pointer' onClick={() => router.push(PAGES.HOME)}>Go to home</button>
    </div>
  );
};

export default ProfileFake;
