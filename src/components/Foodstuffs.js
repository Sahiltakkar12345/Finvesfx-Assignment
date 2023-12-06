import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Foodstuffs = () => {
  
    const [foodstuffs, setfoodstuffs] =useState([])

    useEffect(() => {

            FoodServices.getAllFoodstuffs().then((response) => {
                setfoodstuffs(response.data)
                console.log(response.data);

             }).catch(error =>{
                console.log(error);
             })
    
      }, []) 

    
  
    return (
    <div className='container'>
         <h1 className='text-center'> Food Stuffs</h1>
         {/*<Link to="/food-form" className='btn btn-primary mb-2'>Add Food Stuffs</Link>
         <Link to="/price" className='btn btn-warning mb-2'>PRICE Editible</Link> */}
        <div className='row'>
            <table className='table table-scriped table-boardered'>

                <thead>
                    <tr>
                        <th>Food ID</th>
                        <th>Food Stuffs</th>
                        <th>Food Image </th>
                        <th>Food Label</th>
                        <th>Food Price</th>
                        <th>Food Category</th>
                        <th>Food Description</th>
                        
                    </tr>
                </thead>
                
                <tbody>
                    {
                        foodstuffs.map(
                            foodstuff =>
                            <tr key = {foodstuff.Id}>
                                <td>{foodstuff.Id}</td>
                                <td>{foodstuff.Name}</td>
                                <td>{foodstuff.Image}</td>
                                <td>{foodstuff.Label}</td>
                                <td>{foodstuff.Price}</td>
                                <td>{foodstuff.Category}</td>
                                <td>{foodstuff.Description}</td>
                            </tr>

                        )
                    }
                </tbody>
            
            
            </table> 


        </div>

    </div>
  )
}

export default Foodstuffs;