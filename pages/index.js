import {useEffect, useState} from 'react';
import Image from 'next/image';
import {ParallaxBanner, ParallaxProvider} from 'react-scroll-parallax';
import homeStyles from '../styles/Home.module.scss';
import textStyles from '../styles/TextSection.module.scss';
import eventStyles from '../styles/Event.module.scss';
import NavBarDesktop from "../components/NavBarDesktop";
import Event from "../components/EventComponent";
import TextSection from "../components/TextSection";
import Footer from "../components/Footer";
import {FaBicycle, FaHotel, FaMapMarkerAlt, FaPlane, FaUmbrellaBeach, FaUtensils} from 'react-icons/fa';
import {Dialog, IconButton, ImageList, ImageListItem, useMediaQuery} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import NavBarMobile from "../components/NavBarMobile";

export default function Home() {
    const [mounted, setMounted] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);

    const isDesktop = useMediaQuery('(min-width:768px)');
    const photoGalleryColumns = isDesktop ? 5 : 3;
    const pictureData = [
        // {
        //     img: `${process.env.NEXT_PUBLIC_BASE_PATH}/beach-hd.jpeg`,
        //     title: 'Bed',
        // },
        {
            img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
            title: 'Books',
        },
        {
            img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
            title: 'Sink',
        },
        {
            img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
            title: 'Kitchen',
        },
        {
            img: `${process.env.NEXT_PUBLIC_BASE_PATH}/ring-photo.jpeg`,
            title: 'Blinds',
        },
        {
            img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
            title: 'Chairs',
        },
        {
            img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
            title: 'Laptop',
        },
        {
            img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
            title: 'Doors',
        },
        {
            img: `${process.env.NEXT_PUBLIC_BASE_PATH}/beach-hd.jpeg`,
            title: 'Coffee',
        },
        {
            img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
            title: 'Storage',
        },
        {
            img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
            title: 'Candle',
        },
        {
            img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
            title: 'Coffee table',
        },
    ];

    useEffect(() => {
        setMounted(true);

        let prevScrollPos = window.scrollY;
        let scrollTimeout;

        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setIsNavbarVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
            prevScrollPos = currentScrollPos;

            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }

            scrollTimeout = setTimeout(() => {
                setIsNavbarVisible(true);
            }, 1000); // Scroll timeout in milliseconds
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleOpenDialog = (image) => {
        setSelectedImage(image);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };


    return (
        <div>
            <ParallaxProvider>
                <div id="home" className={homeStyles.container}>
                    {isDesktop ? <NavBarDesktop isVisible={isNavbarVisible}/> :
                        <NavBarMobile isVisible={isNavbarVisible}/>} {mounted && (
                    <>
                        <ParallaxBanner
                            layers={[
                                {
                                    children: (
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/beach-hd.jpeg`}
                                            alt={"Beach"}
                                            quality={100}
                                            style={{objectFit: 'cover'}}
                                            fill
                                            priority
                                        />
                                    ),
                                    speed: -50
                                }
                            ]}
                            className={homeStyles.parallaxBannerLight}
                        >
                            <div id={"overlay"} className={homeStyles.overlayContent}>
                                <h2>Ashley & Jon</h2>
                                <h3>October 18, 2025<br/>Miramar Beach, Florida</h3>
                                <button className={homeStyles.rsvpButton} onClick={() => {
                                    if (confirm("Download Calendar Invite?")) {
                                        console.log("Downloading calendar invite");
                                        const link = document.createElement('a');
                                        link.href = `${process.env.NEXT_PUBLIC_BASE_PATH}/atjh-ceremony-invite.ics`;
                                        link.download = 'ashley-jon-wedding-ceremony-invite.ics';
                                        link.target = '_blank';
                                        document.body.appendChild(link);
                                        link.click();
                                        document.body.removeChild(link);
                                    } else {
                                        console.log("Canceling calendar invite");
                                    }
                                }}>
                                    SAVE OUR DATE
                                </button>
                            </div>
                        </ParallaxBanner>
                        <section id="event-details" className={homeStyles.section}>
                            <h2>Details</h2>
                            <div id={"event-wrapper"} className={eventStyles.eventWrapper}>
                                <Event
                                    eventName="Welcome Beach Bonfire"
                                    eventDate="October 16, 2025"
                                    eventTime="5:00 PM CDT"
                                    eventLocation="Santa Rosa Beach, FL"
                                    iframeSourceUrl="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2378.9886494098314!2d-86.36356978319068!3d30.374802699992255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1727637367196!5m2!1sen!2sus"
                                />
                                <Event
                                    eventName="Wedding Ceremony"
                                    eventDate="October 18, 2025"
                                    eventTime="4:00 PM CDT"
                                    eventLocation="158 Sandestin Blvd N, Miramar Beach, FL"
                                    iframeSourceUrl="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1502.4508689669367!2d-86.33937748835919!3d30.384693598292856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1727637539114!5m2!1sen!2sus"
                                />
                                <Event
                                    eventName="Reception"
                                    eventDate="October 18, 2025"
                                    eventTime="4:30 PM CDT"
                                    eventLocation="158 Sandestin Blvd N, Miramar Beach, FL"
                                    iframeSourceUrl="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1502.4508689669367!2d-86.33937748835919!3d30.384693598292856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1727637539114!5m2!1sen!2sus"
                                />
                            </div>
                            <TextSection>
                            <h3>The Details (placeholder info)</h3>
                                <div className={textStyles.contentContainer}>
                                    <p>
                                        Join us for a weekend of celebration in beautiful Santa Rosa Beach, Florida.
                                        We can't wait to celebrate with you!
                                        Here are some details to help you plan your trip:
                                    </p>
                                    <h4>Things to Do</h4>
                                    <p>
                                        <FaUmbrellaBeach/> Enjoy the stunning beaches<br/>
                                        <FaBicycle/> Take a scenic bike ride along the 30A trail<br/>
                                        <FaUtensils/> Explore the local shops and restaurants<br/>
                                        <FaMapMarkerAlt/> Visit the nearby state parks and nature reserves<br/>
                                        <FaMapMarkerAlt/> Go on a dolphin watching tour<br/>
                                        <FaMapMarkerAlt/> Try out water sports like paddleboarding and kayaking
                                    </p>
                                    <h4>Where to Stay</h4>
                                    <p>
                                        <FaHotel/> WaterColor Inn<br/>
                                        <FaHotel/> The Pearl Hotel<br/>
                                        <FaHotel/> Beach house rentals through 360 Blue<br/>
                                        <FaHotel/> Hilton Sandestin Beach Golf Resort & Spa<br/>
                                        <FaHotel/> Courtyard by Marriott Sandestin at Grand Boulevard
                                    </p>
                                    <h4>Relevant Airports</h4>
                                    <p>
                                        <FaPlane/> Northwest Florida Beaches International Airport (ECP)<br/>
                                        <FaPlane/> Destin-Fort Walton Beach Airport (VPS)<br/>
                                        <FaPlane/> Pensacola International Airport (PNS)
                                    </p>
                                </div>
                            </TextSection>

                        </section>
                        <section id="gallery" className={homeStyles.section} style={{backgroundColor: "#F9F9F9"}}>
                            <h2>Gallery</h2>
                            <ImageList variant="masonry" cols={photoGalleryColumns} gap={10}>
                                {pictureData.map((item) => (
                                    <ImageListItem key={item.img} onClick={() => handleOpenDialog(item)}
                                                   style={{cursor: 'pointer'}}
                                    >
                                        <img
                                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                            src={`${item.img}?w=248&fit=crop&auto=format`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                            <Dialog
                                open={openDialog}
                                onClose={handleCloseDialog}
                                maxWidth="xl"
                                fullWidth
                                PaperProps={{
                                    style: {
                                        backgroundColor: 'rgba(25, 25, 25, 0.9)', // Translucent gray background
                                    },
                                }}
                            >
                                <IconButton
                                    aria-label="close"
                                    onClick={handleCloseDialog}
                                    sx={{
                                        position: 'absolute',
                                        left: 8,
                                        top: 8,
                                        color: (theme) => theme.palette.grey[500],
                                    }}
                                >
                                    <CloseIcon/>
                                </IconButton>
                                {selectedImage && (
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '100%',
                                        height: '100%'
                                    }}>
                                        <img
                                            src={selectedImage.img}
                                            alt={selectedImage.title}
                                            style={{
                                                width: '90vw',
                                                height: '90vh',
                                                objectFit: 'contain'
                                            }}
                                        />
                                    </div>
                                )}
                            </Dialog>
                        </section>
                        <section id="registry" className={homeStyles.section}>
                            <h2>Registry</h2>
                            <TextSection>
                                <h3>Details to come!</h3>
                            </TextSection>
                        </section>
                    </>
                )}
                </div>
            </ParallaxProvider>
            <Footer/>
        </div>
    );
}
