import { InputProps } from "./InputTypes"

export const Input = ({
    onChange,
    type = 'text',
    disabled = false,
    rows = 5,
    name,
    value,
    placeholder,
    ...rest
}: InputProps) => {
    const { border, text, disabled: ds } = {
        border: 'border-black dark:border-white',
        text: 'text-text-color dark:text-text-color-dark',
        disabled: 'disabled:bg-gray-200 dark:disabled:bg-gray-700 disabled:border-transparent disabled:text-gray-300 dark:disabled:text-gray-400'
    }
    return (
        <>
            {type === 'textArea'
                ? (<textarea
                    className="px-3 py-2 font-medium rounded"
                    name={name}
                    onChange={onChange}
                    rows={rows}
                    placeholder={placeholder}>
                    {value}
                </textarea>)
                : (<input
                    className={`px-3 py-2 font-medium rounded`}
                    type={''}
                    name={name}
                    onChange={onChange}
                    disabled={disabled}
                    value={value}
                    placeholder={placeholder}
                    {...rest} />)}

        </>
    )
}
