import Carousel from "./components/Carousel";
import SearchSlider from "./components/SearchSlider";
import Search from "./components/Searh";
import classnames from "./page.module.css";

const SliderItems = [
    "UX Designer",
    "UI Designer",
    "Front-end Developer",
    "Back-end Developer",
    "IOS Developer",
];

const openPositions = [
    {
        position: "IT Müdürü",
        company: {
            name: "Bosch",
            logo: "bosch.png",
        },
    },
    {
        position: "Front-end Developer",
        company: {
            name: "Aktif Bank",
            logo: "aktifbank.jpg",
        },
    },
    {
        position: "Back-end Developer",
        company: {
            name: "Akbank",
            logo: "akbank.webp",
        },
    },
    {
        position: ".Net Developer",
        company: {
            name: "Arçelik",
            logo: "arc-elik.png",
        },
    },
    {
        position: "Junior .Net Developer",
        company: {
            name: "Allianz",
            logo: "allianz.webp",
        },
    },
    {
        position: "Sales Manager",
        company: {
            name: "Bezmialem Vakıf Üniversitesi",
            logo: "bezmia-lem-vak-f-u-niversitesi-logosu.png",
        },
    },
];

export default function Home() {
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
            <SearchSlider slideItems={SliderItems} />
            <div className={classnames.content}>
                <Carousel
                    title="Öne çıkan iş ilanları"
                    items={[...openPositions, ...openPositions]}
                />
            </div>
            <div id="footer"></div>
        </main>
    );
}
