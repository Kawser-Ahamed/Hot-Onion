import breakfast1 from '../assets/images/breakfast1.png'
import breakfast2 from '../assets/images/breakfast2.png'
import breakfast3 from '../assets/images/breakfast3.png'
import lunch1 from '../assets/images/lunch1.png'
import lunch2 from '../assets/images/lunch2.png'
import lunch3 from '../assets/images/lunch3.png'
import fuska from '../assets/images/fuska.png'
import burger from '../assets/images/burger.png'
import pizza from '../assets/images/pizza.png'
import chef2 from '../assets/images/chef2.jpg'
import chef3 from '../assets/images/chef1.jpg'
import homeDelivery from '../assets/images/home-delivery.jpg'

export const breakfastData = [
    {
        id:1,
        url:breakfast1,
        description:'How do we think about your future',
        dishName :  'Dim mumlet',
        price : '20'
    },
    {
        id:2,
        url:breakfast2,
        description:'How do we think about your future',
        dishName :  'Mac Donalds',
        price : '35'
    },
    {
        id:3,
        url:breakfast3,
        description:'How do we think about your future',
        dishName :  'Doi Chira',
        price : '15'
    },
]

export const breakfastString = JSON.stringify(breakfastData);

export const lunchData = [
    {
        id:1,
        url:lunch1,
        description:'How do we think about your future',
        dishName :  'Vorta',
        price : '10'
    },
    {
        id:2,
        url:lunch2,
        description:'How do we think about your future',
        dishName :  'Vat & Mangso',
        price : '35'
    },
    {
        id:3,
        url:lunch3,
        description:'How do we think about your future',
        dishName :  'Kacchi',
        price : '15'
    }
]

export const dinnerData = [
    {
        id:1,
        url:fuska,
        description:'How do we think about your future',
        dishName :  'Fuska',
        price : '5'
    },
    {
        id:2,
        url:burger,
        description:'How do we think about your future',
        dishName :  'Burger',
        price : '7'
    },
    {
        id:3,
        url:pizza,
        description:'How do we think about your future',
        dishName :  'Pizza',
        price : '12'
    },
]

export const chef = [
    {
        url: chef2,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, dolores.'
    },
    {
        url: chef3,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, dolores.'
    },
    {
        url: homeDelivery,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, dolores.'
    },
]