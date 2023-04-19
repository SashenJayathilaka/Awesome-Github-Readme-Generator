"use client";

import { BsQuestionCircle } from "react-icons/bs";
import Heading from "../Heading";

type Props = {};

function FaqSection({}: Props) {
  return (
    <div className="py-8">
      <Heading label="FAQ" icon={BsQuestionCircle} />
    </div>
  );
}

export default FaqSection;
