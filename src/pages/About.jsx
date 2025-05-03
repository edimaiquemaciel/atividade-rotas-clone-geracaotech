import styles from "./About.module.scss"

function About() {
  return (
    <div className={styles.aboutContainer}>
      <h2>Como funciona o Geração Tech:</h2>
      <div className={styles.about_conteudo}>
        <img src="https://geracaotech.iel-ce.org.br/wp-content/themes/geracaotech/images/gt2.png" alt="Alunos estudando" />
        <div className={styles.about_texto}>
          <p>O Geração Tech é um projeto do <strong>Instituto Euvaldo Lodi (IEL)</strong> e o <strong>Governo do Estado do Ceará</strong> por meio da <strong>Agência de Desenvolvimento do Estado do Ceará (ADECE)</strong> para capacitação de jovens na área da tecnologia.</p>
          <p>A iniciativa tem o objetivo de oferecer <strong>Formação em Desenvolvimento Web</strong>, com ênfase no protagonismo dos jovens no mercado da tecnologia e inovação.</p>
        </div>
      </div>

    </div>
  )
}

export default About