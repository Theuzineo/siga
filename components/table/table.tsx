import { Delay, GetResponse } from "@/utils/delay";

import { TableProps } from "./types";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

export const Table = async (props: TableProps) => {
  const { columns, rows } = props;

  await Delay(2500);

  return (
    <div className="w-full ">
      <table className="w-full">
        <thead className="bg-red-600 text-gray-50">
          <tr>
            {columns.map((col, index) => (
              <td
                key={index}
                className={twMerge(
                  "px-3 py-2 text-lg",
                  index === 0 && "rounded-tl-lg",
                  index === columns.length - 1 && "rounded-tr-lg"
                )}
              >
                {col}
              </td>
            ))}
          </tr>
        </thead>
        <tbody className="bg-gray-200">
          {rows.map((row, index) => (
            <tr
              key={index}
              className={twMerge(index % 2 !== 0 && "bg-gray-300")}
            >
              {row.map((data, index) => (
                <td key={index} className="px-3 py-2">
                  {data}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
