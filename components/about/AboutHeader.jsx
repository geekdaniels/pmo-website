import Image from "next/image";
import pmo from "../../public/images/pmo.webp";
const AboutHeader = () => {
  return (
    <div className=" drop-shadow-2xl shadow-sm shadow-gray-200  lg:flex lg:mx-auto lg:gap-8 md:container md:m-auto md:py-12 justify-center w-full px-8">
      <div className="w-full scale-90">
        <Image src={pmo} className=" drop-shadow-xl w-auto h-auto mx-auto  rounded-tr-3xl rounded-bl-3xl" alt="" />
      </div>
      <div className="w-full font-sans font-normal p-4 text-xl m-auto text-left">
        <h4><span className="font-semibold text-4xl"><em><u>Welcome!</u></em> I am Martins Olusakin</span> <br /><br />A <span className="font-semibold text-2xl">seasoned</span> Motivational Speaker, Life Coach, Mentor and Shepherd.<br />The Founder and Executive Director of <em><b>Cornerstone Youth Development Centre (CYDC)</b></em>, a youth based and not-for-profit organization which setup to build new <b>generational leaders</b>.<span className="font-semibold text-xl"> <br />I have over a decade experience working with young adults.</span> I have served as <b>programme coordinator, facilitator and board member</b> to various youth organizations. I pioneered a youth group called <b>The Gatekeepers</b> in 2004, through this initiative he led his team in organising different kind of seminars, conferences, workshops, symposia etc for youth empowerment and value creation. <p><b><em>I am the author of Purpose Alignment and Get intimate</em></b></p></h4>
      </div>

    </div>
  )
}

export default AboutHeader
