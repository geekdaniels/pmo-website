import AboutHeader from "../components/about/AboutHeader";
import AboutBody from "../components/about/AboutBody";
import AboutFooter from "../components/about/AboutFooter";
const aboutPage = () => {
    return (
        <div className="relative  h-full  bg-blue-700 p-1">
            <div className="p-2 m-2  text-justify bg-sky-50">
                <AboutHeader />
                <AboutBody />
                <AboutFooter />
            </div>

        </div>
    )
}

export default aboutPage
