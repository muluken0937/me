import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="relative h-full flex items-center justify-center"
    >
      {/* Wrapper for Image with Full Hexagon Background */}
      <div className="relative">
        {/* Full Hexagon Background Color */}
        <div className="absolute inset-0 bg-cyan-500 clip-full-hexagon z-0"></div>

        {/* Image */}
        <img
          src="../../public/images/mee.png"
          alt="Muluken"
          className="w-auto h-auto md:max-w-[350px] sm:max-w-[320px] clip-hexagon-bottom relative z-10"
        />
      </div>

      {/* Hexagon Background (Animated) */}
      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;