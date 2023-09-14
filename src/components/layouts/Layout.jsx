import React from 'react'

function Layout({children}) {
  return (
    <div className='w-full h-screen p-10 lg:p-0 bg-white relative flex flex-col justify-center items-center gap-6'>
      <div className='w-full flex flex-col justify-center items-center gap-2'>
        <img src='/images/logo.jpg' alt='GENESIS' className='w-full h-[20vh] object-contain' />
        <p className='text-4xl text-slate-900 font-semibold'>Pagar mi póliza</p>
      </div>
      <div className='w-full lg:w-[40%] h-fit relative block'>
        {children}
      </div>
    </div>
  )
}

export default Layout