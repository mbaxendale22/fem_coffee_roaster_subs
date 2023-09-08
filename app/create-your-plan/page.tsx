import Nav from '../components/nav/nav'
import PageHeader from '../components/pageHeader/PageHeader'
import { fraunces } from '../fonts'
import styles from './subscribePage.module.css'
import Footer from '../components/footer'
import Timeline from '../components/timeline'
import OptionsMenu from './optionsMenu/OptionsMenu'

export default function SubscribePage() {
    const bodyText = `Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.`
    const HERO_IMG_MOBILE = '/plan/mobile/image-hero-blackcup.jpg'
    const HERO_IMG_DESKTOP = '/plan/desktop/image-hero-blackcup.jpg'
    const HERO_IMG_TABLET = '/plan/tablet/image-hero-blackcup.jpg'

    return (
        <>
            <Nav />
            <main className={'wrapper'}>
                <PageHeader
                    body={bodyText}
                    headline={'Create a plan'}
                    hero_img_mobile={HERO_IMG_MOBILE}
                    hero_img_tablet={HERO_IMG_TABLET}
                    hero_img_desktop={HERO_IMG_DESKTOP}
                    hasButton={false}
                />

                <section>
                    <Timeline inverted />
                </section>
                <section>
                    <OptionsMenu />
                </section>
                <Footer />
            </main>
        </>
    )
}
