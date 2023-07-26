import { InfoIcon } from '../icons/InfoIcon';

export const Note = ({ children }) => {
    return (
        <div className="my-6 flex gap-2.5 rounded-2xl border border-ens-500/20 bg-ens-50/50 p-4 leading-6 text-ens-900 dark:border-ens-500/30 dark:bg-ens-500/5 dark:text-ens-200 dark:[--tw-prose-links:theme(colors.white)] dark:[--tw-prose-links-hover:theme(colors.ens.300)]">
            <InfoIcon className="mt-1 h-4 w-4 flex-none fill-ens-500 stroke-white dark:fill-ens-200/20 dark:stroke-ens-200" />
            <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
                {children}
            </div>
        </div>
    );
};
