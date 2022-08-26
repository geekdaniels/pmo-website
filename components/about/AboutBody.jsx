import Image from "next/image";
import pmo1 from "../../public/images/pmo1.JPG"
import pmo2 from "../../public/images/pmo2.JPG"
import pmo3 from "../../public/images/pmo3.JPG"
import pmo4 from "../../public/images/pmo4.JPG"
import pmo5 from "../../public/images/pmo5.JPG"
const AboutBody = () => {
  return (
    <div>
      <div className=" lg:pb-16 md:pb-4">
        <div className="lg:flex md:container md:m-auto w-full max-h-fit pb-5">
          <div className="font-sans font-normal text-lg md: text-start m-auto p-8">
            <h4><span className="font-semibold text-2xl">Lorem ipsum dolor sit amet consectetur</span> adipisicing elit. Molestiae, nam sapiente culpa doloremque amet delectus eveniet, nihil saepe magnam at illum iste commodi in blanditiis, consectetur quia velit repellat cumque laborum autem? <span className="font-semibold text-2xl">Dignissimos nobis quasi consequuntur</span> excepturi aut temporibus. Non obcaecati culpa hic veritatis similique quas esse laborum eligendi velit?</h4>
          </div>
          <div className="" width={2400} height={3600}>
            <Image src={pmo2}
              className="object-cover object-top h-full lg:scale-90" alt="" />
          </div>
        </div>
      </div>

      <div className="">
        <div className="lg:flex md:container md:m-auto w-full">
          <div className="md:container p-4">
            <Image src={pmo3} className=" object-cover h-full " alt="" />
          </div>
          <div className="font-sans font-normal text-lg m-auto md:text-start p-8">
            <h4><span className="font-semibold text-2xl">Lorem ipsum dolor sit amet consectetur</span> adipisicing elit. Molestiae, nam sapiente culpa doloremque amet delectus eveniet, nihil saepe magnam at illum iste commodi in blanditiis, consectetur quia velit repellat cumque laborum autem? <span className="font-semibold text-2xl">Dignissimos nobis quasi consequuntur</span> excepturi aut temporibus. Non obcaecati culpa hic veritatis similique quas esse laborum eligendi velit?</h4>
          </div>

        </div>
      </div>

      <div className="pb-8">
        <div className="lg:flex md:container md:m-auto w-full">

          <div className="font-sans font-normal text-lg md:text-justify m-auto lg:text-justify p-8">
            <h4><span className="font-semibold text-2xl">Lorem ipsum dolor sit amet consectetur</span> adipisicing elit. Molestiae, nam sapiente culpa doloremque amet delectus eveniet, nihil saepe magnam at illum iste commodi in blanditiis, consectetur quia velit repellat cumque laborum autem? <span className="font-semibold text-2xl">Dignissimos nobis quasi consequuntur</span> excepturi aut temporibus. Non obcaecati culpa hic veritatis similique quas esse laborum eligendi velit?</h4>
          </div>

        </div>
      </div>

      <div className="">
        <div className="lg:flex md:container md:m-auto w-full max-h-fit pb-5">

          <div className="font-sans font-normal text-lg m-auto p-8">
            <h4><span className="font-semibold text-2xl">Lorem ipsum dolor sit amet consectetur</span> adipisicing elit. Molestiae, nam sapiente culpa doloremque amet delectus eveniet, nihil saepe magnam at illum iste commodi in blanditiis, consectetur quia velit repellat cumque laborum autem? <span className="font-semibold text-2xl">Dignissimos nobis quasi consequuntur</span> excepturi aut temporibus. Non obcaecati culpa hic veritatis similique quas esse laborum eligendi velit?</h4>
          </div>
          <div className="" width={2400} height={3600}>
            <Image src={pmo4}
              className="object-cover object-top h-full lg:scale-75 " alt="" />
          </div>
        </div>
      </div>

      <div className="">
        <div className="lg:flex md:container md:m-auto w-full max-h-fit pb-2">
          <div className="md:container" width={2400} height={3600}>
            <Image src={pmo5}
              className="object-cover object-top h-full lg:scale-90 " alt="" />
          </div>
          <div className="font-sans font-normal text-justify text-lg m-auto p-8">
            <h4><span className="font-semibold text-2xl">Lorem ipsum dolor sit amet consectetur</span> adipisicing elit. Molestiae, nam sapiente culpa doloremque amet delectus eveniet, nihil saepe magnam at illum iste commodi in blanditiis, consectetur quia velit repellat cumque laborum autem? <span className="font-semibold text-2xl">Dignissimos nobis quasi consequuntur</span> excepturi aut temporibus. Non obcaecati culpa hic veritatis similique quas esse laborum eligendi velit?</h4>
          </div>

        </div>
      </div>

      <div className="lg:flex flex-wrap lg:mx-auto lg:gap-8 md:container md:m-auto md:py-12 justify-center w-full px-8 py-4">
        <div className="w-full  md:scale-75 pt-2 md:pt-5">
          <Image src={pmo1} className="object-contain  w-auto h-auto mx-auto " alt="" />
        </div>
        <div className="w-full font-sans font-normal  text-lg text-center mx-auto ">
          <h4><span className="font-semibold text-2xl">Lorem ipsum dolor sit amet consectetur</span> adipisicing elit. Molestiae, nam sapiente culpa doloremque amet delectus eveniet, nihil saepe magnam at illum iste commodi in blanditiis, consectetur quia velit repellat cumque laborum autem? <span className="font-semibold text-2xl">Dignissimos nobis quasi consequuntur</span> excepturi aut temporibus. Non obcaecati culpa hic veritatis similique quas esse laborum eligendi velit?</h4>
        </div>

      </div>
    </div>

  )
}
export default AboutBody
