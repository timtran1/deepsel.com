import Header from "../../components/common/Header.jsx";
import Footer from "../../components/common/Footer.jsx";
import {Link} from "react-router-dom";

export default function AzureVie() {
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
                            <li>DevOps Engineer (K8s, Azure)</li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="sidebar-page-container pb-20">
                <div className="auto-container">
                    <div className="row clearfix">


                        <div className="content-side blog-single col-lg-8 col-md-12 col-sm-12 pb-[300px]">
                            <div className={`inner-box`}>
                                <h4>DevOps Engineer (K8s, Azure)/ Part-time / Full Remote</h4>

                                <div className={`lower-content`}>
                                    <div className={`text`}>
                                        <p>Hưởng lương cố định 20tr/tháng cho 30 giờ làm việc (tương đương 4 ngày
                                            fulltime).
                                            <br/></p>

                                        <h5>Tính chất công việc:</h5>
                                        <ul className={`pl-4 mb-4`}>
                                            <li className={`list-disc`}>
                                                Trong giờ hành chính, cần trả lời yêu cầu hỗ trợ trong vòng 15 phút.
                                            </li>
                                            <li className={`list-disc`}>
                                                Khi có yêu cầu hỗ trợ, bạn có thể bắt đầu log số giờ làm việc.
                                            </li>
                                            <li className={`list-disc`}>
                                                Nếu số giờ làm việc vượt quá 30 giờ / tháng, bạn được trả theo giờ với
                                                rate tương đương (20tr/30).
                                            </li>
                                            <li className={`list-disc`}>
                                                Hầu hết thời gian bạn sẽ không phải làm gì cả. Bạn vẫn hưởng lương cố
                                                định nếu không có yêu cầu hỗ trợ.
                                            </li>
                                        </ul>

                                        <h5>Yêu cầu:</h5>
                                        <ul className={`pl-4`}>
                                            <li className={`list-disc`}>
                                                Giao tiếp tiếng Anh tốt.
                                            </li>
                                            <li className={`list-disc`}>
                                                Khi có yêu cầu hỗ trợ, bạn có thể bắt đầu log số giờ làm việc.
                                            </li>
                                            <li className={`list-disc`}>
                                                Kinh nghiệm làm việc với Kubernetes, Azure Cloud.
                                            </li>
                                            <li className={`list-disc`}>
                                                Kinh nghiệm làm việc với server cluster environment.
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