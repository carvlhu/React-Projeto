import { Link } from "react-router-dom";
import { Banner } from "../components/Banner";
import { CadastroNews } from "../components/CadastroNews";
import { Contador } from "../components/Contador";
import { Lista } from "../components/Lista";

export function Home() {
    return (
        <main className='container'>

        <div className="contato-link">
            <Link to="/contato">Vai Para Contato</Link>
        </div>
        
        <Contador/>
        <Lista/>
        <Banner/>
        <CadastroNews/>
        </main>
    )
}