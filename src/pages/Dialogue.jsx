import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DialogueMessage from '../components/DialogueMessage';

const Dialogue = () => {
    const [index, setIndex] = useState(0)
    const navigate = useNavigate();

    const dialogueMessage = [
        "Bonjour ! Je m’appelle Mehdi Raposo. Je suis Développeur FullStack Web Et Mobile. J’ai un titre professionnel RNCP Designer Web - bac +2 et je suis actuellement en formation Concepteur Développeur d’applications - bac +3.",
        "Dans le cadre de ma formation est en alternance,je recherche actuellement une entreprise dans le domaine du développement web ou mobile dans l’Yonne, l’Ile-de-France ou en 100% télétravail",
        "J’ai des compétences en HTML, CSS, JavaScript, React.js, Node.js, Express, MongoDB et aussi en PHP avec le framework Symfony."
    ]
    // TODO Ajouter toutes les phrases nécéssaires
    const NextMessage = () => {
        const increment = index + 1;
        if (increment === dialogueMessage.length) {
            navigate('/')
            return
        }
        setIndex(increment)
    }
    return (
        <section className='dialogue'>
            <section className="container">
                <figure className='personnage'>
                    <img src="./img/personnage.png" alt="" />
                </figure>
                <DialogueMessage message={dialogueMessage[index]} next={NextMessage} />
            </section>
        </section>
    );
};

export default Dialogue;