import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Main from "./components/main";

function App() {
  return (
    <div className="App flex flex-wrap w-screen">
      <BrowserRouter basename="/appvelox">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <Main />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
