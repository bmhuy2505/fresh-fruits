import { motion } from "framer-motion";
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaLeaf,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-primary/10 text-white py-12">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="container flex justify-between items-center"
            >
                {/* Logo section */}
                <div className="text-2xl flex items-center gap-2 font-bold">
                    <p className=" text-primary">FRUIT</p>
                    <p className=" text-secondary">STORE</p>
                    <FaLeaf className="text-green-500" />
                </div>
                {/* Social icons section */}
                <div className="text-3xl flex items-center gap-4 mt-6 text-gray-700">
                    <FaInstagram />
                    <FaTwitter />
                    <FaFacebook />
                    <FaYoutube />
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
