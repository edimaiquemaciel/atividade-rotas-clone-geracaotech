import { Loader } from "lucide-react"
import styles from "./Spinner.module.scss"

function Spinner() {
  return (
    <div className={styles.loaderContainer}>
        <Loader className={styles.spinner} />
    </div>
  )
}

export default Spinner