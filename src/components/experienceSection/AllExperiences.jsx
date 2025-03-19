import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: "MinT",
    date: "may_2023 - july_203",
    responsibilities: [
      "Building innovative tech solutions with a team.",
      "Developing a web app for freelancer organizations.",
      "Managing network configuration and maintenance.",
      "Maintaining project documentation efficiently.",
    ],
  },
  {
    job: "Full-Stack Developer",
    company: "SciTech valley",
    date: "july_2024 - jan_2025",
    responsibilities: [
      "Developing ERP solutions using the MERN stack.",
      "Building responsive UIs with React and Node.js.",
      "Optimizing APIs and databases for performance.",
      "Collaborating to deliver high-performance apps.",
    ],
  },
  {
    job: "Front-End Developer",
    company: "EthixDev",
    date: "2025 - Present",
    responsibilities: [
      "Building Sebat Tour's website using React.js and Tailwind CSS.",
      "Creating responsive and user-friendly web interfaces.",
      "Collaborating with teams to enhance UI/UX design.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
