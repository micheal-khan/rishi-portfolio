import Image from 'next/image'
const SingleCreativeMind = ({
    creativemind,
}: {
    creativemind: any
}) => {
    const { image, name, position } = creativemind

    return (
        <div
            className='group flex h-full flex-col gap-6 rounded-2xl bg-dark_black/5 p-5 transition hover:-translate-y-1 hover:bg-dark_black/10 dark:bg-white/5 dark:hover:bg-white/10'>
            <div className='flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-white p-6 dark:bg-white'>
                <Image
                    src={image}
                    alt={name}
                    width={420}
                    height={315}
                    className='max-h-full w-full object-contain'
                />
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-xl font-medium'>{name}</p>
                <p className='text-dark_black/60 dark:text-white/60'>
                    {position}
                </p>
            </div>
        </div>
    )
}

export default SingleCreativeMind
