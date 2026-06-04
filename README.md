# SLIME DUNGEON

Gra labiryntowa stworzona w JavaScript, HTML5 i CSS3.

**Autorzy:** Dawid Pałubicki & Oliwier Witoński
**Czas realizacji projektu:** 10.04.2026 – 08.06.2026

---

# Opis

Slime Dungeon to przeglądarkowa gra labiryntowa, w której gracz wciela się w slime'a próbującego uratować swoje królestwo przed Królem Szkieletów.

Podczas rozgrywki gracz przemierza kolejne poziomy lochu, odnajduje klucze, rozwiązuje zagadki, zbiera apteczki oraz unika przeciwników patrolujących labirynt.

Celem gry jest ukończenie wszystkich 30 pięter oraz pokonanie finałowego przeciwnika znajdującego się na ostatnim poziomie.

Gra działa całkowicie w przeglądarce internetowej bez wykorzystania serwera backendowego.

---

# Wykorzystane technologie

Projekt został wykonany przy użyciu:

* HTML5
* CSS3
* JavaScript (ES6)

Gra nie wymaga instalacji dodatkowych bibliotek.

---

# Struktura projektu

```text
SlimeDungeon/
├── index.html
├── style.css
│
├── js/
│   ├── main.js
│   ├── player.js
│   ├── levels.js
│   └── puzzles.js
│
├── images/
│   ├── player.gif
│   ├── enemy1.gif
│   ├── enemy2.gif
│   ├── enemy3.gif
│   ├── boss.gif
│   ├── key.png
│   ├── medic.png
│   ├── door.png
│   ├── puzzle.png
│   └── Fabula1-4.png
│
└── audio/
    ├── music.mp3
    ├── click.mp3
    ├── attack enemy.wav
    ├── death.wav
    ├── przejscie.mp3
    └── dobrze zagadka.mp3
```

---

# Sterowanie

| Klawisz | Akcja        |
| ------- | ------------ |
| W / ↑   | Ruch w górę  |
| S / ↓   | Ruch w dół   |
| A / ←   | Ruch w lewo  |
| D / →   | Ruch w prawo |

---

# Elementy gry

| Element  | Opis                                         |
| -------- | -------------------------------------------- |
| Slime    | Główny bohater gry                           |
| Klucz    | Pozwala otworzyć przejście na kolejne piętro |
| Drzwi    | Wyjście z poziomu                            |
| Apteczka | Przywraca jedno serce                        |
| Enemy    | Zabiera jedno serce po kontakcie             |
| Puzzle   | Uruchamia zagadkę logiczną                   |
| Boss     | Ostatni przeciwnik gry                       |

---

# Kluczowe mechaniki

## Klucze i przejścia

Na każdym poziomie znajduje się klucz.

Aby przejść dalej gracz musi:

1. Odnaleźć klucz.
2. Dotrzeć do drzwi.
3. Otworzyć przejście na następne piętro.

---

## System zdrowia

Gracz rozpoczyna grę z trzema sercami.

* Kontakt z przeciwnikiem odbiera jedno serce.
* Apteczka przywraca jedno serce.
* Utrata wszystkich serc kończy się ekranem Game Over.

---

## System przeciwników

Przeciwnicy:

* poruszają się po wyznaczonych trasach,
* posiadają animacje,
* odbierają życie po kontakcie.

Na wyższych poziomach liczba przeciwników stopniowo wzrasta.

---

## System zagadek

Na mapie znajdują się pola oznaczone znakiem zapytania.

Po wejściu na takie pole wyświetlane jest losowe pytanie.

Poprawna odpowiedź:

* nagradza gracza dodatkowym sercem.

Błędna odpowiedź:

* powoduje utratę jednego serca.

---

## System poziomów

Gra zawiera 30 poziomów.

### Piętra 1–5

Poziomy wprowadzające.

### Piętra 6–10

Większe labirynty i więcej przeciwników.

### Piętra 11–20

Rosnący poziom trudności oraz większa liczba zagadek.

### Piętra 21–29

Najtrudniejsze etapy rozgrywki.

### Piętro 30

Arena bossa i zakończenie gry.

---

# Fabuła

Królestwo slime'ów zostało zaatakowane przez Króla Szkieletów.

Jedyną nadzieją jest młody slime, który musi przejść przez trzydzieści poziomów lochu, odnaleźć drogę do ostatniej komnaty i pokonać ostatecznego przeciwnika.

Gra zawiera ekran fabularny na początku oraz zakończenie po ukończeniu ostatniego poziomu.

---

# Interfejs użytkownika

Podczas gry wyświetlany jest HUD zawierający:

* liczbę serc,
* numer aktualnego piętra,
* informację o posiadaniu klucza.

Dostępne są również:

* Menu główne,
* Instrukcja,
* Ustawienia,
* Credits.

---

# Audio

Gra zawiera:

* muzykę tła,
* efekty kliknięć,
* efekty obrażeń,
* efekty przechodzenia poziomów,
* efekty poprawnych odpowiedzi,
* efekty śmierci.

---

# Uruchomienie

Wystarczy otworzyć plik:

```text
index.html
```

w dowolnej nowoczesnej przeglądarce internetowej.

---

# Autorzy

Dawid Pałubicki

Oliwier Witoński

---

# Wersja

Slime Dungeon v1.0
