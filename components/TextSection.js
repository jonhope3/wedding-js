import styles from "../styles/TextSection.module.scss";


const TextSection = ({children}) => {
    return (
        <div className={styles.textComponent}>
            {children}
        </div>
    );
};

export default TextSection;