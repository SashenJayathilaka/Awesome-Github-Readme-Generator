"use client";

import { RecoilRoot as Root } from "recoil";

type Props = {
  children: React.ReactNode;
};

function RecoilRoot({ children }: Props) {
  return <Root>{children}</Root>;
}

export default RecoilRoot;
