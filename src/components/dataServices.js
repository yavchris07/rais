import {TiPrinter} from 'react-icons/ti';
import {SlGlobe} from 'react-icons/sl';
import {SiAdobecreativecloud} from 'react-icons/si';
import {GoMegaphone} from 'react-icons/go';
// import {BsArrowRight} from 'react-icons/bs';

const  items = [
    {
        id:1, 
        icon: <GoMegaphone />, 
        title: 'Communication',
        desc:'7 services à votre disposition ', 
        btn:'Détail',
        link: '/communication',
        btns:'Lire Plus',
        color: '#4a7e1d',
        border:'1px solid #041504'
    },
    {
        id:2, 
        icon: <TiPrinter />, 
        title: 'Imprimerie',
        desc:'Impression sur tout support et tout format', 
        btn:'Détail',
        link: '/imprimerie',
        btns:'Lire Plus',
        color: '#041504',
        border:''
    },
    {
        id:3, 
        icon: <SlGlobe />,
        title: 'Web services',
        desc:'6 services à votre disposition', 
        btn:'Détail',
        link: '/webservices',
        btns:'Lire Plus',
        color: '#041504',
        border:''
    },
    {
        id:4, 
        icon: <SiAdobecreativecloud />,
        title: 'Créatif',
        desc:'Plusieurs services à votre portée', 
        btn:'Détail',
        link: '/creatifservices',
        btns:'Lire Plus',
        color: '#4a7e1d',
        border:'1px solid #041504'
    }
];

/*
 --kolor-primary:;
    --kolor-green-light:;
*/
export default items;