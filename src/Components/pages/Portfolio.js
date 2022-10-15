import React from 'react';
import Cards from '../Cards'

const projects = [
  {
    id: 1,
    name: "Workday Scheduler",
    description: "Workday Scheduler Application",
    subtitle: "An app to help catagorize your workday",
    deployedLink: "https://hypnotoad0010.github.io/Challenge-5-Work-Day-Scheduler/",
    repoLink: "https://github.com/Hypnotoad0010/Challenge-5-Work-Day-Scheduler",
    image: "./assets/images/Workday-scheduler.png"
  },
  {
    id: 2,
    name: "Plan My Date",
    description: "Plan my date application",
    subtitle: "An application to help you plan your date",
    deployedLink: "https://nadybee.github.io/date_ideas/",
    repoLink: "https://github.com/nadybee/date_ideas",
    image: "../assets/images/plan-my-date-app.png"
  },
  {
    id: 3,
    name: "Note Taker",
    description: "A note Taking Application",
    deployedLink: "https://hynotoad-note-taker.herokuapp.com/",
    repoLink: "https://github.com/Hypnotoad0010/Challenge-11-Note-Taker",
    image: "../assets/images/note-taker-app.png"
  },
  {
    id: 4,
    name: "Readme Generator",
    description: "An application to generate your readme",
    deployedLink: "https://drive.google.com/file/d/1X9TREUaeljZUv-2fEadTgfdF51x4HzqF/view",
    repoLink: "https://github.com/Hypnotoad0010/Challenge-9-Readme-Generator",
    image: "../assets/images/image-3.jpg"
  }
];

export default function Portfolio() {
  return (
    <div className = "w-50 mx-auto">
      <h1 className ="pb-4 pt-2">Portfolio</h1>
<Cards projects={projects} />
    </div>
  );
}