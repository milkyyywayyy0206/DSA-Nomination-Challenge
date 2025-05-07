let accNumber = "12345";
let accPin = "0206";
let balance = 1000;

let accountNumber = prompt("Enter your account number:");
let pin = prompt("Enter your PIN:");

if (accountNumber === accNumber && pin === accPin) {
  let anotherTransaction = true;

  while (anotherTransaction) {
    let userOption = prompt(
      "Choose an option:\n1. Balance Inquiry\n2. Withdraw Cash\n3. Cancel Transaction"
    );

    switch (userOption) {
      case "1":
        alert("Your current balance is: " + balance);
        anotherTransaction = confirm("Do another transaction?");
        break;

      case "2":
        let amount = parseFloat(prompt("Enter amount to withdraw:"));

        if (amount <= balance) {
          alert("Processing...");
          balance -= amount;
          alert(
            "Receipt:\nWithdrawn: " + amount + 
            "\nNew Balance: " + balance
          );
        } else {
          alert("Insufficient balance. Try again.");
        }

        anotherTransaction = confirm("Do another transaction?");
        break;

      case "3":
        alert("Transaction cancelled.");
        anotherTransaction = false;
        break;

      default:
        alert("Invalid option.");
    }
  }

  alert("Thank you for using the ATM.");
} else {
  alert("Invalid Account Number or PIN.");
}
