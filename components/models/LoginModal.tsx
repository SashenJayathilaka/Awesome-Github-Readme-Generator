"use client";

import { authModelState } from "@/atom/authModalAtom";
import { Box, Modal } from "@mui/material";
import { signIn } from "next-auth/react";
import { AiFillGithub } from "react-icons/ai";
import { useRecoilState } from "recoil";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  p: 4,
};

type Props = {};

function LoginModal({}: Props) {
  const [modelState, setModelState] = useRecoilState(authModelState);

  const handleClose = () => {
    setModelState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  return (
    <div>
      <Modal
        open={modelState.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:bg-gradient-to-l dark:from-[#191a47] dark:via-[#060a33] dark:to-[#04082b] rounded-xl"
        >
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-between items-center">
              <p className="text-xl font-bold text-center">SignIn</p>
              <div className="flex flex-col justify-between gap-2 items-center my-8">
                {/*          <button
                  onClick={() => signIn("google")}
                  className="flex justify-center gap-2 items-center border border-gray-500 px-6 py-2 rounded-full"
                >
                  <FcGoogle size={18} />
                  SignIn With Google
                </button>
                <p>Or</p> */}
                <button
                  onClick={() => signIn("github")}
                  className="flex justify-center gap-2 items-center border border-gray-500 px-6 py-2 rounded-full"
                >
                  <AiFillGithub size={18} />
                  SignIn With GitHub
                </button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default LoginModal;
