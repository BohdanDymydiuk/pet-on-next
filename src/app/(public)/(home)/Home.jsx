'use client';

import React, { useEffect, useState } from 'react';
import { Tweet } from "./Tweet";
import TweetForm from './TweetForm';
import { TITLE_CLASSNAME, TWEETS_KEY } from '@/app/constants';
import { TWEETS } from '@/app/shared/tweets.data';

const Home = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const getStored = () => JSON.parse(sessionStorage.getItem(TWEETS_KEY));

    if (!getStored()) {
      sessionStorage.setItem(TWEETS_KEY, JSON.stringify(TWEETS));
    }

    setTweets(getStored());
  }, []);

  return (
    <div>
      <h1 className={TITLE_CLASSNAME}>Home</h1>
      <TweetForm setTweets={setTweets} />
      <div className="space-y-6">
        {tweets.map(tweet => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}

export default Home;
