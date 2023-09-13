import { FC } from 'react';

import { NameLookupDemo } from './namelookup/NameLookup';

export const LiveDemo: FC<{ id?: string }> = ({ id }) => {
    return (
        <div className="card not-prose w-full p-4">
            {id == 'name_lookup' && <NameLookupDemo />}
        </div>
    );
};
