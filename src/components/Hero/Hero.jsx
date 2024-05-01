import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'
import {motion} from "framer-motion"
const Hero=function(){
    const transition={duration:3,type:"spring"};
    return(
        <>
            <div className={css.container}>
                {/* left side */}
                <div className={css.h_sides}>
                    <span className={css.text1}>Skin protection cream</span>
                    <div className={css.text2}>
                        <span>Trendy Collection</span>
                        <span>{" "}Seedily say has suitable disposal and boy.Exercis joy man children rejoiced.</span>
                    </div>
                </div>
                {/* middle side hero img */}
                <div className={css.wrapper}>
                    {/* blue circle */}
                    <motion.div 
                    initial={{bottom:"3rem"}}
                    whileInView={{bottom:"0rem"}}
                    transition={transition}
                    className={css.bluecircle}>
                    </motion.div>
                    {/* img_inimation */}
                    <motion.img
                    initial={{bottom:"-2rem"}}
                    whileInView={{bottom:"0rem"}}
                    transition={transition}
                    src={HeroImg} alt='' width={600}/>
                    {/* cart_inination */}
                    <motion.div
                    initial={{right:"5%"}}
                    whileInView={{right:"0%"}}
                    transition={transition}
                    className={css.cart2}>
                        <RiShoppingBagFill />
                        <div className={css.signup}>
                            <span>Best Signup Offerrs</span>
                            <div>
                                <BsArrowRight/>
                            </div>
                        </div>
                    </motion.div>
                </div>
                {/* right side */}
                <div className={css.h_sides}>
                    <div className={css.traffic}>
                        <span>1.5m</span>
                        <span>Monthly Traffic</span>
                    </div>
                    <div className={css.customers}>
                        <span>100k</span>
                        <span>Happy Customers</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;