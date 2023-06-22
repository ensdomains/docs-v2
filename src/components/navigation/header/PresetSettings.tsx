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
            <div className="absolute top-full hidden flex-col group-hover:flex right-0 w-auto bg-white border rounded-b-md">
                {availablePresets.map((preset) => {
                    const data = getCodeData({ variant: preset });

                    return (
                        <button
                            className={clsx(
                                'flex items-center p-4 gap-2 hover:bg-gray-100',
                                preset === activePreset && 'bg-gray-100'
                            )}
                            onClick={() => {
                                setActivePreset(preset);
                            }}
                        >
                            <LanguageIcon codeData={data} />
                            <div className="">{data.name}</div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
