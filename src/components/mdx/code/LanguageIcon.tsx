import { FC } from 'react';

import { CodeConfig } from './getCodeData';

const typescriptIcon = '/icons/typescript.png';
const reactIcon = '/icons/react.svg';
const rustIcon = '/icons/rust.svg';

export const LanguageIcon: FC<{
    codeData: CodeConfig;
}> = ({ codeData: { icon, language, tags } }) => {
    if (!icon) return <></>;

    return (
        <div className="w-4 h-4 rounded-full bg-blue-50">
            <img
                src={icon}
                className="w-full h-full object-contain"
                alt={language}
            />
        </div>
    );
};
