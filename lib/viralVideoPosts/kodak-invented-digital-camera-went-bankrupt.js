// Draft 2026-11-08. Based on the transcript of our own Short (saved at
// learned/knowledge/learnings/sources/yt/20261107_XP2KshjMoko.txt). Facts checked 2026-11-08 against:
// https://www.kodak.com/en/company/page/milestones/ (1975 invention, toaster size, 10,000 pixels, Chapter 11 exit)
// https://lens.blogs.nytimes.com/2015/08/12/kodaks-first-digital-moment/ (23 seconds quote, 15 to 20 years estimate)
// https://en.wikipedia.org/wiki/Kodak (No. 1 US digital camera sales in 2005, low margins, phones, Chapter 11 on Jan 19, 2012)
// Dropped from the Short: "Joy" / "needs work" anecdote (not found in any fetched source).
// Dooza Crew claims only from the approved list (no prices).
import { yt } from './helpers';

const VIDEO_ID = 'XP2KshjMoko';
const VIDEO_TITLE = 'Kodak Built the Digital Camera First. Then It Went Bankrupt.';

const KODAK = 'https://www.kodak.com/en/company/page/milestones/';
const NYT = 'https://lens.blogs.nytimes.com/2015/08/12/kodaks-first-digital-moment/';
const WIKI = 'https://en.wikipedia.org/wiki/Kodak';
const CREW = 'https://crew.dooza.ai/?utm_source=dooza.ai&utm_medium=blog&utm_content=kodak-invented-digital-camera-went-bankrupt';
const a = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const post = {
    id: 548,
    title: 'Why Did Kodak Go Bankrupt If It Invented the Digital Camera?',
    seoTitle: 'Why Kodak Went Bankrupt After Inventing Digital Cameras',
    seoDescription: 'Kodak invented the digital camera in 1975 and led US digital camera sales in 2005, yet filed for bankruptcy in 2012. It bet on the camera, not the phone.',
    excerpt: 'Kodak built the first digital camera in 1975 and was No. 1 in US digital camera sales by 2005. It still filed for bankruptcy in 2012. The problem was not missing digital. It was betting on the camera while photos moved into the phone.',
    author: 'Dooza Team',
    date: '2026-11-08',
    modifiedDate: '2026-11-08',
    readTime: '5 min read',
    readTimeMinutes: 5,
    category: 'AI News',
    tags: ['Kodak', 'Innovation', 'Small Business', 'AI Agents', 'Dooza Video'],
    image: '/blog/kodak-invented-digital-camera-went-bankrupt.jpg',
    imageAlt: 'Illustration of a boxy 1970s prototype digital camera on a shelf beside a modern smartphone taking a photo',
    slug: 'kodak-invented-digital-camera-went-bankrupt',
    video: {
        name: VIDEO_TITLE,
        description: 'Kodak engineer Steve Sasson built the first digital camera in 1975. Kodak did go digital and led US digital camera sales by 2005, but the camera moved into the phone, and Kodak filed for bankruptcy in 2012.',
        thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
        uploadDate: '2026-11-07',
    },
    tocData: [
        { id: 'first-camera', label: 'The first digital camera' },
        { id: 'kodak-went-digital', label: 'Kodak did go digital' },
        { id: 'wrong-box', label: 'It bet on the wrong box' },
        { id: 'small-business-lesson', label: 'Lesson for small businesses' },
        { id: 'where-dooza-fits', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p>Kodak went bankrupt even though it invented the digital camera because it bet on the wrong product, not because it ignored digital. A Kodak engineer, Steve Sasson, built the first digital camera in 1975. By 2005 Kodak ranked No. 1 in US digital camera sales. But digital cameras earned thin profits, its high-margin film business kept shrinking, and more and more photos were taken on phones instead of cameras. In January 2012, Kodak filed for Chapter 11 bankruptcy. It saw the future and even built it first. It just bet on the camera, not the phone.</p>
<ul>
<li><strong>1975:</strong> Kodak's own history page says "Kodak invented the world's first digital camera."</li>
<li><strong>2005:</strong> Kodak ranked No. 1 in US digital camera sales (${a(WIKI, 'Wikipedia, Kodak')}).</li>
<li><strong>2012:</strong> Kodak filed for Chapter 11 bankruptcy protection on January 19, 2012.</li>
<li><strong>2013:</strong> It emerged from Chapter 11 as a company focused on imaging for business.</li>
</ul>
${yt(VIDEO_ID, VIDEO_TITLE)}
<p class="text-sm text-slate-500">Video: “${VIDEO_TITLE}” by Dooza (@thedooza) on YouTube. <a href="https://www.youtube.com/shorts/${VIDEO_ID}" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>.</p>

<h2 id="first-camera">Did Kodak really invent the digital camera?</h2>
<p>Yes. Kodak's milestones page lists 1975 as the year "Kodak invented the world's first digital camera." It adds that "The prototype was the size of a toaster" and captured black-and-white images at 10,000 pixels (${a(KODAK, 'Kodak milestones')}). It saved each photo to a cassette tape. Sasson told The New York Times: "It only took 50 milliseconds to capture the image, but it took 23 seconds to record it to the tape" (${a(NYT, 'NYT Lens, 2015')}).</p>
<p>When Kodak executives asked when digital could compete with film, Sasson estimated 15 to 20 years, according to the same Times piece. Kodak sold its first consumer digital cameras 18 years later.</p>

<h2 id="kodak-went-digital">Did Kodak ignore digital photography?</h2>
<p>No. This is the common myth. Kodak did go digital, and it did well at first: by 2005 it ranked No. 1 in US digital camera sales. The trouble was the money. Digital cameras had low profit margins, cheaper rivals undercut Kodak, and many cameras were sold at a loss. At the same time its film business, where it made high margins, kept falling (${a(WIKI, 'Wikipedia, Kodak')}).</p>

<h2 id="wrong-box">So what actually killed Kodak?</h2>
<p>The camera moved into the phone. An ever-smaller share of photos was taken on dedicated cameras as phones and tablets took over. Kodak had built a strong digital camera business just as the market for standalone cameras started to shrink. With film fading and cameras unprofitable, it ran low on cash and filed for Chapter 11 in January 2012. It came out in 2013 as a smaller company focused on imaging for business.</p>

<h2 id="small-business-lesson">What can small-business owners learn from Kodak?</h2>
<p>This is our takeaway. Having the tool is not enough. Kodak had the invention, the patents and the top-selling product. What it did not change fast enough was where its business made money and how customers actually took pictures. The winners were the companies that built around the new habit.</p>
<p>AI agents are at a similar point for small businesses. Plenty of owners have tried a chatbot. Fewer have changed how the daily work gets done: who answers the phone, who follows up on leads, who drafts the quotes. A few practical steps:</p>
<ol>
<li><strong>Start from the work, not the tool.</strong> List the tasks that eat your week, then see which ones an agent can draft or handle.</li>
<li><strong>Change one routine at a time.</strong> Move one job, like lead follow-up, fully to an agent with you checking it.</li>
<li><strong>Watch where customers already are.</strong> Kodak's customers moved to phones. Yours may already expect a quick text or a call answered at 9 pm.</li>
<li><strong>Keep a person in charge of what goes out.</strong> New tools are safest when you approve their work before customers see it.</li>
</ol>

<h2 id="where-dooza-fits">Where does Dooza fit?</h2>
<p>Dooza Crew is free to use: install the app and start. Crew gives you a lead AI agent plus helper agents you chat with on web or phone. Crew agents take phone calls too.</p>
<p>Before an agent sends or pays, it asks you in chat: Approve, Edit or Reject. Nothing reaches a customer until you approve it.</p>
<p><a href="${CREW}" target="_blank" rel="noopener">Get the Dooza Crew app</a></p>`,
    faqData: [
        { question: 'Why did Kodak go bankrupt if it invented the digital camera?', answer: 'Kodak did go digital and ranked No. 1 in US digital camera sales by 2005. But digital cameras had low profit margins, its high-margin film business kept falling, and photos moved to phones. It filed for Chapter 11 bankruptcy in January 2012.' },
        { question: 'Who invented the digital camera?', answer: 'Kodak engineer Steve Sasson built the first digital camera in 1975. The prototype was about the size of a toaster, captured 10,000-pixel black-and-white images and stored them on a cassette tape.' },
        { question: 'When did Kodak file for bankruptcy?', answer: 'Kodak filed for Chapter 11 bankruptcy protection on January 19, 2012, and emerged from it in 2013 as a company focused on imaging for business.' },
        { question: 'Did Kodak ignore digital photography?', answer: 'No. That is a myth. Kodak sold digital cameras and led US digital camera sales in 2005. Its problem was that cameras earned little profit and phones replaced standalone cameras.' },
        { question: 'What is the lesson from Kodak for small businesses?', answer: 'Owning a new tool is not enough. The business that wins changes how its work gets done around the new tool, one routine at a time, while keeping a person in charge of what reaches customers.' },
    ],
};

export default post;
