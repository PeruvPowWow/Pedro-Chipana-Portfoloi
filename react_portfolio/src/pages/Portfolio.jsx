import React from "react";
import Project from "../components/Project";

function Portfolio() {
  const projects = [
      {
          title: "HTML/CSS Code Project",
          image: "/Users/pedrochipana/Desktop/BOOTCAMP/Pedro-Chipana-Portfolio/react_portfolio/src/assets/images/digital-marketing-meeting.jpg",
          deployedLink: "https://peruvpowwow.github.io/homework-challenge-1/",
          repoLink: "https://github.com/PeruvPowWow/homework-challenge-1/tree/main"
      },
      {
            title: "Employee Payroll Tracker",
            image: "/Users/pedrochipana/Desktop/BOOTCAMP/Pedro-Chipana-Portfolio/react_portfolio/src/assets/images/Employment Payroll Tracker.jpg",
            deployedLink: "https://peruvpowwow.github.io/Employment-Payroll-Tracker/",
            repoLink: "https://github.com/PeruvPowWow/Employment-Payroll-Tracker"
      },
    {
            title: "My First Blog",
            image: "/Users/pedrochipana/Desktop/BOOTCAMP/Pedro-Chipana-Portfolio/react_portfolio/src/assets/images/100-web-apis-challenge-demo.gif",
            deployedLink: "https://peruvpowwow.github.io/My-First-Blog/",
            repoLink: "https://github.com/PeruvPowWow/My-First-Blog"
    },
  ];

  return (
    <section>
        <h2>Portfolio</h2>
        {projects.map((project, index) => (
            <Project key={index} project={project} />
        ))}
    </section>
  );
}

export default Portfolio;