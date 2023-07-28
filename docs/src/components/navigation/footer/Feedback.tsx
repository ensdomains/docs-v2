'use client';

import { FormEventHandler, ForwardedRef, forwardRef, useState } from 'react';

import { CheckIcon } from './Footer';

function FeedbackButton(properties) {
    return (
        <button
            type="submit"
            className="hover:bg-zinc-900/2.5 px-3 text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
            {...properties}
        />
    );
}
const FeedbackForm = forwardRef(
    (
        { onSubmit }: { onSubmit: FormEventHandler<HTMLFormElement> },
        reference: ForwardedRef<HTMLFormElement>
    ) => {
        return (
            <form
                ref={reference}
                onSubmit={onSubmit}
                className="flex items-center justify-center gap-6 md:justify-start"
            >
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Was this page helpful?
                </p>
                <div className="group grid h-8 grid-cols-[1fr,1px,1fr] overflow-hidden rounded-full border border-zinc-900/10 dark:border-white/10">
                    <FeedbackButton data-response="yes">Yes</FeedbackButton>
                    <div className="bg-zinc-900/10 dark:bg-white/10" />
                    <FeedbackButton data-response="no">No</FeedbackButton>
                </div>
            </form>
        );
    }
);

const FeedbackThanks = forwardRef(
    (_properties, reference: ForwardedRef<HTMLDivElement>) => {
        return (
            <div
                ref={reference}
                className="flex justify-center md:justify-start"
            >
                <div className="items-top bg-ens-50/50 text-ens-900 ring-ens-500/20 dark:bg-ens-500/5 dark:text-ens-200 dark:ring-ens-500/30 flex h-fit gap-3 overflow-hidden rounded-lg py-3 pl-3 pr-4 text-sm ring-1 ring-inset">
                    <CheckIcon className="fill-ens-500 dark:fill-ens-200/20 dark:stroke-ens-200 h-5 w-5 flex-none stroke-white" />
                    <div className="leading-5">
                        <div>Thanks for your feedback!</div>
                        <a
                            href="mailto:info@ens.domains"
                            className="block underline"
                        >
                            I have more feedback
                        </a>
                    </div>
                </div>
            </div>
        );
    }
);

export const Feedback = () => {
    const [submitted, setSubmitted] = useState(false);

    function onSubmit(event) {
        event.preventDefault();

        // event.nativeEvent.submitter.dataset.response
        // => "yes" or "no"

        setSubmitted(true);
    }

    return (
        <div className="relative">
            {submitted ? (
                <FeedbackThanks />
            ) : (
                <FeedbackForm onSubmit={onSubmit} />
            )}
        </div>
    );
};
