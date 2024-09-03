import React from "react";

function Project ({ title, image, deployedLink, repoLink}) {
    return (
        <div className="project">
            <h3>{title}</h3>
            <img src="{image}" alt="{title}" className="project-image" />
            <p>
             <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed App</a> |{" "} 
             <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </p>
        </div>
  );
}

export default Project;