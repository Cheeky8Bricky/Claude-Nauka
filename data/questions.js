// PYTANIA QUIZOWE
// Format (krótki, żeby łatwo dopisywać):
//   { t: "id_zagadnienia", s: "źródło", q: "treść pytania", a: [
//       ["POPRAWNA odpowiedź", "wyjaśnienie dlaczego tak"],
//       ["błędna odpowiedź",   "wyjaśnienie dlaczego nie"],
//       ...
//   ]}
// PIERWSZA odpowiedź na liście jest zawsze poprawna – aplikacja sama miesza kolejność.
// s: "W1"–"W4" = wykład, "U" = uzupełnienie z zakresu egzaminu (spoza slajdów).
window.QUESTIONS = [

// ═════════════ W1 – HISTORIA I POJĘCIA ═════════════
{ t: "historia", s: "W1", q: "Kto jako pierwszy użył terminu „genetyka” (1905)?", a: [
  ["William Bateson", "Brytyjczyk, gorący zwolennik Mendla. Publicznie nazwa padła na III Międzynarodowej Konferencji Genetyki w Londynie (1906)."],
  ["Wilhelm Johannsen", "Johannsen wprowadził słowo „gen” (1909) oraz pojęcia genotyp i fenotyp – ale nie „genetyka”."],
  ["Gregor Mendel", "Mendel nie znał tego słowa – zmarł w 1884 r., a termin powstał w 1905 r."],
  ["Thomas Hunt Morgan", "Morgan to twórca chromosomowej teorii dziedziczności, nie autor nazwy dziedziny."]
]},
{ t: "historia", s: "W1", q: "Kto wprowadził pojęcia: gen, genotyp i fenotyp?", a: [
  ["Wilhelm Johannsen", "Duński botanik. „Gen” jako najmniejsza jednostka informacji dziedzicznej – 1909 r."],
  ["William Bateson", "Bateson nadał nazwę „genetyka”, ale słowo „gen” wprowadził Johannsen."],
  ["August Weismann", "Weismann stworzył teorię plazmy zarodkowej."],
  ["Karol Darwin", "Darwin mówił o „gemmulach” (pangeneza), nie o genach."]
]},
{ t: "historia", s: "W1", q: "Co zakładała teoria pangenezy Darwina?", a: [
  ["Każda część ciała wytwarza gemmule, które zbierają się w komórkach rozrodczych", "Tak – i dlatego teoria dopuszczała dziedziczenie cech nabytych (zmienione ciało = zmienione gemmule)."],
  ["Komórki zarodkowe są oddzielone od somatycznych", "To teoria plazmy zarodkowej Weismanna – właśnie ona ODRZUCAŁA pangenezę."],
  ["W gamecie jest miniaturowy, gotowy człowieczek", "To teoria preformacji (homunkulus), XVII–XVIII w."],
  ["Cechy potomstwa są średnią cech rodziców", "To teoria dziedziczenia mieszanego."]
]},
{ t: "historia", s: "W1", q: "Teoria plazmy zarodkowej Weismanna:", a: [
  ["Oddzielała komórki zarodkowe od somatycznych i odrzucała dziedziczenie cech nabytych", "Zmiany w ciele (somie) nie przechodzą do komórek rozrodczych – krok w stronę nowoczesnej genetyki."],
  ["Potwierdzała dziedziczenie cech nabytych", "Odwrotnie – to Lamarck i (częściowo) Darwin je dopuszczali."],
  ["Zakładała, że cechy się mieszają", "To teoria dziedziczenia mieszanego, którą obaliły doświadczenia Mendla."],
  ["Opisywała budowę DNA", "Weismann działał pod koniec XIX w. – struktura DNA to rok 1953."]
]},
{ t: "historia", s: "W1", q: "Dlaczego obalono teorię dziedziczenia mieszanego?", a: [
  ["Nie wyjaśniała ponownego pojawiania się cech recesywnych w kolejnych pokoleniach", "Gdyby cechy się mieszały, „zmieszany” kolor nie mógłby się już rozdzielić. A u Mendla cecha recesywna wracała w F2 (3:1)."],
  ["Bo przewidywała zbyt dużą różnorodność", "Wręcz przeciwnie – przewidywała, że populacje z czasem staną się JEDNORODNE."],
  ["Bo odkryto DNA", "Obalono ją wcześniej – doświadczeniami Mendla (XIX w.), nie odkryciem DNA."],
  ["Bo dotyczyła tylko roślin", "Nie o to chodziło – po prostu przeczyła obserwacjom."]
]},
{ t: "historia", s: "W1", q: "Co z koncepcji Lamarcka „częściowo przetrwało” we współczesnej nauce?", a: [
  ["Epigenetyka – środowisko może zmieniać ekspresję genów bez zmiany sekwencji DNA", "To nie jest dziedziczenie cech nabytych w sensie Lamarcka, ale pokazuje subtelny wpływ środowiska na dziedziczenie."],
  ["Wydłużanie szyi żyrafy przez ćwiczenia", "To klasyczny przykład Lamarcka, który okazał się błędny – ćwiczenia nie zmieniają DNA gamet."],
  ["Dziedziczenie blizn i mięśni", "Zmiany w ciele (blizny, mięśnie, nauka) nie wpływają na DNA komórek rozrodczych."],
  ["Nic – teoria jest w całości bezwartościowa", "Wykład podkreśla, że „coś jednak z tej koncepcji pozostało” – epigenetyka."]
]},
{ t: "historia", s: "W1", q: "Czym różni się genom od genotypu?", a: [
  ["Genom to cały materiał genetyczny (podstawowy zestaw chromosomów), genotyp to układ alleli danego osobnika", "Genotyp zapisujemy np. AA, Aa, aa. Genom to „cała biblioteka” DNA komórki. Te pojęcia często się myli."],
  ["To synonimy", "Wykład wprost mówi, że genotyp często myli się z genomem – to nie to samo."],
  ["Genotyp to cechy widoczne, genom – niewidoczne", "Cechy widoczne to FENOTYP."],
  ["Genom dotyczy tylko bakterii", "Każdy organizm ma genom."]
]},
{ t: "historia", s: "W1", q: "Za co Hermann J. Muller dostał Nagrodę Nobla (1946)?", a: [
  ["Za odkrycie mutagennego działania promieniowania rentgenowskiego", "Pracował na Drosophila – pokazał, że promieniowanie X zwiększa częstość mutacji."],
  ["Za chromosomową teorię dziedziczności", "To Nobel Morgana (1933)."],
  ["Za metodę PCR", "To Kary Mullis (1993, chemia)."],
  ["Za rytm okołodobowy", "To Hall, Rosbash i Young (2017)."]
]},
{ t: "historia", s: "W1", q: "Co odkryła Barbara McClintock?", a: [
  ["Transpozony – ruchome elementy genetyczne", "Badała kukurydzę. Nobel w 1983 r., długo po odkryciu."],
  ["Strukturę podwójnej helisy", "To Watson i Crick (1953), na podstawie zdjęć Rosalind Franklin."],
  ["Metodę CRISPR-Cas9", "To Doudna i Charpentier (Nobel 2020)."],
  ["Metodę sekwencjonowania DNA", "To Frederick Sanger."]
]},
{ t: "historia", s: "W1", q: "Kto wprowadził pojęcia: mejoza, chromosom, kariotyp, haploidalna i diploidalna liczba chromosomów?", a: [
  ["Edward Strasburger", "Polsko-niemiecki botanik i cytolog; opisał też mitozę w komórkach roślinnych (1876)."],
  ["Wacław Mayzel", "Mayzel odkrył mitozę w komórkach ZWIERZĘCYCH (1873)."],
  ["Walther Flemming", "Flemming to twórca cytogenetyki – wprowadził pojęcia chromatyna i mitoza."],
  ["Theophilus Painter", "Painter liczył ludzkie chromosomy (błędnie: 48)."]
]},
{ t: "historia", s: "W1", q: "Projekt Poznania Genomu Człowieka (HGP):", a: [
  ["Zakończył się w 2003 r. i zidentyfikował ok. 20–25 tys. genów", "Start 1990, koszt ok. 3 mld $, zakończony wcześniej niż planowano."],
  ["Zakończył się w 1953 r.", "1953 to rok opisania struktury DNA."],
  ["Wykazał, że człowiek ma ok. 100 tys. genów", "Tyle zakładano przed projektem – okazało się, że jest ich znacznie mniej (20–25 tys.)."],
  ["Był prowadzony przez jedno laboratorium", "To było międzynarodowe konsorcjum (IHGSC) – ok. 20 ośrodków z 6 krajów."]
]},
{ t: "historia", s: "W1", q: "Fenotyp to:", a: [
  ["Zespół cech organizmu – wynik interakcji genotypu ze środowiskiem", "Obejmuje morfologię, fizjologię, biochemię, zachowanie itd. Ten sam genotyp może dać różne fenotypy (plastyczność fenotypowa)."],
  ["Zestaw alleli osobnika", "To genotyp."],
  ["Wyłącznie wygląd zewnętrzny", "Fenotyp to także cechy biochemiczne, fizjologiczne, płodność, zachowanie."],
  ["Cecha zależna tylko od genów", "Środowisko też wpływa na fenotyp."]
]},

// ═════════════ W2 – PRAWA MENDLA ═════════════
{ t: "mendel", s: "W2", q: "Jakiego organizmu modelowego używał Mendel?", a: [
  ["Grochu zwyczajnego (Pisum sativum)", "Wcześniej próbował myszy i pszczół, ale groch okazał się idealny."],
  ["Muszki owocowej (Drosophila melanogaster)", "Drosophila to organizm Morgana."],
  ["Lwiej paszczy", "Na lwiej paszczy pokazuje się dominację niepełną."],
  ["Kukurydzy", "Na kukurydzy pracowała Barbara McClintock."]
]},
{ t: "mendel", s: "W2", q: "Która cecha NIE była powodem, dla którego groch był dobrym modelem?", a: [
  ["Miał bardzo małą liczbę chromosomów widoczną gołym okiem", "Mendel w ogóle nie znał chromosomów – to nie miało znaczenia."],
  ["Krótki cykl życiowy", "To JEST zaleta – całe pokolenie w jednym sezonie."],
  ["Dużo nasion", "To JEST zaleta – duże liczby pozwoliły dostrzec proporcje matematyczne."],
  ["Samozapylenie i łatwe kontrolowane krzyżowanie", "To JEST zaleta – można było tworzyć czyste linie i dobierać pary."]
]},
{ t: "mendel", s: "W2", q: "Mendel skrzyżował czyste linie: nasiona okrągłe × pomarszczone. Całe F1 było okrągłe. Co z tego wynika?", a: [
  ["Allel „okrągły” dominuje, a cechy się nie mieszają", "Gdyby się mieszały, F1 byłoby „pośrednie”. Recesywna cecha jest zamaskowana, ale nie znika – wraca w F2."],
  ["Allel „pomarszczony” zniknął z populacji", "Nie zniknął – w F2 pojawił się znów w ok. 1/4 potomstwa."],
  ["Cecha jest sprzężona z płcią", "Krzyżówki wzajemne dały ten sam wynik – więc cecha NIE zależy od płci rodzica."],
  ["F1 to homozygoty", "F1 z krzyżówki AA × aa to zawsze heterozygoty Aa."]
]},
{ t: "mendel", s: "W2", q: "I prawo Mendla (czystości gamet) mówi, że:", a: [
  ["Każda gameta zawiera tylko jeden allel z danej pary", "Dwa allele rozdzielają się podczas tworzenia gamet – z równym prawdopodobieństwem."],
  ["Allele różnych genów dziedziczą się niezależnie", "To II prawo Mendla."],
  ["Gamety zawierają oba allele", "Wtedy po zapłodnieniu byłyby 4 allele – a organizm diploidalny ma 2."],
  ["Cecha dominująca zawsze jest częstsza w populacji", "Dominacja nie mówi nic o częstości – allel dominujący może być rzadki (np. pląsawica Huntingtona)."]
]},
{ t: "mendel", s: "W2", q: "Krzyżujesz Aa × Aa (pełna dominacja). Jaki jest stosunek FENOTYPÓW w potomstwie?", a: [
  ["3 : 1", "Genotypy 1 AA : 2 Aa : 1 aa → AA i Aa wyglądają tak samo, więc 3 dominujące : 1 recesywny."],
  ["1 : 2 : 1", "To stosunek GENOTYPÓW. Fenotypowo AA i Aa są nie do odróżnienia."],
  ["1 : 1", "Tak wychodzi w krzyżówce testowej Aa × aa."],
  ["9 : 3 : 3 : 1", "To dla dwóch genów (AaBb × AaBb)."]
]},
{ t: "mendel", s: "W2", q: "II prawo Mendla (niezależnej segregacji) dotyczy genów, które:", a: [
  ["Leżą na różnych chromosomach (lub bardzo daleko od siebie na jednym)", "Tylko wtedy allele różnych genów trafiają do gamet niezależnie."],
  ["Leżą blisko siebie na jednym chromosomie", "Takie geny są SPRZĘŻONE – łamią II prawo Mendla."],
  ["Są allelami tego samego genu", "Rozchodzenie się alleli jednego genu opisuje I prawo."],
  ["Leżą w mitochondriach", "Geny mitochondrialne dziedziczą się pozajądrowo (po matce)."]
]},
{ t: "mendel", s: "W2", q: "AaBb × AaBb (geny niezależne). Jaka część potomstwa ma genotyp AaBb?", a: [
  ["4/16 = 1/4", "Szansa Aa = 1/2, szansa Bb = 1/2 → 1/2 × 1/2 = 1/4. W szachownicy to 4 pola z 16."],
  ["1/16", "1/16 mają tylko homozygoty: AABB, AAbb, aaBB, aabb."],
  ["9/16", "9/16 to FENOTYP dominujący w obu cechach (A_B_), a nie jeden konkretny genotyp."],
  ["2/16", "2/16 mają genotypy heterozygotyczne tylko w jednym genie, np. AABb."]
]},
{ t: "mendel", s: "W2", q: "Roślinę o żółtych, gładkich nasionach skrzyżowano z aabb (zielone, pomarszczone). Potomstwo: 1 żółte gładkie : 1 żółte pomarszczone : 1 zielone gładkie : 1 zielone pomarszczone. Jaki był genotyp rośliny?", a: [
  ["AaBb", "Tylko podwójna heterozygota daje 4 typy gamet (AB, Ab, aB, ab) po 25% – stąd 1:1:1:1."],
  ["AABB", "AABB daje tylko gamety AB → 100% żółte gładkie."],
  ["AABb", "Dałaby tylko żółte: 1 gładkie : 1 pomarszczone."],
  ["AaBB", "Dałaby tylko gładkie: 1 żółte : 1 zielone."]
]},
{ t: "mendel", s: "W2", q: "Krzyżówka testowa polega na skrzyżowaniu badanego osobnika z:", a: [
  ["Homozygotą recesywną", "aa nie „przykrywa” niczego swoimi allelami, więc fenotyp potomstwa zdradza, jakie gamety dał badany osobnik."],
  ["Homozygotą dominującą", "AA zamaskowałaby wszystko – całe potomstwo miałoby fenotyp dominujący i nic byśmy się nie dowiedzieli."],
  ["Heterozygotą", "Wynik byłby trudniejszy do interpretacji – nie da się jednoznacznie odczytać gamet."],
  ["Osobnikiem z innego gatunku", "Krzyżówki międzygatunkowe zwykle nie dają płodnego potomstwa."]
]},
{ t: "mendel", s: "W2", q: "Kto w 1900 r. „odkrył na nowo” prace Mendla?", a: [
  ["Hugo de Vries, Carl Correns i Erich von Tschermak", "Trzej botanicy niezależnie od siebie potwierdzili wyniki Mendla."],
  ["Watson i Crick", "Oni działali w latach 50. XX w. (DNA)."],
  ["Sutton i Boveri", "Sutton i Boveri (1902–1903) zaproponowali chromosomową teorię dziedziczności."],
  ["Darwin i Lamarck", "Darwin nie znał prac Mendla, Lamarck zmarł przed ich publikacją."]
]},
{ t: "mendel", s: "W2", q: "Która choroba człowieka jest przykładem cechy jednogenowej?", a: [
  ["Mukowiscydoza", "Inne przykłady z wykładu: anemia sierpowata, fenyloketonuria, pląsawica Huntingtona. Znanych jest ponad 5 tys. chorób jednogenowych."],
  ["Wzrost", "Wzrost to cecha wielogenowa (ok. 400 genów wg wykładu)."],
  ["Kolor skóry", "Kolor skóry to cecha poligeniczna o rozkładzie ciągłym."],
  ["Zespół Downa", "To aberracja chromosomowa (trisomia 21), a nie choroba jednogenowa."]
]},
{ t: "mendel", s: "W2", q: "Dlaczego Mendel odniósł sukces tam, gdzie inni zawiedli?", a: [
  ["Formułował hipotezy, testował je krzyżówkami i liczył proporcje matematycznie", "Wcześniejsi badacze tylko OPISYWALI wyniki. Mendel liczył potomstwo (ok. 30 tys. roślin) i szukał wzorców."],
  ["Znał budowę chromosomów", "Chromosomy uwidoczniono dopiero w 1879 r., a ich związek z genami – na początku XX w."],
  ["Używał mikroskopu elektronowego", "Mikroskop elektronowy powstał w XX w."],
  ["Badał tylko jedną roślinę przez wiele lat", "Badał tysiące roślin – właśnie duża liczebność była kluczem."]
]},

// ═════════════ W2 – ODSTĘPSTWA ═════════════
{ t: "odstepstwa", s: "W2", q: "Czerwona lwia paszcza × biała daje różowe F1. To przykład:", a: [
  ["Dominacji niepełnej", "Heterozygota ma fenotyp POŚREDNI. Allele dalej dziedziczą się według Mendla."],
  ["Kodominacji", "W kodominacji oba allele ujawniają się w pełni naraz (np. grupa krwi AB), a nie „pomiędzy”."],
  ["Epistazy", "Epistaza to oddziaływanie DWÓCH RÓŻNYCH genów, a tu jest jeden gen."],
  ["Plejotropii", "Plejotropia to jeden gen → wiele cech."]
]},
{ t: "odstepstwa", s: "W2", q: "Samozapylasz różową lwią paszczę (CᴿCᵂ). Jaki będzie stosunek fenotypów?", a: [
  ["1 czerwona : 2 różowe : 1 biała", "Przy dominacji niepełnej każdy genotyp ma własny fenotyp – stosunek fenotypów = stosunek genotypów."],
  ["3 czerwone : 1 biała", "3:1 byłoby przy pełnej dominacji czerwonego."],
  ["Same różowe", "Allele się nie mieszają – w potomstwie wracają homozygoty czerwone i białe."],
  ["1 : 1", "To wynik krzyżówki heterozygoty z homozygotą."]
]},
{ t: "odstepstwa", s: "W2", q: "Grupa krwi AB to przykład:", a: [
  ["Kodominacji", "Allele IA i IB są równorzędne – heterozygota ma OBA antygeny jednocześnie."],
  ["Dominacji niepełnej", "Grupa AB to nie „mieszanka” – oba antygeny występują w pełni."],
  ["Naddominacji", "Naddominacja to przewaga heterozygoty nad obiema homozygotami (np. HbA/HbS a malaria)."],
  ["Epistazy", "IA i IB to allele jednego genu, a epistaza dotyczy różnych genów."]
]},
{ t: "odstepstwa", s: "W2", q: "Ojciec: grupa A (IAi), matka: grupa B (IBi). Jakie grupy krwi mogą mieć dzieci?", a: [
  ["A, B, AB i 0 – każda z szansą 1/4", "Gamety ojca: IA lub i; matki: IB lub i → IAIB (AB), IAi (A), IBi (B), ii (0)."],
  ["Tylko AB", "Byłoby tak tylko, gdyby rodzice byli homozygotami IAIA × IBIB."],
  ["Tylko A lub B", "Pomija możliwość, że oboje przekażą IA i IB (AB) albo oboje i (0)."],
  ["A, B, AB – ale nie 0", "Oboje rodzice mają allel i, więc dziecko ii (grupa 0) jest możliwe."]
]},
{ t: "odstepstwa", s: "W2", q: "Allele wielokrotne oznaczają, że:", a: [
  ["W populacji istnieje więcej niż 2 allele danego genu (ale osobnik diploidalny ma max 2)", "Np. grupy krwi (IA, IB, i) lub gen C barwy sierści królików (4 allele)."],
  ["Jeden osobnik ma więcej niż 2 allele genu", "Organizm diploidalny ma tylko 2 kopie każdego genu."],
  ["Jeden gen wpływa na wiele cech", "To plejotropia."],
  ["Wiele genów wpływa na jedną cechę", "To dziedziczenie wielogenowe (poligeniczne)."]
]},
{ t: "odstepstwa", s: "W2", q: "Krzyżówka dwóch żółtych myszy (AᵞA × AᵞA) daje żółte : agouti w stosunku 2 : 1. Dlaczego?", a: [
  ["Homozygoty AᵞAᵞ giną jako zarodki – allel jest recesywnym allelem letalnym", "Zarodki powstają w proporcji 1:2:1, ale AᵞAᵞ umierają przed urodzeniem → zostaje 2 Aᵞa : 1 AA."],
  ["Allel żółty jest recesywny", "Żółty dominuje nad agouti w kolorze sierści – heterozygoty są żółte."],
  ["Gamety Aᵞ nie powstają", "Gamety powstają normalnie – segregacja przebiega według Mendla."],
  ["To efekt sprzężenia z płcią", "Nic tu nie wskazuje na udział chromosomów płci."]
]},
{ t: "odstepstwa", s: "W2", q: "Heterozygoty HbA/HbS (anemia sierpowata) są bardziej odporne na malarię niż obie homozygoty. To przykład:", a: [
  ["Naddominacji", "Heterozygota przewyższa obie homozygoty pod względem przystosowania – na terenach malarycznych."],
  ["Kodominacji", "Choć na poziomie białka oba warianty hemoglobiny są obecne, przewaga przystosowawcza heterozygoty to naddominacja."],
  ["Plejotropii", "Plejotropia to wpływ jednego genu na wiele cech – nie o to pyta pytanie."],
  ["Epistazy", "Mamy tu jeden gen (hemoglobiny), nie interakcję dwóch genów."]
]},
{ t: "odstepstwa", s: "W2", q: "Zespół Marfana – jedna mutacja wpływa na wzrost, wzrok i serce. To:", a: [
  ["Plejotropia", "Jeden gen → wiele pozornie niezwiązanych cech. U Mendla: gen koloru kwiatów wpływał też na łupinę nasienną i pachwiny liści."],
  ["Epistaza", "Epistaza to jeden gen maskujący DRUGI gen."],
  ["Dziedziczenie poligeniczne", "To odwrotność – wiele genów → jedna cecha."],
  ["Niepełna penetracja", "Penetracja dotyczy tego, czy fenotyp w ogóle się ujawnia."]
]},
{ t: "odstepstwa", s: "W2", q: "Niektóre osoby z „chorobowym” genotypem w ogóle nie mają objawów. Jak nazywamy to zjawisko?", a: [
  ["Niepełna penetracja", "Nie wszyscy z danym genotypem wykazują odpowiadający fenotyp – wpływ tła genetycznego i środowiska."],
  ["Zmienna ekspresywność", "Ekspresywność dotyczy NASILENIA objawów (słabsza/mocniejsza wersja), a nie tego, czy w ogóle wystąpią."],
  ["Kodominacja", "Kodominacja dotyczy relacji dwóch alleli w heterozygocie."],
  ["Mutacja letalna", "Mutacja letalna powoduje śmierć, a nie brak objawów."]
]},
{ t: "odstepstwa", s: "W2", q: "Koty syjamskie mają ciemne uszy, łapy i ogon. Co o tym decyduje?", a: [
  ["Temperatura – enzym barwnika działa tylko w chłodniejszych częściach ciała", "Przykład wpływu środowiska na fenotyp: ten sam genotyp, różna ekspresja zależnie od temperatury."],
  ["Inny genotyp komórek w łapach", "Wszystkie komórki mają ten sam genotyp."],
  ["Sprzężenie z płcią", "Dotyczy to obu płci – to efekt temperatury."],
  ["Epistaza", "Tu nie ma drugiego genu maskującego – decyduje środowisko."]
]},

// ═════════════ W2 – EPISTAZA I POLIGENY ═════════════
{ t: "epistaza", s: "W2", q: "Na czym polega kluczowa różnica między epistazą a dominacją?", a: [
  ["Epistaza – interakcja genów z RÓŻNYCH loci; dominacja – interakcja alleli tego SAMEGO genu", "Analogia: dominacja to kłótnia dwóch wersji tego samego przepisu, epistaza – gdy jeden przepis (np. „nie włączaj piekarnika”) unieważnia drugi."],
  ["To to samo zjawisko", "Działają na innych poziomach – allele jednego genu vs różne geny."],
  ["Epistaza dotyczy tylko roślin", "Przykłady z wykładu: myszy, labradory, kurczęta."],
  ["Dominacja dotyczy różnych genów, epistaza – alleli", "Odwrotnie."]
]},
{ t: "epistaza", s: "W2", q: "Gen, który maskuje działanie innego genu, nazywamy:", a: [
  ["Epistatycznym", "Maskowany gen to gen hipostatyczny („hipo” = pod spodem)."],
  ["Hipostatycznym", "Hipostatyczny to ten MASKOWANY."],
  ["Plejotropowym", "Plejotropowy wpływa na wiele cech."],
  ["Recesywnym", "Recesywność dotyczy alleli tego samego genu."]
]},
{ t: "epistaza", s: "W2", q: "Myszy cc są albinosami niezależnie od genu A (agouti). Krzyżówka CcAa × CcAa daje stosunek:", a: [
  ["9 : 3 : 4 (epistaza recesywna)", "9 C_A_ agouti : 3 C_aa czarne : 4 cc albinosy (cc maskuje A, więc 3+1 klasy się łączą)."],
  ["9 : 7", "9:7 to epistaza komplementarna (podwójnie recesywna) – np. kukurydza."],
  ["12 : 3 : 1", "12:3:1 to epistaza dominująca – np. dynia."],
  ["9 : 3 : 3 : 1", "To wynik bez interakcji genów – tu cc łączy dwie klasy."]
]},
{ t: "epistaza", s: "W2", q: "Labradory: E_B_ czarne, E_bb brązowe, ee__ złote. Jaka część potomstwa EeBb × EeBb będzie złota?", a: [
  ["1/4 (4/16)", "Złote są wszystkie ee niezależnie od B. Szansa ee = 1/4. To epistaza recesywna 9:3:4."],
  ["1/16", "1/16 to tylko eebb – ale eeB_ też są złote."],
  ["3/16", "3/16 to brązowe (E_bb)."],
  ["9/16", "9/16 to czarne (E_B_)."]
]},
{ t: "epistaza", s: "W2", q: "Aby kolba kukurydzy była purpurowa, potrzebny jest co najmniej jeden allel dominujący z KAŻDEJ z dwóch par genów. Stosunek w F2:", a: [
  ["9 : 7", "Epistaza komplementarna (podwójnie recesywna): 9 A_B_ barwne : 7 (A_bb + aaB_ + aabb) bezbarwne. Analogia: dwa klucze do jednego sejfu."],
  ["15 : 1", "15:1 to sytuacja odwrotna – wystarczy JEDEN dominujący allel któregokolwiek genu."],
  ["9 : 3 : 4", "To epistaza recesywna jednego genu."],
  ["13 : 3", "To epistaza dominująco-recesywna (cebula)."]
]},
{ t: "epistaza", s: "W2", q: "U dyni allel W daje białe owoce niezależnie od genu Y (Y – żółte, yy – zielone). Stosunek w F2 WwYy × WwYy:", a: [
  ["12 białe : 3 żółte : 1 zielony", "Epistaza dominująca: 9 W_Y_ + 3 W_yy = 12 białych; 3 wwY_ żółte; 1 wwyy zielony."],
  ["9 : 3 : 4", "To epistaza recesywna."],
  ["9 : 7", "To epistaza komplementarna."],
  ["15 : 1", "To podwójna epistaza dominująca (tasznik)."]
]},
{ t: "epistaza", s: "W2", q: "Kształt owoców tasznika: wystarczy JEDEN allel dominujący któregokolwiek z dwóch genów, żeby był trójkątny. Stosunek:", a: [
  ["15 : 1", "Tylko aabb (1/16) ma owoce owalne. Reszta (15/16) – trójkątne. To podwójna epistaza dominująca (geny dublujące się)."],
  ["9 : 7", "9:7 to sytuacja, gdy potrzebne są OBA geny."],
  ["13 : 3", "To epistaza dominująco-recesywna."],
  ["3 : 1", "To jeden gen."]
]},
{ t: "epistaza", s: "W2", q: "Cebula: allel I hamuje barwę, a rr też daje białą cebulę. Barwne są tylko iiR_. Stosunek F2:", a: [
  ["13 białe : 3 barwne", "Barwne tylko iiR_ = 1/4 × 3/4 = 3/16. Reszta = 13/16 białych. Epistaza dominująco-recesywna."],
  ["12 : 3 : 1", "To epistaza dominująca (dynia)."],
  ["9 : 7", "To epistaza komplementarna."],
  ["15 : 1", "To podwójna epistaza dominująca."]
]},
{ t: "epistaza", s: "W2", q: "Co jest typowe dla dziedziczenia wielogenowego (poligenicznego, kumulatywnego)?", a: [
  ["Efekty alleli sumują się, a zmienność cechy jest ciągła (np. wzrost, kolor skóry)", "Im więcej alleli „dodających”, tym silniejszy efekt. Klasy fenotypów rozkładają się jak w trójkącie Pascala."],
  ["Cecha ma zawsze 2 wyraźne klasy fenotypowe", "To typowe dla cech jednogenowych z pełną dominacją."],
  ["Jeden gen wpływa na wiele cech", "To plejotropia."],
  ["Jeden gen maskuje drugi", "To epistaza."]
]},
{ t: "epistaza", s: "W2", q: "Co epistaza robi z liczbą klas fenotypowych w F2 dihybrydy?", a: [
  ["Zwykle ją zmniejsza – nie tworzy nowych fenotypów, tylko łączy istniejące", "Dlatego zamiast 4 klas (9:3:3:1) mamy np. 3 (9:3:4) albo 2 (9:7, 15:1, 13:3)."],
  ["Zwiększa – powstają nowe fenotypy", "Wykład podkreśla: w wyniku epistazy NIE powstają nowe fenotypy."],
  ["Nie zmienia jej", "Zmienia – stosunek odbiega od 9:3:3:1."],
  ["Zawsze daje dokładnie 1 klasę", "Zawsze zostają co najmniej 2 klasy."]
]},

// ═════════════ W3 – STATYSTYKA ═════════════
{ t: "statystyka", s: "W3", q: "AaBbCc × AaBbCc (geny niezależne). Jakie jest prawdopodobieństwo potomka aabbcc?", a: [
  ["1/64", "Reguła iloczynu: 1/4 × 1/4 × 1/4 = 1/64. Zdarzenia niezależne – mnożymy."],
  ["3/16", "To nie wynika z żadnej kombinacji tych trzech genów."],
  ["1/16", "1/16 to wynik dla DWÓCH genów (1/4 × 1/4)."],
  ["3/4", "Dodano prawdopodobieństwa zamiast je mnożyć – a tu mamy zdarzenia niezależne, więc iloczyn."]
]},
{ t: "statystyka", s: "W3", q: "Kiedy prawdopodobieństwa DODAJEMY?", a: [
  ["Gdy liczymy szansę jednego z kilku wzajemnie wykluczających się zdarzeń („albo–albo”)", "Np. trójka LUB czwórka na kostce: 1/6 + 1/6 = 1/3. Albo AA, albo Aa: 1/4 + 2/4 = 3/4."],
  ["Gdy zdarzenia są niezależne i mają zajść razem („i”)", "Wtedy MNOŻYMY (reguła iloczynu)."],
  ["Zawsze", "Mnożymy dla „i” (niezależne), dodajemy dla „lub” (wykluczające się)."],
  ["Nigdy w genetyce", "Reguła sumy jest używana ciągle, np. przy liczeniu fenotypu dominującego (AA lub Aa)."]
]},
{ t: "statystyka", s: "W3", q: "BbCc × BbCc. Jakie jest prawdopodobieństwo szczeniaka BbCc?", a: [
  ["1/4", "P(Bb) = 1/2 i P(Cc) = 1/2 → 1/2 × 1/2 = 1/4. Zamiast 16 pól wystarczą dwie małe szachownice."],
  ["1/16", "1/16 to szansa jednego konkretnego genotypu homozygotycznego, np. BBCC."],
  ["9/16", "To fenotyp B_C_, a nie genotyp BbCc."],
  ["1/2", "To szansa dla jednego genu (np. Bb)."]
]},
{ t: "statystyka", s: "W3", q: "Ile pól miałaby szachownica Punnetta dla AaBbCcDdEe × AaBbCcDdEe?", a: [
  ["1024", "Każdy rodzic daje 2⁵ = 32 typy gamet → 32 × 32 = 1024 pola. Dlatego przy wielu genach używamy rachunku prawdopodobieństwa."],
  ["32", "32 to liczba typów gamet JEDNEGO rodzica."],
  ["100", "Liczba pól to (2ⁿ)², a nie 10²."],
  ["64", "64 pola byłyby dla 3 genów (8 × 8)."]
]},
{ t: "statystyka", s: "W3", q: "Zaobserwowano 1850 pomarszczonych nasion na 7324. Prawdopodobieństwo 1850/7324 ≈ 0,253 to prawdopodobieństwo:", a: [
  ["Empiryczne", "Policzone z rzeczywistych obserwacji. Teoretyczne (z praw Mendla) wynosi 0,25 – świetna zgodność."],
  ["Teoretyczne", "Teoretyczne wyliczamy z praw/założeń (tu 1/4), a nie z policzonych nasion."],
  ["Warunkowe", "Nie ma tu żadnego warunku."],
  ["Bayesowskie", "To nie jest pojęcie z tego wykładu i nie pasuje do opisu."]
]},
{ t: "statystyka", s: "W3", q: "Co zakłada hipoteza zerowa (H₀) w teście χ²?", a: [
  ["Że nie ma istotnej rozbieżności między liczebnościami obserwowanymi a oczekiwanymi", "Np. H₀: „stosunek wynosi 3:1”. Różnice uznajemy za przypadkowe."],
  ["Że różnice są statystycznie istotne", "To hipoteza alternatywna H₁."],
  ["Że wszystkie wyniki są równe 0", "χ² = 0 oznacza idealną zgodność, ale H₀ tego nie zakłada."],
  ["Że eksperyment został źle wykonany", "H₀ nie mówi nic o jakości eksperymentu."]
]},
{ t: "statystyka", s: "W3", q: "Liczymy χ² dla kwiatów czerwonych, różowych i białych. Ile wynosi liczba stopni swobody?", a: [
  ["2", "df = N − 1 = 3 klasy − 1 = 2."],
  ["3", "To liczba klas, a df = liczba klas minus 1."],
  ["1", "df = 1 byłoby dla 2 klas (np. samce/samice)."],
  ["0", "df = 0 oznaczałoby brak możliwości testowania."]
]},
{ t: "statystyka", s: "W3", q: "Muszki: 58 samców i 42 samice. χ² = 2,56; wartość krytyczna (df = 1, α = 0,05) = 3,84. Wniosek?", a: [
  ["Nie ma podstaw do odrzucenia H₀ – wynik zgodny ze stosunkiem 1:1", "2,56 < 3,84, więc odchylenie mieści się w granicach przypadku. (Ściśle: nie odrzucamy H₀ – test nie DOWODZI, że jest prawdziwa.)"],
  ["Odrzucamy H₀ – stosunek nie wynosi 1:1", "Odrzucamy tylko, gdy χ² obliczone > krytyczne. Tu jest mniejsze."],
  ["Trzeba zmienić df na 2", "Mamy 2 klasy, więc df = 1 jest poprawne."],
  ["Test nie ma zastosowania", "Ma – to podręcznikowy przykład z wykładu."]
]},
{ t: "statystyka", s: "W3", q: "Dziwaczek: 275 czerwonych, 520 różowych, 205 białych (oczekiwane 1:2:1). χ² wynosi ok. 11,4; χ²kryt (df = 2, α = 0,05) = 5,99. Wniosek?", a: [
  ["Odrzucamy H₀ – wynik istotnie odbiega od 1:2:1", "Oczekiwane: 250/500/250. χ² = 625/250 + 400/500 + 2025/250 = 2,5 + 0,8 + 8,1 = 11,4 > 5,99."],
  ["Przyjmujemy H₀ – zgodność z 1:2:1", "χ² obliczone jest WIĘKSZE od krytycznego – to sygnał do odrzucenia H₀."],
  ["Wynik jest idealnie zgodny", "Idealna zgodność dałaby χ² = 0."],
  ["Należy użyć df = 3", "df = liczba klas − 1 = 2."]
]},
{ t: "statystyka", s: "W3", q: "Która cecha wartości χ² jest prawdziwa?", a: [
  ["Nigdy nie jest ujemna; im większa rozbieżność, tym większa wartość", "Wzór Σ (O − E)²/E – kwadrat zawsze jest ≥ 0. Idealna zgodność daje 0."],
  ["Może być ujemna, gdy obserwacji jest mniej niż oczekiwań", "Różnica jest podnoszona do kwadratu – znak znika."],
  ["Wynosi 1 przy idealnej zgodności", "Przy idealnej zgodności wynosi 0."],
  ["Liczy się ją z procentów, a nie liczebności", "Wykład podkreśla: χ² liczymy z liczb bezwzględnych (liczebności)."]
]},
{ t: "statystyka", s: "W3", q: "Dwoje heterozygotycznych rodziców (Aa × Aa). Jakie jest prawdopodobieństwo, że pierwsze dziecko będzie dziewczynką z genotypem aa?", a: [
  ["1/8", "P(aa) = 1/4, P(dziewczynka) = 1/2, zdarzenia niezależne → 1/4 × 1/2 = 1/8."],
  ["1/4", "To tylko szansa aa – pominięto płeć."],
  ["3/4", "To szansa fenotypu dominującego."],
  ["1/2", "To tylko szansa na dziewczynkę."]
]},

// ═════════════ W3 – SPRZĘŻENIA ═════════════
{ t: "sprzezenia", s: "W3", q: "Kto (1902–1903) zaproponował chromosomową teorię dziedziczenia?", a: [
  ["Walter Sutton i Theodor Boveri", "Niezależnie od siebie zauważyli, że zachowanie chromosomów w mejozie odpowiada prawom Mendla."],
  ["Thomas H. Morgan", "Morgan ją POTWIERDZIŁ doświadczalnie na Drosophila (ok. 1910)."],
  ["Gregor Mendel", "Mendel nie znał chromosomów."],
  ["Reginald Punnett", "Punnett stworzył szachownicę genetyczną."]
]},
{ t: "sprzezenia", s: "W3", q: "Jakie obserwacje doprowadziły Morgana do wniosku, że gen koloru oczu leży na chromosomie X?", a: [
  ["Mutacja (białe oczy) była inaczej dziedziczona przez samce i samice", "Wynik zależał od płci – a to wskazuje na chromosom płci."],
  ["Wszystkie muszki miały czerwone oczy", "Wtedy nie byłoby czego badać."],
  ["Kolor oczu zależał od temperatury", "To przykład wpływu środowiska – nie o to chodziło."],
  ["Zobaczył gen pod mikroskopem", "Genów nie widać pod mikroskopem świetlnym – wniosek wynikał z krzyżówek."]
]},
{ t: "sprzezenia", s: "W3", q: "W potomstwie krzyżówki testowej (500 osobników) jest 70 rekombinantów. Jaka jest odległość między genami?", a: [
  ["14 cM", "70/500 = 0,14 = 14%. 1% rekombinacji = 1 cM."],
  ["70 cM", "70 to liczba osobników, a nie procent."],
  ["7 cM", "Nie dzielimy wyniku przez 2."],
  ["86 cM", "86% to typy rodzicielskie (nierekombinowane)."]
]},
{ t: "sprzezenia", s: "W3", q: "Jaka jest maksymalna obserwowana częstość rekombinacji między dwoma genami?", a: [
  ["50%", "Geny na różnych chromosomach lub bardzo daleko od siebie – zachowują się jak niezależne (4 typy gamet po 25%)."],
  ["100%", "Nawet przy dalekich genach połowa wymian (np. podwójne c/o) przywraca układ rodzicielski."],
  ["25%", "Za mało – 25% to udział JEDNEGO typu gamet przy niezależności."],
  ["0%", "To minimum – sprzężenie całkowite."]
]},
{ t: "sprzezenia", s: "W3", q: "Ile grup sprzężeń ma człowiek według wykładu?", a: [
  ["24 (22 autosomy + X + Y)", "Liczba grup sprzężeń = haploidalna liczba autosomów + chromosomy płci (dla płci heterogametycznej)."],
  ["23", "23 to liczba par chromosomów – ale X i Y to różne grupy sprzężeń."],
  ["46", "46 to diploidalna liczba chromosomów – homologi należą do tej samej grupy."],
  ["22", "Pominięto chromosomy płci."]
]},
{ t: "sprzezenia", s: "W3", q: "Ile grup sprzężeń ma Drosophila melanogaster (2n = 8)?", a: [
  ["5", "3 pary autosomów + X + Y = 5."],
  ["4", "4 to liczba par chromosomów – ale X i Y liczymy osobno."],
  ["8", "8 to 2n."],
  ["3", "Pominięto chromosomy płci."]
]},
{ t: "sprzezenia", s: "W3", q: "Sprzężenie całkowite oznacza, że:", a: [
  ["Między genami nie zachodzi crossing-over – powstają tylko gamety rodzicielskie", "Brak rekombinacji. Sprzężenie częściowe = zachodzi c/o i pojawiają się rekombinanty."],
  ["Geny leżą na różnych chromosomach", "Wtedy są NIESPRZĘŻONE."],
  ["Rekombinantów jest 50%", "50% to geny niezależne."],
  ["Wszystkie gamety są rekombinantami", "To niemożliwe."]
]},
{ t: "sprzezenia", s: "W3", q: "W krzyżówce trzypunktowej, jak ustalić, który gen leży w ŚRODKU?", a: [
  ["Porównać typy rodzicielskie (najliczniejsze) z podwójnymi rekombinantami (najrzadszymi) – zmieniony gen jest środkowy", "Podwójny crossing-over „wymienia” tylko środkowy gen względem układu rodzicielskiego."],
  ["Wybrać gen z najdłuższą nazwą", "Kolejność ustala się z danych, nie z nazw."],
  ["Porównać pojedyncze rekombinanty między sobą", "To służy do liczenia odległości, nie do ustalania środka."],
  ["Krzyżówka trzypunktowa nie pozwala ustalić kolejności", "Właśnie po to się ją robi – dwupunktowa mówi tylko, czy geny są sprzężone."]
]},
{ t: "sprzezenia", s: "W3", q: "Współczynnik koincydencji K < 1 (interferencja I > 0) oznacza:", a: [
  ["Interferencję pozytywną – pierwszy crossing-over zmniejsza szansę drugiego w pobliżu", "Obserwujemy mniej podwójnych rekombinantów niż oczekiwano. I = 1 − K."],
  ["Interferencję negatywną", "Negatywna to K > 1, I < 0 – pierwszy c/o zwiększa szansę drugiego."],
  ["Brak sprzężenia", "Interferencja dotyczy podwójnych c/o, nie samego sprzężenia."],
  ["Że geny leżą na różnych chromosomach", "Interferencja dotyczy genów na tym samym chromosomie."]
]},
{ t: "sprzezenia", s: "W3", q: "W jakich jednostkach wyraża się odległości na mapie FIZYCZNEJ chromosomu?", a: [
  ["W parach zasad (pz)", "Najdokładniejsza mapa fizyczna to po prostu sekwencja DNA. Mapa GENETYCZNA używa centymorganów."],
  ["W centymorganach", "cM to jednostka mapy GENETYCZNEJ (oparta na częstości rekombinacji)."],
  ["W procentach mutacji", "Nie ma takiej jednostki mapowej."],
  ["W mikrometrach", "Mapy fizyczne nie mierzą długości w µm, tylko w pz."]
]},

// ═════════════ W4 – CHROMATYNA ═════════════
{ t: "chromatyna", s: "W4", q: "Dlaczego DNA tak dobrze wiąże się z histonami?", a: [
  ["Histony są dodatnio naładowane, a DNA – ujemnie (reszty fosforanowe)", "Przyciąganie elektrostatyczne – DNA owija się wokół histonów jak nić wokół szpulki."],
  ["Histony są ujemnie naładowane jak DNA", "Ładunki jednoimienne by się odpychały."],
  ["Histony są zbudowane z DNA", "Histony to białka."],
  ["DNA wiąże się kowalencyjnie z histonami", "To oddziaływania niekowalencyjne – dlatego chromatyna może się rozluźniać."]
]},
{ t: "chromatyna", s: "W4", q: "Nukleosom to:", a: [
  ["Ok. 146 pz DNA nawinięte na oktamer histonowy (po 2× H2A, H2B, H3, H4)", "Między nukleosomami jest DNA łącznikowy (~50 pz). Analogia: koraliki na sznurku."],
  ["Organellum produkujące nukleotydy", "Nie ma takiego organellum."],
  ["Pojedynczy nukleotyd", "Nukleotyd to cegiełka DNA, nukleosom jest dużo większy."],
  ["Przewężenie chromosomu", "To centromer."]
]},
{ t: "chromatyna", s: "W4", q: "Euchromatyna to chromatyna:", a: [
  ["Luźna, aktywna transkrypcyjnie", "W prążkach G barwi się słabo (jasne prążki). Analogia: otwarta książka, którą da się czytać."],
  ["Silnie skondensowana i nieaktywna", "To heterochromatyna."],
  ["Występująca tylko w mitochondriach", "Euchromatyna to część chromatyny jądrowej."],
  ["Zbudowana wyłącznie z RNA", "Chromatyna to głównie DNA + histony."]
]},
{ t: "chromatyna", s: "W4", q: "Co sprzyja tworzeniu heterochromatyny?", a: [
  ["Niska acetylacja histonów, wysoka metylacja DNA i metylacja lizyny 9 histonu H3 (białko HP1)", "HP1 swoją chromodomeną wiąże zmetylowane histony i „zagęszcza” chromatynę."],
  ["Wysoka acetylacja histonów", "Acetylacja ROZLUŹNIA chromatynę (sprzyja euchromatynie)."],
  ["Brak histonów", "Bez histonów nie ma chromatyny."],
  ["Intensywna transkrypcja", "Heterochromatyna jest właśnie mało aktywna transkrypcyjnie."]
]},
{ t: "chromatyna", s: "W4", q: "Czym różni się heterochromatyna konstytutywna od fakultatywnej?", a: [
  ["Konstytutywna jest trwale nieaktywna we wszystkich komórkach; fakultatywna – odwracalnie, zależnie od typu komórki/etapu rozwoju", "Konstytutywna leży głównie wokół centromerów i telomerów. Przykład fakultatywnej: ciałko Barra."],
  ["Konstytutywna jest aktywna, fakultatywna – nie", "Obie są heterochromatyną, czyli zwykle nieaktywne."],
  ["Fakultatywna występuje tylko u bakterii", "Bakterie nie mają heterochromatyny w tym sensie."],
  ["Niczym", "Różnią się trwałością i rozmieszczeniem."]
]},
{ t: "chromatyna", s: "W4", q: "Chromosom, którego centromer leży blisko końca, to chromosom:", a: [
  ["Akrocentryczny", "U człowieka np. chromosomy 13, 14, 15, 21, 22 – na ich krótkich ramionach leżą NOR-y."],
  ["Metacentryczny", "Metacentryczny ma centromer pośrodku."],
  ["Submetacentryczny", "Submetacentryczny – centromer dzieli na nierówne ramiona, ale nie przy samym końcu."],
  ["Telocentryczny", "Telocentryczny – centromer na SAMYM końcu (u człowieka nie występują)."]
]},
{ t: "chromatyna", s: "W4", q: "Jaka sekwencja powtarza się w telomerach człowieka?", a: [
  ["TTAGGG", "Setki–tysiące powtórzeń. Tworzą pętle T i D stabilizowane kompleksem shelterin."],
  ["AUG", "AUG to kodon START w mRNA."],
  ["TATA", "TATA to element promotora (TATA box)."],
  ["GAATTC", "To miejsce cięcia enzymu restrykcyjnego EcoRI."]
]},
{ t: "chromatyna", s: "W4", q: "Dlaczego telomery skracają się przy każdym podziale (o ok. 50–150 pz)?", a: [
  ["Z powodu problemu replikacji końców nici opóźnionej", "Polimeraza nie umie dokończyć samego końca nici opóźnionej. Telomery liczą więc podziały – limit Hayflicka."],
  ["Bo są celowo wycinane przez enzymy restrykcyjne", "Enzymy restrykcyjne to narzędzia bakterii/laboratorium, nie mechanizm skracania telomerów."],
  ["Bo zachodzi na nich crossing-over", "Skracanie wynika z replikacji, nie rekombinacji."],
  ["Nie skracają się", "Skracają się – stąd limit Hayflicka."]
]},
{ t: "chromatyna", s: "W4", q: "Chromosomy politeniczne:", a: [
  ["Powstają przez wielokrotne endomitozy bez podziału komórki – np. ślinianki muchówek", "Są ok. 100× większe od zwykłych. Analogia: wiele kopii tej samej nitki ułożonych równolegle w gruby kabel."],
  ["Występują w oocytach płazów i tworzą boczne pętle", "To chromosomy szczoteczkowe (nie u ssaków)."],
  ["To chromosomy bakteryjne", "Bakterie mają koliste chromosomy w nukleoidzie."],
  ["Powstają w mejozie", "Powstają przez endoreplikację w komórkach somatycznych."]
]},
{ t: "chromatyna", s: "W4", q: "Z ilu cząsteczek DNA składa się chromosom metafazowy?", a: [
  ["Z dwóch – po jednej w każdej chromatydzie", "Liczba cząsteczek DNA = liczba chromatyd. Replikacja w fazie S podwoiła DNA."],
  ["Z jednej", "Jedna cząsteczka DNA to chromosom jednochromatydowy (np. po anafazie)."],
  ["Z czterech", "Cztery chromatydy ma biwalent (para homologów w mejozie)."],
  ["Z 46", "46 to liczba chromosomów w komórce człowieka."]
]},
{ t: "chromatyna", s: "W4", q: "NOR (organizator jąderka) zawiera:", a: [
  ["Tandemowo powtarzające się geny rRNA", "Wokół nich w interfazie tworzy się jąderko. U człowieka 10 NOR-ów na krótkich ramionach chromosomów akrocentrycznych."],
  ["Geny histonów", "Geny histonów nie tworzą NOR."],
  ["Sekwencje telomerowe", "Telomery to TTAGGG na końcach chromosomów."],
  ["Białka wrzeciona", "Wrzeciono budują mikrotubule."]
]},
{ t: "chromatyna", s: "W4", q: "Jak nazywa się obszar komórki bakteryjnej, w którym znajduje się jej DNA?", a: [
  ["Nukleoid", "Działa podobnie do jądra, ale NIE jest otoczony błoną. Chromosom bakterii jest zwykle kolisty."],
  ["Jądro komórkowe", "Bakterie (prokarionty) nie mają jądra."],
  ["Nukleosom", "Nukleosom to struktura chromatyny eukariotów."],
  ["Jąderko", "Jąderko jest w jądrze eukariotów."]
]},

// ═════════════ W4 – KARIOTYP ═════════════
{ t: "kariotyp", s: "W4", q: "Czym jest kariogram?", a: [
  ["Uporządkowanym kariotypem – chromosomy ułożone w pary homologiczne, na końcu chromosomy płci", "Kariotyp = zestaw chromosomów; kariogram = ich uporządkowanie; idiogram = graficzny schemat."],
  ["Schematycznym rysunkiem chromosomów", "To idiogram."],
  ["Zestawem genów organizmu", "To genotyp/genom."],
  ["Wykresem cyklu komórkowego", "Nie ma to związku z cyklem."]
]},
{ t: "kariotyp", s: "W4", q: "Po co do hodowli komórek dodaje się kolchicynę przy kariotypowaniu?", a: [
  ["Blokuje podział w metafazie (hamuje tworzenie wrzeciona)", "W metafazie chromosomy są najbardziej skondensowane i najlepiej widoczne."],
  ["Wybarwia chromosomy", "Barwienie to osobny etap (np. Giemza)."],
  ["Powoduje pęcznienie komórek", "Do tego służy roztwór hipotoniczny."],
  ["Pobudza mitozy", "Mitozy pobudza się innymi substancjami (mitogenami); kolchicyna je ZATRZYMUJE."]
]},
{ t: "kariotyp", s: "W4", q: "Do czego służy roztwór hipotoniczny przy przygotowaniu kariotypu?", a: [
  ["Woda napływa do komórek, które pęcznieją, więc chromosomy się rozsuwają", "Dzięki temu chromosomy nie nachodzą na siebie i łatwiej je policzyć."],
  ["Zabija bakterie w próbce", "To nie jest jego cel."],
  ["Utrwala chromosomy", "Utrwalanie to osobny etap."],
  ["Zatrzymuje komórki w metafazie", "To robi kolchicyna."]
]},
{ t: "kariotyp", s: "W4", q: "Prążki G uzyskuje się przez:", a: [
  ["Trawienie trypsyną i barwienie barwnikiem Giemzy", "Ciemne prążki = bardziej upakowana heterochromatyna, jasne = euchromatyna."],
  ["Denaturację cieplną", "To prążki R."],
  ["Barwniki fluorescencyjne", "To prążki Q."],
  ["Uwidocznienie heterochromatyny konstytutywnej", "To prążki C."]
]},
{ t: "kariotyp", s: "W4", q: "Kto skorygował liczbę chromosomów człowieka na 2n = 46?", a: [
  ["Joe Hin Tjio (z Albertem Levanem)", "Wcześniej Theophilus Painter (1922) błędnie doliczył się 48."],
  ["Theophilus Painter", "Painter podał błędną liczbę 48."],
  ["Thomas H. Morgan", "Morgan pracował na Drosophila."],
  ["Walther Flemming", "Flemming jako pierwszy uwidocznił chromosomy w mitozie (1879), ale ich nie policzył poprawnie u człowieka."]
]},
{ t: "kariotyp", s: "W4", q: "Kariotyp 47,XX,+21 oznacza:", a: [
  ["Zespół Downa u dziewczynki (trisomia 21)", "~95% przypadków to trisomia wolna z nondysjunkcji; 88% z nich pochodzi z oogenezy."],
  ["Zespół Edwardsa", "Zespół Edwardsa to trisomia 18."],
  ["Zespół Turnera", "Turner to 45,X."],
  ["Prawidłowy kariotyp kobiety", "Prawidłowy to 46,XX."]
]},
{ t: "kariotyp", s: "W4", q: "Zespół Edwardsa to:", a: [
  ["Trisomia 18", "Ok. 1:8000 urodzeń, ~95% płodów ulega poronieniu, częściej u dziewczynek."],
  ["Trisomia 21", "To zespół Downa."],
  ["Trisomia 13", "To zespół Patau."],
  ["Monosomia X", "To zespół Turnera."]
]},
{ t: "kariotyp", s: "W4", q: "Która technika pozwala badać chromosomy także w jądrach INTERFAZOWYCH?", a: [
  ["FISH (fluorescencyjna hybrydyzacja in situ)", "Sondy świecą w miejscu danej sekwencji – nie trzeba metafazy. Stosowana w diagnostyce prenatalnej i preimplantacyjnej."],
  ["Klasyczne prążki G", "Prążki wymagają chromosomów metafazowych."],
  ["Mikroskop świetlny bez barwienia", "Bez barwienia w interfazie chromosomów nie odróżnimy."],
  ["Kolchicyna", "Kolchicyna zatrzymuje w metafazie – to przeciwieństwo."]
]},
{ t: "kariotyp", s: "W4", q: "Do czego służy metoda CGH (porównawcza hybrydyzacja genomowa)?", a: [
  ["Wykrywa nadmiar lub brak materiału genetycznego (głównie w cytogenetyce onkologicznej)", "Porównuje DNA badane z referencyjnym – pokazuje, gdzie czegoś jest za dużo lub za mało."],
  ["Do namnażania DNA", "To PCR."],
  ["Do odczytu sekwencji nukleotydów", "To sekwencjonowanie."],
  ["Do zatrzymania podziałów", "To kolchicyna."]
]},
{ t: "kariotyp", s: "W4", q: "Z jakich komórek najczęściej wykonuje się kariotyp człowieka?", a: [
  ["Z limfocytów krwi obwodowej", "Można je łatwo pobrać i pobudzić do podziałów. Inne źródła: szpik kostny, skóra (fibroblasty)."],
  ["Z erytrocytów", "Dojrzałe erytrocyty ssaków nie mają jądra – nie mają chromosomów."],
  ["Z neuronów", "Neurony nie dzielą się (faza G0)."],
  ["Z płytek krwi", "Płytki nie mają jądra."]
]},

// ═════════════ W4 – CYKL KOMÓRKOWY ═════════════
{ t: "cykl", s: "W4", q: "W której fazie cyklu komórkowego zachodzi replikacja DNA?", a: [
  ["S", "S = synteza DNA. Ilość DNA się podwaja."],
  ["G1", "W G1 komórka rośnie, syntetyzuje białka i RNA, buduje organella."],
  ["G2", "W G2 komórka przygotowuje się do podziału (np. białka wrzeciona, podwojenie centrioli)."],
  ["M", "W fazie M zachodzi podział, nie replikacja."]
]},
{ t: "cykl", s: "W4", q: "Faza G0 to:", a: [
  ["Stan spoczynku – komórka wyszła z cyklu i nie przygotowuje się do podziału", "Np. neurony. Niektóre komórki mogą wrócić do cyklu po otrzymaniu sygnału."],
  ["Faza replikacji DNA", "To faza S."],
  ["Pierwsza faza mitozy", "Pierwsza faza mitozy to profaza."],
  ["Faza śmierci komórki", "Komórka w G0 normalnie pracuje – nie umiera."]
]},
{ t: "cykl", s: "W4", q: "Prawidłowa kolejność faz mitozy to:", a: [
  ["Profaza → metafaza → anafaza → telofaza", "Czasem wyróżnia się też prometafazę (między profazą a metafazą). Ściąga: „PMAT”."],
  ["Metafaza → profaza → anafaza → telofaza", "Profaza zawsze jest pierwsza – chromosomy muszą się najpierw skondensować."],
  ["Profaza → anafaza → metafaza → telofaza", "Chromosomy muszą się ustawić (metafaza), zanim się rozejdą (anafaza)."],
  ["G1 → S → G2 → M", "To fazy CYKLU komórkowego, nie mitozy."]
]},
{ t: "cykl", s: "W4", q: "Co dzieje się w anafazie mitozy?", a: [
  ["Chromatydy siostrzane rozdzielają się i wędrują do przeciwnych biegunów", "Białkowy „klej” (kohezyna) przestaje działać, każda chromatyda staje się osobnym chromosomem."],
  ["Chromosomy ustawiają się w płytce metafazowej", "To metafaza."],
  ["Odtwarza się błona jądrowa", "To telofaza."],
  ["Rozchodzą się chromosomy homologiczne", "Tak jest w anafazie I MEJOZY, nie mitozy."]
]},
{ t: "cykl", s: "W4", q: "Kinetochor to:", a: [
  ["Białkowa płytka na centromerze, do której przyczepiają się mikrotubule wrzeciona", "Każda chromatyda ma swój kinetochor."],
  ["Inaczej centriola", "Centriole tworzą centrosom – biegun wrzeciona."],
  ["Koniec chromosomu", "Koniec chromosomu to telomer."],
  ["Organellum produkujące rybosomy", "Rybosomy powstają w jąderku."]
]},
{ t: "cykl", s: "W4", q: "Czym jest punkt kontrolny wrzeciona podziałowego?", a: [
  ["Sprawdzeniem przed anafazą, czy wszystkie chromosomy są w płytce i mają poprawnie przyłączone mikrotubule", "Chroni przed nierównym rozdziałem chromosomów (aneuploidią)."],
  ["Momentem replikacji DNA", "Replikacja zachodzi w fazie S."],
  ["Miejscem na chromosomie", "To etap kontroli, a nie struktura."],
  ["Etapem cytokinezy", "Kontrola wrzeciona zachodzi przed anafazą."]
]},
{ t: "cykl", s: "W4", q: "Czym różni się cytokineza roślin od cytokinezy zwierząt?", a: [
  ["U roślin powstaje nowa ściana dzięki fragmoplastowi; u zwierząt komórka przewęża się pierścieniem aktyna–miozyna", "Rośliny mają sztywną ścianę – nie mogą się „przewęzić”, więc budują przegrodę od środka."],
  ["U roślin nie ma cytokinezy", "Jest – inaczej by się nie podzieliły."],
  ["U zwierząt powstaje ściana komórkowa", "Komórki zwierzęce nie mają ściany komórkowej."],
  ["Nie ma różnic", "Mechanizmy są zupełnie inne."]
]},
{ t: "cykl", s: "W4", q: "Co się dzieje w telofazie?", a: [
  ["Odtwarzają się błony jądrowe i jąderka, chromosomy dekondensują", "To „odwrócona profaza” – komórka wraca do formy interfazowej."],
  ["Chromosomy kondensują i zanika jąderko", "To profaza."],
  ["Chromatydy siostrzane się rozdzielają", "To anafaza."],
  ["Zachodzi replikacja", "To faza S."]
]},
{ t: "cykl", s: "W4", q: "Co powstaje w mitozie komórki HAPLOIDALNEJ?", a: [
  ["Dwie komórki haploidalne", "Mitoza zachowuje liczbę chromosomów: n → n, 2n → 2n."],
  ["Dwie komórki diploidalne", "Mitoza nie podwaja liczby chromosomów w komórkach potomnych."],
  ["Cztery komórki", "Cztery komórki powstają w mejozie."],
  ["Mitoza w komórce haploidalnej jest niemożliwa", "Jest możliwa – np. u roślin w pokoleniu haploidalnym."]
]},
{ t: "cykl", s: "W4", q: "Ile w przybliżeniu trwa cykl typowej komórki człowieka?", a: [
  ["Ok. 24 godzin", "Szybko dzielące się komórki (np. jelita w hodowli) – 9–10 h; zarodki Drosophila – nawet ok. 8 minut."],
  ["Ok. 8 minut", "Tak szybko dzielą się komórki we wczesnych zarodkach Drosophila."],
  ["Ok. roku", "Tyle może trwać przerwa między mitozami niektórych komórek, ale to nie typowy cykl."],
  ["Ok. 1 sekundy", "Nawet bakterie nie dzielą się tak szybko."]
]},

// ═════════════ UZUPEŁNIENIE – STRUKTURA DNA ═════════════
{ t: "dna", s: "U", q: "Ile wiązań wodorowych tworzy para G–C?", a: [
  ["3", "Dlatego DNA bogate w GC jest stabilniejsze (wyższa temperatura topnienia)."],
  ["2", "2 wiązania tworzy para A–T."],
  ["1", "Żadna para komplementarna nie tworzy jednego wiązania."],
  ["4", "Maksimum w parach kanonicznych to 3."]
]},
{ t: "dna", s: "U", q: "W dwuniciowym DNA jest 30% adeniny. Ile procent stanowi guanina?", a: [
  ["20%", "Reguła Chargaffa: A = T → A + T = 60%. Zostaje 40% na G + C, a G = C → G = 20%."],
  ["30%", "30% to tymina (paruje się z A)."],
  ["40%", "40% to G i C razem."],
  ["70%", "Od 100% odjęto tylko A, zapominając o T."]
]},
{ t: "dna", s: "U", q: "Co udowodnili Meselson i Stahl (1958)?", a: [
  ["Że replikacja DNA jest semikonserwatywna", "Każda nowa cząsteczka = 1 nić stara + 1 nowa. Użyli izotopów ¹⁵N/¹⁴N i wirowania w gradiencie CsCl."],
  ["Że DNA jest materiałem genetycznym", "To wykazali Avery, MacLeod i McCarty (1944) oraz Hershey i Chase (1952)."],
  ["Że DNA ma kształt podwójnej helisy", "To Watson i Crick (1953)."],
  ["Że kod genetyczny jest trójkowy", "To Crick, Brenner i in. (1961)."]
]},
{ t: "dna", s: "U", q: "Dlaczego na nici opóźnionej powstają fragmenty Okazaki?", a: [
  ["Polimeraza DNA dobudowuje nukleotydy tylko w kierunku 5'→3', a nici są antyrównoległe", "Na jednej nici synteza idzie ciągle (wiodąca), na drugiej – „na raty”, krótkimi odcinkami."],
  ["Bo DNA jest uszkodzone", "To normalna część replikacji, nie efekt uszkodzeń."],
  ["Bo polimeraza działa w kierunku 3'→5'", "Odwrotnie – polimeraza syntetyzuje 5'→3'."],
  ["Bo helikaza tnie DNA", "Helikaza rozplata, a nie tnie DNA."]
]},
{ t: "dna", s: "U", q: "Czym DNA różni się od RNA?", a: [
  ["DNA ma deoksyrybozę i tyminę; RNA ma rybozę i uracyl (zwykle jest jednoniciowy)", "Reszta zasad (A, G, C) jest wspólna."],
  ["DNA ma uracyl, RNA – tyminę", "Odwrotnie."],
  ["DNA nie ma reszt fosforanowych", "Oba kwasy mają szkielet cukrowo-fosforanowy."],
  ["Niczym – to różne nazwy tego samego", "To różne cząsteczki o różnych funkcjach."]
]},
{ t: "dna", s: "U", q: "Które zasady to puryny?", a: [
  ["Adenina i guanina", "Puryny mają 2 pierścienie. Ściąga: „PURe As Gold” – puryny = A, G."],
  ["Cytozyna i tymina", "To pirymidyny (1 pierścień), podobnie jak uracyl."],
  ["Adenina i tymina", "Tymina to pirymidyna."],
  ["Guanina i uracyl", "Uracyl to pirymidyna."]
]},

// ═════════════ UZUPEŁNIENIE – EKSPRESJA ═════════════
{ t: "ekspresja", s: "U", q: "Dlaczego mówimy, że kod genetyczny jest zdegenerowany?", a: [
  ["Bo jeden aminokwas może być kodowany przez kilka kodonów", "64 kodony → 20 aminokwasów + STOP. Np. leucynę koduje aż 6 kodonów."],
  ["Bo jeden kodon koduje kilka aminokwasów", "Wtedy kod byłby niejednoznaczny – a jest jednoznaczny."],
  ["Bo ulega rozpadowi w komórce", "„Zdegenerowany” to termin matematyczny (nadmiarowy), nie „zepsuty”."],
  ["Bo różni się u każdego gatunku", "Kod jest niemal uniwersalny."]
]},
{ t: "ekspresja", s: "U", q: "Który kodon jest kodonem START?", a: [
  ["AUG", "Koduje metioninę i wyznacza początek ramki odczytu."],
  ["UAA", "UAA to kodon STOP."],
  ["UGA", "UGA to kodon STOP."],
  ["TAA", "W mRNA nie ma tyminy; zresztą UAA to STOP."]
]},
{ t: "ekspresja", s: "U", q: "Ile kodonów STOP jest w standardowym kodzie genetycznym?", a: [
  ["3 (UAA, UAG, UGA)", "Pozostałe 61 kodonów koduje aminokwasy."],
  ["1", "Jest ich trzy."],
  ["4", "Jest ich trzy."],
  ["64", "64 to liczba wszystkich kodonów."]
]},
{ t: "ekspresja", s: "U", q: "Gdzie u eukariotów zachodzi transkrypcja?", a: [
  ["W jądrze komórkowym", "Powstaje pre-mRNA, które jest obrabiane (splicing, czapeczka, ogon poli-A) i eksportowane do cytoplazmy."],
  ["Na rybosomach w cytoplazmie", "Na rybosomach zachodzi translacja."],
  ["W aparacie Golgiego", "Aparat Golgiego modyfikuje białka, nie przepisuje DNA."],
  ["W lizosomach", "Lizosomy trawią materiały komórkowe."]
]},
{ t: "ekspresja", s: "U", q: "Co usuwa splicing (składanie RNA)?", a: [
  ["Introny", "Eksony (kodujące) zostają i są łączone. Analogia: wycinanie reklam z filmu."],
  ["Eksony", "Eksony zostają – to one niosą informację o białku."],
  ["Czapeczkę 5'", "Czapeczkę się DODAJE, nie usuwa."],
  ["Kodon START", "Kodon START jest niezbędny do translacji."]
]},
{ t: "ekspresja", s: "U", q: "Centralny dogmat biologii molekularnej opisuje przepływ informacji:", a: [
  ["DNA → RNA → białko", "Transkrypcja (DNA→RNA), potem translacja (RNA→białko). Wyjątek: odwrotna transkrypcja u retrowirusów."],
  ["Białko → RNA → DNA", "Białka nie służą jako matryca do syntezy kwasów nukleinowych."],
  ["RNA → DNA → białko", "Tak działa tylko odwrotna transkrypcja (retrowirusy), a nie dogmat."],
  ["DNA → białko → RNA", "RNA jest pośrednikiem PRZED białkiem."]
]},

// ═════════════ UZUPEŁNIENIE – MUTACJE ═════════════
{ t: "mutacje", s: "U", q: "Delecja jednego nukleotydu w środku genu najczęściej powoduje:", a: [
  ["Przesunięcie ramki odczytu", "Kodony czytane są trójkami – usunięcie 1 nukleotydu zmienia wszystkie dalsze trójki. ALA MAKOTA → LAM AKO TA…"],
  ["Mutację cichą", "Cicha to podstawienie, które nie zmienia aminokwasu."],
  ["Zmianę jednego aminokwasu", "To typowy skutek podstawienia (missense)."],
  ["Brak skutków", "W środku genu to zwykle poważna zmiana."]
]},
{ t: "mutacje", s: "U", q: "Mutacja zamieniająca kodon aminokwasu na kodon STOP to mutacja:", a: [
  ["Nonsensowna (nonsense)", "Powstaje przedwcześnie skrócone białko."],
  ["Zmiany sensu (missense)", "Missense zamienia aminokwas na INNY aminokwas."],
  ["Cicha (silent)", "Cicha nie zmienia aminokwasu."],
  ["Przesunięcia ramki", "Ta wynika z insercji/delecji, nie podstawienia."]
]},
{ t: "mutacje", s: "U", q: "Zamiana A → G to:", a: [
  ["Tranzycja", "Puryna → puryna (lub pirymidyna → pirymidyna)."],
  ["Transwersja", "Transwersja to puryna ↔ pirymidyna, np. A → T."],
  ["Delecja", "Delecja to usunięcie nukleotydu."],
  ["Inwersja", "Inwersja to odwrócenie fragmentu chromosomu."]
]},
{ t: "mutacje", s: "U", q: "Jakie uszkodzenie DNA typowo wywołuje promieniowanie UV?", a: [
  ["Dimery pirymidynowe (np. tymidynowe)", "Sąsiednie T łączą się kowalencyjnie i zniekształcają helisę. Naprawia je m.in. naprawa przez wycinanie nukleotydów (NER)."],
  ["Trisomię 21", "Trisomia to błąd w rozchodzeniu się chromosomów, nie skutek UV."],
  ["Wyłącznie pęknięcia dwuniciowe", "Te są typowe dla promieniowania jonizującego (X, γ)."],
  ["Metylację histonów", "To modyfikacja epigenetyczna, nie uszkodzenie od UV."]
]},
{ t: "mutacje", s: "U", q: "Xeroderma pigmentosum (skrajna nadwrażliwość na słońce) wynika z defektu:", a: [
  ["Naprawy przez wycinanie nukleotydów (NER)", "Komórki nie usuwają dimerów pirymidynowych – bardzo wysokie ryzyko raka skóry."],
  ["Replikacji mitochondrialnej", "Choroba dotyczy naprawy DNA jądrowego."],
  ["Inaktywacji chromosomu X", "Nie ma związku z ciałkiem Barra."],
  ["Telomerazy", "To nie defekt telomerazy."]
]},
{ t: "mutacje", s: "U", q: "Odwrócenie fragmentu chromosomu o 180° to:", a: [
  ["Inwersja", "Geny są te same, ale w odwrotnej kolejności."],
  ["Translokacja", "Translokacja to przeniesienie fragmentu na INNY chromosom."],
  ["Duplikacja", "Duplikacja to podwojenie fragmentu."],
  ["Delecja", "Delecja to utrata fragmentu."]
]},

// ═════════════ UZUPEŁNIENIE – GENOMY ═════════════
{ t: "genomy", s: "U", q: "Co jest typowe dla genomów prokariotów?", a: [
  ["Zwykle jeden kolisty chromosom, mało DNA niekodującego, często plazmidy i operony", "Geny upakowane gęsto, zwykle bez intronów."],
  ["Wiele liniowych chromosomów w jądrze", "To cecha eukariotów."],
  ["Duża ilość intronów", "Introny są typowe dla eukariotów."],
  ["Histony i nukleosomy jak u człowieka", "Bakterie nie mają typowych nukleosomów."]
]},
{ t: "genomy", s: "U", q: "Jaka część genomu człowieka koduje białka?", a: [
  ["Ok. 1–2%", "Reszta to introny, sekwencje regulatorowe, powtórzenia (np. transpozony), geny RNA itd."],
  ["Ok. 50%", "Zdecydowanie mniej."],
  ["Ok. 98%", "To raczej ułamek NIEkodujący."],
  ["100%", "Większość genomu nie koduje białek."]
]},
{ t: "genomy", s: "U", q: "Paradoks wartości C oznacza, że:", a: [
  ["Wielkość genomu nie odzwierciedla złożoności organizmu", "Np. niektóre płazy i rośliny mają genomy wielokrotnie większe niż człowiek – głównie przez DNA powtarzalne."],
  ["Wszystkie organizmy mają tyle samo DNA", "Ilość DNA różni się ogromnie."],
  ["Bakterie mają największe genomy", "Bakterie mają genomy małe."],
  ["Liczba chromosomów = liczba genów", "Nie ma takiej zależności."]
]},
{ t: "genomy", s: "U", q: "Plazmid to:", a: [
  ["Mała, zwykle kolista cząsteczka DNA, replikująca się niezależnie od chromosomu", "Często niesie geny np. oporności na antybiotyki. Analogia: „pendrive” bakterii."],
  ["Białko wiążące DNA", "To np. histon."],
  ["Organellum bakterii", "Plazmid to cząsteczka DNA, nie organellum."],
  ["Fragment RNA", "Plazmid to DNA."]
]},

// ═════════════ UZUPEŁNIENIE – MEJOZA ═════════════
{ t: "mejoza", s: "U", q: "W którym etapie mejozy zachodzi crossing-over?", a: [
  ["W profazie I (pachyten)", "Homologi są wtedy sparowane w biwalenty – widać chiazmy."],
  ["W metafazie II", "W mejozie II homologi są już rozdzielone."],
  ["W anafazie I", "W anafazie I homologi już się rozchodzą."],
  ["W fazie S", "W fazie S DNA się replikuje, homologi nie są sparowane."]
]},
{ t: "mejoza", s: "U", q: "Komórka 2n = 8 przechodzi mejozę. Ile chromosomów ma każda komórka potomna?", a: [
  ["4", "Mejoza redukuje liczbę chromosomów o połowę: 2n → n."],
  ["8", "Tyle byłoby po mitozie."],
  ["2", "Redukcja zachodzi tylko raz (mejoza I)."],
  ["16", "Liczba chromosomów nie rośnie w podziale."]
]},
{ t: "mejoza", s: "U", q: "Co rozchodzi się do biegunów w anafazie I mejozy?", a: [
  ["Chromosomy homologiczne", "Każdy biegun dostaje po jednym homologu (wciąż z 2 chromatydami)."],
  ["Chromatydy siostrzane", "Te rozchodzą się w anafazie II i w anafazie mitozy."],
  ["Centriole", "Centriole wędrują do biegunów w profazie."],
  ["Nukleosomy", "Rozdzielane są całe chromosomy."]
]},
{ t: "mejoza", s: "U", q: "Co zwiększa zmienność genetyczną gamet?", a: [
  ["Crossing-over i losowe ułożenie biwalentów w metafazie I", "Crossing-over tasuje allele w chromosomie, a losowe ułożenie – całe chromosomy od ojca i matki (u człowieka 2²³ kombinacji)."],
  ["Mitoza", "Mitoza daje identyczne komórki."],
  ["Cytokineza", "To tylko podział cytoplazmy."],
  ["Replikacja DNA", "Replikacja ma kopiować wiernie."]
]},
{ t: "mejoza", s: "U", q: "Z jednego oocytu I rzędu w oogenezie powstaje:", a: [
  ["1 komórka jajowa i ciałka kierunkowe", "Podział jest nierówny – prawie cała cytoplazma trafia do komórki jajowej."],
  ["4 komórki jajowe", "4 równorzędne gamety powstają w spermatogenezie (4 plemniki)."],
  ["2 komórki jajowe", "Powstaje 1 funkcjonalna komórka jajowa."],
  ["1 plemnik", "Plemniki powstają w spermatogenezie."]
]},
{ t: "mejoza", s: "U", q: "Kompleks synaptonemalny tworzy się, gdy:", a: [
  ["Chromosomy homologiczne łączą się w pary w profazie I (zygoten)", "To białkowy „zamek błyskawiczny” spinający homologi – warunek crossing-over."],
  ["Rozchodzą się chromatydy siostrzane", "To anafaza II."],
  ["Odtwarza się błona jądrowa", "To telofaza."],
  ["Komórka jest w fazie G0", "G0 nie ma związku z mejozą."]
]},

// ═════════════ UZUPEŁNIENIE – PŁEĆ ═════════════
{ t: "plec", s: "U", q: "Matka jest nosicielką hemofilii (XᴴXʰ), ojciec zdrowy (XᴴY). Jakie jest ryzyko choroby u SYNA?", a: [
  ["50%", "Syn dostaje Y od ojca i X od matki. Matka przekaże Xʰ z prawdopodobieństwem 1/2."],
  ["25%", "25% to ryzyko dla DOWOLNEGO dziecka (wszystkich dzieci łącznie)."],
  ["0%", "Ojciec nie przekazuje synom chromosomu X."],
  ["100%", "Matka ma też zdrowy allel."]
]},
{ t: "plec", s: "U", q: "Dlaczego recesywne choroby sprzężone z X częściej dotykają mężczyzn?", a: [
  ["Mężczyźni mają jeden X (są hemizygotami) – jeden allel recesywny wystarcza", "Nie ma drugiego X, który by go „przykrył”."],
  ["Bo chromosom Y zawiera allele chorobowe", "Chodzi o geny na X; Y ma mało genów."],
  ["Bo mężczyźni mają więcej mutacji", "Chodzi o liczbę kopii X."],
  ["Bo u mężczyzn zachodzi inaktywacja X", "Inaktywacja X (ciałko Barra) dotyczy kobiet."]
]},
{ t: "plec", s: "U", q: "Który gen na chromosomie Y uruchamia rozwój jąder u ssaków?", a: [
  ["SRY", "Sex-determining Region Y. Bez SRY zarodek XY może rozwinąć się fenotypowo jako żeński."],
  ["CFTR", "CFTR to gen mukowiscydozy."],
  ["XIST", "XIST odpowiada za inaktywację chromosomu X."],
  ["TP53", "TP53 to gen supresorowy nowotworów."]
]},
{ t: "plec", s: "U", q: "U ptaków samica ma chromosomy płci:", a: [
  ["ZW", "U ptaków to samica jest heterogametyczna, a samiec – ZZ."],
  ["ZZ", "ZZ ma samiec."],
  ["XX", "System XY występuje m.in. u ssaków."],
  ["XO", "XO (np. u niektórych owadów) to inny system."]
]},
{ t: "plec", s: "U", q: "Kariotyp 47,XXY to zespół:", a: [
  ["Klinefeltera", "Mężczyzna z dodatkowym X – zwykle niepłodny, jedno ciałko Barra."],
  ["Turnera", "Turner to 45,X."],
  ["Downa", "Down to trisomia 21."],
  ["Edwardsa", "Edwards to trisomia 18."]
]},
{ t: "plec", s: "U", q: "Ile ciałek Barra ma kobieta o kariotypie 47,XXX?", a: [
  ["2", "Aktywny zostaje tylko jeden X – liczba ciałek Barra = liczba X − 1."],
  ["1", "1 ciałko ma kobieta 46,XX."],
  ["3", "Jeden X zawsze pozostaje aktywny."],
  ["0", "0 mają np. mężczyźni 46,XY i kobiety 45,X."]
]},

// ═════════════ UZUPEŁNIENIE – BAKTERIE I ORGANELLE ═════════════
{ t: "pozajadrowe", s: "U", q: "Od kogo człowiek dziedziczy mitochondrialne DNA?", a: [
  ["Od matki", "Mitochondria plemnika praktycznie nie trafiają do zygoty (są niszczone). Dziedziczenie mateczne."],
  ["Od ojca", "Ojciec zwykle nie przekazuje mitochondriów."],
  ["Po równo od obojga rodziców", "To dotyczy DNA jądrowego."],
  ["Losowo od jednego z dziadków", "mtDNA przechodzi linią żeńską."]
]},
{ t: "pozajadrowe", s: "U", q: "Heteroplazmia to:", a: [
  ["Obecność w jednej komórce różnych wariantów mtDNA (np. prawidłowego i zmutowanego)", "Stąd zmienne nasilenie chorób mitochondrialnych."],
  ["Obecność dwóch jąder w komórce", "To nie ma związku z heteroplazmią."],
  ["Heterozygotyczność genów jądrowych", "Heteroplazmia dotyczy DNA organelli."],
  ["Brak mitochondriów", "Chodzi o mieszaninę wariantów mtDNA."]
]},
{ t: "pozajadrowe", s: "U", q: "Jak wykryć dziedziczenie pozajądrowe (np. mitochondrialne) w krzyżówkach?", a: [
  ["Krzyżówki wzajemne dają różne wyniki – potomstwo przypomina matkę", "W dziedziczeniu jądrowym (autosomalnym) krzyżówki wzajemne dają ten sam wynik."],
  ["Wychodzi stosunek 3:1", "To typowe dziedziczenie mendlowskie."],
  ["Wychodzi 9:3:3:1", "To dziedziczenie dwóch niezależnych genów jądrowych."],
  ["Nie da się tego wykryć", "Da się – właśnie krzyżówkami wzajemnymi."]
]},
{ t: "pozajadrowe", s: "U", q: "Przeniesienie DNA między bakteriami przez bakteriofaga to:", a: [
  ["Transdukcja", "Wirus „przez pomyłkę” pakuje fragment DNA gospodarza i przenosi go do kolejnej bakterii."],
  ["Koniugacja", "Koniugacja = bezpośredni kontakt przez pilus (np. plazmid F)."],
  ["Transformacja", "Transformacja = pobranie wolnego DNA ze środowiska (doświadczenie Griffitha)."],
  ["Transkrypcja", "Transkrypcja to przepisanie DNA na RNA."]
]},
{ t: "pozajadrowe", s: "U", q: "Pobieranie przez bakterie wolnego DNA ze środowiska (doświadczenie Griffitha) to:", a: [
  ["Transformacja", "Griffith (1928): niezjadliwe pneumokoki „przejęły” zjadliwość od martwych zjadliwych."],
  ["Transdukcja", "Transdukcja wymaga bakteriofaga."],
  ["Koniugacja", "Koniugacja wymaga kontaktu dwóch żywych komórek."],
  ["Translacja", "Translacja to synteza białka."]
]},

// ═════════════ UZUPEŁNIENIE – POPULACJE ═════════════
{ t: "populacje", s: "U", q: "W populacji w równowadze H-W 1 na 10 000 osób ma chorobę recesywną (aa). Jaka jest częstość nosicieli (Aa)?", a: [
  ["Ok. 2% (1 na 50)", "q² = 1/10 000 → q = 0,01; p ≈ 0,99; 2pq ≈ 2 × 0,99 × 0,01 ≈ 0,0198."],
  ["0,01%", "To częstość chorych (q²), nie nosicieli."],
  ["1%", "1% to częstość ALLELU a (q), a nie nosicieli."],
  ["50%", "Zdecydowanie za dużo."]
]},
{ t: "populacje", s: "U", q: "Który warunek NIE jest założeniem równowagi Hardy'ego-Weinberga?", a: [
  ["Silny dobór naturalny", "Równowaga wymaga BRAKU doboru. Pozostałe warunki: brak mutacji, migracji, duża populacja, losowe kojarzenie."],
  ["Bardzo duża populacja", "To JEST założenie – w małych działa dryf genetyczny."],
  ["Losowe kojarzenie się osobników", "To JEST założenie."],
  ["Brak migracji", "To JEST założenie."]
]},
{ t: "populacje", s: "U", q: "Losowe zmiany częstości alleli, najsilniejsze w małych populacjach, to:", a: [
  ["Dryf genetyczny", "Szczególne przypadki: efekt założyciela i efekt wąskiego gardła."],
  ["Dobór naturalny", "Dobór NIE jest losowy – faworyzuje lepiej przystosowanych."],
  ["Mutacja", "Mutacja tworzy nowe allele, ale nie opisuje losowych zmian ich częstości."],
  ["Migracja", "Migracja to przepływ genów między populacjami."]
]},
{ t: "populacje", s: "U", q: "Jak chów wsobny (kojarzenie krewniaków) wpływa na populację?", a: [
  ["Zwiększa udział homozygot (także recesywnych, często szkodliwych)", "Częstości alleli się nie zmieniają, ale rośnie homozygotyczność → depresja wsobna."],
  ["Zwiększa udział heterozygot", "Odwrotnie – heterozygot ubywa."],
  ["Tworzy nowe allele", "Wsobność nie tworzy alleli – tylko zmienia ich układ w genotypach."],
  ["Nie ma żadnego wpływu", "Ma – zwiększa homozygotyczność."]
]},
{ t: "populacje", s: "U", q: "Pszenica zwyczajna (6n) powstała przez połączenie genomów różnych gatunków. To:", a: [
  ["Allopoliploidia", "„Allo” = inny – zestawy chromosomów z różnych gatunków. Autopoliploid ma zwielokrotniony genom jednego gatunku."],
  ["Autopoliploidia", "Auto = ten sam gatunek."],
  ["Aneuploidia", "Aneuploidia dotyczy pojedynczych chromosomów, nie całych zestawów."],
  ["Trisomia", "Trisomia to 2n + 1."]
]},

// ═════════════ UZUPEŁNIENIE – TECHNIKI ═════════════
{ t: "techniki", s: "U", q: "Prawidłowa kolejność etapów jednego cyklu PCR:", a: [
  ["Denaturacja (~95°C) → przyłączanie starterów (~50–65°C) → wydłużanie (~72°C)", "Najpierw rozdzielamy nici, potem startery się przyłączają, a polimeraza Taq dobudowuje nową nić."],
  ["Wydłużanie → denaturacja → przyłączanie", "Polimeraza nie ma czego wydłużać, zanim startery się nie przyłączą."],
  ["Przyłączanie → denaturacja → wydłużanie", "Startery nie przyłączą się do dwuniciowego DNA – najpierw trzeba je rozdzielić."],
  ["Ligacja → transkrypcja → translacja", "To nie są etapy PCR."]
]},
{ t: "techniki", s: "U", q: "Dlaczego w PCR używa się polimerazy Taq?", a: [
  ["Jest termostabilna – pochodzi z bakterii Thermus aquaticus z gorących źródeł", "Nie ulega zniszczeniu podczas denaturacji w ~95°C, więc nie trzeba jej dodawać co cykl."],
  ["Jest najtańsza", "Kluczowa jest odporność na wysoką temperaturę."],
  ["Bo przepisuje RNA na DNA", "To robi odwrotna transkryptaza (RT-PCR)."],
  ["Bo tnie DNA", "Polimeraza syntetyzuje, a nie tnie DNA."]
]},
{ t: "techniki", s: "U", q: "Ile kopii fragmentu DNA teoretycznie powstaje z 1 cząsteczki po 10 cyklach PCR?", a: [
  ["2¹⁰ = 1024", "W każdym cyklu liczba kopii się podwaja (wzrost wykładniczy)."],
  ["20", "To wzrost liniowy (2 × 10) – a PCR rośnie wykładniczo."],
  ["100", "To 10², a nie 2¹⁰."],
  ["10", "Liczba kopii podwaja się co cykl."]
]},
{ t: "techniki", s: "U", q: "Na czym opiera się metoda Sangera?", a: [
  ["Na dideoksynukleotydach (ddNTP) bez grupy 3'-OH, które kończą syntezę nici", "Powstają fragmenty różnej długości zakończone znanym nukleotydem – ich rozdział pozwala odczytać sekwencję."],
  ["Na cięciu DNA enzymami restrykcyjnymi", "To analiza restrykcyjna (np. RFLP)."],
  ["Na hybrydyzacji z sondą fluorescencyjną w jądrze", "To FISH."],
  ["Na krzyżówkach testowych", "To metoda genetyki klasycznej."]
]},
{ t: "techniki", s: "U", q: "W elektroforezie w żelu agarozowym DNA wędruje w stronę:", a: [
  ["Anody (+), bo DNA jest ujemnie naładowane", "Mniejsze fragmenty poruszają się szybciej i dalej."],
  ["Katody (−)", "Ładunki jednoimienne się odpychają – DNA (ujemne) ucieka od katody."],
  ["Nie przemieszcza się", "Przemieszcza się w polu elektrycznym."],
  ["Losowo", "Kierunek wyznacza ładunek."]
]},

// ═════════════ UZUPEŁNIENIE – CHOROBY ═════════════
{ t: "choroby", s: "U", q: "Jak dziedziczy się mukowiscydoza?", a: [
  ["Autosomalnie recesywnie (gen CFTR)", "Zdrowi rodzice-nosiciele (Aa × Aa) mają 25% ryzyka chorego dziecka."],
  ["Autosomalnie dominująco", "Tak dziedziczy się np. pląsawica Huntingtona."],
  ["Recesywnie sprzężona z X", "Tak dziedziczy się hemofilia czy dystrofia Duchenne'a."],
  ["Mitochondrialnie", "Gen CFTR leży w jądrze (chromosom 7)."]
]},
{ t: "choroby", s: "U", q: "Pląsawica Huntingtona jest wywołana przez:", a: [
  ["Ekspansję powtórzeń CAG w genie HTT (dziedziczenie autosomalne dominujące)", "Im więcej powtórzeń, tym wcześniejszy początek. Każde dziecko chorego rodzica ma 50% ryzyka."],
  ["Trisomię chromosomu 4", "To mutacja genu, nie aberracja liczbowa."],
  ["Mutację mtDNA", "Gen HTT leży w jądrze."],
  ["Brak chromosomu X", "To zespół Turnera."]
]},
{ t: "choroby", s: "U", q: "Dlaczego fenyloketonurię wykrywa się testem przesiewowym u noworodków?", a: [
  ["Bo wczesna dieta z ograniczeniem fenyloalaniny zapobiega uszkodzeniu mózgu", "Brak enzymu (hydroksylazy fenyloalaninowej) powoduje gromadzenie fenyloalaniny. Fenotyp zależy od środowiska (diety)!"],
  ["Bo nie da się jej leczyć", "Właśnie dlatego się bada – leczenie dietą jest skuteczne."],
  ["Bo to choroba zakaźna", "To choroba genetyczna (autosomalna recesywna)."],
  ["Bo jest sprzężona z płcią", "Jest autosomalna."]
]},
{ t: "choroby", s: "U", q: "W rodowodzie choroba występuje w każdym pokoleniu, chorują obie płcie, a każdy chory ma chorego rodzica. Najbardziej prawdopodobne dziedziczenie:", a: [
  ["Autosomalne dominujące", "Jeden allel wystarcza, więc cecha nie „przeskakuje” pokoleń."],
  ["Autosomalne recesywne", "Recesywne często przeskakuje pokolenia – chorzy mają zdrowych rodziców-nosicieli."],
  ["Recesywne sprzężone z X", "Wtedy chorowaliby głównie mężczyźni."],
  ["Holandryczne (sprzężone z Y)", "Chorowaliby wyłącznie mężczyźni, od ojca do syna."]
]},
{ t: "choroby", s: "U", q: "Dystrofia mięśniowa Duchenne'a dziedziczy się:", a: [
  ["Recesywnie w sprzężeniu z chromosomem X", "Chorują głównie chłopcy; gen dystrofiny (DMD) – jeden z największych genów człowieka."],
  ["Autosomalnie dominująco", "Gdyby tak było, obie płcie chorowałyby równie często."],
  ["Mitochondrialnie", "Gen DMD leży na chromosomie X."],
  ["Jako trisomia", "To mutacja genu, nie aberracja liczbowa."]
]}
];
