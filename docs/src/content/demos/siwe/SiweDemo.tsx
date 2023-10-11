'use client';

import { formatAddress } from '@ens-tools/format';
import { useEffect } from 'react';
import { FaSignature, FaSpinner } from 'react-icons/fa';
import { ImExit } from 'react-icons/im';
import { SiweMessage } from 'siwe';
import {
    configureChains,
    createConfig,
    mainnet,
    useAccount,
    useConnect,
    useDisconnect,
    useEnsName,
    useSignMessage,
    WagmiConfig,
} from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { publicProvider } from 'wagmi/providers/public';

import { ClientOnly } from '@/ClientOnly';
import { Button } from '@/components/Button';

const {
    chains: _chains,
    publicClient,
    webSocketPublicClient,
} = configureChains([mainnet], [publicProvider()]);

const config = createConfig({
    autoConnect: true,
    publicClient,
    webSocketPublicClient,
});

const Demo = () => {
    const { address, isConnected } = useAccount();
    const { connect } = useConnect();
    const { disconnect } = useDisconnect();
    const { data: ensName } = useEnsName({ address });
    const {
        data: signatureData,
        signMessage,
        isLoading,
        reset,
    } = useSignMessage();

    useEffect(() => {
        reset();
    }, [address]);

    return (
        <div className="flex w-full flex-col items-center justify-center py-2">
            {isConnected ? (
                <>
                    <div>
                        Connected as{' '}
                        <a
                            href={'https://ens.app/' + ensName}
                            className="text-blue-500"
                        >
                            {ensName || formatAddress(address)}
                        </a>
                    </div>
                    <div className="flex items-stretch gap-2">
                        <Button
                            variant="primary"
                            className="flex items-center gap-2"
                            onClick={() => {
                                const domain = location.host;
                                const statement =
                                    'I solemnly swear this is a cool demo';
                                const message = new SiweMessage({
                                    domain,
                                    address,
                                    statement,
                                    uri: location.origin,
                                    version: '1',
                                    chainId: 1,
                                });

                                signMessage({
                                    message: message.prepareMessage(),
                                });
                            }}
                        >
                            {isLoading ? (
                                <FaSpinner className="animate-spin" />
                            ) : (
                                <FaSignature />
                            )}
                            {isLoading ? 'Opening wallet...' : 'Sign in'}
                        </Button>
                        <Button
                            variant="secondary"
                            className="flex items-center gap-2"
                            onClick={() => {
                                disconnect();
                            }}
                        >
                            <ImExit />
                        </Button>
                    </div>
                    {signatureData && (
                        <div className="mt-2 rounded-md border border-green-200 bg-green-50 px-3 py-0.5 text-green-500">
                            Signature Verified!
                        </div>
                    )}
                </>
            ) : (
                <Button
                    variant="primary"
                    onClick={() => {
                        const x = new InjectedConnector();

                        connect({ chainId: 1, connector: x });
                    }}
                >
                    Connect Wallet
                </Button>
            )}
        </div>
    );
};

export const SiweDemo = () => (
    <ClientOnly
        child={() => (
            <WagmiConfig config={config}>
                <Demo />
            </WagmiConfig>
        )}
    />
);
