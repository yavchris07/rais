

import './navbar.scss';
// import Icon from '../assets/menu.png';
// import Logo from '../assets/logo fg vert.png';
import {TbPackages} from 'react-icons/tb';
import{RiHomeSmileLine} from 'react-icons/ri'
// import {AiFillTwitterCircle,AiFillLinkedin} from 'react-icons/ai';
import {BsBookmarks} from 'react-icons/bs';
import {MdOutlineContactSupport} from 'react-icons/md'

export default function Navbar() {

  return (
    <div className='nav'>

        <ul>
          <a href='#banner'><RiHomeSmileLine /></a>
          <a href='#package'><TbPackages /></a>
          <a href='#about'><BsBookmarks /></a>
          <a href='#contact'><MdOutlineContactSupport /></a>
          
        </ul>

    </div>
  );
}

