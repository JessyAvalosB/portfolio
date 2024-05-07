import { InputHTMLAttributes } from "react";

export type InputTypes = 'text' | 'email' | 'password' | 'number' | 'checkbox' | 'radio';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    onChange: () => void;
    type?: InputTypes;
    disabled?: boolean;
}
