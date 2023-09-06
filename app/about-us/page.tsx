import Nav from '../components/nav/nav'
import PageHeader from '../components/pageHeader/PageHeader'
import { fraunces } from '../fonts'
import styles from './aboutUsPage.module.css'

export default function AboutUsPage() {
    const bodyText = `Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.`
    const HERO_IMG_MOBILE = '/about/mobile/image-hero-whitecup.jpg'
    const HERO_IMG_DESKTOP = '/about/desktop/image-hero-whitecup.jpg'
    const HERO_IMG_TABLET = '/about/tablet/image-hero-whitecup.jpg'

    const quality_img_mobile = '/about/mobile/image-quality.jpg'
    const quality_img_tablet = '/about/tablet/image-quality.jpg'
    const quality_img_desktop = '/about/desktop/image-quality.jpg'
    return (
        <>
            <Nav />
            <main className={'wrapper'}>
                <PageHeader
                    body={bodyText}
                    headline={'About Us'}
                    hero_img_mobile={HERO_IMG_MOBILE}
                    hero_img_tablet={HERO_IMG_TABLET}
                    hero_img_desktop={HERO_IMG_DESKTOP}
                    hasButton={false}
                />

                <section className={styles.commitment}>
                    <img
                        src="/about/desktop/image-commitment.jpg"
                        alt="commitment"
                    />
                    <div>
                        <h3 className={fraunces.className}>Our commitment</h3>
                        <p>
                            {`We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region. `}
                        </p>
                    </div>
                </section>

                <section className={styles.quality}>
                    <div>
                        <h3 className={fraunces.className}>
                            Uncompromising quality
                        </h3>
                        <p>
                            Although we work with growers who pay close
                            attention to all stages of harvest and processing,
                            we employ, on our end, a rigorous quality control
                            program to avoid over-roasting or baking the coffee
                            dry. Every bag of coffee is tagged with a roast date
                            and batch number. Our goal is to roast consistent,
                            user-friendly coffee, so that brewing is easy and
                            enjoyable.
                        </p>
                    </div>

                    <picture>
                        <source
                            srcSet={quality_img_mobile}
                            media="(max-width: 768px)"
                        ></source>
                        <source
                            srcSet={quality_img_tablet}
                            media="(max-width: 1200px)"
                        ></source>
                        <img
                            src={quality_img_desktop}
                            alt="freshly brewed coffee in a French coffee press"
                            className={styles.quality_img}
                        />
                    </picture>
                </section>
            </main>
        </>
    )
}
