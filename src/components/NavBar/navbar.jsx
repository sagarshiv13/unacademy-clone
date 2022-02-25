
import unacademy from '../../Icons/unacademy.svg'
import downarrow from '../../Icons/downarrow.svg'
import search from '../../Images/search.png'
import { Hompage } from '../HomePage/HomePage'
// import styles from './navbar.module.css'

export const Navbar = () => {

    const handleLogout = ()=>{
        window.localStorage.removeItem("token");
        window.location.href = "http://localhost:3000/"
        alert("Logout")
    }

    let keyName = localStorage.getItem("userName")
    keyName = JSON.parse(keyName)

    return (
        <>
            <div className="navbar_container">
                <div className="navbar_container_img">
                    <img src={unacademy} alt="img" />
                    <div className="nvbr_vertical_line"></div>
                    {/* <button className="navbar_btn">CBSE Class 12
                        <img src={downarrow} alt="img" width={30} />
                    </button> */}
                </div>
                <div>
                    {/* <img src={search} width={300} alt="img" /> */}
                    <button className="nvbr_user_nm" onClick={handleLogout} >LogIn</button>
                </div>
            </div>
        </>
    )
}