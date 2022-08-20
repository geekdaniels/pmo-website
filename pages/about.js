import AboutHeader from "../components/about/AboutHeader";
import AboutBody from "../components/about/AboutBody";
import AboutFooter from "../components/about/AboutFooter";
const aboutPage = () => {
    return (
        <div className="relative  h-full">
            <div className="p-12 m-12 bg-transparent text-justify bg-gradient-to-r from-cyan-400 to-blue-300">
                <AboutHeader />
                <AboutBody />
                <AboutFooter />
            </div>

        </div>
    )
}

export default aboutPage
