import { fraunces } from '@/app/fonts'
import styles from './headquarter.module.css'

interface Props {
    image: string
    country: string
    street: string
    city: string
    postCode: string
    phone: string
}

export default function HeadquartersCard(props: Props) {
    const { image, country, street, city, postCode, phone } = props

    return (
        <div className={styles.container}>
            <img src={image} alt={`map of ${country}`} />
            <h3 className={fraunces.className}>{country}</h3>
            <p>{street}</p>
            <p>{city}</p>
            <p>{postCode}</p>
            <p>{phone}</p>
        </div>
    )
}
