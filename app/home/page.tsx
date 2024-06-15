import { Welcome, AboutMe, Stack, Experiences } from '@/components';
export default function Home() {
    return (
        <div className="flex flex-col px-5 pb-5 gap-y-10">
            <Welcome />
            <div className='flex flex-col items-center justify-center h-screen gap-y-10'>
                <AboutMe />
                <Stack />
            </div>
            <div className='flex items-center justify-center'>
                <Experiences />
            </div>
        </div>
    )
}
