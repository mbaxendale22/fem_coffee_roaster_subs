'use client'

import { useState } from 'react'
import { OptionsState } from '../types'

import { optionsData } from '@/app/data/optionsData'
import AccordionItem from '@/app/components/accordionItem'

export default function OptionsMenu() {
    const [optionsState, setOptionsState] = useState({
        mode: '',
        type: '',
        quantity: '',
        grind: '',
        frequency: '',
    })

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
        </div>
    )
}
