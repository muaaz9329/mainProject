import React, { useState, useEffect , useContext } from 'react';
import { InfoContext } from '../../../contextAPI/ContextApi';
import { useLocation } from 'react-router-dom';
import './styles.css'
import ColorFill1 from './images/ColorFill1.png'
import Contact from './images/Contact.png'
import Education from './images/Education.png'
import Experience from './images/Experience.png'
import Profile from './images/Profile.png'
import Rectangle1_0 from './images/Rectangle1_0.png'
import Rectangle1 from './images/Rectangle1.png'
import Rectangle1copy from './images/Rectangle1copy.png'
import Rectangle1copy2 from './images/Rectangle1copy2.png'
import Rectangle5copy from './images/Rectangle5copy.png'
import Rectangle5copy2 from './images/Rectangle5copy2.png'
import Rectangle5copy3 from './images/Rectangle5copy3.png'
import Rectangle5copy4 from './images/Rectangle5copy4.png'
import Rectangle5copy5 from './images/Rectangle5copy5.png'
import Skills from './images/Skills.png'
import StarsSystem from '../StarsSystem';
 const Design1 = ()=>{

	const location = useLocation();
	const {data} = location.state
	const personal = data.PersonalData
	const education = data.EducationData
	const skill = data.SkillData
	const experience = data.ExperienceData;
	const star =<div> <svg class="star"  width="120px" height="120px" viewBox="0 0 120 120" enable-background="new 0 0 120 120" ><circle cx="60" cy="60.834" r="54.167"/></svg></div>
	const number = parseInt(skill.item1.skillStars);

	function capitalFirst(string) {
		return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();;
	  }
	return(<>
	<div>
			<div className='full-cont'>
				<div className='bgbgbg'>
					<div id="ColorFill1"><img src={ColorFill1}/></div>
					<div id="Rectangle1"><img src={Rectangle1}/>
						<div className="name-cont">
							<p className="name-first-cont">{capitalFirst(personal.firstName)}</p>
							<p className="name-last-cont">{capitalFirst(personal.lastName)}</p>
						</div>
						<div className="prof-cont"><p className="prof-para">{capitalFirst(personal.profession)}</p></div>
					</div>
					<div id="Rectangle1_0"><img src={Rectangle1_0}/></div>
					<div id="Rectangle1copy"><img src={Rectangle1copy}/></div>
					<div id="Rectangle1copy2"><img src={Rectangle1copy2}/></div>
					<div id="Experience"><img src={Experience}/></div>
					<div id="Rectangle5copy4"><img src={Rectangle5copy4}/>
					<div className="exp-cont">
						<div className="exp-from-to-cont">
							<p className="from-to-para">{experience.item1.from}-{experience.item1.to}</p>
						</div>
						<div className="exp-company-cont">
							<p className="company-para">
								{experience.item1.companyName}
							</p>
						</div>
						<div className="exp-designation-cont">
							<p className="designation-para">
								{experience.item1.role}
							</p>
						</div>
						<div className="exp-infoRole-cont">
							<p className="infoRole-para">
								{experience.item1.info}
							</p>
						</div>
					</div>


					<div className="exp-cont">
						<div className="exp-from-to-cont">
							<p className="from-to-para">{experience.item2.from}-{experience.item2.to}</p>
						</div>
						<div className="exp-company-cont">
							<p className="company-para">
								{experience.item2.companyName}
							</p>
						</div>
						<div className="exp-designation-cont">
							<p className="designation-para">
								{experience.item2.role}
							</p>
						</div>
						<div className="exp-infoRole-cont">
							<p className="infoRole-para">
								{experience.item2.info}
							</p>
						</div>
					</div>

					<div className="exp-cont">
						<div className="exp-from-to-cont">
							<p className="from-to-para">{experience.item3.from}-{experience.item3.to}</p>
						</div>
						<div className="exp-company-cont">
							<p className="company-para">
								{experience.item3.companyName}
							</p>
						</div>
						<div className="exp-designation-cont">
							<p className="designation-para">
								{experience.item3.role}
							</p>
						</div>
						<div className="exp-infoRole-cont">
							<p className="infoRole-para">
								{experience.item3.info}
							</p>
						</div>
					</div>




					</div>
					<div id="Profile"><img src={Profile}/></div>
					<div id="Rectangle5copy3"><img src={Rectangle5copy3}/><div className="intro-cont">
						<p className="intro-para"> {personal.userInfo}</p>
					</div>
				</div>
					<div id="Contact"><img src={Contact}/>
						<p className="heading-phone-cont">Phone</p>
					<div className="phone-cont">
						<p className="phone-para">{personal.phoneNo}</p>
					</div>
					<p className="heading-email-cont">Email</p>
					<div className="email-cont">
						<p className="email-para">{personal.email}</p>
					</div>
					<p className="heading-address-cont">Address</p>
					<div className="address-cont">
						<p className="address-para">{personal.address}</p>
					</div>
					</div>
					<div id="Rectangle5copy2"><img src={Rectangle5copy2}/></div>
					<div id="Education"><img src={Education}/></div>
					<div id="Rectangle5copy"><img src={Rectangle5copy}/>
					<div className="edu-cont">
						<div className="edu-from-to-cont">
							<p className="From-To-para">{education.item1.from}-{education.item1.to}</p>
						</div>
						<div className="edu-degName-cont">
							<p className="degName-para">{education.item1.degName}</p>
						</div>
						<div className="edu-instName-cont">
							<p className="instName-para">{education.item1.instName}</p>
						</div>
					</div>
					


					<div className="edu-cont">
						<div className="edu-from-to-cont">{education.item2.from &&
							<p className="From-To-para">{education.item2.from}-{education.item2.to}</p>}
						</div>
						<div className="edu-degName-cont">
							<p className="degName-para">{education.item2.degName}</p>
						</div>
						<div className="edu-instName-cont">
							<p className="instName-para">{education.item2.instName}</p>
						</div>
					</div>



					<div className="edu-cont">
						<div className="edu-from-to-cont">{education.item3.from &&
							<p className="From-To-para">{education.item3.from}-{education.item3.to}</p>}
						</div>
						<div className="edu-degName-cont">
							<p className="degName-para">{education.item3.degName}</p>
						</div>
						<div className="edu-instName-cont">
							<p className="instName-para">{education.item3.instName}</p>
						</div>
					</div>
					



					




					
				</div>
					<div id="Skills"><img src={Skills}/></div>
					<div id="Rectangle5copy5"><img src={Rectangle5copy5}/>
					

					<div className="skill-cont">
						<div className="skill-name-cont">
							<p className="skill-name-para">{skill.item1.skillName}</p>
						</div>
						<div className="skill-star-cont">
							<div className="star-working">
							{parseInt(skill.item1.skillStars) > 0 && <StarsSystem symbol={star} number={parseInt(skill.item1.skillStars)}/>}
							</div>
						</div>
					</div>

					<div className="skill-cont">
						<div className="skill-name-cont">
							<p className="skill-name-para">{skill.item2.skillName}</p>
						</div>
						<div className="skill-star-cont">
							<div className="star-working">
								{parseInt(skill.item2.skillStars) > 0 && <StarsSystem symbol={star} number={parseInt(skill.item2.skillStars)}/>}
							</div>
						</div>
					</div>

					<div className="skill-cont">
						<div className="skill-name-cont">
							<p className="skill-name-para">{skill.item3.skillName}</p>
						</div>
						<div className="skill-star-cont">
							<div className="star-working">
							{parseInt(skill.item3.skillStars) > 0 && <StarsSystem symbol={star} number={parseInt(skill.item3.skillStars)}/>}
							</div>
						</div>
					</div>

					<div className="skill-cont">
						<div className="skill-name-cont">
							<p className="skill-name-para">{skill.item4.skillName}</p>
						</div>
						<div className="skill-star-cont">
							<div className="star-working">
							{parseInt(skill.item4.skillStars) > 0 && <StarsSystem symbol={star} number={parseInt(skill.item4.skillStars)}/>}
							</div>
						</div>
					</div>


					<div className="skill-cont">
						<div className="skill-name-cont">
							<p className="skill-name-para">{skill.item5.skillName}</p>
						</div>
						<div className="skill-star-cont">
							<div className="star-working">
							{parseInt(skill.item5.skillStars) > 0 && <StarsSystem symbol={star} number={parseInt(skill.item5.skillStars)}/>}
							</div>
						</div>
					</div>



					</div>
				</div>
		
			</div></div>
	</>)
   
}

export default Design1;