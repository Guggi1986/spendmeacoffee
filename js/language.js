const translations = {
    en: {
      HomepageTitel: 'My Website',
      MenuHome: 'Home',
      MenuProject: 'Project',
      MenuContact: 'Contact',
      BtnConnectWallet: 'Connect Metamask',
      HeroTitel: 'Help me bring my domain to life with caffeine!',
      HeroText: 'I bought this domain because it was too good not to buy. But now I am sitting here staring at the screen, not knowing what to do with it. It is like getting a new pet - you know you are going to love it, but you have to figure out what it wants. So, how about you offer me a coffee to get my creativity flowing? Maybe you also have an idea of what I could do with this domain? Or maybe you even want to buy it and bring it to life yourself? Whatever it is, let me know - I am open to anything! Just contact me through the form and let us brainstorm.<br>Caffeine included!',
      BtnSpendMeaCoffee: 'Spend Me A Coffee',
      SpenderMessageTitel: 'Coffee-Spender Messages',
      ProjectTitel: 'The Project',
      ProjectText: 'Dummietext: I bought this domain because it was too good not to buy.<br>But now I am sitting here staring at the screen, not knowing what to do with it.<br>It is like getting a new pet - you know you are going to love it,<br>but you have to figure out what it wants.<br>So, how about you offer me a coffee to get my creativity flowing?<br>Maybe you also have an idea of what I could do with this domain?<br>Or maybe you even want to buy it and bring it to life yourself?<br>Whatever it is, let me know - I am open to anything!<br>Just contact me through the form and let us brainstorm.<br>Caffeine included!',
      StickyMenuTitel: 'The Project',
    },
    de: {
      HomepageTitel: 'Meine Webseite',
      MenuHome: 'Home',
      MenuProject: 'Projekt',
      MenuContact: 'Kontakt',
      BtnConnectWallet: 'Metamask verbinden',
      HeroTitel: 'Hilf mir meine Domain mit Koffein zu beleben!',
      HeroText: 'Ich habe diese Domain gekauft, weil sie zu gut war, um sie nicht zu kaufen. Aber jetzt sitze ich hier und starre auf den Bildschirm, ohne zu wissen, was ich damit anfangen soll. Es ist wie bei einem neuen Haustier - man weiß, dass man es lieben wird, aber man muss erst herausfinden, was es will. Also, wie wäre es, wenn du mir einen Kaffee spendierst, um meine Kreativität anzukurbeln? Vielleicht hast du auch eine Idee, was ich mit dieser Domain anstellen könnte? Oder vielleicht möchtest du sie sogar kaufen und selbst zum Leben erwecken? Egal was es ist, lass es mich wissen - ich bin für alles offen! Kontaktiere mich einfach über das Formular und lass uns brainstormen.<br>Koffein inklusive!',
      BtnSpendMeaCoffee: 'Lade Mich Zum Kaffee Ein',
      SpenderMessageTitel: 'Kaffee-Spender Nachrichten',
      ProjectTitel: 'Das Projekt',
      ProjectText: 'Dummietext: I bought this domain because it was too good not to buy.<br>But now I am sitting here staring at the screen, not knowing what to do with it.<br>It is like getting a new pet - you know you are going to love it,<br>but you have to figure out what it wants.<br>So, how about you offer me a coffee to get my creativity flowing?<br>Maybe you also have an idea of what I could do with this domain?<br>Or maybe you even want to buy it and bring it to life yourself?<br>Whatever it is, let me know - I am open to anything!<br>Just contact me through the form and let us brainstorm.<br>Caffeine included!',
      StickyMenuTitel: 'The Project',
    },
  };
  
  function setLanguage(lang) {
    const langElements = document.querySelectorAll('.lang');
    for (let j = 0; j < langElements.length; j++) {
      const langKey = langElements[j].getAttribute('data-lang-key');
      if (translations[lang] && translations[lang][langKey]) {
        langElements[j].innerHTML = translations[lang][langKey];
      }
    }
  }
  
  const userLang = navigator.language || navigator.userLanguage;
  if (userLang === 'de') {
    setLanguage('de');
  } else {
    setLanguage('en');
  }
  //Function is needet to get the text out for the animation
  function getHeroTitle() {
    const userLang = navigator.language || navigator.userLanguage;
    const lang = userLang === 'de' ? 'de' : 'en';
    return translations[lang].HeroTitel;
  }
  