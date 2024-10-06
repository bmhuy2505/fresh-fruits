import BannerPng from "../../assets/fruit-plate2.png";
import { motion } from "framer-motion";
import { FadeUp } from "../../utility/animation";

const Banner2 = () => {
    return (
        <section className="">
            <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24">
                {/* Brand Info */}
                <div className="flex flex-col justify-center">
                    <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
                        <motion.h2
                            variants={FadeUp(0.5)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-bold uppercase"
                        >
                            Online <br /> Fruit Store
                        </motion.h2>
                        <motion.p
                            variants={FadeUp(0.7)}
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
                        <motion.p
                            variants={FadeUp(0.9)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Officia tempore necessitatibus voluptatum
                            praesentium veniam quibusdam?
                        </motion.p>
                        <motion.div
                            variants={FadeUp(1.1)}
                            initial="hidden"
                            animate="visible"
                            className="flex justify-center md:justify-start"
                        >
                            <button className="primary-btn">
                                Download the App
                            </button>
                        </motion.div>
                    </div>
                </div>
                {/* Banner Image */}
                <div className="flex items-center justify-center">
                    <motion.img
                        initial={{ opacity: 0, x: 200, rotate: 75 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        viewport={{ once: true }}
                        src={BannerPng}
                        alt=""
                        className="w-[350px] md:max-w-[500px] h-full object-cover drop-shadow"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner2;
