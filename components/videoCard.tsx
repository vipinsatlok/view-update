export const VideoCard = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='grid md:grid-cols-4 grid-cols-2 mb-5 p-5 bg-gray-100 border border-gray-300  shadow-md gap-5'>{children}</div>
    )
}

export const ThumbnailCard = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='col-span-2 md:col-span-1'>{children}</div>
    )
}

export const TitleCard = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='md:col-span-3 col-span-2'>{children}</div>
    )
}