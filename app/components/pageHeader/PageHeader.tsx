import React from 'react'
import styles from './pageHeader.module.css'
import { fraunces } from '@/app/fonts'

interface Props {
    hero_img_mobile: string
    hero_img_tablet: string
    hero_img_desktop: string
    headline: string
    body: string
    hasButton: boolean
}

export default function PageHeader(props: Props) {
    const {
        hero_img_mobile,
        hero_img_tablet,
        hero_img_desktop,
        headline,
        body,
        hasButton,
    } = props
    return (
        <header className={styles.header}>
            <div className={styles.textWrapper}>
                <h2 className={`${fraunces.className}`}>{headline}</h2>
                <p>{body}</p>
                {hasButton ? (
                    <button className={`${fraunces.className}`}>
                        Create your plan
                    </button>
                ) : null}
            </div>
            <picture>
                <source
                    srcSet={hero_img_mobile}
                    media="(max-width: 500px)"
                ></source>
                <source
                    srcSet={hero_img_tablet}
                    media="(max-width: 750px)"
                ></source>
                <img
                    src={hero_img_desktop}
                    alt="freshly brewed coffee in a French coffee press"
                    className={styles.heroImg}
                />
            </picture>
        </header>
    )
}
