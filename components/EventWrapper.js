import styles from "../styles/EventWrapper.module.scss";

const EventWrapper = ({ children }) => {
    return (
        <div className={styles.eventWrapper}>
            {children}
        </div>
    );
};

export default EventWrapper;