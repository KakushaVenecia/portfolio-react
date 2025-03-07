import React, { useState} from "react";
import "./Tabs.css";


const Tabs = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const renderContent = () => {
    switch (activeTab) {
      case "projects":
        return (
            <div className="grid-gallery">
            <div className="grid-item">
              <a 
                href="https://frontend-d5bn.onrender.com/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src="./images/Water_quality.png" alt="Project 1" />
                <p className="project-title">Water Quality Web App</p>
              </a>
              <p className="project-description">
                This is a web-based geospatial project that focuses on analyzing water quality using real-time data collection and providing insights for environmental monitoring.
              </p>
              
              <div className="technologies">
                <p>Technologies Used:</p>
                <p>React</p>
                <p>MongoDB</p>
                <p>Mapbox</p>
              </div>
            </div>

            <div className="grid-item">
            <a 
            href="https://kakushavenecia.github.io/ip-two/" 
            target="_blank" 
            rel="noopener noreferrer"
            >
            <img src="./images/Akan-Name.png" alt="Project 1" />
            <p className="project-title">Akan Name</p>
            </a>
                <p className="project-description">
                The Akan Name Generator is an interactive web-based tool
                 designed to provide users with an immersive cultural experience
                  by introducing them to the rich traditions of the Akan people of Ghana. 
                </p>
                <p>
              Technologies Used: Javascript 
            </p>
            </div>
            <div className="grid-item">
            <a 
           href=" https://bejewelled-salamander-5f7a86.netlify.app/ "
            target="_blank" 
            rel="noopener noreferrer"
            >
           <img src="./images/codehack.png" alt="Project 3" />
           <p className="project-title">Moringa Codehack</p>
            </a>
            <p className="project-description">
                MoringaCodehack is a frontend 
                application that is part of a collaborative group project
                 designed to create a HackerRank-type platform, where users can solve coding challenges.
                 Worked in a team of 2 front end developers, collaborating on both frontend development.
                </p>
                <p>
              Technologies Used: Angular, TypeScript
            </p>
            </div>
            <div className="grid-item">
            <a 
           href="https://jirani-e69819ead4ec.herokuapp.com/"
            target="_blank" 
            rel="noopener noreferrer"
            >
           <img src="./images/image.png" alt="Project 4" />
           <p className="project-title">Jirani Corner
           </p>
            </a>
            <p className="project-description">
            Jirani Corner is an application which allows you to be in the loop about everything happening in your neighborhood. Join and 
            get information from fellow hoodmates on events,
             posts, businesses in your neighborhood.
                </p>
                <p className="technologies">
              Technologies Used: Python-Django, Postgresql
            </p>
            </div>
            <div className="grid-item">
            <a 
           href="https://kahua.onrender.com/"
            target="_blank" 
            rel="noopener noreferrer"
            >
           <img src="./images/kahua.png" alt="Project 5" />
           <p className="project-title">Kahua 
           </p>
            </a>
            <p className="project-description">
                Kahua is an application showcasing a Kenyan coffee brand through story telling
                </p>
                <p>
              Technologies Used: Javascript,GSAP
            </p>
            </div>
            
          </div>
        );
      case "techStack":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'center' }}>
  
  {/* Row 1: Tech Stacks & Databases */}
  <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
    
    {/* Tech Stacks */}
    <div style={{ flex: 1, minWidth: '300px' }}>
      <p style={{ color: 'white', fontWeight: 800, fontSize: '1.2rem', marginBottom: '10px' }}>
        Technology and Tools
      </p>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems: 'center', gap: '10px' }}>
        <img src="https://img.shields.io/badge/MERN%20Stack-023430?style=for-the-badge&logo=react&logoColor=61DAFB" alt="MERN Stack" />
        <img src="https://img.shields.io/badge/MEAN%20Stack-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="MEAN Stack" />
      </div>
    </div>

    {/* Databases */}
    <div style={{ flex: 1, minWidth: '300px' }}>
      <p style={{ color: 'white', fontWeight: 800, fontSize: '1.2rem', marginBottom: '10px' }}>
        Databases
      </p>
      <div style={{ display: 'flex', justifyContent:'center', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
        <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
        <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
        <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
      </div>
    </div>

  </div>

  {/* Row 2: Programming Languages & Project Management Tools */}
  <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
    
    {/* Programming Languages */}
    <div style={{ flex: 1, minWidth: '300px' }}>
      <p style={{ color: 'white', fontWeight: 800, fontSize: '1.2rem', marginBottom: '10px' }}>
        Programming Languages
      </p>
      <div style={{ display: 'flex',  justifyContent:'center',flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
        <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
        <img src="https://img.shields.io/badge/typescript-%233178C6.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
        <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python" />
      </div>
    </div>

    {/* Project Management Tools */}
    <div style={{ flex: 1, minWidth: '300px' }}>
      <p style={{ color: 'white', fontWeight: 800, fontSize: '1.2rem', marginBottom: '10px' }}>
        Project Management Tools
      </p>
      <div style={{ display: 'flex', justifyContent:'center', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
        <img src="https://img.shields.io/badge/Trello-0079BF?style=for-the-badge&logo=trello&logoColor=white" alt="Trello" />
        <img src="https://img.shields.io/badge/Asana-273347?style=for-the-badge&logo=asana&logoColor=white" alt="Asana" />
        
      </div>
    </div>
      {/* Data Analysis Section */}
      <div style={{ flex: 1, minWidth: '300px' }}>
      <p style={{ color: 'white', fontWeight: 800, fontSize: '1.2rem', margin: '15px 0 10px' }}>
      Data Analysis
    </p>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
    <img src="https://img.shields.io/badge/SPSS-0033A0?style=for-the-badge&logo=ibm&logoColor=white" alt="SPSS" />
    </div>
      </div>
  </div>
</div>
        );
      case "education":
        return (
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Sept 2023 - Sept 2024</h3>
                <p>Msc Computer Science - Aston University</p>
              </div>
            </div>
             <div className="timeline-item">
                <div className="timeline-content">
                    <h3> Sept 2022 - Jan 2023</h3>
                     <p>Intermediate Software Engineer(Backend)- Stutern  </p>
                   </div>
               </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3> Feb 2022 - June 2022</h3>
                <p>Full Stack Software Engineer- Moringa School </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3> May 2013 - Dec 2017</h3>
                <p> Bsc Economics and Statistics-University of Nairobi</p>
              </div>
            </div>
      
           <div className="request">
            
           </div>
          
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        <button
          className={activeTab === "techStack" ? "active" : ""}
          onClick={() => setActiveTab("techStack")}
        >
          Tech Stack
        </button>
        <button
          className={activeTab === "education" ? "active" : ""}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
        <button
          className={activeTab === "projects" ? "active" : ""}
          onClick={() => setActiveTab("projects")}
        >
          Projects
        </button>
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default Tabs;
