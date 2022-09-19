const TextComp = ({title, children}) => {
  return (
    <div className="px-10 my-3 bg-[#EDEDED] py-7 rounded-lg xl:shadow-xl">
      <h2 className="text-3xl text-black font-bold text-center mb-4">{title}</h2>
      <p>
        <span className="font-bold ">MARTINS OLUSAKIN</span> is the Founder and Executive Director of Cornerstone Youth Development Centre (CYDC), a youth based and not-for-profit organization which setup to build new generational leaders. Martins Olusakin is an experienced social sector expert with special focus in youth leadership and entrepreneur development, and capacity building. He is seasoned Motivational Speaker, Life Coach, Mentor and Shepherd who has over a decade experience working with young adults.
        He has served as programme coordinator, facilitator and board member to various youth organizations. He pioneered a youth group called The Gatekeepers in 2004, through this initiative he led his team in organising different kind of seminars, conferences, workshops, symposia etc for youth empowerment and value creation. He has served as a Professional Role Model at YMCA Camp Crosely in North Webster Indiana USA 2008. He has also represented Nigeria in different youth international forums like International Student Week in Ilmenau (ISWI), Germany in 2009 and 2011 where he spoke on “How to use your passion as a tool for social transformation” and “Challenges of Africa Leadership and path ways to freedom” respectively.
        He is currently a Pastor at Solomon’s Porch, a vibrant Youth Church within RCCG, in Surulere-Lagos with a mandate of raising generation of great change.He loves researching and strategizing for national reorientation and development, also enjoys counseling and providing encouragement to others. Martins is the author of Purpose Alignment and Get intimate.
      </p>
      {children}
    </div>
  )
}

export default TextComp
