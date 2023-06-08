import { useContext } from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import { ThemeContext } from '../../Context'
const Portfolio = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="portfolio-container">
      <div className="portfolio" id="portfolio">
        {/* heading */}
        <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
        <span>Portfolio</span>
      </div>
      {/* slider */}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
          },
          '@0.75': {
            slidesPerView: 2,
          },
          '@1.00': {
            slidesPerView: 3,
          },
          '@1.50': {
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio
