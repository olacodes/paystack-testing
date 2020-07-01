<template>
  <div>
    <h1 class="paystack-test">Testing Paystack</h1>
    <form id="paymentForm">
      <div class="form-group">
        <label for="email">Email Address</label>
        <input type="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="amount">Amount</label>
        <input type="tel" v-model="amount" required />
      </div>
      <div class="form-group">
        <label for="first-name">First Name</label>
        <input type="text" v-model="firstname" />
      </div>
      <div class="form-group">
        <label for="last-name">Last Name</label>
        <input type="text" v-model="lastname" />
      </div>
      <div class="form-submit">
        <b-button type="submit is-primary" @click.prevent="payWithPaystack()">Pay</b-button>
      </div>
    </form>
    <script src="https://js.paystack.co/v1/inline.js" />
  </div>
</template>

<script>

export default {
  data (){
    return {
      firstname: '',
      lastname: '',
      amount: '',
      email: '',
    }
  },
  methods: {
    payWithPaystack() {
      var handler = PaystackPop.setup({
        key: "pk_test_dc39742a9d8ecd9f5d9117c011b8565734d0b15f", // Replace with your public key
        email: this.email,
        amount: this.amount * 100, // the amount value is multiplied by 100 to convert to the lowest currency unit
        currency: "NGN", // Use GHS for Ghana Cedis or USD for US Dollars
        firstname: this.firstname,
        lastname: this.lastname,
        reference: ''+Math.floor((Math.random() * 1000000000) + 1), // Replace with a reference you generated
        
        callback: function(response) {
          //this happens after the payment is completed successfully
          var reference = response.reference;
          alert("Payment complete! Reference: " + reference);
          // Make an AJAX call to your server with the reference to verify the transaction
        },

        onClose: function() {
          alert("Transaction was not completed, window closed.");
        }
      });

      handler.openIframe();
    }
  }
}

</script>

<style scoped>
.paystack-test{
  font-size: 2rem;
  margin: 1rem 0;
}
.form-group{
  margin: 1rem;
}
</style>