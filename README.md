# 🧬 Wstęp do genetyki – aplikacja do nauki

Interaktywna aplikacja do nauki na egzamin z **Wprowadzenia do genetyki** (UAM, Biotechnologia).

## Jak uruchomić
Otwórz plik `index.html` w przeglądarce – nic nie trzeba instalować.

## Co jest w środku
- **Quiz** – pytania jednokrotnego wyboru. Po kliknięciu odpowiedzi każda opcja dostaje wyjaśnienie: *dlaczego tak* / *dlaczego nie*. Błędne pytania są zapamiętywane – można je potem powtórzyć.
- **Fiszki** – kliknij, aby odwrócić. „Umiem” usuwa kartę z talii, „Jeszcze nie umiem” odkłada ją na koniec.
- **Słownik** – pojęcia z definicjami i analogiami (💡), z wyszukiwarką.
- **Filtr zagadnień** – wspólny dla wszystkich trzech zakładek.

## Skąd treść
| Grupa | Źródło |
|---|---|
| Z wykładów | slajdy W1–W4 (2026) |
| Uzupełnienie | tematy z „zakresu krótkich wykładów”, których nie było na slajdach – opracowane na podstawie wiedzy podręcznikowej |

## Jak dodać treść
Wszystko jest w folderze `data/`:
- `topics.js` – lista zagadnień,
- `questions.js` – pytania (**pierwsza odpowiedź na liście = poprawna**, aplikacja sama miesza kolejność),
- `flashcards.js` – dodatkowe fiszki,
- `glossary.js` – słownik (pojęcia trafiają też automatycznie do fiszek).
