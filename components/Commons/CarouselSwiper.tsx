import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import CarouselCard from './CarouselCard';

import 'swiper/css';
import 'swiper/css/pagination';

function CarouselSwiper() {
  SwiperCore.use([Autoplay]);
  return (
    <section className="flex w-full mx-auto h-80 ">
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <CarouselCard>개인 프로젝트의 코드리뷰가 필요하신가요?</CarouselCard>
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard>
            다양한 직군의 리뷰어분들이 계십니다. <br /> 코드 리뷰를 통해 더 성장하세요!
          </CarouselCard>
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard>리뷰어 리뷰이는 당신의 성장을 응원합니다.</CarouselCard>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default CarouselSwiper;
