import React from 'react';
import { TWEETS } from "../../shared/tweets.data";
import { Tweet } from "./Tweet";
import TweetForm from './TweetForm';
import { TITLE_CLASSNAME } from '@/app/constants';

export const metadata = { title: 'Home' };

const Home = () => {
  return (
    <div>
      <h1 className={TITLE_CLASSNAME}>Home</h1>
      <TweetForm />
      <div className="space-y-6">
        {TWEETS.map(tweet => (
          <Tweet key={tweet.author} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}

export default Home;
