import styles from "../styles/Event.module.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendar, faClock} from '@fortawesome/free-regular-svg-icons';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';


const Event = ({eventName, eventDate, eventTime, eventLocation, iframeSourceUrl}) => {
    return (
        <div className={styles.event}>
            <div className={styles.eventDetails}>
                <h3>{eventName}</h3>
                <p>
                    <FontAwesomeIcon icon={faCalendar} style={{marginRight: '4px'}}/> {eventDate}
                </p>
                <p>
                    <FontAwesomeIcon icon={faClock} style={{marginRight: '4px'}}/> {eventTime}
                </p>
                <p>
                    <FontAwesomeIcon icon={faLocationDot} style={{marginRight: '4px'}}/> {eventLocation}
                </p>
            </div>
            {iframeSourceUrl && (
                <div className={styles.eventImageContainer}>
                    <div className={styles.iframeWrapper}>
                        <iframe
                            src={iframeSourceUrl}
                            style={{border: 0}}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Event;