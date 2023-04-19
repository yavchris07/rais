

import './navbar.scss';
// import Icon from '../assets/menu.png';
// import Logo from '../assets/logo fg vert.png';
import {BsFacebook,BsInstagram} from 'react-icons/bs';
// import {AiFillTwitterCircle,AiFillLinkedin} from 'react-icons/ai';
// import {BsTelephone} from 'react-icons/bs';

export default function Navbar() {

  return (
    <div className='nav'>

        <ul>
          <a href='#banner'><BsFacebook /></a>
          <a href='#about'><BsInstagram /></a>
          <a href='#banner'><BsFacebook /></a>
          <a href='#about'><BsInstagram /></a>
        </ul>

    </div>
  );
}

