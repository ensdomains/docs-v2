'use client';

import { FC } from 'react';
import { FiX } from 'react-icons/fi';
import { useAccount, useConnect, useConnectors, useDisconnect } from 'wagmi';

import { Button } from '@/components/Button';

import { ConnectModalInner } from './modal';

export const ConnectModal: FC<{ isOpen: boolean; onClose: () => void }> = ({
    isOpen,
    onClose,
}) => {
    const connectors = useConnectors({});
    const { status, address } = useAccount();
    const { disconnect } = useDisconnect();
    const { connect } = useConnect();

    return (
        <ConnectModalInner isOpen={isOpen} onClose={onClose}>
            {status === 'connecting' && (
                <div className="card1 w-full space-y-2 p-4">
                    <div className="flex items-start justify-between">
                        <div className="font-bold">Connecting</div>
                        <button
                            className="hover:border-ens-light-border dark:hover:border-ens-dark-border rounded-full border border-transparent p-1"
                            onClick={onClose}
                        >
                            <FiX />
                        </button>
                    </div>
                    <div>TODO: Loading spinner here</div>
                </div>
            )}
            {status === 'connected' && (
                <div className="card1 w-full space-y-2 p-4">
                    <div className="flex items-start justify-between">
                        <div className="font-bold">Connected</div>
                        <button
                            className="hover:border-ens-light-border dark:hover:border-ens-dark-border rounded-full border border-transparent p-1"
                            onClick={onClose}
                        >
                            <FiX />
                        </button>
                    </div>
                    <div>TODO: Profile Info here</div>
                    <div className="flex w-full flex-col gap-1">
                        <Button
                            variant="red"
                            onClick={() => {
                                disconnect({}, { onSuccess: onClose });
                            }}
                        >
                            Disconnect
                        </Button>
                        <Button
                            onClick={() => {
                                onClose();
                            }}
                        >
                            Exit
                        </Button>
                    </div>
                </div>
            )}
            {status === 'disconnected' && (
                <div className="card1 w-full space-y-2 p-4">
                    <div className="flex items-start justify-between">
                        <div className="font-bold">Connect Wallet</div>
                        <button
                            className="hover:border-ens-light-border dark:hover:border-ens-dark-border rounded-full border border-transparent p-1"
                            onClick={onClose}
                        >
                            <FiX />
                        </button>
                    </div>{' '}
                    <div className="space-y-2">
                        {connectors.map((connector) => {
                            return (
                                <Button
                                    variant="primary"
                                    key={connector.id}
                                    onClick={() => {
                                        connect(
                                            { connector },
                                            {
                                                onSuccess: onClose,
                                            }
                                        );
                                    }}
                                    className="flex w-full items-center"
                                >
                                    <div className="flex items-center">
                                        {connector.icon && (
                                            <img
                                                src={connector.icon}
                                                className="aspect-square w-6"
                                                alt={connector.name}
                                            />
                                        )}
                                    </div>
                                    <div className="grow text-left">
                                        {connector.name}
                                    </div>
                                </Button>
                            );
                        })}
                    </div>
                </div>
            )}
        </ConnectModalInner>
    );
};
