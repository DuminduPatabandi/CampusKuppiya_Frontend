import {LogoArea} from '../components'
import styles from '../style'

const Home = () => {
  return (
    <div className="home bg-slate-500">
      <div className= {` ${styles.paddingX} ${styles.flexStart} bg-[#F9F9F9] py-3 w-full`}>
        <div className={`${styles.boxWidth}`}>
            <LogoArea/>
        </div>
      </div>


    </div>

  )
}

export default Home