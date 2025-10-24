import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    const latestNews = [
        'Match Highlights: Brazil vs Argentina — as it happened',
        'Live Updates: India vs Pakistan — all the key moments',
        'Full-Time Report: France vs England — score, stats & reactions',
        'Match Recap: Portugal vs Netherlands — goals and key plays',
        'Game Highlights: Italy vs Croatia — every goal and major chance',
        'As It Happened: Belgium vs Switzerland — minute-by-minute report',
        'Post-Match Summary: Japan vs South Korea — result and analysis',
        'Instant Reaction: USA vs Mexico — how the game unfolded',
        'Matchday Drama: Spain vs France — all goals and top moments',
        'Breaking: Germany vs England — highlights and post-match thoughts',
    ]

    return (
        <div className='w-11/12 mx-auto my-3'>
            <div className='flex items-center gap-5 bg-base-200 p-3'>
                <p className='font-medium text-base-100 bg-secondary px-3 py-2'>Latest</p>
                <Marquee pauseOnHover={true} speed={60}>
                    {
                        latestNews.map(news => <div key={news} className='flex font-semibold text-primary'>
                            <p className='mx-5'>{news}</p>
                            <p className='mx-5'>|</p>
                        </div>)
                    }
                </Marquee>
            </div>
        </div>
    );
};

export default LatestNews;