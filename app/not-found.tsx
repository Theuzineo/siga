import { InternLink } from "@/components/intern-link";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="">
        <h1 className="text-xl">Página não encontrada</h1>
        <span>
          Voltar para{" "}
          <InternLink
            className="underline text-red-500 text-base"
            href="/auth/login"
            text="Login"
          />
        </span>
      </div>
    </div>
  );
};

export default NotFound;
