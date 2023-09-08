import { OptionItem } from '@/app/data/optionsData'
import SubCard from '../subCard'
import { Dispatch, SetStateAction, useState } from 'react'
import { OptionsState } from '@/app/create-your-plan/types'
import styles from './accordionItem.module.css'
import { fraunces } from '@/app/fonts'

interface Props {
    option: OptionItem[]
    setOptionsState: Dispatch<SetStateAction<OptionsState>>
    optionsState: OptionsState
    title: string
}

export default function AccordionItem(props: Props) {
    const { option, setOptionsState, optionsState, title } = props
    const [open, setOpen] = useState(false)

    const containerStyle = open
        ? { height: 'initial', display: 'initial' }
        : { height: '0', display: 'none' }

    return (
        <div className={styles.wrapper}>
            <div className={styles.arrow__container}>
                <svg
                    onClick={() => setOpen(!open)}
                    style={
                        open
                            ? { transform: 'Rotate(180deg)', cursor: 'pointer' }
                            : { cursor: 'pointer' }
                    }
                    width="19"
                    height="13"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z"
                        fill="#0E8784"
                        fill-rule="nonzero"
                    />
                </svg>
                <h3
                    className={fraunces.className}
                    style={{ color: '#83888F', maxWidth: '80%' }}
                >
                    {title}
                </h3>
            </div>
            <div className={styles.container}>
                {option.map((t) => (
                    <div
                        key={t.id}
                        style={containerStyle}
                        className={styles.cardWrapper}
                    >
                        <SubCard
                            title={t.title}
                            description={t.description}
                            setOption={setOptionsState}
                            currentOptions={optionsState}
                            option={t.optionCategory}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
