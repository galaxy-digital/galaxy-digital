import "./index.scss";
import React from "react";
import { Link } from "react-router-dom";
import Particle from "../components/particle/Particle";
import Header from "../components/layout/header/Header";

import Blockchain from "../assets/images/blockchain.webp";
import Unity from "../assets/images/unity.webp";
import Web from "../assets/images/web.webp";

import Defi from "../assets/images/defi.webp";
import NFT from "../assets/images/nft.webp";
import Other from "../assets/images/solution.webp";
import Netcode from "../assets/images/netcode.webp";
import Communication from "../assets/images/communication.webp";
import Lobby from "../assets/images/lobby.webp";
import Design from "../assets/images/design.webp";
import Technology from "../assets/images/technology.webp";
import Customer from "../assets/images/customer.webp";

import useStore from "../useStore";

const Home = () => {
    const G = useStore();

    return (
        <div className="home">
            <header className="title-section">
                <Particle />
                <div className="container">
                    <Header />
                    <div className="team-content">
                        <h1>Galaxy Team</h1>
                        <h4>
                            We provide dedicated R&D teams with unbelievable 98%
                            client retention rate.
                            <br />
                            <br />
                            We give you much more than software programming
                            skills.
                        </h4>
                    </div>
                </div>
            </header>
            <section id="services" className="container services">
                <h2>Our Services</h2>
                <div className="row items">
                    <div>
                        <div className="image">
                            <img src={Blockchain} alt="Blockchain" />
                        </div>
                        <div className="description">
                            <span>
                                <b>Blockchain Development</b>
                            </span>
                            <span className="fill">
                                We bring you the best in blockchain development
                                services, combining technical prowess with
                                extensive business experience. We have more than
                                25 blockchain projects under our belt. We can
                                help you.
                            </span>

                            <Link to="/details">
                                <div>Learn More</div>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="image">
                            <img src={Unity} alt="Unity" />
                        </div>
                        <div className="description">
                            <span>
                                <b>Game Development</b>
                            </span>
                            <span className="fill">
                                Professional website design crafted by web
                                design's leading artistic minds. We create a
                                custom digital experience that engages and
                                inspires your audience.
                            </span>
                            <Link to="/details">
                                <div>Learn More</div>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="image">
                            <img src={Web} alt="Web" />
                        </div>
                        <div className="description">
                            <span>
                                <b>Website Development</b>
                            </span>
                            <span className="fill">
                                We are an agile software team providing both
                                back-end and front-end development. Our teams
                                build web applications powered by bulletproof
                                code, with stunning interfaces.
                            </span>
                            <Link to="/details">
                                <div>Learn More</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="strategy">
                <div className="container">
                    <div></div>
                    <div>
                        <h2>What our clients say about us</h2>
                        <span>
                            We have significant experience of work on
                            cybersecurity and data management projects for
                            leading technology vendors. Delivering expert driver
                            development, system programming, and reverse
                            engineering skills, we assist our clients with the
                            most innovative and challenging projects.
                        </span>
                    </div>
                </div>
            </section>

            <section id="solutions" className="container solutions">
                <h2>Our Solutions</h2>
                <div className="row items">
                    <div>
                        <img src={Other} alt="solution" />
                        <div>
                            <span>
                                <b>Blockchain Development</b>
                            </span>
                            <span>
                                Crypto-enterprises, Ethereum projects, and
                                established institutions are building on the
                                Ethereum blockchain. We have developed a suite
                                of developer products to jumpstart decentralized
                                application production—from Ethereum
                                infrastructure and test environments to
                                developer tools and smart contract audits.
                            </span>
                        </div>
                    </div>
                    <div>
                        <img src={Defi} alt="defi" />
                        <div>
                            <span>
                                <b>DeFi for Institutions</b>
                            </span>
                            <span>
                                Decentralized Finance (DeFi) unlocks untold
                                amounts of economic opportunity. Financial
                                institutions, crypto enterprises, exchanges, and
                                funds seek to engage and capitalize on
                                opportunities created by this new economic
                                system. We offer several blockchain solutions to
                                facilitate entry and participation in DeFi.
                            </span>
                        </div>
                    </div>
                    <div>
                        <img src={NFT} alt="nft" />
                        <div>
                            <span>
                                <b>NFT Experiences</b>
                            </span>
                            <span>
                                The global NFT market has emerged as a
                                significant and growing subsegment of the
                                digital assets market in recent months, with a
                                gross transaction value of $370 billion. At
                                Galaxy Digital, we leverage our deep
                                understanding of the NFT market to build a
                                white-label NFT experience for your
                                organization.
                            </span>
                        </div>
                    </div>
                    <div>
                        <img src={Netcode} alt="netcode" />
                        <div>
                            <span>
                                <b>Build a reliable foundation for your game</b>
                            </span>
                            <ul>
                                <li>
                                    <span>
                                        <strong>
                                            Netcode for GameObjectsᴮᴱᵀᴬ{" "}
                                        </strong>
                                        GameObject-based multiplayer backend
                                        framework
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <strong>Netcode for Entities </strong>
                                        Entity-based multiplayer backend
                                        framework
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <img src={Lobby} alt="lobby" />
                        <div>
                            <span>
                                <b>
                                    Connect your players at scale, wherever they
                                    are
                                </b>
                            </span>
                            <ul>
                                <li>
                                    <span>
                                        <strong>Relayᴮᴱᵀᴬ</strong>
                                        Peer-to-peer networking
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <strong>Lobbyᴮᴱᵀᴬ</strong>
                                        Custom private and public game lobbies
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <strong>Multiplay (Contact us)</strong>
                                        Launch-ready game server hosting
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <strong>Matchmaker (Contact us)</strong>
                                        Multiplayer matchmaking services
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <img src={Communication} alt="communication" />
                        <div>
                            <span>
                                <b>
                                    Enable healthy and positive social
                                    experiences
                                </b>
                            </span>
                            <ul>
                                <li>
                                    <span>
                                        <strong>Vivox</strong>
                                        In-game voice and chat services
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <strong>
                                            Community and safety (coming soon)
                                        </strong>
                                        Player safety analysis and management
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <img src={Design} alt="slasher" />
                        <div>
                            <span>
                                <b>Design and Architecture</b>
                            </span>
                            <span>
                                Galaxy Digital creates architectures for
                                structured solutions that meet your business and
                                technical requirements and develop design plans
                                that identify the different elements that make
                                up your solution and show how they work
                                together.
                            </span>
                        </div>
                    </div>
                    <div>
                        <img src={Technology} alt="cryptowolf" />
                        <div>
                            <span>
                                <b>Technology and Engineering</b>
                            </span>
                            <span>
                                Our specialists work diligently to comprehend
                                the client’s business processes, and, as a
                                result, have an understanding of the whole
                                concept of the desired solution.
                            </span>
                        </div>
                    </div>
                    <div>
                        <img src={Customer} alt="atari" />
                        <div>
                            <span>
                                <b>Customer success </b>
                            </span>
                            <span>
                                Galaxy Digital goes beyond classical support
                                services and are ready to write your business
                                success story together. Explore more
                                opportunities for your business with a proven
                                plan aligned with your goals and priorities.
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="future">
                <div className="container">
                    <h2>What our clients say about us</h2>
                    <span>
                        We have significant experience of work on cybersecurity
                        and data management projects for leading technology
                        vendors. Delivering expert driver development, system
                        programming, and reverse engineering skills, we assist
                        our clients with the most innovative and challenging
                        projects.
                    </span>
                </div>
            </section>

            <footer></footer>
        </div>
    );
};

export default Home;
