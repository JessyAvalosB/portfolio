import { Typography, Input } from '@/components';
import { InputTypes } from '../../atoms/Input/InputTypes';

export interface FieldInputProps {
    label: string;
    name: string;
    placeholder: string;
    type?: InputTypes;
    value?: string;
    disabled?: boolean;
}

const FieldInput = ({ label, ...rest }: FieldInputProps) => {
    return (
        <div className='flex flex-col w-full gap-2'>
            <Typography variant='inputLabel'>
                {label}
            </Typography>
            <Input onChange={() => null} {...rest} />
        </div>
    )
}

export default FieldInput
