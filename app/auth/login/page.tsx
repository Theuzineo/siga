"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  return (
    <div className="w-full h-screen flex items-center justify-center text-red-600">
      <div className="flex flex-col w-96 bg-gray-100 px-10 py-16 rounded-lg">
        <h1 className="text-3xl text-center">Siga</h1>

        <div className="flex flex-col gap-3 my-12">
          <label htmlFor="cpf">
            CPF
            <Input name="cpf" id="cpf" />
          </label>
          <label htmlFor="senha">
            Senha
            <Input name="senha" id="senha" />
          </label>
        </div>
        <Button
          onClick={() => {
            router.push("/notas");
          }}
        >
          Entrar
        </Button>
      </div>
    </div>
  );
};

export default Login;
