// Speichern der Wallet-Daten in einem Cookie
function saveWalletDataToCookie(address, balance) {
    document.cookie = `walletData=${address}:${balance}; expires=${new Date(Date.now() + 86400000).toUTCString()}; path=/`;
  }
  
  // Wiederherstellen der Wallet-Daten aus dem Cookie
  function restoreWalletDataFromCookie() {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("walletData="))
      ?.split("=")[1];
    if (cookieValue) {
      const [address, balance] = cookieValue.split(":");
      addressLabel.textContent = "Adresse:";
      addressValue.textContent = address;
      balanceLabel.textContent = "Balance:";
      balanceValue.textContent = balance + " ETH";
      connectButton.style.display = "none";
      profile.style.display = "flex";
    }
  }
  
  // Speichern der Wallet-Daten im sessionStorage
async function connectWallet() {
    // ... Code zum Verbinden des Wallets ...
    saveWalletDataToCookie(address, balanceEth.toFixed(4));
    sessionStorage.setItem("connectedWalletAddress", address);
  }
  
  // Wiederherstellen der Wallet-Daten aus dem sessionStorage
function restoreWalletConnection() {
    const savedWalletAddress = sessionStorage.getItem("connectedWalletAddress");
    if (savedWalletAddress) {
      restoreWalletDataFromCookie();
    }
  }
