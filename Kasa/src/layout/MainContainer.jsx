import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function MainContainer({ children }) {
    return(
        <div className="main-container">
            {children}
        </div>
    )
}

export default MainContainer;