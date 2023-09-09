import { fraunces } from '@/app/fonts'
import styles from './subCard.module.css'
import { Dispatch, SetStateAction } from 'react'
import { OptionsState } from '@/app/create-your-plan/types'

interface Props {
    title: string
    description: string
    setOption: Dispatch<SetStateAction<OptionsState>>
    currentOptions: OptionsState
    option: string
}

export default function SubCard(props: Props) {
    const { title, description, setOption, currentOptions, option } = props

    const handleSelectOption = () => {
        if (!currentOptions) return
        setOption({ ...currentOptions, [option]: title })
    }

    const currentlySelected =
        currentOptions.frequency === title ||
        currentOptions.grind === title ||
        currentOptions.mode === title ||
        currentOptions.quantity === title ||
        currentOptions.type === title

    const renderedTitle = title === 'Filtered' ? 'Filter' : title

    return (
        <div
            className={styles.container}
            onClick={handleSelectOption}
            style={
                currentlySelected
                    ? {
                          backgroundColor: '#0E8784',
                          color: '#FEFCF7',
                      }
                    : {}
            }
        >
            <h3 className={fraunces.className}>{renderedTitle}</h3>
            <p style={currentlySelected ? { color: '#FEFCF7' } : {}}>
                {description}
            </p>
        </div>
    )
}
