// AI slop detection engine — pure functions, runs fully client-side.
// Pattern definitions adapted from Peter Yang's open-source /no-ai-slop skill
// (https://github.com/petergyang/no-ai-slop), MIT License.

const phraseGroup = (phrases) =>
    new RegExp(`\\b(${phrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+')).join('|')})\\b`, 'gi');

export const SLOP_PATTERNS = [
    {
        id: 'banned-words',
        name: 'Overused AI words',
        shortName: 'AI buzzwords',
        description: 'Words that show up constantly in AI-generated text and almost never in human writing.',
        suggestion: 'Cut the word or swap it for a plain one.',
        regexes: [
            phraseGroup([
                'delve', 'delve into', 'foster', 'leverage', 'utilize', 'facilitate', 'empower',
                'streamline', 'robust', 'cutting-edge', 'paradigm shift', 'game changer', 'game-changer',
                'this is huge', 'this changes everything', 'tapestry', 'realm', 'beacon',
                'multifaceted', 'meticulous', 'intricate', 'paramount', 'transformative', 'elevate',
                'embark', 'supercharge', 'harness', 'ever-evolving',
            ]),
        ],
    },
    {
        id: 'empty-adverbs',
        name: 'Empty adverbs',
        shortName: 'Empty adverbs',
        description: 'Adverbs that usually add nothing to the sentence.',
        suggestion: 'Delete it. The sentence almost always reads stronger without it.',
        regexes: [
            phraseGroup([
                'literally', 'honestly', 'simply', 'actually', 'truly', 'fundamentally',
                'importantly', 'crucially', 'inherently', 'inevitably',
            ]),
        ],
    },
    {
        id: 'empty-phrases',
        name: 'Empty filler phrases',
        shortName: 'Filler phrases',
        description: 'Stock phrases that delay the point and pad the word count.',
        suggestion: 'Cut the phrase and start the sentence at the point.',
        regexes: [
            phraseGroup([
                "it's worth noting", "it's important to note", 'at the end of the day',
                'when it comes to', 'at its core', "in today's world", 'in the age of',
                'in the world of', 'the reality is', 'the truth is', 'in terms of',
                'with regard to', 'in order to', 'going forward', 'in this article',
                "let's dive in",
            ]),
        ],
    },
    {
        id: 'throat-clearing',
        name: 'Throat-clearing opener',
        shortName: 'Throat-clearing',
        description: 'An opener that warms up instead of saying the thing.',
        suggestion: 'Delete it and state the point directly.',
        regexes: [
            phraseGroup([
                "here's the thing", "here's what I mean", 'let me be clear', "I'll be honest",
                'the uncomfortable truth is', 'believe it or not', "here's why that matters",
            ]),
        ],
    },
    {
        id: 'faux-insight',
        name: 'Faux-insight setup',
        shortName: 'Faux insight',
        description: 'Flatters the writer as the lone expert instead of making the claim.',
        suggestion: 'Cut the setup and let the claim stand on its own.',
        regexes: [
            phraseGroup([
                "here's what nobody tells you", 'what nobody tells you', 'the part everyone misses',
                'what most people get wrong', 'the part most people skip', 'most people miss',
                'nobody talks about', "what they don't tell you",
            ]),
        ],
    },
    {
        id: 'binary-contrast',
        name: 'Binary contrast',
        shortName: 'Binary contrast',
        description: '"It\'s not X. It\'s Y.", a formula AI reaches for constantly.',
        suggestion: 'State Y directly without the fake tension.',
        regexes: [
            /\bit(?:'s| is) not ([^.!?;]{1,60}?),?\s*it(?:'s| is)\b/gi,
            /\bisn(?:'|’)t ([^.!?;]{1,60}?)\.\s*It(?:'s| is)\b/gi,
            /\bnot just\b[^.!?;]{1,80}?\bbut\b/gi,
        ],
    },
    {
        id: 'colon-reveal',
        name: 'Colon reveal',
        shortName: 'Colon reveal',
        description: 'A noun phrase, a colon, then a dramatic lowercase reveal.',
        suggestion: 'Rewrite as a plain sentence. Colons are for lists, labels, and quotes, not drama.',
        regexes: [
            /(?:^|\.\s+|! |\? )([A-Z][^.!?:\n]{2,60}):\s+(?=[a-z])/gm,
        ],
        matchIndex: 1,
    },
    {
        id: 'superficial-analysis',
        name: 'Superficial analysis',
        shortName: 'Superficial analysis',
        description: 'A trailing "-ing" clause that pretends to explain why something matters.',
        suggestion: 'Cut the clause, or say what actually happened as a result.',
        regexes: [
            /,\s+(?:highlighting|underscoring|reflecting|showcasing|emphasizing|demonstrating|signalling|signaling|mirroring|underscoring)\b[^.!?]{0,120}/gi,
        ],
    },
    {
        id: 'importance-puffery',
        name: 'Importance puffery',
        shortName: 'Puffery',
        description: 'Declares something important instead of showing why.',
        suggestion: 'State the fact and let the reader judge whether it matters.',
        regexes: [
            phraseGroup([
                'stands as a testament', 'a testament to', 'marks a pivotal moment', 'pivotal moment',
                'plays a vital role', 'plays a crucial role', 'plays a key role', 'solidifies its position',
                'underscores its significance', 'a significant milestone', 'marks a significant',
                'a major step forward',
            ]),
        ],
    },
    {
        id: 'weasel-attribution',
        name: 'Weasel attribution',
        shortName: 'Weasel words',
        description: 'Claims backed by unnamed "experts" or "studies".',
        suggestion: 'Name the source, or cut the claim.',
        regexes: [
            phraseGroup([
                'experts agree', 'studies show', 'research shows', 'many argue', 'widely regarded as',
                'industry reports suggest', 'some say', 'critics say', 'it is widely believed',
                'according to experts',
            ]),
        ],
    },
    {
        id: 'fake-strong-verbs',
        name: 'Fake-strong verb',
        shortName: 'Weak verb',
        description: 'Puffed-up verb phrases where a plain verb does the job.',
        suggestion: 'Use "is", "has", or a direct verb instead.',
        regexes: [
            phraseGroup([
                'serves as', 'functions as', 'acts as', 'boasts', 'is designed to',
                'offers a comprehensive', 'provides a comprehensive', 'stands out as',
            ]),
        ],
    },
    {
        id: 'negative-listing',
        name: 'Negative listing',
        shortName: 'Negative listing',
        description: '"Not a X. Not a Y. A Z.": just say Z.',
        suggestion: 'Skip the negations and say what it is.',
        regexes: [
            /\bNot an?\s[^.!?]{1,50}\.\s*Not an?\s/gi,
        ],
    },
    {
        id: 'dramatic-fragmentation',
        name: 'Dramatic fragmentation',
        shortName: 'Dramatic fragments',
        description: 'Choppy one-beat sentences stacked for fake drama.',
        suggestion: 'Combine into a complete sentence.',
        regexes: [
            /\bThat(?:'s| is) it\./gi,
            /\.\s+And\s[^.!?]{1,30}\.\s+And\s/gi,
            /\bThat(?:'s| is) the whole (?:thing|point)\./gi,
        ],
    },
    {
        id: 'rhetorical-setup',
        name: 'Rhetorical setup',
        shortName: 'Rhetorical setup',
        description: '"What if I told you...", "Plot twist:", self-answered questions.',
        suggestion: 'Drop the setup and make the point.',
        regexes: [
            phraseGroup([
                'what if i told you', 'think about it', 'plot twist', 'spoiler alert',
                "here's the kicker", 'the kicker is', 'the answer is simple',
                'ready for this', 'buckle up',
            ]),
        ],
    },
    {
        id: 'fake-profound-kicker',
        name: 'Fake-profound ending',
        shortName: 'Fake-profound ending',
        description: 'A final "deep" mic-drop line that adds nothing.',
        suggestion: 'Delete it and end on the clearest concrete sentence.',
        regexes: [
            phraseGroup([
                "the future isn't coming", "it's already here", 'was there all along',
                'were there all along', "and that's the point", 'the rest is history',
                'the future is now',
            ]),
        ],
    },
    {
        id: 'summary-recap',
        name: 'Summary-recap ending',
        shortName: 'Recap ending',
        description: 'Restates what the reader just read.',
        suggestion: 'End on the last concrete point, takeaway, or next action.',
        regexes: [
            /(?:^|[.!?]\s+)(?:In conclusion|Ultimately|Overall|In summary|To sum up|To summarize|All in all|At the end of it all),/gim,
        ],
    },
];

// Whole-text detectors that don't map to a single regex match list
const detectEmDashOveruse = (text) => {
    const matches = [...text.matchAll(/—/g)];
    if (matches.length < 3) return [];
    return [{
        patternId: 'em-dash-overuse',
        pattern: 'Em dash overuse',
        match: `${matches.length} em dashes (—) in this text`,
        index: matches[0].index,
        length: 1,
        suggestion: 'Em dashes are a known AI rhythm crutch. Keep 1–2 at most; use commas or periods for the rest.',
    }];
};

export const countWords = (text) => (text.trim().match(/\S+/g) || []).length;

export const analyzeText = (text) => {
    if (!text || !text.trim()) {
        return { findings: [], byPattern: {}, words: 0, perHundred: 0 };
    }

    const findings = [];

    SLOP_PATTERNS.forEach((pattern) => {
        pattern.regexes.forEach((regex) => {
            const re = new RegExp(regex.source, regex.flags);
            let m;
            while ((m = re.exec(text)) !== null) {
                const matched = pattern.matchIndex != null ? m[pattern.matchIndex] : m[0];
                const offset = pattern.matchIndex != null ? m.index + m[0].indexOf(matched) : m.index;
                findings.push({
                    patternId: pattern.id,
                    pattern: pattern.name,
                    match: matched.trim(),
                    index: offset,
                    length: matched.trim().length,
                    suggestion: pattern.suggestion,
                });
                // Avoid zero-width infinite loops
                if (m.index === re.lastIndex) re.lastIndex += 1;
            }
        });
    });

    findings.push(...detectEmDashOveruse(text));

    findings.sort((a, b) => a.index - b.index);

    const byPattern = {};
    findings.forEach((f) => {
        byPattern[f.pattern] = (byPattern[f.pattern] || 0) + 1;
    });

    const words = countWords(text);
    const perHundred = words > 0 ? (findings.length / words) * 100 : 0;

    return { findings, byPattern, words, perHundred };
};

export const getVerdict = (findingsCount, words) => {
    if (!findingsCount) {
        return {
            label: 'Clean',
            tone: 'green',
            message: 'No AI-slop patterns found. This reads like a person wrote it.',
        };
    }
    const perHundred = words > 0 ? (findingsCount / words) * 100 : findingsCount;
    if (perHundred <= 1.5) {
        return {
            label: 'A few tells',
            tone: 'yellow',
            message: 'Mostly fine. Just a couple of patterns that AI loves, with easy fixes below.',
        };
    }
    if (perHundred <= 4) {
        return {
            label: 'Sounds AI-assisted',
            tone: 'orange',
            message: 'Several patterns that readers now recognize as AI-shaped. Worth a cleanup pass.',
        };
    }
    return {
        label: 'Heavy AI slop',
        tone: 'red',
        message: 'This text is packed with AI patterns. Rewrite the worst offenders below in your own words.',
    };
};
