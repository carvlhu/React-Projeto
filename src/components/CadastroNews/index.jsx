import {useState} from "react";
import './cadastroNews.css';

export function CadastroNews(){
   //Estado inicial do formulario
    const initilform = {
        nome: "",
        email:"",
        phone: ""
}

   //Estado do formulario (get, set)
    const [formState, setFormState] = useState(initilform);

   //funçao para lidar com a alteraçao de campos de entrada
    const handleInput = (event) => {
      // obter o elemento da entrada  atual
    const target = event.currentTarget;

      //Extrair o valor e o nome do campo de entrada
    const { value, name } = target;

      //atualizar o estado do formulario com os novos valores
    setFormState({ ...formState, [name]: value});
}

   //Função para lidar com a submissão do formulário
    const handleSubmit = (event) => {
    event.preventDefault();

      // Limpar os dados do formulário

    const formGeneral = {
        nome: formState.nome,
        email: formState.email,
        telefone: formState.phone,
        createdAt: new Date(),
}

    const requestOptions = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formGeneral),
    }

    setFormState({...initilform})

    fetch("http://localhost:7000/news", requestOptions)
    .then((response) => response.json())
    .then((data) => setFormState(data))

        console.log(formState);
}

    return(
        <section className="formClass">

            <div className="formMain">
                <form className="formP" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="nome">Nome: </label>
                        <input required
                        type="text"
                        name="nome"
                        id="nome"
                        value={formState.nome}
                        onChange={handleInput}
                        placeholder="Digite seu nome"
                        />
                    </div>
                <div className="form-control">
                    <label htmlFor="email">Email: </label>
                    <input required
                        type="text"
                        name="email"
                        id="email"
                        value={formState.email}
                        onChange={handleInput}
                        placeholder="Digite seu Email"
                        />
                </div>
                <div className="form-control">
                    <label htmlFor="phone">Telefone: </label>
                        <input required
                        type="text"
                        name="phone"
                        id="phone"
                        value={formState.phone}
                        onChange={handleInput}
                        placeholder="Digite seu Telefone"
                        />
                </div>

                <div className="buttonSubmit">
                    <button>Enviar</button>
                </div>
            </form>

            </div>
        </section>
    );
}