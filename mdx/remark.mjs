import { mdxAnnotations } from 'mdx-annotations';
import gfm from 'remark-gfm';

export const remarkPlugins = [mdxAnnotations.remark, gfm];
