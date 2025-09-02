import React, { Suspense } from 'react';
import Explore from './Explore';

export const metadata = { title: 'Explore' };

const ExplorePage = () => <Suspense><Explore /></Suspense>;

export default ExplorePage;
