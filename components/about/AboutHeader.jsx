import Image from "next/image";
import pmo from "../../public/images/pmo.webp";
const AboutHeader = () => {
  return (
    <div className=" lg:flex lg:mx-auto lg:gap-8 md:container md:m-auto md:py-12 justify-center w-full px-8">
      <div className="w-full scale-90">
        <Image src={pmo} className=" drop-shadow-xl w-auto h-auto mx-auto border-solid border-blue-700 border-x-8 rounded-full" alt="" />
      </div>
      <div className="w-full font-sans font-normal p-4 text-lg m-auto ">
        <h4><span className="font-semibold text-2xl">Lorem ipsum dolor sit amet consectetur</span> adipisicing elit. Molestiae, nam sapiente culpa doloremque amet delectus eveniet, nihil saepe magnam at illum iste commodi in blanditiis, consectetur quia velit repellat cumque laborum autem? <span className="font-semibold text-2xl">Dignissimos nobis quasi consequuntur</span> excepturi aut temporibus. Non obcaecati culpa hic veritatis similique quas esse laborum eligendi velit?</h4>
      </div>

    </div>
  )
}

export default AboutHeader
