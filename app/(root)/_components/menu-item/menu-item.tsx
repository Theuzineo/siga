import { InternLink } from "@/components/intern-link";
import { MenuItemProps } from "./types";
import { twMerge } from "tailwind-merge";

export const MenuItem = (props: MenuItemProps) => {
  const { isSelected, text, href } = props;

  return (
    <InternLink
      href={href}
      text={text}
      className={twMerge(
        "p-3 hover:bg-red-700/80 active:bg-red-700 rounded-lg transition-all",
        isSelected && "bg-red-700/60 pl-8"
      )}
    />
  );
};
