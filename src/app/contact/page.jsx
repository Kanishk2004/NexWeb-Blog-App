import Image from 'next/image';
import styles from './contact.module.css'

export const metadata = {
	title: "NexWeb - Contact",
	description: "NexWeb studios contact page.",
};

const Contact = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image src={'/contact.png'} alt='Illustration' fill className={styles.img} />
			</div>
			<div className={styles.formContainer}>
				<form action="" className={styles.form}>
					<input type="text" placeholder='Name' />
					<input type="email" name="email" id="email" placeholder='Email address' />
					<input type="number" name="contactNumber" id="phn" placeholder='Contact number' />
					<textarea name="" cols={30} rows={10} id="" placeholder='Message'></textarea>
					<button>Send</button>
				</form>
			</div>
		</div>
	)
};

export default Contact;
