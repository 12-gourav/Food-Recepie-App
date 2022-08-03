import React from "react";
import "../index.css";
import "./slider.css"

const Slider = (props) =>
{
    return(
        <>
        <section className="top">
            <div className="container">
            <div class="input-group mb-3">
  <input type="text" className="form-control" placeholder="Serach Your Recepie" onChange={props.inputHandle} value={props.search} />
  <button className="btn btn-success" onClick={props.don}>Search</button>
</div>
        
           </div>
        </section>
        
        
        
        </>
    )
}

export default Slider;