import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from './../redux/modal/modalAction';
import { ADD_PRODUCT, UPDATE_PRODUCT, addProduct, updateProduct, getCategories } from './../redux/product/productAction';
import { ADD_BANNERS, UPDATE_BANNERS, addBanner, updateBanner } from './../redux/banner/bannerAction';
import Close from './../assets/icons/Close.svg';
const Form = ({type, payload}) => {
    const dispatch = useDispatch();
    const categories = useSelector(state=>state.product.categories) || []
    const [product, setProduct] = useState({
        name: '',
        image: '',
        category: '',
        price: 0
    })
    const [banner, setBanner] = useState({
        link: ''
    })
    useEffect(()=>{
        if(type==ADD_PRODUCT || type==UPDATE_PRODUCT) dispatch(getCategories());
        if(type==UPDATE_PRODUCT)
            setProduct({
                name: payload.name,
                image: payload.image,
                category: payload.category,
                price: payload.price
            })
        if(type==UPDATE_BANNERS)
            setBanner({
                link: payload.link
            })
    },[])
    switch (type) {
        case 'ADD_BANNERS':
            return(
                <div className="form">
                    <div className="head">
                        <p>Add New Banner</p>
                        <img src={Close} onClick={()=>dispatch(closeModal())} />
                    </div>
                    <div className="input">
                        <label >Enter Image URL</label>
                        <input type="text" placeholder='Write here...' value={banner.link} onChange={(e)=>{setBanner({link : e.target.value})}}/>
                    </div>
                    <button className='save-button' onClick={()=>dispatch(addBanner(banner))} >Save</button>
                </div>
            )
        case 'UPDATE_BANNERS':
            return(
                <div className="form">
                    <div className="head">
                        <p>Add New Banner</p>
                        <img src={Close} onClick={()=>dispatch(closeModal())} />
                    </div>
                    <div className="input">
                        <label >Enter Image URL</label>
                        <input type="text" placeholder='Write here...' value={banner.link} onChange={(e)=>{setBanner({link : e.target.value})}}/>
                    </div>
                    <button className='save-button' onClick={()=>dispatch(updateBanner(banner, payload.id))} >Save</button>
                </div>
            )
        case 'ADD_PRODUCT':
            return(
                <div className="form">
                    <div className="head">
                        {console.log('render')}
                        <p>Add New Product</p>
                        <img src={Close} onClick={()=>dispatch(closeModal())} />
                    </div>
                    <div className="input">
                        <label>Enter Image URL</label>
                        <input type="text" placeholder='Write here...' value={product.image} onChange={e=>setProduct({...product, image: e.target.value})}/>
                    </div>
                    <div className="input">
                        <label>Select Category</label>
                        <select value={product.category} onChange={(e)=>{setProduct({...product, category: e.target.value})}}>
                            {categories.map(({_id, name})=><option value={_id} >{name}</option>)}
                        </select>
                    </div>
                    <div className="input">
                        <label>Product Name</label>
                        <input type="text" placeholder='Write here...' value={product.name} onChange={(e)=>{setProduct({...product, name: e.target.value})}}/>
                    </div>
                    <div className="input">
                        <label>Price</label>
                        <input type="number" placeholder='Eg: 4500' value={product.price} onChange={(e)=>{setProduct({...product, price: e.target.value})}}/>
                    </div>
                    <button className='save-button' onClick={()=>{dispatch(addProduct(product))}} >Save</button>
                </div>
            )
            case 'UPDATE_PRODUCT':
                return(
                    <div className="form">
                        <div className="head">
                            {console.log('render')}
                            <p>Add New Product</p>
                            <img src={Close} onClick={()=>dispatch(closeModal())} />
                        </div>
                        <div className="input">
                            <label>Enter Image URL</label>
                            <input type="text" placeholder='Write here...' value={product.image} onChange={e=>setProduct({...product, image: e.target.value})}/>
                        </div>
                        <div className="input">
                            <label>Select Category</label>
                            <select value={product.category} onChange={(e)=>{setProduct({...product, category: e.target.value})}}>
                                {categories.map(({_id, name})=><option value={_id} >{name}</option>)}
                            </select>
                        </div>
                        <div className="input">
                            <label>Product Name</label>
                            <input type="text" placeholder='Write here...' value={product.name} onChange={(e)=>{setProduct({...product, name: e.target.value})}}/>
                        </div>
                        <div className="input">
                            <label>Price</label>
                            <input type="number" placeholder='Eg: 4500' value={product.price} onChange={(e)=>{setProduct({...product, price: e.target.value})}}/>
                        </div>
                        <button className='save-button' onClick={()=>{dispatch(updateProduct(product, payload.id))}} >Save</button>
                    </div>
            
                    /*<div className="form">
                        <div className="head">
                            <p>Add New Product</p>
                            <img src={Close} onClick={()=>dispatch(closeModal())} />
                        </div>
                        <div className="input">
                            <label>Enter Image URL</label>
                            <input type="text" placeholder='Write here...' value={payload.image}  onChange={e=>setProduct({...product, image: e.target.value})}/>
                        </div>
                        <div className="input">
                            <label>Select Category</label>
                            <select value={product.category} onChange={(e)=>{setProduct({...product, category: e.target.value})}}>
                                {categories.map(({_id, name})=><option value={_id} >{name}</option>)}
                            </select>
                        </div>
                        <div className="input">
                            <label>Product Name</label>
                            <input type="text" placeholder='Write here...' value={payload.value.name}/>
                        </div>
                        <div className="input">
                            <label>Price</label>
                            <input type="number" placeholder='Eg: 4500' value={payload.value.price}/>
                        </div>
                        <button className='save-button'>Save</button>
                    </div>*/
                )
        default:
            return(
                <div>Not Found</div>
            )
    }
}
export default Form;