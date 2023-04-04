/* exported Account */
class Account extends Transaction {
  constructor(number, holder) {
    super();
    delete this.type;
    delete this.amount;
    this.number = number;
    this.holder = holder;
    this.transactions = [];
  }

  deposit(amount) {
    if (typeof amount !== 'number') {
      return false;
    } else if (amount % 1 !== 0) {
      return false;
    } else if (amount <= 0) {
      return false;
    } else if (amount > 0) {
      const transaction = new Transaction('deposit', amount);
      this.transactions.push(transaction);
      return true;
    }
  }

  withdraw(amount) {
    if (typeof amount !== 'number') {
      return false;
    } else if (amount % 1 !== 0) {
      return false;
    } else if (amount <= 0) {
      return false;
    } else if (amount > 0) {
      const transaction = new Transaction('withdrawal', amount);
      this.transactions.push(transaction);
      return true;
    }
  }

  getBalance() {
    let balance = 0;
    if (this.transactions.length === 0) {
      return 0;
    }

    for (let i = 0; i < this.transactions.length; i++) {
      const transactionObj = this.transactions[i];
      if (transactionObj.type === 'deposit') {
        balance += transactionObj.amount;
      } else if (transactionObj.type === 'withdrawal') {
        balance -= transactionObj.amount;
      }
    }
    return balance;
  }
}
