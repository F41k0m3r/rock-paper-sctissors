import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar';
import Game from './components/Game/Game';
function App() {

  return (
    <div className={styles.App}>
        <Navbar/>
        <Game/>
    </div>
  )
}

export default App
