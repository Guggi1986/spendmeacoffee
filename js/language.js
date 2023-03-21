const translations = {
  en: {
    HomepageTitel: 'My Website',
    MenuHome: 'Home',
    MenuProject: 'Project',
    MenuContact: 'Contact',
    BtnConnectWallet: 'Connect Metamask',
    HeroTitel: 'Help me bring my domain to life with caffeine!',
    HeroText: 'I bought this domain because it was too good not to buy. But now I am sitting here staring at the screen, not knowing what to do with it. It\s like getting a new pet - you know you\re going to love it, but you have to figure out what it wants. So, how about you offer me a coffee to get my creativity flowing? Maybe you also have an idea of what I could do with this domain? Or maybe you even want to buy it and bring it to life yourself? Whatever it is, let me know - I am open to anything! Just contact me through the form and let us brainstorm.<br>Caffeine included!',
    BtnSpendMeaCoffee: 'Spend Me A Coffee',
    SpenderMessageTitel: 'Coffee-Spender Messages',
    ProjectTitel: 'The Project',
    ProjectText: 'Dummietext: I bought this domain because it was too good not to buy.<br>But now I am sitting here staring at the screen, not knowing what to do with it.<br>It\s like getting a new pet - you know you\re going to love it,<br>but you have to figure out what it wants.<br>So, how about you offer me a coffee to get my creativity flowing?<br>Maybe you also have an idea of what I could do with this domain?<br>Or maybe you even want to buy it and bring it to life yourself?<br>Whatever it is, let me know - I am open to anything!<br>Just contact me through the form and let us brainstorm.<br>Caffeine included!',
    StickyMenuTitel: 'The Project',
    //contact translations
    ContactHeader: 'Let\s conquer the world of caffeine and creativity together!',
    ContactText:  'So you made it this far – congratulations! Now that we\re on this exciting journey of caffeine-infused ideas and projects, I\m looking forward to hearing from you. Whether you have a brilliant idea that can be realized with this domain, or if you simply want to treat me to a virtual coffee to keep the creativity machine running – I\m all ears! Fancy a wild collaboration or even a caffeine-dependent adventure? Don\t hesitate to contact me! My digital mailbox is always open, and I can\t wait to hear about your daring plans and ideas. Simply drop me a message here or find me on Discord, where we can unleash our creativity together. But be warned: caffeine enthusiasts, word acrobats, and creative minds are especially welcome here! So, what are you waiting for? Let\s bring this domain to life together and enrich the world of the internet with our caffeine-fueled ideas!',
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
    //contact translations
    ContactHeader: 'Lass uns zusammen die Welt des Koffeins und der Kreativität erobern!',
    ContactText: 'Du hast es also bis hierher geschafft – herzlichen Glückwunsch! Jetzt wo wir uns auf dieser aufregenden Reise der koffeinhaltigen Ideen und Projekte befinden, freue ich mich darauf, von dir zu hören. Egal ob du eine geniale Idee hast, die mit dieser Domain verwirklicht werden kann, oder ob du einfach nur einen virtuellen Kaffee spendieren möchtest, um die Kreativmaschine am Laufen zu halten – ich bin ganz Ohr! Lust auf eine wilde Zusammenarbeit oder gar ein gemeinsames Koffein-abhängiges Abenteuer? Zögere nicht, mich zu kontaktieren! Mein digitaler Briefkasten ist immer offen, und ich kann es kaum erwarten, von deinen kühnen Plänen und Ideen zu hören. Schreib mir doch einfach hier oder finde mich auf Discord, wo wir gemeinsam unsere Kreativität entfesseln können. Aber Achtung: Koffein-Enthusiasten, Wortakrobaten und kreative Köpfe sind hier besonders willkommen! Also, worauf wartest du noch? Lass uns gemeinsam diese Domain zum Leben erwecken und die Welt des Internets mit unseren koffeinhaltigen Ideen bereichern!',

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
