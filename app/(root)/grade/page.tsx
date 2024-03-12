import { Table } from "@/components/table";

const Grade = () => {
  return (
    <Table
      columns={[
        "Semestre 1",
        "Semestre 2",
        "Semestre 3",
        "Semestre 4",
        "Semestre 5",
        "Semestre 6",
      ]}
      rows={[
        [
          "Administração Geral",
          "Contabildiade",
          "Economia e Finanças",
          "Banco de Dados",
          "Lab. Banco de Dados",
          "Gestão de Projetos",
        ],
        [
          "Arquitetura e Organização de Computadores",
          "Engenharia de Software I",
          "Sociedade e Tecnilogia",
          "Engenharia de Software III",
          "Lab. Engenharia de Software",
          "Gestão de Equipes",
        ],
        [
          "Algoritimos",
          "Linguagem de Programação",
          "Estrutura de Dados",
          "Programação Orientada a objetos",
          "Mobile",
          "Empreendedorismo",
        ],
        [
          "Laboratório de Hardware",
          "Sistemas de Informação",
          "Engenharia de Software II",
          "Programação WEB",
          "Redes de Computadores",
          "Ética e Responsabilidade Profissional",
        ],
        [
          "Inglês I",
          "Comunicação e Expressão",
          "Sistemas Operacionais I",
          "Inglês IV",
          "Inglês V",
          "Tópicos Especiais em Informática",
        ],
        [
          "Matemática Discreta",
          "Cálculo",
          "Inglês III",
          "Metodologia da Pesquisa Científico-Tecnológica",
          "Programação Linear e Aplicações",
          "Gestão e Governança de Tecnologia da Informação",
        ],
        [
          "",
          "",
          "Estatística Aplicada",
          "",
          "Trabalho de Graduação I",
          "Inglês VI",
        ],
        ["", "", "", "", "", "Estagio supervisionado"],
      ]}
    />
  );
};

export default Grade;
