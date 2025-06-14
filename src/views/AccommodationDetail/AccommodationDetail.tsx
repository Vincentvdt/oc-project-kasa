import './accommodationDetail.css'
import {useParams} from "react-router-dom";
import accommodations from '../../assets/logements.json'
import {Key, useEffect, useState} from "react";
import Slideshow from "../../components/Slideshow/Slideshow.tsx";
import Dropdown from "../../components/common/Dropdown/Dropdown.tsx";
import RatingStar from "../../components/common/RatingStar/RatingStar.tsx";

interface Accommodation {
    id: string,
    title: string,
    cover: string,
    pictures: string[],
    description: string,
    host: {
        name: string,
        picture: string,
    }
    rating: string,
    location: string,
    equipments: string[],
    tags: string[]
}

const AccommodationDetail = () => {
    const [accommodation, setAccommodation] = useState<Accommodation | null>(null)
    const {id} = useParams()

    useEffect(() => {
        const accommodationData = accommodations.find(d => d.id === id);
        if (!accommodationData) throw new Response('Not Found', {status: 404});
        setAccommodation(accommodationData)

    }, [accommodation, id],);

    return (
        <>
            {accommodation && (
                <section className="accommodation">
                    <Slideshow pictures={accommodation.pictures}/>
                    <div className="accommodation-content">
                        <div className="accommodation-section">
                            <div className="accommodation-description">
                                <h1>{accommodation.title}</h1>
                                <h2>{accommodation.location}</h2>
                            </div>
                            <div className="accommodation-tags">
                                {
                                    accommodation.tags.map((tag, index) => (
                                        <div key={index}>
                                            {tag}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="accommodation-info">
                            <div className="accommodation-rating">
                                <RatingStar rating={accommodation.rating}/>
                            </div>
                            <div className="accommodation-owner">
                                <p>
                                    {accommodation.host.name.split(' ').map((name: string, index: Key | null | undefined, array: string | string[]) => {
                                        return (
                                            <span key={index}>
                                            {name}
                                                {index !== array.length - 1 && <br/>}
                                         </span>
                                        );
                                    })}
                                </p>

                                <img src={accommodation.host.picture} alt={`picture of ${accommodation.host.name}`}/>
                            </div>
                        </div>
                    </div>
                    <div className="accommodation-drodpowns">
                        <Dropdown title="Description">
                            <p>
                                {accommodation.description}
                            </p>
                        </Dropdown>
                        <Dropdown title="Équipements">
                            <ul>
                                {accommodation.equipments.map((equipment, index) => <li key={index}>{equipment}</li>)}
                            </ul>
                        </Dropdown>
                    </div>

                </section>
            )}
        </>
    );
};

export default AccommodationDetail;
