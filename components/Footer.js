import {useState} from 'react';
import styles from '../styles/Footer.module.scss';
import {Dialog, DialogContent, DialogContentText} from "@mui/material";

export default function Footer() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
        }, 500);
    };

    return (
        <footer className={styles.footer}>
            <p>
                Made with <span onClick={handleClick} style={{cursor: 'pointer'}}>💙</span> by Jon & Ashley
            </p>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogContent>
                    <DialogContentText>Love you too!</DialogContentText>
                </DialogContent>
            </Dialog>
        </footer>
    );
}