"use client";

import { middleControllers } from "@/atom/middleController";
import { gitTechnologies } from "@/atom/technology";
import updateState from "@/hook/updateState";
import { Checkbox } from "@mui/material";
import { useRecoilState } from "recoil";

type Props = {
  label: string;
  image: string;
  index: number | string;
};

function Languages({ label, image, index }: Props) {
  const [technology, setTechnology] = useRecoilState(gitTechnologies);
  const { images } = updateState();

  const boxLabel = { inputProps: { "aria-label": "Checkbox demo" } };

  const onChangeTechnology = () => {
    if (images.updatedStateTechnology.includes(image)) {
      setTechnology((prev: string | any) => ({
        ...prev,
        [label]: null,
      }));
    } else {
      setTechnology((prev: string | any) => ({
        ...prev,
        [label]: image,
      }));
    }
  };

  return (
    <div>
      <div
        className={`flex flex-col justify-between items-center border border-[#0F2557] w-full overflow-hidden rounded-xl px-1 py-4 space-y-2 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover-shadow-xl hover:text-black cursor-pointer ${
          images.updatedStateTechnology.includes(image) && "bg-[#161748]"
        }`}
        onClick={onChangeTechnology}
      >
        <Checkbox
          {...boxLabel}
          value={label}
          name={label}
          sx={{ color: "#fff" }}
          color="default"
          checked={images.updatedStateTechnology.includes(image)}
        />
        {images.updatedStateTechnology.includes(image) ? (
          <img
            src={image}
            alt={label}
            className="object-cover h-10 w-10 group-hover:scale-110 transition animate-bounce"
          />
        ) : (
          <img
            src={image}
            alt={label}
            className="object-cover h-10 w-10 group-hover:scale-110 transition hover:animate-ping"
          />
        )}
        <p className="truncate text-center font-medium">{label}</p>
      </div>
    </div>
  );
}

export default Languages;
