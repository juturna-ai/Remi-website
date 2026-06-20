// Translation dictionaries for the Remi marketing site.
// Keys are shared across all languages; LanguageProvider.t() resolves them.
// `flag` is a path to a local PNG in /public/flags (emoji flags don't render on
// Windows/Chrome). Spanish uses the Mexican flag per request.

export const LANGS = [
  { code: "en", label: "English", flag: "/flags/gb.png" },
  { code: "es", label: "Español", flag: "/flags/mx.png" },
  { code: "it", label: "Italiano", flag: "/flags/it.png" },
  { code: "fr", label: "Français", flag: "/flags/fr.png" },
  { code: "pt", label: "Português", flag: "/flags/pt.png" },
] as const;

export type LangCode = (typeof LANGS)[number]["code"];

export const DEFAULT_LANG: LangCode = "en";

// A feature entry on the About page.
type Feature = { title: string; body: string };

export type Dictionary = {
  nav: { home: string; about: string; contact: string };
  footer: { home: string; about: string; privacy: string; contact: string; poweredBy: string };
  home: { tagline: string };
  about: {
    eyebrow: string;
    title: string;
    sub: string;
    features: Feature[];
    ctaTitle: string;
    ctaBody: string;
    getAndroid: string;
    privacy: string;
  };
  privacy: {
    title: string;
    updated: string;
    intro: string;
    introStrong: string;
    collectTitle: string;
    collectBody1: string;
    collectBody2: string;
    collectItems: string[];
    collectBody3: string;
    useTitle: string;
    useBody: string;
    notifTitle: string;
    notifBody: string;
    permTitle: string;
    permIntro: string;
    permItems: { label: string; body: string }[];
    thirdTitle: string;
    thirdBody: string;
    childrenTitle: string;
    childrenBody: string;
    retentionTitle: string;
    retentionBody: string;
    changesTitle: string;
    changesBody: string;
    contactTitle: string;
    contactBody: string;
  };
};

const en: Dictionary = {
  nav: { home: "Home", about: "About", contact: "Contact" },
  footer: { home: "Home", about: "About", privacy: "Privacy", contact: "Contact", poweredBy: "Powered by" },
  home: { tagline: "the reminder app" },
  about: {
    eyebrow: "About Remi",
    title: "Reminders & notes, kept simple.",
    sub: "Remi is a clean, private reminder app that does exactly what you need — and nothing you don't. No account, no clutter, no internet required. Everything stays on your device.",
    features: [
      {
        title: "Reminders that actually fire",
        body: "Set a date and time and Remi schedules an exact alarm on your device — it goes off when you said, even if the app is closed or your phone is offline.",
      },
      {
        title: "Tasks & events, organized",
        body: "Give each one a title, date, time, category, and color. Add notes when you need them. Everything stays sorted and easy to scan at a glance.",
      },
      {
        title: "Notes alongside your reminders",
        body: "Jot down anything that doesn't need a time attached. Your notes live right next to your tasks, so nothing gets lost between apps.",
      },
      {
        title: "Yours, and only yours",
        body: "No account, no login, no sign-up. Everything you create is stored locally on your device and never leaves it — Remi makes no network calls at all.",
      },
      {
        title: "Make it your own",
        body: "Choose from 6 themes, set a profile name and handle, and pick your own notification sound. Small touches that make the app feel like yours.",
      },
      {
        title: "Quiet by design",
        body: "No ads, no tracking, no analytics, no third-party SDKs. Remi does one job well and stays out of your way the rest of the time.",
      },
    ],
    ctaTitle: "Simple, on purpose.",
    ctaBody: "Most reminder apps grow until they need a manual. Remi goes the other way — every feature earns its place, and the ones that don't never ship. The result is an app you open, use, and close without a second thought.",
    getAndroid: "Get it on Android",
    privacy: "Privacy Policy",
  },
  privacy: {
    title: "Privacy Policy for Remi",
    updated: "Last updated: June 20, 2026",
    intro: "Remi (“the app”, “we”, “us”) is a personal reminder and notes application. This policy explains what information the app handles and how. The short version: ",
    introStrong: "Remi keeps all of your information on your own device and does not send it anywhere.",
    collectTitle: "Information we collect",
    collectBody1: "Remi does not collect, transmit, sell, or share any personal information. The app has no user accounts, no login, and makes no network connections to our servers or to any third party.",
    collectBody2: "The content you create in the app — including:",
    collectItems: [
      "tasks and events (titles, dates, times, categories, notes, colors, reminder settings);",
      "notes;",
      "your profile name, handle, and chosen notification sound and theme;",
    ],
    collectBody3: "is stored only locally on your device using your device's standard app storage. We have no access to it, and it never leaves your phone unless you choose to back up your device through your own operating system or device-backup settings.",
    useTitle: "How your information is used",
    useBody: "The information you enter is used solely to provide the app's features — showing your tasks and notes, and scheduling the local reminder notifications you set. All of this happens on your device.",
    notifTitle: "Notifications",
    notifBody: "Remi schedules local notifications on your device to remind you of your tasks. These notifications are generated entirely on your device. No notification content is sent to us or to any external server. The app does not use push notifications.",
    permTitle: "Permissions",
    permIntro: "Remi requests only the permissions needed for its reminder features:",
    permItems: [
      { label: "Notifications", body: "to display your reminders." },
      { label: "Alarms & reminders (exact alarms)", body: "so reminders fire at the exact time you set, even when the app is closed." },
      { label: "Audio settings / playback", body: "to play your chosen notification sound and to let you preview sounds in settings. Remi does not record audio and does not request microphone access." },
    ],
    thirdTitle: "Third-party services",
    thirdBody: "Remi does not include any third-party analytics, advertising, tracking, or crash-reporting services. No third-party SDKs receive your data.",
    childrenTitle: "Children's privacy",
    childrenBody: "Remi does not knowingly collect any information from anyone, including children. Because the app collects no data at all, no personal information from children is gathered or stored on our systems.",
    retentionTitle: "Data retention and deletion",
    retentionBody: "Because your data is stored only on your device, you remain in control of it at all times. You can delete your tasks and notes within the app, and uninstalling the app removes all of its locally stored data from your device.",
    changesTitle: "Changes to this policy",
    changesBody: "If Remi adds features in the future that change how information is handled (for example, an optional account or cloud sync), this policy will be updated and the “Last updated” date above will change.",
    contactTitle: "Contact",
    contactBody: "If you have any questions about this privacy policy, contact us at",
  },
};

const es: Dictionary = {
  nav: { home: "Inicio", about: "Acerca de", contact: "Contacto" },
  footer: { home: "Inicio", about: "Acerca de", privacy: "Privacidad", contact: "Contacto", poweredBy: "Desarrollado por" },
  home: { tagline: "la app de recordatorios" },
  about: {
    eyebrow: "Acerca de Remi",
    title: "Recordatorios y notas, sencillos.",
    sub: "Remi es una app de recordatorios limpia y privada que hace exactamente lo que necesitas, y nada de lo que no. Sin cuenta, sin desorden, sin necesidad de internet. Todo se queda en tu dispositivo.",
    features: [
      {
        title: "Recordatorios que de verdad suenan",
        body: "Pon una fecha y una hora y Remi programa una alarma exacta en tu dispositivo: suena cuando lo indicaste, aunque la app esté cerrada o tu teléfono sin conexión.",
      },
      {
        title: "Tareas y eventos, organizados",
        body: "Dale a cada uno un título, fecha, hora, categoría y color. Añade notas cuando las necesites. Todo se mantiene ordenado y fácil de revisar de un vistazo.",
      },
      {
        title: "Notas junto a tus recordatorios",
        body: "Apunta cualquier cosa que no necesite una hora. Tus notas viven justo al lado de tus tareas, así nada se pierde entre apps.",
      },
      {
        title: "Tuyo, y solo tuyo",
        body: "Sin cuenta, sin inicio de sesión, sin registro. Todo lo que creas se guarda localmente en tu dispositivo y nunca lo abandona: Remi no hace ninguna llamada de red.",
      },
      {
        title: "Hazlo tuyo",
        body: "Elige entre 6 temas, configura un nombre de perfil y un usuario, y escoge tu propio sonido de notificación. Pequeños detalles que hacen que la app se sienta tuya.",
      },
      {
        title: "Silencioso por diseño",
        body: "Sin anuncios, sin rastreo, sin analíticas, sin SDK de terceros. Remi hace bien una sola cosa y se mantiene fuera de tu camino el resto del tiempo.",
      },
    ],
    ctaTitle: "Sencillo, a propósito.",
    ctaBody: "La mayoría de las apps de recordatorios crecen hasta necesitar un manual. Remi va al revés: cada función se gana su lugar, y las que no, nunca se publican. El resultado es una app que abres, usas y cierras sin pensarlo dos veces.",
    getAndroid: "Descárgala en Android",
    privacy: "Política de privacidad",
  },
  privacy: {
    title: "Política de privacidad de Remi",
    updated: "Última actualización: 20 de junio de 2026",
    intro: "Remi (“la app”, “nosotros”) es una aplicación personal de recordatorios y notas. Esta política explica qué información gestiona la app y cómo. En resumen: ",
    introStrong: "Remi mantiene toda tu información en tu propio dispositivo y no la envía a ningún lugar.",
    collectTitle: "Información que recopilamos",
    collectBody1: "Remi no recopila, transmite, vende ni comparte ninguna información personal. La app no tiene cuentas de usuario, ni inicio de sesión, y no realiza ninguna conexión de red con nuestros servidores ni con terceros.",
    collectBody2: "El contenido que creas en la app —incluyendo:",
    collectItems: [
      "tareas y eventos (títulos, fechas, horas, categorías, notas, colores, ajustes de recordatorio);",
      "notas;",
      "tu nombre de perfil, usuario, y el sonido de notificación y tema elegidos;",
    ],
    collectBody3: "se almacena únicamente de forma local en tu dispositivo usando el almacenamiento estándar de apps. No tenemos acceso a él, y nunca sale de tu teléfono a menos que decidas hacer una copia de seguridad de tu dispositivo a través de tu propio sistema operativo o ajustes de copia.",
    useTitle: "Cómo se usa tu información",
    useBody: "La información que introduces se usa únicamente para ofrecer las funciones de la app: mostrar tus tareas y notas, y programar las notificaciones locales de recordatorio que configures. Todo esto ocurre en tu dispositivo.",
    notifTitle: "Notificaciones",
    notifBody: "Remi programa notificaciones locales en tu dispositivo para recordarte tus tareas. Estas notificaciones se generan por completo en tu dispositivo. Ningún contenido de notificación se envía a nosotros ni a ningún servidor externo. La app no usa notificaciones push.",
    permTitle: "Permisos",
    permIntro: "Remi solicita únicamente los permisos necesarios para sus funciones de recordatorio:",
    permItems: [
      { label: "Notificaciones", body: "para mostrar tus recordatorios." },
      { label: "Alarmas y recordatorios (alarmas exactas)", body: "para que los recordatorios suenen a la hora exacta que configures, incluso con la app cerrada." },
      { label: "Ajustes de audio / reproducción", body: "para reproducir tu sonido de notificación elegido y permitirte previsualizar sonidos en ajustes. Remi no graba audio y no solicita acceso al micrófono." },
    ],
    thirdTitle: "Servicios de terceros",
    thirdBody: "Remi no incluye analíticas, publicidad, rastreo ni servicios de informes de errores de terceros. Ningún SDK de terceros recibe tus datos.",
    childrenTitle: "Privacidad de los menores",
    childrenBody: "Remi no recopila a sabiendas ninguna información de nadie, incluidos los menores. Como la app no recopila datos en absoluto, no se recoge ni almacena información personal de menores en nuestros sistemas.",
    retentionTitle: "Conservación y eliminación de datos",
    retentionBody: "Como tus datos se almacenan solo en tu dispositivo, mantienes el control de ellos en todo momento. Puedes eliminar tus tareas y notas dentro de la app, y desinstalar la app elimina todos sus datos almacenados localmente en tu dispositivo.",
    changesTitle: "Cambios en esta política",
    changesBody: "Si Remi añade funciones en el futuro que cambien cómo se gestiona la información (por ejemplo, una cuenta opcional o sincronización en la nube), esta política se actualizará y la fecha de “Última actualización” de arriba cambiará.",
    contactTitle: "Contacto",
    contactBody: "Si tienes alguna pregunta sobre esta política de privacidad, contáctanos en",
  },
};

const it: Dictionary = {
  nav: { home: "Home", about: "Info", contact: "Contatti" },
  footer: { home: "Home", about: "Info", privacy: "Privacy", contact: "Contatti", poweredBy: "Realizzato da" },
  home: { tagline: "l'app dei promemoria" },
  about: {
    eyebrow: "Info su Remi",
    title: "Promemoria e note, semplici.",
    sub: "Remi è un'app per promemoria pulita e privata che fa esattamente ciò che ti serve, e niente di ciò che non ti serve. Nessun account, nessun disordine, nessun bisogno di internet. Tutto resta sul tuo dispositivo.",
    features: [
      {
        title: "Promemoria che suonano davvero",
        body: "Imposta data e ora e Remi programma una sveglia esatta sul tuo dispositivo: suona quando hai detto, anche se l'app è chiusa o il telefono è offline.",
      },
      {
        title: "Attività ed eventi, organizzati",
        body: "Dai a ciascuno un titolo, data, ora, categoria e colore. Aggiungi note quando ti servono. Tutto resta ordinato e facile da consultare con un'occhiata.",
      },
      {
        title: "Note accanto ai tuoi promemoria",
        body: "Annota tutto ciò che non ha bisogno di un orario. Le tue note vivono proprio accanto alle tue attività, così niente si perde tra le app.",
      },
      {
        title: "Tuo, e solo tuo",
        body: "Nessun account, nessun login, nessuna registrazione. Tutto ciò che crei è salvato localmente sul tuo dispositivo e non lo lascia mai: Remi non effettua alcuna chiamata di rete.",
      },
      {
        title: "Rendilo tuo",
        body: "Scegli tra 6 temi, imposta un nome profilo e un handle, e seleziona il tuo suono di notifica. Piccoli tocchi che rendono l'app davvero tua.",
      },
      {
        title: "Silenzioso per scelta",
        body: "Niente pubblicità, niente tracciamento, niente analisi, niente SDK di terze parti. Remi fa bene una cosa sola e per il resto resta fuori dai piedi.",
      },
    ],
    ctaTitle: "Semplice, di proposito.",
    ctaBody: "La maggior parte delle app di promemoria cresce finché non serve un manuale. Remi va nella direzione opposta: ogni funzione si guadagna il suo posto, e quelle che non lo fanno non vengono mai pubblicate. Il risultato è un'app che apri, usi e chiudi senza pensarci due volte.",
    getAndroid: "Scaricala su Android",
    privacy: "Informativa sulla privacy",
  },
  privacy: {
    title: "Informativa sulla privacy di Remi",
    updated: "Ultimo aggiornamento: 20 giugno 2026",
    intro: "Remi (“l'app”, “noi”) è un'applicazione personale di promemoria e note. Questa informativa spiega quali informazioni gestisce l'app e come. In breve: ",
    introStrong: "Remi mantiene tutte le tue informazioni sul tuo dispositivo e non le invia da nessuna parte.",
    collectTitle: "Informazioni che raccogliamo",
    collectBody1: "Remi non raccoglie, trasmette, vende o condivide alcuna informazione personale. L'app non ha account utente, né login, e non effettua connessioni di rete ai nostri server o a terze parti.",
    collectBody2: "I contenuti che crei nell'app — inclusi:",
    collectItems: [
      "attività ed eventi (titoli, date, orari, categorie, note, colori, impostazioni dei promemoria);",
      "note;",
      "il tuo nome profilo, handle, e il suono di notifica e il tema scelti;",
    ],
    collectBody3: "sono memorizzati solo localmente sul tuo dispositivo usando l'archiviazione standard delle app. Non vi abbiamo accesso, e non lasciano mai il tuo telefono a meno che tu non scelga di fare un backup del dispositivo tramite il tuo sistema operativo o le impostazioni di backup.",
    useTitle: "Come vengono usate le tue informazioni",
    useBody: "Le informazioni che inserisci sono usate esclusivamente per fornire le funzioni dell'app: mostrare le tue attività e note, e programmare le notifiche locali di promemoria che imposti. Tutto questo avviene sul tuo dispositivo.",
    notifTitle: "Notifiche",
    notifBody: "Remi programma notifiche locali sul tuo dispositivo per ricordarti le tue attività. Queste notifiche sono generate interamente sul tuo dispositivo. Nessun contenuto delle notifiche viene inviato a noi o a server esterni. L'app non usa notifiche push.",
    permTitle: "Autorizzazioni",
    permIntro: "Remi richiede solo le autorizzazioni necessarie per le sue funzioni di promemoria:",
    permItems: [
      { label: "Notifiche", body: "per mostrare i tuoi promemoria." },
      { label: "Sveglie e promemoria (sveglie esatte)", body: "affinché i promemoria suonino all'ora esatta che imposti, anche quando l'app è chiusa." },
      { label: "Impostazioni audio / riproduzione", body: "per riprodurre il suono di notifica scelto e farti ascoltare le anteprime nelle impostazioni. Remi non registra audio e non richiede l'accesso al microfono." },
    ],
    thirdTitle: "Servizi di terze parti",
    thirdBody: "Remi non include analisi, pubblicità, tracciamento o servizi di segnalazione crash di terze parti. Nessun SDK di terze parti riceve i tuoi dati.",
    childrenTitle: "Privacy dei minori",
    childrenBody: "Remi non raccoglie consapevolmente alcuna informazione da nessuno, inclusi i minori. Poiché l'app non raccoglie alcun dato, nessuna informazione personale dei minori viene raccolta o memorizzata sui nostri sistemi.",
    retentionTitle: "Conservazione ed eliminazione dei dati",
    retentionBody: "Poiché i tuoi dati sono memorizzati solo sul tuo dispositivo, ne mantieni il controllo in ogni momento. Puoi eliminare le tue attività e note dall'app, e disinstallare l'app rimuove tutti i suoi dati memorizzati localmente sul tuo dispositivo.",
    changesTitle: "Modifiche a questa informativa",
    changesBody: "Se Remi aggiungerà in futuro funzioni che cambiano il modo in cui le informazioni vengono gestite (ad esempio un account opzionale o la sincronizzazione cloud), questa informativa verrà aggiornata e la data di “Ultimo aggiornamento” qui sopra cambierà.",
    contactTitle: "Contatti",
    contactBody: "Per qualsiasi domanda su questa informativa sulla privacy, contattaci a",
  },
};

const fr: Dictionary = {
  nav: { home: "Accueil", about: "À propos", contact: "Contact" },
  footer: { home: "Accueil", about: "À propos", privacy: "Confidentialité", contact: "Contact", poweredBy: "Propulsé par" },
  home: { tagline: "l'app de rappels" },
  about: {
    eyebrow: "À propos de Remi",
    title: "Rappels et notes, en toute simplicité.",
    sub: "Remi est une app de rappels épurée et privée qui fait exactement ce dont vous avez besoin, et rien de ce dont vous n'avez pas besoin. Pas de compte, pas d'encombrement, pas besoin d'internet. Tout reste sur votre appareil.",
    features: [
      {
        title: "Des rappels qui se déclenchent vraiment",
        body: "Définissez une date et une heure, et Remi programme une alarme exacte sur votre appareil : elle se déclenche au moment voulu, même si l'app est fermée ou votre téléphone hors ligne.",
      },
      {
        title: "Tâches et événements, organisés",
        body: "Donnez à chacun un titre, une date, une heure, une catégorie et une couleur. Ajoutez des notes au besoin. Tout reste trié et facile à parcourir d'un coup d'œil.",
      },
      {
        title: "Des notes à côté de vos rappels",
        body: "Notez tout ce qui n'a pas besoin d'une heure. Vos notes vivent juste à côté de vos tâches, pour que rien ne se perde entre les apps.",
      },
      {
        title: "À vous, et à vous seul",
        body: "Pas de compte, pas de connexion, pas d'inscription. Tout ce que vous créez est stocké localement sur votre appareil et ne le quitte jamais : Remi ne fait aucun appel réseau.",
      },
      {
        title: "Personnalisez-la",
        body: "Choisissez parmi 6 thèmes, définissez un nom de profil et un identifiant, et sélectionnez votre propre son de notification. De petites touches qui rendent l'app vraiment vôtre.",
      },
      {
        title: "Discrète par conception",
        body: "Pas de pub, pas de suivi, pas d'analyse, pas de SDK tiers. Remi fait bien une seule chose et reste hors de votre chemin le reste du temps.",
      },
    ],
    ctaTitle: "Simple, volontairement.",
    ctaBody: "La plupart des apps de rappels grossissent jusqu'à nécessiter un manuel. Remi prend le chemin inverse : chaque fonction gagne sa place, et celles qui ne le font pas ne sortent jamais. Le résultat est une app que vous ouvrez, utilisez et fermez sans y réfléchir à deux fois.",
    getAndroid: "Télécharger sur Android",
    privacy: "Politique de confidentialité",
  },
  privacy: {
    title: "Politique de confidentialité de Remi",
    updated: "Dernière mise à jour : 20 juin 2026",
    intro: "Remi (“l'app”, “nous”) est une application personnelle de rappels et de notes. Cette politique explique quelles informations l'app traite et comment. En résumé : ",
    introStrong: "Remi conserve toutes vos informations sur votre propre appareil et ne les envoie nulle part.",
    collectTitle: "Informations que nous collectons",
    collectBody1: "Remi ne collecte, ne transmet, ne vend ni ne partage aucune information personnelle. L'app n'a pas de comptes utilisateur, pas de connexion, et n'établit aucune connexion réseau vers nos serveurs ou des tiers.",
    collectBody2: "Le contenu que vous créez dans l'app — y compris :",
    collectItems: [
      "tâches et événements (titres, dates, heures, catégories, notes, couleurs, réglages de rappel) ;",
      "notes ;",
      "votre nom de profil, identifiant, ainsi que le son de notification et le thème choisis ;",
    ],
    collectBody3: "est stocké uniquement localement sur votre appareil via le stockage d'app standard. Nous n'y avons pas accès, et il ne quitte jamais votre téléphone, sauf si vous choisissez de sauvegarder votre appareil via votre propre système d'exploitation ou vos réglages de sauvegarde.",
    useTitle: "Comment vos informations sont utilisées",
    useBody: "Les informations que vous saisissez servent uniquement à fournir les fonctions de l'app : afficher vos tâches et notes, et programmer les notifications locales de rappel que vous définissez. Tout cela se passe sur votre appareil.",
    notifTitle: "Notifications",
    notifBody: "Remi programme des notifications locales sur votre appareil pour vous rappeler vos tâches. Ces notifications sont générées entièrement sur votre appareil. Aucun contenu de notification n'est envoyé à nous ou à un serveur externe. L'app n'utilise pas de notifications push.",
    permTitle: "Autorisations",
    permIntro: "Remi ne demande que les autorisations nécessaires à ses fonctions de rappel :",
    permItems: [
      { label: "Notifications", body: "pour afficher vos rappels." },
      { label: "Alarmes et rappels (alarmes exactes)", body: "pour que les rappels se déclenchent à l'heure exacte que vous définissez, même lorsque l'app est fermée." },
      { label: "Réglages audio / lecture", body: "pour jouer le son de notification choisi et vous laisser prévisualiser les sons dans les réglages. Remi n'enregistre pas d'audio et ne demande pas l'accès au microphone." },
    ],
    thirdTitle: "Services tiers",
    thirdBody: "Remi n'inclut aucun service tiers d'analyse, de publicité, de suivi ou de rapport de plantage. Aucun SDK tiers ne reçoit vos données.",
    childrenTitle: "Confidentialité des enfants",
    childrenBody: "Remi ne collecte sciemment aucune information de quiconque, y compris les enfants. Comme l'app ne collecte aucune donnée, aucune information personnelle d'enfant n'est recueillie ni stockée sur nos systèmes.",
    retentionTitle: "Conservation et suppression des données",
    retentionBody: "Comme vos données sont stockées uniquement sur votre appareil, vous en gardez le contrôle à tout moment. Vous pouvez supprimer vos tâches et notes dans l'app, et désinstaller l'app supprime toutes ses données stockées localement sur votre appareil.",
    changesTitle: "Modifications de cette politique",
    changesBody: "Si Remi ajoute à l'avenir des fonctions qui changent la façon dont les informations sont traitées (par exemple un compte optionnel ou une synchronisation cloud), cette politique sera mise à jour et la date de “Dernière mise à jour” ci-dessus changera.",
    contactTitle: "Contact",
    contactBody: "Si vous avez des questions sur cette politique de confidentialité, contactez-nous à",
  },
};

const pt: Dictionary = {
  nav: { home: "Início", about: "Sobre", contact: "Contato" },
  footer: { home: "Início", about: "Sobre", privacy: "Privacidade", contact: "Contato", poweredBy: "Desenvolvido por" },
  home: { tagline: "o app de lembretes" },
  about: {
    eyebrow: "Sobre o Remi",
    title: "Lembretes e notas, sem complicação.",
    sub: "O Remi é um app de lembretes limpo e privado que faz exatamente o que você precisa, e nada do que não precisa. Sem conta, sem bagunça, sem precisar de internet. Tudo fica no seu dispositivo.",
    features: [
      {
        title: "Lembretes que realmente disparam",
        body: "Defina uma data e hora e o Remi agenda um alarme exato no seu dispositivo: ele toca quando você marcou, mesmo com o app fechado ou o celular offline.",
      },
      {
        title: "Tarefas e eventos, organizados",
        body: "Dê a cada um um título, data, hora, categoria e cor. Adicione notas quando precisar. Tudo fica organizado e fácil de revisar de relance.",
      },
      {
        title: "Notas ao lado dos seus lembretes",
        body: "Anote qualquer coisa que não precise de um horário. Suas notas ficam logo ao lado das suas tarefas, então nada se perde entre apps.",
      },
      {
        title: "Seu, e só seu",
        body: "Sem conta, sem login, sem cadastro. Tudo o que você cria fica armazenado localmente no seu dispositivo e nunca sai dele: o Remi não faz nenhuma chamada de rede.",
      },
      {
        title: "Deixe do seu jeito",
        body: "Escolha entre 6 temas, defina um nome de perfil e um usuário, e selecione seu próprio som de notificação. Pequenos detalhes que fazem o app parecer seu.",
      },
      {
        title: "Silencioso por design",
        body: "Sem anúncios, sem rastreamento, sem análises, sem SDKs de terceiros. O Remi faz bem uma única coisa e fica fora do seu caminho no resto do tempo.",
      },
    ],
    ctaTitle: "Simples, de propósito.",
    ctaBody: "A maioria dos apps de lembretes cresce até precisar de um manual. O Remi vai pelo caminho oposto: cada recurso conquista seu lugar, e os que não conquistam nunca são lançados. O resultado é um app que você abre, usa e fecha sem pensar duas vezes.",
    getAndroid: "Baixe no Android",
    privacy: "Política de Privacidade",
  },
  privacy: {
    title: "Política de Privacidade do Remi",
    updated: "Última atualização: 20 de junho de 2026",
    intro: "O Remi (“o app”, “nós”) é um aplicativo pessoal de lembretes e notas. Esta política explica quais informações o app trata e como. Em resumo: ",
    introStrong: "O Remi mantém todas as suas informações no seu próprio dispositivo e não as envia para lugar nenhum.",
    collectTitle: "Informações que coletamos",
    collectBody1: "O Remi não coleta, transmite, vende nem compartilha nenhuma informação pessoal. O app não tem contas de usuário, nem login, e não faz nenhuma conexão de rede com nossos servidores ou com terceiros.",
    collectBody2: "O conteúdo que você cria no app — incluindo:",
    collectItems: [
      "tarefas e eventos (títulos, datas, horários, categorias, notas, cores, configurações de lembrete);",
      "notas;",
      "seu nome de perfil, usuário, e o som de notificação e tema escolhidos;",
    ],
    collectBody3: "é armazenado apenas localmente no seu dispositivo usando o armazenamento padrão de apps. Não temos acesso a ele, e ele nunca sai do seu celular, a menos que você opte por fazer um backup do dispositivo pelo seu próprio sistema operacional ou pelas configurações de backup.",
    useTitle: "Como suas informações são usadas",
    useBody: "As informações que você insere são usadas apenas para oferecer os recursos do app: mostrar suas tarefas e notas, e agendar as notificações locais de lembrete que você define. Tudo isso acontece no seu dispositivo.",
    notifTitle: "Notificações",
    notifBody: "O Remi agenda notificações locais no seu dispositivo para lembrá-lo das suas tarefas. Essas notificações são geradas inteiramente no seu dispositivo. Nenhum conteúdo de notificação é enviado para nós ou para qualquer servidor externo. O app não usa notificações push.",
    permTitle: "Permissões",
    permIntro: "O Remi solicita apenas as permissões necessárias para seus recursos de lembrete:",
    permItems: [
      { label: "Notificações", body: "para exibir seus lembretes." },
      { label: "Alarmes e lembretes (alarmes exatos)", body: "para que os lembretes disparem na hora exata que você definir, mesmo com o app fechado." },
      { label: "Configurações de áudio / reprodução", body: "para tocar o som de notificação escolhido e permitir que você pré-visualize sons nas configurações. O Remi não grava áudio e não solicita acesso ao microfone." },
    ],
    thirdTitle: "Serviços de terceiros",
    thirdBody: "O Remi não inclui nenhum serviço de análise, publicidade, rastreamento ou relatório de falhas de terceiros. Nenhum SDK de terceiros recebe seus dados.",
    childrenTitle: "Privacidade infantil",
    childrenBody: "O Remi não coleta intencionalmente nenhuma informação de ninguém, incluindo crianças. Como o app não coleta dados algum, nenhuma informação pessoal de crianças é coletada ou armazenada em nossos sistemas.",
    retentionTitle: "Retenção e exclusão de dados",
    retentionBody: "Como seus dados são armazenados apenas no seu dispositivo, você mantém o controle deles o tempo todo. Você pode excluir suas tarefas e notas dentro do app, e desinstalar o app remove todos os seus dados armazenados localmente no dispositivo.",
    changesTitle: "Alterações nesta política",
    changesBody: "Se o Remi adicionar recursos no futuro que mudem como as informações são tratadas (por exemplo, uma conta opcional ou sincronização na nuvem), esta política será atualizada e a data de “Última atualização” acima mudará.",
    contactTitle: "Contato",
    contactBody: "Se você tiver qualquer dúvida sobre esta política de privacidade, entre em contato pelo",
  },
};

export const dictionaries: Record<LangCode, Dictionary> = { en, es, it, fr, pt };
