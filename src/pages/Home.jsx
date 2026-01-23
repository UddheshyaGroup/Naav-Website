import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { Users, GraduationCap, Award, TrendingUp } from "lucide-react";
import Aboutus from "./Aboutus.jsx";
import Contact from "./Contact.jsx";

const flyINDesktop = {
  hiddenleft: { opacity: 0, x: -100 },
  hiddenright: { opacity: 0, x: 100 },
  hiddentop: { opacity: 0, y: -100 },
  hiddenbottom: { opacity: 0, y: 100 },
  visible: (i = 0) => ({
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      repeat: 0,
      stiffness: 120,
      damping: 20,
      delay: 6 + i * 0.7,
    },
  }),
};

const flyINMobile = {
  hiddenleft: { opacity: 0, x: -100 },
  hiddenright: { opacity: 0, x: 100 },
  hiddentop: { opacity: 0, y: -100 },
  hiddenbottom: { opacity: 0, y: 100 },
  visible: (i = 0) => ({
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      repeat: 0,
      stiffness: 120,
      damping: 20,
      delay: 0.3 + i * 0.3,
    },
  }),
};

const CounterStat = ({ end, suffix = "", label, icon: Icon, color }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = end / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 text-center">
      {Icon && <Icon className={`${color} w-6 h-6 md:w-8 md:h-8`} />}
      <span className={`${color} text-xl md:text-2xl font-bold`}>
        {count.toLocaleString()}
        {suffix}
      </span>
      <span className="text-xs md:text-sm text-gray-600 max-w-[150px] md:max-w-none">{label}</span>
    </div>
  );
};

const ProgramCard = ({ title, image, icon, navigate }) => {
  return (
    <div
      className="relative h-[360px] rounded-2xl overflow-hidden bg-cover bg-center group"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

      {/* Content */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-white rounded-xl p-4 flex items-center gap-3 shadow-lg z-10">
        <img src={icon} alt="" className="h-10 w-10" />

        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-800 leading-snug">
            {title}
          </h3>
        </div>

        <button 
          onClick={() => navigate('/courses')}
          className="bg-green-500 hover:bg-green-600 text-white text-xs px-4 py-2 rounded-full transition"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleContactClick = () => navigate("/contact");
  const flyIN = isMobile ? flyINMobile : flyINDesktop;

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* desktop: autoplaying video background */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          <iframe
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
            src="https://www.youtube.com/embed/_HqnL1jGvv8?autoplay=1&mute=1&loop=1&controls=0&start=2&modestbranding=1&rel=0&playsinline=1&playlist=_HqnL1jGvv8&iv_load_policy=3&cc_load_policy=0&fs=0&disablekb=1"
            title="NAAV Promotional Video"
            frameBorder="0"
            allow="autoplay; encrypted-media;"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        {/* mobile: static hero background */}
        <div className="absolute inset-0 bg-[url('/hostel.jpg')] bg-cover bg-center bg-no-repeat md:hidden" />

        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-black/55 z-10" />

        {/* shared overlay content */}
        <div className="relative z-20 flex h-full flex-col px-6 md:px-12 py-6 md:py-12 md:mt-8 mt-6">
          <div className="flex items-start justify-end mb-4 md:mb-6">
            <motion.img
              src="/logo.png"
              alt="logo"
              className="hidden md:block h-16 w-auto"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 6, duration: 0.6, ease: "easeOut" }}
            />
          </div>

          <div className="mt-8 md:mt-12 text-left">
            <div className="text-[#ffa239] font-bold text-3xl leading-tight md:text-6xl">
              <motion.p
                className="m-0 w-fit"
                variants={flyIN}
                style={{ WebkitTextStroke: "1px #ffffff" }}
                custom={0}
                initial="hiddentop"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ color: "#f2f2f2" }}
              >
                Nepal Adarsha
              </motion.p>
              <motion.p
                className="m-0 w-fit"
                style={{ WebkitTextStroke: "1px #ffffff" }}
                variants={flyIN}
                custom={2}
                initial="hiddenbottom"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ color: "#f2f2f2" }}
              >
                Awasiya Vidalaya
              </motion.p>

              <motion.p
                className="text-white text-base md:text-xl mt-4 max-w-xl"
                variants={flyIN}
                custom={2}
                initial="hiddenright"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ color: "#f2f2f2" }}
              >
                Where every child belongs, every smile matters, and every day
                sparks curiosity.
              </motion.p>

              <motion.div
                className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4"
                variants={flyIN}
                custom={3}
                initial="hiddenbottom"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg font-semibold transition-colors duration-200 text-sm md:text-base"
                >
                  Apply Now
                </button>
                <button
                  onClick={() => navigate('/courses')}
                  className="border-2 border-white text-white hover:bg-white/10 px-4 md:px-6 py-2 md:py-2.5 rounded-lg font-semibold transition-colors duration-200 text-sm md:text-base"
                >
                  Learn More
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-[140px] py-4 md:py-0">
        <div className="bg-gray-100 py-6 px-4 grid grid-cols-2 md:grid-cols-4 justify-items-center items-center gap-4 md:gap-6">
          {/* Years of Excellence */}
          <CounterStat
            end={20}
            suffix="+"
            label="Years of Educational Excellence"
            icon={Award}
            color="text-orange-400"
          />

          {/* Students */}
          <CounterStat
            end={1500}
            suffix="+"
            label="Students Learning Every Year"
            icon={Users}
            color="text-purple-400"
          />

          {/* Qualified Teachers */}
          <CounterStat
            end={50}
            suffix="+"
            label="Qualified Teachers - Dedicated & Experienced Faculty"
            icon={GraduationCap}
            color="text-red-400"
          />

          {/* Success Rate */}
          <CounterStat
            end={95}
            suffix="%+"
            label="Success Rate - Outstanding Academic Results"
            icon={TrendingUp}
            color="text-green-400"
          />
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="w-full py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-10 text-gray-800">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <ProgramCard
              title="Pre-School Education"
              image="/Preschool.jpeg"
              icon="icons/preschoolicon.png"
              navigate={navigate}
            />
            <ProgramCard
              title="Basic Level Education"
              image="/basiceducation.jpg"
              icon="icons/basiclogo.png"
              navigate={navigate}
            />
            <ProgramCard
              title="+2 Computer Science & Management"
              image="/plus2.jpg"
              icon="/icons/plus2icon.png"
              navigate={navigate}
            />
            <ProgramCard
              title="Hospitality Management"
              image="/hospitality.png"
              icon="/icons/Hosicon.png"
              navigate={navigate}
            />
          </div>
        </div>
      </div>

      {/* Join NAAV Community Section */}
      <div className="relative w-full h-[270px] md:h-[350px] bg-[url('/adarshawash.png')] mt-[40px] bg-cover bg-center overflow-visible">
        {/* Floating badge */}
        <div className="absolute top-[-20px] md:top-[-28px] left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[85%] max-w-5xl bg-green-500 rounded-lg shadow-md">
          <div className="grid grid-cols-2 md:grid-cols-4 text-white text-xs md:text-sm font-medium py-3 md:py-4 text-center gap-2 md:gap-0">
            <span>Experienced Faculty</span>
            <span>Dedicated Educators</span>
            <span>Guidance by Experts</span>
            <span>Qualified Teachers</span>
          </div>
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 md:pt-24">
          <div className="max-w-md text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Discover 
              <br />
              your path 
              <span className="block mt-2">With NAAV</span>
            </h2>

            <button
              onClick={handleContactClick}
              className="mt-6 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 transition text-white px-5 md:px-6 py-2.5 md:py-3 rounded-md text-sm font-semibold"
            >
              Contact Us
              <span className="text-lg"></span>
            </button>
          </div>
        </div>
      </div>
      <Aboutus />
      <Contact />
    </>
  );
};

export default Home;
