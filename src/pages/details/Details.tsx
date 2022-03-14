import "./details.scss";
import Header from "../../components/layout/header/Header";
import recentProjects from "./recentProject.json";
// import useStore, { request } from "../../useStore";
import { IoIosLink } from "react-icons/io";

const RecentProjectItem = (props: any) => {
    const { imgURL, title, iconURL, siteURL, gitURL } = props;
    return (
        <div>
            <div>
                <span>
                    <img src={iconURL} alt="No Icon" />
                    &nbsp;<b>{title}</b>
                </span>
            </div>
            <span>
                <img src={imgURL} alt="recentproject" />
            </span>
            <span>
                <a href={siteURL}>
                    Link {title} Site&nbsp;
                    <IoIosLink />
                </a>
                <div></div>
                <a href={gitURL}>
                    Link {title} Github&nbsp;
                    <IoIosLink />
                </a>
                <div></div>
            </span>
        </div>
    );
};

const Detail = () => {
    return (
        <div className="background">
            <div className="container details">
                <Header />
                <div className="title">
                    <h2>We Design with care and Develop with precision</h2>
                    <h1>Our Recent Projects</h1>
                </div>

                <section className="container recent">
                    <div className="row items">
                        {recentProjects.map((item: any, index: number) => {
                            return (
                                <RecentProjectItem
                                    key={index}
                                    iconURL={item.iconURL}
                                    imgURL={item.imgURL}
                                    title={item.title}
                                    siteURL={item.siteURL}
                                    gitURL={item.gitURL}
                                />
                            );
                        })}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Detail;
