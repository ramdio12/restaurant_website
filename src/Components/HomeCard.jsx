import { motion, stagger } from "framer-motion"

const HomeCard = ({ id, slogan, text, image }) => {

    console.log(slogan)
    return (
        <motion.div
            initial={{ translateY: 60, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: id * 0.7 }}
            viewport={{ once: true }}

            className=" h-32 md:w-96 bg-white flex items-center justify-center p-2 rounded-md shadow-xl overflow-hidden  hover:scale-110 duration-500 ease-in-out">
            <div className="w-36 md:w-44 h-28 py-3">
                <img src={image} alt={slogan} className="w-full" />
            </div>
            <div>
                <h2 className="text-2xl font-bold">{slogan}</h2>
                <p>{text}</p>
            </div>
        </motion.div>
    )
}

export default HomeCard
