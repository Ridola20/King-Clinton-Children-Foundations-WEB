const customer_email = 'ridwansanusiessential@gmail.com';
const amount = 370000; // Note, the amount is always in kobo // so add two 00s to any amount in naira
const number = "+2349124908844";

function payWithPaystack() {
    var handler = PaystackPop.setup({
        key: 'pk_test_282168748f5a8730d13aab3c401627d071d5ca73',
        email: customer_email,
        amount: amount, 
        metadata: {
            custom_fields: [
            {
                display_name: "Mobile Number",
                variable_name: "mobile_number",
                value: number,
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