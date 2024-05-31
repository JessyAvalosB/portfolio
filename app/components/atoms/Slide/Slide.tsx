import { Icon } from '@/components';
import { SlideProps } from './SlideTypes';

export const Slide = ({ icon }: SlideProps) => {
    return (
        <div className='w-[100px] place-content-center'>
            <Icon
                size='lg'
                icon={icon} />
        </div>
    )
}
