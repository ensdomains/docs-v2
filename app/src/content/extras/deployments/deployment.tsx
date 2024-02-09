import Link from 'next/link';
import { FC } from 'react';
import { FiExternalLink } from 'react-icons/fi';

const ETHERSCAN_URI = {
    mainnet: 'etherscan.io/address',
    goerli: 'ropsten.etherscan.io/address',
    sepolia: 'sepolia.etherscan.io/address',
    holesky: 'holesky.etherscan.io/address',
};

type githubDeploymentReturn = {
    address: string;
    abi: [];
};

type DeploymentData = {
    name: string;
    address?: string;
    path?: string;
    branch?: string;
};

export const getGithubDeployment = async (
    branch: string = 'staging',
    chain: string = 'mainnet',
    path: string = 'ENSRegistry'
) => {
    const url = `https://raw.githubusercontent.com/ensdomains/ens-contracts/${branch}/deployments/${chain}/${path}.json`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}`);
    }

    return (await response.json()) as githubDeploymentReturn;
};

export const ChainDeployments: FC<{
    chains: {
        name: string;
        slug: string;
        contracts: DeploymentData[];
    }[];
}> = ({ chains }) => {
    return (
        <div className="card1 no-margin">
            <div className="">
                {chains.map((chain, index) => (
                    <div
                        key={chain.slug}
                        // TODO: Undo temporarily hiding all other chains then the first
                        className={index == 0 ? '' : 'hidden'}
                    >
                        {chain.contracts.map(
                            withDeploymentData(
                                chain.slug,
                                (deployment, data) => (
                                    <div
                                        key={deployment.name}
                                        className="border-b-ens-light-border dark:border-b-ens-dark-border group flex items-center justify-between border-b p-4 last:border-b-0"
                                    >
                                        <div className="h-fit">
                                            <div className="text-base font-bold leading-4">
                                                {deployment.name}
                                            </div>
                                            <div className="space-x-2 text-sm">
                                                {deployment.path && (
                                                    <Link
                                                        href={`https://github.com/ensdomains/ens-contracts/blob/${
                                                            deployment.branch ||
                                                            'staging'
                                                        }/deployments/${
                                                            chain.slug
                                                        }/${
                                                            deployment.path
                                                        }.json`}
                                                        target="_blank"
                                                        className="inline-flex items-center text-xs font-bold leading-4"
                                                    >
                                                        <FiExternalLink />
                                                        ABI
                                                    </Link>
                                                )}
                                                {/* {deployment.path && (
                                                    <Link
                                                        href={`https://github.com/ensdomains/ens-contracts/blob/${
                                                            deployment.branch ||
                                                            'staging'
                                                        }/deployments/${
                                                            chain.slug
                                                        }/${
                                                            deployment.path
                                                        }.json`}
                                                        target="_blank"
                                                        className="inline-flex items-center text-xs font-bold leading-4"
                                                    >
                                                        <FiExternalLink />
                                                        Source
                                                    </Link>
                                                )} */}
                                                {data?.address && (
                                                    <Link
                                                        href={`https://${
                                                            ETHERSCAN_URI[
                                                                chain.slug
                                                            ]
                                                        }/${data?.address}`}
                                                        target="_blank"
                                                        className="inline-flex items-center text-xs font-bold leading-4"
                                                    >
                                                        <FiExternalLink />
                                                        Etherscan
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                        <button
                                            className="border-ens-light-border dark:border-ens-dark-border bg-ens-light-background-secondary dark:bg-ens-dark-background-secondary truncate rounded-lg border text-xs"
                                            style={{
                                                fontFamily: 'monospace',
                                            }}
                                        >
                                            {deployment.address || data.address}
                                        </button>
                                    </div>
                                )
                            )
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

const withDeploymentData = <K extends object>(
    chain: string,
    callback: (_deployment: DeploymentData, _data: githubDeploymentReturn) => K
) => {
    return async (deployment: DeploymentData) => {
        const data = deployment.path
            ? await getGithubDeployment(
                  deployment.branch,
                  chain,
                  deployment.path
              )
            : ({
                  address: deployment.address,
                  abi: [],
              } as githubDeploymentReturn);

        return callback(deployment, data);
    };
};
