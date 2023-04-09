import React from 'react';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';  /*aqui estamos importando um icone da biblioteca react Icone */
import './styels.css';
import api from './services/api';

function App() {
  const [input, setInput] = useState('')
  const [cep, setcep] = useState({})

  async function handlesearch(){
  
    if (input ==='') {
      window.alert(`Preencha com um CEP`)
      return;


      
    }

    try{
      const response = await api.get(`${input}/json`)
      console.log(response.data)
      setcep(response.data);
      setInput("");


    }catch{
      alert('ops! Tente novamente');
      setInput("");



    }

  }

  return (
    <div className="container">
      <h1 className="title"> Procure o CEP abaixo: </h1>

      <div className="inputcep">
        <input                   /*ADICIONAR CLASSNAME, CLASSID OU OUTRA CLASS NOS PERMITE MANIPULAR ESSAS INFORMAÇÕES DEPOIS NO CSS */
          type="text"
          placeholder="Digite o seu CEP..." /* O INPUT DE INFORMAÇÕES NA TELA É FEITO ASSIM */
          value={input}
          onChange={(e1) => setInput(e1.target.value) }

          /* a função a cima serve para conseguir puxar as informações digitadas na tela */
          /* Na linnha abaixo é uma maneira de chamar a bibliotéca que importamos */
        />
                                         
        <button className="buttonsearch" onClick={handlesearch}>
          <FiSearch size={25} color="#000"/>  
        </button>  

        <main className='main'>
          <h2> {cep.cep}</h2>

          <span> {cep.logradouro}</span>
          <span> {cep.complemento}</span>
          <span> {cep.localidade}</span>
          <span> {cep.bairro}</span>
          <span> {cep.uf}</span>
        

          
          
          </main>   
                                                    
      </div>
    </div>


  );
}

export default App;
