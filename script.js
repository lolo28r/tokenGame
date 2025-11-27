// ----- Variables globales -----
let usedJeton = false;
let selectedCategory = null;

// ----- Questions intégrées -----
const questions = [
    // ----- 1. Security -----
    { id: 1, intitule: "What is the main purpose of a strong password?", choices: ["Protect your account", "Look cool online", "Send emails faster", "Play games safely"], answer: 0, famille: "Security", couleur: "#d0305b", explanation: "Strong passwords protect your accounts from unauthorized access." },
    { id: 2, intitule: "What is phishing?", choices: ["A scam to steal info", "A type of network", "An app update", "A browser feature"], answer: 0, famille: "Security", couleur: "#d0305b", explanation: "Phishing tricks users into giving personal info like passwords or credit cards." },
    { id: 3, intitule: "Why should software be updated regularly?", choices: ["Fix security issues", "Change colors", "Play faster", "Save storage"], answer: 0, famille: "Security", couleur: "#d0305b", explanation: "Updates fix vulnerabilities and improve device security." },
    { id: 4, intitule: "What is two-factor authentication?", choices: ["Extra identity check", "Password manager", "Email filter", "Ad blocker"], answer: 0, famille: "Security", couleur: "#d0305b", explanation: "Two-factor authentication adds an extra verification step for better security." },
    { id: 5, intitule: "Which is a secure website indicator?", choices: ["HTTPS and padlock", "Bright colors", "Many images", "Fast loading"], answer: 0, famille: "Security", couleur: "#d0305b", explanation: "HTTPS and a padlock show the website encrypts your data." },
    { id: 36, intitule: "What is malware?", choices: ["Software that harms devices", "Web browser", "Cloud storage", "Game app"], answer: 0, famille: "Security", couleur: "#d0305b", explanation: "Malware is malicious software that can damage or steal data." },
    { id: 37, intitule: "Why use a VPN?", choices: ["Secure internet connection", "Play games faster", "Watch videos", "Edit photos"], answer: 0, famille: "Security", couleur: "#d0305b", explanation: "VPNs encrypt your connection to protect privacy and data." },
    { id: 38, intitule: "What is a firewall?", choices: ["Security barrier for networks", "Music app", "Printer", "Video platform"], answer: 0, famille: "Security", couleur: "#d0305b", explanation: "A firewall blocks unauthorized access to your device or network." },
    { id: 39, intitule: "Why avoid public Wi-Fi for banking?", choices: ["Unsecure network", "Too fast", "Color of website", "Loads videos slowly"], answer: 0, famille: "Security", couleur: "#d0305b", explanation: "Public Wi-Fi can be hacked, exposing sensitive information." },
    { id: 40, intitule: "What is encryption?", choices: ["Converting data to secure code", "Drawing app", "Email notification", "Shopping cart"], answer: 0, famille: "Security", couleur: "#d0305b", explanation: "Encryption protects information by turning it into unreadable code for outsiders." },
    // ----- 2. Communication -----
    { id: 6, intitule: "What is the main use of email?", choices: ["Send messages", "Play games", "Edit photos", "Check TV schedule"], answer: 0, famille: "Communication", couleur: "#99ACFF", explanation: "Email allows fast electronic messaging." },
    { id: 7, intitule: "What does SMS stand for?", choices: ["Short Message Service", "Social Media System", "Secure Mail Service", "Send My Story"], answer: 0, famille: "Communication", couleur: "#99ACFF", explanation: "SMS is a service for sending short text messages via mobile phones." },
    { id: 8, intitule: "Why use video calls?", choices: ["See and hear the person", "Send letters", "Read a book", "Check TV"], answer: 0, famille: "Communication", couleur: "#99ACFF", explanation: "Video calls let you communicate visually and audibly in real-time." },
    { id: 9, intitule: "What is an email attachment?", choices: ["A file sent with email", "A notification", "A text message", "A post"], answer: 0, famille: "Communication", couleur: "#99ACFF", explanation: "Attachments allow sending files along with your email." },
    { id: 10, intitule: "Why check sender authenticity?", choices: ["Avoid phishing emails", "Change font", "Count images", "Check colors"], answer: 0, famille: "Communication", couleur: "#99ACFF", explanation: "Verifying the sender helps prevent scams and phishing." },
    { id: 41, intitule: "What is a video conference?", choices: ["Remote meeting with video", "Email spam", "Photo sharing", "Online game"], answer: 0, famille: "Communication", couleur: "#99ACFF", explanation: "Video conferences allow people to meet remotely with audio and video." },
    { id: 42, intitule: "What is a newsletter?", choices: ["Regular email updates", "Instant message", "Video call", "Social post"], answer: 0, famille: "Communication", couleur: "#99ACFF", explanation: "Newsletters send information regularly to subscribers." },
    { id: 43, intitule: "What is instant messaging?", choices: ["Text chat in real-time", "Email attachment", "Video upload", "Blog post"], answer: 0, famille: "Communication", couleur: "#99ACFF", explanation: "Instant messaging allows immediate text-based communication." },
    { id: 44, intitule: "What does CC mean in email?", choices: ["Carbon copy", "Close chat", "Cloud connection", "Current content"], answer: 0, famille: "Communication", couleur: "#99ACFF", explanation: "CC allows sending a copy of an email to other recipients." },
    { id: 45, intitule: "Why use emojis in messages?", choices: ["Express emotions visually", "Send spam", "Change text color", "Encrypt message"], answer: 0, famille: "Communication", couleur: "#99ACFF", explanation: "Emojis help convey feelings and tone in text messages." },
    // ----- 3. Shopping -----
    { id: 11, intitule: "What is a shopping cart for?", choices: ["Group items to buy", "Send emails", "Check TV", "Play games"], answer: 0, famille: "Shopping", couleur: "#ffcb2b", explanation: "A shopping cart holds items you want to purchase online." },
    { id: 12, intitule: "Why read product reviews?", choices: ["Check quality and reliability", "Play games", "Watch videos", "Send SMS"], answer: 0, famille: "Shopping", couleur: "#ffcb2b", explanation: "Reviews help you make informed purchasing decisions." },
    { id: 13, intitule: "What is a return policy?", choices: ["Rules to return items", "Send SMS", "Play music", "Check TV"], answer: 0, famille: "Shopping", couleur: "#ffcb2b", explanation: "Return policies explain how to return or exchange purchased items." },
    { id: 14, intitule: "How to pay safely online?", choices: ["Use secure payment methods", "Share passwords", "Click ads", "Send SMS"], answer: 0, famille: "Shopping", couleur: "#ffcb2b", explanation: "Secure payment methods protect your money and data." },
    { id: 15, intitule: "Why check a website’s trust?", choices: ["Avoid scams", "Change website color", "Play music", "Count ads"], answer: 0, famille: "Shopping", couleur: "#ffcb2b", explanation: "Trustworthy websites reduce the risk of fraud." },
    { id: 46, intitule: "What is a discount code?", choices: ["Code to reduce price", "Virus alert", "Delivery tracking", "Payment method"], answer: 0, famille: "Shopping", couleur: "#ffcb2b", explanation: "Discount codes allow buyers to save money during checkout." },
    { id: 47, intitule: "What is free shipping?", choices: ["Delivery without cost", "Return policy", "Product warranty", "Product review"], answer: 0, famille: "Shopping", couleur: "#ffcb2b", explanation: "Free shipping means the seller covers delivery costs." },
    { id: 48, intitule: "What is a wishlist?", choices: ["List of desired items", "Shopping cart", "Payment method", "Coupon"], answer: 0, famille: "Shopping", couleur: "#ffcb2b", explanation: "A wishlist stores items a buyer wants for future purchase." },
    { id: 49, intitule: "Why check seller ratings?", choices: ["Ensure reliable purchase", "Change website color", "Watch videos", "Read news"], answer: 0, famille: "Shopping", couleur: "#ffcb2b", explanation: "High-rated sellers are more trustworthy and reliable." },
    { id: 50, intitule: "What is a flash sale?", choices: ["Limited-time offer", "New product feature", "Email alert", "Video ad"], answer: 0, famille: "Shopping", couleur: "#ffcb2b", explanation: "Flash sales offer products at discounts for a short time." },
    // ----- 4. Apps -----
    { id: 16, intitule: "What is an app?", choices: ["Program for a task", "Printer", "Scanner", "TV"], answer: 0, famille: "Apps", couleur: "#cf27db", explanation: "Apps are programs designed to perform specific tasks on devices." },
    { id: 17, intitule: "What is a web browser?", choices: ["Program to view websites", "Email client", "PDF reader", "Music player"], answer: 0, famille: "Apps", couleur: "#cf27db", explanation: "Browsers allow you to visit and interact with websites." },
    { id: 18, intitule: "Why update apps?", choices: ["Improve security and features", "Change color", "Send emails automatically", "Play faster"], answer: 0, famille: "Apps", couleur: "#cf27db", explanation: "Updates fix bugs, improve features, and enhance security." },
    { id: 19, intitule: "What is cloud storage used for in apps?", choices: ["Store and sync data", "Play music", "Change fonts", "Check TV"], answer: 0, famille: "Apps", couleur: "#cf27db", explanation: "Cloud storage keeps app data safe and accessible across devices." },
    { id: 20, intitule: "What is a widget in an app?", choices: ["Mini interactive element", "Printer", "Email", "Scanner"], answer: 0, famille: "Apps", couleur: "#cf27db", explanation: "Widgets are small elements showing info or allowing quick actions." },
    { id: 51, intitule: "What is a social media app?", choices: ["Connect and share online", "Photo editor", "Email client", "Document reader"], answer: 0, famille: "Apps", couleur: "#cf27db", explanation: "Social apps let users communicate and share content with others." },
    { id: 52, intitule: "What is a productivity app?", choices: ["Helps organize tasks", "Game app", "Music player", "Weather app"], answer: 0, famille: "Apps", couleur: "#cf27db", explanation: "Productivity apps help manage tasks, schedules, and work." },
    { id: 53, intitule: "What is an app store?", choices: ["Platform to download apps", "Email server", "Video platform", "Cloud storage"], answer: 0, famille: "Apps", couleur: "#cf27db", explanation: "App stores provide apps for installation on devices." },
    { id: 54, intitule: "What is app permission?", choices: ["Access rights requested by app", "Email feature", "Game level", "Video filter"], answer: 0, famille: "Apps", couleur: "#cf27db", explanation: "Permissions let apps use device features like camera or location." },
    { id: 55, intitule: "What is push notification?", choices: ["Message sent by app", "Text file", "Shopping cart", "Browser tab"], answer: 0, famille: "Apps", couleur: "#cf27db", explanation: "Push notifications alert users about updates or messages." },

    // ----- 5. Gen Z Habits -----
    { id: 21, intitule: "What is 'FOMO'?", choices: ["Fear of missing out", "Type of app", "Internet trend", "Gaming style"], answer: 0, famille: "Gen Z Habits", couleur: "#78c451", explanation: "FOMO is anxiety about missing social events or online content." },
    { id: 22, intitule: "What is 'TikTok' mainly used for?", choices: ["Short video sharing", "Emailing", "Banking", "Shopping"], answer: 0, famille: "Gen Z Habits", couleur: "#78c451", explanation: "TikTok is popular for creating and watching short videos." },
    { id: 23, intitule: "What is a 'meme'?", choices: ["Funny online content", "Security software", "Shopping site", "Browser"], answer: 0, famille: "Gen Z Habits", couleur: "#78c451", explanation: "Memes are humorous images, videos, or texts shared online." },
    { id: 24, intitule: "What is a 'DM'?", choices: ["Direct message", "Digital map", "Download manager", "Document"], answer: 0, famille: "Gen Z Habits", couleur: "#78c451", explanation: "DM stands for direct message on social media platforms." },
    { id: 25, intitule: "What is 'streaming'?", choices: ["Watching content online without downloading", "Listening to podcasts offline", "Printing documents", "Emailing photos"], answer: 0, famille: "Gen Z Habits", couleur: "#78c451", explanation: "Streaming allows immediate online viewing or listening without saving locally." },
    { id: 57, intitule: "What is 'influencer marketing'?", choices: ["Promotion via social media personalities", "Email spam", "Gaming strategy", "Banking method"], answer: 0, famille: "Gen Z Habits", couleur: "#78c451", explanation: "Influencer marketing uses social media figures to promote products." },
    { id: 58, intitule: "What is a 'challenge' online?", choices: ["Trend activity shared online", "App crash", "Email type", "Shopping discount"], answer: 0, famille: "Gen Z Habits", couleur: "#78c451", explanation: "Online challenges are trends where people replicate activities and share them." },
    { id: 59, intitule: "What is 'FYP' on TikTok?", choices: ["For You Page", "Final You Post", "Fast You Play", "Friend Your Profile"], answer: 0, famille: "Gen Z Habits", couleur: "#78c451", explanation: "FYP is the main feed page where TikTok shows personalized content." },
    { id: 60, intitule: "What is 'ghosting' in social media?", choices: ["Suddenly ignoring someone", "Sharing memes", "Posting daily", "Streaming videos"], answer: 0, famille: "Gen Z Habits", couleur: "#78c451", explanation: "Ghosting is when someone stops responding without warning." },
    // ----- 6. Web Expressions -----
    { id: 26, intitule: "What does 'LOL' mean online?", choices: ["Laugh out loud", "Lots of love", "Line of logic", "Link on laptop"], answer: 0, famille: "Web Expressions", couleur: "#ff9a3c", explanation: "LOL is an abbreviation meaning 'laugh out loud'." },
    { id: 27, intitule: "What does 'BRB' mean?", choices: ["Be right back", "Browser refresh button", "Back red button", "Basic rule block"], answer: 0, famille: "Web Expressions", couleur: "#ff9a3c", explanation: "BRB means the person will return shortly." },
    { id: 28, intitule: "What is a 'hashtag'?", choices: ["Label to categorize posts", "A photo filter", "An app", "A virus"], answer: 0, famille: "Web Expressions", couleur: "#ff9a3c", explanation: "Hashtags are used to tag and find content on social media." },
    { id: 29, intitule: "What is 'viral content'?", choices: ["Content widely shared online", "Website malware", "App update", "Shopping trend"], answer: 0, famille: "Web Expressions", couleur: "#ff9a3c", explanation: "Viral content spreads quickly across social networks." },
    { id: 30, intitule: "What does 'ETA' mean in messaging?", choices: ["Estimated time of arrival", "Email to all", "Extra text added", "Error to avoid"], answer: 0, famille: "Web Expressions", couleur: "#ff9a3c", explanation: "ETA indicates when someone or something is expected to arrive." },

    // ----- 7. Objects of the Future -----
    { id: 31, intitule: "What is a smart home device?", choices: ["Internet-connected appliance", "Old radio", "DVD player", "Paper book"], answer: 0, famille: "Objects of the Future", couleur: "#00b894", explanation: "Smart home devices connect to the internet and can be controlled remotely." },
    { id: 32, intitule: "What is a self-driving car?", choices: ["Car that drives itself", "Regular taxi", "Bike", "Bus"], answer: 0, famille: "Objects of the Future", couleur: "#00b894", explanation: "Autonomous vehicles navigate and drive without human control." },
    { id: 33, intitule: "What is virtual reality (VR)?", choices: ["Immersive digital environment", "TV channel", "App store", "Radio"], answer: 0, famille: "Objects of the Future", couleur: "#00b894", explanation: "VR immerses users in a computer-generated environment." },
    { id: 34, intitule: "What is a drone?", choices: ["Flying robot controlled remotely", "Paper plane", "Toy car", "Robot vacuum"], answer: 0, famille: "Objects of the Future", couleur: "#00b894", explanation: "Drones are unmanned aerial devices used for filming, delivery, and more." },
    { id: 35, intitule: "What is a 3D printer used for?", choices: ["Create objects layer by layer", "Print photos", "Write emails", "Scan documents"], answer: 0, famille: "Objects of the Future", couleur: "#00b894", explanation: "3D printers manufacture physical items from digital models layer by layer." },
];

function displayCategories() {
    const categoriesDiv = document.getElementById('categories');
    categoriesDiv.innerHTML = '';

    const families = [...new Set(questions.map(q => q.famille))];

    families.forEach(family => {
        const btn = document.createElement('button');
        btn.textContent = family;
        btn.onclick = () => chooseCategory(family);
        btn.classList.add('category-btn');
        categoriesDiv.appendChild(btn);
    });

    categoriesDiv.style.display = 'flex';
}

// ----- Selecting a category -----
function chooseCategory(family) {
    selectedCategory = family;

    document.getElementById('categories').style.display = 'none';
    document.getElementById('question').style.display = 'block';
    document.getElementById('answers').style.display = 'flex';
    document.getElementById('subtitle').style.display = "none";

    document.getElementById('backBtn').style.display = 'inline-block';

    showRandomQuestion();
}
// ----- Show random question -----
function showRandomQuestion() {
    if (!selectedCategory) return;

    const questionsInFamily = questions.filter(q => q.famille === selectedCategory);

    const question = questionsInFamily[Math.floor(Math.random() * questionsInFamily.length)];

    const qDiv = document.getElementById('question');
    qDiv.textContent = question.intitule;
    qDiv.style.borderColor = question.couleur;

    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';

    // Mélanger les réponses
    const choices = question.choices.map((choice, i) => ({ choice, index: i }));
    for (let i = choices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [choices[i], choices[j]] = [choices[j], choices[i]];
    }

    choices.forEach(obj => {
        const btn = document.createElement('button');
        btn.textContent = obj.choice;
        btn.style.background = question.couleur;
        btn.onclick = () => checkAnswer(question, obj.index, choices);
        answersDiv.appendChild(btn);
    });

    document.getElementById('result').textContent = '';
    document.getElementById('result').className = 'result';
    usedToken = false;
}

// ----- Check answer -----
function checkAnswer(question, chosenIndex, shuffledChoices) {
    if (usedToken) return;
    usedToken = true;

    const result = document.getElementById('result');
    const buttons = document.querySelectorAll('#answers button');

    // Identifier le bouton de la bonne réponse dans l'ordre mélangé
    const correctShuffledIndex = shuffledChoices.findIndex(obj => obj.index === question.answer);

    if (chosenIndex === question.answer) {
        result.innerHTML = `✅ Well done! You can use your Replay Token.<br><small>${question.explanation}</small>`;
        result.classList.add('good');
    } else {
        result.innerHTML = `❌ Incorrect. Your Replay Token is lost.<br><small>Correct answer: ${question.choices[question.answer]} – ${question.explanation}</small>`;
        result.classList.add('bad');
    }

    // Colorier uniquement la bonne réponse, les autres en gris
    buttons.forEach((btn, i) => {
        if (i === correctShuffledIndex) {
            btn.style.background = question.couleur;
        } else {
            btn.style.background = '#ccc';
        }
        btn.disabled = true;
    });
}
// ----- Back to categories -----
function showCategories() {
    document.getElementById('question').style.display = 'none';
    document.getElementById('answers').style.display = 'none';
    document.getElementById('result').textContent = '';
    document.getElementById('backBtn').style.display = 'none';

    displayCategories();
}

displayCategories();