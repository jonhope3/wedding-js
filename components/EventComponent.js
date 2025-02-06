import styles from "../styles/Event.module.scss";
import {FaRegCalendar, FaRegClock} from 'react-icons/fa';
import {PiMapPinBold} from "react-icons/pi";

const Event = ({
                   eventName,
                   eventDate,
                   eventTime,
                   eventLocation,
                   eventLocationLink,
                   iframeSourceUrl,
                   eventDescription
               }) => {
    return (
        <div className={styles.event}>
            <div className={styles.eventDetails}>
                <h3>{eventName}</h3>
                <p>
                    <FaRegCalendar style={{marginRight: '4px'}}/> {eventDate}
                </p>
                <p>
                    <FaRegClock style={{marginRight: '4px'}}/> {eventTime}
                </p>
                <p>
                    <PiMapPinBold style={{marginRight: '4px'}}/>
                    <a href={eventLocationLink} target="_blank" rel="noopener noreferrer">
                        {eventLocation}
                    </a>
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
            <div>
                <p>{eventDescription}</p>
            </div>
        </div>
    );
};

export default Event;