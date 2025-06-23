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
import {FaBicycle, FaPlane, FaUmbrellaBeach, FaUtensils} from 'react-icons/fa';
import {Dialog, IconButton, ImageList, ImageListItem, useMediaQuery} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import NavBarMobile from "../components/NavBarMobile";
import {LuHotel, LuHouse} from "react-icons/lu";
import {FaFish} from "react-icons/fa6";
import {GiDolphin, GiPalmTree} from "react-icons/gi";
import {MdSurfing} from "react-icons/md";

export default function Home() {
    const [mounted, setMounted] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);

    const isDesktop = useMediaQuery('(min-width:768px)');
    const photoGalleryColumns = isDesktop ? 4 : 3;
    const pictureData = [
        {
            img: `${process.env.NEXT_PUBLIC_BASE_PATH}/images-optimized/ring-photo.webp`,
            title: 'Blinds',
        },
        {
            img: `${process.env.NEXT_PUBLIC_BASE_PATH}/images-optimized/cruise.webp`,
            title: 'Cruise',
        },
        {
            img: `${process.env.NEXT_PUBLIC_BASE_PATH}/images-optimized/destin.webp`,
            title: 'Destin',
        },
        {
            img: `${process.env.NEXT_PUBLIC_BASE_PATH}/images-optimized/mckinney.webp`,
            title: 'McKinney',
        },
        {
            img: `${process.env.NEXT_PUBLIC_BASE_PATH}/images-optimized/telluride.webp`,
            title: 'Telluride',
        },
        {
            img: `${process.env.NEXT_PUBLIC_BASE_PATH}/images-optimized/winter-games.webp`,
            title: 'Winter Games Okoboji',
        },
        {
            img: `${process.env.NEXT_PUBLIC_BASE_PATH}/images-optimized/destin2.webp`,
            title: 'Miramar Beach',
        },
        {
            img: `${process.env.NEXT_PUBLIC_BASE_PATH}/images-optimized/destin3.webp`,
            title: 'Gulf',
        },
        {
            img: `${process.env.NEXT_PUBLIC_BASE_PATH}/images-optimized/islamorada.webp`,
            title: 'Islamorada',
        },
        {
            img: `${process.env.NEXT_PUBLIC_BASE_PATH}/images-optimized/engagement.webp`,
            title: 'Engagement Picture',
        },
        {
            img: `${process.env.NEXT_PUBLIC_BASE_PATH}/images-optimized/engagement1.webp`,
            title: 'Engagement Picture',
        },
        {
            img: `${process.env.NEXT_PUBLIC_BASE_PATH}/images-optimized/engagement2.webp`,
            title: 'Engagement Picture',
        },
        {
            img: `${process.env.NEXT_PUBLIC_BASE_PATH}/images-optimized/proposal.webp`,
            title: 'Proposal Picture',
        },
        {
            img: `${process.env.NEXT_PUBLIC_BASE_PATH}/images-optimized/proposal1.webp`,
            title: 'Proposal Picture',
        },
        {
            img: `${process.env.NEXT_PUBLIC_BASE_PATH}/images-optimized/family.webp`,
            title: 'Proposal Picture',
        }
    ];
    const [shuffledPictureData, setShuffledPictureData] = useState([]);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    useEffect(() => {
        setShuffledPictureData(shuffleArray([...pictureData]));
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
                                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images-optimized/beach-hd.webp`}
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
                        <section id="event-details" className={homeStyles.section} style={{marginBottom: '2rem'}}>
                            <h2>Details</h2>
                            <div id={"event-wrapper"} className={eventStyles.eventWrapper}>
                                <Event
                                    eventName="Welcome Beach Bonfire"
                                    eventDate="Thursday, October 16, 2025"
                                    eventTime="5:00 PM - 8:00 PM CDT"
                                    eventLocation="5701 W County Highway 30A, Santa Rosa Beach, FL"
                                    eventLocationLink={"https://maps.app.goo.gl/AGyy4Ehp6yX2qYqEA"}
                                    eventDescription="Please consider stopping by to join us for a beach bonfire, with light bites, and drinks by the water!"
                                    iframeSourceUrl="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2004.1021384120354!2d-86.25167959649747!3d30.35245208079558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1738868373106!5m2!1sen!2sus"

                                />
                                <Event
                                    eventName="Wedding Ceremony"
                                    eventDate="Saturday, October 18, 2025"
                                    eventTime="4:00 PM CDT"
                                    eventLocation="158 Sandestin Blvd N, Miramar Beach, FL"
                                    eventLocationLink={"https://maps.app.goo.gl/itoZqcFAezZy7m1m8"}
                                    eventDescription="The wedding ceremony is planned to be outside. Guests are encouraged to bring sunglasses and a light jacket."
                                    iframeSourceUrl="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1502.4508689669367!2d-86.33937748835919!3d30.384693598292856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1727637539114!5m2!1sen!2sus"
                                />
                                <Event
                                    eventName="Reception"
                                    eventDate="Saturday, October 18, 2025"
                                    eventTime="4:30 PM - 9:30 PM CDT"
                                    eventLocation="158 Sandestin Blvd N, Miramar Beach, FL"
                                    eventLocationLink={"https://maps.app.goo.gl/itoZqcFAezZy7m1m8"}
                                    // eventDescription="The time between the wedding ceremony and the reception will include a time for cocktails. The reception is planned to be inside and outside. Guests are encouraged to bring sunglasses and a light jacket."
                                    eventDescription="The reception is planned to be inside and outside. Guests are encouraged to bring sunglasses and a light jacket."
                                    iframeSourceUrl="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1502.4508689669367!2d-86.33937748835919!3d30.384693598292856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1727637539114!5m2!1sen!2sus"
                                />
                            </div>
                            <TextSection>
                                <h3>The Details</h3>
                                <div className={textStyles.contentContainer}>
                                    <ul>
                                        Join us for a weekend of celebration in beautiful Santa Rosa Beach, Florida.
                                        We can't wait to celebrate with you!
                                        Here are some details to help you plan your trip:
                                    </ul>
                                    <h4 id={'things-to-do'}>Things to Do</h4>
                                    <ul style={{listStyleType: 'none', padding: '1rem', lineHeight: '2.5rem'}}>
                                        <li><FaUmbrellaBeach style={{marginRight: '.5rem'}}/> Enjoy the stunning beaches
                                            of the Emerald Coast
                                        </li>
                                        <li><FaFish style={{marginRight: '.5rem'}}/> Try your luck fishing in Destin,
                                            "The World's Luckiest Fishing
                                            Village"
                                        </li>
                                        <li><FaBicycle style={{marginRight: '.5rem'}}/> Take a scenic bike ride along
                                            the 30A trail
                                        </li>
                                        <li><FaUtensils style={{marginRight: '.5rem'}}/> Explore the local shops and
                                            restaurants
                                        </li>
                                        <li><GiPalmTree style={{marginRight: '.5rem'}}/> Visit the nearby state parks
                                            and nature reserves
                                        </li>
                                        <li><GiDolphin style={{marginRight: '.5rem'}}/> Go on a dolphin watching tour
                                        </li>
                                        <li><MdSurfing style={{marginRight: '.5rem'}}/> Try out water sports like
                                            paddleboarding and kayaking
                                        </li>
                                    </ul>
                                    <h4 id={'where-to-stay'}>Where to Stay</h4>
                                    <ul style={{listStyleType: 'none', padding: '1rem', lineHeight: '2.5rem'}}>
                                        <li><LuHouse style={{marginRight: '.5rem'}}/><
                                            a href="https://www.sandestin.com/accommodations" target="_blank"
                                              rel="noopener noreferrer">Sandestin Golf & Beach Resort</a>
                                        </li>
                                        <li><LuHouse style={{marginRight: '.5rem'}}/> Beach house rentals</li>
                                        <ul style={{paddingLeft: '2rem'}}>
                                            <li>Consider renting a place through Airbnb, VRBO, Vacasa, or similar</li>
                                            <li>Some areas to search are Miramar Beach, Santa Rosa Beach, and Destin
                                            </li>
                                        </ul>
                                        <li><LuHotel style={{marginRight: '.5rem'}}/><a
                                            href="https://www.hiltonsandestinbeach.com/" target="_blank"
                                            rel="noopener noreferrer">Hilton Sandestin Beach Golf Resort & Spa</a></li>
                                        <li><LuHotel style={{marginRight: '.5rem'}}/><a
                                            href="https://www.marriott.com/en-us/hotels/vpscy-courtyard-sandestin-at-grand-boulevard/overview/"
                                            target="_blank" rel="noopener noreferrer">Courtyard by Marriott Sandestin at
                                            Grand Boulevard</a></li>
                                        <li><LuHotel style={{marginRight: '.5rem'}}/><a
                                            href="https://www.hoteleffie.com/" target="_blank"
                                            rel="noopener noreferrer">Hotel Effie Sandestin</a></li>
                                        <li><LuHotel style={{marginRight: '.5rem'}}/><a
                                            href="https://www.hyatt.com/hyatt-place/en-US/ecpzs-hyatt-place-sandestin-at-grand-boulevard"
                                            target="_blank"
                                            rel="noopener noreferrer">Hyatt Place Sandestin at Grand Boulevard</a></li>
                                        <li><LuHotel style={{marginRight: '.5rem'}}/><a
                                            href="https://www.wyndhamhotels.com/laquinta/miramar-beach-florida/la-quinta-miramar-beach-destin/overview"
                                            target="_blank"
                                            rel="noopener noreferrer">La Quinta - Miramar Beach</a></li>
                                    </ul>
                                    <h4 id={'airports'}>Nearby Airports</h4>
                                    <ul style={{listStyleType: 'none', padding: '1rem', lineHeight: '2.5rem'}}>
                                        <li><FaPlane style={{marginRight: '.5rem'}}/> Destin-Fort Walton Beach Airport
                                            (VPS)
                                        </li>
                                        <ul style={{listStyleType: 'none', paddingLeft: '2rem'}}>
                                            VPS is ~45 minutes from the wedding venue
                                        </ul>
                                        <li><FaPlane style={{marginRight: '.5rem'}}/> Panama City Beach Airport (ECP)
                                        </li>
                                        <ul style={{listStyleType: 'none', paddingLeft: '2rem'}}>
                                            ECP is ~45 minutes from the wedding venue
                                        </ul>
                                        <li><FaPlane style={{marginRight: '.5rem'}}/> Pensacola Airport (PNS)
                                        </li>
                                        <ul style={{listStyleType: 'none', paddingLeft: '2rem'}}>
                                            PNS is ~90 minutes from the wedding venue
                                        </ul>
                                    </ul>
                                </div>
                            </TextSection>

                        </section>
                        <section id="gallery" className={homeStyles.section} style={{backgroundColor: "#F9F9F9"}}>
                            <h2>Gallery</h2>
                            <ImageList variant="masonry" cols={photoGalleryColumns} gap={10}>
                                {shuffledPictureData.map((item) => (
                                    <ImageListItem key={item.img} onClick={() => handleOpenDialog(item)}
                                                   style={{cursor: 'pointer'}}>
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
                        <section id="faq" className={homeStyles.section}>
                            <h2>Questions</h2>
                            <TextSection>
                                <div className={textStyles.contentContainer}>

                                    <h4>When should I RSVP?</h4>
                                    <p style={{textAlign: 'center', paddingLeft: '2rem', paddingRight: '2rem'}}>
                                        Please RSVP by August 12th. The sooner, the better!
                                    </p>

                                    <h4>What should I wear?</h4>
                                    <p style={{textAlign: 'center', paddingLeft: '2rem', paddingRight: '2rem'}}>
                                        <u>Beach Bonfire</u>: Beach casual! Ladies, think sundresses, stylish
                                        two-piece sets, or a breezy top with jeans or jean shorts. Gentlemen, shorts or
                                        pants paired with a casual button-up or polo work great.<br/>
                                        <u>Wedding</u>: Attire is formal. Dress comfortably, but aim to
                                        impress! Women, midi or full-length dresses are perfect, and colorful outfits are
                                        encouraged (it is Florida, after all!). Men, suits and ties or dress pants with a jacket are
                                        both appropriate.
                                    </p>

                                    <h4>What should I know about parking?</h4>
                                    <p style={{textAlign: 'center', paddingLeft: '2rem', paddingRight: '2rem'}}>
                                        There is ample parking available near the entrance of the Linkside Conference
                                        Center. When entering the resort, you'll go through a gate with a guard, just
                                        let them know you're attending the Teinert-Hope Wedding.
                                    </p>

                                    <h4>Are the ceremony & reception indoors or outdoors?</h4>
                                    <p style={{textAlign: 'center', paddingLeft: '2rem', paddingRight: '2rem'}}>
                                        The ceremony, cocktail hour, and dancing portion of the reception will be held
                                        outdoors. Dinner will take place indoors.
                                    </p>

                                    <h4>Can I bring a guest?</h4>
                                    <p style={{textAlign: 'center', paddingLeft: '2rem', paddingRight: '2rem'}}>
                                        Your invitation will specify if you should bring a guest. Please refer to your
                                        formal invite for details.
                                    </p>

                                    <h4>Can I bring my kids?</h4>
                                    <p style={{textAlign: 'center', paddingLeft: '2rem', paddingRight: '2rem'}}>
                                        As much as we love your little ones, the wedding-day events will be adults-only.
                                        However, kids are welcome at the beach bonfire!
                                    </p>

                                    <h4>Do I need to rent a car?</h4>
                                    <p style={{textAlign: 'center', paddingLeft: '2rem', paddingRight: '2rem'}}>
                                        A rental car can be very helpful as the airports are about 45 minutes from the
                                        venue and the area has lots to explore. This is a popular tourist area, so Uber and Lyft are usually
                                        readily available. Renting a car depends on your lodging location and how much you plan to
                                        explore. The 30A area is gorgeous, stretching from Miramar
                                        Beach to Rosemary Beach, with charming towns like Grayton Beach,
                                        WaterColor, and Seaside dotting the coast. If you're
                                        staying on the Sandestin Golf and Beach Resort property, a tram system is
                                        available to take you to various resort locations, including beach access.
                                    </p>

                                    <h4>What is the weather like this time of year?</h4>
                                    <p style={{textAlign: 'center', paddingLeft: '2rem', paddingRight: '2rem'}}>
                                        October is typically beautiful, with highs around 80°F and lows around 60°F.
                                    </p>

                                    <h4>Can I take photos & videos?</h4>
                                    <p style={{textAlign: 'center', paddingLeft: '2rem', paddingRight: '2rem'}}>
                                        The ceremony will be unplugged. We kindly ask you to be fully present and keep
                                        your phones silenced and put away. Our wonderful photo and video team will
                                        capture everything, but you’re welcome and encouraged to take photos and videos during the
                                        cocktail hour and reception!
                                    </p>

                                    <h4>Where do I park for the beach bonfire?</h4>
                                    <p style={{textAlign: 'center', paddingLeft: '2rem', paddingRight: '2rem'}}>
                                        There’s a parking lot at the beach access location. If it fills up, street
                                        parking is also available nearby.
                                    </p>

                                    <h4>Still have questions?</h4>
                                    <p style={{textAlign: 'center', paddingLeft: '2rem', paddingRight: '2rem'}}>
                                        Reach out to the bride or groom!
                                    </p>
                                </div>
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
