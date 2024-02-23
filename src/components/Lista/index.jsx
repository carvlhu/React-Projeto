import "./lista.css"

export const Lista = () => {
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

                <div className="descricao-nomes">
                    <div className="nomes-linha"><strong>Nome: </strong>   <span>Rafael</span></div>
                    <div className="nomes-linha"><strong>Responsável: </strong>  <span>Lorem Ipsum</span></div>
                    <div className="nomes-linha"><strong>Valor: </strong>    <span>R$270.000</span></div>
                </div>
            </section>
        </main>
    )
}