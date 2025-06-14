import './error404.css'
import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import {Link} from "react-router-dom";

const Error404 = () => {
    return (
        <>
            <Header/>
            <section className="errorPage">
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <Link to="/">Retourner sur la page d’accueil</Link>
            </section>
            <Footer/>
        </>
    );
};

export default Error404