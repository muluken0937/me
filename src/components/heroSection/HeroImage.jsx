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
      {/* Wrapper for Image with Colored Edge */}
      <div className="relative clip-hexagon-bottom image-cyan-edge">
        <img
          src="../../public/images/mee.png"
          alt="Muluken"
          className="w-auto h-auto md:max-w-[400px] sm:max-w-[380px] clip-hexagon-bottom"
        />
      </div>

      {/* Hexagon Background */}
      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;