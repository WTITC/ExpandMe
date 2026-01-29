import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

interface CarouselImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface AutoCarouselProps {
  images: CarouselImage[];
}

const AutoCarousel: React.FC<AutoCarouselProps> = ({ images }) => {
  return (
    <div className="w-full h-full bg-slate-200">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        loop={true}
        className="h-full w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full group">
              {/* Image with zoom effect on hover */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient Overlay for Text Readability */}
              {(image.title || image.description) && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                  <div className="animate-slide-up">
                    {image.title && (
                      <h3 className="text-white text-2xl md:text-4xl font-bold mb-2">
                        {image.title}
                      </h3>
                    )}
                    {image.description && (
                      <p className="text-white/80 text-sm md:text-lg max-w-2xl font-light">
                        {image.description}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styles to make it look like a "Floating Card" */}
      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-button-next, .swiper-button-prev {
          color: white !important;
          background: rgba(0,0,0,0.3);
          width: 40px !important;
          height: 40px !important;
          border-radius: 50%;
          after: { font-size: 20px !important; }
        }
        .swiper-pagination-bullet-active {
          background: #3b82f6 !important; /* Matches your primary blue */
          width: 20px;
          border-radius: 4px;
        }
      `}} />
    </div>
  );
};

export default AutoCarousel;