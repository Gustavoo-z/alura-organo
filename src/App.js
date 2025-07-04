import { useEffect, useReducer, useState } from "react";
import { Form } from "./componentes/Form";
import { Header } from "./componentes/Header";
import { Team } from "./componentes/Team";
import { Footer } from "./componentes/Footer";
import { v4 as uuidv4 } from "uuid";
import colaboradoresReducer, { ACTIONS } from "./reducerColaboradores";

export const App = () => {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#57C278",
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#DB6EBF",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FFBA05",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    },
  ]);

  const [colaboradores, dispatch] = useReducer(colaboradoresReducer, []);

  useEffect(() => {
    fetch(`http://localhost:8080/pessoas`)
      .then((response) => response.json())
      .then((data) => {
        const colaboradoresProcessados = data.map((colaborador) => ({
          ...colaborador,
          id: uuidv4(),
        }));

        dispatch({ type: ACTIONS.SET_ALL, payload: colaboradoresProcessados });
      })
      .catch((error) => console.error("Erro ao buscar colaboradores:", error));
  }, []);

  const colaboradorRecebido = (colaborador) => {
    dispatch({ type: ACTIONS.ADD, payload: colaborador });
  };

  function deletarColaborador(id) {
    dispatch({ type: ACTIONS.DELETE, payload: id });
  }

  function resolverFavorito(id) {
    dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: id });
  }

  function mudarCorTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function criarNovoTime({ ...novoTime }) {
    setTimes([
      ...times,
      {
        id: uuidv4(),
        nome: novoTime.nomeTime,
        cor: novoTime.corTime,
      },
    ]);
  }

  return (
    <div className="App">
      <Header
        enderecoImagem="./img/banner.png"
        textoAlternativo="O banner principal da página"
      />
      <Form
        times={times.map((time) => time.nome)}
        colaborador={colaboradorRecebido}
        criarNovoTime={criarNovoTime}
      />
      {times.map((time) => (
        <Team
          key={time.id}
          time={time.nome}
          id={time.id}
          cor={time.cor}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
          aoDeletar={deletarColaborador}
          aoFavoritar={resolverFavorito}
          mudarCor={mudarCorTime}
        ></Team>
      ))}
      <Footer />
    </div>
  );
};
