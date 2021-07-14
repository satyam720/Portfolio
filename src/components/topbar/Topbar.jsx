import './topbar.scss';
import {Face, Mail} from '@material-ui/icons'

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <a href='#intro'
                    className="logo">Satyam</a>
                    <div className="itemContainer">
                        <Face className='icon'/>
                        <span>+98 8894 56 86</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className='icon'/>
                        <span>psatyam1618@gmail.com</span>
                    </div>
                    
               
                </div>  
                
                <div className="right">
                    <div 
                    className="hamburger"
                    onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>  
            

            </div>
            
        </div>
    )
}
