import './navbar.scss';
import {TbPackages} from 'react-icons/tb';
import{RiHomeSmileLine} from 'react-icons/ri'
import {BsBookmarks} from 'react-icons/bs';
import {MdOutlineContactSupport} from 'react-icons/md'

export default function Navbar() {

  return (
    <div className='nav'>

        <ul>
          <a href='#banner'>
            <RiHomeSmileLine className='icon'/>
          </a>
          <a href='#package'>
            <TbPackages className='icon'/>
          </a>
          <a href='#about'>
            <BsBookmarks className='icon'/>
          </a>
          <a href='#contact'>
            <MdOutlineContactSupport className='icon'/>
          </a>
        </ul>

    </div>
  );
}

