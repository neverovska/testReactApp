import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import "../styles/Carousel.css";

export const Carousel = (props) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        // Если текущий слайд последний, перейти на первый, иначе на следующий
        setSlide(slide === props.photos.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        // Если текущий слайд первый, перейти на последний, иначе на предыдущий
        setSlide(slide === 0 ? props.photos.length - 1 : slide - 1);
    };

    return (
        <div className="carousel">
            {/* Если количество фотографий больше одной, отображаем кнопки перехода к другим слайдам */}
            {props.photos.length > 1 &&
                <FontAwesomeIcon icon={faArrowLeft} onClick={prevSlide} className="arrow arrow-left"/>}
            {props.photos.map((item, idx) => {
                return (
                    <img
                        src={item}
                        key={idx}
                        className={slide === idx ? "slide" : "slide slide-hidden"}
                    />
                );
            })}
            {props.photos.length > 1 && <FontAwesomeIcon icon={faArrowRight}
                                                         onClick={nextSlide}
                                                         className="arrow arrow-right"
            />}
            <span className="indicators">
        {props.photos.map((_, idx) => {
            return (
                <button
                    key={idx}
                    className={
                        slide === idx ? "indicator" : "indicator indicator-inactive"
                    }
                    onClick={() => setSlide(idx)}
                ></button>
            );
        })}
      </span>
        </div>
    );
};