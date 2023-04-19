import React from 'react';
import Accueil from './pages/accueil'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar'

export default function Routing() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Accueil />} />
       
      {/* <Route path="/abonnement" element={<Abonnement />} /> */}
    </Routes>
    </BrowserRouter>
  );
}

