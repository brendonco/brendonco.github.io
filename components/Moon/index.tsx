import styles from './Moon.module.css';

export default function Moon({ theme }) {
    return (
        <div
            className={`${styles.moon} ${
                theme === 'dark' ? styles.moonrise : styles.moonset
            }`}></div>
    );
}
