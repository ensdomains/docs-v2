import { FC } from 'react';

export const WIP: FC<{ missing?: string[] }> = ({ missing }) => {
    return (
        <div>
            <div className="not-prose border-ens-light-yellow-bright bg-ens-light-yellow-surface dark:border-ens-dark-yellow-bright dark:bg-ens-dark-yellow-surface rounded-md border p-6">
                <h2 className="text-ens-light-yellow-dim dark:text-ens-dark-yellow-dim text-xl font-bold">
                    🚧 This page is work in progress 🚧
                </h2>
                <p className="mt-2">
                    🏗️👷This page is still under construction. Check back at a
                    later date to see more!
                </p>
                {missing && (
                    <div>
                        <div>This page is still missing:</div>
                        <ul className="px-4">
                            {missing.map((m, index) => (
                                <li key={index}>- {m}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};
