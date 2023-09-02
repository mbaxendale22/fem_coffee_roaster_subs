/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import styles from './page.module.css'
import PageHeader from './components/pageHeader/PageHeader'
import { fraunces } from './fonts'
import { coffeeCollection } from './data/coffeeCollection'
import BeansCard from './components/beansCard'
import Nav from './components/nav/nav'

const HERO_IMG_MOBILE = '/home/mobile/image-hero-coffeepress.jpg'
const HERO_IMG_DESKTOP = '/home/desktop/image-hero-coffeepress.jpg'
const HERO_IMG_TABLET = '/home/tablet/image-hero-coffeepress.jpg'

const bodyText = `Start your mornings with the world's best coffees. Try
our expertly curated artisan coffees from our best
roasters delivered directly to your door, at your
schedule`

export default function Home() {
    return (
        <>
            <Nav />
            <main className={'wrapper'}>
                <PageHeader
                    hero_img_mobile={HERO_IMG_MOBILE}
                    hero_img_tablet={HERO_IMG_TABLET}
                    hero_img_desktop={HERO_IMG_DESKTOP}
                    headline="Great coffee made simple."
                    body={bodyText}
                    hasButton
                />

                <h2 className={` ${fraunces.className} ${styles.collection}`}>
                    Our collection
                </h2>

                <section className={styles.collection__container}>
                    {coffeeCollection.map((coffee) => {
                        return (
                            <BeansCard
                                key={coffee.id}
                                description={coffee.description}
                                image={coffee.image}
                                name={coffee.name}
                            />
                        )
                    })}
                </section>
            </main>
        </>
    )
}
