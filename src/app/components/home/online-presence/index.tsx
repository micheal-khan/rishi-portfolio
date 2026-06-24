'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect'

const VideoFrame = ({ item }: { item: any }) => (
  <div
    className={`overflow-hidden rounded-2xl bg-black ${
      item.format === 'wide' ? 'aspect-video' : 'aspect-[9/16]'
    }`}
  >
    <iframe
      src={item.embed}
      title={item.title}
      className='h-full w-full'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      allowFullScreen
    />
  </div>
)

const VideoMeta = ({ item, label }: { item: any; label: string }) => (
  <div className='flex flex-col gap-4'>
    <div className='flex items-start justify-between gap-4'>
      <div>
        <span className='text-sm font-medium uppercase text-white/60'>
          {label}
        </span>
        <h3 className='mt-3 text-2xl text-white'>{item.title}</h3>
        {item.metric && <p className='text-white/60'>{item.metric}</p>}
      </div>
      <Link
        href={item.link}
        target='_blank'
        aria-label={`Open ${item.title}`}
        className='shrink-0 rounded-full bg-white/10 p-2 text-white transition hover:bg-purple_blue'
      >
        <Icon
          icon='icon-park-solid:circle-right-up'
          width='24'
          height='24'
          style={{ color: '#fbfbfb' }}
        />
      </Link>
    </div>
    <div className='flex flex-wrap gap-2'>
      {item.tag?.map((tag: string) => (
        <span
          key={tag}
          className='rounded-full border border-white/20 px-3 py-1.5 text-sm font-medium text-white'
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
)

function OnlinePresence() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [onlinePresenceList, setOnlinePresenceList] = useState<any[]>([])
  const [designInsightList, setDesignInsightList] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/page-data')
        if (!res.ok) throw new Error('Failed to fetch')

        const data = await res.json()
        setOnlinePresenceList(data?.onlinePresenceList || [])
        setDesignInsightList(data?.designInsightList || [])
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  const portraitVideos = onlinePresenceList.filter((item) => !item.wide)
  const featuredVideos = onlinePresenceList.filter((item) => item.wide)
  const firstFeature = featuredVideos[0]
  const otherFeatures = featuredVideos.slice(1)
  const designInsight = designInsightList[0]

  return (
    <section id='work' className='scroll-mt-36'>
      <div ref={ref} className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col justify-center gap-10 md:gap-20'>
            <div className='mx-auto max-w-2xl flex items-center text-center'>
              <h2>
                <TextGenerateEffect words='Video work, campaign edits' />
                <TextGenerateEffect
                  words='and design creatives'
                  delay={1}
                  className='italic font-normal instrument-font'
                />
              </h2>
            </div>

            <div className='flex flex-col gap-6'>
              <div className='flex flex-col xl:flex-row gap-6'>
                {firstFeature && (
                  <motion.div
                    initial={{ x: -100, y: -100, opacity: 0 }}
                    animate={inView ? { x: 0, y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8 }}
                    className='flex w-full flex-col gap-6 rounded-2xl bg-dark_black p-5 dark:bg-white/10'
                  >
                    <VideoFrame item={firstFeature} />
                    <VideoMeta item={firstFeature} label='Featured edit' />
                  </motion.div>
                )}

                {designInsight && (
                  <motion.div
                    initial={{ x: 100, y: -100, opacity: 0 }}
                    animate={inView ? { x: 0, y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8 }}
                    className='flex flex-col justify-between gap-20 rounded-2xl bg-pale-yellow p-8 xl:max-w-25'
                  >
                    <span className='uppercase text-sm font-medium text-dark_black/60'>
                      Design Work
                    </span>
                    <div className='flex flex-col gap-5'>
                      <h3 className='text-3xl dark:text-dark_black'>
                        {designInsight.title}
                      </h3>
                      <p className='dark:text-dark_black/70'>
                        {designInsight.description}
                      </p>
                      <div className='flex flex-wrap gap-2'>
                        {designInsight.stats?.map((stat: string) => (
                          <span
                            key={stat}
                            className='rounded-full border border-dark_black/20 px-3 py-1.5 text-sm font-medium text-dark_black'
                          >
                            {stat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              <div className='flex flex-col xl:flex-row gap-6'>
                <motion.div
                  initial={{ x: -100, y: 100, opacity: 0 }}
                  animate={inView ? { x: 0, y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8 }}
                  className='grid w-full gap-4 rounded-2xl bg-dark_black/5 p-5 dark:bg-white/5 sm:grid-cols-2 xl:grid-cols-4'
                >
                  {portraitVideos.map((item) => (
                    <div key={item.link} className='flex flex-col gap-4'>
                      <VideoFrame item={item} />
                      <div className='flex items-start justify-between gap-3'>
                        <div>
                          <h3 className='text-xl'>{item.title}</h3>
                          {item.metric && (
                            <p className='text-sm text-dark_black/60 dark:text-white/60'>
                              {item.metric}
                            </p>
                          )}
                        </div>
                        <Link
                          href={item.link}
                          target='_blank'
                          aria-label={`Open ${item.title}`}
                          className='shrink-0 rounded-full bg-dark_black p-2 text-white transition hover:bg-purple_blue dark:bg-white/10'
                        >
                          <Icon
                            icon='icon-park-solid:circle-right-up'
                            width='20'
                            height='20'
                            style={{ color: '#fbfbfb' }}
                          />
                        </Link>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {otherFeatures.length > 0 && (
                <div className='grid gap-6 lg:grid-cols-2'>
                  {otherFeatures.map((item, index) => (
                    <motion.div
                      key={item.link}
                      initial={{ y: 80, opacity: 0 }}
                      animate={inView ? { y: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.8, delay: index * 0.15 }}
                      className='flex flex-col gap-6 rounded-2xl bg-dark_black p-5 dark:bg-white/10'
                    >
                      <VideoFrame item={item} />
                      <VideoMeta item={item} label='Campaign video' />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OnlinePresence
