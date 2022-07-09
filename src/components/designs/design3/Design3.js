import React, { useState, useEffect } from 'react';
import styles from './Styles.module.css'
import { useLocation } from 'react-router-dom';
const Design3 = ()=>{
    const location = useLocation()
    const {data} = location.state
    const personal = data.PersonalData
	const education = data.EducationData
	const skill = data.SkillData
	const experience = data.ExperienceData
    return(
        <div className={styles.template}>
    <div className={styles.personal_cont}>
        <div className={styles.name_cont}>
        <p className={styles.firstName_cont}>{personal.firstName}</p>
        <p className={styles.lastName_cont}>{personal.lastName}</p></div>
        <p className={styles.professtion_cont}>{personal.profession}</p>
        
    </div>
    
    <div className={styles.contact_cont}>
        <p className={styles.phoneNo_cont}>{personal.phoneNo}</p>
        <p className={styles.email_cont}>{personal.email}</p>
        <p className={styles.address_cont}>{personal.address}</p>
    </div>
    <div className={styles.intro_cont}>
        <p className={styles.p_intro_cont}>{personal.userInfo}</p>
    </div>
    <div className={styles.experience_cont}>
        <p className={styles.exp_desig_cont}>{experience.item1.role}</p>
        <p className={styles.exp_from_to_cont}>{experience.item1.from}-{experience.item1.to}</p>
        <p className={styles.exp_companyName_cont}>{experience.item1.companyName}</p>
        <p className={styles.exp_info_cont}>{experience.item1.info}</p>
    </div>
    <div className={styles.experience_cont}>
        <p className={styles.exp_desig_cont}>{experience.item2.role}</p>
        <p className={styles.exp_from_to_cont}>{experience.item2.from}-{experience.item1.to}</p>
        <p className={styles.exp_companyName_cont}>{experience.item2.companyName}</p>
        <p className={styles.exp_info_cont}>{experience.item2.info}</p>
    </div>
    <div className={styles.experience_cont}>
        <p className={styles.exp_desig_cont}>{experience.item3.role}</p>
        <p className={styles.exp_from_to_cont}>{experience.item3.from}-{experience.item3.to}</p>
        <p className={styles.exp_companyName_cont}>{experience.item3.companyName}</p>
        <p className={styles.exp_info_cont}>{experience.item3.info}</p>
    </div>
    
    <div className={styles.education_cont}>
        <p className={styles.edu_from_to_cont}>{education.item1.from}-{education.item1.to}</p>
        <p className={styles.degreeName_cont}>{education.item1.degName}</p>
        <p className={styles.instName_cont}>{education.item1.instName}</p>
    </div>
    <div className={styles.education_cont}>
        <p className={styles.edu_from_to_cont}>{education.item2.from}-{education.item2.to}</p>
        <p className={styles.degreeName_cont}>{education.item2.degName}</p>
        <p className={styles.instName_cont}>{education.item2.instName}</p>
    </div>
    <div className={styles.education_cont}>
        <p className={styles.edu_from_to_cont}>{education.item3.from}-{education.item3.to}</p>
        <p className={styles.degreeName_cont}>{education.item3.degName}</p>
        <p className={styles.instName_cont}>{education.item3.instName}</p>
    </div>
    

    
   <div className={styles.skill_cont}>
     <p className={styles.skill_name_cont}>{skill.item1.skillName}</p>
        </div>  
        <div className={styles.skill_cont}>
     <p className={styles.skill_name_cont}>{skill.item2.skillName}</p>
        </div>
        <div className={styles.skill_cont}>
     <p className={styles.skill_name_cont}>{skill.item3.skillName}</p>
        </div>
        <div className={styles.skill_cont}>
     <p className={styles.skill_name_cont}>{skill.item4.skillName}</p>
        </div>
        <div className={styles.skill_cont}>
     <p className={styles.skill_name_cont}>{skill.item5.skillName}</p>
        </div>
    </div>
    )
}
export default Design3;