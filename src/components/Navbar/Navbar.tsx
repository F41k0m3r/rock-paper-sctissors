import React, {FC} from 'react';
import styles from './Navbar.module.css'
const Navbar:FC = ():JSX.Element => {
    return (
        <div >
            <header className={styles.wrap}>
                <a target={'_blank'} href={'https://github.com/F41k0m3r'} className={styles.logoWrap}>
                    <img className={styles.logo} src="https://avatars.githubusercontent.com/u/105551615?v=4" alt="avatar"/>
                    <h2 className={styles.logoText}>Falkomer</h2>
                </a>
            </header>
        </div>
    );
};

export default Navbar;
