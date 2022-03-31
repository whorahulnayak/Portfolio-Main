import React from 'react';
import { BsTwitter, BsInstagram,BsLinkedin,BsGithub } from 'react-icons/bs';
import {Link} from 'react-router-dom';
const SocialMedia = () => (
  <div className="app__social">
      <a href="https://twitter.com/Rahulanilnayak1" target='_blank'>
        <div>
          <BsTwitter />
        </div>
      </a>

      <a href="https://www.linkedin.com/in/rahul-anil-nayak-039436166/" target='_blank'>
        <div>
          <BsLinkedin />
        </div>
      </a>

      <a href="https://github.com/whorahulnayak" target='_blank'>
        <div>
          <BsGithub />
        </div>
      </a>

      <a href="https://www.instagram.com/rahulxnayak/" target='_blank'>
        <div>
          <BsInstagram />
        </div>
      </a>
  </div>
);

export default SocialMedia;