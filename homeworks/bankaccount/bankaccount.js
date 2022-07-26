class Account{
    #accountType;
    #balance;
    static accountsList = [];

    constructor(accountType,blance){
        this.#accountType = accountType;
        this.#balance = blance;
    }

    saveAccount(){
        this.accountsList.push(this);
    }

    getAccountType() {
        return this.#accountType;
    }

    getBalance(){
        return this.#balance;
    }

    setAccountType(accountType){
        this.#accountType = accountType;
    }

    setBalance(balance){
        this.#balance = balance;
    }

    debitAccount(amount){
        this.#balance = parseFloat(this.getBalance()) - amount;

    }

    deposit(amount){
        this.#balance = parseFloat(this.getBalance()) + amount;
    }

    writeToStorage(param){
        localStorage.clear();
        var text = '';
        for(let i=0; i< param.length; i++){
            text+= param[i].getAccountType() + ',' + param[i].getBalance() + '\n';
        }
        window.localStorage.setItem("accounts",text);
    }
}

function createAccount(){
    const accountType = document.getElementById("accountname").value;
    const deposit = parseFloat(document.getElementById("deposit").value);
    if(isNaN(deposit) || deposit <= 0){
        alert('Please enter a valid deposit amount');

        document.getElementById('deposit').value = "";
        document.getElementById ('deposit').focus();
        return;
    }
    var account = new Account(accountType, deposit);
    Account.accountsList.push(account);
    account.writeToStorage(Account.accountsList);

    clearInputTextFields()
    dipslay();
}

function clearInputTextFields(){
    document.getElementById('accountname').value = "";
    document.getElementById('deposit').value = "";
}

function dipslay(){
    var allAccounts = Account.accountsList;
    var dipslayInfo = '';
    for(let i=0; i< allAccounts.length; i++){
        dipslayInfo+= 'Account type :'+allAccounts[i].getAccountType()
        +', Balance :'+allAccounts[i].getBalance()+'\n';
    }
    document.getElementById("display").innerHTML = dipslayInfo;
}

function parseSavedData(){
    parse();
    dipslay();
}

function parse(){
    var savedItems = localStorage.getItem("accounts");
    var data = [];
    if(savedItems != null){
        data = savedItems.split('\n');
    }
    for(let i=0; i<data.length -1; i++){
        var acc = new Account(data[i].split(',')[0],data[i].split(',')[1]);
        Account.accountsList.push(acc);
    }
}

function redirectToDeposit(){
    window.location.href = 'deposit.html';
}

function redirectToDebit(){
    window.location.href = 'debit.html';
}

function loadAccounts(){
    parse();
    var select = document.getElementById("accounts");
    var options = Account.accountsList;
    console.log(Account.accountsList.length);
    for(var i = 0; i < options.length; i++) {
        var opt = options[i].getAccountType();
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
}

function selectedAccount(){
    var selectedIndex = document.getElementById('accounts').selectedIndex;
    if(selectedIndex!=0){
        var balance = Account.accountsList[selectedIndex-1].getBalance();
        document.getElementById('balance').innerHTML = '$'+balance;
    }
    else{
        document.getElementById('balance').innerHTML = '';
    }

}

function debit(){
    var selectedIndex = document.getElementById('accounts').selectedIndex;
    if(selectedIndex === 0){
        alert('Please select account');
        return;
    }
    var account = Account.accountsList[selectedIndex - 1];
    var amount = parseFloat(document.getElementById('amount').value);
    if(isNaN(amount) || amount <= 0){
        alert('Please enter a valid withdrawal amount');
        return;
    }
    if(amount > account.getBalance()){
        alert('Insufficient amount in account');
        return;
    }
    account.debitAccount(amount);
    console.log(account.getBalance());
    account.writeToStorage(Account.accountsList);
    alert('Withdrawal successful');
    location.href = 'bankaccount.html';
}

function deposit(){
    var selectedIndex = document.getElementById('accounts').selectedIndex;
    if(selectedIndex === 0){
        alert('Please select account');
        return;
    }
    var account = Account.accountsList[selectedIndex - 1];
    var amount = parseFloat(document.getElementById('amount').value);
    if(isNaN(amount) || amount <= 0){
        alert('Please enter a valid deposit amount');
        return;
    }
    account.deposit(amount);
    console.log(account.getBalance());
    account.writeToStorage(Account.accountsList);
    alert('Deposit successful');
    location.href = 'bankaccount.html';
}