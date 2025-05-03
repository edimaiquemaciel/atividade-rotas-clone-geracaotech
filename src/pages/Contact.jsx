import styles from "./Contact.module.scss"

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <section className={styles.title_contact}>
        <h2>Entre em contato</h2>
        <p>Estamos aqui para responder suas dúvidas e ajudar você a iniciar sua jornada na área de tecnologia</p>
      </section>
      <div className={styles.containerContent}>
        <section className={styles.mensagem}>
          <h3>Envie sua mensagem</h3>
          <form>
            <label htmlFor="nome">Nome completo</label>
            <input type="text" id="nome" placeholder="Digite seu nome completo"/>
            <label htmlFor="email">E-mail</label>
            <input type="text" id="email" placeholder="Digite seu E-mail"/>
            <label htmlFor="texto">Mensagem</label>
            <textarea id="texto" placeholder="Digite sua mensagem aqui..."></textarea>
            <button>Enviar mensagem</button>
          </form>
        </section>
        <section className={styles.info}>
          <h3>Informações de contato</h3>
          <div className={styles.info_contacts}>
            <strong>📍Endereço:</strong>
            <p>Instituto Euvaldo Lodi (IEL) <br />
            Av. Barão de Studart, 1980 - Fortaleza, CE</p>
          </div>
          <div className={styles.info_contacts}>
            <strong>📞 Telefone:</strong>
            <p>(85) 4000-0000</p>
          </div>
          <div className={styles.info_contacts}>
            <strong>✉️ E-mail:</strong>
            <p>contato@geracaotech.org.br</p>
          </div>
          <div className={styles.info_contacts}>
            <strong>⏰ Horário de atendimento:</strong>
            <p>Segunda a sexta: 08h às 17h</p>
          </div>
        </section>
      </div>

    </div>
  )
}

export default Contact