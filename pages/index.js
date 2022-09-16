import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Second from '../components/Second'
import Third from '../components/Third'

export default function Home() {
  return (
      <>
      <Hero />
      <Second />
      <Third />
      </>
  )
}
