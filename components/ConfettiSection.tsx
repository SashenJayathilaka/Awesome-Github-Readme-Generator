"use client";

import useWindowSize from "@/lib/useWindowSize";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

type Props = {};

function ConfettiSection({}: Props) {
  const { width, height } = useWindowSize();
  const [isFalse, setIsFalse] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsFalse(false);
    }, 4000);
  }, [isFalse]);

  return (
    <div>
      <Confetti
        gravity={0.3}
        tweenDuration={4000}
        width={width - 10}
        height={height - 1}
        recycle={isFalse}
      />
    </div>
  );
}

export default ConfettiSection;
