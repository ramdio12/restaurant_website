import foodpic from "../../public/img/about.jpg";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="w-full text-center md:flex items-center justify-center font-mono min-h-screen">
            <div className="basis-1/2 px-12">
                <h2 className=" text-4xl md:text-6xl 2xl:text-7xl pb-4">About Us</h2>
                <p className=" text-lg md:text-xl 2xl:text-2xl text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nunc nulla, tristique quis varius nec, sagittis nec erat. Etiam rhoncus velit elementum, convallis lorem vel, viverra ante. Praesent sit amet odio gravida, cursus tortor quis, maximus mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In consectetur orci eu orci tincidunt tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur at iaculis velit, ac tempor metus. Pellentesque dictum eget leo id tempus. Donec venenatis urna eget odio euismod cursus. </p>
            </div>
            <div className="flex items-center justify-center basis-1/2">
                <div>
                    <motion.img
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}

                        src={foodpic} alt="foodpic" />
                </div>
            </div>
        </section>
    )
}

export default About
