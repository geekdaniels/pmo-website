import Image from "next/image";
import pmo from "../../public/images/pmo.webp";
const AboutHeader = () => {
  return (
    <div className="lg:flex lg:mx-4 lg:gap-8 md:container md:m-auto md:py-12 ">
      <div className="w-full">
        <Image src={pmo} className="w-auto h-auto mx-auto" />
      </div>
      <div className="w-full font-sans font-normal p-4 text-lg m-auto ">
        <h4><span className="font-semibold text-2xl">Lorem ipsum dolor sit amet consectetur</span> adipisicing elit. Molestiae, nam sapiente culpa doloremque amet delectus eveniet, nihil saepe magnam at illum iste commodi in blanditiis, consectetur quia velit repellat cumque laborum autem? <span className="font-semibold text-2xl">Dignissimos nobis quasi consequuntur</span> excepturi aut temporibus. Non obcaecati culpa hic veritatis similique quas esse laborum eligendi velit?</h4>
      </div>

    </div>
  )
}

export default AboutHeader
