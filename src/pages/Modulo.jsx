import { useParams } from "react-router-dom"
import styles from "./Modulo.module.scss"

const modulos = {
    1: {
        titulo: 'Módulo 1 - Introdução ao Desenvolvimento Web - De 01.04 a 14.04.2025',
        subtitulo: 'Unidade 1: Introdução ao Desenvolvimento Web 💻',
        descricao: `
            <p>Esta é a nossa primeira unidade de conteúdo!</p>
            <p>Primeiro, seus estudos levarão a você a responder a seguinte pergunta: O que é Desenvolvimento Web?</p>
            <p>Para responder a essa pergunta será necessário entender o que é a Web, como ela é organizada e que tipos de aplicações podemos construir nela.</p>
            <p>É esperado que, ao final, você seja capaz de:</p>
            <ul>
                <li>- Explicar o que é Desenvolvimento Web;</li>
                <li>- Definir os componentes de hardware e software que compõe a Web;</li>
                <li>- Elencar as atividades que uma pessoa desenvolvedora Web realiza no dia a dia.</li>
            </ul>
        `
    },
    2: {
        titulo: 'Módulo 2 - JavaScript Intermediário',
        subtitulo: 'Unidade 2: JavaScript Intermediário 🧠',
        descricao: `
            <p>Agora que você já domina os conceitos básicos de JavaScript, chegou a hora de evoluir!</p>
            <p>Neste módulo, vamos aprofundar seu conhecimento em tópicos intermediários essenciais para o desenvolvimento web.</p>
            <p>Você vai explorar técnicas mais avançadas e colocar em prática conceitos fundamentais da linguagem.</p>
            <p>É esperado que, ao final, você seja capaz de:</p>
            <ul>
                <li>- Manipular o DOM e trabalhar com eventos;</li>
                <li>- Entender funções avançadas, escopo e closures;</li>
                <li>- Utilizar arrays e objetos com métodos complexos e úteis.</li>
            </ul>
        `
    },
    3: {
        titulo: 'Módulo 3 - React Básico',
        subtitulo: 'Unidade 3: Introdução ao React ⚛️',
        descricao: `
            <p>Bem-vindo ao mundo do React, uma das bibliotecas mais poderosas para construção de interfaces dinâmicas!</p>
            <p>Nesta unidade, vamos introduzir os conceitos fundamentais para criar componentes reutilizáveis e interativos.</p>
            <p>Você começará a construir aplicações modernas com uma arquitetura baseada em componentes.</p>
            <p>É esperado que, ao final, você seja capaz de:</p>
            <ul>
                <li>- Criar e utilizar componentes funcionais;</li>
                <li>- Passar dados entre componentes usando props;</li>
                <li>- Gerenciar estados simples com useState.</li>
            </ul>
        `
    },
    4: {
        titulo: 'Módulo 4 - Projeto Final',
        subtitulo: 'Unidade 4: Aplicando todo o conhecimento 🏗️',
        descricao: `
            <p>Chegamos ao momento mais importante do curso: aplicar tudo o que aprendemos até aqui!</p>
            <p>Neste módulo, você irá desenvolver um projeto prático integrando todas as habilidades adquiridas nos módulos anteriores.</p>
            <p>O objetivo é consolidar seu aprendizado e colocar a mão na massa com um desafio real de desenvolvimento.</p>
            <p>É esperado que, ao final, você seja capaz de:</p>
            <ul>
                <li>- Desenvolver interfaces com HTML, CSS e JavaScript;</li>
                <li>- Aplicar conceitos de React em um projeto funcional;</li>
                <li>- Organizar e estruturar um projeto com boas práticas de código.</li>
            </ul>
        `
    }
}

function Modulo() {
    const {id} = useParams();
  return (
    <div className={styles.moduloContainer}>
        <h1>{modulos[id].titulo}</h1>
        <h3>{modulos[id]. subtitulo}</h3>
        <div dangerouslySetInnerHTML={{ __html: modulos[id].descricao }}></div>
    </div>
  )
}

export default Modulo