import './banner.css'

interface BannerProps {
    img: string
    title?: string
}

const Banner = ({img, title}: BannerProps) => {
    return (
        <div className="banner" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('${img}')`
        }}>
            <h1>{title}</h1>
        </div>
    );
};

export default Banner