<template>
  <div v-if="isLoading" class="section">
    <tile :loading="isLoading"/>
  </div>
  <div v-else class="section section-basic mt-5" id="basic-elements">
    <div class="col-md-6 ml-auto mr-auto">
      <card type="profile">
        <div class="card-body">
          <br/>
          <div id="inputs">

            <div class="row">
              <div class="col" v-if="message">
                <base-alert :type="alertType">{{message}}</base-alert>
              </div>
            </div>
           <div class="row">
            <div class="col-sm-10 ml-auto mr-auto">
             <base-dropdown title-classes="btn mr-0"
                            menu-on-right
                            :has-toggle="false"
             >

              <template slot="title">
                {{selectedChain.chainName}}
              </template>
              <div v-for="(chain, key) in chains" :key="key" :value="key">
                <a class="dropdown-item" @click="setChain(chain)">{{ chain.chainName }}</a>
              </div>

             </base-dropdown>
            </div>
           </div>
            <div class="row">
              <div class="col-sm-10 ml-auto mr-auto">
                <div @click="connect" v-if="isWalletConnected">
                  <n-button type="success" :wide="true">Connect Wallet</n-button>
                </div>
               <div v-else @click="goToAdmin">
                <p>Wallet Connected</p>
                <n-button type="success" :wide="true" >Go To Admin</n-button>
               </div>
              </div>
            </div>
          </div>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import {Button, FormGroupInput} from "@/components/UIKit";
import CommonAPI from '~/api/CommonAPI';

export default {
  layout: "default-auth",
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  data() {
    return {
      title: 'Connect Wallet - Emergency Ready App',
      description: "Connect Wallet to access the admin panel",
      form: {
        email: "",
        password: "",
      },
      error: {
        email: null,
        password: null,
      },
      message: "",
      alertType: "info",
      isLoading: false,
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
    };
  },
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'og:title', name: 'og:title', content: this.title },
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'og:description', name: 'og:description', content: this.description },
        { hid: 'og:site_name', name: 'og:site_name', content: "Emergency Ready App" },
        { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: this.title },
      ]
    }
  },
 computed: {
  isWalletConnected() {
   if (process.client) {
    if (typeof window.ethereum !== 'undefined' && this.$Web3) {
     return this.$Web3.isWalletConnected;
     // console.log('Connected to provider');
    } else {
     console.error('Please install MetaMask!');
    }
   }
   return false;
  }
 },
  methods: {
   async goToAdmin() {
    if(this.$Web3.isConnected()) {
     window.location.href = "/admin/";
    }
   },
   async connect() {
    // Example of setting a provider
    try {
     if (typeof window.ethereum !== 'undefined') {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      this.$Web3.setProvider(window.ethereum);
      console.log('Connected to provider');
      this.goToAdmin()

     } else {
      console.error('Please install MetaMask!');
     }
    } catch (error) {
     console.error('Error connecting to provider:', error);
    }
   },

   async signMessage() {
    // Example of getting a signer and signing a message
    try {
     const signer = this.$Web3.getSigner();
     const signature = await signer.signMessage('Hello World');
     console.log('Signature:', signature);
    } catch (error) {
     console.error('Error signing message:', error);
    }
   },
   setChain(chain) {
    this.selectedChain = chain;
    this.$Web3.setChain(chain.key);
    console.log(`Switching to chain: ${chain}`);
    // Placeholder for the actual chain switching logic
   }
  },
  created() {
  },
  mounted() {
   this.goToAdmin()
  }
};
</script>
<style scoped lang="scss">
.submit-form__container {
  margin: 0 1px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}

.forgot-password {
  display: flex;
  justify-content: flex-end;
  margin: 0;
  font-size: 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}

.navigate-auth {
  font-size: 13px;
}
</style>
