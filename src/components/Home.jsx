import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleClick = () => {
    if (step === 1) {
      setStep(2);
    } else {
      navigate("/pictures");
    }
  };

  return (
    <div
      className="flex flex-col min-h-screen cursor-pointer w-full items-center justify-center overflow-clip"
      onClick={handleClick}
    >
      <div className="w-[90%] max-w-[400px] px-8">
        {step >= 1 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-4xl lg:text-5xl text-center font-extrabold text-customBlue drop-shadow-lg curveText"
          >
            Hi Ella
          </motion.p>
        )}
        {step >= 2 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-2xl lg:text-4xl text-center font-medium text-customBlue opacity-50 drop-shadow-md"
          >
            I have something to show you :)
          </motion.p>
        )}
      </div>
    </div>
  );
}

export default Home;
