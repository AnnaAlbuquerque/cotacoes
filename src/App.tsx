import React, {useEffect,useState} from 'react';
import {api} from './service/api';
interface cotacoesData {
  USD: {
    code: string,
    codein: string,
    name:string,
    high:string,
    low:string,
    varBid:string,
    pctChange:string,
    bid:string,
    ask:string,
    timestamp: string,
    create_date: Date,
  },
}

const App = () => {

  const [cotacoes, setCotacoes] = useState<cotacoesData>();

  useEffect(() => {
   api.get('/').then(
      response => {
        setCotacoes(response.data)
        console.log(response.data)
      } 
   );
  }, []);

  //console.log(cotacoes);
  return (
    <>
      <h1>Cotações</h1>
      
        <div className="card "key={cotacoes?.USD.name}>
          <div className="container">
            <h4><b>{cotacoes?.USD.name}</b></h4>
            <p>Code: {cotacoes?.USD.code}</p>
            <p>Code In: {cotacoes?.USD.codein}</p>
            <p>High: {cotacoes?.USD.high}</p>
            <p>Low: {cotacoes?.USD.low}</p>
            <p>Bid: {cotacoes?.USD.varBid}</p>
          </div>
        </div>
      
  </>
  );
}

export {App};
