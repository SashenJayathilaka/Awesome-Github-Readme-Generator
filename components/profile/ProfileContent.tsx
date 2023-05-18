"use client";

import { profileAtomDetail } from "@/atom/profileDetailsAtom";
import updateProfileValue from "@/hook/updateProfileValue";
import { ProfileAtomDetails } from "@/type";
import { Divider } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BsMarkdown } from "react-icons/bs";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";

import ActionLode from "../ActionLode";
import DividerLine from "../DividerLine";
import ProfileButtonAction from "./ProfileButtonAction";
import ProfileFeedbackForm from "./ProfileFeedbackForm";
import ProfileFormContainer from "./ProfileFormContainer";
import ProfileHeader from "./ProfileHeader";
import ProfileMarkdown from "./markdown/ProfileMarkdown";
import ProfileMarkdownPreview from "./markdown/ProfileMarkdownPreview";
import ConfigOptions from "./process/ConfigOptions";

type Props = {};

function ProfileContent({}: Props) {
  const [isShow, setIsShow] = useState(true);
  const [isMdPreview, setIsMdPreview] = useState(true);
  const [action, setAction] = useState(false);
  const [profileDetails, setProfileDetails] = useRecoilState(profileAtomDetail);
  const [currentStateValue, setCurrentStateValue] =
    useState<ProfileAtomDetails>(profileDetails);

  const { updateProfileStore } = updateProfileValue();

  const KeepCacheUpdated = (profileStore: ProfileAtomDetails) => {
    localStorage.setItem(
      "cache",
      JSON.stringify({
        profileStore,
      })
    );

    updateCurrentValue();
  };

  const updateCurrentValue = () => {
    const cache = JSON.parse(localStorage.getItem("cache")!);

    if (!cache) {
      return;
    }

    setCurrentStateValue(
      cache.profileStore
        ? { ...profileDetails, ...cache.profileStore }
        : profileDetails
    );
  };

  const OnChangeAction = () => {
    KeepCacheUpdated(profileDetails);

    setAction(true);

    setTimeout(() => {
      setIsShow(false);
      setAction(false);
      toast.success("Generate Successfully");
    }, 3000);
  };

  const updateAtom = () => {
    updateProfileStore(currentStateValue, setProfileDetails);
  };

  useEffect(() => {
    updateAtom();
  }, [isShow]);

  return (
    <>
      <ProfileHeader />
      <div className="px-12 py-12 items-center">
        {isShow ? (
          <>
            {action ? (
              <div>
                <ActionLode />
              </div>
            ) : (
              <>
                <ProfileFormContainer
                  updateCurrentValue={updateCurrentValue}
                  updateAtom={updateAtom}
                />
                <div className="flex justify-center items-center py-16">
                  <button
                    disabled={action}
                    onClick={OnChangeAction}
                    className="flex justify-center gap-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-auto rounded-xl text-xl font-bold px-6 py-6 animate-pulse focus:outline-none focus:shadow-outline shadow-2xl items-center"
                  >
                    Generate File
                    <BsMarkdown size={25} />
                  </button>
                </div>
                <DividerLine />
                <ConfigOptions />
              </>
            )}
          </>
        ) : (
          <>
            <ProfileButtonAction
              setIsShow={setIsShow}
              setIsMdPreview={setIsMdPreview}
              isMdPreview={isMdPreview}
              profileDetails={profileDetails}
            />
            {isMdPreview ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="px-12 py-8 bg-gray-200 dark:bg-[#1f2937] mt-8 rounded-xl border-double border-4 dark:border-[#001e3c] shadow-2xl"
              >
                <ProfileMarkdown />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="px-12 py-8 bg-gray-200 dark:bg-[#1a2027] mt-8 rounded-xl border-double border-4 dark:border-[#001e3c]"
              >
                <ProfileMarkdownPreview />
              </motion.div>
            )}
            <Divider
              orientation="horizontal"
              variant="fullWidth"
              flexItem
              sx={{
                backgroundColor: "#3795BD",
                marginY: "10px",
              }}
            />
            <ProfileFeedbackForm />
          </>
        )}
      </div>
    </>
  );
}

export default ProfileContent;
