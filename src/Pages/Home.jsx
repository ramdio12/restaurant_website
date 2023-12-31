import headerImage from "../../public/img/heading.png"
import ForCard from "../data/HomeCard.json";
import HomeCard from "../Components/HomeCard";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Home = () => {


    return (
        <div className="  bg-image bg-center bg-cover opacity-95 brightness-95">

            <section id="home"
                className=" w-full text-center flex items-center justify-center flex-col font-mono min-h-screen">
                <div className="md:flex pt-14 text-white" >
                    <div className="basis-1/2">
                        <div className="mt-12 md:h-80 w-72 md:w-newwidth mx-auto mb-20 pt-12 ">
                            <motion.img
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.1, transitionDuration: 0.5 }}
                                // animate={{ scale: 1.1 }}
                                // transition={{
                                //     repeatType: "mirror",
                                //     repeat: Infinity,
                                //     duration: 1
                                // }}
                                src={headerImage} alt="heading" className="w-full " />
                        </div>

                    </div>
                    <div className="basis-1/2  flex flex-col items-center justify-center px-8">
                        <h1 className=" text-3xl mt-16 md:text-5xl 2xl:text-6xl font-semibold pb-8 drop-shadow-lg">Enjoy Your Delicious Meal, Bruv</h1>
                        <p className=" pb-4 drop-shadow-2xl text-justify text-lg md:text-xl 2xl:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum, ipsum ac rutrum imperdiet, massa turpis tempor dolor, eu eleifend lacus dui quis turpis. Mauris a accumsan nisi. Aliquam feugiat tellus ut nisl congue consectetur. </p>
                        <Link to="specialties" spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500} className=" bg-red-600 hover:bg-red-700 hover:scale-110 duration-500 ease-in-out text-white px-6 py-2 cursor-pointer rounded-md">See our specialties</Link>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-4 mt-6 2xl:mt-12 flex-wrap mb-4">
                    {
                        ForCard.map(card =>
                            <HomeCard key={card.id} {...card} />
                        )
                    }
                </div>
            </section>


        </div>
    )
}

export default Home
