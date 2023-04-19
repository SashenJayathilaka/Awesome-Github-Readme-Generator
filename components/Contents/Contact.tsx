"use client";

import { FaRegHandshake } from "react-icons/fa";
import Heading from "../Heading";

type Props = {};

function Contact({}: Props) {
  return (
    <div className="py-8">
      <Heading label="Contact" icon={FaRegHandshake} />
    </div>
  );
}

export default Contact;
