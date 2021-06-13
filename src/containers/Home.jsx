import Header from '../components/homeComponents/Header';
import BannerSlider from '../components/homeComponents/BannerSlider';
import ProductsSection from '../components/homeComponents/ProductsSection';
import '../components/homeComponents/style.css'

const Home = props => {
    return(
        <div className='home'>
            <Header />
            <BannerSlider />
            <div className='home-section-head'>Listed Products</div>
            <ProductsSection />
        </div>
    )
}
export default Home;