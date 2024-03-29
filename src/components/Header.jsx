import React from 'react'
import logo from '../assets/gatewayLogo.png';

const Header = () => {
  return (
    <div className="flex justify-between items-center absolute px-10 w-full pt-2">
        <div className='flex justify-center items-center gap-4'>
            <img className='rounded-3xl' src={logo} height={50} width={50} alt="" srcset="" />
            <h3 className='text-2xl text-[#1B1D36]' style={{fontFamily:'Lobster'}}>GateWay</h3>
        </div>
        <div>
            <h3>About GateWay</h3>
        </div>
    </div>
  )
}

export default Header