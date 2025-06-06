import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { picture1, picture2, picture3, picture4, picture5 } from "../assets";
import SectionWrapper from "./SectionWrapper";
import { Link } from "react-router-dom";

const images = [picture1, picture2, picture3, picture4, picture5];

function Picture() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (currentIndex < images.length) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setShowText(true);
    }
  }, [currentIndex]);

  return (
    <SectionWrapper>
      <AnimatePresence>
        {images.map((image, index) => {
          if (index < currentIndex) return null; // Already gone

          const offset = (index % 2 === 0 ? -20 : 20) * (index - currentIndex); // stagger
          const isTopImage = index === currentIndex;

          return (
            <motion.img
              key={index}
              src={image}
              initial={{
                x: offset,
                y: (index - currentIndex) * 10,
                scale: 1 - (index - currentIndex) * 0.05,
                opacity: 1,
              }}
              animate={{
                x: offset,
                y: (index - currentIndex) * 10,
                scale: 1 - (index - currentIndex) * 0.05,
                opacity: 1,
              }}
              exit={
                isTopImage
                  ? {
                      x: index % 2 === 0 ? -500 : 500,
                      opacity: 0,
                      rotate: index % 2 === 0 ? -15 : 15,
                      transition: { duration: 1 },
                    }
                  : {}
              }
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg"
              style={{ zIndex: images.length - index }}
            />
          );
        })}
      </AnimatePresence>

      {showText && (
        <Link to="/card">
          <div>
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute text-4xl font-bold text-customBlue inset-0 flex justify-center items-center text-center transform rotate-6 cursor-pointer z-50 bg-white/70"
            >
              You&apos;re Getting Old! gurlll! 🙂‍↔️
            </motion.p>
            <p className="-mt-[4rem] text-center text-black font-medium text-sm ">
              "Click for Next Page"
            </p>{" "}
          </div>
        </Link>
      )}
    </SectionWrapper>
  );
}

export default Picture;
