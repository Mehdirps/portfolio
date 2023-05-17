import React from 'react';
import { useDispatch } from 'react-redux';
import { setExp } from '../../stores/ExpTeamSlice';

const ExpCard = (item) => {
    const exp = item.item;
    const dispatch = useDispatch();

    return (
        <article className='expCard' onClick={() => dispatch(setExp(exp))}>
            <figure className="logo" >
                <img src={exp.logo} alt={`Illustration du logo de l'entreprise ${exp.entreprise}`} style={{ width: '50px' }} />
            </figure>
            <div className="infos">
                <h3>{exp.entreprise}</h3>
                <span className='life'></span>
                <p>{exp.date}</p>
            </div>
            <p className='exp-id'>N° {exp.id}</p>
        </article >
    );
};

export default ExpCard;