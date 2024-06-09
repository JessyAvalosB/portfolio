import { Welcome, AboutMe, Stack } from '@/components';
export default function Home() {
    return (
        <div className="flex flex-col px-5 gap-y-10">
            <Welcome />
            <div className='flex flex-col items-center justify-center h-screen gap-y-10'>
                <AboutMe />
                <Stack />
            </div>
        </div>
    )
}
