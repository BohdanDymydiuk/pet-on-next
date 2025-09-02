import React from 'react';

const FORM_CLASSNAME = 'border border-[var(--foreground)]/10 rounded-xl p-4 text-[var(--foreground)] space-y-3 mb-5';
const BUTTON_CLASSNAME = 'bg-[var(--foreground)] text-[var(--background)] text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-gray-200 transition';

const TweetForm = () => {
  return (
    <form className={FORM_CLASSNAME}>
      <input 
        name='content'
        placeholder="What's happening?"
        className='w-full bg-transparent outline-none placeholder-gray-500'
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
