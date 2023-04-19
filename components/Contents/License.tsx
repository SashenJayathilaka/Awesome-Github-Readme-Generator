"use client";

import { AiOutlineWarning } from "react-icons/ai";
import Heading from "../Heading";

type Props = {};

function License({}: Props) {
  return (
    <div className="py-8">
      <Heading label="License" icon={AiOutlineWarning} />
    </div>
  );
}

export default License;
