import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faSquareTwitter, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faClock, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";
import location from "../../public/img/location.jpg";
import { motion } from "framer-motion";


const Contact = () => {
    return (
        <>
            <section className="w-full text-center bg-neutral-900 pb-10 text-white font-mono" id="contact">
                <h1 className="text-5xl font-semibold py-4">Contact Us</h1>
                <div className="md:flex w-full items-center justify-center pt-12">
                    <div className="basis-1/2 flex flex-col items-center justify-center">

                        <h2 className="text-4xl ">We are Located at: </h2>
                        <div className=" text-left ml-4 md:mx-auto">
                            <p className="text-xl mt-2">
                                <FontAwesomeIcon icon={faLocationDot} className="mr-4" />
                                Cruz Taal St., Divisoria, Cagayan de Oro City</p>
                            <p className=" text-xl mt-2">
                                <FontAwesomeIcon icon={faClock} className="mr-4" />
                                10:00am - 10:00pm</p>
                            <p className=" text-xl mt-2">
                                <FontAwesomeIcon icon={faCalendarDays} className="mr-4" />
                                Mondays to Sundays</p>
                        </div>

                        <div className="mt-12">
                            <img src={location} />
                        </div>



                    </div>
                    <div className="basis-1/2">
                        <div className="mb-32">
                            <div className="text-center">
                                <h2 className=" text-2xl mt-8 md:mt-0 md:text-3xl pb-4">For catering or delivery, call us:</h2>
                                <p className="text-2xl">0912-4532-123</p>
                                <p className="text-2xl" >0936-0987-321</p>
                            </div>
                            <div className="mt-12">
                                <h2 className="text-3xl pb-8">Visit Our Social Media Accounts: </h2>

                                <div className="flex items-start justify-center gap-4 flex-col ml-4">

                                    <Icon>
                                        <FontAwesomeIcon icon={faSquareFacebook} />
                                        https://www.facebook.com/foodiebruv
                                    </Icon>
                                    <Icon>
                                        <FontAwesomeIcon icon={faSquareInstagram} />
                                        https://www.instagram.com/foodiebruv/
                                    </Icon>
                                    <Icon>
                                        <FontAwesomeIcon icon={faSquareTwitter} />
                                        https://twitter.com/foodiebruv
                                    </Icon>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact


const Icon = ({ icon, children }) => {
    return (
        <div className=" text-base  md:text-2xl  flex items-center justify-center gap-4 cursor-pointer hover:text-red-400  ">
            <FontAwesomeIcon icon={icon} />
            {children}
        </div>
    );
}