import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Contato.css";

export function Contato() {

    //UseState do React para gerenciar o estado dos usuários
    const [usuarios, setUsuarios] = useState([]);

    //Hook useEffect para lidar com efeitos colaterais no components
    useEffect(() => {
        fetch("http://localhost:7000/news")
            .then((response) => response.json())
            .then((data) => setUsuarios(data))

            console.log(usuarios)
    }, []);

    return (

        <div className="contato">
            <h1>Página de contato</h1>
            <div>
                <Link to="/">Voltar para Home</Link>
            </div>

            <div className="lista-db">
            <h3>Banco de Dados</h3>
                {usuarios.map((user) => (
                <div className="lista-info" key={user.id}>
                    <strong>Nome: {user.nome}</strong>
                    <strong>Email: {user.email}</strong>
                    <strong>Telefone: {user.telefone}</strong>
                </div>
        ))}
            </div>
        </div>
        
    )
}