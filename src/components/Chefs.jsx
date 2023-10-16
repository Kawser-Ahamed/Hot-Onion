
import {chef} from '../provider/fakeData';
const Chefs = () => { 
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {
                chef.map(m=>
                <div key={m.url} className='rounded-3xl h-60 w-72 lg:h-72 lg:w-80 bg-white-100 flex flex-col justify-center items-center'>
                    <img className='h-80 w-60 lg:h-44 lg:w-60' src={m.url} alt="" />
                    <p className='ms-6 lg:ms-10 lg:me-5'>{m.description}</p>
                </div>
               )
            }
        </div>
    );
};

export default Chefs;