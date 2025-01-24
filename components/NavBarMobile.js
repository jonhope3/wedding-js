import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import MenuIcon from '@mui/icons-material/Menu';
import PlaceIcon from '@mui/icons-material/Place';
import FlightIcon from '@mui/icons-material/Flight';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import styles from '../styles/NavBarMobile.module.scss';

export default function NavBarMobile({isVisible}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsOpen(open);
    };

    const list = (
        <Box
            sx={{width: 250}}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {[
                    {text: 'Home', icon: <HomeIcon/>, link: '#home'},
                    {text: 'Details', icon: <EventIcon/>, link: '#event-details', subsections: [
                            {text: 'Things to Do', icon: <BeachAccessIcon/>, link: '#things-to-do'},
                            {text: 'Where to Stay', icon: <PlaceIcon/>, link: '#where-to-stay'},
                            {text: 'Airports', icon: <FlightIcon/>, link: '#airports'}
                        ]},
                    {text: 'Gallery', icon: <PhotoLibraryIcon/>, link: '#gallery'},
                    {text: 'Registry', icon: <CardGiftcardIcon/>, link: '#registry'}
                ].map((item) => (
                    <React.Fragment key={item.text}>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href={item.link}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text}/>
                            </ListItemButton>
                        </ListItem>
                        {item.subsections && item.subsections.map((subitem) => (
                            <ListItem key={subitem.text} disablePadding sx={{pl: 4}}>
                                <ListItemButton component="a" href={subitem.link}>
                                    <ListItemIcon>{subitem.icon}</ListItemIcon>
                                    <ListItemText primary={subitem.text}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </React.Fragment>
                ))}
            </List>
        </Box>
    );

    return (
        <div className={`${styles.mobileNavBar} ${!isVisible ? styles.hidden : ''}`}>
            <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                className={styles.menuButton}
            >
                <MenuIcon/>
            </IconButton>
            <Drawer
                anchor="right"
                open={isOpen}
                onClose={toggleDrawer(false)}
            >
                {list}
            </Drawer>
        </div>
    );
}