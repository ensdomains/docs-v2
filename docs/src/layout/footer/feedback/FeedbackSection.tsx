'use client';

import { FormEventHandler, ForwardedRef, forwardRef, useState } from 'react';

export const CheckIcon = (properties) => {
    return (
        <svg viewBox="0 0 20 20" aria-hidden="true" {...properties}>
            <circle cx="10" cy="10" r="10" strokeWidth="0" />
            <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m6.75 10.813 2.438 2.437c1.218-4.469 4.062-6.5 4.062-6.5"
            />
        </svg>
    );
};

function FeedbackButton(properties) {
    return (
        <button
            type="submit"
            className="bg-ens-light-blue-surface dark:bg-ens-dark-blue-surface text-ens-light-blue-dim dark:ens-dark-blue-dim px-3 text-sm font-medium transition"
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
                <p className="text-sm font-bold">Was this page helpful?</p>
                <div className="group grid h-8 grid-cols-[1fr,1px,1fr] overflow-hidden rounded-xl">
                    <FeedbackButton data-response="yes">Yes</FeedbackButton>
                    <div className="" />
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
                <div className="flex h-fit items-center gap-1.5 overflow-hidden rounded-lg text-sm">
                    <CheckIcon className="fill-ens-light-blue-primary dark:fill-ens-200/20 dark:stroke-ens-200 h-4 w-4 flex-none stroke-white" />
                    <div className="text-ens-light-text-primary dark:text-ens-dark-text-primary flex gap-2 leading-5">
                        <span>Thanks for your feedback!</span>
                        <span>
                            (
                            <a
                                href="mailto:info@ens.domains"
                                className="underline"
                            >
                                I have more feedback
                            </a>
                            )
                        </span>
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
