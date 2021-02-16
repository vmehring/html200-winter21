function bankingApp() {

  //Establish account and current balance.
  let myAccount = 1200;
  //Prompt customer with list of actions
  //Define potential actions: [Q]uit, [W]ithdraw, [D]eposit, view [B]alance.
  let acctAccess = true;

  do {
    let acctAction = prompt('What would you like to do today? Press [b] to view balance, [d] to make a deposit, [w] to withdraw funds, [q] to quit:');

      switch(acctAction) {

        case 'b':
          alert('Your account balance is $' + myAccount);
          break;

        case 'd':
          let deposit = prompt('Enter deposit amount :');
         try {
           if(isNaN(deposit)) throw 'You can only deposit money.';
           if(deposit > 50000) throw 'Deposits above $50,000 are not permitted via this app.';
         }
         catch(err) {
              alert(err);
              break;
         }
          myAccount = myAccount + Number(deposit);
          alert('Your updated balance is $' + myAccount + '. Funds may not be immediately available for withdrawal.');
          break;

        case 'w':
          let withdrawal = prompt('Enter withdrawal amount :');
         try {
            if(isNaN(withdrawal)) throw 'You can only deposit money.';
            if(myAccount - withdrawal <= 0) throw 'You do not have enough funds to complete this withdrawal.';
         }
         catch(err) {
           alert(err);
           break;
          }
          try {
           if(myAccount - withdrawal < 300) throw 'This will put your account balance below $300. Are you sure you want to continue? y/n';
          }
          catch(err) {
           let lowBalance = prompt(err);
              if(lowBalance = 'y') {
                myAccount = myAccount - Number(withdrawal);
                alert('Your updated balance is $' + myAccount + '.');
                break;
              } else {
                break;
            }
          }
        myAccount = myAccount - Number(withdrawal);
        alert('Your updated balance is $' + myAccount + '.');
        break;

        //Keep prompting customer for actions untl customer chooses Q.
      case 'q':
        acctAccess = false;
        alert('Goodbye!');
        break;

      default:
        alert('Please select from the listed options.');
        break;
      }
    }
  while(acctAccess)
}

//Optional:
//prohibit negative balances
//limit deposit to <=50,000000
//low balance alert
//prompt to confirm if withdrawal creates balance <300
