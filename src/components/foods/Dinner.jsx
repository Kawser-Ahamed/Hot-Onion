import { Link } from 'react-router-dom';
import {dinnerData} from '../../provider/fakeData'

const Dinner = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {
                dinnerData.map(m=>
                    <Link key={m.url} to={`/individualDinner/${m.id}`}>
                        <div className='breakfast-only rounded-3xl h-60 w-72 lg:h-72 lg:w-80 bg-white-100 flex flex-col justify-center items-center'>
                            <img className='h-40 lg-40 lg:h-44 lg:w-44' src={m.url} alt="" />
                            <p>{m.description}</p>
                            <h2>{m.dishName}</h2>
                            <h4>${m.price}</h4>
                        </div>
                    </Link>
                )
            }
        </div>
    );
};

export default Dinner;