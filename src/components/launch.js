import React from 'react'
import './global.scss'
// import {BsInstagram} from 'react-icons/bs';
// import {AiFillTwitterCircle,AiFillLinkedin} from 'react-icons/ai';
import {AiOutlineBell} from 'react-icons/ai';

export default function Launch() {

    return (
        <div className='launch'>
            <p>Karibu : <span>🤝</span></p>
            <span>
                <AiOutlineBell />
            </span>
        </div>
    )
}
