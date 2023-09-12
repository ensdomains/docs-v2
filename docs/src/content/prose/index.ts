import { default as a } from 'next/link';

import { Button } from '@/components/Button';
import { Col } from '@/components/mdx/Col';
import { EmbedLink } from '@/components/mdx/EmbedLink';
import { h2 } from '@/components/mdx/h2';
import { Note } from '@/components/mdx/Note';
import { Properties } from '@/components/mdx/Properties';
import { Property } from '@/components/mdx/Property';
import { Row } from '@/components/mdx/Row';
import { Repository } from '@/components/repository/Repository';
import { VideoComponent } from '@/components/video/VideoComponent';

import { Code, Pre } from './code/Code';
import { CodeGroup } from './code/group/CodeGroup';

export const prose = {
    a: a as any,
    h2,
    Note,
    Row,
    Col,
    Properties,
    Property,
    code: Code,
    CodeGroup,
    pre: Pre,
    button: Button,
    Button,
    VideoComponent,
    EmbedLink,
    Repository,
};
