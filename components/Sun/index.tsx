import styles from './Sun.module.css';

export default function Sun({ theme }) {
    return (
        <div className={`${styles.sun} ${theme === 'dark' ? styles.sunset : styles.sunrise}`}></div>
    );
}
