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
                            <li>ReactJS Developer</li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="sidebar-page-container pb-20">
                <div className="auto-container">
                    <div className="row clearfix">


                        <div className="content-side blog-single col-lg-8 col-md-12 col-sm-12 pb-[300px]">
                            <div className={`inner-box`}>
                                <h4>ReactJS Developer / Part-time / Full Remote</h4>

                                <div className={`lower-content`}>
                                    <div className={`text`}>
                                        <p>Việc làm trả theo giờ khối lượng công việc. Việc bao gồm chuyển đổi bản vẽ figma thành React frontend cho các new
                                            project, chỉnh sửa
                                            và thêm
                                            tính
                                            năng cho các exsiting project.</p>

                                        <h5>Các project:</h5>
                                        <ul>
                                            <li>Project 1 (new): <a
                                                href="https://drive.google.com/drive/folders/1Pb3aySlkZPQb7tmQCBNL_T7uYU_JBRyx?usp=sharing">https://drive.google.com/drive/folders/1Pb3aySlkZPQb7tmQCBNL_T7uYU_JBRyx?usp=sharing</a>
                                            </li>
                                            <li>Project 2 (new): <a
                                                href="https://drive.google.com/drive/folders/120rLqDhPzjgZVgSseiFPtL5ceV5362bS?usp=share_link">https://drive.google.com/drive/folders/120rLqDhPzjgZVgSseiFPtL5ceV5362bS?usp=share_link</a>
                                            </li>
                                            <li>Project 3 (existing): <a
                                                href="https://icg-preview.deepsel.com">https://icg-preview.deepsel.com</a>
                                            </li>
                                            <li>Project 4 (existing): <a
                                                href="https://snf.deepsel.com/snf">https://snf.deepsel.com/snf</a>
                                            </li>
                                        </ul>

                                        <br/>

                                        <p>Yêu cầu sử dụng ReactJS, TailwindCSS. Có khả năng sử dụng TypeScript là một
                                            điểm
                                            cộng.</p>

                                        <p>Quá trình làm việc có thể phải giao tiếp với đối tác nước ngoài qua
                                            chat/email, tiếng
                                            Anh
                                            đọc viết là một điểm cộng.</p>

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