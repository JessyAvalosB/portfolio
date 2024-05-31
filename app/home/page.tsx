import { AboutMe, Stack } from '@/components';
export default function Home() {
    return (
        <div className="flex flex-col my-8 gap-y-8">
            <AboutMe />
            <Stack />
        </div>
    )
}
