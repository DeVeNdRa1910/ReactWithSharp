import React from 'react';

function Footer() {
  return (
    <div className='flex justify-around bg-blue-400'>
      <div className='text-5xl items-center text-white font-extrabold pt-1 my-5 '>
        <h2>The Generics</h2>
      </div>
      <div className='flex justify-evenly items-center gap-8'>
        <a href="https://www.youtube.com/" target="_blank">
          <img src="/images/youtube.svg" className="logo w-10 h-10" alt="YT-logo" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src="/images/instagram.svg" className="logo w-10 h-10" alt="INSTA-logo" />
        </a>
        <a href="https://music.youtube.com/" target="_blank">
          <img src="/images/music.svg" className="logo w-10 h-10" alt="MUSIC-logo" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
