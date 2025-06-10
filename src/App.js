import { useEffect, useState } from 'react';
import { Form } from './componentes/Form';
import { Header } from './componentes/Header';
import { Team } from './componentes/Team';
import { Footer } from './componentes/Footer';
import { v4 as uuidv4 } from 'uuid';

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
      }
    ])

  const [colaboradores, setColaboradores] = useState([]);

      useEffect(() => {
        fetch(`http://localhost:8080/pessoas`)
        .then(response => response.json())
        .then(data => {
          
        const colaboradoresProcessados = data.map(colaborador => ({
          ...colaborador,
          id: uuidv4(),          
        }));

        console.log("Dados processados:", colaboradoresProcessados);
        setColaboradores(colaboradoresProcessados);

        })
        .catch(error => console.error('Erro ao buscar colaboradores:', error));
      }, [])

  const colaboradorRecebido = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCorTime(cor, id) {
    setTimes (times.map(time => {
      if (time.id === id) {
        time.cor = cor
      }
      return time
    })) 
  }

  function criarNovoTime({...novoTime}) {
    setTimes ([...times, {
      id: uuidv4(),
      nome: novoTime.nomeTime,
      cor: novoTime.corTime
    }])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) {
        return {
          ...colaborador,
          favorito: !colaborador.favorito,
        };
      }
      return colaborador;
    }));
  }

  return (

    <div className='App'>
      <Header />
      <Form
        times={times.map(time => time.nome)}
        colaborador={colaboradorRecebido}
        criarNovoTime={criarNovoTime}
      />
      {times.map(time => 
      <Team
        key={time.id} 
        time={time.nome}
        id={time.id} 
        cor={time.cor}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={deletarColaborador}
        aoFavoritar={resolverFavorito}
        mudarCor={mudarCorTime}
      ></Team>
      )}
      <Footer />
    </div>
  );
}
