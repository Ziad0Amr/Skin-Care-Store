import css from "./Testiomoial.module.css"
import Hero from "../../assets/testimonialHero.png"
import { TestimonialsData } from "../../data/testimonials";
import { SwiperSlide,Swiper } from "swiper/react";
const Testimonial=function(){
    return(
        <>
            <div className={css.testimonials}>
                <div className={css.wrapper}>
                    <div className={css.container}>
                        <span>Top Rated</span>
                        <span>Seedily say has suitable and boy. Exercies joy man children rejoiced</span>
                    </div>
                    <img src={Hero} alt="hero_image"/>
                    <div className={css.container}>
                        <span>100k</span>
                        <span>Happy Customers with us</span>
                    </div>
                </div>
                <div className={css.reviews}>Reviews</div>
                <div className={css.carousel}>
                    <Swiper
                    loop='true'
                    slidesPerView={3}
                    slidesPerGroup={1}
                    spaceBetween={20}
                    breakpoints={{
                        856:{
                            slidesPerView: 3
                        },
                        640:{
                            slidesPerView: 2
                        },
                        0:{
                            slidesPerView: 1
                        }
                    }}
                    className={css.tcarousel}
                    >
                        {
                            TestimonialsData.map((test,i)=>(
                                <SwiperSlide>
                                    <div className={css.testimonial}>
                                        <img src={test.image} alt={test.name}/>
                                        <span>{test.comment}</span>
                                        <hr/>
                                        <span>{test.name}</span>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Testimonial;