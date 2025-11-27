// ----- Variables globales -----
let usedJeton = false;
let selectedCategory = null;

// ----- Questions intégrées -----
const questions = [
    // ----- 1. Security -----
    { id: 1, intitule: "What is a password used for?", choices: ["To protect access", "To share files", "To send emails", "To browse safely"], answer: 0, famille: "Security", couleur: "#ff577f", explanation: "A password protects your accounts and personal information from unauthorized access." },
    { id: 2, intitule: "Which software protects your computer from viruses?", choices: ["Antivirus", "Web browser", "Photo editor", "Email client"], answer: 0, famille: "Security", couleur: "#ff577f", explanation: "Antivirus software detects and removes malicious programs from your computer." },
    { id: 3, intitule: "What does phishing try to steal?", choices: ["Your personal information", "Your favorite song", "Your TV schedule", "Your shopping list"], answer: 0, famille: "Security", couleur: "#ff577f", explanation: "Phishing tricks people into giving sensitive info like passwords or credit cards." },
    { id: 4, intitule: "What is two-factor authentication?", choices: ["Extra step to confirm identity", "Automatic password generator", "Email encryption", "Ad blocker"], answer: 0, famille: "Security", couleur: "#ff577f", explanation: "Two-factor authentication adds an extra verification step for better account security." },
    { id: 5, intitule: "How do you know a website is secure?", choices: ["It starts with https", "It has bright colors", "It has many images", "It loads fast"], answer: 0, famille: "Security", couleur: "#ff577f", explanation: "Secure websites use HTTPS and a padlock symbol to protect your data." },
    { id: 6, intitule: "Why should software be updated?", choices: ["To fix security issues", "To change colors", "To play faster", "To make files bigger"], answer: 0, famille: "Security", couleur: "#ff577f", explanation: "Updates fix security problems and improve performance." },
    { id: 7, intitule: "What is a secure site for?", choices: ["Protect your data online", "Watch videos", "Send postcards", "Check weather"], answer: 0, famille: "Security", couleur: "#ff577f", explanation: "Secure sites protect your information while you browse or make transactions." },
    { id: 8, intitule: "Why avoid weak passwords?", choices: ["They are easy to guess", "They take too long to type", "They use colors", "They need a browser"], answer: 0, famille: "Security", couleur: "#ff577f", explanation: "Weak passwords can be easily guessed or hacked." },
    { id: 9, intitule: "What is malware?", choices: ["Software designed to harm your device", "A new email feature", "A social media post", "An online recipe"], answer: 0, famille: "Security", couleur: "#ff577f", explanation: "Malware is software intended to damage or steal data from your device." },
    { id: 10, intitule: "Why be careful with links in emails?", choices: ["They can be fake and steal info", "They load images", "They play music", "They improve font size"], answer: 0, famille: "Security", couleur: "#ff577f", explanation: "Malicious links can lead to phishing sites that steal personal data." },

    // ----- 2. Communication -----
    { id: 11, intitule: "What is the main purpose of email?", choices: ["Send digital messages", "Play games", "Edit photos", "Read newspapers"], answer: 0, famille: "Communication", couleur: "#1982c4", explanation: "Email is used to send messages electronically quickly and reliably." },
    { id: 12, intitule: "What does SMS mean?", choices: ["Short Message Service", "Social Media System", "Secure Mail Service", "Send My Story"], answer: 0, famille: "Communication", couleur: "#1982c4", explanation: "SMS allows sending short text messages via mobile phones." },
    { id: 13, intitule: "Why use video calls?", choices: ["Talk while seeing the person", "Send letters", "Read a book", "Check TV"], answer: 0, famille: "Communication", couleur: "#1982c4", explanation: "Video calls let you see and hear someone remotely." },
    { id: 14, intitule: "What is an email attachment?", choices: ["A file sent with an email", "A notification", "A text message", "A social media post"], answer: 0, famille: "Communication", couleur: "#1982c4", explanation: "Attachments allow sending files along with your email message." },
    { id: 15, intitule: "Why use notifications?", choices: ["To inform about updates", "To send emails", "To print files", "To watch TV"], answer: 0, famille: "Communication", couleur: "#1982c4", explanation: "Notifications alert you to new messages or important updates." },
    { id: 16, intitule: "What are social networks for?", choices: ["Sharing news and photos", "Reading books", "Playing music", "Watching TV"], answer: 0, famille: "Communication", couleur: "#1982c4", explanation: "Social networks allow you to connect, share content, and communicate with others." },
    { id: 17, intitule: "Why use instant messaging?", choices: ["Communicate quickly", "Paint pictures", "Download files", "Track packages"], answer: 0, famille: "Communication", couleur: "#1982c4", explanation: "Instant messaging allows fast text-based communication with contacts." },
    { id: 18, intitule: "What does a video message allow?", choices: ["See and hear someone remotely", "Play music", "Send emails automatically", "Check the weather"], answer: 0, famille: "Communication", couleur: "#1982c4", explanation: "Video messages combine audio and video to communicate remotely." },
    { id: 19, intitule: "Why is email useful for seniors?", choices: ["Contact family and services easily", "Download movies", "Play online games", "Post ads"], answer: 0, famille: "Communication", couleur: "#1982c4", explanation: "Email helps seniors stay in touch with family and access online services." },
    { id: 20, intitule: "What should you check before replying to emails?", choices: ["Sender authenticity", "Font size", "Color scheme", "Number of images"], answer: 0, famille: "Communication", couleur: "#1982c4", explanation: "Check the sender to avoid replying to phishing or spam emails." },

    // ----- 3. Services & Procedures -----
    { id: 21, intitule: "Why use government websites?", choices: ["Access public services online", "Play games", "Watch movies", "Chat with friends"], answer: 0, famille: "Services & Procedures", couleur: "#17c3b2", explanation: "Government websites provide official services like taxes, healthcare, and documents online." },
    { id: 22, intitule: "What is a PDF file?", choices: ["Digital document format", "A video", "An email", "A website"], answer: 0, famille: "Services & Procedures", couleur: "#17c3b2", explanation: "PDF is a standard format for sharing documents that keep their layout." },
    { id: 23, intitule: "What is an online appointment for?", choices: ["Book a time slot", "Send an email", "Watch videos", "Post on social media"], answer: 0, famille: "Services & Procedures", couleur: "#17c3b2", explanation: "Online appointments let you schedule meetings with services or offices digitally." },
    { id: 24, intitule: "What is a search engine?", choices: ["Tool to find information online", "Software to block ads", "A social network", "A video player"], answer: 0, famille: "Services & Procedures", couleur: "#17c3b2", explanation: "Search engines help you find websites, information, and resources online." },
    { id: 25, intitule: "Why create an official account?", choices: ["Securely access services", "Send spam", "Play music", "Watch TV"], answer: 0, famille: "Services & Procedures", couleur: "#17c3b2", explanation: "Official accounts allow safe access to services like tax or healthcare portals." },
    { id: 26, intitule: "What is an online form for?", choices: ["Filling out documents digitally", "Checking emails", "Downloading music", "Watching videos"], answer: 0, famille: "Services & Procedures", couleur: "#17c3b2", explanation: "Online forms let you submit information without visiting offices physically." },
    { id: 27, intitule: "Why check official websites?", choices: ["Reliable information", "Funny images", "Movie trailers", "Songs"], answer: 0, famille: "Services & Procedures", couleur: "#17c3b2", explanation: "Official websites provide accurate and trustworthy information." },
    { id: 28, intitule: "What is e-government?", choices: ["Digital public services", "Online gaming", "Social networks", "Video streaming"], answer: 0, famille: "Services & Procedures", couleur: "#17c3b2", explanation: "E-government provides public services online for convenience and efficiency." },
    { id: 29, intitule: "Why read official notices online?", choices: ["To stay informed about services", "To watch movies", "To play games", "To chat"], answer: 0, famille: "Services & Procedures", couleur: "#17c3b2", explanation: "Official notices keep you updated on legal, financial, and civic matters." },
    { id: 30, intitule: "What is the benefit of online payments for services?", choices: ["Convenience and security", "Fast movies", "More emails", "Social media posts"], answer: 0, famille: "Services & Procedures", couleur: "#17c3b2", explanation: "Online payments save time and reduce the risk of handling cash." },

    // ----- 4. Buying Online -----
    { id: 31, intitule: "What is a shopping cart for?", choices: ["Group items to buy", "Send emails", "Read news", "Watch TV"], answer: 0, famille: "Buying Online", couleur: "#ff9a3c", explanation: "A shopping cart stores selected items before checkout on an online store." },
    { id: 32, intitule: "How to pay safely online?", choices: ["Use secure payment methods", "Share passwords", "Click ads", "Send SMS"], answer: 0, famille: "Buying Online", couleur: "#ff9a3c", explanation: "Secure payment methods protect your money and personal data." },
    { id: 33, intitule: "Why read customer reviews?", choices: ["Learn product quality", "Play games", "Watch videos", "Send emails"], answer: 0, famille: "Buying Online", couleur: "#ff9a3c", explanation: "Reviews help you understand if a product is reliable before buying." },
    { id: 34, intitule: "What is a return policy?", choices: ["Rules to return items", "Send SMS", "Play music", "Watch TV"], answer: 0, famille: "Buying Online", couleur: "#ff9a3c", explanation: "A return policy explains how you can return or exchange purchased items." },
    { id: 35, intitule: "What is a secure payment method?", choices: ["Credit card with verification", "Send money in email", "Cash online", "Post on social media"], answer: 0, famille: "Buying Online", couleur: "#ff9a3c", explanation: "Verified payment methods protect your financial information." },
    { id: 36, intitule: "Why check the website’s trust?", choices: ["Avoid scams", "Buy faster", "Send emails", "Play music"], answer: 0, famille: "Buying Online", couleur: "#ff9a3c", explanation: "Trustworthy sites reduce the risk of fraud and stolen data." },
    { id: 37, intitule: "What is a sponsored ad?", choices: ["Commercial message online", "Email from friend", "PDF document", "TV show"], answer: 0, famille: "Buying Online", couleur: "#ff9a3c", explanation: "Sponsored ads promote products or services online for marketing purposes." },
    { id: 38, intitule: "Why track your order?", choices: ["Know delivery status", "Read emails", "Play games", "Watch videos"], answer: 0, famille: "Buying Online", couleur: "#ff9a3c", explanation: "Tracking helps you know when your purchase will arrive." },
    { id: 39, intitule: "What should you check before buying?", choices: ["Reviews and website security", "Color of website", "Ads", "Font size"], answer: 0, famille: "Buying Online", couleur: "#ff9a3c", explanation: "Check reviews and security to make safe and informed purchases." },
    { id: 40, intitule: "Why read product descriptions?", choices: ["Understand product use", "Check movies", "Listen music", "Send SMS"], answer: 0, famille: "Buying Online", couleur: "#ff9a3c", explanation: "Descriptions explain what the product does and its features." },

    // ----- 5. Storage & Organization -----
    { id: 41, intitule: "What is cloud storage for?", choices: ["Store files online", "Send emails", "Watch TV", "Play music"], answer: 0, famille: "Storage & Organization", couleur: "#ffb400", explanation: "Cloud storage lets you save files online to access them from any device." },
    { id: 42, intitule: "What is a folder?", choices: ["Group files together", "Send messages", "Watch TV", "Play games"], answer: 0, famille: "Storage & Organization", couleur: "#ffb400", explanation: "Folders organize files so you can find them easily." },
    { id: 43, intitule: "Why backup files?", choices: ["Prevent data loss", "Play games", "Watch videos", "Send emails"], answer: 0, famille: "Storage & Organization", couleur: "#ffb400", explanation: "Backups protect important files in case of device failure." },
    { id: 44, intitule: "How to download files?", choices: ["Copy from internet", "Send SMS", "Play videos", "Check emails"], answer: 0, famille: "Storage & Organization", couleur: "#ffb400", explanation: "Downloading saves a copy of a file from the internet to your device." },
    { id: 45, intitule: "What is a screenshot?", choices: ["Photo of your screen", "Email", "Video", "PDF"], answer: 0, famille: "Storage & Organization", couleur: "#ffb400", explanation: "Screenshots capture exactly what is displayed on your screen." },
    { id: 46, intitule: "What does storage space mean?", choices: ["Capacity of your device", "Number of apps", "Number of emails", "Number of websites"], answer: 0, famille: "Storage & Organization", couleur: "#ffb400", explanation: "Storage space indicates how much data your device can hold." },
    { id: 47, intitule: "Why organize files?", choices: ["Find them easily", "Play games", "Watch TV", "Send messages"], answer: 0, famille: "Storage & Organization", couleur: "#ffb400", explanation: "Organizing files saves time and avoids confusion." },
    { id: 48, intitule: "What is a cloud backup?", choices: ["Online copy of files", "An email", "Video", "Music"], answer: 0, famille: "Storage & Organization", couleur: "#ffb400", explanation: "Cloud backups store copies of files online for safety." },
    { id: 49, intitule: "Why label files?", choices: ["To identify them quickly", "Play games", "Watch TV", "Send messages"], answer: 0, famille: "Storage & Organization", couleur: "#ffb400", explanation: "Labels help you recognize and find files faster." },
    { id: 50, intitule: "What is the difference between download and upload?", choices: ["Download = get files; Upload = send files", "Both are sending files", "Both are watching files", "Both are deleting files"], answer: 0, famille: "Storage & Organization", couleur: "#ffb400", explanation: "Download brings files to your device, upload sends files to the internet." },

    // ----- 6. Tools & Devices -----
    { id: 51, intitule: "What is a tablet?", choices: ["Portable touch-screen computer", "Landline phone", "Scanner", "TV"], answer: 0, famille: "Tools & Devices", couleur: "#6a4c93", explanation: "Tablets are mobile computers with touch screens for apps and internet." },
    { id: 52, intitule: "What is a web browser?", choices: ["Program to view websites", "Email client", "Music player", "PDF reader"], answer: 0, famille: "Tools & Devices", couleur: "#6a4c93", explanation: "Browsers allow you to visit and interact with websites." },
    { id: 53, intitule: "What is Wi-Fi?", choices: ["Wireless internet", "Ethernet cable", "Printer", "Keyboard"], answer: 0, famille: "Tools & Devices", couleur: "#6a4c93", explanation: "Wi-Fi provides wireless access to the internet." },
    { id: 54, intitule: "What is a router?", choices: ["Device that distributes Wi-Fi", "Printer", "Scanner", "Camera"], answer: 0, famille: "Tools & Devices", couleur: "#6a4c93", explanation: "Routers share internet connections with multiple devices." },
    { id: 55, intitule: "What is an operating system?", choices: ["Main software managing device", "Web browser", "PDF reader", "Music player"], answer: 0, famille: "Tools & Devices", couleur: "#6a4c93", explanation: "Operating systems control hardware and run applications on devices." },
    { id: 56, intitule: "What is an app?", choices: ["Program for a task", "Printer", "Scanner", "TV remote"], answer: 0, famille: "Tools & Devices", couleur: "#6a4c93", explanation: "Apps are programs designed to perform specific tasks on devices." },
    { id: 57, intitule: "Why update your device?", choices: ["For security and performance", "To change colors", "To watch movies", "To play music"], answer: 0, famille: "Tools & Devices", couleur: "#6a4c93", explanation: "Updates improve security, fix bugs, and enhance device performance." },
    { id: 58, intitule: "Why use antivirus software?", choices: ["Protect against malware", "Play games", "Watch videos", "Send emails"], answer: 0, famille: "Tools & Devices", couleur: "#6a4c93", explanation: "Antivirus software helps prevent infections and protects your data." },
    { id: 59, intitule: "Why clear browser history?", choices: ["Privacy protection", "To watch TV", "To play music", "To send emails"], answer: 0, famille: "Tools & Devices", couleur: "#6a4c93", explanation: "Clearing history protects your privacy and keeps your browser clean." },
    { id: 60, intitule: "What is a USB drive for?", choices: ["Store and transfer files", "Send emails", "Watch TV", "Play games"], answer: 0, famille: "Tools & Devices", couleur: "#6a4c93", explanation: "USB drives are portable storage devices for moving data between computers." },

    // ----- 7. Daily Life Applications -----
    { id: 61, intitule: "What is an online map for?", choices: ["Finding directions", "Sending emails", "Watching TV", "Downloading videos"], answer: 0, famille: "Daily Life Applications", couleur: "#00b894", explanation: "Online maps help you navigate and plan routes." },
    { id: 62, intitule: "How to check the weather online?", choices: ["Use a weather website", "Call a friend", "Read newspaper", "Open a PDF"], answer: 0, famille: "Daily Life Applications", couleur: "#00b894", explanation: "Weather websites give real-time forecasts and alerts." },
    { id: 63, intitule: "Where to read online news?", choices: ["News website", "TV", "Scanner", "Photo gallery"], answer: 0, famille: "Daily Life Applications", couleur: "#00b894", explanation: "News websites provide current events and information digitally." },
    { id: 64, intitule: "What is a recipe website for?", choices: ["Find cooking instructions", "Send emails", "Watch TV", "Play music"], answer: 0, famille: "Daily Life Applications", couleur: "#00b894", explanation: "Recipe websites give step-by-step instructions to prepare food." },
    { id: 65, intitule: "What is a video platform?", choices: ["Watch videos online", "Send SMS", "Store files", "Print documents"], answer: 0, famille: "Daily Life Applications", couleur: "#00b894", explanation: "Video platforms allow streaming and watching videos online." },
    { id: 66, intitule: "What is streaming?", choices: ["Watch movies or series online", "Download files", "Send emails", "Read PDFs"], answer: 0, famille: "Daily Life Applications", couleur: "#00b894", explanation: "Streaming lets you watch or listen to content without downloading it." },
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

    question.choices.forEach((choice, i) => {
        const btn = document.createElement('button');
        btn.textContent = choice;
        btn.style.background = question.couleur;
        btn.onclick = () => checkAnswer(question, i);
        answersDiv.appendChild(btn);
    });

    const result = document.getElementById('result');
    result.textContent = '';
    result.className = 'result';

    usedToken = false;
}

// ----- Check answer -----
function checkAnswer(question, index) {
    if (usedToken) return;

    usedToken = true;
    const result = document.getElementById('result');

    if (index === question.answer) {
        result.innerHTML = `✅ Well done! You can use your Replay Token.<br><small>${question.explanation}</small>`;
        result.classList.add('good');
    } else {
        result.innerHTML = `❌ Incorrect. Your Replay Token is lost.<br><small>Correct answer: ${question.choices[question.answer]} – ${question.explanation}</small>`;
        result.classList.add('bad');
    }

    document.querySelectorAll('#answers button').forEach(btn => btn.disabled = true);
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