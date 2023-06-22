import Search from "../components/search/Search.jsx"
import '../assets/css/pages/HomePage.css'

const HomePage = () => {
    return (
        <>
            <div className="content">
                <h2 className="title">Trouver le vétérinaire proche de chez vous :</h2>
                <Search />
            </div>
           
        </>
    )
    ;
  };
  
  export default HomePage;