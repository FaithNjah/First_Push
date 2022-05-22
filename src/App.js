import Intro from './component/Intro'
import About from './component/About'
import ProductList from './component/productList/ProductList'
import Contact from './component/contact/Contact'
import Toggle from './component/toggle/Toggle'
import { ThemeContext } from './context'



const App = () => {
  
  return (
    <div style = {{
      backgroundColor:'white',
     color:'purple',
     }}>
     <Intro />
     <About />
     <ProductList />
     <Contact/>
     <Toggle/>
    </div>
  )
}

export default App
