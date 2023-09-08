import { fraunces } from '@/app/fonts'
import styles from './timeline.module.css'
import TimelineStep from './TimeLineStep'

interface Props {
    inverted?: boolean
}

export default function Timeline(props: Props) {
    const { inverted } = props
    return (
        <div
            className={styles.how_it_works__steps__container}
            style={
                inverted
                    ? { backgroundColor: '#333d4B', borderRadius: '0.5rem' }
                    : {}
            }
        >
            <TimelineStep
                description="     Select from our evolving range of artisan
            coffees. Our beans are ethically sourced and
            we pay fair prices for them. There are new
            coffees in all profiles every month for you
            to try out."
                stage="01"
                title="Pick your coffee"
                inverted={inverted}
            />

            <TimelineStep
                description="     Customize your order frequency, quantity,
                even your roast style and grind type. Pause,
                skip or cancel your subscription with no
                commitment through our online portal."
                stage="02"
                title="Choose the frequency"
                inverted={inverted}
            />

            <TimelineStep
                description="  We ship your package within 48 hours,
                freshly roasted. Sit back and enjoy
                award-winning world-class coffees curated to
                provide a distinct tasting experience."
                stage="03"
                title="Receive and enjoy!"
                lastStage
                inverted={inverted}
            />
        </div>
    )
}
