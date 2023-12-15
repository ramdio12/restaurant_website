import React from 'react'
import menus from "../data/specialties.json"
import SpecialtiesCard from '../Components/SpecialtiesCard'

const Specialties = () => {
    return (
        <section id="specialties"
            className=" w-full text-center  min-h-screen pt-8 pb-12">
            <h2 className=' text-5xl pb-8'>Our Specialties</h2>
            <div className=' w-full flex items-center justify-center flex-wrap gap-4'>
                {
                    menus.map((menu) => (
                        <SpecialtiesCard key={menu.id} {...menu} />
                    ))
                }
            </div>
        </section>
    )
}

export default Specialties
