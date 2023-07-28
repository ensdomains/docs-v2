'use client';

import { formatAddress } from 'ens-tools';
import { FC } from 'react';

export const TruncatedAddress: FC<{ address?: string }> = ({ address }) => {
    return <>{formatAddress(address)}</>;
};
