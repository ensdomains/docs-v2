import clsx from 'clsx';

import { getCodeData } from '@/components/mdx/code/getCodeData';
import { LanguageIcon } from '@/components/mdx/code/LanguageIcon';
import {
    availablePresets,
    useActivePreset,
    useActivePresetConfig,
} from '@/lib/presets';

export const PresetSettings = () => {
    const { setActivePreset } = useActivePreset();
    const { activePreset, config } = useActivePresetConfig();

    return (
        <div className="group relative flex h-full items-center px-2">
            <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center">
                    <img
                        src={config.icon}
                        alt=""
                        className="h-full w-full object-contain"
                    />
                </div>
                <div>{config.name}</div>
            </div>
            <div className="absolute right-0 top-full hidden w-fit grid-cols-3 rounded-b-md border bg-white group-hover:block">
                <ul
                    className="grid w-fit gap-1 p-2"
                    style={{ gridTemplateColumns: 'repeat(3, auto)' }}
                >
                    {availablePresets.map((preset) => {
                        const data = getCodeData({ variant: preset });

                        return (
                            <li key={preset} className="w-full">
                                <button
                                    className={clsx(
                                        'flex w-full items-center gap-1 px-1 text-base hover:bg-gray-100',
                                        preset === activePreset && 'bg-gray-100'
                                    )}
                                    onClick={() => {
                                        setActivePreset(preset);
                                    }}
                                >
                                    <LanguageIcon codeData={data} />
                                    <div className="">{data.name}</div>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
