import React, { useState, useEffect } from 'react';
import styles from './Styles.module.css'
import { useLocation } from 'react-router-dom';
const Design2 = ()=>{
    const location = useLocation()
    const {data} = location.state
    const personal = data.PersonalData
	const education = data.EducationData
	const skill = data.SkillData
	const experience = data.ExperienceData
    return(       
     <div className={styles.template}>
    <div className={styles.edu_cont}>
       {education.item1.from && <p className={styles.from_to_cont}>
      {education.item1.from} - {education.item1.to}  </p>}
        <p className={styles.degname_cont}>{education.item1.degName}</p>

        <p className={styles.instName_cont}>{education.item1.instName}</p>
    </div>



    <div className={styles.edu_cont}>
       {education.item2.from && <p className={styles.from_to_cont}>
      {education.item2.from} - {education.item2.to}  </p>}
        <p className={styles.degname_cont}>{education.item2.degName}</p>

        <p className={styles.instName_cont}>{education.item2.instName}</p>
    </div>


    <div className={styles.edu_cont}>
       {education.item3.from && <p className={styles.from_to_cont}>
      {education.item3.from} - {education.item3.to}  </p>}
        <p className={styles.degname_cont}>{education.item3.degName}</p>

        <p className={styles.instName_cont}>{education.item3.instName}</p>
    </div>


    <div className={styles.name_cont}>
        <p className={styles.firstName_cont}>{personal.firstName}</p>
        <p className={styles.lastName_cont}>{personal.lastName}</p>
        <p className={styles.intro_cont}>{personal.profession}</p>
        <p className={styles.professtion_cont}>{personal.userInfo}</p>
    </div>
    <div className={styles.experience_cont}>
   {experience.item1.from && <p className={styles.exp_from_to_cont}>{experience.item1.from}-{experience.item1.to}</p>}
    <p className={styles.exp_company_cont}>{experience.item1.companyName}</p>
        <p className={styles.exp_desig_cont}>{experience.item1.role}</p>
    <p className={styles.exp_info_cont}>{experience.item1.info}</p>
</div>
<div className={styles.experience_cont}>
   {experience.item2.from && <p className={styles.exp_from_to_cont}>{experience.item2.from}-{experience.item2.to}</p>}
    <p className={styles.exp_company_cont}>{experience.item2.companyName}</p>
        <p className={styles.exp_desig_cont}>{experience.item2.role}</p>
    <p className={styles.exp_info_cont}>{experience.item2.info}</p>
</div>
<div className={styles.experience_cont}>
   {experience.item3.from && <p className={styles.exp_from_to_cont}>{experience.item3.from}-{experience.item3.to}</p>}
    <p className={styles.exp_company_cont}>{experience.item3.companyName}</p>
        <p className={styles.exp_desig_cont}>{experience.item3.role}</p>
    <p className={styles.exp_info_cont}>{experience.item3.info}</p>
</div>
<div className={styles.skill_cont}>
    <p className={styles.skillName_cont}>{skill.item1.skillName}</p>
    <p className={styles.skillStar_cont}>{skill.item1.skillStars}</p>
</div>
<div className={styles.skill_cont}>
    <p className={styles.skillName_cont}>{skill.item2.skillName}</p>
    <p className={styles.skillStar_cont}>{skill.item2.skillStars}</p>
</div>
<div className={styles.skill_cont}>
    <p className={styles.skillName_cont}>{skill.item3.skillName}</p>
    <p className={styles.skillStar_cont}>{skill.item3.skillStars}</p>
</div>
<div className={styles.skill_cont}>
    <p className={styles.skillName_cont}>{skill.item4.skillName}</p>
    <p className={styles.skillStar_cont}>{skill.item4.skillStars}</p>
</div>
<div className={styles.skill_cont}>
    <p className={styles.skillName_cont}>{skill.item5.skillName}</p>
    <p className={styles.skillStar_cont}>{skill.item5.skillStars}</p>
</div>
<div className={styles.contact_cont}>
    <p className={styles.no_cont}>{personal.phoneNo}</p>
    <p className={styles.address_cont}>{personal.address} </p>
    <p className={styles.email_cont}>{personal.email}</p>
</div>
</div>)
}
export default Design2;