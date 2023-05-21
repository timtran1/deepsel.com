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
                            <li>Python Developer</li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="sidebar-page-container pb-20">
                <div className="auto-container">
                    <div className="row clearfix">


                        <div className="content-side blog-single col-lg-8 col-md-12 col-sm-12 pb-[300px]">
                            <div className={`inner-box`}>
                                <h4>Python Developer / Part-time / Full Remote</h4>

                                <div className={`lower-content`}>
                                    <div className={`text`}>
                                        <p>Việc làm trả theo giờ khối lượng công việc, phát triển dài hạn.
                                            <br/></p>

                                        <h5>Yêu cầu:</h5>
                                        <ul className={`pl-4`}>
                                            <li className={`list-disc`}>
                                                Thành thạo xây dựng API endpoints với FastAPI. Kinh nghiệm về Django và
                                                Flask là một điểm cộng.
                                            </li>
                                            <li className={`list-disc`}>
                                                Xây dựng database models với ORM (vd: SQLAlchemy).
                                            </li>
                                            <li className={`list-disc`}>
                                                Thành thạo cách làm việc với các database khác nhau, như PostgreSQL,
                                                MongoDB, MariaDB...
                                            </li>
                                            <li className={`list-disc`}>
                                                Có kinh nghiệm làm việc với các công cụ database migration, data
                                                insertion (vd: alembic).
                                            </li>
                                            <li className={`list-disc`}>
                                                Kinh nghiệm về Docker là một điểm cộng.
                                            </li>
                                        </ul>

                                        <br/>

                                        <p>Khi apply hãy gửi kèm CV của bạn.</p>

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