import { motion } from "framer-motion";


const SpecialtiesCard = ({ name, img }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}

            className=" w-96">
            <div className=" border-black border-4">
                <img src={img} alt={name} className="w-full" />
            </div>
            <h2 className=" text-2xl font-semibold">{name}</h2>
        </motion.div>
    )
}

export default SpecialtiesCard

