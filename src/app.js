import React from "https://esm.sh/react@19.2.6";
import { createRoot } from "https://esm.sh/react-dom@19.2.6/client";

const h = React.createElement;

const iconPaths = {
  badgeCheck: [
    ["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }],
    ["path", { d: "m9 12 2 2 4-4" }],
  ],
  checkCircle: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "m9 12 2 2 4-4" }],
  ],
  handshake: [
    ["path", { d: "m11 17 2 2a1 1 0 1 0 3-3" }],
    ["path", { d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" }],
    ["path", { d: "m21 3 1 11h-2" }],
    ["path", { d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" }],
    ["path", { d: "M3 4h8" }],
  ],
  megaphone: [
    ["path", { d: "m3 11 18-5v12L3 14v-3z" }],
    ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6" }],
  ],
  vote: [
    ["path", { d: "m9 12 2 2 4-4" }],
    ["path", { d: "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" }],
    ["path", { d: "M22 19H2" }],
  ],
};

function Icon({ name, size = 24, ...props }) {
  return h(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
    },
    iconPaths[name].map(([tag, attrs], index) => h(tag, { ...attrs, key: index })),
  );
}

const manifesto = [
  {
    title: "No Post-Retirement Rewards For Judges",
    copy: "No Chief Justice shall be granted a Rajya Sabha seat as a post-retirement reward.",
  },
  {
    title: "Protect Every Legit Vote",
    copy: "If any legitimate vote is deleted, whether in a PPP or CJP or opposition-ruled state, the CEC shall be arrested under UAPA, as taking away voting rights of citizens is no less than terrorism.",
  },
  {
    title: "No Fraud Investigation By Police Or Bribe By Police",
    copy: "IAS and IPS degrees shall be suspended for lifetime in proven cases of Misuse of Power and Corruption.",
  },
  {
    title: "No Delay In Justice",
    copy: "Justice should be served within 3 months. If failed, the responsible IO and judicial system will rotate, and new judges and IOs will be hired to fill the vacancy.",
  },
  {
    title: "20-Year Ban On Political Defection",
    copy: "Any MLA or MP who defects from one party to another shall be barred from contesting elections and from holding any public office for a period of 20 years.",
  },
  {
    title: "Independent Media, Not Godi Media",
    copy: "Media ownership and influence shall be investigated so truly independent media can serve the public interest.",
  },
  {
    title: "Equal Punishment For Serious Offence Misuse",
    copy: "Rightly accused people or fake rape accusers will face equal punishment. No mercy in serious offence misuse.",
  },
];

const eligibility = [
  "Jobless: unemployed, not for lack of trying.",
  "Ignored: your voice does not matter to them. It matters here.",
  "Overworked: working hard still is not enough? You are one of us.",
  "Chronically online: sleep schedule? What is that? You live here.",
  "Ability to rant professionally: you rant, you roast, you speak facts. We need you.",
];

const slogans = [
  "Party Launch · Volume 1, Edition 1",
  "Filed under: General Disgruntlement",
  "Sponsored by no one. Funded by nothing.",
  "HQ: Wherever the wifi works",
  "Now accepting rants, retweets, and resentment",
  "Party Launch · Volume 1, Edition 1",
  "Filed under: General Disgruntlement",
  "Sponsored by no one. Funded by nothing.",
  "HQ: Wherever the wifi works",
  "Now accepting rants, retweets, and resentment",
];

const socialLinks = {
  instagram: "https://www.instagram.com/parasitepeopleparty/",
  facebook: "https://www.facebook.com/parasitepeopleparty",
  x: "https://x.com/PPP_2029",
};
const membershipFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdCs1lPvihf4DsgeGbo2E4c3ziSrhDdxChwb0xEX8CsUMOGhA/viewform?usp=send_form";
const membershipFormEmbedUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdCs1lPvihf4DsgeGbo2E4c3ziSrhDdxChwb0xEX8CsUMOGhA/viewform?embedded=true";

function App() {
  return h(
    "main",
    null,
    h(
      "header",
      { className: "site-header", "aria-label": "Primary navigation" },
      h(
        "a",
        { className: "brand", href: "#top", "aria-label": "Parasite People Party home" },
        h("span", { className: "brand-mark" }, "PPP"),
        h("span", null, "Parasite People Party"),
      ),
      h(
        "nav",
        null,
        h("a", { href: "#mission" }, "Mission"),
        h("a", { href: "#manifesto" }, "Manifesto"),
        h("a", { href: "#eligibility" }, "Eligibility"),
        h("a", { href: "#social" }, "Join"),
      ),
    ),
    h(
      "section",
      { className: "hero", id: "top" },
      h(
        "div",
        { className: "hero-copy" },
        h("p", { className: "kicker" }, "Voice of the People, expose the reality with transparency."),
        h(
          "h1",
          { className: "hero-title" },
          h("span", null, "For the"),
          h("span", null, "people they"),
          h("span", { className: "hero-title-accent" }, "mocked, delayed,"),
          h("span", { className: "hero-title-script" }, "and discarded."),
        ),
        h("p", { className: "hero-subcopy" }, "A political movement for the unheard majority."),
        h("p", { className: "hero-subcopy strong" }, "No sponsors. No puppeteers. Just demands."),
        h("p", { className: "lede" }, "Power to the people, For the People, By The people"),
        h(
          "div",
          { className: "hero-actions" },
          h("a", { className: "button primary", href: "#social" }, h(Icon, { name: "vote", size: 20 }), "Join the movement"),
          h("a", { className: "button secondary", href: "#manifesto" }, h(Icon, { name: "megaphone", size: 20 }), "Read manifesto"),
        ),
      ),
      h("div", { className: "hero-visual", "aria-label": "Parasite People Party emblem" }, h("img", { src: "./public/assets/parasite-party-emblem.png", alt: "" })),
    ),
    h("section", { className: "ticker", "aria-label": "Campaign slogans" }, [...slogans, ...slogans].map((slogan, index) => h("span", { key: `${slogan}-${index}` }, slogan))),
    h(
      "section",
      { className: "unity-marquee", "aria-label": "Movement slogans" },
      h(
        "div",
        { className: "marquee-track" },
        [
          "Together We Survive",
          "Stronger Together",
          "Unity · Resilience · Progress",
          "You Cannot Squash A Movement",
          "Together We Survive",
          "Stronger Together",
          "Unity · Resilience · Progress",
          "You Cannot Squash A Movement",
        ].map((item, index) => [
          h("span", { key: `${item}-${index}` }, item),
          h("span", { className: "dot", key: `dot-${index}` }, "✦"),
        ]),
      ),
    ),
    h(
      "section",
      { className: "vision-section", id: "mission" },
      h(
        "div",
        { className: "vision-title" },
        h("p", { className: "eyebrow" }, "Chapter One"),
        h("h2", null, "Our Movement's Vision."),
        h(
          "div",
          { className: "vision-intro" },
          h("p", null, "We are not here to build another power club, protect privilege, or repackage public suffering as governance. We are here to ask uncomfortable questions - loudly, repeatedly, publicly - about jobs, justice, taxes, accountability, and the future stolen from ordinary people."),
          h("p", null, "We are the Parasite People Party - a movement born from satire, frustration, and a generation tired of being ignored while systems feed on their hard work, silence, and survival."),
        ),
      ),
      h(
        "div",
        { className: "vision-copy" },
        h(
          "div",
          { className: "mission-text" },
          h("h3", null, "Our Mission"),
          h("p", null, "Build a political movement for the jobless, the overworked, the ignored, the creators called \"chronically online,\" the activists who file RTIs, and every citizen told to stay quiet and adjust."),
          h("p", null, "If demanding accountability makes us parasites in their eyes, so be it."),
          h("p", { className: "vision-punch" }, "We are here to expose the real parasites feeding on the people."),
          h("p", { className: "vision-pledge" }, "Power to the People. For the People. By the People."),
        ),
        h(
          "figure",
          { className: "mission-image" },
          h("img", { src: "./public/assets/our-mission.png", alt: "Parasite People Party mission speech" }),
        ),
      ),
    ),
    h(
      "section",
      { className: "section", id: "manifesto" },
      h("div", { className: "section-heading" }, h("p", { className: "eyebrow" }, "Manifesto"), h("h2", null, "Seven-Point Agenda")),
      h(
        "div",
        { className: "manifesto-layout" },
        h(
          "div",
          { className: "agenda-list" },
          manifesto.map((item, index) =>
            h(
              "article",
              { className: "agenda-item", key: item.title },
              h("span", { className: "agenda-number" }, String(index + 1)),
              h("div", null, h("h3", null, item.title), h("p", null, item.copy)),
            ),
          ),
        ),
        h(
          "figure",
          { className: "manifesto-image" },
          h("img", { src: "./public/assets/seven-point-agenda.png", alt: "Parasite People Party seven-point agenda poster" }),
        ),
      ),
    ),
    h(
      "section",
      { className: "join-band", id: "eligibility" },
      h(
        "div",
        { className: "join-copy" },
        h("p", { className: "eyebrow" }, "Membership"),
        h("h2", null, "Are you eligible to join?"),
        h("p", null, "We do not check religion, caste, or gender. We do, however, have five (5) standards."),
        h("p", { className: "join-punch" }, "You do not need power. You are the power."),
      ),
      h(
        "div",
        { className: "eligibility-layout" },
        h(
          "div",
          { className: "join-panel" },
          eligibility.map((item) => h("div", { className: "check-row", key: item }, h(Icon, { name: "checkCircle", size: 22 }), h("span", null, item))),
          h("div", { className: "inline-join" }, h("a", { className: "button primary full", href: "#social" }, h(Icon, { name: "handshake", size: 20 }), "Join the party"), h("p", null, "Membership is free, lifelong, and revocable only by you."), h("p", null, "No fees. No selfies with the leader. No \"missed call to register.\"")),
        ),
        h(
          "figure",
          { className: "eligibility-image" },
          h("img", { src: "./public/assets/eligibility-criteria.png", alt: "Parasite People Party eligibility criteria poster" }),
        ),
      ),
    ),
    h(
      "section",
      { className: "social-section", id: "social" },
      h(
        "div",
        { className: "section-heading" },
        h("p", { className: "eyebrow" }, "Connect with us"),
        h("h2", null, "Join the Party"),
        h("p", null, "Fill the membership form and follow the official Parasite People Party accounts for posts, campaign updates, and public announcements."),
      ),
      h(
        "div",
        { className: "connect-grid" },
        h(
          "div",
          { className: "social-grid" },
          h(
            "article",
            { className: "social-card" },
            h("img", { src: "./public/assets/parasite-party-emblem.png", alt: "" }),
            h("div", null, h("h3", null, "Instagram"), h("p", null, "@parasitepeopleparty")),
            h("a", { className: "button primary full", href: socialLinks.instagram, target: "_blank", rel: "noreferrer" }, "Follow Instagram"),
          ),
          h(
            "article",
            { className: "social-card" },
            h("img", { src: "./public/assets/bottom-banner.png", alt: "" }),
            h("div", null, h("h3", null, "Facebook"), h("p", null, "Parasite People Party")),
            h("a", { className: "button primary full", href: socialLinks.facebook, target: "_blank", rel: "noreferrer" }, "Follow Facebook"),
          ),
          h(
            "article",
            { className: "social-card" },
            h("img", { src: "./public/assets/parasite-party-emblem.png", alt: "" }),
            h("div", null, h("h3", null, "X"), h("p", null, "@PPP_2029")),
            h("a", { className: "button primary full", href: socialLinks.x, target: "_blank", rel: "noreferrer" }, "Follow X"),
          ),
        ),
        h(
          "div",
          { className: "form-embed" },
          h("iframe", {
            title: "Parasite People Party membership form",
            src: membershipFormEmbedUrl,
            loading: "lazy",
          }),
          h(
            "div",
            { className: "form-embed-actions" },
            h("p", null, "If the form does not load inside your browser, open it directly."),
            h("a", { className: "button primary", href: membershipFormUrl, target: "_blank", rel: "noreferrer" }, "Open Google Form"),
          ),
        ),
      ),
    ),
    h("section", { className: "bottom-banner", "aria-label": "Parasite People Party rally banner" }, h("img", { src: "./public/assets/bottom-banner.png", alt: "" })),
    h("footer", null, h("div", null, h(Icon, { name: "badgeCheck", size: 22 }), h("strong", null, "Parasite People Party")), h("p", null, "Fictional satire. No real electoral claims, only ceremonial laziness.")),
  );
}

createRoot(document.getElementById("root")).render(h(App));
