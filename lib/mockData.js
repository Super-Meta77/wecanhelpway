// Mock data & shared constants for WeCanHelpWay prototype

export const IMG = {
  hero1: 'https://images.unsplash.com/photo-1758613171176-ea64579c2dcf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwzfHxwb3J0cmFpdCUyMGRpdmVyc2UlMjBwZW9wbGV8ZW58MHx8fHwxNzkwNzE3NjI2fDA&ixlib=rb-4.1.0&q=85',
  hero2: 'https://images.unsplash.com/photo-1758272133786-ee98adcc6837?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwyfHxwb3J0cmFpdCUyMGRpdmVyc2UlMjBwZW9wbGV8ZW58MHx8fHwxNzkwNzE3NjI2fDA&ixlib=rb-4.1.0&q=85',
  hero3: 'https://images.unsplash.com/photo-1622352496174-9e1d969b1945?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHw0fHxwb3J0cmFpdCUyMGRpdmVyc2UlMjBwZW9wbGV8ZW58MHx8fHwxNzkwNzE3NjI2fDA&ixlib=rb-4.1.0&q=85',
  conn1: 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwzfHxodW1hbiUyMGNvbm5lY3Rpb258ZW58MHx8fHwxNzkwNzE3NjI2fDA&ixlib=rb-4.1.0&q=85',
  conn2: 'https://images.unsplash.com/photo-1745962979027-c5e51183cf40?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHxodW1hbiUyMGNvbm5lY3Rpb258ZW58MHx8fHwxNzkwNzE3NjI2fDA&ixlib=rb-4.1.0&q=85',
  conn3: 'https://images.pexels.com/photos/7689290/pexels-photo-7689290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  candid: 'https://images.unsplash.com/photo-1649263537861-c947d1fbebdd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHxhdXRoZW50aWMlMjBjYW5kaWR8ZW58MHx8fHwxNzkwNzE3NjI2fDA&ixlib=rb-4.1.0&q=85',
  mentor1: 'https://images.unsplash.com/photo-1590402494587-44b71d7772f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxtZW50b3JpbmclMjBjb2xsYWJvcmF0aW9ufGVufDB8fHx8MTc5MDcxNzYzM3ww&ixlib=rb-4.1.0&q=85',
  mentor2: 'https://images.unsplash.com/photo-1631203924626-549ba231917e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHw0fHxtZW50b3JpbmclMjBjb2xsYWJvcmF0aW9ufGVufDB8fHx8MTc5MDcxNzYzM3ww&ixlib=rb-4.1.0&q=85',
  work1: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjB3b3JraW5nfGVufDB8fHx8MTc5MDcxNzYzM3ww&ixlib=rb-4.1.0&q=85',
  work2: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHw0fHxwZW9wbGUlMjB3b3JraW5nfGVufDB8fHx8MTc5MDcxNzYzM3ww&ixlib=rb-4.1.0&q=85',
  work3: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwzfHxwZW9wbGUlMjB3b3JraW5nfGVufDB8fHx8MTc5MDcxNzYzM3ww&ixlib=rb-4.1.0&q=85',
}

export const NEED_CATEGORIES = [
  { key: 'work', label: 'Work' },
  { key: 'income', label: 'Income' },
  { key: 'education', label: 'Education' },
  { key: 'guidance', label: 'Guidance' },
  { key: 'counseling', label: 'Counseling' },
  { key: 'idea', label: 'Idea' },
  { key: 'business', label: 'Business' },
  { key: 'technology', label: 'Technology' },
  { key: 'find_someone', label: 'Finding someone' },
  { key: 'opportunities', label: 'Opportunities' },
  { key: 'resources', label: 'Resources' },
  { key: 'other', label: 'Something else' },
]

export const OFFER_CATEGORIES = [
  'Employment', 'Skills', 'Mentorship', 'Education', 'Professional services',
  'Technology', 'Business', 'Resources', 'Volunteering', 'Advice', 'Opportunities', 'Other'
]

export const HELP_KIND = [
  'A person', 'An opportunity', 'Knowledge', 'Advice', 'Resources', 'A solution', "I'm not sure"
]

export const NEED_EXAMPLES = [
  'I need a job.',
  'I want to earn extra income.',
  'I want to learn programming.',
  'I have an idea but don’t know how to build it.',
  'I need someone who understands marketing.',
  "I don’t know where to start.",
]

export const STORIES = [
  {
    title: "I didn’t know where to start.",
    body: 'A person seeking a career path was connected with someone who helped them identify a direction.',
    tag: 'Guidance',
    img: 'candid',
  },
  {
    title: 'I had an idea but no way to build it.',
    body: 'An entrepreneur was connected with a developer who helped turn the idea into a working prototype.',
    tag: 'Technology',
    img: 'work1',
  },
  {
    title: 'I wanted to learn.',
    body: 'Someone without access to traditional resources was connected with an educational opportunity that fit their life.',
    tag: 'Education',
    img: 'mentor2',
  },
]

export const CONNECTIONS = [
  { id: 'c1', name: 'Alex Morgan', role: 'Mobile Developer', reason: 'You were looking for help building a mobile application.', status: 'active', date: '2 days ago', online: true, img: 'hero2' },
  { id: 'c2', name: 'Priya Shah', role: 'Marketing Advisor', reason: 'You asked for someone who understands early-stage marketing.', status: 'pending', date: 'Today', online: false, img: 'hero3' },
  { id: 'c3', name: 'Daniel Okafor', role: 'Career Mentor', reason: 'You were unsure where to start with your career direction.', status: 'active', date: '1 week ago', online: true, img: 'conn2' },
  { id: 'c4', name: 'Mei Tanaka', role: 'Product Designer', reason: 'You needed a designer to help shape your idea.', status: 'completed', date: '3 weeks ago', online: false, img: 'mentor1' },
]

export const MOCK_MESSAGES = {
  c1: [
    { id: 1, from: 'them', text: 'Hi! I saw the note the team shared — happy to help you think through the app idea.', time: '10:04' },
    { id: 2, from: 'me', text: 'Thank you for reaching out. I have a rough concept but I’m not sure where to begin.', time: '10:06' },
    { id: 3, from: 'them', text: 'That’s completely fine. Let’s start with what problem you want to solve. Even a paragraph is enough.', time: '10:07' },
    { id: 4, from: 'me', text: 'Okay — I’ll write it up tonight and share it with you.', time: '10:09' },
    { id: 5, from: 'them', text: 'Perfect. No rush. Whenever you’re ready.', time: '10:10' },
  ],
  c3: [
    { id: 1, from: 'them', text: 'Hey — the team said you’re thinking through your next step. Want to talk about it?', time: 'Mon' },
    { id: 2, from: 'me', text: 'Yes, I feel a bit stuck. I don’t know what direction fits me.', time: 'Mon' },
    { id: 3, from: 'them', text: 'Let’s untangle it together. Tell me what you were doing when you felt most alive.', time: 'Mon' },
  ],
  c4: [
    { id: 1, from: 'them', text: 'Wrapping up the last design pass — sending files today.', time: 'May 3' },
    { id: 2, from: 'me', text: 'Amazing. Thank you for everything.', time: 'May 3' },
  ],
}

export const ADMIN_REQUESTS = [
  { id: 'r1', person: 'Nadia R.', country: 'Morocco', need: 'Wants to learn programming but has no laptop or clear path.', category: 'Education', received: '2h ago', priority: 'high' },
  { id: 'r2', person: 'James L.', country: 'United Kingdom', need: 'Looking for freelance income while raising two kids at home.', category: 'Income', received: '4h ago', priority: 'medium' },
  { id: 'r3', person: 'Aki S.', country: 'Japan', need: 'Has an idea for a small food business — needs someone to help plan it.', category: 'Business', received: '6h ago', priority: 'medium' },
  { id: 'r4', person: 'Fernanda C.', country: 'Brazil', need: "Doesn't know where to start after finishing university.", category: 'Guidance', received: '1d ago', priority: 'low' },
]

export const ADMIN_MATCHES = [
  { id: 'm1', requester: 'Nadia R.', match: 'Ravi Patel', role: 'Software Engineer, offers 1h/week mentorship', reason: 'Nadia wants to learn programming. Ravi offers weekly mentorship.', confidence: 92 },
  { id: 'm2', requester: 'Aki S.', match: 'Lena Voss', role: 'Small business coach', reason: 'Aki is planning a food business. Lena has helped 40+ small food businesses.', confidence: 88 },
  { id: 'm3', requester: 'James L.', match: 'Clara Nunes', role: 'Offers remote content-writing work', reason: 'Clara offers flexible remote work. James needs flexible income.', confidence: 84 },
]

export const NOTIFICATIONS = [
  { id: 'n1', text: 'Your request about learning marketing has been reviewed. A potential match is being prepared.', when: '1h ago' },
  { id: 'n2', text: 'Alex Morgan accepted the connection. You can now chat.', when: 'Yesterday' },
  { id: 'n3', text: 'New opportunity that may fit you: Beginner-friendly remote writing role.', when: '3 days ago' },
]

export const OPPORTUNITIES = [
  { id: 'o1', title: 'Remote content writer', kind: 'Employment', by: 'Small studio, Berlin', fit: 'Fits people who write clearly and want flexible hours.' },
  { id: 'o2', title: 'Free 6-week coding basics', kind: 'Education', by: 'Volunteer teacher network', fit: 'For beginners with any laptop and internet.' },
  { id: 'o3', title: '1:1 career conversation', kind: 'Guidance', by: 'Career mentor community', fit: 'For people unsure of their next step.' },
]

export const GLOBE_POINTS = [
  { x: 22, y: 38, label: 'Someone looking for a mentor.', d: 0 },
  { x: 30, y: 58, label: 'Someone offering design skills.', d: 0.4 },
  { x: 48, y: 30, label: 'Someone searching for education.', d: 0.8 },
  { x: 55, y: 55, label: 'Someone offering employment.', d: 1.2 },
  { x: 68, y: 40, label: 'Someone with an idea for a small business.', d: 1.6 },
  { x: 78, y: 62, label: 'Someone offering mentorship.', d: 2.0 },
  { x: 40, y: 72, label: 'Someone who just needs to talk.', d: 2.4 },
  { x: 85, y: 30, label: 'Someone offering professional advice.', d: 2.8 },
]
