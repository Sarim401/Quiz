import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const questions = [
{
  question: "1. Co to jest ECMAScript?",
  options: [
    "a) Jest to synonim JavaScriptu.",
    "b) Jest to standard specyfikujący język skryptowy, na którym opiera się JavaScript.",
    "c) Jest to narzędzie do transpilacji kodu JavaScript.",
    "d) Jest to biblioteka do zarządzania pakietami."
  ],
  correctAnswer: "b"
},
{
  question: "2. Co to jest transpilacja?",
  options: [
    "a) Proces zamiany kodu źródłowego na kod binarny.",
    "b) Proces konwersji kodu napisanego w jednym języku programowania do równoważnego kodu w innym języku programowania.",
    "c) Proces optymalizacji kodu.",
    "d) Proces kompilacji kodu z błędami."
  ],
  correctAnswer: "b"
},
{
  question: "3. Czym różni się Single Page Application (SPA) od Multi-Page Application (MPA)?",
  options: [
    "a) SPA wykorzystuje wiele plików HTML, a MPA jeden plik HTML.",
    "b) SPA ładuje wszystkie zasoby za jednym razem, a MPA ładuje zasoby na każdej podstronie.",
    "c) SPA generuje dynamiczną treść po stronie serwera, a MPA po stronie klienta.",
    "d) SPA nie używa JavaScriptu, a MPA go używa."
  ],
  correctAnswer: "a"
},
{
  question: "4. Co to jest npm?",
  options: [
    "a) Narzędzie do transpilacji kodu.",
    "b) Menedżer pakietów dla Node.js.",
    "c) Biblioteka do tworzenia komponentów.",
    "d) Narzędzie do kompilacji kodu."
  ],
  correctAnswer: "b"
},
{
  question: "5. Jaki jest główny cel używania React?",
  options: [
    "a) Tworzenie stylów CSS.",
    "b) Tworzenie interfejsów użytkownika.",
    "c) Zarządzanie bazami danych.",
    "d) Transpilacja kodu JavaScript."
  ],
  correctAnswer: "b"
},
{
    question: "6. Co to jest cykl życia komponentu w React?",
    options: [
      "a) Sekwencja kroków wykonywanych przez przeglądarkę podczas renderowania strony.",
      "b) Sekwencja metod wywoływanych podczas tworzenia, aktualizacji i usuwania komponentu.",
      "c) Proces transpilacji kodu React do kodu JavaScript.",
      "d) Zestaw stylów CSS stosowanych do komponentu."
    ],
    correctAnswer: "b"
  },
  {
    question: "7. Jakie jest główne założenie biblioteki Redux?",
    options: [
      "a) Zarządzanie stylami CSS.",
      "b) Zarządzanie stanem aplikacji.",
      "c) Tworzenie interfejsów użytkownika.",
      "d) Transpilacja kodu JavaScript."
    ],
    correctAnswer: "b"
  },
  {
    question: "8. Jakie są różnice między metodami GET i POST w kontekście konsumpcji API?",
    options: [
      "a) GET wysyła dane w ciele żądania, a POST w URL.",
      "b) GET wysyła dane w URL, a POST w ciele żądania.",
      "c) GET jest używane do wysyłania danych na serwer, a POST do ich pobierania.",
      "d) GET używa szyfrowania, a POST nie."
    ],
    correctAnswer: "a"
  },
  {
    question: "9. Jakie są kroki implementacji formularza z walidacją danych przy użyciu Redux Form?",
    options: [
      "a) Tworzenie komponentu formularza, definiowanie pól formularza, implementacja walidacji, podłączenie do Redux.",
      "b) Tworzenie pliku HTML z formularzem, dodanie CSS, implementacja walidacji po stronie serwera.",
      "c) Instalacja pakietu Redux Form, tworzenie komponentu formularza, dodanie walidacji w pliku CSS.",
      "d) Definiowanie pól formularza, implementacja walidacji w JavaScript, podłączenie formularza do serwera."
    ],
    correctAnswer: "a"
  },
  {
    question: "10. Jakie są podstawowe zasady działania React Router?",
    options: [
      "a) Tworzenie wielu plików HTML dla każdej podstrony.",
      "b) Definiowanie tras aplikacji i podłączanie komponentów do odpowiednich ścieżek URL.",
      "c) Kompilowanie wszystkich komponentów do jednego pliku.",
      "d) Dodawanie stylów CSS do każdego komponentu."
    ],
    correctAnswer: "b"
  },
  {
    question: "11. Jakie są korzyści z używania preprocesora CSS (SASS/SCSS) w projekcie?",
    options: [
      "a) Ułatwia kompilację kodu JavaScript.",
      "b) Pozwala na używanie zmiennych, zagnieżdżania i funkcji w CSS.",
      "c) Automatycznie generuje kod HTML.",
      "d) Zarządza stanem aplikacji."
    ],
    correctAnswer: "b"
  },
  {
    question: "12. Jakie są kroki tworzenia wersji produkcyjnej aplikacji i jej hosting z użyciem serwera web NGINX?",
    options: [
      "a) Kompilacja kodu, minifikacja plików, konfiguracja serwera NGINX, wdrożenie aplikacji.",
      "b) Tworzenie komponentów, dodawanie stylów CSS, uruchamianie serwera Node.js.",
      "c) Pisanie testów jednostkowych, dodawanie dokumentacji, konfiguracja bazy danych.",
      "d) Instalacja pakietu npm, tworzenie pliku README, uruchamianie skryptu testowego."
    ],
    correctAnswer: "a"
  },
  {
    question: "13. Jak działa pętla for...in w JavaScript?",
    options: [
      "a) Iteruje po wartościach tablicy.",
      "b) Iteruje po indeksach tablicy lub właściwościach obiektu.",
      "c) Iteruje po elementach DOM.",
      "d) Iteruje po wartościach obiektów JSON."
    ],
    correctAnswer: "b"
  },
  {
    question: "14. Jakie są zasady używania instrukcji try...catch w JavaScript?",
    options: [
      "a) Służy do asynchronicznego wykonywania kodu.",
      "b) Służy do obsługi błędów w kodzie.",
      "c) Służy do iteracji po elementach tablicy.",
      "d) Służy do definiowania zmiennych."
    ],
    correctAnswer: "b"
  },
  {
    question: "15. Co robi funkcja eval w JavaScript?",
    options: [
      "a) Konwertuje obiekt na napis.",
      "b) Oblicza wyrażenie lub wykonuje instrukcje.",
      "c) Sprawdza czy liczba jest skończona.",
      "d) Tworzy nowy obiekt."
    ],
    correctAnswer: "b"
  },
  {
    question: "16. Jak działa funkcja parseFloat w JavaScript?",
    options: [
      "a) Konwertuje napis na liczbę zmiennoprzecinkową.",
      "b) Konwertuje obiekt na napis.",
      "c) Sprawdza czy liczba jest całkowita.",
      "d) Tworzy nowy obiekt JSON."
    ],
    correctAnswer: "a"
  },
  {
    question: "17. Jakie są główne zalety stosowania SPA?",
    options: [
      "a) Szybsze ładowanie stron po pierwszym załadowaniu.",
      "b) Lepsza optymalizacja dla wyszukiwarek.",
      "c) Mniejsza ilość JavaScriptu.",
      "d) Łatwiejsza implementacja niż MPA."
    ],
    correctAnswer: "a"
  },
  {
    question: "18. Jakie wyzwania związane z SEO mogą napotkać aplikacje SPA?",
    options: [
      "a) Problemy z ładowaniem obrazów.",
      "b) Trudności w indeksowaniu dynamicznie ładowanej treści.",
      "c) Zbyt duża ilość plików CSS.",
      "d) Problemy z transpilacją kodu."
    ],
    correctAnswer: "b"
  },
  {
    question: "19. Jakie są różnice między npm a yarn?",
    options: [
      "a) npm jest szybsze niż yarn.",
      "b) yarn jest szybsze i posiada bardziej deterministyczne zarządzanie zależnościami.",
      "c) npm używa lockfile, a yarn nie.",
      "d) yarn nie wspiera pracy offline."
    ],
    correctAnswer: "b"
  },
  {
    question: "20. Co to jest komponent typu kontener w React?",
    options: [
      "a) Komponent odpowiedzialny za prezentację danych.",
      "b) Komponent zarządzający logiką aplikacji i danymi.",
      "c) Komponent do stylizacji aplikacji.",
      "d) Komponent do obsługi routingu."
    ],
    correctAnswer: "b"
  },
  {
    question: "Co to jest JSX?",
    options: [
      "• a) Rozszerzenie składni JavaScriptu.",
      "• b) Nowy język programowania.",
      "• c) Stylizacja CSS w JavaScript.",
      "• d) System zarządzania stanem."
    ],
    correctAnswer: "a"
  },
  {
    question: "Czym jest komponent kontrolowany w React?",
    options: [
      "• a) Komponent, który kontroluje wszystkie inne komponenty.",
      "• b) Komponent, którego stan jest zarządzany przez rodzica.",
      "• c) Komponent, który nie ma własnego stanu.",
      "• d) Komponent, który zarządza stanem za pomocą zewnętrznego systemu."
    ],
    correctAnswer: "b"
  },
  {
    question: "Jakie jest zastosowanie useEffect w React?",
    options: [
      "• a) Do tworzenia komponentów klasowych.",
      "• b) Do zarządzania stanem komponentu.",
      "• c) Do wykonywania efektów ubocznych w komponentach funkcyjnych.",
      "• d) Do definiowania stylów CSS."
    ],
    correctAnswer: "c"
  },
  {
    question: "Czym jest Redux?",
    options: [
      "• a) Biblioteka do budowania interfejsów użytkownika.",
      "• b) System zarządzania stanem dla aplikacji JavaScript.",
      "• c) Narzędzie do stylizacji komponentów.",
      "• d) Framework do testowania aplikacji."
    ],
    correctAnswer: "b"
  },
  {
    question: "Jaka metoda jest używana do wysyłania zapytań HTTP w Axios?",
    options: [
      "• a) fetch()",
      "• b) request()",
      "• c) ajax()",
      "• d) axios()"
    ],
    correctAnswer: "d"
  },
  {
    question: "Które z poniższych narzędzi jest używane do zarządzania zależnościami w projekcie JavaScript?",
    options: [
      "• a) Webpack",
      "• b) Babel",
      "• c) npm",
      "• d) ESLint"
    ],
    correctAnswer: "c"
  },
  {
    question: "Czym jest formularz kontrolowany w React?",
    options: [
      "• a) Formularz, którego dane są przechowywane w stanie komponentu.",
      "• b) Formularz, który działa bez stanu.",
      "• c) Formularz, który jest kontrolowany przez zewnętrzny serwer.",
      "• d) Formularz, który wykorzystuje CSS do kontroli wyglądu."
    ],
    correctAnswer: "a"
  },
  {
    question: "Jakie jest główne zastosowanie SASS?",
    options: [
      "• a) Do zarządzania stanem aplikacji.",
      "• b) Do kompilacji kodu JavaScript.",
      "• c) Do stylizacji CSS z zaawansowanymi funkcjami.",
      "• d) Do obsługi błędów w aplikacji."
    ],
    correctAnswer: "c"
  },
  {
    question: "Czym jest Docker?",
    options: [
      "• a) Narzędzie do budowania aplikacji webowych.",
      "• b) System zarządzania bazami danych.",
      "• c) Platforma do tworzenia, wdrażania i uruchamiania aplikacji w kontenerach.",
      "• d) Biblioteka do testowania aplikacji."
    ],
    correctAnswer: "c"
  },
  {
    question: "Jakie są główne różnice między elementem <div> a <span>?",
    options: [
      "• a) <div> jest blokowym elementem, a <span> jest elementem liniowym.",
      "• b) <div> jest elementem HTML, a <span> nie.",
      "• c) <div> używa CSS, a <span> JavaScript.",
      "• d) <div> może zawierać tylko tekst, a <span> tylko obrazy."
    ],
    correctAnswer: "a"
  },
  {
    question: "Jakie są główne zalety stosowania komponentów w React?",
    options: [
      "• a) Zmniejszenie wielkości aplikacji.",
      "• b) Możliwość ponownego wykorzystania kodu i łatwiejsze zarządzanie stanem.",
      "• c) Zmniejszenie ilości kodu CSS.",
      "• d) Łatwiejsza integracja z bazami danych."
    ],
    correctAnswer: "b"
  },
  {
    question: "Czym jest interfejs w TypeScript?",
    options: [
      "• a) Nową wersją klasy.",
      "• b) Strukturą, która pozwala definiować typy danych.",
      "• c) Narzędziem do stylizacji komponentów.",
      "• d) Biblioteką do zarządzania stanem."
    ],
    correctAnswer: "b"
  },
  {
    question: "Czym jest routing w kontekście aplikacji webowej?",
    options: [
      "• a) Procesem stylizacji komponentów.",
      "• b) Procesem zarządzania stanem aplikacji.",
      "• c) Procesem nawigacji między różnymi widokami lub stronami aplikacji.",
      "• d) Procesem kompilacji kodu JavaScript."
    ],
    correctAnswer: "c"
  },
  {
    question: "Które z poniższych narzędzi jest używane do transpilacji kodu JavaScript?",
    options: [
      "• a) ESLint",
      "• b) Babel",
      "• c) Webpack",
      "• d) npm"
    ],
    correctAnswer: "b"
  },
  {
    question: "Jakie jest główne zadanie NGINX?",
    options: [
      "• a) Stylizacja komponentów w React.",
      "• b) Kompilacja kodu JavaScript.",
      "• c) Serwowanie stron internetowych i jako reverse proxy.",
      "• d) Zarządzanie zależnościami w projekcie."
    ],
    correctAnswer: "c"
  },
  {
    question: "Jaką funkcję pełni let w JavaScript?",
    options: [
      "o a) Deklaruje zmienną o zasięgu funkcji.",
      "o b) Deklaruje zmienną o zasięgu bloku.",
      "o c) Deklaruje stałą.",
      "o d) Deklaruje zmienną globalną."
    ],
    correctAnswer: "b"
  },
  {
    question: "Które z poniższych jest typem prymitywnym w JavaScript?",
    options: [
      "o a) Object",
      "o b) Array",
      "o c) String",
      "o d) Function"
    ],
    correctAnswer: "c"
  },
  {
    question: "Jakie jest zastosowanie operatora === w JavaScript?",
    options: [
      "o a) Porównuje wartości bez konwersji typów.",
      "o b) Porównuje wartości z konwersją typów.",
      "o c) Deklaruje zmienną globalną.",
      "o d) Sprawdza, czy zmienna jest zdefiniowana."
    ],
    correctAnswer: "a"
  },
  {
    question: "Czym jest wirtualny DOM w React?",
    options: [
      "o a) Kopią rzeczywistego DOM przechowywaną w pamięci.",
      "o b) Kopią rzeczywistego DOM przechowywaną na serwerze.",
      "o c) Nowym typem przeglądarki.",
      "o d) Biblioteką do zarządzania stanem."
    ],
    correctAnswer: "a"
  },
  {
    question: "Co to jest props w React?",
    options: [
      "o a) Zmienna lokalna w komponencie.",
      "o b) Obiekt przekazujący dane z rodzica do dziecka.",
      "o c) Metoda renderująca komponent.",
      "o d) Funkcja do zarządzania stanem."
    ],
    correctAnswer: "b"
  },
  {
    question: "Co to jest store w Redux?",
    options: [
      "o a) Funkcja do wysyłania akcji.",
      "o b) Centralne miejsce przechowywania stanu aplikacji.",
      "o c) Reducer odpowiedzialny za aktualizację stanu.",
      "o d) Komponent React odpowiedzialny za renderowanie."
    ],
    correctAnswer: "b"
  },
  {
    question: "Czym jest action w Redux?",
    options: [
      "o a) Funkcja aktualizująca stan bezpośrednio.",
      "o b) Opis zmian, które mają zostać wprowadzone do stanu.",
      "o c) Komponent odpowiedzialny za renderowanie.",
      "o d) Narzędzie do debugowania aplikacji."
    ],
    correctAnswer: "b"
  },
  {
    question: "Jakie jest domyślne działanie metody fetch w JavaScript?",
    options: [
      "o a) Wysyła żądanie GET.",
      "o b) Wysyła żądanie POST.",
      "o c) Wysyła żądanie PUT.",
      "o d) Wysyła żądanie DELETE."
    ],
    correctAnswer: "a"
  },
  {
    question: "Co oznacza status odpowiedzi HTTP 404?",
    options: [
      "o a) Zasób został znaleziony.",
      "o b) Zasób został przeniesiony.",
      "o c) Zasób nie został znaleziony.",
      "o d) Zasób został utworzony."
    ],
    correctAnswer: "c"
  },
  {
    question: "Jakie polecenie służy do obsługi zdarzeń formularza w React?",
    options: [
      "o a) onClick",
      "o b) onChange",
      "o c) onSubmit",
      "o d) onLoad"
    ],
    correctAnswer: "c"
  },
  {
    question: "Jakie są zalety używania biblioteki Formik do zarządzania formularzami w React?",
    options: [
      "o a) Łatwa integracja z Redux.",
      "o b) Automatyczna walidacja formularzy.",
      "o c) Łatwiejsze zarządzanie stanem formularzy.",
      "o d) Wszystkie powyższe."
    ],
    correctAnswer: "d"
  },
  {
    question: "Jakie komponenty zapewnia React Router do definiowania tras?",
    options: [
      "o a) Router, Route, Switch",
      "o b) Link, Router, Form",
      "o c) Switch, Route, Nav",
      "o d) Router, Route, Table"
    ],
    correctAnswer: "a"
  },
  {
    question: "Co to jest lazy loading w kontekście React Router?",
    options: [
      "o a) Dynamiczne ładowanie komponentów tylko wtedy, gdy są potrzebne.",
      "o b) Ładowanie wszystkich komponentów naraz.",
      "o c) Optymalizacja stylów CSS.",
      "o d) Zarządzanie stanem komponentów."
    ],
    correctAnswer: "a"
  },
  {
    question: "Jakie są korzyści z używania Styled Components w React?",
    options: [
      "o a) Tworzenie komponentów z wbudowanym stylem.",
      "o b) Lepsza czytelność kodu.",
      "o c) Unikanie konfliktów nazw klas.",
      "o d) Wszystkie powyższe."
    ],
    correctAnswer: "d"
  },
  {
    question: "Jak można włączyć preprocesor SASS w projekcie React?",
    options: [
      "o a) Dodając odpowiednią konfigurację w pliku HTML.",
      "o b) Instalując odpowiednie pakiety npm i konfigurując Webpack.",
      "o c) Korzystając z funkcji JavaScript.",
      "o d) Edytując plik README."
    ],
    correctAnswer: "b"
  },
  {
    question: "Co to jest minifikacja kodu?",
    options: [
      "o a) Proces usuwania nieużywanych zasobów z kodu.",
      "o b) Proces optymalizacji obrazów.",
      "o c) Proces zmniejszania rozmiaru plików poprzez usuwanie białych znaków i komentarzy.",
      "o d) Proces kompilacji kodu JavaScript."
    ],
    correctAnswer: "c"
  },
  {
    question: "Jakie jest działanie instrukcji finally w JavaScript?",
    options: [
      "o a) Wykonuje się tylko w przypadku błędu.",
      "o b) Wykonuje się zawsze, niezależnie od tego, czy wystąpił błąd.",
      "o c) Wykonuje się tylko, gdy nie ma błędu.",
      "o d) Wykonuje się przed blokiem try."
    ],
    correctAnswer: "b"
  },
  {
    question: "Co to jest pętla while w JavaScript?",
    options: [
      "o a) Pętla, która wykonuje blok kodu, dopóki warunek jest prawdziwy.",
      "o b) Pętla, która wykonuje blok kodu dokładnie raz.",
      "o c) Pętla, która iteruje po wartościach tablicy.",
      "o d) Pętla, która wykonuje blok kodu z ustaloną liczbą iteracji."
    ],
    correctAnswer: "a"
  },
  {
    question: "Co robi funkcja isNaN w JavaScript?",
    options: [
      "o a) Sprawdza, czy wartość jest liczbą.",
      "o b) Sprawdza, czy wartość jest nieliczbą.",
      "o c) Sprawdza, czy wartość jest zerem.",
      "o d) Sprawdza, czy wartość jest ciągiem znaków."
    ],
    correctAnswer: "b"
  },
  {
    question: "Jakie jest zastosowanie funkcji JSON.stringify?",
    options: [
      "o a) Konwertuje obiekt JavaScript do formatu JSON.",
      "o b) Konwertuje format JSON do obiektu JavaScript.",
      "o c) Waliduje poprawność JSON.",
      "o d) Sprawdza, czy obiekt jest pusty."
    ],
    correctAnswer: "a"
  },
  {
    question: "Co oznacza właściwość Infinity w JavaScript?",
    options: [
      "a) Stała reprezentująca nieskończoność",
      "b) Zmienna lokalna w funkcji",
      "c) Metoda globalna",
      "d) Błąd kompilacji"
    ],
    correctAnswer: "a"
  },
  {
    question: "Co robi funkcja parseFloat w JavaScript?",
    options: [
      "a) Sprawdza, czy zmienna jest liczbą całkowitą",
      "b) Sprawdza, czy zmienna jest liczbą zmiennoprzecinkową i jeśli tak, to zwraca tę liczbę",
      "c) Zamienia zmienną na string",
      "d) Wykonuje operację matematyczną"
    ],
    correctAnswer: "b"
  },
  {
    question: "Która z poniższych metod sprawdza, czy wartość jest skończona?",
    options: [
      "a) isNaN",
      "b) isFinite",
      "c) parseFloat",
      "d) parseInt"
    ],
    correctAnswer: "b"
  },
  {
    question: "Która z poniższych metod zamienia obiekt na napis (string) w JavaScript?",
    options: [
      "a) toString",
      "b) eval",
      "c) String",
      "d) parseInt"
    ],
    correctAnswer: "c"
  },
  {
    question: "Co to jest async w JavaScript?",
    options: [
      "a) Moduł umożliwiający asynchroniczną pracę",
      "b) Moduł synchronizujący operacje wejścia-wyjścia",
      "c) Konstruktor obiektów",
      "d) Operator matematyczny"
    ],
    correctAnswer: "a"
  },
  {
    question: "Który z poniższych preprocesorów CSS jest wspierany przez bibliotekę Bootstrap?",
    options: [
      "a) LESS",
      "b) SASS",
      "c) Stylus"
    ],
    correctAnswer: "b"
  },
  {
    question: "W jakiej wersji ECMAScript JavaScript 1.5 jest w pełni zgodny?",
    options: [
      "a) Edition 2",
      "b) Edition 3",
      "c) Edition 4"
    ],
    correctAnswer: "b"
  },
  {
    question: "Która z poniższych metod JavaScript jest używana do dołączenia zewnętrznego pliku skryptu?",
    options: [
      "a) <SCRIPT src=\"skrypt.js\">",
      "b) <LINK href=\"skrypt.js\">",
      "c) <IMPORT src=\"skrypt.js\">"
    ],
    correctAnswer: "a"
  },
  {
    question: "Jaka jest funkcja pętli for...in w JavaScript?",
    options: [
      "a) Iteruje po właściwościach obiektu",
      "b) Iteruje po elementach tablicy",
      "c) Iteruje po wartościach zmiennych"
    ],
    correctAnswer: "a"
  },
  {
    question: "Która właściwość JavaScript reprezentuje nieskończoność?",
    options: [
      "a) Infinity",
      "b) NaN",
      "c) MaxValue"
    ],
    correctAnswer: "a"
  },
  {
    question: "Która z funkcji predefiniowanych JavaScript zamienia obiekt na napis?",
    options: [
      "a) toString()",
      "b) parseFloat()",
      "c) eval()"
    ],
    correctAnswer: "a"
  },
  {
    question: "Która z poniższych metod sprawdza, czy liczba jest skończona?",
    options: [
      "a) isFinite()",
      "b) isNaN()",
      "c) parseInt()"
    ],
    correctAnswer: "a"
  },
  {
    question: "Która z poniższych funkcji JavaScript asynchronicznie przetwarza listę plików?",
    options: [
      "a) async.map()",
      "b) async.filter()",
      "c) async.series()"
    ],
    correctAnswer: "a"
  },
  {
    question: "Jaki framework JavaScript jest używany do implementacji aplikacji z React Router?",
    options: [
      "a) Vue.js",
      "b) Angular",
      "c) React"
    ],
    correctAnswer: "c"
  },
  {
    question: "Jak można osadzić kod JavaScript w dokumencie HTML?",
    options: [
      "a) Wewnątrz znaczników <SCRIPT>",
      "b) Wewnątrz znaczników <CODE>",
      "c) Wewnątrz znaczników <JS>"
    ],
    correctAnswer: "a"
  },
  {
    question: "Która funkcja w JavaScript oblicza wartość wyrażenia lub wykonuje instrukcję?",
    options: [
      "a) parseInt",
      "b) eval",
      "c) execute"
    ],
    correctAnswer: "b"
  },
  {
    question: "Co reprezentuje wartość Infinity w JavaScript?",
    options: [
      "a) Największą możliwą liczbę całkowitą",
      "b) Nieskończoność",
      "c) Liczbę zmiennoprzecinkową"
    ],
    correctAnswer: "b"
  },
  {
    question: "Jakiego typu pętla jest używana do iteracji po właściwościach obiektu?",
    options: [
      "a) for..of",
      "b) for..in",
      "c) while"
    ],
    correctAnswer: "b"
  },
  {
    question: "Która biblioteka JavaScript jest używana do obsługi żądań HTTP w aplikacjach internetowych?",
    options: [
      "a) Axios",
      "b) Redux",
      "c) React"
    ],
    correctAnswer: "a"
  },
  {
    question: "Który preprocesor CSS jest wspomniany w prezentacji jako narzędzie do tworzenia responsywnych interfejsów użytkownika?",
    options: [
      "a) LESS",
      "b) SASS",
      "c) Stylus"
    ],
    correctAnswer: "b"
  },
  {
    question: "Które narzędzie jest używane do tworzenia wersji produkcyjnej aplikacji i hostingu z użyciem serwera web?",
    options: [
      "a) Apache",
      "b) NGINX",
      "c) IIS"
    ],
    correctAnswer: "b"
  },
  {
    question: "Co oznacza metoda parseFloat w JavaScript?",
    options: [
      "a) Sprawdza, czy liczba jest skończona",
      "b) Sprawdza, czy napis jest liczbą zmiennoprzecinkową",
      "c) Konwertuje obiekt na napis"
    ],
    correctAnswer: "b"
  },
  {
    question: "Która metoda w JavaScript konwertuje obiekt na napis?",
    options: [
      "a) toString",
      "b) String",
      "c) parseString"
    ],
    correctAnswer: "b"
  },
  {
    question: "Która metoda w JavaScript sprawdza, czy liczba jest skończona?",
    options: [
      "a) isFinite",
      "b) isNaN",
      "c) isNumber"
    ],
    correctAnswer: "a"
  }

];

const MultipleChoiceQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
    const [score, setScore] = useState(0); // Licznik punktów
  
    const handleOptionSelect = (option) => {
      setSelectedOption(option);
    };
  
    const handleNextQuestion = () => {
      if (selectedOption === questions[currentQuestion].correctAnswer) {
        setIsAnswerCorrect(true);
        setScore(score + 1); // Zwiększ punktację, jeśli odpowiedź jest poprawna
      } else {
        setIsAnswerCorrect(false);
      }
      setShowResult(true);
    };
  
    const handleNextButtonClick = () => {
      setSelectedOption('');
      setShowResult(false);
      setIsAnswerCorrect(false);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // Jeśli to ostatnie pytanie, możesz dodać odpowiednie działania
        // np. wyświetlenie wyniku końcowego
        console.log('Koniec quizu');
        console.log('Twój wynik:', score, 'punktów'); // Wyświetl wynik w konsoli
      }
    };
  
    return (
      <div>
        <h3>{questions[currentQuestion].question}</h3>
        <Form>
          {questions[currentQuestion].options.map((option, index) => (
            <Form.Check
              key={index}
              type="radio"
              id={`option${index}`}
              label={option}
              checked={selectedOption === option}
              onChange={() => handleOptionSelect(option)}
              disabled={showResult}
            />
          ))}
        </Form>
        {showResult && (
          <p>{isAnswerCorrect ? 'Odpowiedź poprawna!' : `Odpowiedź niepoprawna. Poprawna odpowiedź to: ${questions[currentQuestion].correctAnswer}`}</p>
        )}
        <Button onClick={handleNextQuestion} disabled={!selectedOption || showResult}>
          {currentQuestion === questions.length - 1 ? 'Zakończ' : 'Następne pytanie'}
        </Button>
        {showResult && (
          <Button variant="secondary" onClick={handleNextButtonClick}>
            {currentQuestion === questions.length - 1 ? 'Zakończ quiz' : 'Następne pytanie'}
          </Button>
        )}
      </div>
    );
  };
  
  export default MultipleChoiceQuiz;
