import React from 'react'
import devDesign from "../../assets/home-/dev_design.webp"
import devCode from "../../assets/home-/dev_code.webp"
import devLaunch     from "../../assets/home-/dev_launch.webp"
import devTest from "../../assets/home-/dev_test.webp"
const Arge = () => {
    return (
        <section className=' bg-[#FAFAFA] px-[25px] pb-[60px]  '>
            <div className=''>
                
                <div className='h-[2px] w-[45px] bg-[#ff5354]'></div>
                <p className='mt-5 mb-6 text-[#ff5354] text-[11px]  '>APPLICATION DEVELOPMENT STAGES</p>
                <div className=' grid md:grid-cols-4 grid-cols-1 gap-5 py-20 font-[300]'>
                    <div className=''>
                    <div className=''><img  src={devDesign} alt="" /></div>
                        <h3 className='text-2xl leading-5 py-6 text-center'>Visual Design</h3>
                        <p className='text-gray-600 text-center text-sm leading-4 '>We make Responsive and Flat designs that match different screen sizes and retina resolutions.</p> </div>
                    
                        <div>
                            <div className=''><img  src={devCode} alt="" /></div>
                            <h6 className='text-2xl leading-5 py-6 text-center' >Coding</h6>
                            <p className='text-gray-600 text-center text-sm leading-4'>We follow the latest technologies and we constantly improve ourselves for better coding.</p>
                        </div>
                        <div>
                            <div className=''><img  src={devTest} alt="" /></div>
                            <h6 className='text-2xl leading-5 py-6 text-center'>Test and Acceptance</h6>
                            <p className='text-gray-600 text-center text-sm leading-4'>We use a variety of tools to test applications, and we support you during your admission process.</p>
                        </div>
                        <div>
                            <div className=''><img   src={devLaunch} alt="" /></div>
                            <h6 className='text-2xl leading-5 py-6 text-center'>Publishing</h6>
                           
                            <p className='text-gray-600 text-center text-sm leading-4 '>We publish your applications either on your own accounts or on ElephantApps accounts.</p>
                        </div>
                        
                        
                        
                    
                </div>
            </div>
        </section>
    )
}

export default Arge