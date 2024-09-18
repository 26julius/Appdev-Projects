import Footer from "./footer"
import Header from "./header"
import Body from "./Body"

export default function App () {
  return(
    <>
    <Header />
    <Body name="José Rizal" Born="June 19, 1861" isHealthy = {false} age={35}/>
  
    <Footer />
    </>
  )
}