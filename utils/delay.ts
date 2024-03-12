export const Delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const GetResponse = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("response");
    }, ms);
  });
