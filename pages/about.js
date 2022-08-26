import AboutHeader from "../components/about/AboutHeader";
import AboutBody from "../components/about/AboutBody";
import AboutFooter from "../components/about/AboutFooter";
const aboutPage = () => {
    return (
        <div className="relative">
            <div className="mx-auto">
                <AboutHeader />
                <AboutBody />
            </div>

        </div>
    )
}

export default aboutPage
