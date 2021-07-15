import './testimonials.scss';

export default function Testimonials() {
    return (
        <div className='testimonials' id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                <div className="card">
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt=""></img>
                        <img className="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8EX6li55wPbKt76wIJqfLAdreXNkvFB7paA&usqp=CAU" alt=""></img>
                       
                        <img src="assets/youtube.png" 
                        className="right" alt=""></img>
                    </div>
                    <div className="center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                     
                    </div>
                    <div className="bottom">
                        <h3>Alex</h3>
                        <h4>CEO of LAMA</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
