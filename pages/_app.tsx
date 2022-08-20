import '../src/styles.css';

import { Root } from './root';

export default function Nextra({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => <Root>{page}</Root>);

    return getLayout(<Component {...pageProps} />);
}
