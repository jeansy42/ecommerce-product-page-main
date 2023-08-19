import "./App.css";
import DeskProductPrev from "./components/DeskProductPrev";
import NavigationMobile from "./components/Navigation";
import { ContextType } from "./context/GlobalContext";
import { useGlobalContext } from "./hooks/useGlobalContext";
import Header from "./layouts/Header";
import Main from "./layouts/Main";

function App() {
  const { showNav, showPreview } = useGlobalContext() as ContextType;
  return (
    <div>
      {showNav && <NavigationMobile />}
      {showPreview && <DeskProductPrev />}
      <div className="max-w-screen-xl mx-auto ">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
