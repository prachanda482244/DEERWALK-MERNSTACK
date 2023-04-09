import React from 'react'
import { NavLink } from 'react-router-dom'

const Customer = () => {
    return (
        <div className='flex  justify-center p-4 gap-3'>
            <div className=' w-[60vw] mt-10 p-3 space-y-4'>
                <h2 className='text-center text-4xl   w-1/2 font-light'>Short description about us</h2>
                <div className='border-2 border-gray-600'></div>
                <p className='font-normal italic  px-3 tracking-wide leading-loose'>
                    The product page for Friendly Shop is designed to showcase the various products available for purchase on the website. The page is organized and visually appealing, making it easy for customers to browse and select items they may be interested in purchasing.

                    The page layout may feature a grid of product images, with each image representing a different category or type of product. Customers can click on the images to learn more about the product, including its features, specifications, pricing, and availability. There may also be customer reviews and ratings displayed on the product page, providing helpful information for potential buyers.

                    The Friendly Shop web page itself may feature a modern and clean design, with a focus on user experience and ease of navigation. The page may feature high-quality product images, a simple and intuitive menu, and easy-to-use search and filter functions to help customers quickly find what they are looking for.

                    The page may also include additional features, such as a shopping cart, wish list, and account login, allowing customers to save their preferences and track their orders. The overall goal of the Friendly Shop website is to provide a seamless and enjoyable shopping experience for customers, encouraging them to return and make repeat purchases.
                </p>
            </div>
            <div className='flex flex-col border-2 border-black rounded-lg p-1 w-[40vw] items-center justify-center '>
                <h2 className=' text-xl w-full font-medium'>Navigate to the product management section of the website.</h2>
                <div className='border-2 border-gray-600 w-full my-2'></div>

                <p className='font-light italic text-lg px-3 tracking-wide leading-9 '>
                    To add or view products on the Friendly Shop website, users will need to create an account and log in. Once logged in, they can access the product management section of the website, where they can add new products, edit existing products, and view a list of all products available on the website.
                </p>
                <ul className='flex  space-x-11 p-5 items-center justify-center   '>
                    <li className='border-2 border-gray-600 py-3 px-5 rounded-lg bg-cyan-500 text-white shadow-xl'>
                        <NavLink to='/customer/products/create'>Add your products</NavLink>
                    </li>

                    {/* <li className='border-2 border-gray-600 py-3 px-5 rounded-lg bg-cyan-500 text-white shadow-xl'>
                    <NavLink to='/customer/products/update'>Update</NavLink>
                </li> */}

                    <li className='border-2 border-gray-600 py-3 px-5 rounded-lg bg-cyan-500 text-white shadow-xl'>
                        <NavLink to='/customer/products/view'>View products</NavLink>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Customer

