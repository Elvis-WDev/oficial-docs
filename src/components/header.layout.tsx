import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useAppDispatch } from "../hooks/hooks";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { onSelectMode } from "../redux/ui/ui.slice";

export const Header = (): JSX.Element => {

    const darkmode = localStorage.getItem('darkMode')

    const dispatch = useAppDispatch();

    const { AuthLogout } = useAuth();

    const handleLogout = (): void => {
        dispatch(AuthLogout());
    };
    const [showDarkMode, setDarkMode] = useState(false);

    const handleChangeMode = () => setDarkMode((mode) => !mode);

    useEffect(() => {

        dispatch(onSelectMode(showDarkMode))

    }, [showDarkMode])

    useEffect(() => {

        let bool = false

        if (darkmode == "true") {
            bool = true
        }

        setDarkMode(bool)

    }, [])

    return (
        <>

            <header
                className="uk-background-primary uk-background-norepeat uk-background-cover uk-background-center-center uk-light"
                style={{ backgroundImage: 'url(./background3.jpg)' }}>
                <nav className="uk-navbar-container">
                    <div className="uk-container">
                        <div data-uk-navbar>
                            <div className="uk-navbar-left">
                                <Link className="uk-navbar-item uk-logo uk-visible@m" to={'/'}>
                                    <img
                                        src="./logo.png"
                                        alt="Logo"
                                        width={'40px'}
                                        height={'40px'}

                                    />
                                </Link>
                            </div>
                            <div className="uk-navbar-center uk-hidden@m">
                                <Link className="uk-navbar-item uk-logo" to={'/'}><img
                                    src="./logo.png"
                                    alt="Logo"
                                    width={'30px'}
                                    height={'30px'}

                                /></Link>
                            </div>
                            <div className="uk-navbar-right">
                                <ul className="uk-navbar-nav uk-visible@m">
                                    <li>
                                        <IconButton onClick={handleChangeMode} sx={{ height: '100%', color: 'white' }} aria-label="delete" size="large">

                                            {showDarkMode ? (<DarkModeIcon />) : (<WbSunnyIcon />)}

                                        </IconButton>
                                    </li>
                                    <li><Link to={'/'}>Home</Link ></li>
                                    <li><Link to={''} onClick={handleLogout}>Salir</Link ></li>
                                </ul>
                                <ul className="uk-navbar-nav uk-hidden@m">
                                    <li>
                                        <IconButton onClick={handleChangeMode} sx={{ height: '100%', color: 'white' }} aria-label="delete" size="large">

                                            {showDarkMode ? (<DarkModeIcon />) : (<WbSunnyIcon />)}

                                        </IconButton>
                                    </li>
                                    <li><Link to={''} onClick={handleLogout}>Salir</Link ></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="uk-section uk-position-relative uk-position-z-index"
                    data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; repeat: true">
                    <div className="uk-container">
                        <h1 className="uk-text-center uk-margin-remove-top">Apuntes de clases</h1>
                        <div className="hero-search uk-margin-medium-top">
                            <form className="uk-search uk-search-default uk-width-1-1" name="search-hero">
                                <span data-uk-search-icon="ratio: 1.2"></span>
                                <input id="search-hero" className="uk-search-input uk-form-large uk-border-rounded" type="search"
                                    placeholder="Buscar..." autoComplete="off" data-minchars="1" data-maxitems="30" />
                            </form>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};