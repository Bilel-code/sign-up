import React from "react";
import photo from "../images/form.jpg";
function Form(){
    return (
             
    <section className="section">
        <div className="register">
        <div className="col-1">
            <h2>Inscription</h2>
            <span>Algerie Telecom vous souhaite la bienvenue</span>

            <form id="form" className="flex flex-col">
                <input type="texte" placeholder="Nom"/>
                <input type="texte" placeholder="mot de passe"/>
                <input type="texte" placeholder="comfirme mot de passe"/>
                <input type="texte" placeholder="numero de telephone"/>
            <button className="btn">Enregistrer</button>
            </form>
        </div>
        <div className="col-2">
            <img src={photo} alt="Ag"/>
        </div>
        </div>
                
    </section>
            
    );
    
    }
    
    export default Form;