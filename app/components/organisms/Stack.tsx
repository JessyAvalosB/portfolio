import { Typography, Slider } from '@/components'
export const Stack = () => {
    return (
        <div
            className='flex flex-col items-center gap-3'>
            <Typography
                className=' text-primary'
                variant='h5'>
                Stack
            </Typography>
            <Slider />
        </div>
    )
}
