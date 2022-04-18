import  Header from '../../components/header/header'
import {Card} from "../../components/card/Card"
import './style.css'
import { Footer } from '../../components/footer'

function App() {
  return (
    <>
      <header>
        <Header/> 
      </header>

      <main>
        <h1 className='tittle'>Pricing</h1>
        <p className='text'>Quickly build an effective pricing table for your <br/>
           potential customers with this layout. It's built <br/>
           with default MUI components with little <br/> customization.</p>

          <div className="cards">

            <Card className="card1" plan="free" 
            price="$0" 
            item1="2 GB of Storage"
            item2="1 User Included"
            item3="Help Center Access"
            item4="Email Support"
            button="Sing up for free"
            />

            <Card className="card2" plan="Pro" 
                price="$10" 
                item1="20 GB of Storage"
                item2="20 User Included"
                item3="Help Center Access"
                item4="Email Support"
                button="Get Starded"
            />

            <Card className="card3" plan="Enterprise" 
              price="$50" 
              item1="100 GB of Storage"
              item2="50 User Included"
              item3="Help Center Access"
              item4="Phone & Email Support"
              button="Contact Us"
            />
          </div>

          <div className="divider"></div>
          <div className="footer">
            <Footer/>
          </div>



           
      </main>
       
    </>
  )
}
  
export default App
