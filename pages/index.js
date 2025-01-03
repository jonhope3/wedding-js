import {useEffect, useState} from 'react';
import {Parallax, ParallaxBanner, ParallaxProvider} from 'react-scroll-parallax';
import styles from '../styles/Home.module.scss';
import MapComponent from "../components/MapComponent";
import NavBar from "../components/NavBar";

export default function Home() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <ParallaxProvider>
            <div className={styles.container}>

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
                                <button className={styles.rsvpButton}>
                                    SAVE OUR DATE
                                </button>
                            </div>
                        </ParallaxBanner>

                        {/*<section id="details" className={styles.section}>*/}
                        {/*    <Parallax translateY={[-15, 15]}>*/}
                        {/*        <h2>Wedding Details</h2>*/}
                        {/*        <p>Join us for our celebration!</p>*/}
                        {/*        <ul>*/}
                        {/*            <li>Date: October 18, 2025</li>*/}
                        {/*            <li>Time: 4:30 PM CDT</li>*/}
                        {/*            <li>Venue: TO BE ADDED</li>*/}
                        {/*            <li>Dress Code: TO BE ADDED</li>*/}
                        {/*        </ul>*/}
                        {/*        <GMap/>*/}
                        {/*    </Parallax>*/}
                        {/*</section>*/}

                        {/*<ParallaxBanner*/}
                        {/*    layers={[*/}
                        {/*        {*/}
                        {/*            image: `${process.env.NEXT_PUBLIC_BASE_PATH}/beach-hd.jpeg`,*/}
                        {/*            speed: -15*/}
                        {/*        }*/}
                        {/*    ]}*/}
                        {/*    className={styles.parallaxBanner}*/}
                        {/*>*/}
                        {/*    <div className={styles.overlayContent}>*/}
                        {/*        <h2>"To love and be loved is to feel the sun from both sides."</h2>*/}
                        {/*        <p>- David Viscott</p>*/}
                        {/*    </div>*/}
                        {/*</ParallaxBanner>*/}

                        {/*<section id="rsvp" className={styles.section}>*/}
                        {/*    <Parallax translateY={[-10, 10]}>*/}
                        {/*        <h2>RSVP</h2>*/}
                        {/*        <p>We would be honored to have you join us on our special day. Please RSVP by July 1,*/}
                        {/*            2025.</p>*/}
                        {/*        <button className={styles.rsvpButtonSection}>RSVP NOW</button>*/}
                        {/*    </Parallax>*/}
                        {/*</section>*/}
                    </>
                )}
            </div>
        </ParallaxProvider>
    );
}