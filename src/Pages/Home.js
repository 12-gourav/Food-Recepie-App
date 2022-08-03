import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import Footer from "../Components/Footer";

import "../Pages/home.css";
import axios from "axios";
import Slider from "../Components/Slider";
import { toast } from "react-toastify";







    const Home = () => {

        const [result,setResult] = useState([]);
        const [search,setSearch] = useState();


        const inputHandle = (event) => 
        {
            setSearch(event.target.value);
        
        }
        const clickSearch =() =>
        {
          getdata();
        
          if(search==null)
          {
              toast.error("plz write something befor search");
          }
          else{
            toast.success("Searching");
          }
          setSearch("");
        
        }
          
        const app_id = "0590f12a";
        const app_key ="7a9f8f6eabfdff23ca5a4385ea9744d4";

        const url =  `https://api.edamam.com/search?q=${search}&app_id=${app_id}&app_key=${app_key}`;


useEffect(()=>
{
    getdata();
},[]);

const getdata = async() =>{
    const datar = await axios.get(url);
    console.log(datar);

    setResult(datar.data.hits);
}
// if(result==null)
// {
//     toast.error(`${search} no Exist 🚀`);
// }


        return (
            <>
            <Slider inputHandle={inputHandle} search={search} don={clickSearch} />
          
         {/* <input type="text" onChange={inputHandle} value={search}/>
        <button className="btn btn-success" onClick={clickSearch}>Search</button> */}
              
                <div className="container">
                    <h4><i className="fab fa-angellist"></i> All Recepie are showing</h4>
                    <div className="base">

                     <Card result={result}/>
                    
                    </div>
                </div>

                <Footer />
            </>
        )
    }
export default Home;