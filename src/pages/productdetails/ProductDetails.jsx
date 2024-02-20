import React, { useState } from 'react'
import ProductDetailsImg from '../../assets/productdetails.png'
import { FiPlus } from "react-icons/fi";
import { HiMinus } from "react-icons/hi";
import { CiHeart } from "react-icons/ci";
import { GoArrowSwitch } from "react-icons/go";

const ProductDetails = () => {

    const [count, setCount] = useState(0);

    const handleCardPlus = () => {
      setCount(count + 1);
    };
  
    const handleCardMinus = () => {
        if (!count == 0) {
            setCount(count - 1);
        }
    };
    return (
        <>
            <div className=' max-w-container mx-auto flex flex-wrap gap-10 py-20'>
                <>
                    <img src={ProductDetailsImg} alt="" />
                </>
                <div>
                    <h2 className=' font-medium font-jost text-primary text-[32px] w-[440px] '>Playstation 4 2TB Slim Gaming Console</h2>
                    <p className=' text-second-primary my-4 p-2 bg-[rgba(9,136,255,0.1)] inline-block text-base font-medium'>In Stock</p>
                    <p className=' font-jost text-primary font-medium pb-2 text-2xl'>239.00$</p>

                    <div className='flex gap-2 my-2'>
                        <div className=' bg-[#F3F5F6] flex justify-between items-center gap-4 p-3 '>
                        <FiPlus onClick={handleCardPlus} className='p-2 hover:bg-white rounded-full text-3xl font-semibold duration-300 cursor-pointer'></FiPlus>
                        <span>{count}</span>
                        <HiMinus onClick={handleCardMinus} className='p-2 hover:bg-white rounded-full text-3xl font-semibold duration-300 cursor-pointer'></HiMinus>
                        </div>

                        <button className='py-2 border-[1px] border-[#E0E2E3] w-9/12 font-normal text-base'>Add to cart</button>
                    </div>
                    <button type="button" className='py-3 bg-second-primary w-full text-white font-jost font-medium text-base'>Buy Now</button>
                    <div className=' flex items-center gap-3 py-4 border-b-2 border-r-emerald-800'>
                        <div className=' flex items-center gap-1 text-base'>
                            <GoArrowSwitch></GoArrowSwitch>
                            Compare
                        </div>
                        
                        <div className=' flex items-center gap-1 text-base'>
                            <CiHeart></CiHeart>
                            Add To Wishlist
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails