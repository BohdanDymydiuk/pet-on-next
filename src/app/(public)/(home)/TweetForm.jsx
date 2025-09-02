'use client';

import { TWEETS_KEY } from '@/app/constants';
import React, { useState } from 'react';

const FORM_CLASSNAME = 'border border-[var(--foreground)]/10 rounded-xl p-4 text-[var(--foreground)] space-y-3 mb-5';
const BUTTON_CLASSNAME = 'bg-[var(--foreground)] text-[var(--background)] text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-gray-200 transition';

const TweetForm = ({ setTweets }) => {
  const [inputText, setInputText] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    setTweets(tweets => {
      const tweetsCopy = [...tweets].map(tweet => ({ id: tweet.id++, ...tweet }));

      tweetsCopy.unshift({ id: 0, author: 'anonymous', text: inputText });
      sessionStorage.setItem(TWEETS_KEY, JSON.stringify(tweetsCopy));

      return tweetsCopy;
    });

    setInputText('');
  }

  return (
    <form className={FORM_CLASSNAME} onSubmit={event => submitHandler(event)}>
      <input 
        name='content'
        placeholder="What's happening?"
        className='w-full bg-transparent outline-none placeholder-gray-500'
        value={inputText}
        onChange={event => setInputText(event.target.value)}
      />
      <div className='flex justify-end'>
        <button
          type='submit'
          className={BUTTON_CLASSNAME}
        >
          Tweet
        </button>
      </div>
    </form>
  );
};

export default TweetForm;
