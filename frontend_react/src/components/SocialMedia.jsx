import React from 'react';
import { BsTwitter, BsInstagram,BsLinkedin,BsGithub } from 'react-icons/bs';
import {Link} from 'react-router-dom';
const SocialMedia = () => (
  <div className="app__social">
    <Link to='https://twitter.com/Rahulanilnayak1'>
      <div>
        <BsTwitter />
      </div>
    </Link>

    <Link to='https://www.linkedin.com/in/rahul-anil-nayak-039436166/'>
      <div>
        <BsLinkedin />
      </div>
    </Link>

    <Link to='https://github.com/whorahulnayak'>
      <div>
        <BsGithub />
      </div>
    </Link>

    
    <Link to='https://www.instagram.com/rahulxnayak/'>
      <div>
        <BsInstagram />
      </div>
    </Link>
  </div>
);

export default SocialMedia;