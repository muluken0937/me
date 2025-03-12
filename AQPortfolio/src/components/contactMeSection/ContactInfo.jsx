import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="mulukenjenber@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="0937908221" Image={FiPhone} />
      <SingleInfo text="Addis Ababa, Ethiopia" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
