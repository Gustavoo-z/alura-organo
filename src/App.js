import { useState } from 'react';
import { Form } from './componentes/Form';
import { Header } from './componentes/Header';
import { Team } from './componentes/Team';
import { Footer } from './componentes/Footer';

export const App = () => {

    const times = [
      {
        nome: "Programação",
        corPrimaria: "#57C278",
        corSecundaria: "#D9F7E9",
      },
      {
        nome: "Front-End",
        corPrimaria: "#82CFFA",
        corSecundaria: "#E8F8FF",
      },
      {
        nome: "Data Science",
        corPrimaria: "#A6D157",
        corSecundaria: "#F0F8E2",
      },
      {
        nome: "Devops",
        corPrimaria: "#E06B69",
        corSecundaria: "#FDE7E8",
      },
      {
        nome: "UX e Design",
        corPrimaria: "#DB6EBF",
        corSecundaria: "#FAE9F5",
      },
      {
        nome: "Mobile",
        corPrimaria: "#FFBA05",
        corSecundaria: "#FFF5D9",
      },
      {
        nome: "Inovação e Gestão",
        corPrimaria: "#FF8A29",
        corSecundaria: "#FFEEDF",
      }
    ]

  const [colaboradores, setColaboradores] = useState([])

  const colaboradorRecebido = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (

    <div className='App'>
      <Header />
      <Form
        times={times.map(time => time.nome)}
        colaborador={colaboradorRecebido}
      />
      {times.map(time => 
      <Team 
        key={time.nome} 
        time={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      ></Team>
      )}
      <Footer />
    </div>
  );
}
