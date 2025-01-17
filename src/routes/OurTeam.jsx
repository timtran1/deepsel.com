import {Link} from "react-router-dom";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const teams = [
    {
        image: "/img/team/person1.png",
        name: "Lana Steiner",
        position: "Sr. Product Manager",
        description:
            "Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit",
        facebookUrl: "https://www.facebook.com",
        linkedinUrl: "https://www.linkedin.com",
        twitterUrl: "https://www.twitter.com",
        instagramUrl: "https://www.instagram.com",
    },
    {
        image: "/img/team/person2.png",
        name: "Phoenix Baker",
        position: "Sr. Frontend Developer",
        description:
            "Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit",
        facebookUrl: "https://www.facebook.com",
        linkedinUrl: "https://www.linkedin.com",
        twitterUrl: "https://www.twitter.com",
        instagramUrl: "https://www.instagram.com",
    },
    {
        image: "/img/team/person3.png",
        name: "Koray Okumus",
        position: "Sr. Product Designer",
        description:
            "Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit",
        facebookUrl: "https://www.facebook.com",
        linkedinUrl: "https://www.linkedin.com",
        twitterUrl: "https://www.twitter.com",
        instagramUrl: "https://www.instagram.com",
    },
    {
        image: "/img/team/person4.png",
        name: "Ava Wright",
        position: "Jr. Frontend Developer",
        description:
            "Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit",
        facebookUrl: "https://www.facebook.com",
        linkedinUrl: "https://www.linkedin.com",
        twitterUrl: "https://www.twitter.com",
        instagramUrl: "https://www.instagram.com",
    },

    {
        image: "/img/team/person1.png",
        name: "Lana Steiner",
        position: "Sr. Product Manager",
        description:
            "Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit",
        facebookUrl: "https://www.facebook.com",
        linkedinUrl: "https://www.linkedin.com",
        twitterUrl: "https://www.twitter.com",
        instagramUrl: "https://www.instagram.com",
    },
    {
        image: "/img/team/person2.png",
        name: "Phoenix Baker",
        position: "Sr. Frontend Developer",
        description:
            "Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit",
        facebookUrl: "https://www.facebook.com",
        linkedinUrl: "https://www.linkedin.com",
        twitterUrl: "https://www.twitter.com",
        instagramUrl: "https://www.instagram.com",
    },
    {
        image: "/img/team/person3.png",
        name: "Koray Okumus",
        position: "Sr. Product Designer",
        description:
            "Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit",
        facebookUrl: "https://www.facebook.com",
        linkedinUrl: "https://www.linkedin.com",
        twitterUrl: "https://www.twitter.com",
        instagramUrl: "https://www.instagram.com",
    },
    {
        image: "/img/team/person4.png",
        name: "Ava Wright",
        position: "Jr. Frontend Developer",
        description:
            "Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit",
        facebookUrl: "https://www.facebook.com",
        linkedinUrl: "https://www.linkedin.com",
        twitterUrl: "https://www.twitter.com",
        instagramUrl: "https://www.instagram.com",
    },
];

export default function OurTeam() {
    return (
        <>
            <Header />

            <section className="page-title bg-[url('/img/7.png')]">
                <div className="auto-container lg:pt-[56px]">
                    <div className="content">
                        <h1>Our Team</h1>
                    </div>
                </div>
            </section>

            <section className="relative z-10 w-full max-w-[1248px] mx-auto px-[16px] py-[64px]">
                <div className="text-center text-[40px] font-bold leading-[48px] font-['Poppins'] text-black">
                    Meet{" "}
                    <span className="text-[#f3665c] font-['Playfair_Display'] capitalize italic">
                        our team
                    </span>
                </div>

                <div className="text-center text-[14px] leading-[20px] font-['Poppins'] text-[#555555] mt-[16px]">
                    Our team is made up of some of the best global talents
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-x-[32px] gap-y-[80px] md:gap-y-[40px] mt-[63px]">
                    {teams.map((person, index) => (
                        <div
                            key={index}
                            className="w-full max-w-[280px] max-md:mx-auto md:odd:ml-auto md:even:mr-auto"
                        >
                            <div
                                className="w-full pb-[100%] rounded-[12px] bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${person.image})`,
                                }}
                            />
                            <div className="text-[16px] font-['Poppins'] font-semibold leading-[24px] text-black mt-[32px] text-center">
                                {person.name}
                            </div>
                            <div className="text-[14px] font-['Poppins'] font-normal leading-[20px] text-[#6B7280] text-center">
                                {person.position}
                            </div>
                            <div className="text-[14px] font-['Poppins'] font-normal leading-[20px] text-[#6B7280] text-center mt-[16px]">
                                {person.description}
                            </div>
                            <div className="flex justify-center items-center gap-x-[16px] mt-[16px]">
                                <a href={person.facebookUrl} target="_blank" className="transition-grow">
                                    <img src="/img/team/facebook.svg" />
                                </a>
                                <a href={person.twitterUrl} target="_blank" className="transition-grow">
                                    <img src="/img/team/twitter.svg" />
                                </a>
                                <a href={person.linkedinUrl} target="_blank" className="transition-grow">
                                    <img src="/img/team/linkedin.svg" />
                                </a>
                                <a href={person.instagramUrl} target="_blank" className="transition-grow">
                                    <img src="/img/team/instagram.svg" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Us */}
            <section className="relative z-10 flex flex-col items-center justify-center w-full max-w-[784px] mx-auto px-[16px] py-[32px] bg-[linear-gradient(90deg,#e94057_0%,#f27121_100%)] rounded-[6px]">
                <div className="text-[20px] font-['Poppins'] font-bold leading-[28px] text-white text-center">
                    Want to be a part?
                </div>
                <div className="text-[14px] font-['Poppins'] font-normal leading-[20px] text-white text-center mt-[16px] w-full max-w-[588px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Laoreet volutpat accumsan nibh ultricies. Placerat dictumst
                    platea pellentesque sodales augue ut.
                </div>
                <Link
                    to="/#contact"
                    className="text-[14px] font-['Poppins'] font-bold leading-[23.8px] text-white bg-black px-[48px] py-[16px] rounded-full mt-[32px] mx-auto inline-block cursor-pointer transition-grow"
                >
                    Contact us
                </Link>
            </section>

            <Footer />
        </>
    );
}
