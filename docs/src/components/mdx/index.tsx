import { default as a } from 'next/link';

import { LiveDemo } from '../../demos/LiveDemo';
import { Button } from '../Button';
import { VideoComponent } from '../video/VideoComponent';
import { Code as code, Pre as pre } from './code/Code';
import { CodeGroup } from './code/CodeGroup';
import { Col } from './Col';
import { EmbedLink } from './EmbedLink';
import { h2 } from './h2';
import { Note } from './Note';
import { Properties } from './Properties';
import { Property } from './Property';
import { Row } from './Row';

export const mdxComponents = {
    LiveDemo,
    h2,
    Note,
    Row,
    Col,
    Properties,
    Property,
    code,
    CodeGroup,
    pre,
    button: Button,
    Button,
    VideoComponent,
    a,
    EmbedLink,
};
