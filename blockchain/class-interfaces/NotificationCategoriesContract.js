import { ethers } from 'ethers';
import NotificationCategoriesAbi from '../abis/NotificationCategories.json'


export class NotificationCategoriesContract {
    constructor(contractAddress, vueInstance) {
        this.vueInstance = vueInstance;
        this.contractAddress = contractAddress;
        this.abi = NotificationCategoriesAbi;

        this.initContract();
    }

    async initContract() {
        const provider = this.vueInstance.$Web3.getProvider();
        const signer = await this.vueInstance.$Web3.getSigner();

        this.contract = new ethers.Contract(this.contractAddress, this.abi, provider);

        if (signer) {
            this.contractWithSigner = this.contract.connect(signer);
        }
    }

    async addAuthorizedUser(user) {
        if (!this.contractWithSigner) {
            console.error("No signer available");
            return;
        }
        return this.contractWithSigner.addAuthorizedUser(user);
    }

    async authorizedUsers(index) {
        return this.contract.authorizedUsers(index);
    }

    async createCategory(name, icon) {
        if (!this.contractWithSigner) {
            console.error("No signer available");
            return;
        }
        return this.contractWithSigner.createCategory(name, icon);
    }

    async deleteCategory(id) {
        if (!this.contractWithSigner) {
            console.error("No signer available");
            return;
        }
        return this.contractWithSigner.deleteCategory(id);
    }

    async getCategory(categoryId) {
        return this.contract.getCategory(categoryId);
    }

    async getCategoryDetails(categoryId) {
        return this.contract.getCategoryDetails(categoryId);
    }

    async isAuthorizedUser(address) {
        return this.contract.isAuthorizedUser(address);
    }

    async isCategory(categoryId) {
        return this.contract.isCategory(categoryId);
    }

    async getOwner() {
        return this.contract.owner();
    }

    async removeAuthorizedUser(user) {
        if (!this.contractWithSigner) {
            console.error("No signer available");
            return;
        }
        return this.contractWithSigner.removeAuthorizedUser(user);
    }

    async updateCategory(id, category, icon) {
        if (!this.contractWithSigner) {
            console.error("No signer available");
            return;
        }
        return this.contractWithSigner.updateCategory(id, category, icon);
    }

    async viewCategories(startIndex, batchSize) {
        return this.contract.viewCategories(startIndex, batchSize);
    }

    async totalCategories() {
        return this.contract.totalCategories();
    }
}
