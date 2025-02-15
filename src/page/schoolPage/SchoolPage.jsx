import React from "react";
import FooterCard from "../../components/footer/FooterCard";

// Updated cards array with unique profileImage for each card
const cards = [
  {
    id: 1,
    title: "សាកលវិទ្យាល័យឌីជូថល",
    subtitle: "23 សកម្មភាព | 123 អ្នកចូលរួម",
    image: "../src/assets/AUPP.jpg", // Main card image
    profileImage: "../src/assets/AUPP.jpg", // Unique profile image
  },
  {
    id: 2,
    title: "វិទ្យាល័យ​ ​ភ្នំស្រុក",
    subtitle: "21 សមាជិក | 114 អ្នកចូលរួម",
    image: "../src/assets/វិទ្យាល័យភ្នំស្រុក.webp",
    profileImage: "../src/assets/logo_phnomsrok.jpg", // Unique profile image
  },
  {
    id: 3,
    title: "Khan Academy",
    subtitle: "11 សមាជិក | 98 អ្នកចូលរួម",
    image: "../src/assets/khan academy.png",
    profileImage: "../src/assets/logo_stemacademy.png", // Unique profile image
  },
  {
    id: 4,
    title: "វិទ្យាល័យហ៊ុនសែនតាខ្មៅ",
    subtitle: "16​សមាជិក | 98 អ្នកចូលរួម",
    image: "../src/assets/វិទ្យាល័យហ៊ុនតាខ្មៅ.webp",
    profileImage: "../src/assets/logo_វិទ្យាល័យតាខ្មៅ.png", // Unique profile image
  },
  {
    id: 4,
    title: "វិទ្យាស្ថានគរុគោសល្យរាជ្យធានីភ្នំពេញ",
    subtitle: "16​សមាជិក | 98 អ្នកចូលរួម",
    image: "../src/assets/គោរុគោសល្យ.jpg",
    profileImage: "../src/assets/logo_គរុគោសល្យ.jpg", // Unique profile image
  },
  {
    id: 5,
    title: "វិទ្យាល័យភ្ញីមាស",
    subtitle: "37​សមាជិក | 98 អ្នកចូលរួម",
    image: "../src/assets/វិទ្យាល័យភ្ញីមាស.jpg",
    profileImage: "../src/assets/logo_វិទ្យាល័យភ្ញីមាស.jpg", // Unique profile image
  },
  {
    id: 6,
    title: "វិទ្យាល័យភ្នំតំបែរ",
    subtitle: "23​សមាជិក | 38 អ្នកចូលរួម",
    image: "../src/assets/វិទ្យាល័យភ្នំតំបែរ.jpg",
    profileImage: "../src/assets/logo_វិទ្យាល័យភ្នំតំបែរ.jpg", // Unique profile image
  },
  {
    id: 7,
    title: "Digital School help",
    subtitle: "71 ​សមាជិក | 79 អ្នកចូលរួម",
    image: "../src/assets/logo_moeyes.png",
    profileImage: "../src/assets/Moeyes.png", // Unique profile image
  },
];

const SchoolPage = () => {
  return (
    <>
      <div className=" py-8">
        <div className="-mt-2 max-w-screen-2xl w-full p-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mb-5">
          {cards.map((card) => (
            <div
              key={card.id}
              className=" text-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative text-black">
                {/* Main Card Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  {/* Unique Profile Image */}
                  <img
                    src={card.profileImage}
                    alt="Profile"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-blue-600  font-suwannaphum">{card.title}</h3>
                <p className="text-sm text-black  font-suwannaphum">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FooterCard />
    </>
  );
};

export default SchoolPage;
