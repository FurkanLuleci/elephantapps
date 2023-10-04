import React from 'react'
import Brian from "../../assets/home-/brain.inline.svg"
import avni from "../../assets/team/avni.webp"
import abdulaziz from "../../assets/team/abdulaziz.webp"
import ali from "../../assets/team/ali.webp"
import burak from "../../assets/team/burak.webp"
import mustafa from "../../assets/team/mustafa.webp"
import orsan from "../../assets/team/orsan.webp"
import osman from "../../assets/team/osman.webp"
import yasemin from "../../assets/team/yasemin.webp"
import yasin from "../../assets/team/yasin.webp"

const Team = () => {
    return (
        <section className='py-16 bg-[#FAFAFA] '>
            <div className='container px-10  mx-auto '>
                <p className='mt-5 mb-6 text-[#ff5354] text-[11px]  '>TEAM</p>
                <div className=' grid md:grid-cols-5 grid-cols-1 '>
                    <div className=''>
                        <img src={Brian} alt='' />
                    </div>
                    <div className='md:col-start-2 col-span-3 pl-[120px]'>
                        <div className='md:grid  grid-cols-2 grid-cols-1 gap-[40px]'>
                            <div className='flex'>
                                <div> <img className='rounded-full grayscale' width={100} src={avni} alt="" /></div>
                                <div className='pl-[20px] pt-[20px]' >
                                    <p className='text-sm font-normal tracking-[1.5px]'>HÜSEYİN AVNİ YALÇIN</p>
                                    <p className='text-[#3D3D3D] italic text-[12px] font-normal tracking-[0.5px]'>CEO</p>
                                    <p className='text-[#3D3D3D] italic text-[12px] font-normal tracking-[0.5px]'>Computer Engineer</p></div>
                            </div>
                            <div className='flex'>
                                <img className='rounded-full grayscale' width={100} src={mustafa} alt="" />
                                <div className='pl-[20px] pt-[20px]' >
                                    <p className='text-sm font-normal tracking-[1.5px]'>BEKIR MUSTAFA OZVARDARLI</p>
                                    <p className='text-[#3D3D3D] italic text-[12px] font-normal tracking-[0.5px]'>Hardware Development, IOT & Control systems</p>
                                    <p className='text-[#3D3D3D] italic text-[12px] font-normal tracking-[0.5px]'>Electronics Engineer</p></div>
                            </div>
                            <div className='flex'>
                                <img className='rounded-full grayscale' width={100} src={yasemin} alt="" />
                                <div className='pl-[20px] pt-[20px]' >
                                    <p className='text-sm font-normal tracking-[1.5px]'>YASEMIN MELEK MUTLU</p>
                                    <p className='text-[#3D3D3D] italic text-[12px] font-normal tracking-[0.5px]'>Sales & Marketing Specialist</p>
                                </div>
                            </div>
                            <div className='flex' >
                                <img className='rounded-full grayscale' width={100} src={ali} alt="" />
                                <div className='pl-[20px] pt-[20px]' >
                                    <p className='text-sm font-normal tracking-[1.5px]'>ALI OZTURK</p>
                                    <p className='text-[#3D3D3D] italic text-[12px] font-normal tracking-[0.5px]'>Financial Officer</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <img className='rounded-full grayscale' width={100} src={orsan} alt="" />
                                <div className='pl-[20px] pt-[20px]' >
                                    <p className='text-sm font-normal tracking-[1.5px]'>ORSAN SEVIS</p>
                                    <p className='text-[#3D3D3D] italic text-[12px] font-normal tracking-[0.5px]'>Accounting Manager</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <img className='rounded-full grayscale' width={100} src={burak} alt="" />
                                <div className='pl-[20px] pt-[20px]' >
                                    <p className='text-sm font-normal tracking-[1.5px]'>BURAK HASICI</p>
                                    <p className='text-[#3D3D3D] italic text-[12px] font-normal tracking-[0.5px]'>Software Developer</p>
                                </div>
                            </div>
                            <div className='flex' >
                                <img className='rounded-full h-[100px] grayscale' width={100} src={yasin} alt="" />
                                <div className='pl-[20px] pt-[20px]' >
                                    <p className='text-sm font-normal tracking-[1.5px]'>YASIN REISOGLU</p>
                                    <p className='text-[#3D3D3D] italic text-[12px] font-normal tracking-[0.5px]'>Software Developer</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <img className='rounded-full grayscale' width={100} src={osman} alt="" />
                                <div className='pl-[20px] pt-[20px]' >
                                    <p className='text-sm font-normal tracking-[1.5px]'>OSMAN OSMANOGLU</p>
                                    <p className='text-[#3D3D3D] italic text-[12px] font-normal tracking-[0.5px]'>Software Developer</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <img className='rounded-full grayscale' width={100} src={abdulaziz} alt="" />
                                <div className='pl-[20px] pt-[20px]' >
                                    <p className='text-sm font-normal tracking-[1.5px]'>ABDULAZIZ ALSIKH</p>
                                    <p className='text-[#3D3D3D] italic text-[12px] font-normal tracking-[0.5px]'>Software Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team