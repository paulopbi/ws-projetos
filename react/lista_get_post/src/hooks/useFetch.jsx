import { useState, useEffect } from "react";
//custom hook
const useFetch = (URL) => {
  //useStates
  const [data, setData] = useState(null);
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  //loading ao carregar os dados
  const [loading, setLoading] = useState(false);

  //erro se não carregar os dados
  const [error, setError] = useState(null);

  //configurações para o POST
  const httpConfig = (data, method) => {
    //recebe os dados do App.jsx
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      //adiciona o tipo de dado POST no state 'method'
      setMethod(method);
    }
  };

  useEffect(() => {
    //loading = true, exibe o loading
    setLoading(true);

    const fetchData = async () => {
      try {
        const res = await fetch(URL);
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.log(error.message);
        setError("Houve algum erro ao carregar os dados");
      }
      //loading = false, tira o loading
      setLoading(false);
    };

    fetchData();
  }, [URL, callFetch]);

  //refatorando post
  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        let fetchOption = [URL, config];
        const res = await fetch(...fetchOption);
        const json = await res.json();
        setCallFetch(json);
      }
    };

    httpRequest();
  }, [config, method, URL]);

  return { data, httpConfig, loading, error };
};

export default useFetch;
