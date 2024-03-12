import { Button, TextField } from "@mui/material";

const Login = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center text-red-600">
      <div className="flex flex-col w-72 bg-gray-100 px-10 py-16 rounded-lg">
        <h1 className="text-3xl text-center">Siga</h1>

        <div className="flex flex-col gap-3 my-12">
          <TextField id="cpf" label="CPF" variant="outlined" />
          <TextField id="senha" label="Senha" variant="outlined" />
        </div>
        <Button variant="contained">Entrar</Button>
      </div>
    </div>
  );
};

export default Login;
