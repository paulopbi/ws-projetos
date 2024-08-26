import "./App.css";
import { useState } from "react";

//4 custom hook
import useFetch from "./hooks/useFetch";
function App() {
  //useStates para o POST
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  //URL no json-server
  const URL = `http://localhost:3000/products`;

  //dados desestruturados do custom hook "useFetch"
  const { data: items, httpConfig, loading, error } = useFetch(URL);

  //adição de produtos
  const handleSubmit = async (e) => {
    /**
     * ao evento de submit, iremos prevenir o reloading, 
     * iremos pegar o nome e preço digitado
     * depois setar as configurações do header para post
     * e enviar para a db
     */
    e.preventDefault();
    const product = {
      name,
      price,
    };

    //preenche os headers com o name e price para o post
    httpConfig(product, "POST");

    //reseta os inputs
    setName("");
    setPrice("");
  };

  /*
  ! INUTIL

  const [products, setProducts] = useState([]);

  resgatando os dados da api com o useEffect
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      setProducts(data);
    };
    fetchData();
  }, []);
  
    ! INUTIL
    agora os itens são carregados com o custom hook useFetch

    const res = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    3 carregamento dinamico
    const addedProducts = await res.json();
    setProducts((prevProducts) => [...prevProducts, addedProducts]);
    */

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/* loading verdadeiro, exibe o carregando */}
      {loading && <p>Carregando...</p>}
      {/* erro verdadeiro, exibe o deu erro */}
      {error && <p>Deu erro</p>}
      {/* erro diferente de verdadeiro (falso), exibe os produtos */}
      {!error && (
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id}>
                {product.name} - R$ {product.price}
              </li>
            ))}
        </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/* loading verdadeiro, desabilita o botão */}
          {loading && <input type="submit" disabled value="Criar Produto" />}
          {/* loading diferente de verdadeiro (falso), habilita o botão*/}
          {!loading && <input type="submit" value="Criar Produto" />}
        </form>
      </div>
    </div>
  );
}

export default App;
