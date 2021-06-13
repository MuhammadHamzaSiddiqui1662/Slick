import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBanners } from '../../redux/banner/bannerAction';
import Banner from './Banner';

const BannerSlider = props => {
    const dispatch = useDispatch();
    const banners = useSelector(state=>state.banner.banners);
    const [slideIndex, setSlideIndex] = useState(0);
    const moveDot = index => {
        setSlideIndex(index)
    }
    useEffect(()=>{
        dispatch(getBanners());
    },[])
    useEffect(()=>{
        const timer = setInterval(()=>{
            if(slideIndex == banners.length-1) setSlideIndex(0)
            else setSlideIndex(slideIndex+1)
        },2500)
        return ()=>{clearInterval(timer)}
    })
    return(
        <div className='home-banner'>
            {banners.map(({_id, link}, index)=>
                <Banner className={slideIndex === index ? "slide active-slide" : "slide"} key={_id} link={link} />
            )}
            <div className="container-dots">
                {Array.from({length: banners.length}).map((item, index) => 
                    <div key={index} onClick={() => moveDot(index)} className={slideIndex === index ? "dot active-dot" : "dot"} ></div>
                )}
            </div>
        </div>
    )
}
export default BannerSlider;