export default function Contacts() {
    
    return (
        <section className="contact">
            <h3>CONTACTS</h3>
            <div className="mailing">
                <form>
                    <input 
                        type='text' 
                        placeholder="Votre nom"
                    />
                    <br></br>
                    <input 
                        type='mail' 
                        placeholder="Votre email"
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
                        value='Valider'
                        className="btn"
                    />
                </form>
                <div className="by_whatsapp">
                    <img src="" alt="" />
                    <a href="www">Par whatsapp</a>
                </div>
                
            </div>
            
        </section>
    )
}
