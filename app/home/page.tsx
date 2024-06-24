import { Welcome, AboutMe, Stack, Experiences } from '@/components';
export default function Home() {
    return (
        <div className="flex flex-col px-5 pb-5 gap-y-10">
            <section id='welcome-section'>
                <Welcome />
            </section>
            <section id='about-me-section' className='flex flex-col items-center justify-center h-screen gap-y-10'>
                <AboutMe />
                <Stack />
            </section>
            <section id='experience-section' className='scroll-mt-16'>
                <Experiences />
            </section>
        </div>
    )
}
