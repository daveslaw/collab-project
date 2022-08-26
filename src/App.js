import logo from './logo.svg';
import './App.css';
import ProjectCard from './components/projectCard/ProjectCard'
import ProjectDetailsPage from './components/ProjectDetails/ProjectDetailsPage';
import TheTeamCard from './components/TheTeamCard/TheTeamCard';

function App() {
  return (
    <div className="App">
      <ProjectDetailsPage/>
      <ProjectCard/>
      <TheTeamCard/>
    </div>
  );
}

export default App;
