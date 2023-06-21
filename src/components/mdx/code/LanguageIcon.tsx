import { FC } from 'react';

const typescriptIcon = '/icons/typescript.png';
const reactIcon = '/icons/react.svg';
const rustIcon = '/icons/rust.svg';

const logoLookup = {
    typescript: typescriptIcon,
    ts: typescriptIcon,
    jsx: typescriptIcon,
    tsx: reactIcon,
    rust: rustIcon,
    rs: rustIcon,
};

export const LanguageIcon: FC<{
    language: { language: string; icon: string };
}> = ({ language: _language }) => {
    const { icon, language } = _language;

    return (
        <div className="w-4 h-4 rounded-full bg-blue-50">
            <img
                src={logoLookup[icon.toLowerCase()]}
                x-h={icon}
                className="w-full h-full object-contain"
                alt={language}
            />
        </div>
    );
};
