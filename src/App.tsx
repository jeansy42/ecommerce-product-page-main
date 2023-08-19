import "./App.css";
import NavigationMobile from "./components/Navigation";
import { ContextType } from "./context/GlobalContext";
import { useGlobalContext } from "./hooks/useGlobalContext";
import Header from "./layouts/Header";
import Main from "./layouts/Main";

function App() {
  const { showNav } = useGlobalContext() as ContextType;
  return (
    <div>
      {showNav && <NavigationMobile />}
      <Header />
      <Main />
    </div>
  );
}

export default App;
