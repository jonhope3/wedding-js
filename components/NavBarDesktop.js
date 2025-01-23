import styles from "../styles/NavBarDesktop.module.scss";

function NavBarDesktop({isVisible}) {
    return (
        <nav className={`${styles.nav} ${isVisible ? '' : styles.hidden}`}>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#event-details">Details</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#registry">Registry</a></li>
            </ul>
        </nav>
    );
}

export default NavBarDesktop;
