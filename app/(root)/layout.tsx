"use client";

import { MenuItem } from "./_components/menu-item";
import { PAGES } from "./consts";
import { Title } from "./_components/title";
import { usePathname } from "next/navigation";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const pathnameWord = pathname.split("/")[1];
  const title = pathnameWord.charAt(0).toUpperCase() + pathnameWord.slice(1);
  console.log(title);

  return (
    <div
      className="grid grid-cols-2 h-screen"
      style={{ gridTemplateColumns: "18rem auto" }}
    >
      <div className="h-full flex flex-col justify-between bg-red-600">
        <div className=" flex flex-col gap-5 px-5 py-8">
          {PAGES.map((page) => (
            <MenuItem
              key={page.href}
              href={page.href}
              text={page.label}
              isSelected={title.toLowerCase() === page.label.toLowerCase()}
            />
          ))}
        </div>
        <div className="p-3 m-3 rounded-lg flex items-center gap-5 text-gray-50 bg-red-700">
          <div className="size-14 bg-gray-50 rounded-full" />
          <span>Nome do usuário</span>
        </div>
      </div>
      <div className="p-10 overflow-y-auto">
        <Title text={title} />
        <div role="presentation" className="w-full h-1 bg-red-600 my-5" />
        <div className="py-5">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
