'use client'
import { Button, FieldInput } from '@/components';

export const ContactMeForm = () => {
    return (
        <form className='flex flex-col w-full max-w-80 place-items-end gap-y-6'>
            <FieldInput name='name' label='Nombre' placeholder='Jhoe Doe' />
            <FieldInput name='email' label='Email' placeholder='email@example.com' type='email' />
            <FieldInput name='message' label='Message' type='textArea' placeholder="Let's build that idea 🚀💥" />
            <Button onClick={() => null} variant='primaryGhost'>
                Contact
            </Button>
        </form>
    )
} 
