"use client";

import { DiMagento } from "react-icons/di";
import Heading from "../Heading";

type Props = {};

function Acknowledgements({}: Props) {
  return (
    <div className="py-8">
      <Heading label="Acknowledgements" icon={DiMagento} />
    </div>
  );
}

export default Acknowledgements;
