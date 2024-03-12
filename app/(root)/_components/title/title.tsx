import { TitleProps } from "./types";

export const Title = (props: TitleProps) => {
  const { text } = props;

  return (
    <div className="flex justify-between">
      <h1 className="text-red-600 text-4xl">{text}</h1>
    </div>
  );
};
