import React, { useState } from 'react';
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
import styles from '../styles/MobileNavBar.module.scss';

export default function MobileNavBar({ isVisible }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsOpen(open);
    };

    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {[
                    { text: 'Home', icon: <HomeIcon />, link: '#home' },
                    { text: 'Details', icon: <EventIcon />, link: '#event-details' },
                    { text: 'Gallery', icon: <PhotoLibraryIcon />, link: '#gallery' },
                    { text: 'Registry', icon: <CardGiftcardIcon />, link: '#registry' }
                ].map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton component="a" href={item.link}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
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
                <MenuIcon />
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