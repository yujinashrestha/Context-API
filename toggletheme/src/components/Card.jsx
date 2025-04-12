import React from 'react'

export default function Card() {
    return (
        <div className="flex justify-center items-start h-screen mt-7">
            
                <div className="p-2 w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="/">
                        <img className="p-8 rounded-t-lg bg-cover bg-no-repeat bg w-full h-96"  src="https://images.pexels.com/photos/30340931/pexels-photo-30340931/free-photo-of-vintage-clock-inside-dhaka-metro-station.jpeg?auto=compress&cs=tinysrgb&w=600" alt="product_image1" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="/">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-[20px]">
                            Time flows like a silent stream,
                            Moments vanish like a dream.
                            We hold so little, yet so much—
                            A fleeting touch, a lasting touch.
                            </h5>
                        </a>
                       
                        
                    </div>
                </div>
            
        </div>
    );
}
