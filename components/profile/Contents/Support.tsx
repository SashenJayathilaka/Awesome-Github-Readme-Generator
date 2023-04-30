"use client";

import { profileAtomDetail } from "@/atom/profileDetailsAtom";
import Heading from "@/components/Heading";
import InputField from "@/components/InputField";
import { GiLifeSupport } from "react-icons/gi";
import { useRecoilState } from "recoil";

type Props = {};

function Support({}: Props) {
  const [support, setSupport] = useRecoilState(profileAtomDetail);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSupport((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="py-4">
      <Heading icon={GiLifeSupport} label="Support" />
      <div className="py-2 flex justify-start gap-4">
        <div className="flex justify-center w-full gap-2 items-center">
          <img
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt=""
            className="w-36"
          />
          <InputField
            label="Buy me a Coffee uUername"
            type="text"
            name="buymeacoffee"
            onChange={onChange}
            value={support.buymeacoffee}
          />
        </div>
        <div className="flex justify-center w-full gap-2 items-center">
          <img
            src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3"
            alt=""
            className="w-36"
          />
          <InputField
            label="Ko-fi username"
            type="text"
            name="koFi"
            onChange={onChange}
            value={support.koFi}
          />
        </div>
      </div>
    </div>
  );
}

export default Support;
