import { BsFillBagCheckFill } from "react-icons/bs";
import Prerequisites from "./Prerequisites";

type Props = {};

function GettingStarted({}: Props) {
  return (
    <div className="py-8">
      <div className="flex justify-start gap-6 py-4 items-center">
        <BsFillBagCheckFill size={25} />
        <p className="text-2xl">Getting Started</p>
      </div>
      <Prerequisites />
    </div>
  );
}

export default GettingStarted;
