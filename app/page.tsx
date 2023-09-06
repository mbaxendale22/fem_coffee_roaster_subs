/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import styles from './page.module.css'
import PageHeader from './components/pageHeader/PageHeader'
import { fraunces } from './fonts'
import { coffeeCollection } from './data/coffeeCollection'
import BeansCard from './components/beansCard'
import Nav from './components/nav/nav'
import { chooseUsData } from './data/chooseUsData'
import ChooseUsCard from './components/chooseUsCard'
import TimelineStep from './components/timeline'
import Footer from './components/footer'
import Link from 'next/link'

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

                <section>
                    <div className={styles.why_text__container}>
                        <h3 className={`${fraunces.className}`}>
                            Why choose us?
                        </h3>
                        <p>
                            A large part of our role is choosing which
                            particular coffees will be featured in our range.
                            This means working closely with the best coffee
                            growers to give you a more impactful experience on
                            every level.
                        </p>
                    </div>
                    <div className={styles.chooseUsCard__container}>
                        {chooseUsData.map((data) => {
                            return (
                                <ChooseUsCard
                                    key={data.id}
                                    title={data.title}
                                    description={data.description}
                                    image={data.image}
                                />
                            )
                        })}
                    </div>
                </section>

                <section className={styles.how_it_works__container}>
                    <h4 className={fraunces.className}>How it works</h4>
                    <div className={styles.how_it_works__steps__container}>
                        <TimelineStep
                            description="     Select from our evolving range of artisan
                            coffees. Our beans are ethically sourced and
                            we pay fair prices for them. There are new
                            coffees in all profiles every month for you
                            to try out."
                            stage="01"
                            title="Pick your coffee"
                        />

                        <TimelineStep
                            description="     Customize your order frequency, quantity,
                                    even your roast style and grind type. Pause,
                                    skip or cancel your subscription with no
                                    commitment through our online portal."
                            stage="02"
                            title="Choose the frequency"
                        />

                        <TimelineStep
                            description="  We ship your package within 48 hours,
                freshly roasted. Sit back and enjoy
                award-winning world-class coffees curated to
                provide a distinct tasting experience."
                            stage="03"
                            title="Receive and enjoy!"
                            lastStage
                        />
                    </div>
                    <div className={styles.how_it_works__button}>
                        <Link href={'/create-your-plan'}>
                            <button className={fraunces.className}>
                                Create your plan
                            </button>
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}
