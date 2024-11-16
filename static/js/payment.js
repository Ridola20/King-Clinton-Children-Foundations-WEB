const customer_email = 'customer@email.com';
const amount = 370000;

function payWithPaystack() {
    var handler = PaystackPop.setup({
        key: 'sk_test_7ec6fbc07429ec7106efc81b0a46cd8dc1f73481', // put your public key here
        email: customer_email,
        amount: amount, // amount the customer is supposed to pay
        metadata: {
            custom_fields: [
            {
                display_name: "Mobile Number",
                variable_name: "mobile_number",
                value: "+2348012345678" // customer's mobile number
            }
            ]
        },
        callback: function (response) {
            // After the transaction has been completed
            alert('success. transaction ref is ' + response); // transaction
        //   Open a thanks page
        },
        onClose: function () {
            // When the user closes the payment modal
            alert('Transaction cancelled');
        }
    });
    handler.openIframe();
}