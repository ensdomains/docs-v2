import type { MDXComponents } from 'mdx/types';
import { default as a } from 'next/link';

import { Button } from '@/components/Button';
import { Code, Pre } from '@/components/mdx/Code';
import { CodeGroup } from '@/components/mdx/code/CodeGroup';
import { Col } from '@/components/mdx/Col';
import { EmbedLink } from '@/components/mdx/EmbedLink';
import { h2 } from '@/components/mdx/h2';
import { Note } from '@/components/mdx/Note';
import { Properties } from '@/components/mdx/Properties';
import { Property } from '@/components/mdx/Property';
import { Row } from '@/components/mdx/Row';
import { Repository } from '@/components/repository/Repository';
import { VideoComponent } from '@/components/video/VideoComponent';

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // Allows customizing built-in components, e.g. to add styling.
        // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
        a: a as any,
        h2,
        Note,
        Row,
        Col,
        Properties,
        Property,
        code: Code,
        CodeGroup: CodeGroup as any,
        pre: Pre as any,
        button: Button as any,
        Button: Button as any,
        VideoComponent,
        EmbedLink: EmbedLink as any,
        Repository: Repository as any,
        ...components,
    };
}
