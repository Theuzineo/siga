import { Table } from "@/components/table";

const Faltas = () => {
  return (
    <Table
      columns={["Sigla", "Disciplina", "Presenças", "Ausências"]}
      rows={[
        ["IEF123", "Matematica Discreta", "12", "10"],
        ["BVA156", "Programação Linear", "5", "5"],
        ["HKV691", "Estatistica", "20", "7"],
      ]}
    />
  );
};

export default Faltas;
