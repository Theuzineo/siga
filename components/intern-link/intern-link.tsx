import { InternLinkProps } from "./types";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const InternLink = (props: InternLinkProps) => {
  const { href, text, className } = props;

  return (
    <Link
      href={href}
      className={twMerge("no-underline text-gray-50 text-xl", className)}
    >
      {text}
    </Link>
  );
};
