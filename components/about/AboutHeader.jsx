import Image from "next/image";
import pmo from "../../public/images/pmo.webp";
const AboutHeader = () => {
  return (
    <div className="flex gap-4 m-6 ">
      <div className="w-full h-full">
        <Image src={pmo} className="w-full h-full" />
      </div>
      <div className="font-sans font-normal p-12 text-lg m-12 bg-sky-400">
        <h4><span className="font-semibold text-2xl">Lorem ipsum dolor sit amet consectetur</span> adipisicing elit. Molestiae, nam sapiente culpa doloremque amet delectus eveniet, nihil saepe magnam at illum iste commodi in blanditiis, consectetur quia velit repellat cumque laborum autem? <span className="font-semibold text-2xl">Dignissimos nobis quasi consequuntur</span> excepturi aut temporibus. Non obcaecati culpa hic veritatis similique quas esse laborum eligendi velit?</h4>
      </div>

    </div>
  )
}

export default AboutHeader
