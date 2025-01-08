import styles from './template.module.css';

function Template() {
  return (
    <div className={styles.container}>
        <div className={styles.leftSection}>
            {/* Logo */}
            <div className={styles.logoContainer}>
                <img src="/logo.svg" alt="Logo" className={styles.logo} />
            </div>

            {/* Nav Bar */}
            <div className={styles.navBar}>
                <span className='home-icon'><img src="/home.svg" alt="home-icon" width = '70' cursor = 'pointer'/></span>
                <span className='events-icon'><img src="/events.svg" alt="home-icon" width = '70'/></span>
                <span><img src="/blogs.svg" alt="home-icon" width = '105'/></span>
                <span><img src="/team.svg" alt="home-icon" width = '105'/></span>
            </div>
        </div>

      {/* Right Section: Content */}
      <div className={styles.rightSection}>
        <h1>BLAHHHHHHH</h1>
        <h1>BLAHHHHHHH</h1>
        <h1>BLAHHHHHHH</h1>
        <h1>BLAHHHHHHH</h1>
        <h1>BLAHHHHHHH</h1>
        <h1>BLAHHHHHHH</h1>
        <h1>BLAHHHHHHH</h1>
        <h1>BLAHHHHHHH</h1>
        <h1>BLAHHHHHHH</h1>
        <h1>BLAHHHHHHH</h1>
        <h1>BLAHHHHHHH</h1>
        <h1>BLAHHHHHHH</h1>

      </div>
    </div>
  );
}

export default Template;
