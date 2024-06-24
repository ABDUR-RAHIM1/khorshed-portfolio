import React  from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Heading from '../Utilies/Heading'
import reviews from '../../Data/Reviews';



function Reviews() {

  return (
    <div>
      <Heading text="CLIENT REVIEWS" />

      <div className="reviews">
        <Swiper
        
          slidesPerView={3}
          spaceBetween={30}
          
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            200: {
              slidesPerView: 1,
              spaceBetween: 20,
          },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        }}
          modules={[Pagination]}
          className="mySwiper"
        >


          {
            reviews && reviews.map((sl, index) => (
              <SwiperSlide key={index}>
                <div className='w-full h-96 rounded-md' style={{background:"#162033" , border:"1px solid #2d3647"}}>
                  <img className='w-16 h-16 rounded-full translate-y-4 m-auto' src={sl.img} alt="" />
                  <div className='my-5 px-3'>
                    <h2 className='text-lg italic'>{sl.name}</h2>
                    <small className='text-[#1da099]'>Client :{sl.title}</small>
                    <p style={{lineHeight:"1.5rem"}} className='my-3 text-sm '>
                       {sl.text}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
        <hr className='my-3' />
      </div>
    </div>
  )
}

export default Reviews