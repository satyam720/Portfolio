


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
          <a className="code-edit" href={d.link} >
          <div className="item">
            
            <img
              
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
            
            
            
          </div>
          </a>
        ))}
      </div>
    </div>
  );
}