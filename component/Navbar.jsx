'use client'
import Link from 'next/link'
import React, {useState} from 'react'
import { AiOutlineShopping, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { BiMenuAltLeft } from 'react-icons/bi'


const Navbar = () => {
  const [menuShow, setMenuShow] = useState(false)

  const show = () => {
    setMenuShow(!menuShow)
  }

  return (
    <div>
      <div className='hidden lg:block'>
        <div className='flex justify-between items-center'>
          <AiOutlineSearch size={26} />
          
          <div>
            <img src='/logoCoral.png' alt='logo' />
          </div>

          <div className='flex space-x-5 list-none'>
            <li>
              <Link className='flex items-center' href=''>
                <BsPerson />
                <h6>Account</h6>
              </Link>
            </li>
            <li>
              <Link className='flex items-center' href=''>
                <AiOutlineShopping />
                <h6>Shopping</h6>
              </Link>
            </li>
          </div> 
        </div>

        <div className='w-full border border-gray-500 my-5' />

        <div>
          <ul className='flex flex-row items-center justify-between'>
            <li>
              <Link className='' href=''>
                <h6>Jwerlry & Accessories</h6>
              </Link>
            </li>
            <li>
              <Link className='' href=''>
                <h6>Clothing & Shoes</h6>
              </Link>
            </li>
            <li>
              <Link className='' href=''>
                <h6>Home & Living</h6>
              </Link>
            </li>
            <li>
              <Link className='' href=''>
                <h6>Wedding & Party</h6>
              </Link>
            </li>
            <li>
              <Link className='' href=''>
                <h6>Toy & Entertainment</h6>
              </Link>
            </li>
            <li>
              <Link className='' href=''>
                <h6>Art & Collectibles</h6>
              </Link>
            </li>
            <li>
              <Link className='' href=''>
                <h6>Craft Supplies & Tools</h6>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* mobile */}
      <div className='lg:hidden relative'>
        <div className='flex items-center justify-between'>
          <div onClick={show}>
            {!menuShow ? <BiMenuAltLeft /> : <AiOutlineClose/> }
          

            {menuShow && 
              <div className='absolute bg-gray-300 w-[50%] h-[50vh]'>
                <ul className='items-center justify-between'>
                  <li>
                    <Link className='' href=''>
                      <h6>Jwerlry & Accessories</h6>
                    </Link>
                  </li>
                  <li>
                    <Link className='' href=''>
                      <h6>Clothing & Shoes</h6>
                    </Link>
                  </li>
                  <li>
                    <Link className='' href=''>
                      <h6>Home & Living</h6>
                    </Link>
                  </li>
                  <li>
                    <Link className='' href=''>
                      <h6>Wedding & Party</h6>
                    </Link>
                  </li>
                  <li>
                    <Link className='' href=''>
                      <h6>Toy & Entertainment</h6>
                    </Link>
                  </li>
                  <li>
                    <Link className='' href=''>
                      <h6>Art & Collectibles</h6>
                    </Link>
                  </li>
                  <li>
                    <Link className='' href=''>
                      <h6>Craft Supplies & Tools</h6>
                    </Link>
                  </li>
                </ul>
              </div>
            }
          </div>
          

          <div>
            <img src='/logoCoral.png' alt='logo' />
          </div>

          <div>
            <div className='flex space-x-5 list-none'>
              <li>
                <Link className='flex items-center' href=''>
                  <BsPerson />
                </Link>
              </li>
              <li>
                <Link className='flex items-center' href=''>
                  <AiOutlineShopping />
                </Link>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar