import { Slide } from '@/components'
import { hidders, icons, stackIcons } from './SliderTypes';

export const Slider = () => {
    const { leftHidde, rightHidde } = hidders;
    const iconsList = [...icons, ...icons]
    return (
        <div
            className={`overflow-hidden relative xs:w-[400px] sm:w-[568px] md:w-[620px] lg:w-[900px] place-content-center ${leftHidde} ${rightHidde}`}>
            <div
                className='flex w-[calc(250px*80)] gap-8 animate-infinite-slide-x'>
                {iconsList.map((icon, index) => (
                    <Slide key={index} icon={stackIcons[icon]} />
                ))}
            </div>
        </div>
    )
}
