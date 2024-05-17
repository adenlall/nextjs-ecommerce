'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules

export default function Slider({ data, children }: { data?: Array<any>; children?: any }) {
  return (
    <div className="container m-auto rounded-box border border-base-content bg-[linear-gradient(130deg,theme(colors.base-300),theme(colors.base-200),theme(colors.base-100))] py-5">
      <Swiper
        slidesPerView={'auto'}
        // modules={[ Autoplay ]}
        // autoplay={true}
        spaceBetween={15}
        // speed={300}
      >
        <SwiperSlide className="h-full max-w-3"></SwiperSlide>
        {data?.map((item: any) => (
          <SwiperSlide key={item.id} className="h-full max-w-[23em]">
            {item}
          </SwiperSlide>
        ))}
        <SwiperSlide className="h-full max-w-3"></SwiperSlide>
      </Swiper>
    </div>
  );
}
