import Logo from "../../assets/logo.png"
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon
} from "@heroicons/react/outline"
import css from "./Footer.module.css"
const Footer=function(){
    return(
        <>
            <div className={css.cfooterwrapper}>
                <hr/>
                <div className={css.cfooter}>
                    <div className={css.logo}>
                        <img src={Logo} alt="logo_image"/>
                        <span>amazon</span>
                    </div>
                    <div className={css.block}>
                        <div className={css.detail}>
                            <span>Contact US</span>
                            <span className={css.pngline}>
                                <LocationMarkerIcon className={css.icon}/>
                                <span>111 north avenue Orlando, FL 32801</span>
                            </span>
                            <span className={css.pngline}>
                                {" "}
                                <PhoneIcon className={css.icon}/>
                                <a href="#tel:352-306-4415">352-306-4415</a>
                            </span>
                            <span className={css.pngline}>
                                {" "}
                                <InboxIcon className={css.icon}/>
                                <a href="mailto:support@amazon.com">support@amazon.com</a>
                            </span>
                        </div>
                    </div>
                    <div className={css.block}>
                        <div className={css.detail}>
                            <span>Account</span>
                            <span className={css.pngline}>
                                <LoginIcon className={css.icon}/>
                                Sign In
                            </span>
                        </div>
                    </div>
                    <div className={css.block}>
                        <div className={css.detail}>
                            <span>Company</span>
                            <span className={css.pngline}>
                                <UsersIcon className={css.icon} />
                                <a href="#about">About us</a>
                            </span>
                        </div>
                    </div>
                    <div className={css.block}>
                        <div className={css.detail}>
                            <span>Resources</span>
                            <span className={css.pngline}>
                                <LinkIcon className={css.icon}/>
                                <p>Safety Privacy & Terms</p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={css.copyright}>
                    <span>Copyright ©2022 by amazon, Inc.</span>
                    <span>All rights reserved</span>
                </div>
            </div>
        </>
    )
}
export default Footer;