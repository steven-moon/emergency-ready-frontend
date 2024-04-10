<template>
  <div v-if="isLoading" class="section">
    <tile :loading="isLoading"/>
  </div>
  <div v-else id="basic-elements" class="section section-basic mt-5">
    <div class="col-md-6 ml-auto mr-auto">
      <card type="profile">
        <div class="card-body">
          <br/>
          <div id="inputs">

            <div class="row">
              <div v-if="message" class="col">
                <base-alert :type="alertType">{{ message }}</base-alert>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-10 ml-auto mr-auto">
                <base-dropdown :has-toggle="false"
                               menu-on-right
                               title-classes="btn mr-0"
                >

                  <template slot="title">
                    {{ selectedChain.chainName }}
                  </template>
                  <div v-for="(chain, key) in chains" :key="key" :value="key">
                    <a class="dropdown-item" @click="setChain(chain)">{{ chain.chainName }}</a>
                  </div>

                </base-dropdown>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-10 ml-auto mr-auto">
                <div v-if="!isMetaMaskInstalled()" @click="goToMetaMaskExtension">
                  <n-button :wide="true" type="success">Please Install Meta Mask</n-button>
                </div>
                <div v-else-if="!isWalletConnected()" @click="connect">
                  <n-button :wide="true" type="success">Connect Wallet</n-button>
                </div>
                <div v-else @click="goToAdmin">
                  <p>Wallet Connected</p>
                  <n-button :wide="true" type="success">Go To Admin</n-button>
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
import BlockChainMixin from "~/mixins/blockchain";

export default {
  layout: "default-auth",
  mixins: [BlockChainMixin],
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
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {hid: 'og:title', name: 'og:title', content: this.title},
        {hid: 'description', name: 'description', content: this.description},
        {hid: 'og:description', name: 'og:description', content: this.description},
        {hid: 'og:site_name', name: 'og:site_name', content: "Emergency Ready App"},
        {hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: this.title},
      ]
    }
  },
  computed: {
  },
  methods: {
    async goToAdmin() {
      if (this.isWalletConnected()) {
        window.location.href = "/admin/";
      }else{

      }
    },
    async connect() {
      // Example of setting a provider
      try {
        if (typeof window.ethereum !== 'undefined') {
          await window.ethereum.request({method: 'eth_requestAccounts'});
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

    goToMetaMaskExtension(){
        window.location = "https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn";
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
    },
    async isWalletConnected() {
      if (process.client) {
        if (typeof window.ethereum !== 'undefined' && this.$Web3) {
          console.log("this.$Web3.isConnected = " + await this.$Web3.isConnected())
          return this.$Web3.isConnected();
          // console.log('Connected to provider');
        } else {
          console.error('Please install MetaMask!');
        }
      }
      return false;
    },
    isMetaMaskInstalled(){
      if (process.client) {
        if (typeof window.ethereum !== 'undefined') {
          return true;
          // console.log('Connected to provider');
        } else {
          console.error('Please install MetaMask!');
        }
      }
      return false;
    }
  },
  created() {
  },
  mounted() {
    if(!this.isWalletConnected()){
      this.$Web3.connectWallet()
    }else{

    }
  }
};
</script>
<style lang="scss" scoped>
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
