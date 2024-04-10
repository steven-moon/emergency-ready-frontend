import { UserTrackerContract } from '~/blockchain/class-interfaces/UserTrackerContract';
import { NotificationsContract } from '~/blockchain/class-interfaces/NotificationsContract';
import { NotificationCategoriesContract } from '~/blockchain/class-interfaces/NotificationCategoriesContract';
import {ethers} from "ethers";


export default {

    data() {
        return {
            useChain: false,
            notificationsContractAddress: "",
            notificationCategoryContractAddress: "",
            userTrackerContractAddress: '',
            userTrackerContract: null,
            notificationsContract: null,
            notificationCategoriesContract: null,
            userAddress:"",
            nextId: 0,
            selectedChain: {
                key: 'sepolia',
                chainName: 'Sepolia Test Network',
            }, // Default selected chain
            chains: {
                sepolia: {
                    key: 'sepolia',
                    chainName: 'Sepolia Test Network',
                },
                ethereum: {
                    key: 'ethereum',
                    chainName: 'Ethereum Mainnet',
                },
                polygonMumbai: {
                    key: 'polygonMumbai',
                    chainName: 'Mumbai Testnet',
                },
                optimismSepolia: {
                    key: 'optimismSepolia',
                    chainName: 'Optimism Sepolia',
                },
                arbitrumSepolia: {
                    key: 'arbitrumSepolia',
                    chainName: 'Arbitrum Sepolia',
                },
                polygonAmoy: {
                    key: 'polygonAmoy',
                    chainName: 'Polygon Amoy Testnet',
                }
            },
        }
    },

    methods: {
        async loadNotificationCategoriesFromChain() {
            await this.loadUserTrackerFromChain();

            let allCategories = [];
            let batchSize = 50;
            let cleanCategories = []

            // Fetch categories from the contract
            if(this.notificationCategoriesContract) {
                console.log("notificationCategoriesContract exist load data")
                let total = await this.notificationCategoriesContract.totalCategories();
                if(total) {
                    this.nextId = parseInt(total) + 1;
                }else{
                    total = 0;
                    this.nextId = 1
                }
                console.log("total categories: " + total);
                for (let startIndex = 0; startIndex < total; startIndex += batchSize) {
                    let endIndex = Math.min(startIndex + batchSize, total);
                    let categories = await this.notificationCategoriesContract.viewCategories(startIndex, endIndex - startIndex);
                    categories.forEach((category) => {
                        if(category.id > 0) {
                            allCategories.push(category);
                        }
                    });
                }


                console.log("All categories:", allCategories);

                allCategories.forEach(category => {
                    let row = {};

                    row.uuid = parseInt(category.id);
                    row.name = category.name;
                    row.originalName = category.name;

                    cleanCategories.push(row);

                });
            }
            return cleanCategories;
        },
        async loadNotificationsFromChain() {
            await this.loadUserTrackerFromChain();

            let allNotifications = [];
            let batchSize = 50;
            let cleanNotifications = []

            // Fetch Notifications from the contract
            if(this.notificationsContract) {
                console.log("notificationsContract exist load data")
                let total = await this.notificationsContract.totalNotifications();
                if(total) {
                    this.nextId = parseInt(total) + 1;
                }else{
                    total = 0;
                    this.nextId = 1
                }
                console.log("total notifications: " + total);
                for (let startIndex = 0; startIndex < total; startIndex += batchSize) {
                    let endIndex = Math.min(startIndex + batchSize, total);
                    let notifications = await this.notificationsContract.viewNotifications(startIndex, endIndex - startIndex);
                    notifications.forEach((notificationObject) => {
                        let notification = {};
                        let category = {};

                        if(notificationObject[0] && notificationObject[0].id && notificationObject[0].id > 0){
                            notification = notificationObject[0];
                        }

                        if(notificationObject[1] && notificationObject[1].id && notificationObject[1].id > 0){
                            category = notificationObject[1];
                        }
                        //console.log("Notification: ");
                        ///console.log(notification);
                        //console.log("id: ");
                        allNotifications.push(notification);
                        if(notification && notification.id && notification.id > 0 && parseInt(notification.deletedAt) === 0) {
                            let row = {};
                            row.uuid = notification.id;
                            row.title = notification.title;
                            row.body = notification.body;
                            row.date = this.formatDate(notification.createAt);
                            row.created_at = notification.createAt;
                            cleanNotifications.push(row);
                        }
                    });
                }


                ///console.log("All notifications:", cleanNotifications);

            }
            return cleanNotifications;
        },
        async loadNotificationFromChain(id) {
            await this.loadUserTrackerFromChain();
            let cleanNotification = null;

            // Fetch Notifications from the contract
            if(this.notificationsContract) {
                console.log("notificationsContract exist load data")
                const note = await this.notificationsContract.getNotification(id);
                if (note && note.id) {
                    cleanNotification = {};
                    cleanNotification.uuid = parseInt(note.id);
                    cleanNotification.title = note.title;
                    cleanNotification.body = note.body;
                    cleanNotification.notification_type_id = parseInt(note.notificationCategoryId);
                    cleanNotification.date = this.formatDate(parseInt(note.createAt));
                    cleanNotification.created_at =  parseInt(note.createAt);

                    console.log("notification in loadNotification:", cleanNotification);
                }
            }
            return cleanNotification;
        },
        async loadUserTrackerFromChain(){
            this.userTrackerContractAddress = "0xaB323953f9a0356F5AcF7728DC489e0A218dED14";
            this.userTrackerContract = new UserTrackerContract(this.userTrackerContractAddress, this);
            await this.userTrackerContract.initContract();

            const signer = this.$Web3.getSigner();
            this.userAddress = await signer.getAddress();

            await this.fetchUserDetails();
        },
        async fetchUserDetails() {
            try {
                if(this.userAddress && this.userTrackerContract) {
                    const userDetails = await this.userTrackerContract.getUserByAddress(this.userAddress);
                    console.log("User Details: ", userDetails);

                    // Print out the user contract addresses
                    console.log("User Address: ", userDetails.userAddress);
                    console.log("Notification Categories Contract: ", userDetails.notificationCategoriesContract);
                    console.log("Notification Contract: ", userDetails.notificationContract);

                    if (userDetails.notificationCategoriesContract) {
                        this.notificationCategoryContractAddress = userDetails.notificationCategoriesContract;
                        this.notificationCategoriesContract = new NotificationCategoriesContract(this.notificationCategoryContractAddress, this);
                        console.log("NotificationCategoriesContract created");
                    } else {
                        console.log("NotificationCategoriesContract not created");
                    }

                    if(userDetails.notificationContract){
                        this.notificationsContractAddress = userDetails.notificationContract;
                        this.notificationsContract = new NotificationsContract(this.notificationsContractAddress, this);
                        console.log("NotificationsContract created");
                    } else {
                        console.log("NotificationsContract not created");
                    }
                }
            } catch (error) {
                console.error("Error fetching user details:", error);
            }

        }

    },
    async mounted() {
        console.log("BEGIN: mounted() in blockchain mixin")
        this.useChain = process.env.USE_CHAIN || false;
        if(this.useChain && this.$Web3.isConnected()){
            await this.loadUserTrackerFromChain();
        }
    }
}
