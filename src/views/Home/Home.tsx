import Banner from "../../components/common/Banner/Banner.tsx";
import './home.css'
import bannerImg from '../../assets/images/banner-home.png'
import accommodations from '../../assets/logements.json'
import Card from "../../components/common/Card/Card.tsx";

const Home = () => {
    return (
        <>
            <Banner img={bannerImg} title={"Chez vous, partout et ailleurs"}/>
            <section className="accommodation-list">
                {accommodations.map(accommodation =>
                    <Card key={accommodation.id}
                          id={accommodation.id}
                          title={accommodation.title}
                          cover={accommodation.cover}/>
                )}

            </section>
        </>
    );
};
export default Home
