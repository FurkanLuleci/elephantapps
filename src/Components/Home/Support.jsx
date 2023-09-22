import React from 'react'
import elephant1 from "../../assets/home-/elephant_lowpoly.inline.svg"
const Support = () => {
    return (
        <section className=' bg-[#FAFAFA] '>
            <div className='px-[25px] pb-[60px] '>
                
                <div className='h-[2px] w-[45px] bg-[#ff5354]'></div>
                <p className='mt-5 mb-6 text-[#ff5354] text-[11px]  '>MAINTENANCE AND SUPPORT</p>
                <div className=' grid md:grid-cols-6 grid-cols-1  font-[300]'>
                   <div className='mt-5 mb-7 md:col-start-1 col-span-4 '>
                    <p className=' text-[18px] text-[#696969] pt-[120px]'>We update applications to make compatible with new technologies, and we make error checks and bug fixes.</p></div>
                   <div className='md:col-start-5 col-span-2 '><img  src={elephant1} alt="" /></div>
                        
                        
                        
                    
                </div>
            </div>
        </section>
    )
}

export default Support