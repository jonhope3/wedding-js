import styles from "../styles/TextComponent.module.scss";


const TextComponent = ({ children }) => {
    return (
        <div className={styles.textComponent}>
            {children}
        </div>
    );
};

export default TextComponent;