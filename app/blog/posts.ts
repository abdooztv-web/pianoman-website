export type PostSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  sections: PostSection[];
};

export const posts: Post[] = [
  {
    slug: "how-piano-restoration-works",
    title: "Inside a Piano Restoration: What We Actually Do",
    date: "2026-04-20",
    readTime: "5 min read",
    excerpt:
      "Most people don't realise how much goes into a full piano restoration. It's not just polishing the outside — we rebuild the instrument from the inside out.",
    sections: [
      {
        type: "paragraph",
        text: "A piano is one of the most complex mechanical instruments ever made. A full-size upright has over 12,000 individual parts; a grand piano has more. When a piano has been neglected for decades, bringing it back to life is a genuine engineering project — not a cosmetic touch-up.",
      },
      {
        type: "heading",
        text: "Step 1: Assessment",
      },
      {
        type: "paragraph",
        text: "Every restoration starts with a thorough inspection. We check the soundboard for cracks, the bridges for integrity, the strings for rust and breakage, the tuning pins for torque, and the action for worn or broken parts. This assessment determines which restoration path the piano needs — and we always share our findings honestly with the owner.",
      },
      {
        type: "heading",
        text: "Step 2: Structural Work",
      },
      {
        type: "paragraph",
        text: "If the soundboard has cracks or separations, we repair or replace it. This is the heart of the piano's tone — a damaged soundboard cannot vibrate correctly, which means the piano can never sound right no matter how well it's tuned. Bridge work, case repairs, and plate refinishing also happen at this stage.",
      },
      {
        type: "heading",
        text: "Step 3: Restringing & Tuning Pins",
      },
      {
        type: "paragraph",
        text: "Old strings lose their elasticity and corrode. We replace them with high-quality music wire, matched precisely to the original specifications. We also replace the tuning pins if they've lost their grip in the pinblock — a piano with loose tuning pins cannot hold pitch, no matter how many times you tune it.",
      },
      {
        type: "heading",
        text: "Step 4: Action Rebuilding",
      },
      {
        type: "paragraph",
        text: "The action is the mechanical system between the keys and the strings. It includes hammers, dampers, shanks, flanges, and dozens of small felt and leather components. After 30–50 years, these parts wear out and lose their regulation. We replace worn felt, reshape or replace hammers, and regulate every note to the same precise specification.",
      },
      {
        type: "heading",
        text: "Step 5: Finishing & Final Tuning",
      },
      {
        type: "paragraph",
        text: "Once all the mechanical work is done, we refinish the cabinet if needed, replace keytops, and carry out a full pitch raise followed by a fine tuning. The result is a piano that plays, sounds, and feels like new — often better than new, because restored instruments have already aged through their most unstable years.",
      },
      {
        type: "paragraph",
        text: "If you have a piano that needs attention — whether it's a family heirloom or a recent find — we'd be glad to assess it. Reach out through our contact page and we'll take a look.",
      },
    ],
  },
  {
    slug: "piano-rental-guide-cairo",
    title: "How to Rent a Piano in Cairo: A Complete Guide",
    date: "2026-04-10",
    readTime: "4 min read",
    excerpt:
      "Thinking about renting a piano in Cairo? Here's everything you need to know — from choosing the right type to what's included in the rental.",
    sections: [
      {
        type: "paragraph",
        text: "Renting a piano in Cairo is a smart move for students, professionals between instruments, event organisers, and families who want to try before they buy. The market has grown significantly in recent years, but it's still not always easy to know what to look for. This guide covers the essentials.",
      },
      {
        type: "heading",
        text: "Why Rent Instead of Buy?",
      },
      {
        type: "list",
        items: [
          "No large upfront investment — monthly costs are predictable",
          "Try a real acoustic piano before committing to a purchase",
          "Ideal for students whose needs may change",
          "Perfect for events, recordings, and short-term projects",
          "Maintenance is usually covered by the rental provider",
        ],
      },
      {
        type: "heading",
        text: "Types of Pianos Available",
      },
      {
        type: "paragraph",
        text: "Most rental providers in Cairo offer upright pianos in various sizes — from compact studios (around 110cm) to full-size uprights (132cm+). Grand piano rentals are also available for events and serious study. If you're just starting out, a mid-size upright is almost always the right choice.",
      },
      {
        type: "heading",
        text: "What to Look for in a Rental",
      },
      {
        type: "list",
        items: [
          "Delivery and setup included — moving a piano requires proper equipment",
          "Tuning included at the start of the rental and periodically after",
          "Clear terms for damage, cancellation, and extensions",
          "A responsive provider who can help if something goes wrong",
          "Instruments that have been properly maintained, not warehoused",
        ],
      },
      {
        type: "heading",
        text: "Our Rental Process",
      },
      {
        type: "paragraph",
        text: "At Pianoman, we walk every client through the available options before recommending an instrument. We handle delivery, placement, and initial tuning. Rentals include periodic tuning checks, and we're available for home visit support throughout your rental period. We also offer a rent-to-buy option if you decide you want to keep the piano.",
      },
      {
        type: "paragraph",
        text: "Curious about what's available? Get in touch through our contact page and we'll find the right fit for your space and budget.",
      },
    ],
  },
  {
    slug: "signs-your-piano-needs-tuning",
    title: "5 Signs Your Piano Needs Tuning Right Now",
    date: "2026-03-28",
    readTime: "3 min read",
    excerpt:
      "Pianos go out of tune gradually — which is why many owners don't notice until things are quite wrong. Here are the five clearest signs it's time to call a tuner.",
    sections: [
      {
        type: "paragraph",
        text: "Unlike a guitar string that snaps or a battery that dies, a piano going out of tune is a slow, quiet process. Most owners don't notice until the piano sounds noticeably wrong — which usually means it's been out of tune for a long time. Here's what to watch and listen for.",
      },
      {
        type: "heading",
        text: "1. It Sounds 'Off' When You Play Along to Music",
      },
      {
        type: "paragraph",
        text: "The clearest test: play a note on your piano and compare it to the same note played from a recording, a phone, or another instrument. If they don't match — if there's a beating, wavering sound when both notes play together — your piano is out of tune.",
      },
      {
        type: "heading",
        text: "2. Some Notes Sound Fine, Others Don't",
      },
      {
        type: "paragraph",
        text: "Pianos go out of tune unevenly. You might find the lower register sounds acceptable while the upper octaves sound harsh, or vice versa. If you notice certain sections of the keyboard sound different from others, it's a sign the piano needs attention.",
      },
      {
        type: "heading",
        text: "3. It Hasn't Been Tuned in Over a Year",
      },
      {
        type: "paragraph",
        text: "Even if a piano sounds okay to an untrained ear, it drifts flat over time. Strings are always under tension, and that tension slowly decreases. A piano that hasn't been tuned in over 12 months almost certainly needs a pitch raise followed by a fine tuning — two sessions rather than one.",
      },
      {
        type: "heading",
        text: "4. The Piano Was Recently Moved",
      },
      {
        type: "paragraph",
        text: "Moving a piano — even within the same room — can disturb its tuning. The vibrations of transport and changes in temperature and humidity during a move all affect pitch. Always tune a piano after it has settled in its new location for two to four weeks.",
      },
      {
        type: "heading",
        text: "5. Cairo's Climate Has Changed",
      },
      {
        type: "paragraph",
        text: "Egypt's climate — particularly the shift between humid summers and dry winters, and the use of air conditioning — causes the wooden parts of a piano to expand and contract. This movement affects the tension of the strings. If you've just turned on your AC for the season or the weather has shifted noticeably, check your piano.",
      },
      {
        type: "heading",
        text: "What Happens If You Wait Too Long?",
      },
      {
        type: "paragraph",
        text: "A piano that has been significantly flat for a long time cannot be brought back to concert pitch in one session. Raising pitch quickly puts sudden stress on the strings and the frame, and the piano will drop again almost immediately. It needs a pitch raise first, then a stabilisation period, then a fine tuning. The longer you wait, the more sessions — and cost — it takes to recover.",
      },
      {
        type: "paragraph",
        text: "We offer home visit tuning across Cairo. If your piano is due — or overdue — get in touch and we'll arrange a convenient time.",
      },
    ],
  },
];
