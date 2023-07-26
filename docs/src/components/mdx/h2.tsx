import { Heading } from './heading';

export const h2 = function H2(properties) {
    return <Heading level={2} {...properties} />;
};
