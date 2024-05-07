import { InputProps } from "./InputTypes"

export const Input = ({
    onChange,
    type = 'text',
    disabled = false,
    ...rest
}: InputProps) => {
    return (
        <input
            className="px-3 py-2 text-gray-900 ease-in-out border rounded focus:transition-all enabled:border-gray-300 enabled:focus:outline-none enabled:focus:border-blue-500 enabled:focus:ring-blue-500 disabled:bg-gray-200"
            type={type}
            onChange={onChange}
            disabled={disabled}
            {...rest} />
    )
}
