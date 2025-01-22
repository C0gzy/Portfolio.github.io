import TechSqaure from "@/components/Techno";
import Images from "@/components/Images";
import TopNavBar from "@/components/NavBar";
import ProjectSquare from "@/components/ProjectsArea";
import './App.css';
import './Project.css';
import TopSection from '@/components/TopSectionArea';
import images from '@/components/Images';



function App() {

  return (
    <div className="App">

      <header className="App-header">
      <TopNavBar />
      <TopSection />

        <section className="Technologies"> 
            <p className="ProjectTextTitle">Technologies</p>
            <p style={{fontSize : '20px'}}>These are the main Technologies i use to create my projects and that im the most proficient in</p>
            <div className="TechRow">
              <TechSqaure TechImage={Images.ReactImage} TechName={"React"} />
              <TechSqaure TechImage={Images.JSImage} TechName={"JavaScript"} />
              <TechSqaure TechImage={Images.PythonImage} TechName={"Python"} />
              <TechSqaure TechImage={Images.SQL} TechName={"SQL"} />
              <TechSqaure TechImage={Images.Csharp} TechName={"C#"} />
              <TechSqaure TechImage={Images.NodeJS} TechName={"NodeJS"} />
              <TechSqaure TechImage={Images.Java} TechName={"Java"} />
              <TechSqaure TechImage={Images.firebase} TechName={"Firebase"} />
            </div>
        </section>

        <p className="text-5xl">PROJECTS</p>
			
			  <div className="grid-container">
        <ProjectSquare Title={"Plycs.com"} ProjectTag={["NodeJS","HTML","CSS","JavaScript"]} ProjectLink={"https://plycs.com"} Desc={"Made for the University of Plymouth Computer Science Society .It features searchable events , contact pages and CSS animations "} ProjectImage={images.Plycs}/>
        <ProjectSquare Title={"Top Horror"} ProjectTag={["NodeJS","HTML","CSS","JSON","JavaScript"]} ProjectLink={"/SubWebs/Comp1004WebsiteProject/index.html"} Desc={"Made for my University End of year project. The website has a searchable list of 10,000 horror films from indie to high budget to help users find the perfect flim to watch that night."} ProjectImage={images.TopHorror}/>
        <ProjectSquare Title={"Green M&M"} ProjectTag={["Python"]} ProjectLink={"https://github.com/C0gzy/GreenM-M"} Desc={"A Python Discord Bot. Built to Download and play Music/Videos From Youtube. The Project is free and Open-Source at my GitHub page. Currently it supports video queues , Video Descriptions."} ProjectImage={images.MM}/>
        <ProjectSquare Title={"Marching Squares Algorithm"} ProjectTag={["JavaScript"]} ProjectLink={"/SubWebs/JavaScript-Marching-Square/index.html"} Desc={"A Simple webpage made with HTML and JS that displays a marching squares algorithum each time it is refreshed."} ProjectImage={images.MarchSquare} />
        <ProjectSquare Title={"The Tower"} ProjectTag={["Unity","C#"]} ProjectLink={"/SubWebs/TheTower/TheTowerGame.html/"} Desc={"Made for my Year 13 Coursework. It's a rogue-like top down shooter with mutiple enimies. Designed in a OOP fashion all entities are related and inherit from one another. A little unfinished around the edges so may encouter bugs."} ProjectImage={images.Tower} />
        
        
        </div> 
      
      </header>


    </div>
  );
}

export default App;
