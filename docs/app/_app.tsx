import '@/styles/tailwind.css';
import 'focus-visible';

import { AppProps } from 'next/app';

const App = ({ Component, pageProps: rawPageProperties }: AppProps) => {
    console.log('yeeeet', rawPageProperties);

    return (
        <>
            <h1>YEEET@@@@@</h1>
        </>
    );
};

export default App;
