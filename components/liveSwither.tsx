import Link from 'next/link'


const LiveSwither = () => {
    return (
        <div className="grid grid-cols-2 mb-10">
            <Link href={"/live"}>
                <div className="bg-gray-800 font-bold text-white text-xl p-5 text-center cursor-pointer" >YOUTUBE LIVE</div>
            </Link>
            <Link href={"/live/facebook-live"}>
                <div className="bg-gray-300 font-bold text-white text-xl p-5 text-center cursor-pointer" >FACEBOOK LIVE</div>
            </Link>
        </div>
    )
}

export default LiveSwither