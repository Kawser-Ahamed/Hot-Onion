import '../css/style.css'
import logo from '../assets/images/red-onion.png'
import { Link } from 'react-router-dom';
import { useContext,useState } from 'react';
import Breakfast from './foods/Breakfast';
import Lunch from './foods/Lunch';
import Dinner from './foods/Dinner';
import Chefs from './Chefs';
import { cartContext } from '../provider/CartProvider';


const Homepage = () => {
    const [state,setState] = useState(1);
    const handleClick = (index) =>{
        console.log(index)
        setState(index);
    }
    const cart = useContext(cartContext);
    
    return (
        <div>
        <div>
            <header>
                <nav className='items-center flex justify-between mt-2 mb-5'>
                    <div className='nav'>
                        <img className='h-7 lg:h-10 ms-5' src={logo} alt="" />
                    </div>
                    <div className='nav'>
                        <Link className='ms-5'>Cart</Link>
                        <Link className='ms-5'>Login</Link>
                        <button onClick={()=>console.log('Signup')} className='btn-active ms-5 me-2 lg:me-5 px-4 py-1 text-center'>Signup</button>
                    </div>
                </nav>
                <div className='banner h-36 lg:h-screen w-screen flex flex-col justify-center items-center'>
                    <h1 className='lg:text-3xl text-pink-700'>Best Food Waitting for Your Belly</h1>
                    <br />
                    <div className='search h-8 lg:h-10 w-60 lg:w-96 flex justify-between'>
                        <input className='border-none ms-2 lg:ms-5' placeholder='serach food here' type="text" />
                        <button className='btn-active px-4 py-1'>Search</button>
                    </div>
                </div>
            </header>
            <section>
                <div className='flex justify-center me-8'>
                    <button onClick={()=> handleClick(1)} className={state==1 ? 'ms-10 lg:20 active-btn' : 'ms-10 lg:20 tab-btn'}>Breakfast</button>
                    <button onClick={()=> handleClick(2)} className={state==2 ? 'ms-10 lg:20 active-btn' : 'ms-10 lg:20 tab-btn'}>Lunch</button>
                    <button onClick={()=> handleClick(3)} className={state==3 ? 'ms-10 lg:20 active-btn' : 'ms-10 lg:20 tab-btn'}>Dinner</button>
                </div>
               <div className='flex justify-center'>
                    <div className={state==1?'breakfast-active h-full  w-screen mt-5 lg:mt-10 ms-10 lg:ms-20 me-10 lg:me-20':'breakfast'}>
                       <Breakfast></Breakfast>
                    </div>
                    <div className={state==2?'lunch-active h-full w-screen mt-5 lg:mt-10 ms-10 lg:ms-20 me-10 lg:me-20':'lunch'}>
                        <Lunch></Lunch>
                    </div>
                    <div className={state==3?'dinner-active h-full w-screen mt-5 lg:mt-10 ms-10 lg:ms-20 me-10 lg:me-20':'dinner'}>
                        <Dinner></Dinner>
                    </div> 
               </div>
            </section>
            <div className='flex justify-center items-center'>
                <button className={cart.foods.length<=1 ? 'btn mt-5 lg:mt-10 px-8 py-2' : 'btn-active mt-5 lg:mt-10 px-8 py-2'}><Link to={cart.foods.length>1 ? "/cart" :"/"}>Visit your food Cart</Link></button>
            </div>
            <br />
            <div className='flex justify-center items-center lg:text-3xl'>
                <h1>Why you will choose us</h1>
            </div>
            <section>
               <div className='flex justify-center items-center'>
                  <div className='h-full w-screen mt-5 lg:mt-10 ms-10 lg:ms-20 me-10 lg:me-20'>
                        <Chefs></Chefs>
                  </div>
               </div>
            </section>
            <footer className='bg-gray-900 h-24 lg:h-36 w-screen flex justify-between items-center'>
                <div className='nav'>
                    <img className='h-7 lg:h-10 ms-5' src={logo} alt="" />
                </div>
                <div className='flex lg:me-10 gap-1 lg:gap-20'>
                    <div className='flex flex-col'>
                        <p className='text-white'>About online food</p>
                        <p className='text-white'>Read our blog</p>
                        <p className='text-white'>Sign up to deliver</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-white'>Get Help</p>
                        <p className='text-white'>Read FAQS</p>
                        <p className='text-white'>View all food</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-white'>Terms & Condition</p>
                        <p className='text-white'>Kawser Ahamed</p>
                        <p className='text-white'>Thank You</p>
                    </div>
                </div>
            </footer>
        </div>
      </div>
    );
};

export default Homepage;