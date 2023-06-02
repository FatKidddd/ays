import Image from 'next/image';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

const cores = [
  {
    name: 'Our Vision',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
  },
  {
    name: 'Our Mission',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
  },
  {
    name: 'Our Values',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
  },
  {
    name: 'Our Goals',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
  },
];

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
];

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='bg-primary-950'>
        <div className='layout space-y-40'>
          <div className='min-h-main flex flex-col items-center justify-evenly md:flex-row'>
            <div className='space-y-5 md:max-w-[45%]'>
              <div className='md:space-y-4'>
                <h1 className='text-white'>
                  AI Community
                  <br />
                  By Youths, For Youths
                </h1>
              </div>
              <p className='text-primary-100 mt-2'>
                A starter for Next.js, Tailwind CSS, and TypeScript with
                Absolute A starter for Next.js, Tailwind CSS, and TypeScript
                with Absolute A starter for Next.js, Tailwind CSS, and
                TypeScript with Absolute Import, Seo, Link component,
                pre-configured with Husky Import, Seo, Link component,
                pre-configured with Husky A starter for Next.js, Tailwind CSS,
                and TypeScript with Absolute Import, Seo, Link component,
                pre-configured with Husky Import, Seo, Link component,
                pre-configured with Husky
              </p>

              <ButtonLink
                size='lg'
                className='mt-6'
                href='/components'
                variant='primary'
              >
                Join Us
              </ButtonLink>
            </div>
            <Image
              className='drop-shadow-white-xl max-w-[70%] md:max-w-[50%]'
              src='images/Blue Tech Illustration Technology Flyer.png'
              alt='tech illustration'
            />
          </div>

          {/* supported by  */}
          <div>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
              <div className='mx-auto max-w-2xl lg:text-center'>
                <h1 className='text-gray-100'>
                  Supported by (insert org logos below)
                </h1>
                <p className='mt-6 leading-8 text-gray-300'>
                  Quis tellus eget adipiscing convallis sit sit eget aliquet
                  quis. Suspendisse eget egestas a elementum pulvinar et feugiat
                  blandit at. In mi viverra elit nunc.
                </p>
              </div>
            </div>
          </div>

          {/* Our Vision, our mission, our values, our goals*/}
          <div className='mx-auto max-w-2xl lg:max-w-5xl'>
            <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
              {cores.map((core) => (
                <div key={core.name} className='relative pl-16'>
                  <dt className='h3 font-semibold leading-7 text-gray-100'>
                    <div className='bg-primary-600 absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg'></div>
                    {core.name}
                  </dt>
                  <dd className='mt-2 text-base leading-7 text-gray-300'>
                    {core.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* cards featuring sample projects */}
          <div>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
              <div className='mx-auto max-w-2xl lg:mx-0'>
                <h2 className='text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl'>
                  From the blog
                </h2>
                <p className='mt-2 text-lg leading-8 text-gray-300'>
                  Learn how to grow your business with our expert advice.
                </p>
              </div>
              <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-100 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
                {posts.map((post) => (
                  <article
                    key={post.id}
                    className='flex max-w-xl flex-col items-start justify-between'
                  >
                    <div className='flex items-center gap-x-4 text-xs'>
                      <time dateTime={post.datetime} className='text-gray-300'>
                        {post.date}
                      </time>
                      <a
                        href={post.category.href}
                        className='relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-100'
                      >
                        {post.category.title}
                      </a>
                    </div>
                    <div className='group relative'>
                      <h3 className='mt-3 text-lg font-semibold leading-6 text-gray-100 group-hover:text-gray-300'>
                        <a href={post.href}>
                          <span className='absolute inset-0' />
                          {post.title}
                        </a>
                      </h3>
                      <p className='mt-5 line-clamp-3 text-sm leading-6 text-gray-300'>
                        {post.description}
                      </p>
                    </div>
                    <div className='relative mt-8 flex items-center gap-x-4'>
                      <Image
                        src={post.author.imageUrl}
                        alt=''
                        className='h-10 w-10 rounded-full bg-gray-50'
                      />
                      <div className='text-sm leading-6'>
                        <p className='font-semibold text-gray-100'>
                          <a href={post.author.href}>
                            <span className='absolute inset-0' />
                            {post.author.name}
                          </a>
                        </p>
                        <p className='text-gray-300'>{post.author.role}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* repeated call to action */}
          <div className='mx-auto max-w-7xl pb-20 sm:px-6 lg:px-8'>
            <div className='bg-primary-300 relative isolate overflow-hidden rounded-3xl px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0'>
              <svg
                viewBox='0 0 1024 1024'
                className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0'
                aria-hidden='true'
              >
                <circle
                  cx={512}
                  cy={512}
                  r={512}
                  fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
                  fillOpacity='0.7'
                />
                <defs>
                  <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
                    <stop stopColor='#0B14D4' />
                    <stop offset={1} stopColor='#7C0CF6' />
                  </radialGradient>
                </defs>
              </svg>
              <div className='mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left'>
                <h2 className='text-3xl font-bold tracking-tight text-black sm:text-4xl'>
                  Be the next AI nerd.
                  <br />
                  Join our youth community.
                </h2>
                <p className='mt-6 text-lg leading-8 text-gray-700'>
                  Ac euismod vel sit maecenas id pellentesque eu sed
                  consectetur. Malesuada adipiscing sagittis vel nulla.
                </p>
                <div className='mt-10 flex items-center justify-center gap-x-6 lg:justify-start'>
                  <a
                    href='#'
                    className='rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                  >
                    Join Us
                  </a>
                  <a
                    href='#'
                    className='text-sm font-semibold leading-6 text-black'
                  >
                    Learn more <span aria-hidden='true'>→</span>
                  </a>
                </div>
              </div>
              <div className='relative mt-16 h-80 lg:mt-8'>
                <Image
                  className='absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10'
                  src='/images/photo_2023-05-27_09-16-07.jpg'
                  alt='App screenshot'
                  width={1824}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
