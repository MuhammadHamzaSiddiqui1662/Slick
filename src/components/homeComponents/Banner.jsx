import {useEffect} from 'react';
import axios from 'axios';

const Banner = props => {
    useEffect(()=>{
        axios.get('https://internship-slick-api.herokuapp.com/api/banners')
            .then(res => console.log(res.data.data))
            .catch(err=>console.log(err))
    },[])
    return(
        <div className='home-banner'></div>
    )
}
export default Banner;