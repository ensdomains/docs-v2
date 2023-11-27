import { FC } from 'react';

import { NameLookupDemo } from './namelookup/NameLookup';
import { ResolverTestDemo } from './resolvertest';
import { SiweDemo } from './siwe/SiweDemo';

export const LiveDemo: FC<{ id?: string }> = ({ id }) => {
    return (
        <div className="card not-prose w-full p-4">
            {id == 'name_lookup' && <NameLookupDemo />}
            {id == 'siwe' && <SiweDemo />}
            {id == 'resolver_test' && <ResolverTestDemo />}
        </div>
    );
};
