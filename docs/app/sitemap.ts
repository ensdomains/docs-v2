import { glob } from 'glob';
import { MetadataRoute } from 'next';
import { join } from 'node:path';
import simpleGit from 'simple-git';
const processSlugs = (slug: string) => {
    return slug.replace('index', '');
};

const getGitLastUpdatedTimeStamp = async (slug: string) => {
    const git = simpleGit({
        baseDir: process.cwd().replace(/\/docs$/, ''),
    });
    const lastUpdatedTimeStamp = await git.log({
        file: process.cwd().replace(/\/docs$/, '') + `/content/${slug}`,
    });

    console.log(lastUpdatedTimeStamp.latest.date);

    return new Date(lastUpdatedTimeStamp.latest.date);
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const files = await glob('**/*.mdx', {
        cwd: join(process.cwd(), '../content'),
    });

    const routes = files.map(async (file) => {
        const slug = file.replace(/(\/index)?\.mdx$/, '');
        const lastUpdated = await getGitLastUpdatedTimeStamp(file);

        return {
            url: 'https://alpha-docs.ens.domains/' + processSlugs(slug),
            lastModified: lastUpdated,
        };
    });

    return await Promise.all(routes);
}
