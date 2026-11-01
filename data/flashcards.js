// FISZKI (dodatkowe – poza pojęciami ze słownika, które są dołączane automatycznie)
// Format: ["id_zagadnienia", "przód (pytanie)", "tył (odpowiedź)"]
window.FLASHCARDS = [
  ["historia", "Kto i kiedy użył terminu „genetyka”?", "William Bateson, 1905 (publicznie: konferencja w Londynie, 1906)."],
  ["historia", "Kto wprowadził słowa: gen, genotyp, fenotyp?", "Wilhelm Johannsen (gen – 1909)."],
  ["historia", "Nobel 1933", "T. H. Morgan – rola chromosomów w dziedziczeniu."],
  ["historia", "Nobel 1946", "H. J. Muller – mutagenne działanie promieni X."],
  ["historia", "Kto odkrył mitozę u zwierząt, a kto u roślin?", "Zwierzęta: Wacław Mayzel (1873).\nRośliny: Edward Strasburger (1876)."],
  ["historia", "Walther Flemming", "Twórca cytogenetyki; pojęcia chromatyna i mitoza; 1879 – chromosomy w mitozie."],
  ["historia", "Watson, Crick, Franklin, Wilkins", "Podwójna helisa DNA (Nature, 1953). Nobel 1962 – Watson, Crick, Wilkins. Kluczowe zdjęcia rentgenowskie – R. Franklin."],
  ["historia", "Barbara McClintock", "Transpozony (kukurydza). Nobel 1983."],
  ["historia", "Kary Mullis", "PCR (1983). Nobel z chemii 1993."],
  ["historia", "Frederick Sanger", "Metoda sekwencjonowania DNA. Dwa Noble z chemii (1958, 1980)."],
  ["historia", "Doudna i Charpentier", "CRISPR-Cas9 – edycja genów. Nobel 2020."],
  ["historia", "Projekt Poznania Genomu Człowieka", "1990–2003, ok. 3 mld $, ok. 20–25 tys. genów."],
  ["historia", "Projekt 1000 Genomów", "2008–2015, katalog zmienności genetycznej człowieka."],
  ["historia", "Podobieństwo genomu człowieka do…", "Szympans 98,8%, mysz 85%, muszka 60%, banan 60%, ryż 40%."],

  ["mendel", "Stosunek fenotypów F2 – monohybryda", "3 : 1 (genotypy 1 : 2 : 1)"],
  ["mendel", "Stosunek fenotypów F2 – dihybryda", "9 : 3 : 3 : 1"],
  ["mendel", "Stosunek genotypów F2 – dihybryda", "1 AABB : 2 AABb : 2 AaBB : 4 AaBb : 1 AAbb : 2 Aabb : 1 aaBB : 2 aaBb : 1 aabb"],
  ["mendel", "Krzyżówka testowa AaBb × aabb", "1 : 1 : 1 : 1"],
  ["mendel", "Kto „odkrył na nowo” Mendla (1900)?", "Hugo de Vries, Carl Correns, Erich von Tschermak."],
  ["mendel", "Cechy jednogenowe u zwierząt (wykład)", "Mysz: sierść albinotyczna/normalna.\nMuszka: skrzydła normalne/szczątkowe."],

  ["odstepstwa", "Grupy krwi – allele i relacje", "IA, IB, i. IA i IB – kodominacja; oba dominują nad i."],
  ["odstepstwa", "Żółta mysz × żółta mysz", "2 żółte : 1 agouti (AᵞAᵞ letalne)."],

  ["epistaza", "9 : 3 : 4", "Epistaza recesywna (myszy C/A, labradory E/B)."],
  ["epistaza", "9 : 7", "Epistaza komplementarna / podwójnie recesywna (kukurydza – barwa kolb)."],
  ["epistaza", "12 : 3 : 1", "Epistaza dominująca (dynia, upierzenie kurcząt)."],
  ["epistaza", "15 : 1", "Podwójna epistaza dominująca / geny dublujące (tasznik, ziarniaki pszenicy)."],
  ["epistaza", "13 : 3", "Epistaza dominująco-recesywna (cebula: I i r)."],
  ["epistaza", "Labradory – genotypy", "E_B_ czarny\nE_bb brązowy\nee__ złoty"],

  ["statystyka", "Wzór χ²", "χ² = Σ (O − E)² / E"],
  ["statystyka", "Kiedy odrzucamy H₀?", "Gdy χ² obliczone > χ² krytyczne (dla danego df i α = 0,05)."],
  ["statystyka", "χ² krytyczne dla α = 0,05", "df = 1 → 3,84\ndf = 2 → 5,99\ndf = 3 → 7,81"],
  ["statystyka", "Liczba typów gamet / pól szachownicy dla n genów heterozygotycznych", "Gamety: 2ⁿ. Pola: (2ⁿ)² = 4ⁿ."],

  ["sprzezenia", "Jak obliczyć odległość genów w cM?", "(liczba rekombinantów / całe potomstwo) × 100%."],
  ["sprzezenia", "Jak znaleźć gen środkowy w krzyżówce trzypunktowej?", "Porównaj najliczniejsze klasy (rodzicielskie) z najrzadszymi (podwójne rekombinanty) – gen, który „zamienił się miejscem”, jest w środku."],
  ["sprzezenia", "Interferencja – wzór", "K = obserwowane podwójne c/o / oczekiwane\nI = 1 − K"],

  ["chromatyna", "Stopnie upakowania DNA", "Helisa DNA → nukleosomy („koraliki na sznurku”) → pętle → chromatyda → chromosom metafazowy."],
  ["chromatyna", "Typy chromosomów wg położenia centromeru", "Metacentryczny, submetacentryczny, akrocentryczny, telocentryczny."],
  ["chromatyna", "Funkcje telomerów", "Ochrona przed degradacją i fuzją końców, kontrola liczby podziałów (limit Hayflicka), udział w rekombinacji i organizacji jądra."],

  ["kariotyp", "Etapy przygotowania kariotypu", "Hodowla limfocytów + mitogen → kolchicyna (metafaza) → roztwór hipotoniczny → utrwalenie → barwienie (prążki) → mikroskop i układanie par."],
  ["kariotyp", "Kiedy wykonuje się badanie kariotypu?", "Podejrzenie choroby genetycznej, niepowodzenia rozrodu, diagnostyka prenatalna (wiek matki > 37), nowotwory."],
  ["kariotyp", "Painter vs Tjio", "Painter (1922) – błędnie 2n = 48.\nTjio – poprawnie 2n = 46."],

  ["cykl", "Fazy cyklu komórkowego", "G1 → S → G2 → M (+ ewentualnie G0)."],
  ["cykl", "Fazy mitozy", "Profaza → (prometafaza) → metafaza → anafaza → telofaza."],

  ["mejoza", "Mitoza vs mejoza", "Mitoza: 2 komórki, identyczne, 2n → 2n.\nMejoza: 4 komórki, zróżnicowane, 2n → n."],
  ["plec", "Turner / Klinefelter / Down / Edwards / Patau", "45,X / 47,XXY / +21 / +18 / +13"],
  ["populacje", "Równanie Hardy'ego-Weinberga", "p + q = 1\np² + 2pq + q² = 1"],
  ["techniki", "Temperatury PCR", "Denaturacja ~95°C → przyłączanie starterów ~50–65°C → wydłużanie ~72°C."]
];
