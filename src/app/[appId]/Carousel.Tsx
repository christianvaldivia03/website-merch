'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Carousel.module.css';

const Carousel = () => {
    // const images = [
    //     "https://images.prismic.io/ripley-cms/ZztHM68jQArT0-TM_pe-desk-banventa2-bth-moda-111124.webp?auto=format,compress", // Cambia por tus imágenes
    //     "/images/image2.jpg",
    //     "https://images.prismic.io/ripley-cms/ZztHM68jQArT0-TM_pe-desk-banventa2-bth-moda-111124.webp?auto=format,compress",
    //     "/images/image4.jpg",
    //     "/images/image4.jpg",
    //     "/images/image4.jpg",
    //     "/images/image4.jpg",
    //     "/images/image4.jpg",
    //   ];
    
      const data = [
        {
            image: "https://images.prismic.io/ripley-cms/ZztHM68jQArT0-TM_pe-desk-banventa2-bth-moda-111124.webp?auto=format,compress",
            enlace: "https://www.google.com"
        },
        {
            image: "https://images.prismic.io/ripley-cms/ZztHM68jQArT0-TM_pe-desk-banventa2-bth-moda-111124.webp?auto=format,compress",
            enlace: "https://www.google.com"
        },
      ]

      const [currentIndex, setCurrentIndex] = useState(0);
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      };
    
      const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? data.length - 1 : prevIndex - 1
        );
      };
    
      const goToSlide = (index:number) => {
        setCurrentIndex(index);
      };
    
      return (
        <div className={styles.carousel}>
          <button className={styles.arrow} onClick={handlePrev}>
            ‹
          </button>
          <div className={styles.imageWrapper}>
            {data.map((src, index) => (
              <div
                key={index}
                className={`${styles.slide} ${
                  index === currentIndex ? styles.active : ""
                }`}
              >
                {index === currentIndex && (
                    <>
                        <a href={src.enlace}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.imageLink}>
                            <Image
                            src={src.image}
                            alt={`Slide ${index + 1}`}
                            layout="fill"
                            objectFit="contain"
                            quality={100}
                            />
                        </a>
                    </>
                )}
              </div>
            ))}
          </div>
          <button className={styles.arrow} onClick={handleNext}>
            ›
          </button>
    
          <div className={styles.dots}>
            {data.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${
                  index === currentIndex ? styles.activeDot : ""
                }`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      );
    };
    
export default Carousel;
