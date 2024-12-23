function payWithPaystack() {
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const amount = document.getElementById("transferAmount").value;

    // Validate inputs
    if (!email || !phoneNumber || !amount) {
        alert("Please fill in all fields.");
        return;
    }

    let split = amount * 0.02;
    console.log("split: " + split);
    let splitsum = parseFloat(split) + parseFloat(amount);
    console.log("split sum: " + splitsum);

    const amountInKobo = parseFloat(splitsum) * 100;

    var handler = PaystackPop.setup({
        key: 'pk_live_ed4483a75fd6eff21e51d1ee7b9d3834a183d753', // public key
        email: email,
        amount: amountInKobo, 
        metadata: {
            custom_fields: [
                {
                    display_name: email,
                    variable_name: "Children Foundation Donation",
                    value: phoneNumber,
                },
            ],
        },
        callback: function (response) {
            alert('Success! Transaction reference: ' + response.reference);
            // You can redirect to a success page or log the response
            fetch(`https://api.paystack.co/transaction/verify/${response.reference}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer sk_live_44d5574dd7fc2df74d7dd62f619568ee0741158d`, // Secret key
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.status) {
                        const transaction = data.data;
        
                        // Generate and display the receipt
                        generateReceipt(transaction);
                    } else {
                        console.error('Failed to verify transaction.');
                    }
                })
                .catch((error) => {
                    console.error('Error verifying transaction:', error);
                });
        },
        onClose: function () {
            alert('Transaction cancelled');
        },
    });

    handler.openIframe();
}

function generateReceipt(transaction) {
    const receiptDetails = `
        <div style="max-width: 600px; margin: 20px auto; padding: 20px; font-family: Arial, sans-serif; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="text-align: center; color: #4CAF50;">Donation Receipt</h2>
            <p><strong>Transaction Reference:</strong> ${transaction.reference}</p>
            <p><strong>Date:</strong> ${new Date(transaction.transaction_date).toLocaleString()}</p>
            <p><strong>Amount:</strong> ${(transaction.amount / 100).toLocaleString()} ${transaction.currency}</p>
            <p><strong>Email:</strong> ${transaction.customer.email}</p>
            <p><strong>Phone Number:</strong> ${transaction.metadata.custom_fields[0].value}</p>
            <p>Thank you for your generous donation to the Children Foundation. Your contribution makes a difference!</p>
        </div>
    `;

    // Display receipt on the page
    document.body.innerHTML = receiptDetails;

    // Optionally offer a print/download option
    const printButton = document.createElement('button');
    printButton.innerText = 'Print Receipt';
    printButton.style = 'display: block; margin: 20px auto; padding: 10px 20px; background: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer;';
    printButton.onclick = () => window.print();
    document.body.appendChild(printButton);
}

// PRELOADER
window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none"; 
});