import { Fade } from 'react-awesome-reveal';

import styles from './index.module.css';

import { Button, Container, Layout, TimelineCard } from '@/components';
import { Card } from '@/components/Card';
import { StoryCard } from '@/components/StoryCard';
import { BlogCard } from '@/components/BlogCard';
import { BLOGCONTENT, CONTENT, TimelineData } from '@/config/constants';

export default function Company() {
  return (
    <Layout>
      <div className='relative w-full md:h-[895px] pt-[200px] bg-[url(/images/BG.png)] bg-no-repeat bg-cover'>
        <div className='flex flex-col justify-between items-center h-full'>
          <div className='max-w-[60rem] flex flex-col items-center justify-center text-center'>
            <div className='space-y-2'>
              <h1 className='text-6xl leading-[80px] font-bold text-white'>
                Our Story
              </h1>
            </div>

            <p className='text-gray-700 text-base text-white mt-5 mb-[26px]'>
              Pipeline Organics is developing higher efficiency enzymatic
              biofuel cells to generate clean, continuous renewable electricity
              from wastewater, aiding energy-intensive industries meet net-zero
              targets.
            </p>

            <Button variant='primary'>Explore now →</Button>
          </div>
          <div className='pt-20 relative z-10'>
            <img
              alt='Innovative material'
              className='w-full h-full object-cover object-center'
              height='100%'
              src='/images/FoundersPicture .png'
              width='100%'
            />
          </div>
        </div>
        <div className='wave absolute -bottom-[1px] w-full'>
          <img src='/images/wave.svg' alt='wave' className='w-full' />
        </div>
      </div>
      <div className='poweredSection flex flex-col justify-center items-center pt-24 md:pt-80'>
        <p className='text-gray font-semibold mb-5'>Powering clean industry</p>

        <div className='flex gap-6 items-center '>
          <Fade direction='left' triggerOnce={true} cascade>
            <img
              src='/images/CocaCola-white.png'
              alt='logo'
              className='w-[121px] h-[38px]'
            />
            <img
              src='/images/White-water.png'
              alt='logo'
              className='w-[100px] h-[30px]'
            />
            <img
              src='/images/logo3.png'
              alt='logo'
              className='w-[100px] h-[30px]'
            />

            <img
              src='/images/logo4.png'
              alt='logo'
              className='w-[100px] h-[30px]'
            />

            <img
              src='/images/logo5.png'
              alt='logo'
              className='w-[100px] h-[30px] mix-blend-darken'
            />
          </Fade>
        </div>
      </div>
      <div>
        <Container>
          <div className='max-w-[46rem] m-auto flex flex-col pt-24 md:pt-[200px] pb-[40px] items-center justify-center text-center'>
            <h2 className=' text-4xl font-bold text-primary '>Meet the team</h2>

            <p className='text-gray-700 text-base text-gray mt-5 mb-[26px]'>
              Lorem Ipsum is simply dummy text of the printing and typesetting.
              Lorem Ipsum is simply dummy text of the printing.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-7 '>
            {CONTENT.map((data) => (
              <Card key={data.id} data={data} />
            ))}
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div className='max-w-[46rem] m-auto flex flex-col pt-24 md:pt-[200px] pb-[40px] items-center justify-center text-center'>
            <h2 className=' text-4xl font-bold text-primary '>
              Our story & mission
            </h2>

            <p className='text-gray-700 text-base text-gray mt-5 mb-[26px]'>
              Lorem Ipsum is simply dummy text of the printing and typesetting.
              Lorem Ipsum is simply dummy text of the printing.
            </p>
          </div>
          <div className='flex flex-col md:flex-row gap-3 pb-3'>
            <div className=' w-full md:w-[65%]'>
              <StoryCard
                color='#E6966F'
                subheading='Our Value Proposition'
                title='Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing.'
                text='Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing.'
              />
            </div>
            <div className=' w-full md:w-[40%]'>
              <StoryCard
                color='#46A8C2'
                subheading='Our Value Proposition'
                title='Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing.'
                text='Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.'
              />
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-3 pb-3'>
            <div className=' w-full md:w-[40%]'>
              <StoryCard
                color='#2E4169'
                subheading='Our Value Proposition'
                title='Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing.'
                text='Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.'
              />
            </div>
            <div className=' w-full md:w-[65%]'>
              <StoryCard
                color='#9747FF'
                subheading='Our Value Proposition'
                title='Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing.'
                text='Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing.'
              />
            </div>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div className='flex flex-col md:flex-row gap-3 pt-28'>
            {BLOGCONTENT.map((data) => (
              <BlogCard key={data.id} data={data} />
            ))}
          </div>
        </Container>
      </div>
      <div className=' pt-24 md:pt-44 '>
        <Container>
          <div className={styles.wrapper}>
            <div className={styles.headingText}>
              <h2 className='text-black text-4xl font-semibold '>Programs</h2>
            </div>
            {TimelineData?.map((data) => (
              <TimelineCard data={data} key={data.id} />
            ))}
          </div>
        </Container>
      </div>
    </Layout>
  );
}