import "./App.css";
import NavBar from "./Components/Navbar/NavBar";
import SideBar from "./Components/SideBar/SideBar";
import Intro from "./Components/Intro/Intro";
import Models from "./Components/ThreeD/models";

const App = () => {
  return (
    <div className="bg-green-100 w-full h-screen">
      <Models />
    </div>
  );
};

export default App;
