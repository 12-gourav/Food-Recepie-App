import React from "react";
import "./footer.css";
import top6 from"./img/top6.jpg";
import {toast} from "react-toastify";



function Footer() {
    return (<>    <footer>
        <div className="container">
            <div className="left">
                <img src={top6}></img>
                <p>The DingDong Food Recepie app are provide the free service.It also provide the tutorials of serach Recepie.</p>
            </div>
            <div className="right">

                <div>
                    <h6>Our Links</h6>
                 <a href="/home">Home</a>
                 <a href="/about">About</a>
                 <a href="/about">Contact</a>
                 <a href="/home">Card</a>
                </div>

                <div>
                    <h6>Our Social Links</h6>
                    <i className="fab fa-youtube"> <a className="li" href="https://www.youtube.com/channel/UCBKO1E_Lsl8yxttlxAr6sqg">Youtube</a></i>
                    <i className="fab fa-github"> <a href="https://github.com/" className="li"> Github</a></i>
                    <i className="far fa-envelope"><a  onClick={()=>{toast.success("corecomputer143@gmail.com");}} > Gmail</a></i>
                    <i className="fab fa-whatsapp"><a  onClick={()=>{toast.success("9876543212");}} > Whatsup</a></i>
                </div>

            </div>
        </div>
       <center> <h5>Develop By @CoolDeveloper</h5></center>
    </footer></>);

}
export default Footer;