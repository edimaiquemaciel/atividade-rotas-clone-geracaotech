import { useNavigate } from "react-router-dom"
import styles from "./ErrorNotFound.module.scss"

function ErrorNotFound() {
    const navigate = useNavigate();
  return (
    <div className={styles.containerErro}>
        <h1>404</h1>
        <h2>Página não encontrada</h2>
        <p>A rota que você tentou acessar não existe. Que tal voltar para a página inicial?</p>
        <button onClick={()=> navigate("/")}>Voltar para Home</button>
    </div>
  )
}

export default ErrorNotFound