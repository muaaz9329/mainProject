import CoffeeMachine from './coffeeMachine';
import {Link,NavLink} from 'react-router-dom'
const HomePage = (props)=>{
    const changeMode = props.function;
    const btnName = props.Button
    return(
        <div className="home-content ">

    <div className="main-content animate__animated animate__fadeInLeft animate__slow">
        <p className="main-text">START YOUR <div className='highlight'><strong >RESUME </strong> </div>BUILDING NOW</p>
      <Link className='start-link-style' to='/createResume'>
        <button className="start-btn" role="button"><span className="text">START</span></button></Link>
      
    </div>
   
    <div className="coffee-machine animate__animated animate__fadeInRight animate__slow">
      
    <CoffeeMachine />
    <div className="theme-changing">
    <button onClick={changeMode} className='button-85 '>{btnName}</button>
    
</div>
    </div>
    
</div>
    )
}
export default HomePage;