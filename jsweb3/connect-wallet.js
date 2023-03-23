document.addEventListener("DOMContentLoaded", function () {
    const connectButton = document.getElementById("connectButton");
    const profile = document.getElementById("profile");
    const profileImage = document.getElementById("profileImage");
    const dropdown = document.getElementById("dropdown");
    const addressLabel = document.getElementById("addressLabel");
    const addressValue = document.getElementById("addressValue");
    const balanceLabel = document.getElementById("balanceLabel");
    const balanceValue = document.getElementById("balanceValue");
  
    connectButton.addEventListener("click", async () => {
        // Überprüfen, ob Metamask installiert ist
        if (typeof window.ethereum === "undefined") {
            const installMetamask = confirm("Dazu benötigen Sie Metamask. Möchten Sie Metamask von der offiziellen Seite installieren?");
            if (installMetamask) {
                window.open("https://metamask.io/download/", "_blank");
            }
            return;
        }
  
        // Überprüfen, ob Benutzer eingeloggt ist
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
  
        // Abrufen der Kontobalance
        try {
            const address = accounts[0];
            const balanceWei = await window.ethereum.request({
                method: "eth_getBalance",
                params: [address, "latest"],
            });
            const balanceEth = parseInt(balanceWei) / Math.pow(10, 18);
  
            // Button ausblenden, Profilbild einblenden
            connectButton.style.display = "none";
            profile.style.display = "block";
  
            // Kontobalance und Adresse in HTML-Struktur einfügen
            addressLabel.textContent = `Adresse: `;
            addressValue.textContent = `${address.substring(0, 6)}...`;
            balanceLabel.textContent = `Kontobalance: `;
            balanceValue.textContent = `${balanceEth.toString().substring(0, 8)} ETH`;
  
        } catch (error) {
            console.error(error);
        }
    });
  
    profileImage.addEventListener("click", () => {
        dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
    });
  });