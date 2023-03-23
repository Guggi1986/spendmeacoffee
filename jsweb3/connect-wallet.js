document.addEventListener("DOMContentLoaded", function () {
  const connectButton = document.getElementById("connectButton");
  const profile = document.getElementById("profile");
  const profileImage = document.getElementById("profileImage");
  const dropdown = document.getElementById("dropdown");
  const addressLabel = document.getElementById("addressLabel");
  const addressValue = document.getElementById("addressValue");
  const balanceLabel = document.getElementById("balanceLabel");
  const balanceValue = document.getElementById("balanceValue");

  async function connectWallet() {
    if (typeof window.ethereum === "undefined") {
      const installMetamask = confirm("Dazu benötigen Sie Metamask. Möchten Sie Metamask von der offiziellen Seite installieren?");
      if (installMetamask) {
        window.open("https://metamask.io/download/", "_blank");
      }
      return;
    }

    let accounts;
    try {
      accounts = await window.ethereum.request({ method: "eth_accounts" });
      if (accounts.length === 0) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        accounts = await window.ethereum.request({ method: "eth_accounts" });
      }
    } catch (error) {
      console.error(error);
      return;
    }

    try {
      const address = accounts[0];
      const balanceWei = await window.ethereum.request({
        method: "eth_getBalance",
        params: [address, "latest"],
      });
      const balanceEth = parseInt(balanceWei) / Math.pow(10, 18);

      connectButton.style.display = "none";
      profile.style.display = "flex";
      addressLabel.textContent = "Adresse:";
      addressValue.textContent = address;
      balanceLabel.textContent = "Balance:";
      balanceValue.textContent = balanceEth.toFixed(4) + " ETH";

      // Speichern der Adresse im localStorage
      localStorage.setItem('connectedWalletAddress', address);
    } catch (error) {
      console.error(error);
    }
  }

  function restoreWalletConnection() {
    const savedWalletAddress = localStorage.getItem('connectedWalletAddress');

    if (savedWalletAddress) {
      addressLabel.textContent = "Adresse:";
      addressValue.textContent = savedWalletAddress;
      connectButton.style.display = "none";
      profile.style.display = "flex";
    }
  }

  function disconnectWallet() {
    connectButton.style.display = "block";
    profile.style.display = "none";
    localStorage.removeItem('connectedWalletAddress');
  }

  connectButton.addEventListener("click", connectWallet);

  profileImage.addEventListener("click", () => {
    const dropdownStyle = dropdown.style;
    dropdownStyle.display = dropdownStyle.display === "none" ? "block" : "none";
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (
      dropdown.style.display === "block" &&
      !profile.contains(target) &&
      !dropdown.contains(target)
    ) {
      dropdown.style.display = "none";
    }
  });

  // Stellen Sie die Verbindung zur Wallet beim Laden der Seite wieder her
  restoreWalletConnection();

  // Event-Listener für das Ändern von Konten hinzufügen
if (typeof window.ethereum !== "undefined") {
  window.ethereum.on("accountsChanged", (accounts) => {
    if (accounts.length === 0) {
      disconnectWallet();
    } else {
      connectWallet();
    }
  });

  // Event-Listener für das Ändern der Kette hinzufügen
  window.ethereum.on("chainChanged", () => {
    const savedWalletAddress = localStorage.getItem('connectedWalletAddress');
    if (savedWalletAddress) {
      connectWallet();
    }
  });
}

// Funktion zum Überprüfen der Unterstützung von ENS (Ethereum Name Service)
async function checkENSsupport() {
  try {
    const ensResolverAddress = await window.ethereum.request({
      method: "ens_getResolver",
      params: ["vitalik.eth"],
    });
    return ensResolverAddress !== "0x0000000000000000000000000000000000000000";
  } catch (error) {
    console.error(error);
    return false;
  }
}

// Funktion zum Abrufen des ENS-Namens der angegebenen Adresse
async function getENSname(address) {
  try {
    const name = await window.ethereum.request({
      method: "ens_reverseResolve",
      params: [address],
    });
    return name;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Funktion zum Anzeigen des ENS-Namens und der Adresse im Profil
async function displayENSname(address) {
  const ensSupport = await checkENSsupport();
  if (ensSupport) {
    const ensName = await getENSname(address);
    if (ensName) {
      addressValue.textContent = `${ensName} (${address})`;
    }
  }
}

// Profileinstellungen aktualisieren, um ENS-Namen zu berücksichtigen
async function updateProfileSettings() {
  const savedWalletAddress = localStorage.getItem('connectedWalletAddress');
  if (savedWalletAddress) {
    const ensSupport = await checkENSsupport();
    if (ensSupport) {
      displayENSname(savedWalletAddress);
    } else {
      addressValue.textContent = savedWalletAddress;
    }
  }
}

// ENS-Unterstützung in den Profileinstellungen aktualisieren, wenn die Kette geändert wird
if (typeof window.ethereum !== "undefined") {
  window.ethereum.on("chainChanged", updateProfileSettings);
}

// Aktualisieren Sie die Profileinstellungen, um ENS-Unterstützung zu berücksichtigen, wenn die Seite geladen wird
updateProfileSettings();
})