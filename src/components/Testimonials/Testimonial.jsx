import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/humble.png";
import profilePic2 from "../../img/humble.png";
import profilePic3 from "../../img/humble.png";
import profilePic4 from "../../img/humble.png";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "--Jemal Kedir-- Excellent Web designer Company personalized customer service. whenever you ask an assistant ready to help you. ",
    },
    {
      img: profilePic2,
      review:
        "--Samuel Mekonen-- Great service! They are always available, kind, and helpful. I would definitely recommend them to anyone looking for website development services in Adama",
    },
    {
      img: profilePic3,
      review:
        "--Tairat Ayalew-- The professional service I received from Ozone Technology was top-notch, friendly, and customer-focused",
    },
    {
      img: profilePic4,
      review:
        "  --SilverPAY--    we appreciate the help they have given us so far.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from us...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
