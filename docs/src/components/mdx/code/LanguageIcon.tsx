import { FC } from 'react';

import { CodeConfig } from './getCodeData';

export const LanguageIcon: FC<{
    codeData: CodeConfig;
}> = ({ codeData: { icon, language, tags: _tags } }) => {
    if (!icon) return <></>;

    return (
        <div className="h-3 w-3 rounded-full bg-blue-50">
            <img
                src={icon}
                className="h-full w-full object-contain"
                alt={language}
            />
        </div>
    );
};
