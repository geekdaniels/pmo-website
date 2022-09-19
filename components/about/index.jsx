import ImageComp from "./imageComp";
import TextComp from "./textComp";

import Image from "next/image";
import pmo1 from "../../public/images/pmo1.JPG"
import pmo2 from "../../public/images/pmo2.JPG"
import pmo3 from "../../public/images/pmo3.JPG"
import pmo4 from "../../public/images/pmo4.JPG"
import pmo5 from "../../public/images/pmo5.JPG"
const About = () => {
  return (
    <section className="py-6 px-4 bg-[#A6DCEC] md:px-5">
      <section className="items-center text-[11px] xl:grid xl:grid-cols-7">
        <div className="col-span-2"></div>
        <div className="col-span-5">
          <ImageComp 
            src={pmo5}
          />
        </div>
      </section>
      <section className="text-justify  xl:w-[40%] lg:text-[12.5px] xl:absolute xl:top-[10%]">
        <TextComp />
      </section>
    </section>

  )
}
export default About

