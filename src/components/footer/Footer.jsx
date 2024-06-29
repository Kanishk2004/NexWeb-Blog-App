import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>NexWeb</div>
      <div className={styles.text}>
        NexWeb Studio © All rights reserved.
      </div>
    </div>
  )
}

export default Footer
