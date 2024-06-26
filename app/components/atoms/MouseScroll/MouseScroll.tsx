export const MouseScroll = () => {
    return (
        <div className='absolute w-[25px] h-10 border-black dark:border-white rounded-[13px] border-2 border-solid left-2/4 bottom-16 -translate-x-2/4 before:content-[""] before:absolute before:w-[3px] before:h-[5px] before:bg-black before:dark:bg-white before:-translate-x-2/4 before:translate-y-0 before:animate-scrollDown before:rounded-[50%] before:left-2/4 before:top-2.5'>
            <div className="absolute w-0.5 h-0.5 -translate-x-2/4 bg-black dark:bg-white animate-fading left-2/4 [animation-delay:calc((1*0.4s)-0.4s)] bottom-[calc(-2px-(6px*1))]"></div>
            <div className="absolute w-0.5 h-0.5 -translate-x-2/4 bg-black dark:bg-white animate-fading left-2/4 [animation-delay:calc((2*0.4s)-0.4s)] bottom-[calc(-2px-(6px*2))]"></div>
            <div className="absolute -translate-x-2/4 animate-fading left-2/4 w-0 h-0 bg-transparent border-t-black dark:border-t-white bottom-[calc(-2px-(6px*3))] border-t-[3px] border-x-4 border-x-transparent border-solid [animation-delay:calc((3*0.4s)-0.4s)]"></div>
        </div>
    )
}
