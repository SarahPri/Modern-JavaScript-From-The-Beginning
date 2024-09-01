class Wallet {
    constructor(){
        this._balance = 0;
        this._transactions = [];
    }
    deposit(amount){
        this._processDeposit(amount);
        this._balance += amount;

    }

    withdraw(amount){
        if(amount > this._balance){ //check if theres enough money in the account
            console.log('Not enough funds');
            return;
        }
        this._processWithdraw(amount)
        this._balance -= amount;
    }

    //a function to process transactions
    _processDeposit(amount){
        console.log(`Depositing ${amount}`);

        this._transactions.push({
            type: 'Deposit',
            amount
        });

    }
    _processWithdraw(amount){
        console.log(`Withdraw ${amount}`);

        this._transactions.push({
            type: 'withdraw',
            amount
        });

    }


    //1. one way
    // getBalance(){
    //     return this._balance;
    // }

    // 2. or you can use getter
    get balance(){
        return this._balance;
    }

    get transactions(){
        return this._transactions;
    }

    
}


const wallet = new Wallet();
wallet.deposit(300)
wallet.withdraw(50)
console.log(wallet.balance);
console.log(wallet.transactions);