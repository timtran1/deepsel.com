import {Link} from "react-router-dom";
import Header from "../components/common/Header.jsx";
import Footer from "../components/common/Footer.jsx";
import {CopyButton, ActionIcon, Tooltip, rem} from '@mantine/core';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faCopy} from "@fortawesome/free-solid-svg-icons";


export default function VAT() {
    return (
        <>
            <Header/>

            <section className="page-title bg-[url('/img/7.png')]">
                <div className="auto-container">
                    <div className="content">
                        <h1>VAT</h1>
                    </div>
                </div>
            </section>

            <div className="sidebar-page-container">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="content-side col-lg-8 col-md-12 col-sm-12">
                            <div className="blog-single">
                                <div className="inner-box">

                                    <div className="mt-3 pb-[500px] text-black text-[16px]">

                                        <h4>Tên công ty</h4>
                                        <div className={`flex items-center`}>
                                            <div>CÔNG TY CỔ PHẦN DEEPSEL VIỆT NAM</div>
                                            <CopyButton value="CÔNG TY CỔ PHẦN DEEPSEL VIỆT NAM" timeout={2000}>
                                                {({copied, copy}) => (
                                                    <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow
                                                             position="right">
                                                        <ActionIcon variant="white"
                                                                    onClick={copy}
                                                                    className={`px-2 rounded-lg text-[18px] cursor-pointer bg-white ${copied ? 'text-green-500' : 'text-blue-500'}`}>
                                                            {copied ? (
                                                                <FontAwesomeIcon icon={faCheck}/>
                                                            ) : (
                                                                <FontAwesomeIcon icon={faCopy}/>
                                                            )}
                                                        </ActionIcon>
                                                    </Tooltip>
                                                )}
                                            </CopyButton>
                                        </div>

                                        <h4>Mã số thuế</h4>
                                        <div className={`flex items-center`}>
                                            <div>0108839111</div>
                                            <CopyButton value="0108839111" timeout={2000}>
                                                {({copied, copy}) => (
                                                    <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow
                                                             position="right">
                                                        <ActionIcon variant="white"
                                                                    onClick={copy}
                                                                    className={`px-2 rounded-lg text-[18px] cursor-pointer bg-white ${copied ? 'text-green-500' : 'text-blue-500'}`}>
                                                            {copied ? (
                                                                <FontAwesomeIcon icon={faCheck}/>
                                                            ) : (
                                                                <FontAwesomeIcon icon={faCopy}/>
                                                            )}
                                                        </ActionIcon>
                                                    </Tooltip>
                                                )}
                                            </CopyButton>
                                        </div>

                                        <h4>Địa chỉ trụ sở</h4>
                                        <div className={`flex items-center`}>
                                            <div>Tầng 06, Tòa nhà IRIS, Số 66 Phố Lộc, Phường Xuân Đỉnh, Quận Bắc Từ Liêm, Thành phố Hà Nội, Việt Nam</div>
                                            <CopyButton value="Tầng 06, Tòa nhà IRIS, Số 66 Phố Lộc, Phường Xuân Đỉnh, Quận Bắc Từ Liêm, Thành phố Hà Nội, Việt Nam" timeout={2000}>
                                                {({copied, copy}) => (
                                                    <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow
                                                             position="right">
                                                        <ActionIcon variant="white"
                                                                    onClick={copy}
                                                                    className={`px-2 rounded-lg text-[18px] cursor-pointer bg-white ${copied ? 'text-green-500' : 'text-blue-500'}`}>
                                                            {copied ? (
                                                                <FontAwesomeIcon icon={faCheck}/>
                                                            ) : (
                                                                <FontAwesomeIcon icon={faCopy}/>
                                                            )}
                                                        </ActionIcon>
                                                    </Tooltip>
                                                )}
                                            </CopyButton>
                                        </div>

                                        <h4>Email nhận hoá đơn</h4>
                                        <div className={`flex items-center`}>
                                            <div>vat@deepsel.com
                                            </div>
                                            <CopyButton value="vat@deepsel.com" timeout={2000}>
                                                {({copied, copy}) => (
                                                    <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow
                                                             position="right">
                                                        <ActionIcon variant="white"
                                                                    onClick={copy}
                                                                    className={`px-2 rounded-lg text-[18px] cursor-pointer bg-white ${copied ? 'text-green-500' : 'text-blue-500'}`}>
                                                            {copied ? (
                                                                <FontAwesomeIcon icon={faCheck}/>
                                                            ) : (
                                                                <FontAwesomeIcon icon={faCopy}/>
                                                            )}
                                                        </ActionIcon>
                                                    </Tooltip>
                                                )}
                                            </CopyButton>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}