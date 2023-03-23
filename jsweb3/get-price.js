function updateCoffeePrices() {
    const coffeePrices = {
      small: 2.5,
      medium: 3.5,
      large: 4.5,
    };
  
    const coffeeOptions = document.querySelectorAll(".coffee-option");
  
    coffeeOptions.forEach((coffeeOption, index) => {
      const size = ["small", "medium", "large"][index];
      const priceSpan = coffeeOption.querySelector(".price");
      const priceDollar = coffeePrices[size];
      const priceEth = getCryptoPrice(size);
  
      // Zeige den Preis in ETH und Dollar auf zwei Zeilen
      priceSpan.innerHTML = `${priceEth} ${getSelectedCurrency()}<br>${priceDollar} $`;
    });
  }
  
  function getCryptoPrice(size) {
    // Setze hier die Preise in ETH entsprechend der Kaffeegröße
    if (size === "small") {
      return 0.005;
    } else if (size === "medium") {
      return 0.01;
    } else {
      return 0.02;
    }
  }
  function getSelectedCurrency() {
    // Fügen Sie hier die Logik hinzu, um die ausgewählte Währung abzurufen (ETH oder Matic)
    // Zum Beispiel: return getSelectedWalletCurrency();
    // Diese Funktion gibt vorübergehend "ETH" als ausgewählte Währung zurück
    return "ETH";
  }
  