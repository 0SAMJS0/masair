/* =====================================================================
   TAMPA DE MASAIR — ALL SITE CONTENT LIVES IN THIS ONE FILE
   =====================================================================
   Edit the text between the quotes, save, refresh the page. That's it.

   Anything marked  EDIT  is a placeholder written only from what is
   visible in the group photo. Replace it with the real lore.

   Quick guide
   -----------
   • Change a member ........ find them in `members` below
   • Swap a portrait ........ drop a new image in images/members/ and
                              point `portrait` at it (any size, 4:5 is best)
   • Add a reel ............. copy the example in `reels` and fill it in
   • Add a story ............ add an entry to `lore`
   • Chaos Mode phrases ..... `chaosPhrases`
   • Quiz ................... `quiz` (points go to member ids)
   ===================================================================== */

window.MASAIR = {
  /* ---------- The group ---------- */
  group: {
    name: "Tampa De Masair",
    handle: "@tampa_de_masair",
    instagram: "https://www.instagram.com/tampa_de_masair/",
    headline: "Somehow, we all ended up in Tampa.", // EDIT
    subline: "The group chat escaped.", // EDIT
    photo: "images/group.jpg",
    photoCaption: "family portrait, allegedly", // EDIT
    signOff: "You have reached the end. Unfortunately, we are still like this.", // EDIT
  },

  /* ---------- Members ----------
     id ........ lowercase, no spaces. Used for links: yoursite.com/#syed
     nickname .. shown in quotes under the name. Leave "" to hide it.
     role ...... the funny job title
     teaser .... one short line shown when someone hovers them in the photo
     bio ....... 1–3 sentences
     stats ..... exactly three. value is 0–130 (over 100 breaks the meter on purpose)
     catchphrase Leave "" to hide it.
     lore ...... the extra story behind "Open the lore"
     portrait .. main picture
     altPhoto .. optional funny second picture shown inside the lore popup
     focus ..... which part of the portrait to keep when it gets cropped ("50% 20%" = centre, near top)
     spot ...... where they are in the group photo, in % of the photo: x, y = top-left corner, w, h = size
  */
  members: [
    {
      id: "syed",
      name: "Syed",
      nickname: "", // EDIT
      role: "Left Flank Commander", // EDIT
      teaser: "Holding down the far left of the photo.", // EDIT
      bio: "First in line, white shalwar kameez, blazer on top. If the photo were a sentence, Syed is the capital letter.", // EDIT
      stats: [ // EDIT
        { label: "Distance from centre", value: 100 },
        { label: "Blazer-over-kameez confidence", value: 92 },
        { label: "Chance of blinking", value: 8 },
      ],
      catchphrase: "", // EDIT
      lore: "Real lore pending. The group chat is still voting on what is legally safe to publish here.", // EDIT
      portrait: "images/members/syed.jpg",
      altPhoto: "",
      focus: "50% 25%",
      spot: { x: 1.7, y: 38.5, w: 15, h: 60 },
    },
    {
      id: "daud",
      name: "Daud",
      nickname: "", // EDIT
      role: "Deputy of Standing Politely", // EDIT
      teaser: "Hands folded. Smile loaded.", // EDIT
      bio: "Glasses, navy blazer, hands clasped like he is about to be introduced to somebody's uncle.", // EDIT
      stats: [ // EDIT
        { label: "Politeness of stance", value: 97 },
        { label: "Smile width", value: 84 },
        { label: "Awareness of the bird above him", value: 3 },
      ],
      catchphrase: "", // EDIT
      lore: "Real lore pending. Daud has been informed and is 'thinking about it'.", // EDIT
      portrait: "images/members/daud.jpg",
      altPhoto: "",
      focus: "50% 25%",
      spot: { x: 16.7, y: 41.1, w: 10.5, h: 44 },
    },
    {
      id: "sumaid",
      name: "Sumaid",
      nickname: "", // EDIT
      role: "Dark Suit, No Notes", // EDIT
      teaser: "Dressed like the meeting is about you.", // EDIT
      bio: "Dark suit, glasses, perfectly neutral expression. Nobody knows what Sumaid is thinking and the photo is not telling.", // EDIT
      stats: [ // EDIT
        { label: "Formality", value: 99 },
        { label: "Readable emotions", value: 14 },
        { label: "Suit darkness", value: 120 },
      ],
      catchphrase: "", // EDIT
      lore: "Real lore pending. Classified until further notice.", // EDIT
      portrait: "images/members/sumaid.jpg",
      altPhoto: "",
      focus: "50% 25%",
      spot: { x: 27.2, y: 39.8, w: 11.7, h: 40.8 },
    },
    {
      id: "adarsh",
      name: "Adarsh",
      nickname: "", // EDIT
      role: "Centre of Attention (Geographically)", // EDIT
      teaser: "Six gold buttons and a plan.", // EDIT
      bio: "Double-breasted blazer, cream trousers, standing almost exactly in the middle. Has a cat walking past his shoes and has chosen not to address it.", // EDIT
      stats: [ // EDIT
        { label: "Gold buttons", value: 100 },
        { label: "Main character energy", value: 115 },
        { label: "Concern about the cat", value: 0 },
      ],
      catchphrase: "", // EDIT
      lore: "Real lore pending. The buttons know, but they are not talking.", // EDIT
      portrait: "images/members/adarsh.jpg",
      altPhoto: "",
      focus: "50% 25%",
      spot: { x: 38.9, y: 37.2, w: 12.2, h: 42.8 },
    },
    {
      id: "shaddy",
      name: "Shaddy",
      nickname: "", // EDIT
      role: "Man in the Mystery Ring", // EDIT
      teaser: "Arrived pre-framed.", // EDIT
      bio: "Grey suit, calm hands, and a face delivered through a ring that nobody has explained. We have stopped asking.", // EDIT
      stats: [ // EDIT
        { label: "Ring coverage", value: 130 },
        { label: "Explanation provided", value: 0 },
        { label: "Composure", value: 95 },
      ],
      catchphrase: "", // EDIT
      lore: "Real lore pending. The ring's origin story goes here.", // EDIT
      portrait: "images/members/shaddy.jpg",
      altPhoto: "",
      focus: "50% 25%",
      spot: { x: 51.3, y: 35.8, w: 10.1, h: 56 },
    },
    {
      id: "abbasi",
      name: "Abbasi",
      nickname: "", // EDIT
      role: "Slightly Yellow, Entirely Unbothered", // EDIT
      teaser: "Cap on. Saturation up.", // EDIT
      bio: "All black, cap on, glasses on, face set to a colour profile the rest of us were not given access to.", // EDIT
      stats: [ // EDIT
        { label: "Yellowness", value: 125 },
        { label: "Cap commitment", value: 100 },
        { label: "Bothered", value: 2 },
      ],
      catchphrase: "", // EDIT
      lore: "Real lore pending. Somebody please explain the yellow.", // EDIT
      portrait: "images/members/abbasi.jpg",
      altPhoto: "",
      focus: "50% 25%",
      spot: { x: 61.4, y: 37.8, w: 11.3, h: 59.3 },
    },
    {
      id: "hasan",
      name: "Hasan",
      nickname: "", // EDIT
      role: "All-Black Everything Department", // EDIT
      teaser: "The only serious face in the building.", // EDIT
      bio: "Black on black on black, glasses, and the expression of a man who was told this would be a normal photo.", // EDIT
      stats: [ // EDIT
        { label: "Seriousness", value: 110 },
        { label: "Black clothing", value: 100 },
        { label: "Trust in the editor", value: 6 },
      ],
      catchphrase: "", // EDIT
      lore: "Real lore pending. Hasan would like it noted that he did not approve the edits.", // EDIT
      portrait: "images/members/hasan.jpg",
      altPhoto: "",
      focus: "50% 25%",
      spot: { x: 72.8, y: 37.8, w: 8.9, h: 61 },
    },
    {
      id: "ad",
      name: "AD",
      nickname: "", // EDIT
      role: "Head of the Right-Hand Side", // EDIT
      teaser: "Biggest smile, closest to the camera.", // EDIT
      bio: "Blue blazer, far right, smiling like he already knows which reel this photo is going to end up in.", // EDIT
      stats: [ // EDIT
        { label: "Smile wattage", value: 128 },
        { label: "Closeness to camera", value: 100 },
        { label: "Syllables in name", value: 20 },
      ],
      catchphrase: "", // EDIT
      lore: "Real lore pending. Two letters, many stories.", // EDIT
      portrait: "images/members/ad.jpg",
      altPhoto: "",
      focus: "50% 25%",
      spot: { x: 81.7, y: 35.2, w: 18.3, h: 64.5 },
    },
    {
      id: "ruhaan",
      name: "Ruhaan",
      nickname: "", // EDIT
      role: "Resident Cat", // EDIT
      teaser: "Four legs. One face. No comment.", // EDIT
      bio: "Showed up to a formal event as a cat and walked straight across the front of the shot. Honestly the most relaxed person here.", // EDIT
      stats: [ // EDIT
        { label: "Fur", value: 100 },
        { label: "Legs", value: 130 },
        { label: "Respect for the dress code", value: 1 },
      ],
      catchphrase: "", // EDIT
      lore: "Real lore pending. For now: meow.", // EDIT
      portrait: "images/members/ruhaan.jpg",
      altPhoto: "",
      focus: "85% 50%",
      spot: { x: 18.3, y: 81, w: 28.3, h: 19 },
    },
    {
      id: "hadi",
      name: "Hadi",
      nickname: "Hadi Padi",
      role: "Chief Pigeon Officer", // EDIT
      teaser: "Pigeon body. Model face.", // EDIT
      bio: "Could not make it at ground level, so he attended as a pigeon. Giving the camera a look most pigeons can only dream of.", // EDIT
      stats: [ // EDIT
        { label: "Altitude", value: 118 },
        { label: "Pigeon accuracy", value: 88 },
        { label: "Jawline per feather", value: 100 },
      ],
      catchphrase: "", // EDIT
      lore: "Real lore pending. Kabootar jaa jaa jaa.", // EDIT
      portrait: "images/members/hadi.jpg",
      altPhoto: "",
      focus: "70% 20%",
      spot: { x: 52.8, y: 0, w: 24.4, h: 35.2 },
    },
    {
      id: "bilal",
      name: "Bilal",
      nickname: "", // EDIT
      role: "Airborne Division", // EDIT
      teaser: "Wings out. Moustache on.", // EDIT
      bio: "A full bird with the wings open, and next to it, one floating, delighted head. The body and the face have not yet been formally introduced.", // EDIT
      stats: [ // EDIT
        { label: "Wingspan", value: 122 },
        { label: "Head-to-body attachment", value: 9 },
        { label: "Joy", value: 100 },
      ],
      catchphrase: "", // EDIT
      lore: "Real lore pending. He is still up there.", // EDIT
      portrait: "images/members/bilal.jpg",
      altPhoto: "",
      focus: "80% 50%",
      spot: { x: 8.9, y: 0.3, w: 27.8, h: 31 },
    },
  ],

  /* ---------- Reels ----------
     Empty for now, so the site shows "coming soon" slots that link to the profile.
     To add a reel, copy this block inside the [ ] and fill it in:

     {
       title: "Short caption",
       url: "https://www.instagram.com/reel/XXXXXXXX/",
       thumbnail: "images/reels/reel-1.jpg",   // vertical screenshot of the reel
       featuring: ["syed", "bilal"],           // member ids, or [] if not sure
     },
  */
  reels: [],

  /* ---------- Lore ----------
     label = the small stamp, title = heading, text = the story, image = optional photo.
  */
  lore: [
    {
      label: "Exhibit A",
      title: "The Family Portrait",
      text: "Eight men in formal wear, two birds and one cat. Medium: someone's phone and too much free time. On permanent display.",
      image: "images/group.jpg",
    },
    {
      label: "Exhibit B", // EDIT
      title: "How did we get here?",
      text: "This plaque is reserved for the origin story. The group chat is still arguing about who tells it.",
      image: "",
    },
    {
      label: "Exhibit C", // EDIT
      title: "The Incident",
      text: "Every group has one. Ours goes here once everyone agrees on what actually happened.",
      image: "",
    },
  ],

  /* ---------- Chaos Mode phrases ---------- EDIT: put your real catchphrases here */
  chaosPhrases: ["Yaar.", "Scene on hai", "Bhai kya kar raha hai", "Masair assemble", "Bas kar do", "Kabootar!"],

  /* ---------- "Which Masair Are You?" ----------
     Each answer gives points to member ids. Highest total wins.
     `quizResult` lines below are what the visitor sees when they match that member.
  */
  quiz: {
    questions: [
      {
        q: "How do you enter a room?",
        answers: [
          { text: "Through the air. Doors are for people.", points: { bilal: 1, hadi: 2 } },
          { text: "On four legs, low to the ground.", points: { ruhaan: 3 } },
          { text: "In a blazer, hands already folded.", points: { daud: 2, sumaid: 2, syed: 1 } },
          { text: "Face first, through a mysterious ring.", points: { shaddy: 3 } },
        ],
      },
      {
        q: "Your face in the group photo is…",
        answers: [
          { text: "Glowing. Literally. A bit yellow.", points: { abbasi: 3 } },
          { text: "Attached to an animal. No explanation given.", points: { ruhaan: 2, bilal: 1, hadi: 1 } },
          { text: "Smiling like I know something.", points: { ad: 2, adarsh: 2 } },
          { text: "Serious. Somebody has to be.", points: { hasan: 2, syed: 2, sumaid: 1 } },
        ],
      },
      {
        q: "Where do you stand?",
        answers: [
          { text: "Far left. I anchor the whole thing.", points: { syed: 3 } },
          { text: "Dead centre, obviously.", points: { adarsh: 2, shaddy: 1 } },
          { text: "Far right, closest to the camera.", points: { ad: 3 } },
          { text: "I don't stand. I hover.", points: { hadi: 2, bilal: 2 } },
        ],
      },
      {
        q: "Pick the dress code.",
        answers: [
          { text: "White shalwar kameez, blazer on top.", points: { daud: 3, syed: 1 } },
          { text: "All black everything.", points: { hasan: 3, abbasi: 2 } },
          { text: "Double-breasted, gold buttons, cream trousers.", points: { adarsh: 3 } },
          { text: "Dark suit, glasses, no notes.", points: { sumaid: 3 } },
          { text: "Feathers or fur.", points: { bilal: 3, hadi: 1, ruhaan: 2 } },
        ],
      },
      {
        q: "Someone says \"one more photo\". You…",
        answers: [
          { text: "Take off immediately.", points: { hadi: 3, bilal: 1 } },
          { text: "Wander across the front of the shot.", points: { ruhaan: 2 } },
          { text: "Hold the exact same pose. Forever.", points: { sumaid: 2, hasan: 2, daud: 1 } },
          { text: "Bring a prop.", points: { shaddy: 2, abbasi: 2 } },
        ],
      },
    ],
    results: { // EDIT
      syed: "You stand at the edge and somehow still hold the whole thing together.",
      daud: "You are polite, well-pressed, and completely unaware of the bird above you.",
      sumaid: "You dress for the meeting nobody else knew was happening.",
      adarsh: "You are in the middle of everything, and the buttons are doing most of the talking.",
      shaddy: "You arrive with a frame already around you and never explain it.",
      abbasi: "You are operating on a different colour setting and thriving.",
      hasan: "You are the one serious person in a deeply unserious photograph.",
      ad: "You have the biggest smile in the room and you know exactly why.",
      ruhaan: "You ignore the dress code, the pose, and gravity's suggestions. You are the cat.",
      hadi: "You could have stood with everyone else. You chose pigeon.",
      bilal: "Your head and your body are in two different places and both are having a great time.",
    },
  },
};
