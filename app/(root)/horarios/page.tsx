import { Table } from "@/components/table";

const Horarios = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="text-xl text-red-600">Segunda-Feira</h1>
        <Table
          columns={["Horarios", "Disciplina", "Professor"]}
          rows={[
            ["19:00 - 19:50", "Matematica Discreta", "Professor 1"],
            ["19:50 - 20:40", "Matematica Discreta", "Professor 1"],
            ["21:00 - 21:50", "Programação Linear", "Professor 2"],
            ["21:50 - 22:40", "Estatistica", "Professor 3"],
            ["22:40 - 23:20", "Programação Linear", "Professor 2"],
          ]}
        />
      </div>
      <div>
        <h1 className="text-xl text-red-600">Terça-Feira</h1>
        <Table
          columns={["Horarios", "Disciplina", "Professor"]}
          rows={[
            ["19:00 - 19:50", "Matematica Discreta", "Professor 1"],
            ["19:50 - 20:40", "Matematica Discreta", "Professor 1"],
            ["21:00 - 21:50", "Programação Linear", "Professor 2"],
            ["21:50 - 22:40", "Estatistica", "Professor 3"],
            ["22:40 - 23:20", "Programação Linear", "Professor 2"],
          ]}
        />
      </div>
      <div>
        <h1 className="text-xl text-red-600">Quarta-Feira</h1>
        <Table
          columns={["Horarios", "Disciplina", "Professor"]}
          rows={[
            ["19:00 - 19:50", "Matematica Discreta", "Professor 1"],
            ["19:50 - 20:40", "Matematica Discreta", "Professor 1"],
            ["21:00 - 21:50", "Programação Linear", "Professor 2"],
            ["21:50 - 22:40", "Estatistica", "Professor 3"],
            ["22:40 - 23:20", "Programação Linear", "Professor 2"],
          ]}
        />
      </div>
      <div>
        <h1 className="text-xl text-red-600">Quinta-Feira</h1>
        <Table
          columns={["Horarios", "Disciplina", "Professor"]}
          rows={[
            ["19:00 - 19:50", "Matematica Discreta", "Professor 1"],
            ["19:50 - 20:40", "Matematica Discreta", "Professor 1"],
            ["21:00 - 21:50", "Programação Linear", "Professor 2"],
            ["21:50 - 22:40", "Estatistica", "Professor 3"],
            ["22:40 - 23:20", "Programação Linear", "Professor 2"],
          ]}
        />
      </div>
      <div>
        <h1 className="text-xl text-red-600">Sexta-Feira</h1>
        <Table
          columns={["Horarios", "Disciplina", "Professor"]}
          rows={[
            ["19:00 - 19:50", "Matematica Discreta", "Professor 1"],
            ["19:50 - 20:40", "Matematica Discreta", "Professor 1"],
            ["21:00 - 21:50", "Programação Linear", "Professor 2"],
            ["21:50 - 22:40", "Estatistica", "Professor 3"],
            ["22:40 - 23:20", "Programação Linear", "Professor 2"],
          ]}
        />
      </div>
    </div>
  );
};

export default Horarios;
