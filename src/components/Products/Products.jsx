import css from "./Products.module.css"
import plane from "../../assets/plane.png"
import {ProductsData} from "../../data/products"
import { useState } from "react"
import { useAutoAnimate } from "@formkit/auto-animate/react"
const Products=function(){
    const [parent]=useAutoAnimate()
    const [menuproduct,setmenuproduct]=useState(ProductsData)

    const filter=((type)=>{
        setmenuproduct(ProductsData.filter((pro)=>pro.type===type))
    })
    return(
        <>
            <div className={css.container}>
                <img src={plane} alt="shape.img" />
                <h1>Our Featured Products</h1>
                <div className={css.products}>
                    <ul className={css.menu}>
                        <li onClick={()=>setmenuproduct(ProductsData)}>All</li>
                        <li onClick={()=>filter("skin care")}>Skin Care</li>
                        <li onClick={()=>filter("conditioner")}>Conditioners</li>
                        <li onClick={()=>filter("foundation")}>Foundations</li>
                    </ul>
                    <div className={css.list} ref={parent}>
                        {
                            menuproduct.map((pro,i)=>(
                                <div className={css.product}>
                                    <div className="s_left">
                                        <div className="name">
                                            <span>{pro.name}</span>
                                            <span>{pro.detail}</span>
                                        </div>
                                        <span>{pro.price}</span>
                                        <div>Shop Now</div>
                                    </div>
                                    <img src={pro.img} alt={pro.name} className="img_p"/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products;