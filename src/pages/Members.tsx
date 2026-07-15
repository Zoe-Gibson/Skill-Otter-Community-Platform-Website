import { useParams, Link } from 'react-router-dom';
import { Users, Heart, Sparkles, ArrowLeft, Trophy, GraduationCap, Github, Instagram, MapPin } from 'lucide-react';

type Section = {
  icon: string;
  title: string;
  items: string[];
};

type FavoriteGroup = {
  label: string;
  items: string[];
};

type Member = {
  slug: string;
  name: string;
  emoji: string;
  role: string;
  headerGradient: string;
  accent: string;
  sections: Section[];
  favorites?: FavoriteGroup[];
  quote: string;
  extras?: React.ReactNode;
};

const members: Member[] = [
  {
    slug: 'likhita',
    name: 'Likhita Sri Bollam',
    emoji: '🌸',
    role: 'Student & Creative Enthusiast',
    headerGradient: 'from-purple-400 to-teal-400',
    accent: 'text-teal-600',
    sections: [
      {
        icon: '📷',
        title: 'Interests',
        items: ['Photography', 'Reading', 'Singing', 'Coding', 'Writing', 'Data Engineer'],
      },
      {
        icon: '✨',
        title: 'Fun Facts',
        items: [
          "I'm left-handed",
          "I can solve a 3x3 Rubik's cube in under 2 minutes",
          'I know 4 languages',
        ],
      },
      {
        icon: '🎓',
        title: 'Dream School',
        items: ['Georgia Tech'],
      },
    ],
    favorites: [
      { label: 'Movie Series', items: ['The Hunger Games'] },
      {
        label: 'Book Series',
        items: ['The Hunger Games', 'Percy Jackson', "A Good Girl's Guide to Murder", 'Inheritance Games'],
      },
      { label: 'Color', items: ['Lavender'] },
      { label: 'Song', items: ['Memories by Maroon 5'] },
      { label: 'Animal', items: ['Bunnies'] },
    ],
    quote: 'Everything happens for a reason.',
  },
  {
    slug: 'zoe',
    name: 'Zoe Gibson',
    emoji: '🧠',
    role: 'Master of Spinjitzu',
    headerGradient: 'from-sky-400 to-sky-200',
    accent: 'text-sky-600',
    sections: [
      {
        icon: '⌘',
        title: 'Interests',
        items: ['DC Universe', 'Music', 'Medicine', 'Legos'],
      },
      {
        icon: '♥',
        title: 'Favorite Pieces of Media',
        items: ['One Piece', 'Son of Batman', 'Moon Knight', 'Lego Ninjago', 'Stray Kids', 'BTS', 'Star Wars'],
      },
      {
        icon: '⚡',
        title: 'Fun Facts About Me',
        items: [
          'I play cello and I am CPR certified.',
          'I am the social media manager of the North Atlanta Chapter of the American Heart Association.',
          'I am also the Administrative Assistance Manager for the North Atlanta Orchestra for the 26-27 school year.',
        ],
      },
    ],
    quote: 'The One Piece is real!',
  },
  {
    slug: 'rachel',
    name: 'Rachel "Rae" Oguntoye',
    emoji: '🎨',
    role: 'Student & Future Cybersecurity Professional',
    headerGradient: 'from-amber-400 to-yellow-300',
    accent: 'text-amber-600',
    sections: [
      {
        icon: '📷',
        title: 'Interests',
        items: ['Drawing (Traditional and Digital)', 'Reading', 'Playing Videogames', 'Writing'],
      },
      {
        icon: '✨',
        title: 'Fun Fact',
        items: ["I've painted a tile for my school previously."],
      },
    ],
    favorites: [
      { label: 'Video Games', items: ['Stardew Valley', 'Jackpot Crash Course', 'Limbus Company'] },
      { label: 'Movie', items: ['A Silent Voice'] },
      {
        label: 'Aspirations',
        items: ['I aim to become a game developer and cybersecurity professional.'],
      },
    ],
    quote: "I can't stop winning!",
    extras: (
      <div className="flex flex-wrap gap-2 mt-3">
        <span className="text-xs bg-parchment text-brown-500 px-2.5 py-1 rounded-full border border-tan">
          You can also call me "Rae" or "Ray"!
        </span>
        <span className="inline-flex items-center gap-1 text-xs bg-forest-100 text-forest-600 px-2.5 py-1 rounded-full">
          <Github size={12} /> roguntoye5
        </span>
        <span className="inline-flex items-center gap-1 text-xs bg-forest-100 text-forest-600 px-2.5 py-1 rounded-full">
          <Instagram size={12} /> @lemonlimesodaa_
        </span>
      </div>
    ),
  },
  {
    slug: 'hollis',
    name: 'Hollis',
    emoji: '🐻',
    role: 'Code NinjaZ Raft Member',
    headerGradient: 'from-sky-400 to-sky-200',
    accent: 'text-sky-600',
    sections: [
      {
        icon: '⌘',
        title: 'Interests',
        items: ['Videogames', 'Gardening', 'Aviation', 'Animals'],
      },
      {
        icon: '♥',
        title: 'Favorite Pieces of Media',
        items: ['Fruits Basket', 'Bolt', 'Toy Story', 'Yona of the Dawn', 'Strange Magic', 'Brave', 'Lego Ninjago', 'Project Hail Mary'],
      },
      {
        icon: '⚡',
        title: 'Fun Facts About Me',
        items: [
          'I enjoy working out and pushing myself to become better.',
          'My favorite song is "Come and Get Your Love" by Redbone.',
          'My favorite artist is N.E.R.D.',
          'I have 13 pets.',
        ],
      },
      {
        icon: '🏆',
        title: 'Awards and Affiliations',
        items: [
          'A/AB Honor Roll (2021-Present)',
          'The Girl Scout Bronze Award (2021)',
          'Student Ambassador (2021-2022)',
          'Violin Section Leader (2021-2025)',
          'Honor Orchestral Performer (2022-2024)',
          'National Beta Club Membership Holder (2022-2024)',
          "Women's Varsity Wrestling Player (2024-2026)",
          'Symphonic Orchestra Performer (2024-2025)',
          'Georgia High School Association All-Academic Team Award (2025-2026)',
          "Women's Wrestling Sectional Qualifier (2025-2026)",
          "Women's Wrestling State Qualifier (2026)",
          'Philharmonic Orchestra Performer (2025-2026)',
          'Certificate of Completion in Youth in Aviation (2026)',
        ],
      },
    ],
    quote: 'Because it is the power of God that brings salvation to everyone who believes in Jesus Romans 1:16.',
  },
];

const SECTION_ICONS: Record<string, React.ReactNode> = {
  '⌘': <Sparkles size={18} />,
  '♥': <Heart size={18} />,
  '⚡': <Sparkles size={18} />,
  '📷': <Sparkles size={18} />,
  '⭐': <Sparkles size={18} />,
  '✨': <Sparkles size={18} />,
  '🏆': <Trophy size={18} />,
  '🎓': <GraduationCap size={18} />,
};

function GoogleBox() {
  return (
    <div className="mt-10 bg-forest-500 rounded-2xl p-6 text-center shadow-md">
      <div className="flex items-center justify-center gap-2 mb-2">
        <MapPin size={20} className="text-forest-100" />
        <h3 className="text-xl font-bold text-white">Find us on Google!</h3>
      </div>
      <p className="text-forest-100 text-sm">
        Search "Skill Otter" to discover more about our community.
      </p>
    </div>
  );
}

function MemberCard({ member }: { member: Member }) {
  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden border border-brown-200 animate-slide-up">
      <div className={`h-20 bg-gradient-to-r ${member.headerGradient}`} />
      <div className="p-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-otter-dark leading-tight">
            {member.name} <span className="text-2xl">{member.emoji}</span>
          </h2>
          <p className="text-brown-500 text-base mt-1">{member.role}</p>
          {member.extras}
        </div>

        <div className="space-y-6">
          {member.sections.map((section, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className={`w-9 h-9 rounded-lg bg-forest-100 flex items-center justify-center flex-shrink-0 ${member.accent}`}>
                {SECTION_ICONS[section.icon] || <Sparkles size={18} />}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-otter-dark text-sm uppercase tracking-wide mb-2">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item, j) => (
                    <li key={j} className="text-brown-600 text-sm leading-relaxed flex gap-2">
                      <span className="text-brown-300 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {member.favorites && member.favorites.length > 0 && (
            <div className="flex items-start gap-4">
              <div className={`w-9 h-9 rounded-lg bg-forest-100 flex items-center justify-center flex-shrink-0 ${member.accent}`}>
                <Sparkles size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-otter-dark text-sm uppercase tracking-wide mb-2">Favorites</h3>
                <div className="space-y-3">
                  {member.favorites.map((group, i) => (
                    <div key={i}>
                      <p className="text-brown-400 font-semibold text-xs uppercase tracking-wide mb-1">{group.label}</p>
                      <ul className="space-y-1">
                        {group.items.map((item, j) => (
                          <li key={j} className="text-brown-600 text-sm leading-relaxed flex gap-2">
                            <span className="text-brown-300 flex-shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 pt-6 border-t border-brown-100">
          <p className="text-brown-400 italic text-sm leading-relaxed">"{member.quote}"</p>
        </div>
      </div>
    </article>
  );
}

export function FoundersList() {
  return (
    <div className="min-h-screen bg-cream font-serif">
      <div className="bg-forest-500 px-8 py-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Users size={28} className="text-forest-200" />
          <h1 className="text-4xl font-bold text-white">Founders</h1>
        </div>
        <p className="text-forest-100 text-base max-w-xl mx-auto">
          Meet the Code NinjaZ members behind Skill Otter — each bringing their own unique spark.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {members.map((member, idx) => (
            <Link
              key={member.slug}
              to={`/founders/${member.slug}`}
              className="bg-[#dbc9a4] rounded-2xl p-6 border border-brown-200 shadow-sm hover:shadow-md hover:border-brown-400 transition-all group animate-slide-up"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${member.headerGradient} flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 shadow group-hover:scale-105 transition-transform`}>
                  {member.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-otter-dark text-lg group-hover:text-forest-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-brown-500 text-sm mt-1">{member.role}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <GoogleBox />
      </div>
    </div>
  );
}

export default function Founders() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) return <FoundersList />;

  const member = members.find(m => m.slug === slug);

  if (!member) {
    return (
      <div className="min-h-screen bg-cream font-serif flex items-center justify-center">
        <div className="text-center">
          <Users size={48} className="text-brown-300 mx-auto mb-4" />
          <p className="text-brown-400 text-lg font-medium mb-4">Member not found.</p>
          <Link to="/founders" className="inline-block bg-forest-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-forest-600 transition-colors text-sm">
            Back to Founders
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream font-serif">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <Link
          to="/founders"
          className="inline-flex items-center gap-2 mb-6 text-brown-500 hover:text-forest-600 font-semibold text-sm transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Founders
        </Link>

        <MemberCard member={member} />

        <GoogleBox />
      </div>
    </div>
  );
}
