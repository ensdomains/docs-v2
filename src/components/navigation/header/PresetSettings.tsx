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
        <div className="relative h-full group flex items-center px-2">
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center">
                    <img
                        src={config.icon}
                        alt=""
                        className="w-full h-full object-contain"
                    />
                </div>
                <div>{config.name}</div>
            </div>
            <div className="absolute top-full hidden group-hover:block grid-cols-3 right-0 w-fit bg-white border rounded-b-md">
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
                                        'w-full flex items-center px-1 gap-1 hover:bg-gray-100 text-base',
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
