import React, { useEffect } from "react";
import { FaFacebook, FaGithub, FaTelegram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import bunath from "../../assets/Pheng Bunth.jpg";
import visal from "../../assets/Visal.jpg";
import Narith from "../../assets/Pon Channarith.jpg";
import Menghan from "../../assets/Mntor.jpg";
const AllAboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* content */}

      <div className="grid gap-10 justify-center">
        <h1 className="animate-marquee text-center text-3xl p-3 text-[#0056B1] font-bold sm:text-4xl font-suwannaphum mt-5">
          លោកគ្រូរបស់ពួកយើង
        </h1>
        {/* Mentor Section */}
        <div className="grid gap-10 justify-center">
          <MentorCard
            name="Meng Hann"
            title="Mentor"
            description="Professional IT at Royal University of Phnom Penh"
            imgSrc={Menghan}
            facebook="https://www.facebook.com/"
            github="https://github.com/"
            telegram="https://t.me/"
          />
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center w-full gap-10 px-4">
        {/* Title Section */}
        {/* Team Section */}
        <div className="w-full overflow-hidden">
          <h1 className="animate-marquee text-center text-3xl p-3 text-[#0056B1] font-bold sm:text-4xl font-suwannaphum">
            សមាជិកក្រុមរបស់យើង
          </h1>
        </div>

        <div className="grid gap-10 md:gap-16 sm:grid-cols-2 lg:grid-cols-3 justify-center">
          <MentorCard
            name="Pon Channarith"
            title="Team Lead"
            description="Royal University of Phnom Penh"
            imgSrc={Narith}
            facebook="https://www.facebook.com/"
            github="https://github.com/"
            telegram="https://t.me/"
          />
          <MentorCard
            name="Pheng Bunath"
            title="Member"
            description="Royal University of Phnom Penh"
            imgSrc={bunath}
            facebook="https://www.facebook.com/"
            github="https://github.com/"
            telegram="https://t.me/"
          />
          <MentorCard
            name="Prak Visal"
            title="Member"
            description="Royal University of Phnom Penh"
            imgSrc={visal}
            facebook="https://www.facebook.com/"
            github="https://github.com/"
            telegram="https://t.me/"
          />
        </div>
      </div>
    </>
  );
};

const MentorCard = ({
  name,
  title,
  description,
  imgSrc,
  facebook,
  github,
  telegram,
}) => (
  <div
    className="w-full max-w-[300px] text-center py-4 px-6 bg-[#16A1DF] shadow-sm rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
    data-aos="fade-up"
    data-aos-duration="1500"
  >
    <div className="flex justify-center items-center">
      <img
        src={imgSrc}
        alt={`${name} photo`}
        className="mb-4 rounded-full border-4 border-yellow-400 w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover"
      />
    </div>
    <h3 className="text-white text-lg tracking-tight md:text-xl lg:text-2xl font-bold font-suwannaphum">
      {name}
    </h3>
    <h4 className="text-black text-md font-semibold md:text-lg lg:text-xl mb-2 font-suwannaphum">
      {title}
    </h4>
    <p className="text-gray-200 -mt-2 text-sm md:text-base lg:text-lg font-suwannaphum">
      {description}
    </p>
    <ul className="flex justify-center gap-4 mt-2">
      <SocialLink href={facebook} Icon={FaFacebook} />
      <SocialLink href={github} Icon={FaGithub} />
      <SocialLink href={telegram} Icon={FaTelegram} />
    </ul>
  </div>
);

const SocialLink = ({ href, Icon }) => (
  <li>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xl text-white hover:text-red-600"
    >
      <Icon />
    </a>
  </li>
);

export default AllAboutUs;
