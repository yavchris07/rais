import React from 'react'
import './global.scss'
import team from '../assets/team.JPG' 

export default function About() {
    return (
        <section id='about'>
            <img src={team} alt='cover'/>
            <div className='child'>
                <h1>Apropos</h1>
                <p>
                    Est une équipe gigatesque de geeks, chacun avec sa specialite, il y’a des developpeurs web, developpeurs de logiciels, developpeurs Mobile, des concepteurs des interfaces de programmation d’applications, des designers professionnels.
                    voulant aider  et accompagner des etudiants en informatique, dans leurs travails de fin de cycle. En leur fournissant des paquets ci-dessus au prix academique
                    verset biblque
                </p>
            </div>
        </section>
    )
}
