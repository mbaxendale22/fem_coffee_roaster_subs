import { fraunces } from '@/app/fonts'
import styles from './timeline.module.css'

interface Props {
    stage: string
    title: string
    description: string
    lastStage?: boolean
    inverted?: boolean
}

export default function TimelineStep(props: Props) {
    const { stage, title, description, lastStage, inverted } = props

    const textColor = inverted ? { color: '#fefcf7' } : { color: 'black' }

    const lineStyle = () => {
        if (lastStage && inverted) {
            return { backgroundColor: '#333d4b' }
        }
        if (inverted) {
            return { backgroundColor: '#FDD6BA' }
        }
        if (lastStage) {
            return { backgroundColor: 'white' }
        } else {
            return { backgroundColor: '#FDD6BA' }
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.timeline}>
                <div className={styles.icon}></div>
                <span
                    className={styles.how_it_works__timeline}
                    style={lineStyle()}
                ></span>
            </div>
            <div className={styles.text__container} style={textColor}>
                <h2 className={styles.timeline__stage}>{stage}</h2>
                <h3 className={fraunces.className}>{title}</h3>
                <p style={textColor}>{description}</p>
            </div>
        </div>
    )
}
