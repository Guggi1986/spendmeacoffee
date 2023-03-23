async function updateCoffeePrices() {
    const coffeePrices = {
      small: 2.5,
      medium: 3.5,
      large: 4.5,
    };
  
    const ethPriceInUsd = await getEthPriceInUsd();
  
    const coffeeOptions = document.querySelectorAll(".coffee-option");
  
    coffeeOptions.forEach((coffeeOption, index) => {
      const size = ["small", "medium", "large"][index];
      const priceSpan = coffeeOption.querySelector(".price");
      const priceDollar = coffeePrices[size];
      const priceEth = getCryptoPrice(size, ethPriceInUsd);
  
      // Zeige den Preis in ETH und Dollar auf zwei Zeilen
      priceSpan.innerHTML = `${priceEth.toFixed(6)} ${getSelectedCurrency()}<br>${priceDollar} $`;
    });
  }
  
  function getCryptoPrice(size, ethPriceInUsd) {
    const coffeePrices = {
      small: 2.5,
      medium: 3.5,
      large: 4.5,
    };
  
    const priceDollar = coffeePrices[size];
    const priceEth = priceDollar / ethPriceInUsd;
    return priceEth;
  }
  
  function getSelectedCurrency() {
    // Fügen Sie hier die Logik hinzu, um die ausgewählte Währung abzurufen (ETH oder Matic)
    // Zum Beispiel: return getSelectedWalletCurrency();
    // Diese Funktion gibt vorübergehend "ETH" als ausgewählte Währung zurück
    return "ETH";
  }
  
  async function getEthPriceInUsd() {
    try {
      const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd");
      const data = await response.json();
      return data.ethereum.usd;
    } catch (error) {
      console.error("Error fetching ETH price:", error);
      return 0;
    }
  }
  