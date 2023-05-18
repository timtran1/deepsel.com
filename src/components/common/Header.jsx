import {Link} from "react-router-dom";
// import scroll from "../../ultilities/scroll.js";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function () {
    const navigate = useNavigate()
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    useEffect(() => {
        const urlHash = window.location.hash
        if (urlHash) {
            const el = document.getElementById(urlHash.replace('#', ''))
            if (el) el.scrollIntoView({behavior: 'smooth'})
        }
    }, [])

    function scroll(event, id) {
        event.preventDefault()
        const currentPath = window.location.pathname
        const elHref = event.target.href
        const elUrlObject = new URL(elHref)
        const elPath = elUrlObject.pathname
        const elPathWithHash = elUrlObject.hash
        console.log({currentPath, elHref, elUrlObject, elPath, elPathWithHash})
        if (currentPath !== elPath) {
            navigate(elPath + elUrlObject.hash)
            return
        }

        const el = document.getElementById(id)
        el.scrollIntoView({behavior: 'smooth'})
    }


    return (
        <header className="main-header" id={`top`}>
            <div className="header-upper">
                <div className="auto-container">
                    <div className="clearfix">

                        <div className="pull-left logo-box">
                            <div className="logo">
                                <Link to="/">
                                    <img src="/img/logo.png" width={110} alt="" title=""/>
                                </Link>
                            </div>
                        </div>

                        <div className="nav-outer clearfix">

                            <nav className="main-menu navbar-expand-md">
                                <div className="navbar-header">
                                    <button className="navbar-toggler" type="button"
                                            onClick={() => setShowMobileMenu(!showMobileMenu)}
                                            aria-label="Toggle navigation">
                                        <span className="icon-bar"></span>
                                        {/*<span className="icon-bar"></span>*/}
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>

                                {/*<div className={`overflow-hidden`}>*/}
                                    <div className={`${!showMobileMenu? 'hidden md:block': ''} navbar-collapse clearfix`}>
                                        <ul className="navigation clearfix rounded-3xl">
                                            <li className={`rounded-3xl`}><Link to="/">Home</Link></li>
                                            <li><a href="/blog">Blog</a></li>
                                            <li><Link to="/careers">Careers</Link></li>
                                            <li><Link to="https://lakeui.deepsel.com/" target={"_blank"}>Lake UI</Link>
                                            </li>
                                            <li>
                                                <Link to="/#contact" onClick={e => scroll(e, 'contact')}>
                                                    Contact us
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                {/*</div>*/}

                            </nav>

                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
}