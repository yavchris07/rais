import './global.scss'
export default function Contacts() {
    
    return (
        <section className="contact" id="contact">
            <h3>CONTACTS</h3>
            <div className="mailing">
                <form>
                    <input 
                        type='text' 
                        placeholder="Votre Nom"
                        className='input'
                    />
                    <br></br>
                    <input 
                        type='mail' 
                        placeholder="Votre Email"
                        className='input'
                    />
                     <br></br>
                    <textarea 
                        rows='7'
                        placeholder="Le texte ici !"
                    >
                    </textarea>
                    <br></br>
                    <input 
                        type='submit' 
                        value='Envoyer'
                        className="btn"
                    />
                </form>
                <div className="by_whatsapp">
                    <img src="" alt="" />
                    <a 
                        target='_blanc'
                        href="https://wa.me/+243972690841?text=Bonjour Raïs !, Je suis interressé(e) par tes sevices énumerés ci-dessous."
                    >
                        Via whatsapp
                    </a>
                    {/*  */}
                </div>
                
            </div>

            <p className='copy'>
                Tout droit reservé | Raïs 2020 
            </p>
            
        </section>
    )
}
