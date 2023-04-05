/* exported Bank */
class Bank extends Account {
  constructor() {
    super();
    delete this.number;
    delete this.holder;
    delete this.transactions;
    this.nextAccountNumber = 1;
    this.accounts = [];
  }

  openAccount(holder, balance) {
    if (balance > 0 && balance % 1 === 0) {
      const account = new Account(this.nextAccountNumber++, holder);
      account.deposit(balance);
      this.accounts.push(account);
      return account.number;
    }
    return null;
  }

  getAccount(number) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (number === this.accounts[i].number) {
        return this.accounts[i];
      }
    }
    return null;
  }

  getTotalAssets() {
    let totalBalance = 0;
    for (let i = 0; i < this.accounts.length; i++) {
      totalBalance += this.accounts[i].getBalance();
    }
    return totalBalance;
  }
}
