import style from "./App.module.sass";
import { Link, Route, Switch } from "react-router-dom";
import { ContactPage } from "./pages/contact/ContactPage";
import { HomePage } from "./pages/home/HomePage";
import React from "react";
import { ConfirmSubscriptionPage } from "./pages/confirm-subscription/ConfirmSubscriptionPage";
import { BlogPage } from "./pages/blog/BlogPage";
import { AboutPage } from "./pages/about/AboutPage";
import { TechPage } from "./pages/tech/TechPage";
import { Logo } from "./components/Logo";
import { HeartFill } from "react-bootstrap-icons";
import { Linkedin } from "./components/LinkedIn";

export const App = () => {
    return (
        <div className={style["App"]}>
            <header className={style["App-header"]}>
                <nav>
                    <div>
                        <Link to="/" className={style['pull-left']}>
                            <Logo image />
                        </Link>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/tech">Tech</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <div className={style['App-content']}>
                <Switch>
                    <Route path="/tech">
                        <TechPage />
                    </Route>
                    <Route path="/about">
                        <AboutPage />
                    </Route>
                    <Route path="/contact">
                        <ContactPage />
                    </Route>
                    <Route path="/confirm-subscription">
                        <ConfirmSubscriptionPage />
                    </Route>
                    <Route path="/blog/:id">
                        <BlogPage />
                    </Route>
                    <Route path="/blog">
                        <BlogPage />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </div>
            <footer className={style['App-footer']}>
                <div className="centreContent">
                <div>
                    <Logo image />
                    <div>Made with <HeartFill color="red" /> in Éire</div>
                    © eofis ltd 2022
                </div>
                <div>
                    <h4>Help &amp; Support</h4>
                    <Link to="/contact">Contact Us</Link>
                </div>
                <div>
                    <h4>Social</h4>
                    <Linkedin name="eofis" url="https://www.linkedin.com/company/eofis-ie/" />
                </div>
                </div>
            </footer>
        </div>
    );
};
