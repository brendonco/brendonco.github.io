import styles from './Moon.module.css';

interface MoonProps {
    theme: string; // Define the type of the theme prop
}

export default function Moon({ theme }: MoonProps) {
    return (
        <div
            className={`${styles.moon} ${
                theme === 'dark' ? styles.moonrise : styles.moonset
            }`}></div>
    );
}
