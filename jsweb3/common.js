// common.js

function restoreWalletConnection() {
    const savedWalletAddress = localStorage.getItem("connectedWalletAddress");
    if (savedWalletAddress) {
      restoreWalletDataFromCookie();
    }
  }
  