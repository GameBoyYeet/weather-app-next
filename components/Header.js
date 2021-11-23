  
import headerStyles from '../styles/Header.module.css'

const Header = () => {
   // const x = 5 -> conditionnals 26:27 in Tuto
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Weather</span> App
      </h1>
      <p className={headerStyles.description}>
        Check the weather forecast in Iceland
      </p>
    </div>
  )
}

export default Header