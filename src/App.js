import { useState } from 'react';
import { Form } from './componentes/Form';
import { Header } from './componentes/Header';

export const App = () => {

  const [colaboradores, setColaboradores] = useState([])

  const colaboradorRecebido = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className='App'>
      <Header />
      <Form
        Colaborador={colaboradorRecebido}   
      />
    </div>
  );
}
