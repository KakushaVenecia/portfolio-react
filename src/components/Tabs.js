import React, { useState} from "react";
import "./Tabs.css";


const Tabs = () => {
  const [activeTab, setActiveTab] = useState("techStack");

  const renderContent = () => {
    switch (activeTab) {
      case "techStack":
        return (
          <div className="tech-stack">
      <img
        src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
        alt="CSS3"
      />
      <img
        src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
        alt="JavaScript"
      />
      <img
        src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"
        alt="Bootstrap"
      />
      <img
        src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
        alt="Python"
      />
      <img
        src="https://img.shields.io/badge/typescript-%23323330.svg?style=for-the-badge&logo=typescript&logoColor=%23F7DF1E"
        alt="TypeScript"
      />
      <img
        src="https://img.shields.io/badge/angular-%23007ACC.svg?style=for-the-badge&logo=angular&logoColor=red"
        alt="Angular"
      />
      <img
        src="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white"
        alt="Django"
      />
      <img
        src="https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray"
        alt="Django REST"
      />
      <img
        src="https://img.shields.io/badge/flask-%23092E20.svg?style=for-the-badge&logo=flask&logoColor=white"
        alt="Flask"
      />
      <img
        src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=white"
        alt="Express.js"
      />
    </div>
        );
      // case "workExperience":
      //   return (
          
      //     <div className="timeline">
      //       <div className="timeline-item">
      //         <div className="timeline-content">
      //           <h3>Sept 2024 - Present</h3>
      //           <p>Office Assistant - Centre for Women's Justice</p>
      //         </div>
      //       </div>
      //       <div className="timeline-item">
      //         <div className="timeline-content">
      //           <h3> Oct 2023 - Present</h3>
      //           <p>Merchandise Assistant - National Merchandise </p>
      //         </div>
      //       </div>
      //       <div className="timeline-item">
      //         <div className="timeline-content">
      //           <h3> Feb 2022 - September 2023</h3>
      //           <p>Executive  Assistant-JKUAT Enterprises</p>
      //         </div>
      //       </div>
      //       <div className="timeline-item">
      //         <div className="timeline-content">
      //           <h3> Mar 2019 - August 2021 </h3>
      //           <p>Customer Care / Marketing Coordinator / Business Development Manager - bik Investors , mTek Services</p>
      //         </div>
      //       </div>
      //      <div className="request">
            
      //      </div>
          
      //     </div>
      //   );
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
                This is a web-based geospatial project that focuses on analysing water quality using real-time data collection and providing insights for environmental monitoring.
            </p>
            <p>
              Technologies Used: React, MongoDB, Mapbox
            </p>
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
                 Worked in a team of 2 front end developers, collaborating on both frontend and backend integration.
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
                <p>
              Technologies Used: Python-Django, Postgresql
            </p>
            </div>
            <div className="grid-item">
                <img src="./images/Water_quality.png" alt="Project 3" />
                <p>Project 5</p>
            </div>
            <div className="grid-item">
                <img src="./images/Water_quality.png" alt="Project 3" />
                <p>Project 6</p>
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
        {/* <button
          className={activeTab === "workExperience" ? "active" : ""}
          onClick={() => setActiveTab("workExperience")}
        >
          Work Experience
        </button> */}
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
