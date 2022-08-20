import AboutHeader from "../components/about/AboutHeader";
import AboutBody from "../components/about/AboutBody";
import AboutFooter from "../components/about/AboutFooter";
const aboutPage = () => {
    return (
        <div className="relative bg-sky-500 h-full">
            <div className="px-12 m-12  bg-sky-300 text-justify bg-gradient-to-r from-cyan-400 to-blue-300">
                <AboutHeader />
                <AboutBody />
                <AboutFooter />
            </div>

        </div>
    )
}

export default aboutPage
