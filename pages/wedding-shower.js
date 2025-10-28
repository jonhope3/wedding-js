import {useEffect, useState, useRef} from 'react';
import Head from 'next/head';
import styles from '../styles/Shower.module.scss';

export default function Home() {
    const [isMobile, setIsMobile] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef(null);
    const closeBtnRef = useRef(null);

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

    // Open modal popup when RSVP isn't live yet
    const handleRSVPClick = () => {
        setShowModal(true);
    };

    const closeModal = () => setShowModal(false);

    // Accessibility: focus management and keyboard handlers for modal (Escape to close, Tab trap)
    useEffect(() => {
        if (!showModal) return;

        // focus the close button when modal opens
        const focusTimer = setTimeout(() => {
            closeBtnRef.current?.focus();
        }, 0);

        const onKeyDown = (e) => {
            if (e.key === 'Escape') {
                e.preventDefault();
                setShowModal(false);
                return;
            }

            if (e.key === 'Tab') {
                const modalNode = modalRef.current;
                if (!modalNode) return;
                const focusable = modalNode.querySelectorAll('button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])');
                if (focusable.length === 0) {
                    e.preventDefault();
                    return;
                }
                const first = focusable[0];
                const last = focusable[focusable.length - 1];

                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };

        document.addEventListener('keydown', onKeyDown);

        return () => {
            clearTimeout(focusTimer);
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [showModal]);

    const numberOfGolfBalls = isMobile ? 10 : 15;
    const ballSpeed = 5

    const golfBalls = Array.from({length: numberOfGolfBalls}, (_, index) => (
        <div
            key={index}
            className={styles.golfBall}
            style={{
                left: `${Math.random() * 100}%`,
                width: `${20 + Math.random() * 5}px`,
                height: `${20 + Math.random() * 5}px`,
                animationDuration: `${ballSpeed + Math.random() * 1}s`,
                animationDelay: `${Math.random() * 2}s`,
            }}
        />
    ));

    return (
        <div className={styles.container}>
            <Head>
                <title>Ashley & Jon | Wedding Shower</title>
                <meta name="description" content="Ashley & Jon's Wedding Shower"/>
                <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH}/wedding-shower/golf-ball.png`}/>
            </Head>

            <div className={styles.background}></div>
            <div className={styles.golfBalls}>
                {golfBalls}
            </div>
            <div className={styles.overlay}>
                <h1>You're Invited!</h1>
                <h2>Ashley & Jon's Wedding Shower</h2>
                <p className={styles.description}>
                    Join us for a special "tee time" as we celebrate the happy couple!
                </p>
                <div className={styles.details}>
                    <p><strong>Date:</strong> Saturday, December 14, 2025</p>
                    <p><strong>Time:</strong> 11:00 AM</p>
                    <p><strong>Location:</strong> <a
                        href="https://maps.app.goo.gl/tqyjoFxUicHNcJbbA"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{borderBottom: '1px dotted currentColor'}}> Top Golf | West Des Moines, IA</a>
                    </p>
                    <p style={{fontSize: '.9em', fontStyle: 'italic'}}>Please RSVP Soon!</p>
                </div>
                <div className={styles.registrySection}>
                    <div className={styles.buttonContainer}>
                        {/* Original RSVP link commented out until an RSVP URL is available */}
                        { /*
                        <a
                            href="https://withjoy.com/teinert-hope/registry"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.registryButton}
                        >
                            RSVP
                        </a>
                        */ }

                        {/* Temporary button that shows a "Coming soon" toast */}
                        <button
                            type="button"
                            onClick={handleRSVPClick}
                            className={styles.registryButton}
                        >
                            RSVP
                        </button>

                        <a
                            href="https://withjoy.com/teinert-hope/registry"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.registryButton}
                        >
                            View Registry
                        </a>

                        {/* Modal popup shown while RSVP is not available */}
                        {showModal && (
                            <div
                                className={styles.modalOverlay}
                                role="presentation"
                                onClick={closeModal}
                            >
                                <div
                                    className={styles.modal}
                                    role="dialog"
                                    aria-modal="true"
                                    aria-label="RSVP coming soon"
                                    onClick={(e) => e.stopPropagation()}
                                    ref={modalRef}
                                >
                                    <p className={styles.modalMessage}>Coming soon</p>
                                    <button
                                        type="button"
                                        className={styles.modalClose}
                                        onClick={closeModal}
                                        ref={closeBtnRef}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}