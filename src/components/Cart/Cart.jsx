import { useContext, useEffect, useState } from 'react';
import map from '../../assets/images/map.png'
import logo from '../../assets/images/red-onion.png'
import { cartContext } from '../../provider/CartProvider';

const Cart = () => {
    const myCart = useContext(cartContext);
    const [total,setTotal] = useState(0);
    const tax = 20;
    const fee = 30;
    useEffect(()=>{
        let newTotal = 0;
        myCart.foods.map((m,i)=>{
            if(i>0){
                const price = parseInt(m.price,10);
                newTotal += price;
            }
        })
        setTotal(newTotal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 gap-10 lg:gap-60">
                <div>
                    <img src={map} alt="" className='h-60 w-60 lg:h-96 lg:w-96 ms-20 lg:ms-44 me-20'/>
                </div>
                <div className='flex flex-col justify-start w-80 ms-20 lg:ms-0'>
                    <img src={logo} alt="" className='h-15 w-44'/>
                    <p>Your items will arriving in 20-30 minutes.Keep Patience</p>
                    <br />
                    {
                        myCart.foods.map((m,i)=>
                            (i==0)?<div key={m.url}></div>:
                            <div key={m.url} className='flex justify-start items-center bg-gray-100 mb-5 border rounded-xl me-20 lg:me-0'>
                                <img src={m.url} alt="" className='h-10 w-10 lg:h-16 lg:w-16 ms-2 border border-black rounded-md me-5'/>
                                <div className='flex gap-2 lg:gap-8 py-5'>
                                    <div className='flex flex-col'>
                                        <h1 className='font-bold'>{m.dishName}</h1>
                                        <h2 className='text-pink-700'>${m.price}</h2>
                                    </div>
                                    <p className='text-green-700'>{m.item} items</p>
                                </div>
                            </div>
                        )
                    }
                    <div className='flex flex-col w-60 lg:w-80'>
                        <div className='flex justify-between mb-1'>
                            <h1 className='font-bold'>Food Price</h1>
                            <h1 className='font-bold text-pink-700'>${total}</h1>
                        </div>
                        <div className='flex justify-between mb-1'>
                            <h1 className='font-bold'>Tax</h1>
                            <h1 className='font-bold text-pink-700'>${tax}</h1>
                        </div>
                        <div className='flex justify-between mb-1'>
                            <h1 className='font-bold'>Delevery fee</h1>
                            <h1 className='font-bold text-pink-700'>${fee}</h1>
                        </div>
                        <div className='h-px w-60 lg:w-80 bg-black mb-2'></div>
                        <div className='flex justify-between mb-5'>
                            <h1 className='font-bold'>Total Price</h1>
                            <h1 className='font-bold text-pink-700'>${total+tax+fee}</h1>
                        </div>
                        <button className='btn-active py-1'>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;