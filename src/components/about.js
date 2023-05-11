import React from 'react'
import './global.scss'
import team from '../assets/t.jpg' 

export default function About() {
    return (
        <section id='about'>
            <img src={team} alt='cover'/>
            <div className='child'>
                <h1>Apropos</h1>
                <p>
                    Est une Plateforme composée d'une <strong>équipe gigantesque de geeks</strong>, 
                    chacun avec sa spécialité, 
                    il y'a des développeurs web, développeurs de logiciels, développeur Mobile, 
                    des concepteurs des interfaces de programmation d’applications(API), 
                    des designers professionnels.
                    voulant aider et accompagner des étudiants en informatique, 
                    dans leur travail de fin de cycle. En leur fournissant des paquets ci-dessus au prix académique
                </p>
            </div>
        </section>
    )
}
