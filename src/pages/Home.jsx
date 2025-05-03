import styles from "./Home.module.scss"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className={styles.homeContainer}>
      <section className={styles.bemvindo}>
        <div className={styles.bemvindo_conteudo}>
          <h2>Seja bem-vindo a sua jornada!</h2>
          <p>Prepare-se para uma jornada incrível de aprendizado que vai transformar sua carreira! Aqui você encontra tudo o que precisa para dominar o desenvolvimento Full Stack, com módulos práticos e exercícios dinâmicos. Clique no botão abaixo e conheça a estrutura do seu curso!</p>
          <button>Clique e acesse</button>
        </div>
        <img src="https://lms.iel-ce.org.br/assets/imagens/elearning.png" alt="Aprendizado online" />
      </section>
      <section className={styles.trilha}>
        <div className={styles.cabecalho_trilha}>
          <img src="https://lms.iel-ce.org.br/assets/imagens/paginadeapoio/Group 3 (2).png" alt="icone estudando" />
          <span>Trilha de conteúdo</span>
        </div>
        <div className={styles.btn_trilha}>
          <button><Link to={"/modulo/1"}>Módulo 1 ↗</Link></button>
          <button><Link to={"/modulo/2"}>Módulo 2 ↗</Link></button>
          <button><Link to={"/modulo/3"}>Módulo 3 ↗</Link></button>
          <button><Link to={"/modulo/4"}>Módulo 4 ↗</Link></button>
        </div>
      </section>
      <section className={styles.agenda}>
        <div className={styles.encontros}>
          <div>
              <img src="https://lms.iel-ce.org.br/assets/imagens/paginadeapoio/edital-10.png" alt="" />
              <span>Encontros virtuais</span>
          </div>
          <p>Participe dos nossos encontros ao vivo as sextas-feiras. Tire suas dúvidas e interaja com seus colegas e professores em tempo real.</p>
          <button>Acesse ↗</button>
        </div>
        <div className={styles.calendario}>
          <div>
              <img src="https://lms.iel-ce.org.br/assets/imagens/paginadeapoio/cronograma-8.png" alt="" />
              <span>Calendário</span>
          </div>
          <p>Acompanhe o cronograma completo das aulas e atividades. Fique de olho nas datas importantes!</p>
          <button>Acesse ↗</button>
        </div>
      </section>
    </div>
  )
}

export default Home