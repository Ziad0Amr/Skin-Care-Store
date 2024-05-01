import css from "./Header.module.css"
import logo from "../../assets/logo.png"
import {CgShoppingBag} from "react-icons/cg"
import {GoThreeBars} from "react-icons/go"
import { useState } from "react"
const Header=function(){
    const [showmenu,setshowmenu]=useState(true)
    const toggleMenu=()=>{
        setshowmenu(!showmenu)
    } 
    return(
        <>
            <div className={css.container}>
                <div className={css.logo}>
                    <img src={logo} alt=""/>
                    <span>amazon</span>
                </div>

                <div className={css.right}>
                    <div className={css.bars} onClick={toggleMenu}>
                        <GoThreeBars/>
                    </div>
                        <ul className={css.menu} style={{display:showmenu? 'inherit':'none'}}>
                            <li>Collections</li>
                            <li>Brands</li>
                            <li>New</li>
                            <li>Sales</li>
                            <li>ENG</li>
                        </ul>
                    <input type="text" className={css.search} placeholder="search"/>

                    <CgShoppingBag className={css.cart}/>
                </div>
            </div>
        </>
    )
}

export default Header;