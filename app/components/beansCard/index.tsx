/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './beansCard.module.css'
import { fraunces } from '@/app/fonts'

interface Props {
    name: string
    image: string
    description: string
}

export default function BeansCard(props: Props) {
    const { name, image, description } = props
    return (
        <article className={styles.collection__article}>
            <div className={styles.image__container}>
                <img src={image} alt={`picture of a bag of ${name} coffee`} />
            </div>
            <h4 className={fraunces.className}>{name}</h4>
            <p className={styles.collection__article__description}>
                {description}
            </p>
        </article>
    )
}
