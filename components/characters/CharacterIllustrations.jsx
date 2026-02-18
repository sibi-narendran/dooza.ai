const characterStyles = {
    eva: { accent: '#3b82f6', bg: '#dbeafe' },
    somi: { accent: '#ec4899', bg: '#fce7f3' },
    seomi: { accent: '#10b981', bg: '#d1fae5' },
    rachel: { accent: '#8b5cf6', bg: '#ede9fe' },
    stan: { accent: '#f97316', bg: '#ffedd5' },
    linda: { accent: '#64748b', bg: '#f1f5f9' },
};

function CharacterBase({ accent, bg, accessory, size = 120 }) {
    const scale = size / 120;
    return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Body circle bg */}
            <circle cx="60" cy="85" r="32" fill={bg} />
            {/* Body */}
            <path d="M40 88C40 74 48 66 60 66C72 66 80 74 80 88" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" fill={bg} />
            {/* Head */}
            <circle cx="60" cy="42" r="22" fill="#fef3c7" stroke="#1e293b" strokeWidth="2.5" />
            {/* Hair */}
            <path d="M38 38C38 26 48 20 60 20C72 20 82 26 82 38" stroke="#1e293b" strokeWidth="2.5" fill="#1e293b" />
            {/* Eyes */}
            <circle cx="52" cy="42" r="2.5" fill="#1e293b" />
            <circle cx="68" cy="42" r="2.5" fill="#1e293b" />
            {/* Smile */}
            <path d="M53 50C55 53 65 53 67 50" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
            {/* Collar accent */}
            <path d="M48 68L60 76L72 68" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
            {/* Accessory */}
            {accessory}
        </svg>
    );
}

export function EvaCharacter({ size = 120 }) {
    const { accent, bg } = characterStyles.eva;
    return (
        <CharacterBase
            accent={accent}
            bg={bg}
            size={size}
            accessory={
                <>
                    {/* Laptop */}
                    <rect x="42" y="90" width="36" height="4" rx="1" fill={accent} opacity="0.8" />
                    <rect x="46" y="82" width="28" height="10" rx="2" fill={accent} opacity="0.3" stroke={accent} strokeWidth="1.5" />
                    {/* Typing sparkle */}
                    <circle cx="56" cy="86" r="1" fill={accent} />
                    <circle cx="62" cy="85" r="1" fill={accent} />
                </>
            }
        />
    );
}

export function SomiCharacter({ size = 120 }) {
    const { accent, bg } = characterStyles.somi;
    return (
        <CharacterBase
            accent={accent}
            bg={bg}
            size={size}
            accessory={
                <>
                    {/* Phone */}
                    <rect x="82" y="60" width="12" height="20" rx="3" fill={accent} opacity="0.3" stroke={accent} strokeWidth="1.5" />
                    <circle cx="88" cy="75" r="1.5" fill={accent} />
                    {/* Speech bubble */}
                    <rect x="86" y="36" width="20" height="12" rx="4" fill={accent} opacity="0.2" stroke={accent} strokeWidth="1.5" />
                    <circle cx="93" cy="42" r="1.5" fill={accent} />
                    <circle cx="98" cy="42" r="1.5" fill={accent} />
                    <circle cx="103" cy="42" r="1.5" fill={accent} />
                </>
            }
        />
    );
}

export function SeomiCharacter({ size = 120 }) {
    const { accent, bg } = characterStyles.seomi;
    return (
        <CharacterBase
            accent={accent}
            bg={bg}
            size={size}
            accessory={
                <>
                    {/* Magnifying glass */}
                    <circle cx="92" cy="56" r="8" fill="none" stroke={accent} strokeWidth="2" />
                    <line x1="98" y1="62" x2="105" y2="69" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
                    {/* Chart bar */}
                    <rect x="14" y="78" width="6" height="16" rx="1" fill={accent} opacity="0.3" />
                    <rect x="22" y="72" width="6" height="22" rx="1" fill={accent} opacity="0.5" />
                    <rect x="30" y="66" width="6" height="28" rx="1" fill={accent} opacity="0.7" />
                </>
            }
        />
    );
}

export function RachelCharacter({ size = 120 }) {
    const { accent, bg } = characterStyles.rachel;
    return (
        <CharacterBase
            accent={accent}
            bg={bg}
            size={size}
            accessory={
                <>
                    {/* Headset */}
                    <path d="M36 40C36 28 46 22 60 22" stroke={accent} strokeWidth="3" strokeLinecap="round" fill="none" />
                    <rect x="32" y="38" width="6" height="10" rx="3" fill={accent} />
                    {/* Waving hand */}
                    <circle cx="90" cy="58" r="5" fill="#fef3c7" stroke="#1e293b" strokeWidth="1.5" />
                    <line x1="88" y1="54" x2="86" y2="50" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="90" y1="53" x2="90" y2="48" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="92" y1="54" x2="94" y2="50" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
                </>
            }
        />
    );
}

export function StanCharacter({ size = 120 }) {
    const { accent, bg } = characterStyles.stan;
    return (
        <CharacterBase
            accent={accent}
            bg={bg}
            size={size}
            accessory={
                <>
                    {/* Briefcase */}
                    <rect x="78" y="76" width="20" height="14" rx="3" fill={accent} opacity="0.3" stroke={accent} strokeWidth="1.5" />
                    <path d="M84 76V73C84 71 86 70 88 70C90 70 92 71 92 73V76" stroke={accent} strokeWidth="1.5" fill="none" />
                    {/* Rising arrow */}
                    <line x1="16" y1="90" x2="32" y2="70" stroke={accent} strokeWidth="2" strokeLinecap="round" />
                    <polyline points="26,70 32,70 32,76" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </>
            }
        />
    );
}

export function LindaCharacter({ size = 120 }) {
    const { accent, bg } = characterStyles.linda;
    return (
        <CharacterBase
            accent={accent}
            bg={bg}
            size={size}
            accessory={
                <>
                    {/* Document/paper */}
                    <rect x="82" y="62" width="16" height="22" rx="2" fill="white" stroke={accent} strokeWidth="1.5" />
                    <line x1="86" y1="68" x2="94" y2="68" stroke={accent} strokeWidth="1" opacity="0.5" />
                    <line x1="86" y1="72" x2="94" y2="72" stroke={accent} strokeWidth="1" opacity="0.5" />
                    <line x1="86" y1="76" x2="91" y2="76" stroke={accent} strokeWidth="1" opacity="0.5" />
                    {/* Glasses */}
                    <circle cx="52" cy="42" r="6" fill="none" stroke={accent} strokeWidth="1.5" />
                    <circle cx="68" cy="42" r="6" fill="none" stroke={accent} strokeWidth="1.5" />
                    <line x1="58" y1="42" x2="62" y2="42" stroke={accent} strokeWidth="1.5" />
                </>
            }
        />
    );
}

export function CharacterGroup({ size = 80 }) {
    return (
        <div className="flex items-end justify-center gap-2 md:gap-4">
            <div className="animate-float" style={{ animationDelay: '0s' }}>
                <EvaCharacter size={size} />
            </div>
            <div className="animate-float" style={{ animationDelay: '0.5s' }}>
                <SomiCharacter size={size * 1.1} />
            </div>
            <div className="animate-float" style={{ animationDelay: '1s' }}>
                <RachelCharacter size={size * 0.95} />
            </div>
            <div className="animate-float" style={{ animationDelay: '1.5s' }}>
                <StanCharacter size={size} />
            </div>
        </div>
    );
}

const characterMap = {
    Eva: EvaCharacter,
    Somi: SomiCharacter,
    Seomi: SeomiCharacter,
    Rachel: RachelCharacter,
    Stan: StanCharacter,
    Linda: LindaCharacter,
};

export function getCharacter(name) {
    return characterMap[name] || EvaCharacter;
}

export default characterMap;
