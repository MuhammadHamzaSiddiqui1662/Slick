import Header from '../components/homeComponents/Header';
import Banner from '../components/homeComponents/Banner';
import ProductsSection from '../components/homeComponents/ProductsSection';
import '../components/homeComponents/style.css'

const Home = props => {
    return(
        <div className='home'>
            <Header />
            <Banner />
            <div className='home-section-head'>Listed Products</div>
            <ProductsSection />
        </div>
    )
}
export default Home;