import React from 'react';
import './reviews.scss';
import reviewImage from '../../assets/images/review.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { BsChatLeftQuote } from 'react-icons/bs';
import * as Scroll from 'react-scroll';
var Element = Scroll.Element;
const Reviews = () => {
  const reviewsObj = [
    {
      name: 'Nada Alami',
      text: "The Session was great, I am super impressed how professional and talented the therapist is. It's rare to see this kind of service in Lebanon.",
    },
    {
      name: 'Chimene Zouki',
      text: 'I am in love with the therapists, It was amazing and very professional! I would definitly book another session with you guys.',
    },
    {
      name: 'Zahi Sayegh',
      text: 'It was AAA very professional and health oriented session. We will be more than glad to book againt next week. Your idea is exceptional and makes people proud about Lebanese creativity.',
    },
    {
      name: 'Khalil',
      text: 'Both therapists were amazing. It was a great start to the day, They were very friendly and did a great job. We will definitely book with them again.',
    },
    {
      name: 'Melissa Maalouf',
      text: 'It was great, I highly recommend it and I will do it again. It was just perfect!',
    },
  ];
  return (
    <Element name="reviews">
      <div
        className="reviews-wrapper"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
      url(${reviewImage})`,
        }}
      >
        <div className="container">
          <div className="reviews">
            <Swiper
              modules={[Navigation]}
              navigation
              speed={800}
              slidesPerView={1}
            >
              {reviewsObj.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="review">
                    <BsChatLeftQuote size={40} />
                    <p data-aos="zoom-in">{item.text}</p>
                    <h5 data-aos="fade-in">{item.name}</h5>
                    <h6>Happy Client</h6>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Reviews;
