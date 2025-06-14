import './slideshow.css';
import {useState} from "react";

interface ArrowProps {
    direction: 'prev' | 'next',
    onClick: () => void
}

const ArrowSVG = ({direction, onClick}: ArrowProps) => (
    <svg onClick={onClick} className={`arrow arrow-${direction}`}
         xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 48 80" fill="none">
        <path
            d={direction === 'next' ? "M0.96 72.3458L8.04 79.4258L47.64 39.8258L8.04 0.22583L0.96 7.30583L33.48 39.8258L0.96 72.3458Z" : "M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"}
            fill="white"/>
    </svg>
);

interface SlideshowProps {
    pictures: string[]
}

const Slideshow = ({pictures}: SlideshowProps) => {
    const [index, setIndex] = useState(0)
    const handleClick = (direction: string) => {
        const newIndex = direction === 'next' ? (index + 1) % pictures.length : (index - 1 + pictures.length) % pictures.length;
        setIndex(newIndex);
    }
    return (
        <div className="slideshow">
            {pictures.length > 1 && (
                <ArrowSVG direction="prev" onClick={() => handleClick('prev')}/>
            )}

            <img src={pictures[index]} alt={`Slide ${index}`}/>
            {pictures.length > 1 && (
                <span className="slideshow-counter">{index + 1}/{pictures.length}</span>
            )}


            {pictures.length > 1 && (
                <ArrowSVG direction="next" onClick={() => handleClick('next')}/>
            )}
        </div>
    );
};

export default Slideshow