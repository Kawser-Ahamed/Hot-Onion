import {useParams } from "react-router-dom";
import { breakfastData } from "../../provider/fakeData";
import { useContext, useEffect, useReducer, useState } from "react";
import { initialState, reducer } from "../API";
import { cartContext } from "../../provider/CartProvider";

const IndividualItemBreakfast = () => {
    const {id} = useParams();
    const [data,setData] = useState([]);
    const [state,dispatch]  = useReducer(reducer,initialState);
    const [itemPrice,setPrice] = useState(0);

    useEffect(()=>{
        const remainingData = breakfastData.filter(ft=>ft.id==id);
        remainingData.map(m=>{
            setPrice(m.price);
        })
        setData(remainingData);
    },[id]);
    const handlePriceIncrease=(price)=>{
        const newPrice = parseInt(itemPrice,10)+parseInt(price,10);
        setPrice(newPrice);
        dispatch({
            type:'ADD',
        })
    }
    const handlePriceDecrease=(price)=>{
        let newPrice = parseInt(itemPrice,10)-parseInt(price,10);
        if(parseInt(newPrice,10)<parseInt(price,10)){
            newPrice = parseInt(price,10);
        }
        setPrice(newPrice);
        dispatch({
            type:'REMOVE',
        })
    }
    const foodCart = useContext(cartContext);
    const handleCart=(dishName,url)=>{
        const newFood = [...foodCart.foods,{dishName:dishName,url:url,price:itemPrice,item:state.count}];
        foodCart.setFoods(newFood);
    }
    return (
        <div>
            {
                data.map(m=>
                  <div key={m.id} className="">
                    <div className="grid grid-cols-1 lg:grid-cols-2  ms-20 me-10 lg:ms-40 lg:me-30gap-5 lg:gap-32 mt-10 lg:mt-20 justify-center items-center">
                        <div className="flex flex-col justify-center">
                            <h1 className="lg:text-3xl">{m.dishName}</h1>
                            <br />
                            <p>{m.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quidem odio labore at ad sint debitis ea, repellat eaque officiis!</p>
                            <br />
                            <div className="flex gap-5">
                               <h2 className="text-2xl lg:text-3xl">${itemPrice}</h2>
                               <div className="flex justify-center items-center gap-5 border rounded-3xl border-black px-4">
                                    <button onClick={()=>handlePriceDecrease(m.price)} className="text-red-700 lg:text-2xl">-</button>
                                    <p className="lg:text-2xl">{state.count}</p>
                                    <button onClick={()=>handlePriceIncrease(m.price)} className="text-green-700 lg:text-2xl">+</button>
                               </div>
                            </div>
                            <br />
                            <button onClick={()=> handleCart(m.dishName,m.url)} className='btn-active me-32 lg:me-80 px-2 py-2 text-center'>Add to cart</button>
                        </div>
                        <div className="h-60 w-60 lg:h-80 lg:w-80">
                            <img src={m.url} alt="" />
                        </div>
                    </div>
                  </div>
                )
            }
        </div>
    );
};

export default IndividualItemBreakfast;