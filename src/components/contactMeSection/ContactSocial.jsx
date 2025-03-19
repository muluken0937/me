import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/muluken-jenber"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/muluken0937"
        Icon={FiGithub}
      />
      <SingleContactSocial
        link="https://www.instagram.com/mulukenyegetalij?utm_source=qr&igsh=dWV2enkwa2NrY3g4"
        Icon={FaInstagram}
      />
    </div>
  );
};

export default ContactSocial;
