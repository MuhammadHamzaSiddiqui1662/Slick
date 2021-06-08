import NavList from './NavList';
import AddIcon from './../../assets/icons/Add.svg';
const SubWindow = () => {
    return(
        <div className="management-sub-window">
            <div className="window-sub-header">
                <NavList />
                <button className='add-button'>
                    {/* <img src={AddIcon} alt="AddIcon" /> */}
                    Add New
                </button>
            </div>
            <div className="management-list"></div>
        </div>
    )
}
export default SubWindow;