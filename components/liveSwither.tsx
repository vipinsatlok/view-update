'use client'; // Mark the component as a Client Component

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // usePathname from next/navigation

const LiveSwither = () => {
    const pathname = usePathname(); // Get the current pathname

    // Check current route to apply conditional styles
    const isYouTubeLive = pathname === "/live";
    const isFacebookLive = pathname === "/live/facebook-live";

    return (
        <div className="grid md:grid-cols-2 grid-cols-1 mb-10">
            {/* YouTube Live Button */}
            <Link href="/live">
                <div
                    className={`font-bold text-white text-xl p-5 text-center cursor-pointer ${isYouTubeLive ? "bg-gray-800" : "bg-gray-500"
                        }`}
                >
                    YOUTUBE LIVE
                </div>
            </Link>

            {/* Facebook Live Button */}
            <Link href="/live/facebook-live">
                <div
                    className={`font-bold text-white text-xl p-5 text-center cursor-pointer ${isFacebookLive ? "bg-gray-800" : "bg-gray-300"
                        }`}
                >
                    FACEBOOK LIVE
                </div>
            </Link>
        </div>
    );
};

export default LiveSwither;
