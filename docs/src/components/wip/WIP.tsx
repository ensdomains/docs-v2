import { FC } from 'react';

export const WIP: FC<{ missing?: string[] }> = ({ missing }) => {
    return (
        <div className="not-prose rounded-md border border-yellow-500 bg-yellow-50 p-4">
            <h2 className="text-xl font-bold text-yellow-800">
                🚧 This page is work in progress 🚧
            </h2>
            <p className="mt-2">
                🏗️👷This page is still under construction. Check back at a later
                date to see more!
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
    );
};
