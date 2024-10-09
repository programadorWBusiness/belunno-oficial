"use client";

import Link from "next/link";

type Props = {
  style?: string;
  text?: string;
  link?: string;
};

export const AboutSpan = ({ style, text, link = "/" }: Props) => {

  return (
    <Link href={`${link}`}>
      <span
        className={`${style} font-conthrax px-3 h-fit text-[10px] font-bold rounded-xl uppercase cursor-pointer`}
      >
        {text}
      </span>
    </Link>
  );
};
