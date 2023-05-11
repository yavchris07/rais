import React from 'react'
import items from './data'
import './global.scss'

export default function Card() {
    
    return (
        <div className='cards'>
            {
                items.map((item)=>(
                    <div 
                        key={item.id} 
                        className='card' 
                        style={{background:item.bg,color:item.cl}}
                    >
                        <h5>{item.object}</h5>
                        <h2>{item.title}</h2>
                    </div>
                ))
            }
        </div>
    )
}
