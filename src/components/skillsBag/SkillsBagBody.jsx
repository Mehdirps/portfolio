import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSkill } from '../../stores/SkillsBagSlice';

const SkillsBagBody = (props) => {

    const skills = props.skills;
    const skillCategory = useSelector((state) => state.skillsBag.category)
    const dispatch = useDispatch();
    const skill = useSelector((state) => state.skillsBag.skill)

    const handleSkillDetails = (skill) => {
        dispatch(setSkill(skill));
    }

    return (
        <section className="skillsBag-body">
            <section className="skills-container">
                {
                    skills.map((item, id) =>
                        item.category === skillCategory ?
                            <div className="skill" id={item.name === skill.name ? 'skill-active' : ''} key={id} onClick={() => handleSkillDetails(item)}>
                                <figure>
                                    <img src={item.icon} alt="" />
                                </figure>
                                <p>{item.name}</p>
                            </div>
                            : null
                    )
                }
            </section>
            <section className="skill-details">
                <h3>{skill.name}</h3>
                <p>{skill.started_date}</p>
                <p>{skill.category}</p>
            </section>
        </section>
    );
};

export default SkillsBagBody;