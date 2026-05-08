export type PostSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string };

export type Post = {
  slug: string;
  title: string;
  category: string;
  coverImage: string;
  date: string;
  readTime: string;
  excerpt: string;
  keywords: string[];
  sections: PostSection[];
};

export const posts: Post[] = [
  {
    slug: "piano-rental-cairo-guide",
    title: "Piano Rental in Cairo: How It Works, What It Costs, and What to Look For",
    category: "Rental",
    coverImage: "/piano-studio.jpg",
    date: "2026-05-05",
    readTime: "7 min read",
    excerpt:
      "The complete guide to piano rental in Cairo. Who it's for, what plans exist, what should be included, how to evaluate a provider, and how to get a same-day quote.",
    keywords: [
      "piano rental Cairo",
      "rent a piano Cairo",
      "piano hire Egypt",
      "upright piano rental Cairo",
      "grand piano rental Egypt",
      "monthly piano rental Egypt",
      "piano for events Cairo",
      "تأجير بيانو القاهرة",
      "إيجار بيانو",
      "بيانو للإيجار في مصر",
      "تأجير بيانو شهري",
      "بيانو إيجار القاهرة",
      "إيجار بيانو للدراسة",
      "أفضل شركة تأجير بيانو مصر",
    ],
    sections: [
      {
        type: "paragraph",
        text: "If you're looking for a piano rental in Cairo, you've probably already noticed that the options are not obvious. Music stores in Egypt focus on sales. General rental platforms list everything from furniture to equipment. And searching 'piano rental Cairo' often returns a mix of irrelevant listings, old phone numbers, and regional classifieds. This guide explains exactly how piano rental works in Cairo — the types of plans available, what's typically included, what to watch out for, and how to evaluate whether a provider is serious.",
      },
      {
        type: "heading",
        text: "Who Rents Pianos in Cairo — and Why",
      },
      {
        type: "list",
        items: [
          "Families with children starting lessons — the largest group. Renting provides a maintained acoustic instrument on a monthly plan without the EGP 15,000–50,000+ purchase commitment",
          "Event coordinators and venues — for weddings, corporate events, hotel performances, and galas. Short-term rental with delivery, on-site tuning, and pickup",
          "Musicians and studios — rehearsal studios and working musicians needing a maintained instrument without the capital expense of ownership",
        ],
      },
      {
        type: "heading",
        text: "Types of Rental Plans",
      },
      {
        type: "image",
        src: "/moments/DSC09494.jpg",
        alt: "Upright piano ready for residential rental delivery",
      },
      {
        type: "list",
        items: [
          "Monthly residential rental — the most common plan. Piano delivered to your home, pay monthly, continues until you give notice. Delivery, pickup, and tuning schedule are included.",
          "Event rental (short-term) — for weddings, corporate events, performances. Piano delivered to the venue, tuned on-site before the event, and collected afterward.",
          "Long-term studio / commercial rental — for rehearsal studios or commercial music spaces. Similar to residential but often negotiated at a different rate for longer commitments.",
        ],
      },
      {
        type: "heading",
        text: "What Should Be Included in a Piano Rental",
      },
      {
        type: "list",
        items: [
          "Delivery and setup — the piano should be transported by people who know how to handle the instrument, not general movers",
          "An acoustic, maintained instrument — in playing condition when it arrives, properly regulated, reasonably tuned, without significant damage",
          "Tuning support — after delivery and periodically. Always ask: 'what happens when it needs tuning?'",
          "Pickup at end of rental — you should not be responsible for transport",
          "A real contact number — someone who answers when you call, especially important for events",
        ],
      },
      {
        type: "heading",
        text: "Acoustic vs. Digital: Which Is Right for Your Situation?",
      },
      {
        type: "paragraph",
        text: "If your child is learning from a piano teacher, acoustic is better for technique. The weighted keys of an acoustic piano provide the physical resistance that develops proper finger strength and control. Digital pianos simulate this but don't fully replicate it — teachers notice the difference.",
      },
      {
        type: "paragraph",
        text: "For events: acoustic always. A digital piano at a formal wedding or corporate event is a visible downgrade that guests notice. For casual practice or a beginner who's not yet committed, a digital keyboard can work for the first 3–6 months. After that, if lessons are continuing, an acoustic upgrade is worth it.",
      },
      {
        type: "image",
        src: "/moments/DSC09450.jpg",
        alt: "Piano strings and internal mechanism detail",
      },
      {
        type: "heading",
        text: "How to Evaluate a Piano Rental Provider in Cairo",
      },
      {
        type: "paragraph",
        text: "Green flags: clear answer to 'what does the rental include?', technicians who can speak to the condition of the specific instrument, home visit capability, responsive communication before you've signed anything, and they can tell you when the instrument was last tuned.",
      },
      {
        type: "paragraph",
        text: "Red flags: vague or evasive answers about what's included, no information about the instrument's service history, no tuning support mentioned, no physical address or verifiable presence in Cairo, prices that seem unusually low without explanation of what's included.",
      },
      {
        type: "heading",
        text: "Frequently Asked Questions",
      },
      {
        type: "list",
        items: [
          "Can I see the piano before committing? With Pianoman Egypt: yes. We can show you the instrument or discuss the specific unit being delivered before you confirm.",
          "What if the piano needs repair mid-rental? Contact us. We handle it — that's part of what the rental relationship includes.",
          "What if my child stops lessons? Give notice and we collect the piano. No complicated exit process.",
          "Can I upgrade to a better instrument later? Yes. If your child advances or your needs change, we discuss the upgrade path.",
          "Do you deliver anywhere in Cairo? Yes — Heliopolis, Maadi, Zamalek, New Cairo, Nasr City, and surrounding areas.",
          "What if I want to eventually buy the piano I'm renting? Rent-to-own arrangements can be structured depending on the instrument — ask us directly.",
        ],
      },
      {
        type: "heading",
        text: "Pricing",
      },
      {
        type: "paragraph",
        text: "Piano rental pricing in Cairo depends on the instrument type, plan length, and services included. We don't publish a fixed price list because the right arrangement depends on your specific situation. The fastest way to get a number: WhatsApp us a brief description — instrument type, your Cairo district, and whether it's for lessons, an event, or other — and we'll respond with a quote the same day.",
      },
    ],
  },
  {
    slug: "rent-vs-buy-piano-cairo",
    title: "Rent or Buy a Piano in Cairo? Here's What Parents Actually Pay in 2026",
    category: "Rental",
    coverImage: "/piano-lesson.jpg",
    date: "2026-05-01",
    readTime: "6 min read",
    excerpt:
      "If your child just started piano lessons, you're facing the same question every Cairo parent faces. The answer depends on one honest question about commitment.",
    keywords: [
      "piano rental Cairo",
      "rent or buy piano Egypt",
      "buy piano Cairo",
      "piano price Egypt 2026",
      "piano for kids Cairo",
      "بيانو للإيجار القاهرة",
      "شراء بيانو أم استئجار",
      "سعر البيانو في مصر",
      "تأجير بيانو للأطفال",
      "إيجار بيانو مصر 2026",
      "بيانو للتعلم القاهرة",
    ],
    sections: [
      {
        type: "paragraph",
        text: "If your child just started piano lessons — or is about to — you're probably staring at the same question every Cairo parent faces: do I buy a piano, or rent one? The short answer is: it depends on one thing. And that one thing is honesty about what happens if your child stops playing in six months.",
      },
      {
        type: "heading",
        text: "What Does Buying a Piano in Cairo Actually Cost?",
      },
      {
        type: "paragraph",
        text: "A new acoustic upright piano in Egypt — the kind that a beginner actually needs for proper technique — runs from EGP 15,000 on the low end to EGP 50,000+ for a reliable brand like Yamaha or Kawai.",
      },
      {
        type: "paragraph",
        text: "Used pianos on OLX Egypt look tempting. Prices start around EGP 5,000. But here's what those listings don't tell you:",
      },
      {
        type: "list",
        items: [
          "You don't know when it was last tuned",
          "You don't know what the internal condition of the strings, hammers, and soundboard looks like",
          "You often can't test it before buying",
          "If something goes wrong after purchase, the seller is gone",
        ],
      },
      {
        type: "paragraph",
        text: "A piano that's been sitting untuned in an apartment for three years doesn't just sound wrong. Its pitch has dropped, and playing on it teaches a child's ear the wrong reference. That's not a cosmetic issue.",
      },
      {
        type: "image",
        src: "/moments/DSC09494.jpg",
        alt: "Upright piano suitable for home learning",
      },
      {
        type: "paragraph",
        text: "A Yamaha digital piano from Jumia or Amazon.eg starts around EGP 8,000–25,000. Digital is better than nothing, but it doesn't have weighted keys that properly simulate the resistance of an acoustic instrument. Teachers notice the difference. It matters more than most parents expect.",
      },
      {
        type: "paragraph",
        text: "The real cost of buying: EGP 15,000–50,000 for something worth buying. Plus tuning (EGP 400–700 per visit, recommended twice yearly). Plus any repairs that come up. All of it upfront.",
      },
      {
        type: "heading",
        text: "What Does Renting Cost?",
      },
      {
        type: "paragraph",
        text: "Renting from a specialist like Pianoman Egypt means you pay a monthly fee and get a real, maintained acoustic instrument delivered to your home. The rental price depends on the piano type and plan length — contact for a current quote — but the structure is straightforward:",
      },
      {
        type: "list",
        items: [
          "Monthly plan: pay per month, no long-term contract required",
          "Delivery included: the piano comes to you — you don't arrange transport",
          "Tuning covered: if the piano needs tuning during your rental, you have someone to call",
        ],
      },
      {
        type: "paragraph",
        text: "No EGP 30,000 commitment. No risk of buying something in unknown condition. No logistics.",
      },
      {
        type: "heading",
        text: "5 Questions to Ask Before You Decide",
      },
      {
        type: "paragraph",
        text: "How serious is my child about this? If they've been asking to learn for two years and your budget allows, buying makes long-term sense. If they just started and you're not sure, renting removes the risk.",
      },
      {
        type: "paragraph",
        text: "What happens if we stop? With a rental: you give notice and the piano is collected. With a purchase: you now own a large instrument you need to sell.",
      },
      {
        type: "paragraph",
        text: "What quality instrument can I actually afford? A EGP 6,000 used piano from OLX is not equivalent to renting a maintained, tuned acoustic. The quality gap matters for learning.",
      },
      {
        type: "paragraph",
        text: "Do I have space for a full-time instrument? A standard upright piano is roughly 150cm wide and 60cm deep. It stays. It doesn't move around your apartment.",
      },
      {
        type: "paragraph",
        text: "What's the total cost of ownership? Buying: purchase price + tuning (at least twice a year) + any repairs + eventual sale logistics if you stop. Renting: fixed monthly fee, no surprises.",
      },
      {
        type: "heading",
        text: "What About When the Piano Needs Tuning?",
      },
      {
        type: "paragraph",
        text: "An acoustic piano needs tuning at minimum twice a year. In Cairo's climate — with significant temperature and humidity shifts between summer and winter — instruments drift faster. Air conditioning adds another variable.",
      },
      {
        type: "paragraph",
        text: "If you buy a piano, finding a trusted, qualified tuner in Cairo is your problem to solve every time. If you rent from Pianoman Egypt, you have a number to call. An out-of-tune piano is actively bad for a learning child's pitch development. The first instrument shapes how the ear develops reference pitch.",
      },
      {
        type: "image",
        src: "/moments/DSC09272.jpg",
        alt: "Piano technician performing a home tuning visit",
      },
      {
        type: "heading",
        text: "Rent if:",
      },
      {
        type: "list",
        items: [
          "Your child is just starting out",
          "You're not ready to commit EGP 20,000+",
          "You want flexibility to upgrade, change, or stop without logistics",
          "You don't want to deal with finding a tuner on your own",
        ],
      },
      {
        type: "heading",
        text: "Buy if:",
      },
      {
        type: "list",
        items: [
          "Your child has been playing for 2+ years and is clearly committed",
          "You have the budget for a quality instrument from a reputable brand",
          "You understand the ongoing maintenance costs and have a plan for them",
        ],
      },
    ],
  },
  {
    slug: "piano-tuning-cairo",
    title: "How Often Should You Tune a Piano in Cairo — And What Does It Cost?",
    category: "Tuning",
    coverImage: "/piano-close.jpg",
    date: "2026-04-25",
    readTime: "5 min read",
    excerpt:
      "Most piano owners in Cairo know their instrument needs tuning. Most don't know when it last happened. Here's the honest guide to frequency, signs to watch for, and what to expect from a home visit.",
    keywords: [
      "piano tuning Cairo",
      "piano technician Cairo",
      "piano tuning Egypt",
      "piano pitch raise Cairo",
      "piano tuner home visit Cairo",
      "ضبط بيانو القاهرة",
      "دوزان بيانو مصر",
      "ضبط بيانو",
      "خبير بيانو القاهرة",
      "متى يحتاج البيانو للضبط",
      "تونينج بيانو مصر",
      "كم مرة يحتاج البيانو للضبط",
    ],
    sections: [
      {
        type: "paragraph",
        text: "Most piano owners in Cairo know their instrument needs tuning. Most of them don't know when the last time it happened was. If you're in that category — this is the article to read before you do anything else.",
      },
      {
        type: "heading",
        text: "The Basic Rule: Twice a Year, Minimum",
      },
      {
        type: "paragraph",
        text: "Piano manufacturers, including Yamaha and Steinway, recommend tuning an acoustic piano at least twice per year. That's for a piano in a controlled, stable environment. Cairo is not a controlled, stable environment.",
      },
      {
        type: "paragraph",
        text: "Between October and April, humidity in Cairo drops significantly — particularly in heated, air-conditioned homes. Between May and September, temperatures climb and humidity patterns shift again. Every swing causes the wooden components inside a piano to expand and contract. The strings are under approximately 20 tons of tension. The result: a piano in Cairo drifts out of tune faster than one in a climate-controlled European home.",
      },
      {
        type: "list",
        items: [
          "Pianos played daily: tune every 3–4 months",
          "Pianos played several times a week: tune every 4–6 months",
          "Pianos played occasionally: tune twice a year minimum",
        ],
      },
      {
        type: "paragraph",
        text: "A piano that hasn't been tuned in more than a year may need a pitch raise — a more intensive process — before a standard tuning can hold. This takes longer and costs more. Waiting doesn't save money. It usually costs more.",
      },
      {
        type: "heading",
        text: "Signs Your Piano Is Out of Tune",
      },
      {
        type: "image",
        src: "/moments/DSC09272.jpg",
        alt: "Piano technician tuning strings at a home visit in Cairo",
      },
      {
        type: "list",
        items: [
          "Notes sound 'wavy' or unsteady — when two strings on the same note vibrate at slightly different frequencies, you hear a wavering beat",
          "The instrument sounds 'off' even on simple songs — if you play something you know well and something feels wrong, trust that instinct",
          "Your piano teacher mentioned it — teachers notice within the first few minutes of a lesson",
          "It hasn't been tuned in over a year — this alone is reason enough, regardless of how it sounds to you",
        ],
      },
      {
        type: "heading",
        text: "What Happens During a Tuning Visit?",
      },
      {
        type: "list",
        items: [
          "Assessment — the technician plays through the keyboard and listens to identify which strings are most out of pitch",
          "Pitch raise (if needed) — if the piano is significantly flat, the technician raises the overall pitch in a first pass before precise tuning",
          "Fine tuning — each note has 1–3 strings; the technician adjusts tension on each until they vibrate in precise alignment",
          "Check and settle — the full keyboard is played again and any strings that shifted during the process are corrected",
        ],
      },
      {
        type: "paragraph",
        text: "A standard tuning takes 60–90 minutes. A pitch raise adds another 30–60 minutes.",
      },
      {
        type: "heading",
        text: "Why You Should Not Attempt It Yourself",
      },
      {
        type: "paragraph",
        text: "Piano tuning tools are commercially available. DIY tuning is still a bad idea. Tuning a piano incorrectly — particularly over-tightening strings — can break them. And a broken string on a piano is not a quick fix. On an older instrument, replacement strings can be hard to source in Egypt.",
      },
      {
        type: "paragraph",
        text: "A qualified technician also notices other issues during a visit: a loose tuning pin, a stuck hammer, a pedal that's developing a problem. This preventive observation is worth more than the tuning fee itself.",
      },
      {
        type: "image",
        src: "/moments/DSC09370.jpg",
        alt: "Piano craftsman working in the workshop",
      },
      {
        type: "heading",
        text: "What Does Piano Tuning Cost in Cairo?",
      },
      {
        type: "paragraph",
        text: "Pricing varies based on the condition of the instrument, your location in Cairo, and whether a pitch raise is required. Contact Pianoman Egypt for a current quote for your specific piano and district. We do home visits across all Cairo districts — you don't need to transport the instrument.",
      },
    ],
  },
  {
    slug: "piano-restoration-assessment-cairo",
    title: "Your Inherited Piano Might Still Be Playable — Here's How to Tell",
    category: "Restoration",
    coverImage: "/restoration/1.jpg",
    date: "2026-04-20",
    readTime: "5 min read",
    excerpt:
      "There's a piano sitting in a corner of your family's history. Before you give up on it — or spend a fortune — read this. A free assessment can tell you exactly what it needs.",
    keywords: [
      "piano restoration Cairo",
      "old piano Egypt",
      "piano repair Egypt",
      "inherited piano Cairo",
      "piano assessment Cairo",
      "ترميم بيانو القاهرة",
      "إصلاح بيانو قديم",
      "بيانو قديم مصر",
      "تجديد بيانو مصر",
      "ترميم آلة البيانو",
      "فحص بيانو قديم مصر",
      "إصلاح بيانو الجدة",
    ],
    sections: [
      {
        type: "paragraph",
        text: "There's a piano sitting in a corner of a room somewhere in your family's history. Maybe your grandmother played it. Maybe it came with the apartment when you moved in. Maybe it's been covered with a cloth for fifteen years and you've stopped noticing it. The question a lot of Cairo families eventually ask is: is it worth fixing? The answer, more often than people expect, is yes.",
      },
      {
        type: "heading",
        text: "What Is Piano Restoration?",
      },
      {
        type: "paragraph",
        text: "Restoration is not the same as repair. Repair addresses a specific malfunction: a key that doesn't respond, a pedal that doesn't engage, a string that broke. Restoration is more comprehensive — it addresses years of accumulated wear, environmental exposure, and age-related degradation, and brings an instrument back to functional, playable condition.",
      },
      {
        type: "paragraph",
        text: "A restored piano won't always be identical to its original state, but it should play reliably and sound like itself again. Not every old piano needs — or benefits from — full restoration. Which brings us to the more useful question.",
      },
      {
        type: "heading",
        text: "6 Signs an Old Piano Can Be Restored",
      },
      {
        type: "image",
        src: "/moments/DSC09310.jpg",
        alt: "Piano soundboard and strings during restoration inspection",
      },
      {
        type: "list",
        items: [
          "The cabinet is structurally sound — solid wood casing still intact (surface damage is cosmetic and doesn't indicate what's happening inside)",
          "The soundboard has no significant cracks — small hairline cracks are common in older instruments and often repairable",
          "The strings are mostly intact — one or two broken strings is routine and replaceable; excessive rust is more significant",
          "The keys respond, even roughly — if something moves when you press a key, the action is probably intact and repairable",
          "The hammers are present and mostly shaped — hammer voicing is a standard part of restoration work",
          "The tuning pins hold tension — a technician will test this; loose pins can often be addressed without full replacement",
        ],
      },
      {
        type: "heading",
        text: "When It's Not Worth Restoring",
      },
      {
        type: "paragraph",
        text: "Honesty matters here. Some pianos are genuinely not worth the investment: instruments with catastrophic soundboard damage, structural frame damage (the cast iron plate is very rarely repairable if cracked), or very low-quality instruments from the beginning — restoration brings a piano back to what it was. If what it was wasn't much, restoration has a ceiling. A good technician will tell you this directly after an assessment.",
      },
      {
        type: "heading",
        text: "What the Restoration Process Looks Like",
      },
      {
        type: "image",
        src: "/moments/DSC09445.jpg",
        alt: "Copper wire spools and piano strings during restoration",
      },
      {
        type: "list",
        items: [
          "Deep cleaning of the interior (decades of dust affect both sound and mechanism)",
          "Hammer reshaping (voicing) or replacement",
          "Replacing broken or corroded strings",
          "Key repair and leveling",
          "Pedal mechanism adjustment",
          "Tuning — which may require a pitch raise first if the instrument has dropped significantly",
          "Cabinet touch-up (optional — cosmetic, not functional)",
        ],
      },
      {
        type: "paragraph",
        text: "Not every instrument needs all of these. The assessment determines the scope.",
      },
      {
        type: "heading",
        text: "What Does Restoration Cost in Egypt?",
      },
      {
        type: "paragraph",
        text: "The range is wide, because the work varies significantly by instrument. A basic assessment, cleaning, and standard tuning is a different project from a full restringing and action overhaul.",
      },
      {
        type: "paragraph",
        text: "Pianoman Egypt offers a free assessment — we look at your instrument, tell you what it needs, and give you a quote with no obligation. You decide whether to proceed. We come to you — all Cairo districts.",
      },
      {
        type: "image",
        src: "/moments/DSC09467.jpg",
        alt: "Piano technician examining action mechanism during restoration",
      },
    ],
  },
  {
    slug: "event-piano-rental-cairo",
    title: "Planning a Wedding or Corporate Event in Cairo? Here's How Piano Rental Actually Works",
    category: "Events",
    coverImage: "/piano-playing.jpg",
    date: "2026-04-15",
    readTime: "4 min read",
    excerpt:
      "If a piano is on your event brief, 'find a piano' is harder than it sounds. Here's exactly how professional event piano rental works in Cairo — and what separates a reliable provider from a logistics disaster.",
    keywords: [
      "piano rental wedding Cairo",
      "event piano Cairo",
      "grand piano rental Egypt",
      "corporate event piano Cairo",
      "piano hire wedding Egypt",
      "بيانو للأفراح مصر",
      "استئجار بيانو للحفلات",
      "بيانو للمناسبات القاهرة",
      "تأجير بيانو للفعاليات",
      "بيانو حفلات مصر",
      "بيانو زفاف مصر",
    ],
    sections: [
      {
        type: "paragraph",
        text: "If you're coordinating an event in Cairo — a wedding, a hotel dinner, a corporate gala — and a piano is on the brief, you already know that 'find a piano' is harder than it sounds. Music stores sell pianos. They don't typically deliver them, tune them at your venue, and pick them up the next morning. And most general rental listings you'll find online are not set up for events.",
      },
      {
        type: "heading",
        text: "What Types of Pianos Are Available for Cairo Events?",
      },
      {
        type: "image",
        src: "/moments/DSC09215.jpg",
        alt: "Piano in an event setting, Cairo",
      },
      {
        type: "paragraph",
        text: "Upright pianos take up less floor space, are easier to transport, and suit cocktail hours, smaller reception areas, or venues where the piano is ambient rather than the focal point. Grand pianos create a visual statement — required if a performing pianist is part of the event. A baby grand needs roughly 150cm in length, a full concert grand considerably more.",
      },
      {
        type: "paragraph",
        text: "For events where a real acoustic instrument is important — weddings, classical performances, formal corporate events — acoustic is the appropriate choice. A digital piano at a formal wedding is a visible downgrade that guests notice.",
      },
      {
        type: "heading",
        text: "What Should Be Included in a Professional Event Rental?",
      },
      {
        type: "list",
        items: [
          "Delivery to your venue — transported in appropriate conditions, not in an open truck, by movers who know piano handling",
          "On-site tuning before guests arrive — any piano that has been moved needs tuning at the venue, after delivery and settling time",
          "Pickup after the event — arranged in advance, not a logistics problem you solve the next morning",
          "A contact number that works on the event day — you need to reach someone if something comes up",
        ],
      },
      {
        type: "heading",
        text: "Questions to Ask Before You Book",
      },
      {
        type: "paragraph",
        text: "Do you tune the piano at the venue, or just before transport? The correct answer: at the venue, after delivery and settling time. What is your delivery vehicle and process for moving the instrument? A grand piano requires specialized equipment and trained movers — ask specifically. How far in advance should we book? For weddings and major events: minimum 2–3 weeks. For peak dates: earlier is better.",
      },
      {
        type: "heading",
        text: "How Far in Advance to Book",
      },
      {
        type: "list",
        items: [
          "Standard events: 1–2 weeks minimum",
          "Weddings and major venue bookings: 3–4 weeks minimum",
          "Peak season (summer weddings, Ramadan galas, New Year's): as early as possible — these dates fill fast",
        ],
      },
      {
        type: "heading",
        text: "Why This Matters for Your Reputation",
      },
      {
        type: "paragraph",
        text: "If you're an event coordinator or venue manager, every vendor at your event reflects on you. A piano that arrives out of tune, or that doesn't arrive at all, is not the music vendor's problem after that point — it's yours. This is why working with a specialist matters more for events than for home rentals. The logistics window is narrow, the stakes are visible to clients, and there's no margin for error.",
      },
      {
        type: "paragraph",
        text: "Pianoman Egypt handles event piano delivery and on-site tuning across Cairo — hotels, wedding halls, corporate venues. Contact via WhatsApp for the fastest response.",
      },
    ],
  },
];
