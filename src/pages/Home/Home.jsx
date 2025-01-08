import Footer from "../../Components/Footer";
import FreeConsoulting from "./Components/FreeConsoulting";
import Header from "../../Components/Header";
import Headerr from "../../Components/Header2";
import { services } from "../../utils";
import { ServiceCard } from "../Service/Components/ServiceCard";
import Support from "./Components/Support";
import Vocansiya from "./Components/Vocansiya";
import { motion } from "framer-motion";
import ProjectShowcase from "./Components/Project";
import CommentSlider from "./Components/Comments";
function Home() {
  return (
    <>
      <div className="bg-[#f9f4e8] text-[#1f1f1f]  flex flex-col">
        <div
          style={{
            backgroundImage: `url("https://cdn.prod.website-files.com/6427c6c769d01c2f58037956/6427ce2ee23a16d26b372c45_bg-lines-axe.svg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100%",
            width: "100%",
          }}
        >
          <Headerr />
          <Header />
          <Support />
        </div>
        <div className="max-w-[90%] mx-auto px-4 py-[70px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1 },
              },
            }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4"></div>
            <h2 className="text-3xl md:text-[5rem] font-bold text-[#1f1f1f] mb-4">
              Our <span className="text-red-600">Services</span>
            </h2>
            <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-lg">
              Discover our comprehensive range of professional services designed
              to elevate your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
        <CommentSlider />

        <Vocansiya />

        <ProjectShowcase />
        <FreeConsoulting />
        <Footer />
      </div>
    </>
  );
}

export default Home;
