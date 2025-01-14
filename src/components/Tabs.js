import React, { useState} from "react";
import "./Tabs.css";


const Tabs = () => {
  const [activeTab, setActiveTab] = useState("techStack");

  const renderContent = () => {
    switch (activeTab) {
      case "techStack":
        return (
          <div className="tech-stack">
            <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="Tech 1" />
            <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="Tech 2" />
            <img src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Tech 3" />
            <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt=""/>
            <img src="https://img.shields.io/badge/typescript-%23323330.svg?style=for-the-badge&logo=typescript&logoColor=%23F7DF1E" alt=""/>
            <img src="https://img.shields.io/badge/angular-%23007ACC.svg?style=for-the-badge&logo=Angular&logoColor=red" alt=""/>
            <img src="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white" alt=""/>
            <img src="https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray" alt=""/>
            <img src="https://img.shields.io/badge/flask-%23092E20.svg?style=for-the-badge&logo=flask&logoColor=white" alt=""/>
            <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt=""/>
            <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt=""/>
            <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt=""/>
            <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" alt=""/>
            <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt=""/>
            <img src="https://img.shields.io/badge/java-%23316192.svg?style=for-the-badge&logo=java&logoColor=white" alt=""/>
            <img src="https://img.shields.io/badge/react-%2300f.svg?style=for-the-badge&logo=react&logoColor=white" alt=""/>
          </div>
        );
      case "workExperience":
        return (
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Sept 2024 - Present</h3>
                <p>Office Assistant - Centre for Women's Justice</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3> Oct 2023 - Present</h3>
                <p>Merchandise Assistant - National Merchandise </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3> Feb 2022 - September 2023</h3>
                <p>Executive  Assistant-JKUAT Enterprises</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3> Mar 2019 - August 2021 </h3>
                <p>Customer Care / Marketing Coordinator / Business Development Manager - bik Investors , mTek Services</p>
              </div>
            </div>
           <div className="request">
            
           </div>
          
          </div>
        );
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
            <p className="project-title">Project 1</p>
            </a>
            <p className="project-description">
                This project focuses on analyzing water quality using real-time data collection and providing insights for environmental monitoring.
            </p>
            <p>
              Technologies Used: React, MongoDB 
            </p>
           
        </div>
            <div className="grid-item">
                <img src="./images/Water_quality.png" alt="Project 2" />
                <p className="project-title">Project 2</p>
                <p className="project-description">
                A machine learning model developed to predict water quality based on
                various environmental factors and historical data.
                </p>
            </div>
            <div className="grid-item">
                <img src="./images/Water_quality.png" alt="Project 3" />
                <p className="project-title">Project 3</p>
                <p className="project-description">
                This interactive platform allows users to explore water quality data
               
                </p>
            </div>
            <div className="grid-item">
                <img src="./images/Water_quality.png" alt="Project 3" />
                <p>Project 4</p>
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
        <button
          className={activeTab === "workExperience" ? "active" : ""}
          onClick={() => setActiveTab("workExperience")}
        >
          Work Experience
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
