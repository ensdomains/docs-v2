import '../src/styles.css';
import 'nextra-theme-docs/style.css';

export default function Nextra({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => <div>{page}</div>);

    console.log('layout', Component.getLayout, pageProps);

    return getLayout(<Component {...pageProps} />);
}
