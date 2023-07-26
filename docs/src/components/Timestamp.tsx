'use client';
import { FC } from 'react';

const rtf = new Intl.RelativeTimeFormat('en', { style: 'short' });

export const TimeSince: FC<{ date: number }> = ({ date }) => {
    const timeSince = rtf.format(date - Date.now(), 'seconds');

    return <>{timeSince}</>;
};
