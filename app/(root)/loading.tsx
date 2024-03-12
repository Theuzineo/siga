import { twMerge } from "tailwind-merge";

const Loading = () => {
  return (
    <div className="flex justify-center p-10 rounded-lg">
      <div
        role="presentation"
        className={twMerge(
          "border-2 border-gray-400 border-b-red-600 rounded-full",
          "animate-spin size-28"
        )}
      />
    </div>
  );
};

export default Loading;
