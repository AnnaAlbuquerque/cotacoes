import React, {useEffect,useState} from 'react';
import {api} from './service/api';
interface cotacoesData {
  [key: string]: {
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

  const [cotacoes, setCotacoes] = useState<cotacoesData>({});

  useEffect(() => {
   api.get('/').then(
      response => {
        setCotacoes(response.data);
      } 
   );
  }, []);

  return (
    <> 
      <h1>Cotações</h1>
      {Object.keys(cotacoes).map(key => {
        const cotacao = cotacoes[key];
        return (
          <div className="card "key={cotacao.name}>
            <div className="container">
              <h4><b>{cotacao.name}</b></h4>
              <p>Code: {cotacao.code}</p>
              <p>Code In: {cotacao.codein}</p>
              <p>High: {cotacao.high}</p>
              <p>Low: {cotacao.low}</p>
              <p>Bid: {cotacao.varBid}</p>
            </div>
          </div>
        )
      })}
  </>
  );
}

export {App};
