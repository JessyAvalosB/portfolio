import { ContactMeForm, Typography } from '@/components';

const ContactMe = () => {
    return (
        <section id='contact-section' className='flex flex-col items-center justify-center h-screen gap-y-10'>
            <Typography
                variant='h4'>
                Contact
            </Typography>
            <ContactMeForm />
        </section>
    )
}

export default ContactMe;
