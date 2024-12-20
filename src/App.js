import logo from './logo.svg';
import TechSqaure from "./Components/Techno";
import Images from "./Components/Images";
import TopNavBar from "./Components/NavBar";
import './App.css';
import TopSection from './Components/TopSectionArea';

function App() {
  return (
    <div className="App">

      <header className="App-header">
      <TopNavBar />
      <TopSection />

      
        

        <section class="Technologies"> 
            <p class="ProjectTextTitle">Technologies</p>
            <p style={{fontSize : '20px'}}>These are the main Technologies i use to create my projects and that im the most proficient in</p>
            <div className="TechRow">
              <TechSqaure TechImage={Images.ReactImage} TechName={"React"} />
            </div>
        </section>
      
      </header>


    </div>
  );
}

export default App;
