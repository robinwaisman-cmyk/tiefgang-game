export type AcceptedAnswer = { text: string; points: number; aliases?: string[] };
export type Question = { category: string; prompt: string; hint: string; accepted: AcceptedAnswer[] };

// Eigener deutscher Fragenkatalog. Antworten können laufend ergänzt und redaktionell bewertet werden.
export const QUESTIONS: Question[] = [
  { category: 'GEOGRAFIE', prompt: 'Nenne eine deutsche Insel.', hint: 'Nordsee und Ostsee sind gute Ausgangspunkte.', accepted: [
    {text:'Sylt',points:15,aliases:['insel sylt']},{text:'Rügen',points:15},{text:'Usedom',points:25},{text:'Fehmarn',points:30},{text:'Helgoland',points:35},{text:'Norderney',points:35},{text:'Borkum',points:40},{text:'Amrum',points:45},{text:'Föhr',points:45},{text:'Langeoog',points:55},{text:'Spiekeroog',points:60},{text:'Juist',points:65},{text:'Hiddensee',points:70},{text:'Pellworm',points:80},{text:'Wangerooge',points:75},{text:'Poel',points:80},{text:'Baltrum',points:85},{text:'Ummanz',points:100}
  ]},
  { category:'ESSEN & TRINKEN', prompt:'Nenne eine bekannte deutsche Süßigkeit oder Süßwarenmarke.', hint:'Denk an Klassiker aus dem Supermarkt oder Kiosk.', accepted:[
    {text:'Haribo',points:15},{text:'Milka',points:15},{text:'Ritter Sport',points:20},{text:'Kinder Schokolade',points:20,aliases:['kinderschokolade']},{text:'Knoppers',points:25},{text:'Toffifee',points:30},{text:'Nimm2',points:35},{text:'Katjes',points:35},{text:'Hanuta',points:35},{text:'Maoam',points:30},{text:'Schogetten',points:50},{text:'Halloren-Kugeln',points:70,aliases:['halloren kugeln','hallorenkugeln']},{text:'Ahoj-Brause',points:55,aliases:['ahoj brause']},{text:'Wick Blau',points:60},{text:'Eiskonfekt',points:65},{text:'Bambina',points:80},{text:'Zetti Knusperflocken',points:85,aliases:['knusperflocken']},{text:'Filinchen',points:100}
  ]},
  { category:'TIERE', prompt:'Nenne ein Tier, das in der Arktis oder Antarktis lebt.', hint:'Denk an Tiere aus Eis, Meer und Polarregionen.', accepted:[
    {text:'Eisbär',points:15},{text:'Pinguin',points:15},{text:'Robbe',points:20},{text:'Wal',points:20},{text:'Fuchs',points:25},{text:'Walross',points:30},{text:'Schneehase',points:40},{text:'Rentier',points:35},{text:'Narwal',points:55},{text:'Moschusochse',points:60},{text:'Schneeeule',points:45},{text:'Krill',points:55},{text:'Orca',points:30},{text:'Seeleopard',points:65},{text:'Weddellrobbe',points:80},{text:'Kaiserpinguin',points:35},{text:'Eissturmvogel',points:85},{text:'Polardorsch',points:100}
  ]},
  { category:'SPRACHE', prompt:'Nenne eine ausgestorbene Sprache.', hint:'Antike Kulturen, Inschriften und alte Reiche können helfen.', accepted:[
    {text:'Latein',points:15},{text:'Altgriechisch',points:25},{text:'Sumerisch',points:45},{text:'Akkadisch',points:55},{text:'Etruskisch',points:60},{text:'Gotisch',points:40},{text:'Altpersisch',points:50},{text:'Hethitisch',points:60},{text:'Phönizisch',points:55},{text:'Koptisch',points:45},{text:'Tocharisch',points:75},{text:'Luwisch',points:80},{text:'Elamisch',points:80},{text:'Ugaritisch',points:85},{text:'Dakisch',points:100},{text:'Vandalisch',points:85},{text:'Piktisch',points:75},{text:'Mittelägyptisch',points:65,aliases:['ägyptisch']}
  ]},
  { category:'SPORT', prompt:'Nenne eine Sportart, bei der ein Schläger, Stock oder Schlägerbrett benutzt wird.', hint:'Denk über Tennis und Hockey hinaus.', accepted:[
    {text:'Tennis',points:15},{text:'Tischtennis',points:15},{text:'Eishockey',points:20},{text:'Golf',points:20},{text:'Badminton',points:20},{text:'Baseball',points:25},{text:'Squash',points:30},{text:'Cricket',points:35},{text:'Unihockey',points:45},{text:'Lacrosse',points:45},{text:'Polo',points:35},{text:'Padel',points:30},{text:'Pickleball',points:50},{text:'Hurling',points:65},{text:'Shinty',points:75},{text:'Floorball',points:50},{text:'Bandy',points:80},{text:'Tamburello',points:100}
  ]},
  { category:'POP-KULTUR', prompt:'Nenne eine Figur aus einem Videospiel.', hint:'Nicht nur die Hauptfiguren der bekanntesten Reihen zählen.', accepted:[
    {text:'Mario',points:10},{text:'Luigi',points:15},{text:'Sonic',points:15},{text:'Link',points:20},{text:'Kirby',points:25},{text:'Pikachu',points:10},{text:'Lara Croft',points:20},{text:'Crash Bandicoot',points:25},{text:'Samus Aran',points:45},{text:'Fox McCloud',points:45},{text:'Solid Snake',points:35},{text:'Kiryu Kazuma',points:65},{text:'Aloy',points:30},{text:'Rayman',points:30},{text:'Gordon Freeman',points:45},{text:'Jill Valentine',points:35},{text:'Minsc',points:80},{text:'Ryo Hazuki',points:100}
  ]},
  { category:'ALLTAG', prompt:'Nenne eine Marke für Zahnpasta.', hint:'Sie steht häufig im Badezimmerregal.', accepted:[
    {text:'Colgate',points:15},{text:'Signal',points:15},{text:'Elmex',points:20},{text:'Blend-a-med',points:25,aliases:['blendamed']},{text:'Sensodyne',points:25},{text:'Odol-med3',points:30,aliases:['odol med 3','odol']},{text:'Parodontax',points:35},{text:'Meridol',points:40},{text:'Weleda',points:35},{text:'Ajona',points:50},{text:'Dontodent',points:45},{text:'Theramed',points:45},{text:'Splat',points:65},{text:'Biorepair',points:60},{text:'Curaprox',points:55},{text:'Lacalut',points:40},{text:'Karex',points:65},{text:'Pearls & Dents',points:100,aliases:['pearls and dents']}
  ]},
  { category:'GEOGRAFIE', prompt:'Nenne ein Land, dessen Name im Deutschen den Buchstaben Y enthält.', hint:'Einige bekannte Ländernamen enthalten diesen eher seltenen Buchstaben.', accepted:[
    {text:'Zypern',points:15},{text:'Seychellen',points:25},{text:'Guyana',points:100},{text:'Paraguay',points:30},{text:'Uruguay',points:30},{text:'Malaysia',points:20},{text:'Myanmar',points:25},{text:'Syrien',points:20},{text:'Libyen',points:20},{text:'Ägypten',points:15},{text:'Kenia',points:15},{text:'Simbabwe',points:20},{text:'Kirgisistan',points:30},{text:'Aserbaidschan',points:20},{text:'Tadschikistan',points:25},{text:'Turkmenistan',points:25},{text:'Kambodscha',points:15},{text:'Kongo',points:10}
  ]},
  { category:'NATUR', prompt:'Nenne ein Wetterphänomen.', hint:'Es kann am Himmel, am Boden oder im Meer auftreten.', accepted:[
    {text:'Regenbogen',points:15},{text:'Nebel',points:15},{text:'Hagel',points:20},{text:'Tornado',points:20},{text:'Polarlicht',points:25},{text:'Blitzeis',points:35},{text:'Graupel',points:45},{text:'Kugelblitz',points:40},{text:'Fallstreifen',points:65},{text:'Halo',points:35},{text:'Morgenrot',points:20},{text:'Fata Morgana',points:35},{text:'Wasserhose',points:45},{text:'Schneekorn',points:60},{text:'Nachtleuchtende Wolken',points:75,aliases:['leuchtende nachtwolken']},{text:'Eisregen',points:25},{text:'Staubteufel',points:70},{text:'Brocken-Gespenst',points:100,aliases:['brockengespenst']}
  ]},
  { category:'FAHRZEUGE', prompt:'Nenne eine Art von Fahrrad.', hint:'Denk an Einsatzbereiche, Bauformen und Spezialräder.', accepted:[
    {text:'Mountainbike',points:15},{text:'Rennrad',points:15},{text:'Tandem',points:25},{text:'Lastenrad',points:25},{text:'Faltrad',points:30},{text:'Liegerad',points:35},{text:'BMX',points:20},{text:'Gravelbike',points:30},{text:'Einrad',points:25},{text:'Fixie',points:35},{text:'Fatbike',points:40},{text:'Velomobil',points:55},{text:'S-Pedelec',points:45},{text:'Hollandrad',points:20},{text:'Bahnrad',points:40},{text:'Recumbent-Trike',points:100,aliases:['liegedreirad']},{text:'Klapprad',points:20},{text:'Hochrad',points:45}
  ]},
  { category:'FILM & FERNSEHEN', prompt:'Nenne einen Film, in dessen Titel eine Zahl vorkommt.', hint:'Sequels, Jahreszahlen oder Zahlen im eigentlichen Titel zählen.', accepted:[
    {text:'Ocean’s Eleven',points:20,aliases:['oceans eleven','ocean eleven']},{text:'Sieben',points:15},{text:'1917',points:25},{text:'2001: Odyssee im Weltraum',points:30,aliases:['2001 odyssee im weltraum']},{text:' apollo 13',points:25},{text:'District 9',points:30},{text:'22 Jump Street',points:40},{text:'300',points:15},{text:'Blade Runner 2049',points:25},{text:' numer 5 lebt',points:55,aliases:['nummer 5 lebt']},{text:'Fantastische Vier',points:40},{text:'H20 – Plötzlich Meerjungfrau',points:100,aliases:['h2o ploetzlich meerjungfrau','h2o']},{text:'Fahrenheit 451',points:35},{text:'Die 12 Geschworenen',points:40,aliases:['zwölf geschworenen','12 angry men']},{text:'Apollo 18',points:55},{text:'47 Ronin',points:50},{text:'8 Mile',points:30},{text:'9',points:60}
  ]},
  { category:'DEUTSCHLAND', prompt:'Nenne eine deutsche Stadt mit weniger als 100.000 Einwohnern.', hint:'Es muss keine Großstadt sein – Kleinstädte zählen genauso.', accepted:[
    {text:'Rothenburg ob der Tauber',points:55},{text:'Görlitz',points:30},{text:'Bamberg',points:25},{text:'Trier',points:20},{text:'Weimar',points:20},{text:'Celle',points:25},{text:'Passau',points:25},{text:'Wismar',points:35},{text:'Lüneburg',points:30},{text:'Goslar',points:35},{text:'Quedlinburg',points:45},{text:'Freiberg',points:35},{text:'Wernigerode',points:40},{text:'Meersburg',points:55},{text:'Eisenach',points:30},{text:'Schwäbisch Hall',points:45},{text:'Annaberg-Buchholz',points:100},{text:'Idar-Oberstein',points:65}
  ]},
  { category:'KÖRPER', prompt:'Nenne einen Knochen im menschlichen Körper.', hint:'Nicht nur Arm- und Beinknochen sind gefragt.', accepted:[
    {text:'Schädel',points:15},{text:'Oberschenkelknochen',points:20},{text:'Schlüsselbein',points:20},{text:'Kniescheibe',points:20},{text:'Steißbein',points:30},{text:'Elle',points:25},{text:'Speiche',points:25},{text:'Wadenbein',points:25},{text:'Schulterblatt',points:25},{text:'Brustbein',points:25},{text:'Kreuzbein',points:35},{text:'Hammer',points:40},{text:'Amboss',points:45},{text:'Steigbügel',points:40},{text:'Zungenbein',points:55},{text:'Pflugscharbein',points:70},{text:'Erbsenbein',points:100},{text:'Tränenbein',points:65}
  ]},
  { category:'KÜCHE', prompt:'Nenne eine Nudelsorte.', hint:'Neben Spaghetti gibt es viele kurze, gefüllte und regionale Sorten.', accepted:[
    {text:'Spaghetti',points:10},{text:'Penne',points:15},{text:'Fusilli',points:20},{text:'Farfalle',points:20},{text:'Rigatoni',points:25},{text:'Orecchiette',points:35},{text:'Pappardelle',points:30},{text:'Conchiglie',points:40},{text:'Cavatappi',points:45},{text:'Strozzapreti',points:50},{text:'Trofie',points:45},{text:'Malloreddus',points:70},{text:'Pici',points:50},{text:'Culurgiones',points:100},{text:'Bigoli',points:65},{text:'Radiatori',points:45},{text:'Gemelli',points:40},{text:'Anelli',points:35}
  ]},
  { category:'MYTHOLOGIE', prompt:'Nenne eine Figur aus der griechischen Mythologie.', hint:'Götter, Heldinnen, Helden und Monster sind erlaubt.', accepted:[
    {text:'Zeus',points:10},{text:'Athene',points:15},{text:'Hades',points:15},{text:'Medusa',points:15},{text:'Herakles',points:20},{text:'Achilles',points:20},{text:'Odysseus',points:20},{text:'Persephone',points:30},{text:'Morpheus',points:35},{text:'Chimära',points:35},{text:'Atalante',points:40},{text:'Bellerophon',points:50},{text:'Iris',points:25},{text:'Tiresias',points:45},{text:'Kassiopeia',points:35},{text:'Deukalion',points:65},{text:'Echidna',points:40},{text:'Asterion',points:100}
  ]},
  { category:'TECHNIK', prompt:'Nenne einen Anschluss oder Steckertyp.', hint:'Nicht nur USB zählt – denk an Bild, Ton und ältere Geräte.', accepted:[
    {text:'USB-C',points:15,aliases:['usb c','usbc']},{text:'HDMI',points:15},{text:'USB-A',points:15,aliases:['usb a']},{text:'Klinke',points:20,aliases:['3,5 mm klinke','miniklinke']},{text:'DisplayPort',points:25},{text:'VGA',points:20},{text:'DVI',points:25},{text:'SCART',points:30},{text:'Thunderbolt',points:30},{text:'FireWire',points:45},{text:'PS/2',points:35},{text:'RJ45',points:25,aliases:['ethernet']},{text:'TOSLINK',points:100},{text:'S-Video',points:45},{text:'Lightning',points:20},{text:'DIN-Stecker',points:45},{text:'BNC',points:45},{text:'eSATA',points:55}
  ]},
  { category:'PFLANZEN', prompt:'Nenne eine Pflanze, die Fleisch fängt oder verdaut.', hint:'Denk an Pflanzen, die in nährstoffarmen Böden überleben.', accepted:[
    {text:'Venusfliegenfalle',points:15},{text:'Sonnentau',points:20},{text:'Kannenpflanze',points:20},{text:'Wasserschlauch',points:30},{text:'Fettkraut',points:35},{text:'Schlauchpflanze',points:25},{text:'Regenbogenpflanze',points:50},{text:'Kobra-Lilie',points:55,aliases:['kobalilie']},{text:'Zwergkrug',points:65},{text:'Darlingtonia',points:55},{text:'Nepenthes rajah',points:70},{text:'Cephalotus',points:70},{text:'Brocchinia reducta',points:100},{text:'Genlisea',points:75},{text:'Aldrovanda',points:65},{text:'Heliamphora',points:70},{text:'Drosophyllum',points:75},{text:'Byblis',points:80}
  ]},
  { category:'GESCHICHTE', prompt:'Nenne eine antike Hochkultur.', hint:'Denk an frühe Reiche entlang großer Flüsse oder im Mittelmeerraum.', accepted:[
    {text:'Altes Ägypten',points:10},{text:'Römisches Reich',points:15},{text:'Antikes Griechenland',points:15},{text:'Mesopotamien',points:20},{text:'Maya',points:20},{text:'Azteken',points:20},{text:'Inka',points:20},{text:'Indus-Kultur',points:35},{text:'Minoische Kultur',points:40},{text:'Olmeken',points:45},{text:'Hethiter',points:45},{text:'Phönizier',points:30},{text:'Akkader',points:50},{text:'Etrusker',points:35},{text:'Nabatäer',points:60},{text:'Nok-Kultur',points:100},{text:'Chavín-Kultur',points:65},{text:'Jōmon-Kultur',points:70}
  ]},
  { category:'MUSIK', prompt:'Nenne ein Musikinstrument aus der Familie der Blasinstrumente.', hint:'Holz und Blech sind beide erlaubt.', accepted:[
    {text:'Trompete',points:15},{text:'Flöte',points:10},{text:'Klarinette',points:15},{text:'Saxofon',points:15},{text:'Posaune',points:20},{text:'Oboe',points:25},{text:'Fagott',points:30},{text:'Tuba',points:20},{text:'Dudelsack',points:25},{text:'Mundharmonika',points:20},{text:'Okarina',points:35},{text:'Serpent',points:65},{text:'Zink',points:55},{text:'Drehleier',points:40},{text:'Schalmei',points:45},{text:'Didgeridoo',points:30},{text:'Krummhorn',points:100},{text:'Alphorn',points:30}
  ]},
  { category:'ALLTAG', prompt:'Nenne einen deutschen Supermarkt oder Discounter.', hint:'Es gibt große Ketten und regionale Namen.', accepted:[
    {text:'Aldi',points:10},{text:'Lidl',points:10},{text:'Edeka',points:15},{text:'Rewe',points:15},{text:'Penny',points:20},{text:'Netto',points:15},{text:'Kaufland',points:20},{text:'Globus',points:30},{text:' tegut',points:35},{text:'Famila',points:35},{text:'Norma',points:30},{text:' denn’s Biomarkt',points:40,aliases:['denns biomarkt','denns']},{text:'Markant',points:40},{text:'Hit',points:30},{text:'Combi',points:40},{text:'Wasgau',points:100},{text:'V-Markt',points:50,aliases:['v markt']},{text:'Nahkauf',points:35}
  ]},
  { category:'WELTRAUM', prompt:'Nenne einen Mond in unserem Sonnensystem, der nicht der Erdmond ist.', hint:'Die großen Monde von Jupiter und Saturn sind ein guter Anfang.', accepted:[
    {text:'Europa',points:15},{text:'Titan',points:15},{text:'Ganymed',points:20},{text:'Kallisto',points:25},{text:'Io',points:20},{text:'Enceladus',points:30},{text:'Triton',points:30},{text:'Phobos',points:25},{text:'Deimos',points:30},{text:'Mimas',points:40},{text:'Dione',points:35},{text:'Iapetus',points:45},{text:'Oberon',points:35},{text:'Miranda',points:40},{text:'Nereid',points:100},{text:'Hyperion',points:45},{text:'Charon',points:20},{text:'Proteus',points:55}
  ]},
  { category:'KUNST & LITERATUR', prompt:'Nenne eine bekannte literarische Figur.', hint:'Romane, Theaterstücke und Sagen zählen.', accepted:[
    {text:'Sherlock Holmes',points:10},{text:'Don Quijote',points:20},{text:'Faust',points:15},{text:'Pippi Langstrumpf',points:15},{text:'Huckleberry Finn',points:25},{text:'Gregor Samsa',points:35},{text:'Effi Briest',points:25},{text:'Meister Proper',points:100},{text:'Dorian Gray',points:25},{text:'Winnetou',points:20},{text:'Raskolnikow',points:40},{text:'Nora Helmer',points:45},{text:'Siegfried',points:20},{text:'Gulliver',points:20},{text:'Meursault',points:50},{text:'Tartuffe',points:45},{text:'Phileas Fogg',points:35},{text:'Kalle Blomquist',points:55}
  ]},
  { category:'LEBENSMITTEL', prompt:'Nenne eine Käsesorte.', hint:'Denk auch an regionale und weniger bekannte Sorten.', accepted:[
    {text:'Gouda',points:10},{text:'Emmentaler',points:15},{text:'Mozzarella',points:15},{text:'Camembert',points:15},{text:'Parmesan',points:15},{text:'Feta',points:15},{text:'Bergkäse',points:20},{text:'Gorgonzola',points:25},{text:'Appenzeller',points:25},{text:'Tête de Moine',points:45},{text:'Morbier',points:40},{text:'Époisses',points:50},{text:'Cabrales',points:45},{text:'Livarot',points:55},{text:'Handkäse',points:35},{text:'Bregenzerwälder Bergkäse',points:70},{text:'Mimolette',points:40},{text:'Pule',points:100}
  ]},
  { category:'WISSENSCHAFT', prompt:'Nenne ein chemisches Element.', hint:'Neben Sauerstoff und Gold gibt es über hundert weitere.', accepted:[
    {text:'Sauerstoff',points:10},{text:'Gold',points:10},{text:'Eisen',points:10},{text:'Kohlenstoff',points:15},{text:'Helium',points:15},{text:'Wolfram',points:25},{text:'Bismut',points:35},{text:'Molybdän',points:35},{text:'Tellur',points:40},{text:'Ruthenium',points:45},{text:'Hafnium',points:50},{text:'Rhenium',points:55},{text:'Niob',points:45},{text:'Dysprosium',points:60},{text:'Praseodym',points:60},{text:'Tantal',points:40},{text:'Osmium',points:35},{text:'Protactinium',points:100}
  ]},
  { category:'ARCHITEKTUR', prompt:'Nenne ein berühmtes Bauwerk in Deutschland.', hint:'Es muss kein Schloss sein – Brücken, Kirchen und moderne Gebäude zählen.', accepted:[
    {text:'Brandenburger Tor',points:10},{text:'Kölner Dom',points:10},{text:'Schloss Neuschwanstein',points:10},{text:'Reichstagsgebäude',points:15},{text:'Elbphilharmonie',points:15},{text:'Wartburg',points:20},{text:'Zeche Zollverein',points:25},{text:'Völkerschlachtdenkmal',points:25},{text:'Holstentor',points:25},{text:'Aachener Dom',points:20},{text:'Mathildenhöhe',points:35},{text:'Fagus-Werk',points:45},{text:'Hundertwasserhaus in Darmstadt',points:100},{text:'Externsteine',points:25},{text:'Rakotzbrücke',points:35},{text:'Bauhaus Dessau',points:20},{text:'Kaiser-Wilhelm-Gedächtniskirche',points:20},{text:'Oberbaumbrücke',points:30}
  ]}
  ,{ category:'BUNDESLÄNDER', prompt:'Nenne ein deutsches Bundesland.', hint:'Neben den großen Flächenländern gibt es drei Stadtstaaten.', accepted:[
    {text:'Bayern',points:10},{text:'Nordrhein-Westfalen',points:15},{text:'Sachsen',points:15},{text:'Thüringen',points:20},{text:'Saarland',points:25},{text:'Brandenburg',points:20},{text:'Mecklenburg-Vorpommern',points:25},{text:'Bremen',points:25},{text:'Hamburg',points:15},{text:'Berlin',points:10},{text:'Rheinland-Pfalz',points:20},{text:'Sachsen-Anhalt',points:20},{text:'Schleswig-Holstein',points:20},{text:'Hessen',points:15},{text:'Baden-Württemberg',points:15},{text:'Niedersachsen',points:15},{text:'Freistaat Bayern',points:10},{text:'Land Bremen',points:100}
  ]}
  ,{ category:'BRETTSPIELE', prompt:'Nenne ein Brett- oder Gesellschaftsspiel.', hint:'Denk an Klassiker, Familienspiele und modernere Strategiespiele.', accepted:[
    {text:'Monopoly',points:10},{text:'Schach',points:10},{text:'Mensch ärgere dich nicht',points:15},{text:'Siedler von Catan',points:15,aliases:['catan']},{text:'Risiko',points:20},{text:'Carcassonne',points:25},{text:'Azul',points:30},{text:'Dixit',points:35},{text:'Activity',points:20},{text:'Cluedo',points:20},{text:'Scotland Yard',points:30},{text:'Patchwork',points:35},{text:'Wingspan',points:40},{text:'Hive',points:40},{text:'Diplomacy',points:50},{text:'Tigris & Euphrat',points:60},{text:'Heckmeck am Bratwurmeck',points:100},{text:'Kakerlakenpoker',points:70}
  ]}
  ,{ category:'MEERE', prompt:'Nenne ein Meer oder einen Ozean.', hint:'Es zählen sowohl große Ozeane als auch kleinere Randmeere.', accepted:[
    {text:'Mittelmeer',points:10},{text:'Nordsee',points:10},{text:'Ostsee',points:10},{text:'Atlantik',points:10},{text:'Pazifik',points:10},{text:'Indischer Ozean',points:15},{text:'Karibisches Meer',points:15},{text:'Rotes Meer',points:15},{text:'Schwarzes Meer',points:15},{text:'Beringmeer',points:30},{text:'Weddellmeer',points:35},{text:'Rossmeer',points:40},{text:'Labradorsee',points:40},{text:'Kara-See',points:45},{text:'Andamanensee',points:45},{text:'Sargassosee',points:35},{text:'Arafurasee',points:50},{text:'Laptewsee',points:100}
  ]}
  ,{ category:'HUNDE', prompt:'Nenne eine Hunderasse.', hint:'Neben Schäferhund und Labrador gibt es viele seltenere Rassen.', accepted:[
    {text:'Labrador Retriever',points:10,aliases:['labrador']},{text:'Deutscher Schäferhund',points:10,aliases:['schaeferhund']},{text:'Dackel',points:10},{text:'Golden Retriever',points:10},{text:'Pudel',points:15},{text:'Mops',points:15},{text:'Border Collie',points:20},{text:'Shiba Inu',points:25},{text:'Weimaraner',points:30},{text:'Vizsla',points:35},{text:'Basenji',points:45},{text:'Xoloitzcuintle',points:70},{text:'Lagotto Romagnolo',points:55},{text:'Kromfohrländer',points:65},{text:'Azawakh',points:75},{text:'Otterhund',points:100},{text:'Thai Ridgeback',points:55},{text:'Schapendoes',points:70}
  ]}
  ,{ category:'OBST', prompt:'Nenne eine Obstsorte.', hint:'Tropische und weniger bekannte Früchte zählen genauso.', accepted:[
    {text:'Apfel',points:10},{text:'Banane',points:10},{text:'Orange',points:10},{text:'Erdbeere',points:10},{text:'Mango',points:15},{text:'Kiwi',points:15},{text:'Granatapfel',points:20},{text:'Passionsfrucht',points:25},{text:'Litschi',points:25},{text:'Rambutan',points:40},{text:'Cherimoya',points:50},{text:'Mangostan',points:45},{text:'Salak',points:60},{text:'Yuzu',points:35},{text:'Buddhas Hand',points:65},{text:'Jabuticaba',points:75},{text:'Cempedak',points:100},{text:'Kiwano',points:45}
  ]}
  ,{ category:'BERUFE', prompt:'Nenne einen Beruf, den man heute noch ausübt.', hint:'Handwerk, Wissenschaft, Kultur und ungewöhnliche Berufe zählen.', accepted:[
    {text:'Lehrer',points:10},{text:'Arzt',points:10},{text:'Polizist',points:10},{text:'Koch',points:10},{text:'Tischler',points:15},{text:'Dachdecker',points:15},{text:'Hebamme',points:20},{text:'Geigenbauer',points:30},{text:'Orgelbauer',points:40},{text:'Forstwirt',points:20},{text:'Hufschmied',points:25},{text:'Restaurator',points:25},{text:'Tatortreiniger',points:35},{text:'Seiler',points:45},{text:'Böttcher',points:100},{text:'Kupferstecher',points:45},{text:'Bestatter',points:20},{text:'Fachkraft für Veranstaltungstechnik',points:35}
  ]}
  ,{ category:'VÖGEL', prompt:'Nenne eine Vogelart.', hint:'Nicht nur Amsel, Spatz und Adler zählen.', accepted:[
    {text:'Amsel',points:10},{text:'Spatz',points:10},{text:'Adler',points:10},{text:'Rotkehlchen',points:15},{text:'Eisvogel',points:20},{text:'Buntspecht',points:20},{text:'Kiebitz',points:30},{text:'Wiedehopf',points:30},{text:'Uferschnepfe',points:40},{text:'Brachvogel',points:40},{text:'Karmingimpel',points:50},{text:'Bartmeise',points:35},{text:'Seidenschwanz',points:35},{text:'Prachttaucher',points:40},{text:'Löffler',points:30},{text:'Schwarzstirnwürger',points:65},{text:'Kakapo',points:55},{text:'Hoatzin',points:100}
  ]}
  ,{ category:'HAUPTSTÄDTE', prompt:'Nenne eine Hauptstadt eines europäischen Staates.', hint:'Neben Paris und Rom gibt es in Europa viele kleinere Hauptstädte.', accepted:[
    {text:'Paris',points:10},{text:'Rom',points:10},{text:'Berlin',points:10},{text:'Madrid',points:10},{text:'Lissabon',points:15},{text:'Wien',points:10},{text:'Prag',points:15},{text:'Ljubljana',points:25},{text:'Vilnius',points:25},{text:'Riga',points:20},{text:'Tallinn',points:20},{text:'Podgorica',points:35},{text:'Skopje',points:25},{text:'Chişinău',points:100,aliases:['chisinau']},{text:'Vaduz',points:30},{text:'San Marino',points:35},{text:'Andorra la Vella',points:40},{text:'Nikosia',points:25}
  ]}
  ,{ category:'KÜNSTLER', prompt:'Nenne eine Malerin oder einen Maler.', hint:'Es zählen klassische, moderne und zeitgenössische Künstler.', accepted:[
    {text:'Vincent van Gogh',points:10},{text:'Pablo Picasso',points:10},{text:'Claude Monet',points:10},{text:'Frida Kahlo',points:15},{text:'Leonardo da Vinci',points:10},{text:'Caspar David Friedrich',points:15},{text:'Rembrandt',points:15},{text:'Käthe Kollwitz',points:25},{text:'Hilma af Klint',points:35},{text:'Lyonel Feininger',points:30},{text:'Paula Modersohn-Becker',points:25},{text:'Artemisia Gentileschi',points:35},{text:'Gerhard Richter',points:20},{text:'M. C. Escher',points:20},{text:'Lee Krasner',points:50},{text:'Ibrahim el-Salahi',points:100},{text:'Maria Lassnig',points:45},{text:'Sonia Delaunay',points:40}
  ]}
  ,{ category:'FESTE', prompt:'Nenne ein Fest oder einen Feiertag, der in Deutschland gefeiert wird.', hint:'Es zählen gesetzliche Feiertage, Volksfeste und regionale Traditionen.', accepted:[
    {text:'Weihnachten',points:10},{text:'Ostern',points:10},{text:'Silvester',points:10},{text:'Karneval',points:15},{text:'Oktoberfest',points:15},{text:'Erntedankfest',points:20},{text:'Pfingsten',points:20},{text:'Walpurgisnacht',points:30},{text:'Martinstag',points:20},{text:'Nikolaustag',points:15},{text:'Schützenfest',points:25},{text:'Rosenmontag',points:20},{text:'Sonnwendfeier',points:35},{text:'Hafengeburtstag',points:30},{text:'Cannstatter Volksfest',points:30},{text:'Kramermarkt',points:100},{text:'Kieler Woche',points:20},{text:'Almabtrieb',points:35}
  ]}
];

export function normalizeAnswer(value: string): string {
  return value.toLocaleLowerCase('de-DE').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/ß/g, 'ss').replace(/&/g, ' und ').replace(/[^a-z0-9]+/g, ' ').trim()
    .replace(/\b(der|die|das|ein|eine|einer|eines|the|a|an)\b/g, ' ').replace(/\s+/g, ' ');
}

export type ScoredAnswer = { matched: AcceptedAnswer; points: number };
export function findAnswer(question: Question, raw: string): ScoredAnswer | null {
  const normalized = normalizeAnswer(raw);
  if (!normalized) return null;
  const match = question.accepted.find((item) => [item.text, ...(item.aliases ?? [])].some((s) => normalizeAnswer(s) === normalized));
  return match ? { matched: match, points: match.points } : null;
}

export function getDailyQuestions(date = new Date()): Question[] {
  // UTC-based stable daily rotation: same 7 questions for every visitor on a date.
  const epoch = Date.UTC(2025, 0, 1);
  const day = Math.floor((Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()) - epoch) / 86400000);
  const start = ((day * 7) % QUESTIONS.length + QUESTIONS.length) % QUESTIONS.length;
  const chosen: Question[] = [];

  for (let i = 0; chosen.length < 7; i++) chosen.push(QUESTIONS[(start + i) % QUESTIONS.length]);
  return chosen;
}
