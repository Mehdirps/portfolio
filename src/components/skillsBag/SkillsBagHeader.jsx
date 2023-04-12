import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../../stores/SkillsBagSlice';

const SkillsBagHeader = (props) => {
    const category = useSelector((state) => state.skillsBag.category)
    const dispatch = useDispatch();

    const handleCategory = (e) => {
        dispatch(setCategory(e.target.attributes.category.value))
    }
    return (
        <section className='bag-header'>
            <div className="title">
                <figure className='bag'>
                    <img src="./img/icons/bag.png" alt="icon sac" />
                </figure>
                <h2>Skills Bag</h2>
            </div>
            <div className="category">
                <p>{category}</p>
                <div className="category-icons">
                    <img src="./img/icons/skills/frontend.png" alt="icon front-end" category="front-end" onClick={(e) => handleCategory(e)} />
                    <img src="./img/icons/skills/backend.png" alt="icon back-end" category="back-end" onClick={(e) => handleCategory(e)} />
                    <img src="./img/icons/skills/database.png" alt="icon base de donnée" category="database" onClick={(e) => handleCategory(e)} />
                    <img src="./img/icons/skills/design.png" alt="icon design" category="design" onClick={(e) => handleCategory(e)} />
                    <img src="./img/icons/skills/gestion.png" alt="icon gestion" category="gestion" onClick={(e) => handleCategory(e)} />
                </div>
            </div>
            <p className='skills-numer'>{props.SkillsNumber} Skills</p>
        </section>
    );
};

export default SkillsBagHeader;