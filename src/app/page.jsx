import Image from 'next/image'
import styles from './page.module.css'
import Hero from "public/hero.png"
//import Button from "@/components/Button/Button"

export default function Home() {
  return (
    <div>
      <h1>Welcome! This is a Nextjs demostration.</h1>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  )
}
