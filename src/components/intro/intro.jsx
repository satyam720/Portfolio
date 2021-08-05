import './intro.scss';
import { init } from 'ityped';
import {useEffect, useRef } from 'react';
import vector from '../../assets/dp.png';
import down from '../../assets/down.png'

export default function Intro() {
    const textRef = useRef();

    useEffect(() =>{
        init(textRef.current, 
            { showCursor: true,
              backDelay: 1500,
              backSpeed: 60,

             strings: ['Developer', 'Designer' ]
             });
    },[])


    return (
        <div className="intro" id='intro'>
           <div className="left">
               <div className='imgContainer'>
                   <img src={vector} alt="avatar"></img>
               </div>
           </div>
           <div className="right">
               <div className="wrapper">
                   <h2>Hi There, I'm</h2>
                   <h1>Satyam Pandey</h1>
                   <h3>Aspiring <span
                    ref={textRef}></span></h3>
               </div>
               <a href="#portfolio">
                   <img src={down} alt="down"></img>
               </a>
           </div>
        </div>
    )
}
