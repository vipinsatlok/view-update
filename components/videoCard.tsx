export const VideoCard = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='grid grid-cols-4 mb-5 p-5 bg-gray-100 border border-gray-300  shadow-md'>{children}</div>
    )
}

export const ThumbnailCard = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='col-span-1'>{children}</div>
    )
}

export const TitleCard = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='col-span-3'>{children}</div>
    )
}