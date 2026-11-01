// Lista zagadnień. "id" musi pasować do pola "t" w pytaniach, fiszkach i słowniku.
// group: "wyklady" = treść ze slajdów, "uzupelnienie" = tematy z zakresu egzaminu spoza slajdów.
window.TOPICS = [
  { id: "historia",    group: "wyklady", src: "W1", name: "Historia i podstawowe pojęcia" },
  { id: "mendel",      group: "wyklady", src: "W2", name: "Prawa Mendla" },
  { id: "odstepstwa",  group: "wyklady", src: "W2", name: "Odstępstwa od praw Mendla" },
  { id: "epistaza",    group: "wyklady", src: "W2", name: "Epistaza i cechy wielogenowe" },
  { id: "statystyka",  group: "wyklady", src: "W3", name: "Prawdopodobieństwo i test χ²" },
  { id: "sprzezenia",  group: "wyklady", src: "W3", name: "Sprzężenia i mapy genetyczne" },
  { id: "chromatyna",  group: "wyklady", src: "W4", name: "DNA, chromatyna, chromosomy" },
  { id: "kariotyp",    group: "wyklady", src: "W4", name: "Kariotyp i cytogenetyka" },
  { id: "cykl",        group: "wyklady", src: "W4", name: "Cykl komórkowy i mitoza" },

  { id: "dna",         group: "uzupelnienie", src: "A1", name: "Struktura i replikacja DNA" },
  { id: "ekspresja",   group: "uzupelnienie", src: "A2–A4", name: "Kod genetyczny, od DNA do białek" },
  { id: "mutacje",     group: "uzupelnienie", src: "A5–A6", name: "Mutacje, mutageny, naprawa" },
  { id: "genomy",      group: "uzupelnienie", src: "B1–B3", name: "Genomy prokariotów i eukariotów" },
  { id: "mejoza",      group: "uzupelnienie", src: "C3–C4", name: "Mejoza, gametogeneza, rekombinacja" },
  { id: "plec",        group: "uzupelnienie", src: "C9–C10", name: "Determinacja płci, cechy sprzężone z płcią" },
  { id: "pozajadrowe", group: "uzupelnienie", src: "C6–C7", name: "Bakterie i geny w organellach" },
  { id: "populacje",   group: "uzupelnienie", src: "C12, D", name: "Genetyka populacji i ewolucja" },
  { id: "techniki",    group: "uzupelnienie", src: "E1–E3", name: "PCR i sekwencjonowanie" },
  { id: "choroby",     group: "uzupelnienie", src: "F1–F2", name: "Choroby i badania genetyczne" }
];
