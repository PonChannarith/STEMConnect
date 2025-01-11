import React, { useEffect, useState } from "react";
import "./Background.css";
import "animate.css";

// Component to animate numbers
const CountUp = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2; // duration in seconds
    const totalSteps = end; // total steps equal to the end value
    const incrementTime = (duration * 1000) / totalSteps; // time per step

    const increment = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < end) {
          return prevCount + 1;
        } else {
          clearInterval(increment);
          return end;
        }
      });
    }, incrementTime);

    return () => clearInterval(increment);
  }, [end]);

  return (
    <h3 className="text-white text-3xl font-suwannaphum font-semibold md:text-5xl lg:text-7xl">
      {count.toLocaleString()}
    </h3>
  );
};

const Statistics = () => {
  return (
    <div className="grid grid-cols-2 justify-around font-suwannaphum w-full text-center mx-auto gap-5 mt-20 lg:grid-cols-4">
      <div className="text-center text-white">
        <CountUp end={830}/>
        <span className="text-base font-suwannaphum font-bold opacity-80 lg:text-2xl">
          សៀវភៅ
        </span>
      </div>
      <div className="text-center text-white">
        <CountUp end={552} />
        <span className="text-base font-suwannaphum font-bold opacity-80 lg:text-2xl">
          មេរៀន
        </span>
      </div>
      
      <div className="text-center text-white">
        <CountUp end={240} />
        <span className="text-white text-base font-suwannaphum font-bold opacity-80 lg:text-2xl">
          សាលារៀន
        </span>
      </div>
      <div className="text-center text-white">
        <CountUp end={670} />
        <span className="text-base font-suwannaphum font-bold opacity-80 lg:text-2xl">
          បណ្ណាល័យ
        </span>
      </div>
    </div>
  );
}
const Background = () => {
  return (

    <>
    <section className="background">
      <div className="overlay">
        <div className="content">
          <h2 className="text-white font-suwannaphum uppercase font-bold text-3xl sm:text-6xl lg:text-8xl">
            STEMConnect
          </h2>
          <br /><br />
          <div className="w-max mx-auto">
            <h1 className="animate-typing overflow-hidden font-suwannaphum whitespace-nowrap border-r-2 border-r-white text-lg text-justify mt-2 p-2 text-white font-bold md:text-3xl lg:text-4xl lg:p-4 2xl:text-5xl 2xl:ml-5">
              Connecting Science, Technology, Engineering, and Mathematics
            </h1>
          </div>
          <span className="text-white font-suwannaphum text-md font-normal mt-4 sm:px-16 lg:text-lg lg:mt-5 xl:px-52 line-clamp-3">
            Empowering the next generation of innovators through STEM education. 
            We aim to inspire students with cutting-edge knowledge, practical training, 
            and the skills they need to lead a brighter future.
          </span>
          
          <Statistics />
        </div>
      </div>
    </section>

    </>
  );
};

export default Background;
