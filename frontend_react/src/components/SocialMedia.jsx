import React from 'react';
import { BsTwitter, BsInstagram,BsLinkedin } from 'react-icons/bs';
import {Link} from 'react-router-dom';
const SocialMedia = () => (
  <div className="app__social">
    <Link to='https://twitter.com/Rahulanilnayak1'>
      <div>
        <BsTwitter />
      </div>
    </Link>
    <Link>
      <div>
        <BsLinkedin />
      </div>
    </Link>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;