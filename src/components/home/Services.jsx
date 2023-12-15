import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMobile, faCartShopping, faDisplay, faSliders, faPalette, faChartSimple} from "@fortawesome/free-solid-svg-icons";

const services = [
    {
        icon: faChartSimple,
        title: 'Custom Software Development',
        text: 'We create bespoke software that drives success and innovation in your business.',
        // className: `bg-gradient-to-r from-[#eb2f5b] to-[#ff8364]`
    },
    {
        icon: faDisplay,
        title: 'Web Development',
        text: 'We build beautiful websites and web applications that are scalable, secure, and easy to maintain.'
    },
    {
        icon: faSliders,
        title: 'ERP Implementation',
        text: 'We provide comprehensive solutions for integrating and managing your enterprise\'s resources effectively. '
    },
    {
        icon: faMobile,
        title: 'Mobile Development',
        text: 'We build dynamic, user-friendly mobile applications tailored to your business needs.'
    },
    {
        icon: faCartShopping,
        title: 'E-commerce Development',
        text: 'From custom storefronts to integrated payment systems, we empower your business to thrive in the digital marketplace.'
    },
    {
        icon: faPalette,
        title: 'UI/UX Design',
        text: 'We focus on crafting visually stunning and intuitively navigable interfaces, ensuring a delightful user experience. '
    },
]


export default function Services() {
    return (
        <section className="services-section max-w-screen-lg mx-auto">
            <div className="auto-container">
                <div className="sec-title centered">
                    {/*<div className="title">what we do</div>*/}
                    <h2>Our services</h2>
                </div>

                <div className={`flex flex-wrap gap-4 justify-center`}>
                    {services.map((service, index) =>
                        <div
                            className={`shadow-sm rounded-lg bg-white border border-gray-300 w-[300px] h-[220px] p-4 flex flex-col gap-2 items-start ${service.className}`}
                            key={index}>
                            <FontAwesomeIcon icon={service.icon} className={`text-3xl text-[#eb2f5b]`}/>
                            <div className={`font-bold text-lg text-black`}>{service.title}</div>
                            <div>{service.text}</div>
                        </div>
                    )}
                </div>

            </div>
        </section>
    )
}