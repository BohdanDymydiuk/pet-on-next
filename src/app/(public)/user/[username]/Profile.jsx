'use client';

import Title from '@/app/components/Title';
import { useParams } from 'next/navigation';
import React from 'react';

const Profile = () => {
  const params = useParams();

  return (
    <div>
      <Title text={`Profile ${`@${params.username}`}`} />
    </div>
  );
};

export default Profile;
