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
            <div id="content"></div>
            <div id="footer"></div>
        </main>
    );
}
