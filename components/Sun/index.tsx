import styles from './Sun.module.css';

interface SunProps {
    theme: string; // Define the type of the theme prop
}

export default function Sun({ theme }: SunProps) {
    return (
        <div className={`${styles.sun} ${theme === 'dark' ? styles.sunset : styles.sunrise}`}></div>
    );
}
