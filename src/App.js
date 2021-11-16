import './App.css';
import Table from './components/Table';
import Graduationlist from './components/Graduationlist';

function App() {

  
    const subjects = ["Javascript", "Java","React", "Redux","Nodejs"]
  

  return (
    <><div className="back">

      <Table subjects={subjects} name="Vinay" />
      <Table subjects={subjects} name="Sweta" />
      <Table subjects={subjects} name="Vatsal" />
      <Table subjects={subjects} name="Ronak" />
      


      <div>
        <Graduationlist />
      </div>

    </div>
    
    </>
  )
}

export default App;
