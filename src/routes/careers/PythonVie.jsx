import Header from "../../components/common/Header.jsx";
import Footer from "../../components/common/Footer.jsx";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faDollarSign,
    faClock,
    faLocationDot,
    faLaptop
} from "@fortawesome/free-solid-svg-icons";


function CareersInfoCard({icon, title, description}) {
    return (
        <div className={`flex unicode-safe items-center`}>
            <div
                className={`flex items-center justify-center mr-2 text-[20px] text-[#eb2f5b] border !border-[#eb2f5b] rounded-full w-[40px] h-[40px]`}>
                {icon}
            </div>
            <div className={`flex flex-col text-[16px]`}>
                <div className={``}>{title}</div>
                <div className={`font-bold text-black`}>{description}</div>
            </div>
        </div>
    )
}

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
                            <li>Fullstack Python Developer</li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="sidebar-page-container pb-20">
                <div className="auto-container">
                    <div className="row clearfix">

                        <div className="content-side blog-single col-lg-8 col-md-12 col-sm-12 pb-[300px]">
                            <div className={`inner-box`}>
                                <h4 className={`text-[36px]`}>Fullstack Python Developer / Full-time / Full Remote</h4>

                                <div className={`my-10 flex gap-10`}>
                                    <CareersInfoCard
                                        title={`Mức lương`}
                                        description={`Up to 40M`}
                                        icon={<FontAwesomeIcon icon={faDollarSign}/>}
                                    />
                                    <CareersInfoCard
                                        title={`Kinh nghiệm`}
                                        description={`≥ 3 năm`}
                                        icon={<FontAwesomeIcon icon={faClock}/>}
                                    />
                                    <CareersInfoCard
                                        title={`Hình thức làm việc`}
                                        description={`Full Remote`}
                                        icon={<FontAwesomeIcon icon={faLaptop}/>}
                                    />
                                    <CareersInfoCard
                                        title={`Địa điểm`}
                                        description={`Hà Nội`}
                                        icon={<FontAwesomeIcon icon={faLocationDot}/>}
                                    />
                                </div>

                                <div className={`lower-content !pt-0 text-black unicode-safe`}>
                                    <div className={`text`}>

                                        <h5>Mô tả công việc</h5>
                                        <ul className={`pl-4 mb-4 list-disc`}>
                                            <li className={`list-disc`}>
                                                Tham gia thiết kế và phát triển các tính năng của các web app, website.
                                            </li>
                                            <li className={`list-disc`}>
                                                Đảm bảo việc duy trì hoạt động, hiệu suất, bảo mật cho frontend và
                                                backend của các web app, website.
                                            </li>
                                            <li className={`list-disc`}>
                                                Giao tiếp, tương tác chặt chẽ, rõ ràng và hiệu quả với các thành viên
                                                trong nhóm để đảm bảo mục tiêu phát triển các dự án.
                                            </li>
                                        </ul>

                                        <h5>Yêu cầu ứng viên</h5>
                                        <ul className={`pl-4 mb-4`}>
                                            <li className={`list-disc`}>
                                                Có ít nhất 3 năm kinh nghiệm với vị trí Fullstack Developer.
                                            </li>
                                            <li className={`list-disc`}>
                                                Backend: Sử dụng thành thạo Python, FastAPI, SQLAlchemy. Có kinh nghiệm
                                                với Odoo, Django là một điểm cộng.
                                            </li>
                                            <li className={`list-disc`}>
                                                Frontend: Sử dụng thành thạo ReactJS và plain JS/HTML/CSS.
                                            </li>
                                            <li className={`list-disc`}>
                                                Có thể làm việc với các database khác nhau như PostgreSQL, MariaDB...v.v
                                            </li>
                                            <li className={`list-disc`}>
                                                Thành thạo các công cụ version control như Git, GitHub, GitLab.
                                            </li>
                                            <li className={`list-disc`}>
                                                Kinh nghiệm với Docker, CI/CD là một điểm cộng.
                                            </li>
                                            <li className={`list-disc`}>
                                                Tư duy phân tích và kỹ năng giải quyết vấn đề tốt.
                                            </li>
                                        </ul>

                                        <h5>Quyền lợi</h5>
                                        <ul className={`pl-4 mb-4`}>
                                            <li className={`list-disc`}>
                                                Làm việc Full Remote, thời gian làm việc flexible, không theo khung giờ
                                                cố định.
                                            </li>
                                            <li className={`list-disc`}>
                                                Cung cấp thiết bị (laptop và màn hình) có thể mang về nhà.
                                            </li>
                                            <li className={`list-disc`}>
                                                Lương tháng 13 và thưởng KPI.
                                            </li>
                                            <li className={`list-disc`}>
                                                Xem xét tăng lương hàng năm.
                                            </li>
                                            <li className={`list-disc`}>
                                                Được tham gia bảo hiểm đầy đủ theo quy định, đóng bảo hiểm theo nguyện
                                                vọng tới full lương.
                                            </li>
                                            <li className={`list-disc`}>
                                                12 ngày phép/năm, và các ngày lễ, Tết, theo quy định.
                                            </li>
                                            <li className={`list-disc`}>
                                                Môi trường làm việc thân thiện, năng động
                                            </li>
                                            <li className={`list-disc`}>
                                                Học hỏi, tham gia các dự án trong và ngoài nước với nhiều lĩnh vực khác
                                                nhau, cơ hội tiếp thu các công nghệ mới.
                                            </li>
                                        </ul>

                                        <br/>

                                        <p>Khi ứng tuyển hãy gửi kèm CV của bạn.</p>

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