import './Slider.css'
import { Swiper,SwiperSlide } from "swiper/react";
import {Navigation,Pagination} from "swiper"
// slider style
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import {SliderProducts} from "../../data/products"

const Slider=function(){
    return(
        <>
            <div className="s_container">
                <Swiper
                breakpoints={{
                    640:{
                        slidesPerView: 3
                    },
                    0:{
                        slidesPerView: 1
                    }
                }}
                modules={[Pagination,Navigation]}
                loopFillGroupWithBlank={true}
                navigation={true}
                slidesPerView={3}
                slidesPerGroup={1}
                spaceBetween={40}
                loop={true}>
                    {SliderProducts.map((pro,i)=>(
                        <SwiperSlide>
                            <div className="s_left">
                                <div className="name">
                                    <span>{pro.name}</span>
                                    <span>{pro.detail}</span>
                                </div>
                                <span>{pro.price} $</span>
                                <div>shop now</div>
                            </div>
                            <img src={pro.img} alt={pro.name} className="img_p"/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default Slider;