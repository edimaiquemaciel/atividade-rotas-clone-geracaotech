import styles from "./App.module.scss"
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.containerMain}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
