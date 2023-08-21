import React from 'react'
import AnalysisIcon from "../../assets/home-/icon_analysis.inline.svg"
import StrategyIcon from "../../assets/home-/icon_strategy.inline.svg"
import TimeIcon     from "../../assets/home-/icon_time.inline.svg"
import WireframeIcon from "../../assets/home-/icon_wireframe.inline.svg"
const LifeCycle = () => {
    return (
        <section className='py-16 bg-[#FAFAFA] '>
            <div className='container px-10  mx-auto '>
                <h6 className='mt-5 mb-6'>ELEPHANTAPPS THE APP LIFE CYCLE</h6>
                <div className='h-[2px] w-[45px] bg-[#ff5354]'></div>
                <p className='mt-5 mb-6 text-[#ff5354] text-[11px]  '>PLANNING</p>
                <div className=' grid md:grid-cols-2 grid-cols-1 gap-12 font-[300]'>
                    <div className='bg-white p-16 '>
                        <h6 className='text-[11px] mt-5 mb-7'>WHAT DO WE DO?</h6>
                        <h3 className='text-[35px] mb-5 pb-2'>Developing Enterprise Applications.</h3>
                        <p className='text-[15px] mb-5 '>We produce new ideas and new technologies with our experienced and self-improving team. We do life cycle analysis of applications, and we plan the development and publishing processes perfectly.</p> </div>
                    <div className='grid  grid-cols-2 gap-6 font-[300]'>
                        <div>
                            <h6 className='text-[20px]  font-[300]' >Identifying Needs</h6>
                            <div className='py-1'><img width={40} src={AnalysisIcon} alt="" /></div>
                            <p className='text-[16px] text-[#696969]'>We accurately identify your needs with accurate analyzes and technological solutions.</p>
                        </div>
                        <div>
                            <h6 className='text-[20px] font-[300]'>System Design</h6>
                            <div className='py-1'><img width={40}  src={StrategyIcon} alt="" /></div>
                            <p className='text-[16px] text-[#696969]'>We design your applications according to user experience and modern design trends.</p>
                        </div>
                        <div>
                            <h6 className='text-[20px] font-[300]'>Strategic System Analysis</h6>
                            <div className='py-1'><img width={40}  src={TimeIcon} alt="" /></div>
                            <p className='text-[16px] text-[#696969] '>We research for competitors and applications, and we plan the most suitable system.</p>
                        </div>
                        <div>
                            <h6 className='text-[20px] font-[300]'>Project Plan and Cost Analysis</h6>
                            <div className='py-1'><img width={40}  src={WireframeIcon} alt="" /></div>
                            <p className='text-[16px] text-[#696969]'>We perform our project planning in accordance with our customers' time and budget.</p>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LifeCycle