import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "YTech",
    category: "Webdesign",
    contextType: 'client',
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
    description: "Professionele website voor een toonaangevend elektrotechnisch installatiebedrijf.",
    year: "2024",
    tags: ["Webdesign", "UI/UX", "Responsive", "SEO"],
    longDescription: "YTech Elektrotechniek is een innovatief installatiebedrijf uit Vlaardingen dat woningbouw, utiliteit en renovatieprojecten door heel Nederland bedient. Wij ontwierpen en bouwden een professionele website die hun expertise, projecten en diensten helder en overtuigend presenteert aan aannemers, projectontwikkelaars en opdrachtgevers.",
    highlights: [
      "Heldere dienstenpagina's per sector (woningbouw, utiliteit, renovatie)",
      "SEO-geoptimaliseerd voor lokale en nationale vindbaarheid",
      "Mobielvriendelijk ontwerp afgestemd op het gele merkidentiteit van YTech"
    ],
    url: "https://ytech.nl",
    mockupImage: "/images/mockups/ytech-mockup.png",
    images: [
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
    ]
  },
  {
    id: 2,
    title: "AhmadFlex",
    category: "Web App",
    contextType: 'concept',
    image: "/images/ahmadflex/preview.png",
    description: "Eigen streaming-geïnspireerd platformconcept voor films en series.",
    year: "2025",
    tags: ["React", "API Integration", "Responsive", "UI/UX"],
    longDescription: "AhmadFlex is een eigen portfolio-concept waarmee we laten zien hoe we een streaming-geïnspireerde web app ontwerpen en bouwen. Bezoekers ontdekken films en series via spotlight-secties, horizontale rails, browse-pagina's en filterflows voor genres, jaren en talen. De interface is bewust ontworpen voor een soepele ervaring op desktop, tablet en mobiel.",
    highlights: [
      "Netflix-achtige browse-ervaring met spotlight en rails",
      "Filter op genre, jaar en taal",
      "Portfolio-concept voor UI/UX, browse-flow en front-end uitwerking"
    ],
    url: "https://ahmadflex-20260307.netlify.app/",
    mockupImage: "/images/mockups/ahmadflex-mockup.png",
    images: [
      "/images/ahmadflex/preview.png",
      "/images/ahmadflex/desktop.png",
    ]
  },
  {
    id: 3,
    title: "Piccobello",
    category: "Webdesign",
    contextType: 'client',
    image: "/images/piccobello/truck-exterior.jpg",
    description: "Smaakvolle website voor een authentiek snacks- en cateringbedrijf.",
    year: "2024",
    tags: ["Webdesign", "UI/UX", "SEO", "Responsive"],
    longDescription: "Piccobello Snacks is een authentiek bedrijf gespecialiseerd in ambachtelijke snacks en catering. Wij creëerden een levendige en eetlustige website die hun producten, verhaal en bestelmogelijkheden aantrekkelijk presenteert aan particulieren en horecapartners.",
    highlights: [
      "Visueel aantrekkelijke productpresentatie met sfeervolle fotografie",
      "Eenvoudig bestelproces voor catering en afhaal",
      "Mobielvriendelijk ontwerp afgestemd op het merkidentiteit"
    ],
    url: "https://piccobellosnacks.nl/",
    canEmbed: false,
    screenshot: "https://www.mkerrie.com/assets/images/piccobello-full.webp",
    mockupImage: "/images/mockups/piccobello-mockup.png",
    images: [
      "/images/piccobello/truck-exterior.jpg",
      "/images/piccobello/foodtruck-snacks.jpg",
      "/images/piccobello/truck-sfeer.jpg",
      "/images/piccobello/truck-balie.jpg",
      "/images/piccobello/rotterdam-skyline.jpg",
    ]
  },
  {
    id: 4,
    title: "King Airco",
    category: "Webdesign",
    contextType: 'client',
    image: "/images/king-room-1.png",
    description: "Professionele website voor een gespecialiseerd airconditioning installatiebedrijf.",
    year: "2024",
    tags: ["Webdesign", "UI/UX", "SEO", "Responsive"],
    longDescription: "King Airconditioning is een gespecialiseerd bedrijf in de installatie en het onderhoud van airconditioningsystemen. Wij ontwierpen een heldere, professionele website die hun diensten, merken en werkgebied overzichtelijk presenteert aan particulieren en zakelijke klanten.",
    highlights: [
      "Overzichtelijke dienstenpagina's per type installatie",
      "SEO-geoptimaliseerd voor lokale zoekopdrachten",
      "Snelle laadtijden en mobielvriendelijk ontwerp"
    ],
    url: "https://kingairconditioning.nl/",
    mockupImage: "/images/mockups/kingairco-mockup.png",
    images: [
      "/images/king-room-1.png",
      "/images/king-buitenunit.webp",
      "/images/king-installatie-1.webp",
    ]
  },
  {
    id: 5,
    title: "Yume Ramen",
    category: "Web App",
    contextType: 'concept',
    image: "/images/yume-ramen/preview.png",
    description: "Eigen Japans ramen delivery-concept met een unieke visuele stijl.",
    year: "2025",
    tags: ["React", "Firebase", "Vite", "Full-Stack"],
    longDescription: "Yume Ramen is een eigen portfolio-concept voor een moderne ramen delivery experience, gebouwd met React en Firebase. De flow voelt direct en app-achtig aan: inloggen als klant, gerechten ontdekken, toppings kiezen, afrekenen en de bestelling live volgen via Firestore-statusupdates. Zo laten we zien hoe we branding, UX en full-stack interactie in één concept samenbrengen.",
    highlights: [
      "Realtime orderstatus via Firestore-statusupdates",
      "Rollen-systeem: klant, chef, bezorger en admin",
      "Eigen concept voor branding, productflow en full-stack uitwerking"
    ],
    url: "https://yume-ramen.netlify.app/login",
    mockupImage: "/images/mockups/yume-mockup.png",
    images: [
      "/images/yume-ramen/preview.png",
      "/images/yume-ramen/desktop.png",
    ]
  },
  {
    id: 6,
    title: "Split Workout",
    category: "Web App",
    contextType: 'concept',
    image: "/images/split-workout/preview.png",
    description: "Eigen workout tracker concept voor trainingen en programma's.",
    year: "2025",
    tags: ["React", "Firebase", "Mobile-First", "PWA"],
    longDescription: "Split is een eigen portfolio-concept voor een workout-app die trainingen, bodyweight en programma's in een strakke mobiele interface samenbrengt. De ervaring voelt direct en app-achtig aan: een snelle auth-flow, een dashboard voor de dag, duidelijke bottom navigation en schermen voor training, programma's en timers. Alles is ontworpen met een mobile-first aanpak voor een native app-gevoel.",
    highlights: [
      "Strakke mobile-first interface met native app-gevoel",
      "Trainingsschema's, timers en voortgangsoverzicht",
      "Eigen concept voor mobile UX, flows en productstructuur"
    ],
    url: "https://split-workout-app.netlify.app/",
    mockupImage: "/images/mockups/split-mockup.png",
    images: [
      "/images/split-workout/preview.png",
      "/images/split-workout/desktop.png",
    ]
  }
];
