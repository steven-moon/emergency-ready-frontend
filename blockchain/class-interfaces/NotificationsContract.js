import { ethers } from 'ethers';
import NotificationsAbi from '../abis/Notifications.json';

export class NotificationsContract {
    constructor(contractAddress, vueInstance) {
        this.vueInstance = vueInstance;
        this.contractAddress = contractAddress;
        this.abi = NotificationsAbi;

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

    async createNotification(title, body, notificationCategoryId, icon) {
        if (!this.contractWithSigner) {
            console.error("No signer available");
            return;
        }
        return this.contractWithSigner.createNotification(title, body, notificationCategoryId, icon);
    }

    async deleteNotification(id) {
        if (!this.contractWithSigner) {
            console.error("No signer available");
            return;
        }
        return this.contractWithSigner.deleteNotification(id);
    }

    async getNotification(notificationId) {
        return this.contract.getNotification(notificationId);
    }

    async isAuthorizedUser(address) {
        return this.contract.isAuthorizedUser(address);
    }

    async isNotification(notificationId) {
        return this.contract.isNotification(notificationId);
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

    async updateNotification(id, title, body, notificationCategoryId, icon) {
        if (!this.contractWithSigner) {
            console.error("No signer available");
            return;
        }
        return this.contractWithSigner.updateNotification(id, title, body, notificationCategoryId, icon);
    }

    async viewNotifications(startIndex, batchSize) {
        return this.contract.viewNotifications(startIndex, batchSize);
    }

    async totalNotifications() {
        return this.contract.totalNotifications();
    }
}
