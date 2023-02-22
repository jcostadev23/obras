import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      ola eu sou costa e este e o meu site
      <div style={{ background: "blue", color: "pink" }}>para ti minha princesa </div>
      <button>o button do costa</button>
      <div><input></input></div>
      <div>
        <textarea></textarea>
      </div>
      <hr></hr>
    </>
  )
}
