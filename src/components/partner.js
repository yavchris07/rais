import React from 'react';
import './partner.scss';
import Carousel from 'react-elastic-carousel';

export default function Partner() {

  let partners = [
    {id:1,title:'Partenaire 1'},
    {id:2,title:'Partenaire 2'},
    {id:3,title:'Partenaire 3'},
    {id:4,title:'Partenaire 4'},
    {id:5,title:'Partenaire 5'},
    {id:6,title:'Partenaire 6'},
    {id:7,title:'Partenaire 7'},
    {id:8,title:'Partenaire 8'},
    {id:9,title:'Partenaire 9'},
    {id:10,title:'Partenaire 10'},
  ]


  const breakPoint = [
    {width:1,itemsToShow:1},
    {width:550,itemsToShow:2},
    {width:768,itemsToShow:3},
    {width:1200,itemsToShow:4},
  ]
  return (
    <div className='carousel'>
       {/* <h2>Ceux qui nous consultent trop souvent </h2> */}
      <Carousel 
      className="slide"
      breakPoints={breakPoint}
      enableAutoPlay={true}
      autoPlaySpeed={3000}
      showArrows={false}
      
      >
        {
          partners.map(partner => 
          <div key={partner.id} className='card'>
          <ul>
            <li>{partner.title}</li>
          </ul>
          </div>
        )}
      </Carousel>
    </div>
  );
}

//https://www.youtube.com/watch?v=6SCYzHkve9E&list=PLSFS82kqtqHC5I1ptRWDmqawUHCUHa_zn
