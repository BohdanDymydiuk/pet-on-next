'use client';

import Title from '@/app/components/Title';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const Explore = () => {
  const searchParams = useSearchParams();
  const tag = searchParams.get('tag');

  const text = `Explore${!!tag ? ` by #${tag}` : ''}`;

  return (
    <div>
      <Title text={text} />
    </div>
  );
};

export default Explore;
