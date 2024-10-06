import BannerPng from "../../assets/banner-bg.jpg";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utility/animation";
import { IoBagHandleOutline } from "react-icons/io5";

const bgStyle = {
    backgroundImage: `url(${BannerPng})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
};

const Banner3 = () => {
    return (
        <section className="container mb-12">
            <div
                style={bgStyle}
                className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-20 rounded-3xl"
            >
                {/* Blank div */}
                <div></div>
                {/* Brand Info */}
                <div className="flex flex-col justify-center p-4">
                    <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
                        <motion.h2
                            variants={FadeLeft(0.5)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-bold uppercase"
                        >
                            Get Fresh <br />
                            Fruits Today
                        </motion.h2>
                        <motion.p
                            variants={FadeLeft(0.7)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Deleniti provident accusantium, similique
                            ipsum placeat odio odit at sed eaque et nulla quod
                            maiores iure illo consectetur accusamus adipisci
                            commodi veritatis?
                        </motion.p>
                        <motion.div
                            variants={FadeLeft(0.9)}
                            initial="hidden"
                            animate="visible"
                            className="flex justify-center md:justify-start"
                        >
                            <button className="primary-btn flex items-center gap-2">
                                <span>
                                    <IoBagHandleOutline />
                                </span>
                                Order Now
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner3;
