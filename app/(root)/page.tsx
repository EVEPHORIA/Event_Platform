import CategoryFilter from '@/components/shared/CategoryFilter';
import Collection from '@/components/shared/Collection'
import Search from '@/components/shared/Search';
import { Button } from '@/components/ui/button'
import { getAllEvents } from '@/lib/actions/event.actions';
import { SearchParamProps } from '@/types';
import Image from 'next/image'
import Link from 'next/link'
import AboutSection from '@/components/shared/AboutSection';
import ContactSection from '@/components/shared/ContactSection';
import ThreeCModelSection from '@/components/shared/ThreeCModelSection';
import EventManagementSection from '@/components/shared/EventManagementSection';

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6
  })

  return (
    <>
      <section className="bg-black bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold text-white">Where Every Soul Comes Alive</h1>
            <p className="p-regular-20 md:p-regular-24 text-red-300">From planning to execution, we handle every detail—so you can enjoy a seamless, stress-free celebration. Let's create magic!</p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events" className='bg-red-600 hover:bg-red-700 text-white'>
                Plan Your Event
              </Link>
            </Button>
          </div>

          <Image 
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[90vh] object-contain object-center 2xl:max-h-[70vh]"
          />
        </div>
      </section> 

<section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
  <AboutSection />
  </section>
  <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
    <ThreeCModelSection />
  </section>
  <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
    <EventManagementSection />
  </section>
      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Trust by <br /> Thousands of Events</h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>

        <Collection 
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <ContactSection />
      </section>
</>
  )
}
