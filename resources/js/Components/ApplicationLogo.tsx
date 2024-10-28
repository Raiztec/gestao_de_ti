const  ApplicationLogo = () => {
    return (<img src="./image/Logos/logo_main.svg" alt="Logo" width="256" height="256" /> );
}

const ApplicationLogoWhite = () => {
    return (<img src="./image/Logos/logo_white.svg" alt="logo" width="256" height="256" />);
}

ApplicationLogo.white = ApplicationLogoWhite;

export default ApplicationLogo;