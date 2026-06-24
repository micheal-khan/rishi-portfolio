import Image from 'next/image'
import Slider from 'react-infinite-logo-slider'

const SingleBrand = ({ brand }: { brand: any }) => {
  const { image, title, darkImg } = brand

  return (
    <Slider.Slide>
      <div className='flex h-20 w-52 items-center justify-center rounded-xl bg-white/90 px-5 py-3 shadow-sm dark:bg-white/10'>
        {image ? (
          <>
            <Image
              src={image}
              alt={title}
              height={56}
              width={150}
              className='dark:hidden max-h-12 w-full object-contain'
            />
            <Image
              src={darkImg || image}
              alt={title}
              height={56}
              width={150}
              className='dark:block hidden max-h-12 w-full object-contain'
            />
          </>
        ) : (
          <p className='text-center text-xl font-semibold text-dark_black dark:text-white'>
            {title}
          </p>
        )}
      </div>
    </Slider.Slide>
  )
}

export default SingleBrand
