import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "피카츄",
  description: "피카츄 소개",
};

function layout({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}

export default layout;
