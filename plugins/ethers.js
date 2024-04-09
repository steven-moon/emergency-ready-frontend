import Vue from 'vue'
import { ethers } from 'ethers'

let EthersPlugin = {};

EthersPlugin.install = function (Vue, options) {
    var provider = null;
    var signer = null;
    var isWalletConnected = false;
    var isConnectedToTargetChain = false;
    var currentChainId = null;
    var defaultChain = 'sepolia';
    var blockchain = {};
    var localVueInstance = null;

    blockchain.ethers = ethers;

    const chains = {
        sepolia: {
            chainId: '0xAA36A7',
            chainName: 'Sepolia Test Network',
            nativeCurrency: { name: 'Sepolia Ether', symbol: 'SPO', decimals: 18 },
            rpcUrls: ['https://rpc.sepolia.org'], // Public RPC URL for Sepolia
            blockExplorerUrls: ['https://sepolia.etherscan.io']
        },
        ethereum: {
            chainId: '0x1',
            chainName: 'Ethereum Mainnet',
            nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
            rpcUrls: ['https://cloudflare-eth.com'], // Public RPC URL for Ethereum Mainnet
            blockExplorerUrls: ['https://etherscan.io']
        },
        polygonMumbai: {
            chainId: '0x13881',
            chainName: 'Mumbai Testnet',
            nativeCurrency: {name: 'Matic', symbol: 'MATIC', decimals: 18},
            rpcUrls: ['https://polygon-mumbai.g.alchemy.com/v2/' + process.env.INFURA_API_KEY],
            blockExplorerUrls: ['https://mumbai.polygonscan.com']
        },
        // Additional networks (details not available)
        optimismSepolia: {
            chainId: '0xAA37DC',
            chainName: 'Optimism Sepolia',
            nativeCurrency: {name: 'Ether', symbol: 'ETH', decimals: 18},
            rpcUrls: ['https://sepolia.optimism.io'],
            blockExplorerUrls: ['https://sepolia-optimistic.etherscan.io']
        },
        arbitrumSepolia: {
            chainId: '0x66eee',
            chainName: 'Arbitrum Sepolia',
            nativeCurrency: {name: 'Ether', symbol: 'ETH', decimals: 18},
            rpcUrls: ['https://sepolia-rollup.arbitrum.io/rpc'],
            blockExplorerUrls: ['https://sepolia-explorer.arbitrum.io']
        },
        polygonAmoy: {
            chainId: '0x13882',
            chainName: 'Polygon Amoy Testnet',
            nativeCurrency: {name: 'MATIC', symbol: 'MATIC', decimals: 18},
            rpcUrls: ['https://rpc-amoy.polygon.technology/'],
            blockExplorerUrls: ['https://www.oklink.com/amoy‍']
        }
    };

    var targetChain = chains[defaultChain];

    async function switchToTargetChain() {
        try {
            await provider.send('wallet_switchEthereumChain', [{ chainId: targetChain.chainId }]);
            isConnectedToTargetChain = true;
        } catch (switchError) {
            isConnectedToTargetChain = false;
            if (switchError.code === 4902) {
                try {
                    await provider.send('wallet_addEthereumChain', [targetChain]);
                    isConnectedToTargetChain = true;
                } catch (addError) {
                    console.error('Failed to add target network to MetaMask', addError);
                }
            } else {
                console.error('Failed to switch to target network in MetaMask', switchError);
            }
        }
    }


    async function initialize(vueInstance) {
        localVueInstance = vueInstance;
        if (window.ethereum) {
            isWalletConnected = true;
            isConnectedToTargetChain = false;
            currentChainId = null;

            provider = new ethers.providers.Web3Provider(window.ethereum, "any");
            provider.on("network", (newNetwork, oldNetwork) => {
                // When a Provider makes its initial connection, it emits a "network"
                // event with a null oldNetwork along with the newNetwork. So, if the
                // oldNetwork exists, it represents a changing network
                if (oldNetwork) {
                    //window.location.reload();
                }
            });

            if(localVueInstance)
                localVueInstance.$store.commit('setIsWalletConnected', isWalletConnected);
            else
                console.log("localVueInstance is Null")
        }
    }

    blockchain.connectWallet = async function() {
        try {
            await provider.send("eth_requestAccounts", []);
            isWalletConnected = true;

            const network = await provider.getNetwork();
            currentChainId = network.chainId;
            isConnectedToTargetChain = (currentChainId === parseInt(targetChain.chainId, 16));
            if (!isConnectedToTargetChain) {
                await switchToTargetChain();
            }
        } catch (error) {
            console.error("Initialization error:", error);
            isWalletConnected = false;
            isConnectedToTargetChain = false;
            currentChainId = null;
        }
    }

    blockchain.setChain = async function(chainKey) {
        if (chains.hasOwnProperty(chainKey)) {
            targetChain = chains[chainKey];
            if (provider) {
                // If provider is already set, try to switch to the new target chain
                const network = await provider.getNetwork();
                currentChainId = network.chainId;
                isConnectedToTargetChain = (currentChainId === parseInt(targetChain.chainId, 16));
                if (!isConnectedToTargetChain) {
                    await switchToTargetChain();
                }
            }
        } else {
            console.error(`Chain '${chainKey}' not found in the chains list.`);
        }
    };

    blockchain.getProvider = function() {
        return provider;
    };

    // Make isMetaMaskInstalled publicly accessible
    blockchain.isMetaMaskInstalled = function() {
        return typeof window.ethereum !== 'undefined';
    };

    blockchain.setProvider = async function(provi) {
        provider = new ethers.providers.Web3Provider(provi);
        try {
            // Request account access if needed
            await provider.send("eth_requestAccounts", []);
            isWalletConnected = true;

            // Get and set the current chainId
            const network = await provider.getNetwork();
            currentChainId = network.chainId;
        } catch (error) {
            console.error(error);
            isWalletConnected = false;
            currentChainId = null;
        }

        if(localVueInstance)
            localVueInstance.$store.commit('setIsWalletConnected', isWalletConnected);
        else
            console.log("localVueInstance is Null")
        return ethers;
    };

    blockchain.getSigner = function() {
        if (signer == null && provider) signer = provider.getSigner();
        return signer;
    };

    blockchain.toHash = function(texto) {
        if ((/(0x)/).test(texto)) {
            return ethers.utils.keccak256(texto);
        } else return ethers.utils.id(texto)
    };

    blockchain.isConnected = function() {
        return typeof window.ethereum !== 'undefined';
    };

    blockchain.getCurrentChainId = function() {
        return currentChainId;
    };

    Vue.prototype.$Web3 = blockchain;

    initialize().then(r => {
        console.log("Ethers Plugin initialized");
        console.log("isWalletConnected: " + isWalletConnected);
        console.log("currentChainId: " + currentChainId);
    });
}

Vue.use(EthersPlugin)
