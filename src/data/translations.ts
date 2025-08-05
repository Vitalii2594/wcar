import { Language } from "../types";

export const translations = {
  pl: {
    nav: {
      about: "O nas",
      services: "Usługi",
      pricing: "Cennik",
      inspection: "Kontrola",
      gallery: "Galeria",
      contact: "Kontakt",
    },
    hero: {
      title: "CLICKDRIVE",
      subtitle: "Profesjonalna pomoc w zakupie samochodu",
      description:
        "Znajdziemy dla Ciebie idealny samochód, przeprowadzimy szczegółową kontrolę techniczną i załatwimy wszystkie formalności. Zaufaj ekspertom!",
      cta: "Skontaktuj się z nami",
    },
    about: {
      title: "O nas",
      description:
        "Jesteśmy pasjonatami motoryzacji, którzy pomagają znaleźć idealny samochód dla każdego klienta.",
      cards: {
        teamTitle: "Doświadczony zespół",
        teamDesc:
          "Specjaliści z wieloletnim doświadczeniem w branży motoryzacyjnej",
        qualityTitle: "Profesjonalne podejście",
        qualityDesc:
          "Każdy samochód sprawdzamy z najwyższą starannością i precyzją",
        safetyTitle: "Gwarancja bezpieczeństwa",
        safetyDesc:
          "Kompleksowa weryfikacja techniczna i dokumentacyjna pojazdu",
      },
    },
    services: {
      title: "Nasze usługi",
      purchase: {
        title: "Zakup",
        price: "od 1350 zł",
        features: [
          "Wyszukiwanie najlepszych ofert na rynku",
          "Dojazd na miejsce",
          "Przeprowadzenie ekspertyzy wizualnej i technicznej pojazdu",
          "Jazda próbna",
          "Negocjacja ceny, podpisanie umowy",
        ],
      },
      registration: {
        title: "Rejestracja",
        price: "od 500 zł",
        features: [
          "Rejestracja w urzędzie",
          "Zakup, przedłużenie polisy OC i AC",
          "Przegląd techniczny",
          "Podatek PCC-3",
        ],
      },
      sale: {
        title: "Sprzedaż",
        price: "od 800 zł",
        features: [
          "Prace przygotowawcze: czyszczenie, mycie, robienie zdjęć",
          "Umieszczenie ogłoszeń na otomoto i olx",
          "Organizacja oględzin dla zainteresowanych",
          "Podpisanie umowy i sprzedaż",
        ],
      },
    },
    pricing: {
      title: "Cennik",
      popularLabel: "Popularny",
      disclaimer:
        "*Opłata za dojazd wynosi 1,5 zł za każdy przejechany kilometr. Opłaty rejestracyjne, ubezpieczenie, przegląd, serwis oraz inne wydatki pokrywa klient. CLICKDRIVE podczas współpracy występuje wyłącznie w roli pośrednika i doradcy.",
      basic: {
        name: "Podstawowy",
        price: "1350 zł",
        features: [
          "Wyszukiwanie samochodu",
          "Oględziny trzech pojazdów",
          "Negocjacja ceny",
          "Zakup i weryfikacja dokumentów",
        ],
      },
      standard: {
        name: "Standard",
        price: "1900 zł",
        features: [
          "Wyszukiwanie samochodu",
          "Oględziny siedmiu pojazdów",
          "Negocjacja ceny",
          "Zakup i weryfikacja dokumentów",
          "Rejestracja w urzędzie",
          "Zakup polisy",
          "Service (olej, filtry i tak dalej)",
        ],
      },
      premium: {
        name: "Premium",
        price: "2200 zł",
        features: [
          "Wyszukiwanie samochodu",
          "Oględziny dwunastu pojazdów",
          "Negocjacja ceny",
          "Zakup i weryfikacja dokumentów",
          "Rejestracja w urzędzie",
          "Zakup polisy",
          "Service (olej, filtry i tak dalej)",
          "Opłata skarbowa",
          "Czyszczenie wnętrza i mycie",
        ],
      },
    },
    inspection: {
      title: "Jak sprawdzamy samochód?",
      subtitle:
        "Sprawdzamy wiarygodność przebiegu auta, jego historii, pomiar lakieru, karoserii, szyb, opon, wnętrza, stan silnika, sprawdzenie komputerem diagnostycznym oraz od spodu na kanale",
      steps: [
        {
          number: "1",
          title: "Weryfikacja ogłoszenia",
          description:
            "Sprawdzamy wiarygodność informacji umieszczonych w ogłoszeniu. Łatwo można zostać ofiarą oszustów. Są też komisy lub salony samochodowe, oferta których nie warta uwag",
        },
        {
          number: "2",
          title: "Kontakt z sprzedawcą i wyjazd na miejsce",
          description:
            "Czasami wystarczy 2-3 zdania aby wiedzieć czy samochód wart uwagi czy nie. Jest to bardzo ważny aspekt",
        },
        {
          number: "3",
          title:
            "Szczegółowa kontrola pojazdu w raz ze zdjęciami i rozmową telefoniczną",
          description:
            "Sprawdzanie samochodu krok po kroku, jazda testowa, wysyłka zdjęć i nagrań do klienta. Na zakończenie rozmowa telefoniczna z podsumowaniem inspekcji.",
        },
        {
          number: "4",
          title: "Negocjacja cenowa i warunków zakupu",
          description:
            "Na życzenie klienta ustalamy szczegóły transakcji, sprawdzamy dokumenty pojazdy i negocjujemy warunki.",
        },
      ],
    },
    checkItems: {
      title: "Co sprawdzamy",
      items: [
        {
          title: "Sprawdzenie historii",
          description:
            "Książki serwisowe, raporty, historia pojazdu, carfax i inne źródła pozyskania informacji o pojeździe",
          icon: "FileText",
        },
        {
          title: "Karoseria",
          description:
            "Pomiar lakieru, sprawdzenie szczelin, szyb, data produkcji poszczególnych elementów.",
          icon: "Car",
        },
        {
          title: "Stan techniczny",
          description:
            "Praca silnika, wycieki i inne usterki, które mogą doprowadzić do wydatków",
          icon: "Settings",
        },
        {
          title: "Elektronika",
          description:
            "Podpięcie profesjonalnego komputera dla odczytu błędów poszczególnych modułów pojazdu.",
          icon: "Cpu",
        },
        {
          title: "Jazda testowa",
          description:
            "Sprawdzenie stanu w trakcie jazdy, przyśpieszenie, hamowanie i układ kierowniczy.",
          icon: "Gauge",
        },
        {
          title: "Dokumentacja",
          description:
            "Umowa od Niemca, brak opłaconej akcyzy, nieopłacone ubezpieczenie i wiele innych rzeczy, które mogą powodować problemy",
          icon: "FileCheck",
        },
      ],
    },
    gallery: {
      title: "Galeria",
    },
    // contact: {
    //   title: "Kontakt",
    //   subtitle: "Skontaktuj się z nami już dziś",
    //   phone: "Telefon",
    //   email: "Email",
    //   telegram: "Telegram",
    //   social: "Śledź nas",
    // },
    contact: {
      title: "Skontaktuj się z nami",
      subtitle: "Jesteśmy tu, by pomóc Ci znaleźć idealne auto.",
    },
    cta: {
      title: "Gotowy na zakup?",
      description:
        "Skontaktuj się z nami już dziś i pozwól nam pomóc Ci znaleźć idealny samochód. Nasze doświadczenie i profesjonalizm gwarantują bezpieczny zakup.",
      buttons: {
        call: "Zadzwoń teraz",
        email: "Napisz email",
        telegram: "Telegram",
        viber: "Viber",
        whatsapp: "WhatsApp",
      },
    },
    footer: {
      copyright: "© {year} CLICKDRIVE. Wszelkie prawa zastrzeżone.",
      partnerText: "Twój partner w zakupie samochodu",
    },
  },
  uk: {
    nav: {
      about: "Про нас",
      services: "Послуги",
      pricing: "Ціни",
      inspection: "Контроль",
      gallery: "Галерея",
      contact: "Контакти",
    },
    hero: {
      title: "CLICKDRIVE",
      subtitle: "Професійна допомога у купівлі автомобіля",
      description:
        "Знайдемо для вас ідеальний автомобіль, проведемо детальну технічну перевірку та оформимо всі формальності. Довіртеся експертам!",
      cta: "Зв'яжіться з нами",
    },
    about: {
      title: "Про нас",
      description:
        "Ми — автолюбителі, які допомагають кожному знайти ідеальне авто.",
      cards: {
        teamTitle: "Досвідчена команда",
        teamDesc: "Фахівці з багаторічним досвідом у сфері автомобілів",
        qualityTitle: "Професійний підхід",
        qualityDesc:
          "Кожен автомобіль перевіряємо з максимальною точністю та турботою",
        safetyTitle: "Гарантія безпеки",
        safetyDesc: "Комплексна технічна та документальна перевірка авто",
      },
    },

    services: {
      title: "Наші послуги",
      purchase: {
        title: "Покупка",
        price: "від 1350 zł",
        features: [
          "Пошук найкращих пропозицій на ринку",
          "Поїздка на місце",
          "Проведення візуальної та технічної експертизи транспортного засобу",
          "Тест-драйв",
          "Переговори про ціну, підписання договору",
        ],
      },
      registration: {
        title: "Реєстрація",
        price: "від 500 zł",
        features: [
          "Реєстрація в уряді",
          "Купівля, продовження поліса OC і AC",
          "Технічний огляд",
          "Податок PCC-3",
        ],
      },
      sale: {
        title: "Продаж",
        price: "від 800 zł",
        features: [
          "Підготовчі роботи: чистка, миття, фотографування",
          "Розміщення оголошень на otomoto і olx",
          "Організація оглядів для зацікавлених",
          "Підписання договору та продаж",
        ],
      },
    },
    pricing: {
      title: "Прайс-лист",
      popularLabel: "Популярний вибір",
      disclaimer:
        "Плата за проїзд становить 1,5 злотого за кожен пройдений кілометр. Реєстраційні збори, страхування, техогляд, обслуговування та інші витрати покриває клієнт. CLICKDRIVE під час співпраці виступає виключно в ролі посередника та консультанта.",

      basic: {
        name: "Базовий",
        price: "1350 zł",
        features: [
          "Пошук автомобіля",
          "Огляд трьох транспортних засобів",
          "Переговори про ціну",
          "Купівля та перевірка документів",
        ],
      },
      standard: {
        name: "Стандарт",
        price: "1900 zł",
        features: [
          "Пошук автомобіля",
          "Огляд семи транспортних засобів",
          "Переговори про ціну",
          "Купівля та перевірка документів",
          "Реєстрація в уряді",
          "Купівля поліса",
          "Сервіс (масло, фільтри тощо)",
        ],
      },
      premium: {
        name: "Преміум",
        price: "2200 zł",
        features: [
          "Пошук автомобіля",
          "Огляд дванадцяти транспортних засобів",
          "Переговори про ціну",
          "Купівля та перевірка документів",
          "Реєстрація в уряді",
          "Купівля поліса",
          "Сервіс (масло, фільтри тощо)",
          "Скарбовий збір",
          "Чистка салону та миття",
        ],
      },
    },
    inspection: {
      title: "Як ми перевіряємо автомобіль?",
      subtitle:
        "Перевіряємо достовірність пробігу авто, його історії, вимірювання лакофарбового покриття, кузова, скла, шин, салону, стан двигуна, перевірка комп'ютерною діагностикою та знизу на каналі",
      steps: [
        {
          number: "1",
          title: "Верифікація оголошення",
          description:
            "Перевіряємо достовірність інформації, розміщеної в оголошенні. Легко можна стати жертвою шахраїв. Є також комісії або автосалони, пропозиція яких не варта уваги",
        },
        {
          number: "2",
          title: "Контакт з продавцем та поїздка на місце",
          description:
            "Іноді достатньо 2-3 речень, щоб знати, чи варта автівка уваги чи ні. Це дуже важливий аспект",
        },
        {
          number: "3",
          title:
            "Детальна перевірка транспортного засобу разом з фотографіями та телефонною розмовою",
          description:
            "Перевірка автомобіля крок за кроком, тест-драйв, відправка фотографій та відео клієнту. В кінці телефонна розмова з підсумком інспекції.",
        },
        {
          number: "4",
          title: "Переговори про ціну та умови купівлі",
          description:
            "За бажанням клієнта встановлюємо деталі транзакції, перевіряємо документи транспортного засобу та ведемо переговори щодо умов.",
        },
      ],
    },
    checkItems: {
      title: "Що ми перевіряємо",
      items: [
        {
          title: "Перевірка історії",
          description:
            "Сервісні книжки, звіти, історія транспортного засобу, carfax та інші джерела отримання інформації про транспортний засіб",
          icon: "FileText",
        },
        {
          title: "Кузов",
          description:
            "Вимірювання лакофарбового покриття, перевірка зазорів, скла, дата виробництва окремих елементів.",
          icon: "Car",
        },
        {
          title: "Технічний стан",
          description:
            "Робота двигуна, витоки та інші несправності, які можуть призвести до витрат",
          icon: "Settings",
        },
        {
          title: "Електроніка",
          description:
            "Підключення професійного комп'ютера для зчитування помилок окремих модулів транспортного засобу.",
          icon: "Cpu",
        },
        {
          title: "Тест-драйв",
          description:
            "Перевірка стану під час їзди, прискорення, гальмування та рульове управління.",
          icon: "Gauge",
        },
        {
          title: "Документація",
          description:
            "Договір з Німеччини, відсутність сплаченого акцизу, несплачене страхування та багато інших речей, які можуть спричинити проблеми",
          icon: "FileCheck",
        },
      ],
    },
    gallery: {
      title: "Галерея",
    },
    // contact: {
    //   title: "Контакти",
    //   subtitle: "Зв'яжіться з нами сьогодні",
    //   phone: "Телефон",
    //   email: "Електронна пошта",
    //   telegram: "Telegram",
    //   social: "Стежте за нами",
    // },
    contact: {
      title: "Зв'яжіться з нами",
      subtitle: "Ми тут, щоб допомогти вам знайти ідеальне авто.",
    },
    cta: {
      title: "Готові до покупки?",
      description:
        "Зв’яжіться з нами вже сьогодні, і ми допоможемо вам знайти ідеальний автомобіль. Наш досвід і професіоналізм гарантують безпечну покупку.",
      buttons: {
        call: "Зателефонуйте зараз",
        email: "Напишіть електронного листа",
        telegram: "Телеграм",
        viber: "Вайбер",
        whatsapp: "Вотсап",
      },
    },

    footer: {
      copyright: "© {year} CLICKDRIVE. Всі права захищені.",
      partnerText: "Ваш партнер у купівлі автомобіля",
    },
  },
  ru: {
    nav: {
      about: "О нас",
      services: "Услуги",
      pricing: "Цены",
      inspection: "Контроль",
      gallery: "Галерея",
      contact: "Контакты",
    },
    hero: {
      title: "CLICKDRIVE",
      subtitle: "Профессиональная помощь в покупке автомобиля",
      description:
        "Найдем для вас идеальный автомобиль, проведем детальную техническую проверку и оформим все формальности. Доверьтесь экспертам!",
      cta: "Свяжитесь с нами",
    },
    about: {
      title: "О нас",
      description:
        "Мы — автолюбители, которые помогают каждому найти идеальное авто.",
      cards: {
        teamTitle: "Опытная команда",
        teamDesc: "Специалисты с многолетним опытом в автомобильной сфере",
        qualityTitle: "Профессиональный подход",
        qualityDesc:
          "Каждый автомобиль проверяем с максимальной точностью и вниманием",
        safetyTitle: "Гарантия безопасности",
        safetyDesc: "Комплексная техническая и документальная проверка авто",
      },
    },

    services: {
      title: "Наши услуги",
      purchase: {
        title: "Покупка",
        price: "от 1350 zł",
        features: [
          "Поиск лучших предложений на рынке",
          "Поездка на место",
          "Проведение визуальной и технической экспертизы транспортного средства",
          "Тест-драйв",
          "Переговоры о цене, подписание договора",
        ],
      },
      registration: {
        title: "Регистрация",
        price: "от 500 zł",
        features: [
          "Регистрация в учреждении",
          "Покупка, продление полиса OC и AC",
          "Технический осмотр",
          "Налог PCC-3",
        ],
      },
      sale: {
        title: "Продажа",
        price: "от 800 zł",
        features: [
          "Подготовительные работы: чистка, мойка, фотографирование",
          "Размещение объявлений на otomoto и olx",
          "Организация осмотров для заинтересованных",
          "Подписание договора и продажа",
        ],
      },
    },
    pricing: {
      title: "Прайс-лист",
      popularLabel: "Популярный выбор",
      disclaimer:
        "*Плата за выезд составляет 1,5 злотых за каждый пройденный километр. Регистрационные сборы, страховка, техосмотр, обслуживание и другие расходы оплачиваются клиентом. CLICKDRIVE в процессе сотрудничества выступает исключительно в роли посредника и консультанта.",
      basic: {
        name: "Базовый",
        price: "1350 zł",
        features: [
          "Поиск автомобиля",
          "Осмотр трех транспортных средств",
          "Переговоры о цене",
          "Покупка и верификация документов",
        ],
      },
      standard: {
        name: "Стандарт",
        price: "1900 zł",
        features: [
          "Поиск автомобиля",
          "Осмотр семи транспортных средств",
          "Переговоры о цене",
          "Покупка и верификация документов",
          "Регистрация в учреждении",
          "Покупка полиса",
          "Сервис (масло, фильтры и так далее)",
        ],
      },
      premium: {
        name: "Премиум",
        price: "2200 zł",
        features: [
          "Поиск автомобиля",
          "Осмотр двенадцати транспортных средств",
          "Переговоры о цене",
          "Покупка и верификация документов",
          "Регистрация в учреждении",
          "Покупка полиса",
          "Сервис (масло, фильтры и так далее)",
          "Государственная пошлина",
          "Чистка салона и мойка",
        ],
      },
    },
    inspection: {
      title: "Как мы проверяем автомобиль?",
      subtitle:
        "Проверяем достоверность пробега авто, его истории, измерение лакокрасочного покрытия, кузова, стекол, шин, салона, состояние двигателя, проверка компьютерной диагностикой и снизу на канале",
      steps: [
        {
          number: "1",
          title: "Верификация объявления",
          description:
            "Проверяем достоверность информации, размещенной в объявлении. Легко можно стать жертвой мошенников. Есть также комиссии или автосалоны, предложение которых не стоит внимания",
        },
        {
          number: "2",
          title: "Контакт с продавцом и поездка на место",
          description:
            "Иногда достаточно 2-3 предложений, чтобы знать, стоит ли автомобиль внимания или нет. Это очень важный аспект",
        },
        {
          number: "3",
          title:
            "Детальная проверка транспортного средства вместе с фотографиями и телефонным разговором",
          description:
            "Проверка автомобиля шаг за шагом, тест-драйв, отправка фотографий и видео клиенту. В конце телефонный разговор с подведением итогов инспекции.",
        },
        {
          number: "4",
          title: "Переговоры о цене и условиях покупки",
          description:
            "По желанию клиента устанавливаем детали транзакции, проверяем документы транспортного средства и ведем переговоры об условиях.",
        },
      ],
    },
    checkItems: {
      title: "Что мы проверяем",
      items: [
        {
          title: "Проверка истории",
          description:
            "Сервисные книжки, отчеты, история транспортного средства, carfax и другие источники получения информации о транспортном средстве",
          icon: "FileText",
        },
        {
          title: "Кузов",
          description:
            "Измерение лакокрасочного покрытия, проверка зазоров, стекол, дата производства отдельных элементов.",
          icon: "Car",
        },
        {
          title: "Техническое состояние",
          description:
            "Работа двигателя, утечки и другие неисправности, которые могут привести к расходам",
          icon: "Settings",
        },
        {
          title: "Электроника",
          description:
            "Подключение профессионального компьютера для считывания ошибок отдельных модулей транспортного средства.",
          icon: "Cpu",
        },
        {
          title: "Тест-драйв",
          description:
            "Проверка состояния во время езды, ускорение, торможение и рулевое управление.",
          icon: "Gauge",
        },
        {
          title: "Документация",
          description:
            "Договор из Германии, отсутствие уплаченного акциза, неоплаченное страхование и многие другие вещи, которые могут вызвать проблемы",
          icon: "FileCheck",
        },
      ],
    },
    gallery: {
      title: "Галерея",
    },
    // contact: {
    //   title: "Контакты",
    //   subtitle: "Свяжитесь с нами сегодня",
    //   phone: "Телефон",
    //   email: "Электронная почта",
    //   telegram: "Telegram",
    //   social: "Следите за нами",
    // },
    contact: {
      title: "Свяжитесь с нами",
      subtitle: "Мы здесь, чтобы помочь вам найти идеальный автомобиль.",
    },
    cta: {
      title: "Готовы к покупке?",
      description:
        "Свяжитесь с нами уже сегодня, и мы поможем вам найти идеальный автомобиль. Наш опыт и профессионализм гарантируют безопасную покупку.",
      buttons: {
        call: "Позвонить сейчас",
        email: "Написать письмо",
        telegram: "Телеграм",
        viber: "Вайбер",
        whatsapp: "Вотсап",
      },
    },
    footer: {
      copyright: "© {year} CLICKDRIVE. Все права защищены.",
      partnerText: "Ваш партнёр в покупке автомобиля",
    },
  },
};
