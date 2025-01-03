import styles from "../styles/Event.module.scss";

const Event = ({ eventName, eventDate, eventTime, eventLocation, imageUrl }) => {
    return (
        <div className={styles.event}>
            <div className={styles.eventDetails}>
                <h3>{eventName}</h3>
                <p>
                    <strong>Date:</strong> {eventDate}
                </p>
                <p>
                    <strong>Time:</strong> {eventTime}
                </p>
                <p>
                    <strong>Location:</strong> {eventLocation}
                </p>
            </div>
            {imageUrl && (
                <div className={styles.eventImageContainer}> {/* Use styles.eventImageContainer */}
                    <img
                        src={imageUrl}
                        alt={eventName}
                        className={styles.eventImage} // Use styles.eventImage
                    />
                </div>
            )}
        </div>
    );
};

export default Event;