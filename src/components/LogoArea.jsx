import styles from '../style'
import { kuppi } from '../assets'

const LogoArea = () => {
  return (
    <section id='home' className={`bg-[#F9F9F9]  ${styles.paddingY} my-0 sm:my-4 `}>
    <div className='flex flex-col  justify-center items-center '>
      <img src={kuppi} alt="site-logo" className='w-[8rem] h-[8rem] object-contain mt-32  sm:mt-10 ' />
    </div>
  </section>
  )
}

export default LogoArea