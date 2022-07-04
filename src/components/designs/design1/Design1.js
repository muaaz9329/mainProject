import React, { useState, useEffect , useContext } from 'react';
import { InfoContext } from '../../../contextAPI/ContextApi';
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
export const Design1 = ()=>{
    
    return(<div>
    <div className='full-cont'>
        <div id="background">
			<div id="ColorFill1"><img src={ColorFill1}/></div>
			<div id="Rectangle1"><img src={Rectangle1}/>
				<div className="name-cont">
					<p className="name-first-cont">Muaaz</p>
					<p className="name-last-cont">Bin Sarfraz</p>
				</div>
				<div className="prof-cont"><p className="prof-para">UX Designer</p></div>
			</div>
			<div id="Rectangle1_0"><img src={Rectangle1_0}/></div>
			<div id="Rectangle1copy"><img src={Rectangle1copy}/></div>
			<div id="Rectangle1copy2"><img src={Rectangle1copy2}/></div>
			<div id="Experience"><img src={Experience}/></div>
			<div id="Rectangle5copy4"><img src={Rectangle5copy4}/>
			<div className="exp-cont">
				<div className="exp-from-to-cont">
					<p className="from-to-para">2021-2022</p>
				</div>
				<div className="exp-company-cont">
					<p className="company-para">
						Company Name
					</p>
				</div>
				<div className="exp-designation-cont">
					<p className="designation-para">
						Senior UX Designer
					</p>
				</div>
				<div className="exp-infoRole-cont">
					<p className="infoRole-para">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
					</p>
				</div>
			</div>
			</div>
			<div id="Profile"><img src={Profile}/></div>
			<div id="Rectangle5copy3"><img src={Rectangle5copy3}/><div className="intro-cont">
				<p className="intro-para"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. adipiscing elit, sed do eiusmod tempor incididunt</p>
			</div>
		</div>
			<div id="Contact"><img src={Contact}/>
				<p className="heading-phone-cont">Phone</p>
			<div className="phone-cont">
				<p className="phone-para">03041358708</p>
			</div>
			<p className="heading-email-cont">Email</p>
			<div className="email-cont">
				<p className="email-para">muaazkhan9329@gmail.com</p>
			</div>
			<p className="heading-address-cont">Address</p>
			<div className="address-cont">
				<p className="address-para">Foji chowk, Salemi garden , house no 2,st3</p>
			</div>
			</div>
			<div id="Rectangle5copy2"><img src={Rectangle5copy2}/></div>
			<div id="Education"><img src={Education}/></div>
			<div id="Rectangle5copy"><img src={Rectangle5copy}/>
			<div className="edu-cont">
				<div className="edu-from-to-cont">
					<p className="From-To-para">2021-2022</p>
				</div>
				<div className="edu-degName-cont">
					<p className="degName-para">BSCS</p>
				</div>
				<div className="edu-instName-cont">
					<p className="instName-para">Khawaja fareed Instituition Of technlogy</p>
				</div>
			</div>
			
		</div>
			<div id="Skills"><img src={Skills}/></div>
			<div id="Rectangle5copy5"><img src={Rectangle5copy5}/>
			
			<div className="skill-cont">
				<div className="skill-name-cont">
					<p className="skill-name-para">Illustrator</p>
				</div>
				<div className="skill-star-cont">
					<div className="star-working">
						
					</div>
				</div>
			</div>
			</div>
		</div>

    </div></div>)
}