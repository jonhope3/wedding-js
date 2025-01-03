import styles from "../styles/Navbar.module.scss";

function NavBar() {

    return (
        <nav className={styles.nav}>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#details">Details</a></li>
                <li><a href="#rsvp">RSVP</a></li>
            </ul>
        </nav>);
}

export default NavBar;