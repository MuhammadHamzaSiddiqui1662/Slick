import BannerListItem from './BannerListItem';
import BannerImage from './../../assets/icons/BannerImageDemo.png';
import { generateForm } from './../UI/form';
import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBanners, deleteBanner, ADD_BANNERS, UPDATE_BANNERS } from './../../redux/banner/bannerAction';
import { showModal } from './../../redux/modal/modalAction';
import AddIcon from './../../assets/icons/Add.svg';

const BannersList = () => {
    const banners = useSelector(state=>state.banner.banners);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getBanners());
    },[])
    const bannerForm = {
        url:{
            lable: 'Add New Banner',
            inputType: 'input',
            inputConfig: {
                type: 'text',
                placeholder: 'Write here...'
            },
            value: ''
        }
    }
    const addBanner = () => {
        dispatch(showModal({type: ADD_BANNERS}))
    }
    const onDelete = id => {
        dispatch(deleteBanner(banners, id))
    }
    const onUpdate = payload => {
        dispatch(showModal({type: UPDATE_BANNERS, payload: payload}))
    }
    // const addProduct = () => {
    //     generateForm(bannerForm);
    // }
    return(
        <div className="management-banner-list">
            <button className='banner-add-button add-button' onClick={addBanner}>
                <img src={AddIcon} alt="AddIcon" />
                Add New
            </button>
            <ul className='management-content-list'>
                {banners.map(({_id, link})=>
                    <BannerListItem key={_id} id={_id} link={link} onUpdate={onUpdate} onDelete={onDelete} />
                )}
            </ul>
        </div>
    )
}
export default BannersList;