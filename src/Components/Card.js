import React from "react";



import "./detail.css";


const Card = (props) => 
{
   

    const result = props.result;
    return(
        <>
         { 
                
            result.map((val,index)=>
            {
                return( <section className="container game">
               <h2>{val.recipe.label}</h2>
              
                    <div className="container1">
                    <div className="left">
                    <img key={index} src={val.recipe.image} alt="img"  />
                       
                    </div>
                    <div className="right">
                        <h5>Recepie</h5>
                      
                          
                              <ul>
                                  <li>{val.recipe.ingredientLines.map(q =>( <li>{q}</li>))}</li>
                                 
                              </ul>
                      
                    </div>
                </div>
      <div className="container z">
      <div>
                            <h6>Ingredients</h6>
                           
                                  <div className="bo">{val.recipe.ingredients.map(a =>( <p>{a.food}</p>))}
                                 </div>
                                
                                
                                 
                              
                        </div>
   
      </div>
              

            </section> )
               
            }
            )
            


        }



        
        
        
        
        
        
        
        
        
        
        </>
    )


}

export default Card;