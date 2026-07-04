"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

export type Lang = "lv" | "en"

const translations = {
  lv: {
    nav: {
      home: "Mājas lapa",
      website: "Website izveide",
      projekti: "Projekti",
      reklama: "Reklāma",
      kontakti: "Kontakti & Vizīte",
    },
    footer: {
      copy: "© 2026 LTD Production",
      location: "Cēsis, Latvija",
    },
    home: {
      tools: "Izmantotie rīki & platformas",
      heroBadge: "Digitālā aģentūra · Cēsis",
      heroTitle: "Mājas lapas un reklāma, kas strādā",
      heroSub: "Palīdzam Latvijas uzņēmumiem augt ar mūsdienīgām mājas lapām, e-veikaliem un mērķētām reklāmas kampaņām.",
      ctaPrimary: "Bezmaksas konsultācija",
      ctaSecondary: "Mūsu darbi",
    },
    intro: {},
    website: {
      badge: "Mājas lapu izveide",
      h1a: "Mājas lapa, kas",
      h1b: "strādā par tevi",
      sub: "Mēs veidojam ātras, mūsdienīgas un pārdodošas mājas lapas Latvijas uzņēmumiem. No vienkāršas landing page līdz pilnvērtīgam e-veikalam — par Latvijā konkurētspējīgākajām cenām.",
      pricingTitle: "Cenu plāni",
      pricingSub: "Vienreizēja maksa. Bez slēptajām izmaksām.",
      faqTitle: "Biežāk uzdotie jautājumi",
      ctaTitle: "Gatavs sākt?",
      ctaSub: "Bezmaksas konsultācija — pastāsti par savu projektu un mēs sagatavosim piedāvājumu 24 stundu laikā.",
      ctaBtn: "Piesakies konsultācijai",
      popular: "Populārākais",
      order: "Pasūtīt",
      features: [
        { title: "Ātra izstrāde", desc: "Gatava mājas lapa 7–14 darba dienu laikā. Bez liekiem gaidīšanas termiņiem." },
        { title: "Unikāls dizains", desc: "Katrs projekts tiek veidots no nulles pēc tavas zīmola identitātes — bez šabloniem." },
        { title: "E-komercija", desc: "Integrējam drošus maksājumu risinājumus — Stripe, PayPal, bankas pārskaitījums." },
      ],
      plans: [
        {
          name: "Landing Page", price: "649", badge: null,
          description: "Vienas lapas mājas lapa — ideāla produktu vai pakalpojumu prezentācijai. Gatava 5 darba dienu laikā.",
          features: ["1 lapa (pilna garuma)", "Responsīvs dizains (mobilis + desktop)", "Kontaktforma ar e-pasta saņemšanu", "Pamata SEO optimizācija", "Google Maps integrācija", "Ātruma optimizācija", "1 mēneša bezmaksas atbalsts"],
          highlighted: false,
        },
        {
          name: "Business Website", price: "1299", badge: "Populārākais",
          description: "Pilnvērtīga mājas lapa uzņēmumam ar vairākām sadaļām, CMS un SEO — kas patiešām pārdod.",
          features: ["Līdz 10 lapām", "Unikāls pielāgots dizains", "CMS — patstāvīgi rediģē saturu", "Pilna SEO pakotne + sitemap", "Google Analytics 4", "Kontaktforma + rezervācija", "SSL sertifikāts", "3 mēnešu bezmaksas atbalsts"],
          highlighted: true,
        },
        {
          name: "E-veikals", price: "2499", badge: null,
          description: "Pilnīgi funkcionējošs interneta veikals ar drošiem maksājumiem, produktu pārvaldību un automātiku.",
          features: ["Neierobežots produktu skaits", "Stripe / PayPal / kartes maksājumi", "Produktu kategorijas & filtri", "Pasūtījumu pārvaldības sistēma", "Automātiskas e-pasta kvītis", "Krājumu pārvaldība", "Mobilā optimizācija", "6 mēnešu bezmaksas atbalsts"],
          highlighted: false,
        },
      ],
      faqs: [
        { q: "Cik ilgi tiek izstrādāta mājas lapa?", a: "Landing page — 3–5 darba dienas. Business website — 7–14 dienas. E-veikals — 14–21 diena." },
        { q: "Vai es pats varēšu rediģēt saturu?", a: "Jā — Business un E-veikala plānos iekļauta CMS sistēma, kurā vari patstāvīgi mainīt tekstus, bildes un produktus." },
        { q: "Vai cena iekļauj hostingu?", a: "Hosting nav iekļauts cenā — palīdzam to uzstādīt un ieteicam ekonomiski izdevīgākos risinājumus (~5–15 €/mēn)." },
        { q: "Vai var pasūtīt tikai dizainu?", a: "Jā, piedāvājam arī UI/UX dizaina pakalpojumu bez izstrādes. Sazinieties ar mums." },
      ],
    },
    reklama: {
      badge: "Digitālā reklāma",
      h1a: "Reklāma, kas",
      h1b: "nes rezultātus",
      sub: "Palīdzam Latvijas uzņēmumiem piesaistīt jaunus klientus ar mērķētām reklāmām Facebook, Instagram un Google. Bez liekiem izdevumiem — tikai tas, kas strādā.",
      pricingTitle: "Pakalpojumu cenas",
      pricingSub: "Ikmēneša abonements. Atcel jebkurā laikā.",
      processTitle: "Kā tas strādā",
      ctaTitle: "Sāc piesaistīt klientus šodien",
      ctaSub: "Bezmaksas konsultācija — izanalizēsim tavu situāciju un ieteikām piemērotāko risinājumu.",
      ctaBtn: "Piesakies bezmaksas konsultācijai",
      recommended: "Ieteicamais",
      start: "Sākt",
      whyUs: [
        { title: "Precīza mērķēšana", desc: "Sasniedzam tieši tos cilvēkus, kuri visticamāk kļūs par taviem klientiem — pēc vecuma, atrašanās vietas, interesēm un uzvedības." },
        { title: "Mērāmi rezultāti", desc: "Katru mēnesi saņem skaidru atskaiti — cik cilvēku redzēja reklāmu, noklikšķināja un kļuva par klientiem." },
        { title: "Pastāvīga optimizācija", desc: "Kampaņas netiek atstātas pašplūsmā — katru nedēļu analizējam datus un uzlabojam rezultātus." },
      ],
      results: [
        { metric: "3×", label: "Vidējais ROAS (reklāmas atdeve)" },
        { metric: "−40%", label: "Zemākas klikšķa izmaksas vs. pašu vadītas kampaņas" },
        { metric: "14 d.", label: "Kampaņas palaišana no nulles" },
        { metric: "24h", label: "Atbilde uz jautājumu" },
      ],
      process: [
        { step: "01", title: "Konsultācija", desc: "Iepazīstamies ar tavu biznesu un mērķiem" },
        { step: "02", title: "Stratēģija", desc: "Izstrādājam kampaņu plānu un auditorijas" },
        { step: "03", title: "Palaišana", desc: "Veidojam vizuāļus un palaidam kampaņas" },
        { step: "04", title: "Optimizācija", desc: "Analizējam rezultātus un uzlabojam" },
      ],
      plans: [
        {
          name: "Social Media", price: "299", period: "/ mēn", badge: null,
          description: "Regulārs kvalitatīvs saturs taviem sociālajiem tīkliem.",
          features: ["Instagram & Facebook vadība", "12 dizainēti posti mēnesī", "Stories & Reels veidošana", "Komentāru & ziņu atbildes", "Hashtag stratēģija", "Ikmēneša atskaite"],
          highlighted: false,
        },
        {
          name: "Meta Ads", price: "449", period: "/ mēn", badge: "Ieteicamais",
          description: "Mērķētas reklāmas kampaņas Facebook un Instagram.",
          features: ["Kampaņu iestatīšana & struktūra", "Precīza auditorijas mērķēšana", "A/B testēšana", "Reklāmas vizuāļu dizains", "Iknedēļas optimizācija", "Google Analytics savienošana", "Detalizētas ikmēneša atskaites"],
          highlighted: true,
        },
        {
          name: "Full Package", price: "749", period: "/ mēn", badge: null,
          description: "Pilns digitālās mārketinga risinājums — visi kanāli, viena komanda.",
          features: ["Viss no Social Media pakotnes", "Viss no Meta Ads pakotnes", "Google Ads kampaņas", "Video & Reels producēšana", "E-pasta mārketings", "Mēneša mārketinga stratēģija", "Prioritārs atbalsts 7 dienas"],
          highlighted: false,
        },
      ],
    },
    projekti: {
      badge: "Portfolio",
      h1: "Mūsu darbi",
      sub: "Katrs projekts ir unikāls risinājums — no pirmās idejas līdz dzīvojošam produktam.",
      categories: ["Visi", "Landing Page", "Business Website", "E-veikals", "Reklāma"],
      ctaTitle: "Vēlies līdzīgu rezultātu?",
      ctaSub: "Pastāsti par savu projektu — bezmaksas konsultācijā izstrādāsim plānu tieši tev.",
      ctaBtn: "Sākt projektu",
      stats: [
        { value: "30+", label: "Pabeigti projekti" },
        { value: "€15k+", label: "Pārvaldītais reklāmas budžets" },
        { value: "97%", label: "Apmierināto klientu" },
        { value: "3.4×", label: "Vidējais ROAS" },
      ],
      items: [
        { title: "Lumino.lv — Saules paneļi", category: "Business Website", description: "Profesionāla mājas lapa saules paneļu uzņēmumam ar produktu prezentāciju, cenu kalkulatoru un kontaktformu.", img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80", href: "https://lumino.lv/", year: "2025", tags: ["Next.js", "Tailwind", "SEO"] },
        { title: "Meta Ads kampaņa", category: "Reklāma", description: "Facebook & Instagram reklāmu kampaņa apģērbu zīmolam. 3.2× ROAS pirmajā mēnesī.", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80", href: "#", year: "2025", tags: ["Meta Ads", "A/B Tests", "Analytics"] },
        { title: "E-veikals — modes zīmols", category: "E-veikals", description: "Pilnīgs interneta veikals ar Stripe maksājumiem, produktu filtriem un automātiskām kvītīm.", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80", href: "#", year: "2025", tags: ["Next.js", "Stripe", "CMS"] },
        { title: "Būvniecības uzņēmums", category: "Business Website", description: "10 lapu korporatīvā mājas lapa ar projektu portfolio, komandas sadaļu un kontaktformu.", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", href: "#", year: "2024", tags: ["React", "CMS", "SEO"] },
        { title: "Skaistumkopšanas salons", category: "Landing Page", description: "Eleganta landing page ar online rezervācijas sistēmu, atsauksmēm un pakalpojumu cenu lapu.", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80", href: "#", year: "2024", tags: ["Next.js", "Booking", "Mobile"] },
        { title: "Google Ads — auto serviss", category: "Reklāma", description: "Google reklāmu kampaņa auto servisam Rīgā. Klikšķa cena samazināta par 45%.", img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80", href: "#", year: "2024", tags: ["Google Ads", "Analytics", "CRO"] },
      ],
    },
    kontakti: {
      h1: "Sazinies ar mums",
      sub: "Piesakies bezmaksas konsultācijai vai uzdod jautājumu.",
      email_title: "E-pasts",
      email_desc: "Atbildam uz visiem e-pastiem 24 stundu laikā.",
      office_title: "Birojs",
      office_desc: "Atnāc uz biroju parunāt klātienē.",
      phone_title: "Telefons",
      phone_desc: "Pieejami Pr–Pk, 9:00–18:00.",
      social_title: "Atrodi mūs online",
      booking_title: "Pieteikt vizīti",
      name_placeholder: "Vārds",
      contact_placeholder: "Telefons vai e-pasts",
      service_placeholder: "Pakalpojums...",
      message_placeholder: "Ziņojums...",
      send_btn: "Nosūtīt pieteikumu",
      send_sending: "Sūta...",
      send_ok: "Nosūtīts! Sazināsimies 24h laikā.",
      send_err: "Neizdevās nosūtīt — mēģini vēlreiz vai raksti e-pastā.",
      send_fill: "Lūdzu aizpildi vārdu un kontaktinformāciju.",
      services: ["Website izveide", "Reklāmas kampaņa", "Bezmaksas konsultācija", "Cits"],
    },
  },
  en: {
    nav: {
      home: "Home",
      website: "Website Development",
      projekti: "Projects",
      reklama: "Advertising",
      kontakti: "Contact & Book",
    },
    footer: {
      copy: "© 2026 LTD Production",
      location: "Cēsis, Latvia",
    },
    home: {
      tools: "Tools & platforms we use",
      heroBadge: "Digital agency · Cēsis, Latvia",
      heroTitle: "Websites and ads that work",
      heroSub: "We help businesses grow with modern websites, e-commerce stores and targeted ad campaigns.",
      ctaPrimary: "Free consultation",
      ctaSecondary: "Our work",
    },
    intro: {},
    website: {
      badge: "Website Development",
      h1a: "A website that",
      h1b: "works for you",
      sub: "We build fast, modern and conversion-focused websites for businesses. From a simple landing page to a full e-commerce store — at Latvia's most competitive prices.",
      pricingTitle: "Pricing plans",
      pricingSub: "One-time payment. No hidden fees.",
      faqTitle: "Frequently asked questions",
      ctaTitle: "Ready to start?",
      ctaSub: "Free consultation — tell us about your project and we'll prepare a proposal within 24 hours.",
      ctaBtn: "Book a free consultation",
      popular: "Most popular",
      order: "Order",
      features: [
        { title: "Fast delivery", desc: "Your website ready in 7–14 business days. No unnecessary delays." },
        { title: "Unique design", desc: "Every project is built from scratch to match your brand identity — no templates." },
        { title: "E-commerce", desc: "We integrate secure payment solutions — Stripe, PayPal, bank transfer." },
      ],
      plans: [
        {
          name: "Landing Page", price: "649", badge: null,
          description: "Single-page website — ideal for showcasing a product or service. Ready in 5 business days.",
          features: ["1 full-length page", "Responsive design (mobile + desktop)", "Contact form with email delivery", "Basic SEO optimisation", "Google Maps integration", "Speed optimisation", "1 month free support"],
          highlighted: false,
        },
        {
          name: "Business Website", price: "1299", badge: "Most popular",
          description: "Full-featured multi-page website with CMS and SEO — built to convert visitors into clients.",
          features: ["Up to 10 pages", "Custom unique design", "CMS — edit content yourself", "Full SEO package + sitemap", "Google Analytics 4", "Contact form + booking", "SSL certificate", "3 months free support"],
          highlighted: true,
        },
        {
          name: "E-commerce", price: "2499", badge: null,
          description: "Fully functional online store with secure payments, product management and automation.",
          features: ["Unlimited products", "Stripe / PayPal / card payments", "Product categories & filters", "Order management system", "Automated email receipts", "Inventory management", "Mobile optimisation", "6 months free support"],
          highlighted: false,
        },
      ],
      faqs: [
        { q: "How long does it take to build a website?", a: "Landing page — 3–5 business days. Business website — 7–14 days. E-commerce — 14–21 days." },
        { q: "Can I edit the content myself?", a: "Yes — Business and E-commerce plans include a CMS where you can update texts, images and products independently." },
        { q: "Is hosting included in the price?", a: "Hosting is not included — we help you set it up and recommend cost-effective solutions (~€5–15/month)." },
        { q: "Can I order design only?", a: "Yes, we also offer UI/UX design without development. Contact us to discuss." },
      ],
    },
    reklama: {
      badge: "Digital Advertising",
      h1a: "Ads that",
      h1b: "deliver results",
      sub: "We help businesses attract new customers with targeted ads on Facebook, Instagram and Google. No wasted budget — only what works.",
      pricingTitle: "Service pricing",
      pricingSub: "Monthly subscription. Cancel anytime.",
      processTitle: "How it works",
      ctaTitle: "Start attracting customers today",
      ctaSub: "Free consultation — we'll analyse your situation and recommend the best solution.",
      ctaBtn: "Book a free consultation",
      recommended: "Recommended",
      start: "Start",
      whyUs: [
        { title: "Precise targeting", desc: "We reach exactly the people most likely to become your customers — by age, location, interests and behaviour." },
        { title: "Measurable results", desc: "Every month you receive a clear report — how many people saw the ad, clicked and became customers." },
        { title: "Continuous optimisation", desc: "Campaigns aren't left on autopilot — every week we analyse data and improve results." },
      ],
      results: [
        { metric: "3×", label: "Average ROAS (return on ad spend)" },
        { metric: "−40%", label: "Lower cost-per-click vs. self-managed campaigns" },
        { metric: "14 d.", label: "Campaign launch from scratch" },
        { metric: "24h", label: "Response time" },
      ],
      process: [
        { step: "01", title: "Consultation", desc: "We learn about your business and goals" },
        { step: "02", title: "Strategy", desc: "We build a campaign plan and audiences" },
        { step: "03", title: "Launch", desc: "We create creatives and launch campaigns" },
        { step: "04", title: "Optimisation", desc: "We analyse results and improve" },
      ],
      plans: [
        {
          name: "Social Media", price: "299", period: "/ mo", badge: null,
          description: "Regular quality content for your social media — you focus on business.",
          features: ["Instagram & Facebook management", "12 designed posts per month", "Stories & Reels creation", "Comment & message replies", "Hashtag strategy", "Monthly report"],
          highlighted: false,
        },
        {
          name: "Meta Ads", price: "449", period: "/ mo", badge: "Recommended",
          description: "Targeted ad campaigns on Facebook and Instagram.",
          features: ["Campaign setup & structure", "Precise audience targeting", "A/B testing", "Ad visual design", "Weekly optimisation", "Google Analytics connection", "Detailed monthly reports"],
          highlighted: true,
        },
        {
          name: "Full Package", price: "749", period: "/ mo", badge: null,
          description: "Complete digital marketing solution — all channels, one team.",
          features: ["Everything in Social Media", "Everything in Meta Ads", "Google Ads campaigns", "Video & Reels production", "Email marketing", "Monthly marketing strategy", "Priority support 7 days"],
          highlighted: false,
        },
      ],
    },
    projekti: {
      badge: "Portfolio",
      h1: "Our work",
      sub: "Every project is a unique solution — from the first idea to a live product.",
      categories: ["All", "Landing Page", "Business Website", "E-commerce", "Advertising"],
      ctaTitle: "Want similar results?",
      ctaSub: "Tell us about your project — in a free consultation we'll build a plan just for you.",
      ctaBtn: "Start a project",
      stats: [
        { value: "30+", label: "Completed projects" },
        { value: "€15k+", label: "Ad spend managed" },
        { value: "97%", label: "Satisfied clients" },
        { value: "3.4×", label: "Average ROAS" },
      ],
      items: [
        { title: "Lumino.lv — Solar panels", category: "Business Website", description: "Professional website for a solar panel company with product showcase, price calculator and contact form.", img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80", href: "https://lumino.lv/", year: "2025", tags: ["Next.js", "Tailwind", "SEO"] },
        { title: "Meta Ads campaign", category: "Advertising", description: "Facebook & Instagram ad campaign for a clothing brand. 3.2× ROAS in the first month.", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80", href: "#", year: "2025", tags: ["Meta Ads", "A/B Tests", "Analytics"] },
        { title: "E-commerce — fashion brand", category: "E-commerce", description: "Full online store with Stripe payments, product filters and automated receipts.", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80", href: "#", year: "2025", tags: ["Next.js", "Stripe", "CMS"] },
        { title: "Construction company", category: "Business Website", description: "10-page corporate website with project portfolio, team section and contact form.", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", href: "#", year: "2024", tags: ["React", "CMS", "SEO"] },
        { title: "Beauty salon", category: "Landing Page", description: "Elegant landing page with online booking, testimonials and service pricing.", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80", href: "#", year: "2024", tags: ["Next.js", "Booking", "Mobile"] },
        { title: "Google Ads — auto repair", category: "Advertising", description: "Google Ads campaign for a Riga auto repair shop. Cost-per-click reduced by 45%.", img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80", href: "#", year: "2024", tags: ["Google Ads", "Analytics", "CRO"] },
      ],
    },
    kontakti: {
      h1: "Get in touch",
      sub: "Book a free consultation or ask a question.",
      email_title: "Email",
      email_desc: "We reply to all emails within 24 hours.",
      office_title: "Office",
      office_desc: "Come to the office for an in-person chat.",
      phone_title: "Phone",
      phone_desc: "Available Mon–Fri, 9:00–18:00.",
      social_title: "Find us online",
      booking_title: "Book a visit",
      name_placeholder: "Name",
      contact_placeholder: "Phone or email",
      service_placeholder: "Service...",
      message_placeholder: "Message...",
      send_btn: "Send request",
      send_sending: "Sending...",
      send_ok: "Sent! We'll get back to you within 24h.",
      send_err: "Failed to send — try again or email us directly.",
      send_fill: "Please fill in your name and contact info.",
      services: ["Website development", "Ad campaign", "Free consultation", "Other"],
    },
  },
}

export type Translations = typeof translations.lv

const LangContext = createContext<{
  lang: Lang
  setLang: (l: Lang) => void
  t: Translations
}>({
  lang: "lv",
  setLang: () => {},
  t: translations.lv,
})

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("lv")

  useEffect(() => {
    const saved = localStorage.getItem("ltd-lang") as Lang | null
    if (saved === "en" || saved === "lv") setLangState(saved)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem("ltd-lang", l)
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
