"use client";

import { useState } from "react";
import ClientOnly from "./ClientOnly";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import MiddleChoose from "./MiddleChoose";

type Props = {};

function ClientController({}: Props) {
  const [isShow, setIsShow] = useState(true);

  return (
    <>
      {isShow ? (
        <ClientOnly>
          <HeroSection setIsShow={setIsShow} />
          <HowItWorks />
        </ClientOnly>
      ) : (
        <ClientOnly>
          <MiddleChoose />
        </ClientOnly>
      )}
    </>
  );
}

export default ClientController;
