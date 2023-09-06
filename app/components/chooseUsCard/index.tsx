import { fraunces } from '@/app/fonts'
import styles from './chooseUsCard.module.css'

interface Props {
    title: string
    description: string
    image: string
}

export default function ChooseUsCard(props: Props) {
    const { title, description, image } = props
    return (
        <div className={styles.container}>
            <img src={image} alt={title} />
            <h3 className={fraunces.className}>{title}</h3>
            <p>{description}</p>
        </div>
    )
}
