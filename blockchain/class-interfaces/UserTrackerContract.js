import { ethers } from 'ethers';
import UserTrackerAbi from '../abis/UserTracker.json';


export class UserTrackerContract {
    constructor(contractAddress, vueInstance) {
        this.vueInstance = vueInstance;
        this.contractAddress = contractAddress;
        this.abi = UserTrackerAbi;

        this.initContract();
    }

    async initContract() {
        const provider = this.vueInstance.$Web3.getProvider();
        this.signer = await this.vueInstance.$Web3.getSigner();

        this.contract = new ethers.Contract(this.contractAddress, this.abi, provider);

        if (this.signer) {
            this.contractWithSigner = this.contract.connect(this.signer);
        }
    }

    async addUser(userAddress, notificationCategoriesContract, notificationContract) {
        if (!this.contractWithSigner) {
            console.error("No signer available");
            return;
        }
        try {
            const tx = await this.contractWithSigner.addUser(userAddress, notificationCategoriesContract, notificationContract);
            await tx.wait(); // Wait for the transaction to be mined
            console.log("User added successfully");
        } catch (error) {
            console.error("Error adding user:", error);
        }
    }

    async getUserByAddress(userAddress) {
        return this.contract.getUserByAddress(userAddress);
    }

    async getOwner() {
        return this.contract.owner();
    }

    async updateNotificationAddress(userAddress, newAddress) {
        if (!this.contractWithSigner) {
            console.error("No signer available");
            return;
        }
        return this.contractWithSigner.updateNotificationAddress(userAddress, newAddress);
    }

    async updateNotificationCategoriesAddress(userAddress, newAddress) {
        if (!this.contractWithSigner) {
            console.error("No signer available");
            return;
        }
        return this.contractWithSigner.updateNotificationCategoriesAddress(userAddress, newAddress);
    }
}
