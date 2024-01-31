import Carousel from "./components/Carousel";
import OurPartners from "./components/OurPartners";
import SearchSlider from "./components/SearchSlider";
import Search from "./components/Searh";
import Suggestions from "./components/Suggestions";
import TitledImage from "./components/TitledImage";
import { openPositions } from "./constants";
import classnames from "./page.module.css";

function Home() {
    return (
        <main className={classnames.main}>
            <div className={classnames.header}>
                <img
                    src="/assets/logo.png"
                    alt="logo"
                    className={classnames.logo}
                />
                <img
                    src="/assets/header-text.png"
                    alt="find your teammate"
                    className={classnames.headerText}
                />
                <Search />
            </div>
            <SearchSlider />
            <div className={classnames.content}>
                <Carousel
                    title="Öne çıkan iş ilanları"
                />
                <div className={classnames.titledImages}>
                    <TitledImage
                        image="/assets/employee.png"
                        titles={["İş Ara", "Profilini Oluştur"]}
                    />
                    <TitledImage
                        image="/assets/employer.png"
                        titles={["İş Veren Çözümleri"]}
                    />
                </div>
                <OurPartners />
                <Suggestions />
            </div>
            <div id="footer"></div>
        </main>
    );
}

export default Home;
