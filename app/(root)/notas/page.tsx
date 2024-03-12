import { Table } from "@/components/table";

const Notas = () => {
  return (
    <div>
      <Table
        columns={["Disciplina", "N1", "N2", "Média Final"]}
        rows={[
          ["Matematica Discreta", "10", "10", "10"],
          ["Programação Linear", "5", "5", "5"],
          ["Estatistica", "7.7", "7.5", "7.6"],
        ]}
      />
    </div>
  );
};

export default Notas;
