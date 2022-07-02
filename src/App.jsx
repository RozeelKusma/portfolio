import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import { useContext } from "react";


const App = () => {

const theme = useContext(ThemeContext);
const darkMode = theme.state.darkMode;

        return <div className="app" style={{backgroundColor: darkMode? "#0cbaba":"#222", color: darkMode? "black":"white"}}>
        <Toggle/>
        <Intro/>
        <About/>
        <ProductList/>
        <Contact/>
    </div>;
};
export default App;