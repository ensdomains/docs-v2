import { FC } from 'react';

import { CodeConfig } from './getCodeData';

export const LanguageIcon: FC<{
    codeData: CodeConfig;
}> = ({ codeData: { icon, language, tags } }) => {
    if (!icon) return <></>;

    return (
        <div className="w-3 h-3 rounded-full bg-blue-50">
            <img
                src={icon}
                className="w-full h-full object-contain"
                alt={language}
            />
        </div>
    );
};
