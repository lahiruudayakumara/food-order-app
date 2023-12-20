import About from "../../components/About"
import Banner from "../../components/Banner"
import Feedback from "../../components/Feedback"
import ProductsPreview from "../../components/ProductsPreview"

const Home = () => {
    return (
      <>
        <Banner />
        <ProductsPreview />
        <About />
        <Feedback />
      </>
    )
  }
  
  export default Home