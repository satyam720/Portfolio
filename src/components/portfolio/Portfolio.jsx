


import { useEffect, useState } from "react";

import "./portfolio.scss";
import { Projects } from "../../data";

export default function Portfolio() {
  
  const [data, setData] = useState([]);
  

  useEffect(() => {
   
        setData(Projects);
    
  }, []);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
     
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <div className="image-item">
            <img
              
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
            </div>
            
            <a className="code-edit" href={d.link} >Code</a>
          </div>
        ))}
      </div>
    </div>
  );
}