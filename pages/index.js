import {useEffect, useState} from 'react';
import {ParallaxBanner, ParallaxProvider} from 'react-scroll-parallax';
import styles from '../styles/Home.module.scss';
import NavBar from "../components/NavBar";
import Event from "../components/EventComponent";
import EventWrapper from "../components/EventWrapper";

export default function Home() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <ParallaxProvider>
            <div id="home" className={styles.container}>

                <NavBar/>

                {mounted && (
                    <>
                        <ParallaxBanner
                            layers={[
                                {
                                    image: `${process.env.NEXT_PUBLIC_BASE_PATH}/beach-hd.jpeg`,
                                    speed: -50
                                }
                            ]}
                            className={styles.parallaxBannerLight}
                        >
                            <div className={styles.overlayContent}>
                                <h2>Ashley & Jon</h2>
                                <h3>October 18, 2025</h3>
                                <button className={styles.rsvpButton} onClick={() => {
                                    if (confirm("Download Calendar Invite?")) {
                                        console.log("Canceling calendar invite");
                                    } else {
                                        console.log("Canceling calendar invite");
                                    }
                                }}>
                                    SAVE OUR DATE
                                </button>
                            </div>
                        </ParallaxBanner>

                        <section id="event-details" className={styles.section}>
                            <EventWrapper>
                                <Event
                                    eventName="Welcome Bonfire"
                                    eventDate="October 16, 2025"
                                    eventTime="5:00 PM CDT"
                                    eventLocation="Miramar Beach, FL"
                                    imageUrl={`${process.env.NEXT_PUBLIC_BASE_PATH}/placeholder200.png`}
                                />

                                <Event
                                    eventName="Wedding Ceremony"
                                    eventDate="October 18, 2025"
                                    eventTime="4:00 PM CDT"
                                    eventLocation="Miramar Beach, FL"
                                    imageUrl={`${process.env.NEXT_PUBLIC_BASE_PATH}/placeholder200.png`}
                                />

                                <Event
                                    eventName="Reception"
                                    eventDate="October 18, 2025"
                                    eventTime="4:30 PM CDT"
                                    eventLocation="Miramar Beach, FL"
                                    imageUrl={`${process.env.NEXT_PUBLIC_BASE_PATH}/placeholder200.png`}
                                />
                            </EventWrapper>
                        </section>
                    </>
                )}
            </div>
        </ParallaxProvider>
    );
}