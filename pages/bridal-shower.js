import {useEffect, useState} from 'react';
import Head from 'next/head';
import styles from '../styles/Shower.module.scss';

export default function Home() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
        };

        handleResize(); // Check on initial render
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const numberOfBubbles = isMobile ? 10 : 50;
    const bubbleSpeed = isMobile ? 3 : 1.5;

    const bubbles = Array.from({length: numberOfBubbles}, (_, index) => (
        <div
            key={index}
            className={styles.bubble}
            style={{
                left: `${Math.random() * 100}%`,
                width: `${15 + Math.random() * 5}px`,
                height: `${15 + Math.random() * 5}px`,
                animationDuration: `${bubbleSpeed + Math.random() * 1}s`,
                animationDelay: `${Math.random() * 2}s`,
            }}
        />
    ));

    return (
        <div className={styles.container}>
            <Head>
                <title>Ashley & Jon | Bridal Shower</title>
                <meta name="description" content="Ashley's Bridal Shower Invite"/>
                <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH}/wedding-shower/champagne.png`}/>
            </Head>

            <div className={styles.background}></div>
            <div className={styles.bubbles}>
                {bubbles}
            </div>
            <div className={styles.overlay}>
                <h1>You're Invited!</h1>
                <h2>Ashley’s Bridal Shower</h2>
                <p className={styles.description}>
                    Join us for brunch and bubbly as we celebrate Ashley getting married!
                </p>
                <div className={styles.details}>
                    <p><strong>Date:</strong> Saturday, July 26, 2025</p>
                    <p><strong>Time:</strong> 11:00 AM</p>
                    <p><strong>Location:</strong> <a
                        href="https://maps.app.goo.gl/oBNTtptPLikTuVt37"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{borderBottom: '1px dotted currentColor'}}> Heirloom Haul | Frisco, TX</a>
                    </p>
                    <p style={{fontSize: '.9em', fontStyle: 'italic'}}>*Please RSVP by July 1st*</p>
                </div>
                <div className={styles.buttons}>
                    {/*<a href="#rsvp" className={styles.rsvpButton}>RSVP</a>*/}
                    <a href="https://withjoy.com/teinert-hope/registry" className={styles.registryButton}
                       target="_blank" rel="noopener noreferrer">View Registry</a>
                </div>
            </div>
        </div>
    );
}