import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/8976323?s=460&u=e69975e39f5de03090235bd92727b1580cd2eae3&v=4" alt="Valéria Carvalho" />
      <div>
        <strong>Valéria Carvalho</strong>
        <p>
          <img src="/icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}