
import './accueil.scss'
import  Banner from '../components/banner'
import  About from '../components/about'
import  Launch from '../components/launch'
import Package from '../components/package'
import Box from '../components/box'
import Contacts from '../components/contacts'
import Container from '../components/container'



export default function Accueil() {

  return (
    <div className='accueil'>
      <Launch />
      
      <Banner />
      <Container />
      <Box />
      <h4>NOS PAQUETS </h4>
      <Package />
      <About />
      <Contacts />
    </div>
  );
}


