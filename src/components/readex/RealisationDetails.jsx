import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setOpenDetails, setShowRealisation } from '../../stores/ReadexSlice';
import { Icon } from '@iconify/react';
import { portfolioData } from '../../data/portfolioData';

const RealisationDetails = () => {
    const realisation = useSelector((state) => state.readex.realisation)
    const dispatch = useDispatch();
    const index = realisation - 1;
    
    const returnList = () => {
        dispatch(setOpenDetails(false));
        dispatch(setShowRealisation(true));
    }
    return (
        <section className="realisation">
            <div className="return">
                <p onClick={returnList}><Icon icon="material-symbols:arrow-circle-left-outline" />Retour</p>
                {
                    portfolioData[index].source ?
                        <a className="link" href={portfolioData[index].source} target='_blank' rel="noreferrer">
                            <Icon icon="mdi:github" />
                            Code source
                        </a>
                        : ''
                }
            </div>
            <section className="container">
                <div className="infos">
                    <p>n°{portfolioData[index].id}</p>
                    <h2>{portfolioData[index].name}</h2>
                    <p>{portfolioData[index].realisationDuration}</p>
                    <div className="languages">
                        {
                            portfolioData[index].languages.filter(language => language !== 'tout').map((language, id) =>
                                <p key={id}>{language}</p>
                            )
                        }
                    </div>
                </div>
                <div className="other-infos">
                    <p className="description"><img src={portfolioData[index].picture} alt="" />{portfolioData[index].info}</p>
                </div>
            </section>
        </section>
    );
};

export default RealisationDetails;