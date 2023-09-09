'use client'

import { useEffect, useState } from 'react'

import { optionsData } from '@/app/data/optionsData'
import AccordionItem from '@/app/components/accordionItem'
import { fraunces } from '@/app/fonts'
import styles from './optionsMenu.module.css'

export default function OptionsMenu() {
    const [optionsState, setOptionsState] = useState({
        mode: '',
        type: '',
        quantity: '',
        grind: '',
        frequency: '',
    })

    const [prices, setPrices] = useState({
        everyWeekPrice: 0,
        everyTwoWeeksPrice: 0,
        everyMonthPrice: 0,
    })

    const [checkoutPrice, setCheckoutPrice] = useState(0)
    const [checkoutOpen, setCheckoutOpen] = useState(false)
    const [proceedToCheckout, setProceedToCheckout] = useState(false)

    const grindTemplate =
        optionsState.grind === 'Wholebean'
            ? 'wholebean'
            : `ground for ${optionsState.grind}`

    const modeTemplate =
        optionsState.mode === 'Capsule'
            ? 'using capsules'
            : `as ${optionsState.mode}`

    const formatFrequency = () => {
        switch (optionsState.frequency) {
            case 'Every week':
                return 'every week'
            case 'Every 2 weeks':
                return 'every 2 weeks'
            case 'Every month':
                return 'every month'
            default:
                return ''
        }
    }

    const calculatePriceOptions = () => {
        let everyWeekPrice = 0
        let everyTwoWeeksPrice = 0
        let everyMonthPrice = 0
        if (optionsState.quantity === '250') {
            everyWeekPrice = 7.2
            everyTwoWeeksPrice = 9.6
            everyMonthPrice = 12
        }
        if (optionsState.quantity === '500') {
            everyWeekPrice = 13
            everyTwoWeeksPrice = 17.5
            everyMonthPrice = 22
        }
        if (optionsState.quantity === '1000') {
            everyWeekPrice = 22
            everyTwoWeeksPrice = 32
            everyMonthPrice = 42
        }
        return { everyWeekPrice, everyTwoWeeksPrice, everyMonthPrice }
    }

    useEffect(() => {
        let { everyWeekPrice, everyTwoWeeksPrice, everyMonthPrice } =
            calculatePriceOptions()
        console.log(everyWeekPrice, everyTwoWeeksPrice, everyMonthPrice)
        setPrices({ everyWeekPrice, everyTwoWeeksPrice, everyMonthPrice })
    }, [optionsState.quantity, optionsState.frequency])

    const frequencyData = [
        {
            id: 13,
            title: 'Every week',
            description: `$${prices.everyWeekPrice} per shipment. Includes free first-class shipping.`,
            optionCategory: 'frequency',
            sectionHeading: 'How often should we deliver?',
        },
        {
            id: 14,
            title: 'Every 2 weeks',
            description: `$${prices.everyTwoWeeksPrice} per shipment. Includes free priority shipping.`,
            optionCategory: 'frequency',
            sectionHeading: 'How often should we deliver?',
        },
        {
            id: 15,
            title: 'Every month',
            description: `$${prices.everyMonthPrice} per shipment. Includes free priority shipping.`,
            optionCategory: 'frequency',
            sectionHeading: 'How often should we deliver?',
        },
    ]

    optionsData[4] = frequencyData

    useEffect(() => {
        if (
            optionsState.frequency &&
            optionsState.mode &&
            optionsState.quantity &&
            optionsState.type
        ) {
            setProceedToCheckout(true)
        }
    }, [optionsState])

    const calculateCheckoutPrice = () => {
        switch (optionsState.frequency) {
            case 'Every week':
                return prices.everyWeekPrice * 4
            case 'Every 2 weeks':
                return prices.everyTwoWeeksPrice * 2
            case 'Every month':
                return prices.everyMonthPrice * 1
            default:
                return 0
        }
    }

    const handleCreateMyPlan = () => {
        if (!proceedToCheckout) return
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setCheckoutPrice(calculateCheckoutPrice())
        setCheckoutOpen(true)
    }

    const handleCloseCheckout = (event: any) => {
        const el = event.target as HTMLElement
        if (el.id === 'modal__overlay') {
            setCheckoutOpen(false)
        }
    }

    return (
        <div style={{ padding: '4rem 0' }}>
            {optionsData.map((option) => (
                <AccordionItem
                    option={option}
                    optionsState={optionsState}
                    setOptionsState={setOptionsState}
                    key={option[0].id}
                    title={option[0].sectionHeading}
                />
            ))}

            <div className={styles.summary__container}>
                <h4>Order Summary</h4>
                <p className={`${fraunces.className} ${styles.summary__text}`}>
                    I drink my coffee{' '}
                    <span className={styles.highlight}>{modeTemplate}</span>{' '}
                    with a{' '}
                    <span className={styles.highlight}>
                        {optionsState.type}
                    </span>{' '}
                    type of bean.{' '}
                    <span className={styles.highlight}>
                        {optionsState.quantity}g,
                    </span>{' '}
                    <span className={styles.highlight}>{grindTemplate}</span>{' '}
                    sent to me{' '}
                    <span className={styles.highlight}>
                        {formatFrequency()}
                    </span>
                </p>
            </div>
            <div className={styles.btn__container}>
                <button
                    className={fraunces.className}
                    onClick={handleCreateMyPlan}
                    style={
                        proceedToCheckout
                            ? { backgroundColor: '#0E8784' }
                            : { backgroundColor: '#E2DEDB' }
                    }
                >
                    Create my plan!
                </button>
            </div>

            {checkoutOpen ? (
                <>
                    <div
                        className={styles.summary__modal_wrapper}
                        onClick={handleCloseCheckout}
                        id="modal__overlay"
                    >
                        <div className={styles.summary__modal}>
                            <h4
                                className={`${fraunces.className} ${styles.summary__modal_header} `}
                            >
                                Order Summary
                            </h4>
                            <div className={styles.summary__modal__main_text}>
                                <p
                                    className={`${fraunces.className} ${styles.modal_summary__text}`}
                                >
                                    I drink my coffee{' '}
                                    <span className={styles.highlight}>
                                        {modeTemplate}
                                    </span>{' '}
                                    with a{' '}
                                    <span className={styles.highlight}>
                                        {optionsState.type}
                                    </span>{' '}
                                    type of bean.{' '}
                                    <span className={styles.highlight}>
                                        {optionsState.quantity}g,
                                    </span>{' '}
                                    <span className={styles.highlight}>
                                        {grindTemplate}
                                    </span>{' '}
                                    sent to me{' '}
                                    <span className={styles.highlight}>
                                        {formatFrequency()}
                                    </span>
                                </p>
                                <p style={{ fontSize: '15px' }}>
                                    Is this correct? You can proceed to checkout
                                    or go back to plan selection if something is
                                    off. Subscription discount codes can also be
                                    redeemed at the checkout.
                                </p>
                                <div className={styles.checkout_btn_mobile}>
                                    <button className={`${fraunces.className}`}>
                                        Checkout - ${checkoutPrice} / mo
                                    </button>
                                </div>
                                <div className={styles.checkout_btn_tablet}>
                                    <p className={fraunces.className}>
                                        ${checkoutPrice} / mo
                                    </p>
                                    <button className={`${fraunces.className}`}>
                                        Checkout
                                    </button>
                                </div>
                            </div>
                        </div>{' '}
                    </div>
                </>
            ) : null}
        </div>
    )
}
