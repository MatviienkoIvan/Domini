const localStorageData = {
    currentLanguage: 'lang',
    currentPage: 'page'
}

const screenSize = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
}

const siteNavs = {
    main: 'main',
    aboutUs: 'aboutUs',
    groups: 'groups',
    documents: 'documents',
    register: 'register',
    place: 'place',
    sponsorsTitle: 'sponsorsTitle',
    gallery: 'gallery',
};
const languages = {
    pl: 'pl',
    en: 'en',
    ua: 'ua'
};
const sponsorsTitleLanguages = {
    pl: "Patronaty",
    en: "Patronage",
    ua: "Спонсори",
}

const navLabels = {
    pl: {
        [siteNavs.main]: "Główna",
        [siteNavs.gallery]: "Galeria",
        [siteNavs.groups]: "Grupy",
        [siteNavs.documents]: "Dokumenty",
        [siteNavs.register]: "Zapisz się!",
        [siteNavs.place]: "Lokalizacji",
        [siteNavs.aboutUs]: "O nas",
    },
    en: {
        [siteNavs.main]: "Home",
        [siteNavs.gallery]: "Gallery",
        [siteNavs.groups]: "Groups",
        [siteNavs.documents]: "Documents",
        [siteNavs.register]: "Sign up!",
        [siteNavs.place]: "Places",
        [siteNavs.aboutUs]: "About us",
    },
    ua: {
        [siteNavs.main]: "Головна",
        [siteNavs.gallery]: "Галерея",
        [siteNavs.groups]: "Групи",
        [siteNavs.documents]: "Документи",
        [siteNavs.register]: "Реєстрація!",
        [siteNavs.place]: "Локації",
        [siteNavs.aboutUs]: "Про нас",
    }
};

const navMenu = document.querySelector('.nav-menu');
const content = document.getElementById('content');
const sponsorsTitle = document.getElementById('sponsorship-title');

let burgerMenuOpened = false;

const sheetId = '1HBPYyZ3nWezp0IAB2Yb8vlAwczczTTElsocJc3McYPo';
const sheetName = 'links';
const sheetRange = 'A:A';
const googleAPI = 'AIzaSyBsNFgDos0pdgmvAckiNiqvv74MR042aNw';
const gallerySheetUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}!${sheetRange}?key=${googleAPI}`;

// Initial data
let currentLang = localStorage.getItem(localStorageData.currentLanguage) || languages.pl;
let currentPage = localStorage.getItem(localStorageData.currentPage) || siteNavs.main;

// About
//Polish
const aboutPl = `<article>
    <div class="article-content">
        <div class="section-block">
            <div class="section-image">
                <img src="./images/domini-cup.jpg" alt="Zawody Domini Cup">
            </div>
            <div class="section-text">
                <h2>Domini Cup</h2>
                <p>Turniej międzynarodowy gimnastyki artystycznej, który narodził się z pasji do sportu i marzenia o stworzeniu wyjątkowej platformy dla młodych talentów. Zorganizowany przez Stowarzyszenie Klub Sportowy „DOMINI” z Opola, turniej szybko stał się wydarzeniem o międzynarodowym zasięgu. Pierwsza edycja zgromadziła ponad 300 zawodniczek z 8 krajów, a każda kolejna przyciąga coraz większą uwagę, co świadczy o jego rosnącym prestiżu. To tu młode gimnastyczki, w wieku od 3 do 24 lat, mogą poczuć atmosferę wielkich zawodów, zdobyć cenne doświadczenie i rywalizować na najwyższym poziomie.</p>
            </div>
        </div>

        <div class="section-block reverse">
            <div class="section-image">
                <img src="./images/nasza-misja.jpg" alt="Trening gimnastyczny">
            </div>
            <div class="section-text">
                <h2>Nasza Misja</h2>
                <p>Wierzymy, że sport to coś więcej niż tylko rywalizacja. Misją Domini Cup jest promowanie gimnastyki artystycznej jako dyscypliny rozwijającej nie tylko ciało, ale także charakter. Wartości takie jak precyzja, dyscyplina, wytrwałość i ciężka praca są wplecione w każdy element naszego turnieju. To one kształtują przyszłe pokolenia sportowców i stanowią fundament, na którym budujemy naszą społeczność. Jesteśmy dumni, że nasze działania są wspierane przez Prezydenta Miasta Opole oraz Marszałka Województwa opolskiego, co pozwala nam tworzyć wydarzenie zgodne z najwyższymi standardami organizacyjnymi.</p>
            </div>
        </div>

        <div class="section-block">
            <div class="section-image">
                <img src="./images/nasz-zespol.jpg" alt="Trenerzy i drużyna">
            </div>
            <div class="section-text">
                <h2>Nasz Zespół</h2>
                <p>Wizja przyszłości Naszym długoterminowym celem jest, aby Domini Cup stał się jednym z najbardziej prestiżowych turniejów gimnastyki artystycznej w Europie. Dążymy do tego, aby każde zawody były niezapomnianym przeżyciem dla zawodniczek, trenerów i publiczności. Dzięki silnemu wsparciu, zaangażowaniu lokalnej społeczności oraz determinacji naszego zespołukonsekwentnie rozwijamy naszą inicjatywę. Zapraszamy do śledzenia naszych działań i dołączenia do grona tych, którzy wierzą, że pasja i ciężka praca prowadzą do wielkich sukcesów.</p>
            </div>
        </div>
    </div>
</article>`;
// English
const aboutEn = `<article>
    <div class="article-content">
        <div class="section-block">
            <div class="section-image">
                <img src="./images/domini-cup.jpg" alt="Zawody Domini Cup">
            </div>
            <div class="section-text">
                <h2>Domini Cup</h2>
                <p>The Domini Cup is an international rhythmic gymnastics tournament born from a passion for sport and the dream of creating an exceptional platform for young talent. Organized by the "DOMINI" Sports Club Association from Opole, Poland, the tournament quickly gained international recognition. The first edition gathered over 300 competitors from 8 countries, and each subsequent event attracts increasing attention, attesting to its growing prestige. It's here that young gymnasts, aged 3 to 18, can experience the thrill of major competitions, gain invaluable experience, and compete at the highest level.
</p>
            </div>
        </div>

        <div class="section-block reverse">
            <div class="section-image">
                <img src="./images/nasza-misja.jpg" alt="Trening gimnastyczny">
            </div>
            <div class="section-text">
                <h2>Our Mission</h2>
                <p>We believe that sport is more than just competition. The mission of the Domini Cup is to promote rhythmic gymnastics as a discipline that develops not only the body but also character. Values such as precision, discipline, perseverance, and hard work are woven into every element of our tournament. These principles shape future generations of athletes and form the foundation upon which we build our community. We are proud that our actions are supported by the President of Opole City, the Marshal of the Opole Voivodeship, and hold the patronage of the Ministry of Sport and Tourism, which allows us to create an event that adheres to the highest organizational standards.
</p>
            </div>
        </div>

        <div class="section-block">
            <div class="section-image">
                <img src="./images/nasz-zespol.jpg" alt="Trenerzy i drużyna">
            </div>
            <div class="section-text">
                <h2>International Reach</h2>
                <p>The first edition gathered over 300 gymnasts from 8 countries, and each following edition attracts more attention, proving its growing prestige. Our long-term goal is for the Domini Cup to become one of the most prestigious rhythmic gymnastics tournaments in Europe. We strive to ensure that every competition is an unforgettable experience for gymnasts, coaches, and the audience alike. Thanks to strong support, the engagement of the local community, and the determination of our team, we are consistently developing our initiative. We invite you to follow our journey and join those who believe that passion and hard work lead to great success.</p>
            </div>
        </div>
    </div>
</article>`;
// Ukrainian
const aboutUa = `<article>
    <div class="article-content">
        <div class="section-block">
            <div class="section-image">
                <img src="./images/domini-cup.jpg" alt="Zawody Domini Cup">
            </div>
            <div class="section-text">
                <h2>Domini Cup</h2>
                <p>Domini Cup — це міжнародний турнір з художньої гімнастики, який народився з пристрасті до спорту та мрії створити унікальну платформу для молодих талантів. Організований спортивним клубом «DOMINI» з Ополя, турнір швидко став подією міжнародного рівня.</p>
            </div>
        </div>

        <div class="section-block reverse">
            <div class="section-image">
                <img src="./images/nasza-misja.jpg" alt="Trening gimnastyczny">
            </div>
            <div class="section-text">
                <h2>Наша місія</h2>
                <p>Місія Domini Cup — популяризація художньої гімнастики як дисципліни, що розвиває не лише тіло, але й характер. Такі цінності, як точність, дисципліна, наполегливість та важка праця, закладені в основу кожного елементу нашого турніру.</p>
            </div>
        </div>

        <div class="section-block">
            <div class="section-image">
                <img src="./images/nasz-zespol.jpg" alt="Trenerzy i drużyna">
            </div>
            <div class="section-text">
                <h2>Міжнародний масштаб</h2>
                <p>Перший турнір зібрав понад 300 гімнасток з 8 країн, і кожного року привертає все більшу увагу, що підтверджує його зростаючий престиж. Наша довгострокова мета — зробити Domini Cup одним із найпрестижніших турнірів з художньої гімнастики в Європі. Ми прагнемо, щоб кожні змагання були незабутнім досвідом для гімнасток, тренерів та глядачів.</p>
            </div>
        </div>
    </div>
</article>`;

// Main
// English
const mainEn = `<article>
    <div class="article-content">
        <div class="section-block main-block">
            <div class="section-text" id="main-text">
                <h2>Domini Cup 2026: Experience Grace, Power & Unity in Opole!</h2>
                <p>Get Ready for an electrifying international Unforgettable Spectacle of Rhythmic Gymnastics!</p>
                <p>DOMINI invites you to <b class="address">Stegu Arena, Opole, on February 7th-8th, 2026</b>, for the second edition of the Domini Cup. Witness young talents aged <b>3-18</b> from across the globe showcase breathtaking artistry, precision, and athleticism.</p>
                <p>More than just competition, the Domini Cup celebrates dedication, passion, and the unifying power of sport. Experience unforgettable performances and the vibrant atmosphere of international excellence.</p>
                <p>With the proud patronage of the <i><b>President of Opole City</b></i>, the <i><b>Marshal of the Opole Voivodeship</b></i>, and the <i><b>Ministry of Sport and Tourism</b></i>, we uphold the highest standards, fostering character development through discipline and hard work.</p>
                <p><b class="join-us">Join Us!</b> Don't miss this spectacular event!<p>
                <p>We are waiting for you!</p>
            </div>
            <div class="section-image main-image">
                <img src="./images/logo-gimnastyka.png" alt="Domini Cup Logo">
            </div>
        </div>
    </div>
</article>`;
// Polish
const mainPl = `<article>
    <div class="article-content">
        <div class="section-block main-block">
            <div class="section-text" id="main-text">
                <h2>Domini Cup 2026: Doświadcz Gracji, Siły i Jedności w Opolu!</h2>
                <p>Przygotujcie się na elektryzujący międzynarodowy turniej gimnastyki artystycznej!</p>
                <p>Stowarzyszenie Klub Sportowy DOMINI zaprasza do <b class="address">Stegu Areny w Opolu, w dniach 7-8 lutego 2026 roku</b>, na drugą edycję Domini Cup. Bądźcie świadkami zapierających dech w piersiach popisów artyzmu, precyzji i atletyzmu młodych talentów w wieku <b>3-18</b> lat z całego świata</p>
                <p>Domini Cup to coś więcej niż tylko zawody, to celebracja poświęcenia, pasji i jednoczącej siły sportu. Doświadczcie niezapomnianych występów i tętniącej życiem atmosfery międzynarodowej doskonałości.</p>
                <p>Dzięki dumnemu patronatowi <i><b>Prezydenta Miasta Opola</b></i>, <i><b>Marszałka Województwa Opolskiego</b></i> oraz <i><b>Ministerstwa Sportu i Turystyki</b></i>, utrzymujemy najwyższe standardy, wspierając rozwój charakteru poprzez dyscyplinę i ciężką pracę.</p>
                <p><b class="join-us">Dołącz do Nas!</b> Nie przegap tego spektakularnego wydarzenia!<p>
                <p>Czekamy na Ciebie!</p>
            </div>
            <div class="section-image main-image">
                <img src="./images/logo-gimnastyka.png" alt="Domini Cup Logo">
            </div>
        </div>
    </div>
</article>`;
// Ukraine
const mainUkr = `<article>
    <div class="article-content">
        <div class="section-block main-block">
            <div class="section-text" id="main-text">
                <h2>Кубок Доміні 2026: Відчуйте грацію, силу та єдність в Ополі!</h2>
                <p>Приготуйтеся до захопливого міжнародного турніру з художньої гімнастики!</p>
                <p>Асоціація спортивних клубів DOMINI запрошує вас до <b class="address">Stegu Areny в місті Opole, 7-8 лютого 2026 року</b>, на другий Кубок Доміні. Станьте свідком захопливих проявів артистизму, точності та атлетизму юних талантів віком <b>3-18</b> років з усього світу</p>
                <p>Кубок Доміні - це більше, ніж просто змагання; це свято відданості, пристрасті та об'єднуючої сили спорту. Відчуйте незабутні виступи та яскраву атмосферу міжнародної досконалості.</p>
                <p>Завдяки поважним патронатам <i><b>Prezydenta Miasta Opola</b></i>, <i><b>Marszałka Województwa Opolskiego</b></i> та <i><b>Ministerstwa Sportu i Turystyki</b></i>, ми підтримуємо найвищі стандарти, розвиток характеру через дисципліну та наполегливу працю.</p>
                <p><b class="join-us">Приєднуйтесь до нас!</b> Не пропустіть цю вражаючу подію!<p>
                <p>Ми чекаємо на вас!</p>
            </div>
            <div class="section-image main-image">
                <img src="./images/logo-gimnastyka.png" alt="Domini Cup Logo">
            </div>
        </div>
    </div>
</article>`;

const groupsPl = `<h1 class="gallery-title">Grupy</h1><p>Lista dostępnych grup i ich opisy.</p>`;
const documentsPl = `<h1>Dokumenty</h1><p>Pobierz potrzebne dokumenty tutaj.</p>`;
const subscribePl = `<h1>Zapisz się!</h1><p>Formularz rejestracyjny lub informacje jak się zapisać.</p>`;
const placePl = `<h1>Kontakt</h1><p>Skontaktuj się z nami pod adresem: kontakt@example.com</p>`;
const galleryPl = `<h1><button id="overview-btn" class="overview-btn">Zobacz wszystkie zdjęcia</button></h1>
    <section class="gallery">
        <div id="gallery-carousel" class="carousel">
            <button id="prev-btn">&#8592;</button>
            <div id="thumbs-left" class="thumbs"></div>
            <img id="main-frame" class="main-frame"></img>
            <div id="thumbs-right" class="thumbs"></div>
            <button id="next-btn">&#8594;</button>
        </div>
    </section>

    <div id="gallery-modal" style="display:none;">
        <div class="modal-content">
            <span id="modal-close">&times;</span>
            <div id="modal-grid"></div>
        </div>
    </div>
    `;
const galleryEn = `<h1 class="gallery-title"><button id="overview-btn" class="overview-btn">View all photos</button></h1>
    <section class="gallery">
        <div id="gallery-carousel" class="carousel">
            <button id="prev-btn">&#8592;</button>
            <div id="thumbs-left" class="thumbs"></div>
            <img id="main-frame" class="main-frame"></img>
            <div id="thumbs-right" class="thumbs"></div>
            <button id="next-btn">&#8594;</button>
        </div>
    </section>

    <div id="gallery-modal" style="display:none;">
        <div class="modal-content">
            <span id="modal-close">&times;</span>
            <div id="modal-grid"></div>
        </div>
    </div>
    `;
const galleryUa = `<h1 class="gallery-title"><button id="overview-btn" class="overview-btn">Переглянути всі фотографії</button></h1>
    <section class="gallery">
        <div id="gallery-carousel" class="carousel">
            <button id="prev-btn">&#8592;</button>
            <div id="thumbs-left" class="thumbs"></div>
            <img id="main-frame" class="main-frame"></img>
            <div id="thumbs-right" class="thumbs"></div>
            <button id="next-btn">&#8594;</button>
        </div>
    </section>

    <div id="gallery-modal" style="display:none;">
        <div class="modal-content">
            <span id="modal-close">&times;</span>
            <div id="modal-grid"></div>
        </div>
    </div>
    `;

const pages = {
    pl: {
        [siteNavs.main]: mainPl,
        [siteNavs.aboutUs]: aboutPl,
        [siteNavs.groups]: groupsPl,
        [siteNavs.documents]: documentsPl,
        [siteNavs.register]: subscribePl,
        [siteNavs.place]: placePl,
        [siteNavs.gallery]: galleryPl
    },
    en: {
        [siteNavs.main]: mainEn,
        [siteNavs.aboutUs]: aboutEn,
        [siteNavs.groups]: groupsPl,
        [siteNavs.documents]: documentsPl,
        [siteNavs.register]: subscribePl,
        [siteNavs.place]: placePl,
        [siteNavs.gallery]: galleryEn
    },
    ua: {
        [siteNavs.main]: mainUkr,
        [siteNavs.aboutUs]: aboutUa,
        [siteNavs.groups]: groupsPl,
        [siteNavs.documents]: documentsPl,
        [siteNavs.register]: subscribePl,
        [siteNavs.place]: placePl,
        [siteNavs.gallery]: galleryUa
    }
};

// Function to render menu based on current language
function renderMenu() {
    // Remove existing listeners
    getNavItems().forEach(item => {
        item.removeEventListener('click', undefined);
    });

    // Render new menu items
    navMenu.innerHTML = Object.keys(navLabels[currentLang])
        .map(page => {
            let item = `<li><a href="#" class="nav-item" data-page="${page}">${navLabels[currentLang][page]}</a></li>`;
            if (page === siteNavs.register) {
                item = `<li><a href="https://docs.google.com/forms/d/e/1FAIpQLSc2d-Tu3JsAcTKvmiVfjsp3PIXYZON8gQaDMpv-8bna55ukqw/viewform" target="_blank" class="nav-item subscribe-btn" data-page="${page}">${navLabels[currentLang][page]}</a></li>`;
            }

            return item;
        })
        .join('');

    // Reattach nav eventsListeners after rendering
    getNavItems().forEach(link => {
        if (link.getAttribute('data-page') !== siteNavs.register) {
            link.addEventListener('click', e => {
                e.preventDefault();
                currentPage = link.getAttribute('data-page');
                loadPage(currentPage);
                localStorage.setItem(localStorageData.currentPage, currentPage);``
            });
        }
    });
}

// Load page content
function loadPage(page) {
    updateActiveNav(page);
    content.innerHTML = pages[currentLang][page] || `<h1>Page not found</h1>`;

    if (burgerMenuOpened) {
        toggleMenu(true);
    }

    if (page === siteNavs.gallery) {
        // to clean existing listenear and avoid multiple subscriptions
        window.removeEventListener("resize", () => {});
        loadGallery();
        window.addEventListener("resize", (event) => {
            const innerWidth = event.target.innerWidth;
            let newScreenSize;
            switch(true) {
                case innerWidth < 480:
                    newScreenSize = screenSize.xs;
                    break;
                case innerWidth < 768:
                    newScreenSize = screenSize.sm;
                    break;
                case innerWidth < 1280:
                    newScreenSize = screenSize.md;
                    break;
                case innerWidth >= 1280:
                    newScreenSize = screenSize.lg;
                    break;
            }

            if (activeScreenSize !== newScreenSize) {
                checkScreenSizeBeforeBuildCarousel(innerWidth);
            }
        });
        
    }

    currentIndex = 0;
    carousel = undefined;
    thumbsLeft = undefined;
    thumbsRight = undefined;
    mainFrame = undefined;
}

const itemStatus = 'active';
// Update active nav
function updateActiveNav(page) {
    getNavItems().forEach(item => {
        item.classList.toggle(itemStatus, item.getAttribute('data-page') === page);
    });
}

// Update active flag
function updateActiveFlag() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle(itemStatus, btn.getAttribute('data-lang') === currentLang);
    });
}

// Set active language
function setLanguage(lang) {
    localStorage.setItem(localStorageData.currentLanguage, languages[lang]);
    currentLang = languages[lang]
    updateActiveFlag();
    renderMenu();
    changeSponsorTitle(lang);
    loadPage(currentPage);
}

function changeSponsorTitle(lang) {
    sponsorsTitle.textContent = sponsorsTitleLanguages[lang];
}

// get all menu items
function getNavItems() {
    return document.querySelectorAll('.nav-item') || [];
}

function toggleMenu(clicked) {
    if (clicked) {
        burgerMenuOpened = !burgerMenuOpened;
    }
    document.querySelector('.nav-menu').classList.toggle('active');
}

const galleryBuffer = {
    set: new Set(),
    listOfLinks: []
};        // store structured [thumb, main]

// load gallery
async function loadGallery() {
    try {
        const res = await fetch(gallerySheetUrl);
        const data = await res.json()
        const rows = data.values;
        if (!rows.length) {
            console.error("No data found in sheet");
            return;
        }

        rows.forEach(([link]) => {
            if (!galleryBuffer.set.has(link)) {
                galleryBuffer.listOfLinks.push([
                    thumbnailLink(link),
                    viewerLink(link)
                ]);
                galleryBuffer.set.add(link);
            }

            if (galleryBuffer.listOfLinks.length > 300) {
                galleryBuffer.listOfLinks.shift();
            }
        });

        // Now galleryBuffer.list contains ALL unique images
        // from here you build the carousel + modal
        checkScreenSizeBeforeBuildCarousel(window.innerWidth);
        setupModal();
    } catch (err) {
        console.error("Error loading gallery:", err);
    }
}

function resizeLink(url, size) {
  return url.includes('sz=s') ? url.replace(/&sz=s\d+/, `&sz=s${size}`) : url.replace(/=s\d+/, `=s${size}`);
}

function thumbnailLink(url) {
  // Extract file ID from Google Drive share link
  var id = url.match(/[-\w]{25,}/);
  if (id && id[0]) {
    return `https://drive.google.com/thumbnail?id=${id[0]}&sz=s400`;
  }
  return "";
}

function viewerLink(url) {
  // Extract file ID from Google Drive share link
  var id = url.match(/[-\w]{25,}/);
  if (id && id[0]) {
    return `https://lh3.googleusercontent.com/d/${id[0]}=s400`;
  }
  return "";
}

let currentIndex = 0;
let carousel;
let thumbsLeft;
let thumbsRight;
let mainFrame;
function renderCarousel(imageSize) {
    if (!carousel) {
        carousel = document.getElementById("gallery-carousel");
        thumbsLeft = document.getElementById("thumbs-left");
        thumbsRight = document.getElementById("thumbs-right");
        mainFrame = document.getElementById("main-frame");
        // Prev / Next arrows
        document.getElementById("prev-btn").addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + total) % total;
            renderCarousel(imageSize);
        });
        document.getElementById("next-btn").addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % total;
            renderCarousel(imageSize);
        });
    }
    
    const listOfLinks = galleryBuffer.listOfLinks;

    const total = listOfLinks.length;
    if (total === 0) return;

    // Wrap-around indexes
    let leftIndexes = [
        (currentIndex - 2 + total) % total,
        (currentIndex - 1 + total) % total
    ];
    let rightIndexes = [
        (currentIndex + 1) % total,
        (currentIndex + 2) % total
    ];

    carousel.querySelectorAll(".thumb").forEach(el => {
        el.removeEventListener("click", () => {});
    });

    // Render thumbs
    thumbsLeft.innerHTML = leftIndexes.map(idx => `
        <img src="${resizeLink(listOfLinks[idx][0], imageSize)}" class="thumb" data-index="${idx}" alt="left thumb photo" />
    `).join("");

    thumbsRight.innerHTML = rightIndexes.map(idx => `
        <img src="${resizeLink(listOfLinks[idx][0], imageSize)}" class="thumb" data-index="${idx}" alt="right thumb photo"/>
    `).join("");

   // Setup click listeners
    carousel.querySelectorAll(".thumb").forEach(el => {
        el.addEventListener("click", () => {
            currentIndex = parseInt(el.dataset.index);
            renderCarousel(imageSize);
        });
    });

    // Render main image in iframe
    mainFrame.src = resizeLink(listOfLinks[currentIndex][1], imageSize);
}

function setupModal() {
    const modal = document.getElementById("gallery-modal");
    const grid = document.getElementById("modal-grid");
    const closeBtn = document.getElementById("modal-close");

    // Infinite scroll loader
    let loadedCount = 0;
    const BATCH = 20;

    function loadMore() {
        const slice = galleryBuffer.listOfLinks.slice(loadedCount, loadedCount + BATCH);
        slice.forEach(([link], idx) => {
            const img = document.createElement("img");
            img.src = link;
            img.className = "thumb";
            img.dataset.index = loadedCount + idx;
            img.addEventListener('click', () => {
                currentIndex = parseInt(img.dataset.index);
                checkScreenSizeBeforeBuildCarousel(window.innerWidth);
                closeModal();
            });
            grid.appendChild(img);
        });
        loadedCount += slice.length;
    }

    function openModal() {
        modal.style.display = "flex";
        grid.innerHTML = "";
        loadedCount = 0;
        loadMore();
    }

    function closeModal() {
        modal.style.display = "none";
    }

    closeBtn.addEventListener('click', () => closeModal());
    document.getElementById("overview-btn").addEventListener('click', () => openModal());

    // Infinite scroll listener
    grid.addEventListener("scroll", () => {
        if (grid.scrollTop + grid.clientHeight >= grid.scrollHeight - 50) {
            loadMore();
        }
    });
}

let activeScreenSize;
function checkScreenSizeBeforeBuildCarousel(innerWidth) {
    switch(true) {
        case innerWidth < 480:
            activeScreenSize = screenSize.xs;
            renderCarousel(200);
            break;
        case innerWidth < 768:
            activeScreenSize = screenSize.sm;
            renderCarousel(300);
            break;
        case innerWidth < 1280:
            activeScreenSize = screenSize.md;
            renderCarousel(400);
            break;
        case innerWidth >= 1280:
            activeScreenSize = screenSize.lg;
            renderCarousel(600);
            break;
    }
}

document.addEventListener("click", function(event) {
    const logo = document.querySelector(".burger-menu"); // your burger trigger

    if (navMenu.classList.contains("active") &&
        !navMenu.contains(event.target) &&
        !logo.contains(event.target)) {
        navMenu.classList.remove("active");
    }
});

// initial calls
if (!pages[currentLang][currentPage]) {
    currentPage = navLabels[siteNavs.main];
}
setLanguage(currentLang);