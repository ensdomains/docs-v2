import { FC } from 'react';

import { ETHRegistryDemo } from './ethregistry/ETHRegistryDemo';
import { ETHRegistryRenewDemo } from './ethregistryrenew/ETHRegistryRenewDemo';
import { NameLookupDemo } from './namelookup/NameLookup';
import { ResolverTestDemo } from './resolvertest';
import { SiweDemo } from './siwe/SiweDemo';

export const LiveDemo: FC<{ id?: string }> = ({ id }) => {
    return (
        <div className="card1 not-prose w-full p-4">
            {id == 'ethregistry' && <ETHRegistryDemo />}
            {id == 'ethregistry_renew' && <ETHRegistryRenewDemo />}
            {id == 'name_lookup' && <NameLookupDemo />}
            {id == 'siwe' && <SiweDemo />}
            {id == 'resolver_test' && <ResolverTestDemo />}
        </div>
    );
};
