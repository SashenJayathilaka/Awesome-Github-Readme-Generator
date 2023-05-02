"use client";

import { profileAtomDetail } from "@/atom/profileDetailsAtom";
import Heading from "@/components/Heading";
import InputField from "@/components/InputField";
import { randomImage } from "@/lib/imgStore";
import { motion } from "framer-motion";
import { BsFillImageFill } from "react-icons/bs";
import { useRecoilState } from "recoil";

type Props = {};

function SideBarImage({}: Props) {
  const [imageLink, setImageLink] = useRecoilState(profileAtomDetail);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageLink((prev) => ({
      ...prev,
      rightHandSideImage: event.target.value,
    }));
  };

  const randomSelectImages = () => {
    setImageLink((prev) => ({
      ...prev,
      rightHandSideImage: "",
    }));
    setImageLink((prev) => ({
      ...prev,
      rightHandSideImage:
        randomImage[Math.floor(Math.random() * randomImage.length)],
    }));
  };

  return (
    <div className="py-6">
      <Heading icon={BsFillImageFill} label="Right Hand Side Image" />
      <div className="flex flex-col justify-center">
        <div className="flex justify-center w-full items-center gap-4">
          <InputField
            label="Enter Image Link"
            type="text"
            name="imageLink"
            onChange={onChange}
            value={imageLink.rightHandSideImage}
          />
          <button
            className="flex px-2.5 py-2.5 bg-gray-900 text-gray-200 rounded-md hover:bg-gray-600"
            onClick={randomSelectImages}
          >
            Random Select
          </button>
        </div>
        {imageLink.rightHandSideImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="border border-blue-500 w-[350px] rounded-md mx-2.5 my-2.5"
          >
            <img
              src={imageLink.rightHandSideImage}
              alt="img"
              className="w-[350px] px-2.5 py-2.5"
              loading="lazy"
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default SideBarImage;
