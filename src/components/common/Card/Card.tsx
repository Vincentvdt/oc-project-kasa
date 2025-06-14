import './card.css'
import {Link} from "react-router-dom";


interface CardProps {
    id: string | number,
    title: string,
    cover: string
}

const Card = ({id, title, cover}: CardProps) => {
    return (
        <article className="card">
            <Link to={`logements/${id}`} className="card-thumb">
                <h2 className="card-title">{title}</h2>
                <img src={cover} alt={`thumbnail for ${title}`}/>
            </Link>
        </article>
    );
};

export default Card;
