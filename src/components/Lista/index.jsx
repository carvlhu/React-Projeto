import "./lista.css"

export const Lista = () => {

    const lista = [
        {
            nome: "Projeto novo",
            data: "28/02/2024",
            responsável: "Rafael Carvalho",
            valor: "R$12.000"
        },
        {
            nome: "Projeto do Mar",
            data: "01/01/2011",
            responsável: "Neymar Júnior",
            valor: "R$11.000"
        },
        {
            nome: "Projeto da Terra",
            data: "01/01/2021",
            responsável: "Kevin Bueno",
            valor: "R$11.500"
        },
        {
            nome: "Projeto da Água",
            data: "01/01/2020",
            responsável: "Carlos BJ",
            valor: "R$11.750"
        },
    ]

    return (
        <main>
            <section className="section-lista">
                <h1>Lista</h1>
                <div className="descricao">
                    <img src="https://picsum.photos/300/250" width={300} alt="Imagem" />
                
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem aut consequatur, blanditiis est porro officia soluta minus quia quibusdam unde accusamus explicabo eaque laudantium iusto, saepe, suscipit expedita illo.
                    </p>
                </div>
                
            </section>

            <section className="section-nomes">
                <h1>
                    Lista nomes
                </h1>

                <article className="lista">
                    {lista.map((item, index) => {
                        return(
                            <div key={index} className="descricao-nomes">
                                <div className="nomes-linha"><strong>Nome: </strong>   <span>{item.nome}</span></div>
                                <div className="nomes-linha"><strong>Responsável: </strong>  <span>{item.responsável}</span></div>
                                <div className="nomes-linha"><strong>Valor: </strong>    <span>{item.valor}</span></div>
                                <div className="nomes-linha"><strong>Data: </strong>    <span>{item.data}</span></div>
                            </div>
                        )
                    })}

                    
                </article>
            </section>
        </main>
    )
}