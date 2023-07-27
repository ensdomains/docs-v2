import fs from 'node:fs';
import { join } from 'node:path';

const contentDirectory = join(process.cwd(), 'content');

export type Post = {
    slug: string;
};

export const getAllPagesSlug = () => {
    // Walk thru the content directory on all levels to get all the slugs. They should be relative to the content directory. and without the mdx extension. It should only include the files, not the directories.
    // const allPages = fs
    //     .readdirSync(contentDirectory, { withFileTypes: true })
    //     .filter((dirent) => dirent.isFile())
    //     .map((dirent) => dirent.name.replace(/\.mdx$/, ''));

    // The code above only does one level. We need to do all levels. So we need to use a recursive function.
    const walkSync = (directory: string, filelist: string[] = []) => {
        for (const file of fs.readdirSync(directory)) {
            filelist = fs.statSync(join(directory, file)).isDirectory()
                ? walkSync(join(directory, file), filelist)
                : filelist.concat(
                      join(directory, file)
                          .replace(/\.mdx$/, '')
                          // if filename is index.mdx, then we want to remove the index part
                          .replace(/\/index$/, '')
                  );
        }

        return filelist;
    };

    // return walkSync(contentDirectory);
    // running the above will give the full path. We only want the relative path. So we need to remove the contentDirectory part.
    return walkSync(contentDirectory).map((file) =>
        file.replace(`${contentDirectory}/`, '')
    );
};

export const getPageBySlug = async (slug: string): Promise<Post> => {
    const pageModule = await import(`../../content/${slug}.mdx`);

    return {
        slug,
    };
};

export const getAllPages = async () => {
    const slugs = getAllPagesSlug();

    return await Promise.all(slugs.map((slug) => getPageBySlug(slug)));
};
