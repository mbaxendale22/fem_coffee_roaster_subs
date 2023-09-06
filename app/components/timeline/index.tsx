import { fraunces } from '@/app/fonts'
import styles from './timeline.module.css'

interface Props {
    stage: string
    title: string
    description: string
    lastStage?: boolean
}

export default function TimelineStep(props: Props) {
    const { stage, title, description, lastStage } = props

    const lineStyle = lastStage
        ? styles.how_it_works__timeline_final
        : styles.how_it_works__timeline
    return (
        <div className={styles.container}>
            <div className={styles.timeline}>
                <div className={styles.icon}></div>
                <span className={lineStyle}></span>
            </div>
            <div className={styles.text__container}>
                <h2 className={styles.timeline__stage}>{stage}</h2>
                <h3 className={fraunces.className}>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}
