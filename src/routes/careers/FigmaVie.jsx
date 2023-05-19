import Header from "../../components/common/Header.jsx";
import Footer from "../../components/common/Footer.jsx";
import {Link} from "react-router-dom";

export default function () {
    return (
        <>
            <Header/>

            <section className="page-title bg-[url('/img/7.png')]">
                <div className="auto-container">
                    <div className="content">
                        <h1>Job opening</h1>
                        <ul className="page-breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                            <li>Figma Web Designer</li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="sidebar-page-container pb-20">
                <div className="auto-container">
                    <div className="row clearfix">


                        <div className="content-side blog-single col-lg-8 col-md-12 col-sm-12 pb-[300px]">
                            <div className={`inner-box`}>
                                <h4>Figma Web Designer / Part-time / Full Remote</h4>

                                <div className={`lower-content`}>
                                    <div className={`text`}>
                                        <p>Việc làm trả theo giờ khối lượng công việc, phát triển dài hạn.
                                            <br/>
                                            Công việc bao gồm lên bản vẽ figma cho các giao diện web application,
                                            website theo như mô tả. Bản vẽ bao gồm phiên bản desktop và mobile. Có thể
                                            chỉnh sửa các bản vẽ có sẵn.</p>

                                        <h5>Yêu cầu:</h5>
                                        <ul className={`pl-4`}>
                                            <li className={`list-disc`}>Sử dụng component từ các thư viện React có sẵn, ví dụ như MUI. Tuy nhiên
                                                cũng có thể thiết kế component mới theo yêu cầu dự án.
                                            </li>
                                            <li className={`list-disc`}>Ngoài giao diện tĩnh, có thể hình dung và mô tả các tính năng động như
                                                2D, 3D animations.
                                            </li>
                                            <li className={`list-disc`}>Có khả năng thiết kế web application, hình dung và thiết kế các bảng
                                                điều khiển theo business logic được mô tả một cách hợp lý.
                                            </li>
                                            <li className={`list-disc`}>Có thể sử dụng tiếng Anh đọc viết, giao tiếp với đối tác nước ngoài qua
                                                chat/email.
                                            </li>
                                        </ul>

                                        <br/>

                                        <p>Khi apply hãy gửi CV kèm portfolio các dự án tương tự mà bạn đã làm.</p>

                                        <h5>Liên hệ:</h5>
                                        <ul>
                                            <li>Email: <a href="mailto:tim.tran@deepsel.com">tim.tran@deepsel.com</a>
                                            </li>
                                            <li>Zalo: <a href="https://zalo.me/0982022659">0982022659</a>

                                            </li>
                                            <img src="/img/zaloqr.jpg" alt="" className={`max-w-[200px] mt-2`}/>
                                        </ul>

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