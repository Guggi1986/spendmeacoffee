(function () {
  document.addEventListener("DOMContentLoaded", function () {
    let spendCoffeeButton = document.querySelector(".btnspendmeacoffee");
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

      const chainId = await window.ethereum.request({ method: "eth_chainId" });
      const nativeCurrency = getNativeCurrency(chainId);

      try {
        const address = accounts[0];
        const balanceWei = await window.ethereum.request({
          method: "eth_getBalance",
          params: [address, "latest"],
        });
        const balance = parseInt(balanceWei) / Math.pow(10, nativeCurrency.decimals);

        profile.style.display = "flex";
        addressValue.textContent = address;
        balanceValue.textContent = balance.toFixed(4) + " " + nativeCurrency.symbol;

        // Speichern der Adresse im localStorage
        localStorage.setItem("connectedWalletAddress", address);
      } catch (error) {
        console.error(error);
      }

      showCoffeePopup();
    }

    function getNativeCurrency(chainId) {
      const nativeCurrencies = {
        "0x1": { symbol: "ETH", decimals: 18 },
        "0x89": { symbol: "MATIC", decimals: 18 },
      };

      return nativeCurrencies[chainId] || { symbol: "Unknown", decimals: 18 };
    }

    function showCoffeePopup() {
      const coffeePopup = document.createElement("div");
      coffeePopup.innerHTML = `
      <div class="coffee-popup">
        <h3 class="popupheader">Wählen Sie eine Kaffeegröße:</h3>
        <div class="coffee-options-container">
          <div class="coffee-option">
            <img src="img/coffee-spending.png" alt="Klein" class="coffee-image small">
            <h4>Klein</h4>
            <span class="price"></span>
            <p>Hier ist eine kurze Beschreibung der kleinen Kaffeeoption.</p>
            <button class="select-button">Auswählen</button>
          </div>
          <div class="coffee-option">
            <img src="img/coffee-spending.png" alt="Mittel" class="coffee-image medium ">
            <h4>Mittel</h4>
            <span class="price"></span>
            <p>Hier ist eine kurze Beschreibung der mittleren Kaffeeoption.</p>
            <button class="select-button">Auswählen</button>
          </div>
          <div class="coffee-option">
            <img src="img/coffee-spending.png" alt="Groß" class="coffee-image large ">
            <h4>Groß</h4>
            <span class="price"></span>
            <p>Hier ist eine kurze Beschreibung der großen Kaffeeoption.</p>
            <button class="select-button">Auswählen</button>
          </div>
        </div>
        <button class="coffee-popup-close">X</button>
    </div>


    
        `;

      const overlay = document.createElement("div");
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.zIndex = "999";
      document.body.appendChild(overlay);

      coffeePopup.querySelector(".coffee-popup-close").addEventListener("click", () => {
        coffeePopup.remove();
        overlay.remove();
      });

      document.body.appendChild(coffeePopup);

      // Rufen Sie hier updateCoffeePrices() auf
      updateCoffeePrices();
    }


    if (spendCoffeeButton) {
      spendCoffeeButton.addEventListener("click", connectWallet);
    }

  });
})();
