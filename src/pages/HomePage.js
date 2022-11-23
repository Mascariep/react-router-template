import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { goToHomePage } from "../routes/coordinator";

function HomePage() {
  const navigate = useNavigate()
  return (
    <main>
      <Header />
      <h1>Página Inicial</h1>
      <button onClick={()=> goToHomePage(navigate)}>Ir para perfil
      </button>
    </main>
  );
}

export default HomePage;
