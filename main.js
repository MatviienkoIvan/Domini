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

let activeScreenSize;

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
const sheetId = '__SHEET_ID__';
const sheetName = 'links';
const sheetRange = 'A:A';
const googleAPI = '__GOOGLE_API_KEY__';
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
                <img src="./images/general/domini-cup.jpg" alt="Zawody Domini Cup">
            </div>
            <div class="section-text">
                <h2>Domini Cup</h2>
                <p>Turniej międzynarodowy gimnastyki artystycznej, który narodził się z pasji do sportu i marzenia o stworzeniu wyjątkowej platformy dla młodych talentów. Zorganizowany przez Stowarzyszenie Klub Sportowy „DOMINI” z Opola, turniej szybko stał się wydarzeniem o międzynarodowym zasięgu. Pierwsza edycja zgromadziła ponad 300 zawodniczek z 8 krajów, a każda kolejna przyciąga coraz większą uwagę, co świadczy o jego rosnącym prestiżu. To tu młode gimnastyczki, w wieku od 3 do 24 lat, mogą poczuć atmosferę wielkich zawodów, zdobyć cenne doświadczenie i rywalizować na najwyższym poziomie.</p>
            </div>
        </div>

        <div class="section-block reverse">
            <div class="section-image">
                <img src="./images/general/nasza-misja.jpg" alt="Trening gimnastyczny">
            </div>
            <div class="section-text">
                <h2>Nasza Misja</h2>
                <p>Wierzymy, że sport to coś więcej niż tylko rywalizacja. Misją Domini Cup jest promowanie gimnastyki artystycznej jako dyscypliny rozwijającej nie tylko ciało, ale także charakter. Wartości takie jak precyzja, dyscyplina, wytrwałość i ciężka praca są wplecione w każdy element naszego turnieju. To one kształtują przyszłe pokolenia sportowców i stanowią fundament, na którym budujemy naszą społeczność. Jesteśmy dumni, że nasze działania są wspierane przez Prezydenta Miasta Opole oraz Marszałka Województwa opolskiego, co pozwala nam tworzyć wydarzenie zgodne z najwyższymi standardami organizacyjnymi.</p>
            </div>
        </div>

        <div class="section-block">
            <div class="section-image">
                <img src="./images/general/nasz-zespol.jpg" alt="Trenerzy i drużyna">
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
                <img src="./images/general/domini-cup.jpg" alt="Zawody Domini Cup">
            </div>
            <div class="section-text">
                <h2>Domini Cup</h2>
                <p>The Domini Cup is an international rhythmic gymnastics tournament born from a passion for sport and the dream of creating an exceptional platform for young talent. Organized by the "DOMINI" Sports Club Association from Opole, Poland, the tournament quickly gained international recognition. The first edition gathered over 300 competitors from 8 countries, and each subsequent event attracts increasing attention, attesting to its growing prestige. It's here that young gymnasts, aged 3 to 18, can experience the thrill of major competitions, gain invaluable experience, and compete at the highest level.
</p>
            </div>
        </div>

        <div class="section-block reverse">
            <div class="section-image">
                <img src="./images/general/nasza-misja.jpg" alt="Trening gimnastyczny">
            </div>
            <div class="section-text">
                <h2>Our Mission</h2>
                <p>We believe that sport is more than just competition. The mission of the Domini Cup is to promote rhythmic gymnastics as a discipline that develops not only the body but also character. Values such as precision, discipline, perseverance, and hard work are woven into every element of our tournament. These principles shape future generations of athletes and form the foundation upon which we build our community. We are proud that our actions are supported by the President of Opole City, the Marshal of the Opole Voivodeship, and hold the patronage of the Ministry of Sport and Tourism, which allows us to create an event that adheres to the highest organizational standards.
</p>
            </div>
        </div>

        <div class="section-block">
            <div class="section-image">
                <img src="./images/general/nasz-zespol.jpg" alt="Trenerzy i drużyna">
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
                <img src="./images/general/domini-cup.jpg" alt="Zawody Domini Cup">
            </div>
            <div class="section-text">
                <h2>Domini Cup</h2>
                <p>Domini Cup — це міжнародний турнір з художньої гімнастики, який народився з пристрасті до спорту та мрії створити унікальну платформу для молодих талантів. Організований спортивним клубом «DOMINI» з Ополя, турнір швидко став подією міжнародного рівня.</p>
            </div>
        </div>

        <div class="section-block reverse">
            <div class="section-image">
                <img src="./images/general/nasza-misja.jpg" alt="Trening gimnastyczny">
            </div>
            <div class="section-text">
                <h2>Наша місія</h2>
                <p>Місія Domini Cup — популяризація художньої гімнастики як дисципліни, що розвиває не лише тіло, але й характер. Такі цінності, як точність, дисципліна, наполегливість та важка праця, закладені в основу кожного елементу нашого турніру.</p>
            </div>
        </div>

        <div class="section-block">
            <div class="section-image">
                <img src="./images/general/nasz-zespol.jpg" alt="Trenerzy i drużyna">
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
                <div class="section-image main-page-image">
                    <img src="./images/general/logo-gimnastyka.png" alt="Domini Cup Logo">
                </div>
                <p>Get Ready for an electrifying international Unforgettable Spectacle of Rhythmic Gymnastics!</p>
                <p>DOMINI invites you to <b class="address">Stegu Arena, Opole, on February 7th-8th, 2026</b>, for the second edition of the Domini Cup. Witness young talents aged <b>3-18</b> from across the globe showcase breathtaking artistry, precision, and athleticism.</p>
                <p>More than just competition, the Domini Cup celebrates dedication, passion, and the unifying power of sport. Experience unforgettable performances and the vibrant atmosphere of international excellence.</p>
                <p>With the proud patronage of the <i><b>President of Opole City</b></i>, the <i><b>Marshal of the Opole Voivodeship</b></i>, and the <i><b>Ministry of Sport and Tourism</b></i>, we uphold the highest standards, fostering character development through discipline and hard work.</p>
                <p><b class="join-us">Join Us!</b> Don't miss this spectacular event!<p>
                <p>We are waiting for you!</p>
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
                <div class="section-image main-page-image">
                    <img src="./images/general/logo-gimnastyka.png" alt="Domini Cup Logo">
                </div>
                <p>Przygotujcie się na elektryzujący międzynarodowy turniej gimnastyki artystycznej!</p>
                <p>Stowarzyszenie Klub Sportowy DOMINI zaprasza do <b class="address">Stegu Areny w Opolu, w dniach 7-8 lutego 2026 roku</b>, na drugą edycję Domini Cup. Bądźcie świadkami zapierających dech w piersiach popisów artyzmu, precyzji i atletyzmu młodych talentów w wieku <b>3-18</b> lat z całego świata</p>
                <p>Domini Cup to coś więcej niż tylko zawody, to celebracja poświęcenia, pasji i jednoczącej siły sportu. Doświadczcie niezapomnianych występów i tętniącej życiem atmosfery międzynarodowej doskonałości.</p>
                <p>Dzięki dumnemu patronatowi <i><b>Prezydenta Miasta Opola</b></i>, <i><b>Marszałka Województwa Opolskiego</b></i> oraz <i><b>Ministerstwa Sportu i Turystyki</b></i>, utrzymujemy najwyższe standardy, wspierając rozwój charakteru poprzez dyscyplinę i ciężką pracę.</p>
                <p><b class="join-us">Dołącz do Nas!</b> Nie przegap tego spektakularnego wydarzenia!<p>
                <p>Czekamy na Ciebie!</p>
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
                <div class="section-image main-page-image">
                    <img src="./images/general/logo-gimnastyka.png" alt="Domini Cup Logo">
                </div>
                <p>Приготуйтеся до захопливого міжнародного турніру з художньої гімнастики!</p>
                <p>Асоціація спортивних клубів DOMINI запрошує вас до <b class="address">Stegu Areny в місті Opole, 7-8 лютого 2026 року</b>, на другий Кубок Доміні. Станьте свідком захопливих проявів артистизму, точності та атлетизму юних талантів віком <b>3-18</b> років з усього світу</p>
                <p>Кубок Доміні - це більше, ніж просто змагання; це свято відданості, пристрасті та об'єднуючої сили спорту. Відчуйте незабутні виступи та яскраву атмосферу міжнародної досконалості.</p>
                <p>Завдяки поважним патронатам <i><b>Prezydenta Miasta Opola</b></i>, <i><b>Marszałka Województwa Opolskiego</b></i> та <i><b>Ministerstwa Sportu i Turystyki</b></i>, ми підтримуємо найвищі стандарти, розвиток характеру через дисципліну та наполегливу працю.</p>
                <p><b class="join-us">Приєднуйтесь до нас!</b> Не пропустіть цю вражаючу подію!<p>
                <p>Ми чекаємо на вас!</p>
            </div>
        </div>
    </div>
</article>`;

const groupsPl = `<h1 class="gallery-title">Grupy</h1><p>Lista dostępnych grup i ich opisy.</p>`;
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
        [siteNavs.documents]: '',
        [siteNavs.place]: '',
        [siteNavs.gallery]: galleryPl
    },
    en: {
        [siteNavs.main]: mainEn,
        [siteNavs.aboutUs]: aboutEn,
        [siteNavs.groups]: groupsPl,
        [siteNavs.documents]: '',
        [siteNavs.place]: '',
        [siteNavs.gallery]: galleryEn
    },
    ua: {
        [siteNavs.main]: mainUkr,
        [siteNavs.aboutUs]: aboutUa,
        [siteNavs.groups]: groupsPl,
        [siteNavs.documents]: '',
        [siteNavs.place]: '',
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
    if (page === siteNavs.place) {
        content.innerHTML = getPlace();
    } else if (page === siteNavs.documents) {
        content.innerHTML = getDocuments();
    } else {
        content.innerHTML = pages[currentLang][page] || `<h1>Page not found</h1>`;
    }

    if (burgerMenuOpened) {
        toggleMenu(true);
    }

    if (page === siteNavs.gallery) {
        // to clean existing listenear and avoid multiple subscriptions
        window.removeEventListener("resize", () => {});
        loadGallery();
        window.addEventListener("resize", (event) => {
            const width = event.target.innerWidth;
            let newScreenSize;
            switch(true) {
                case width <= 480:
                    newScreenSize = screenSize.xs;
                    break;
                case width <= 768:
                    newScreenSize = screenSize.sm;
                    break;
                case width <= 1024:
                    newScreenSize = screenSize.md;
                    break;
                default:
                    newScreenSize = screenSize.lg;
                    break;
            }

            if (activeScreenSize !== newScreenSize) {
                checkScreenSizeBeforeBuildCarousel(width, false, true);
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
        checkScreenSizeBeforeBuildCarousel(window.innerWidth, false, true);
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
let prevBtn;
let nextBtn;
function renderCarousel(imageSize, reRenderBtns) {
    if (!carousel) {
        carousel = document.getElementById("gallery-carousel");
        thumbsLeft = document.getElementById("thumbs-left");
        thumbsRight = document.getElementById("thumbs-right");
        mainFrame = document.getElementById("main-frame");
        prevBtn = document.getElementById("prev-btn");
        nextBtn = document.getElementById("next-btn");
    }

    if (reRenderBtns) {
        if (prevBtn && nextBtn) {
            prevBtn.removeEventListener('click', () => {})
            nextBtn.removeEventListener('click', () => {})
        }
    
        // Prev / Next arrows
        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + total) % total;
            renderCarousel(imageSize);
        });
        nextBtn.addEventListener("click", () => {
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
    const BATCH = 200;

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
        modal.focus();
        grid.innerHTML = "";
        loadedCount = 0;
        loadMore();
    }

    function closeModal() {
        modal.style.display = "none";
    }

    closeBtn.addEventListener('click', () => closeModal());
    modal.addEventListener('keydown', (e) => { if (e.code === 'Escape') closeModal(); });
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.getElementById("overview-btn").addEventListener('click', () => {
        if (modal.style.display === 'none') openModal();
    });
    document.getElementById("overview-btn").addEventListener('keydown', (e) => {
        if (modal.style.display === 'none' && (e.code === 'Enter' || e.code === 'Space')) openModal();
    });

    // Infinite scroll listener
    // grid.addEventListener("scroll", () => {
    //     if (grid.scrollTop + grid.clientHeight >= grid.scrollHeight - 50) {
    //         loadMore();
    //     }
    // });
}

function checkScreenSizeBeforeBuildCarousel(innerWidth, skipCarousel = false, reRenderBtns = false) {
    let renderSize;
    switch(true) {
        case innerWidth <= 480:
            activeScreenSize = screenSize.xs;
            renderSize = 200;
            break;
        case innerWidth <= 768:
            activeScreenSize = screenSize.sm;
            renderSize = 300;
            break;
        case innerWidth <= 1024:
            activeScreenSize = screenSize.md;
            renderSize = 400;
            break;
        default:
            activeScreenSize = screenSize.lg;
            renderSize = 600;
            break;
    }
    
    if (!skipCarousel) {
        renderCarousel(renderSize, reRenderBtns);
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
if (!pages[currentLang][currentPage] && !currentPage) {
    currentPage = navLabels[siteNavs.main];
}
checkScreenSizeBeforeBuildCarousel(window.innerWidth,true)
setLanguage(currentLang);

function getPlace() {
    const width = activeScreenSize === screenSize.lg ? 400 : 300;
    const height = activeScreenSize === screenSize.lg ? 300 : 200;
    const en = `
    <h1>Locations</h1>
    <div class="locations">
        <div class="locations__card">
            <div class="locations__card__address">
                <span class="locations__card__city">City: <b>Opole</b></span>
                <span class="locations__card__street">Street: <i>Ozimska 48a</i>, Lyceum 8</span>
                <span class="locations__card__code">Post code: 45-368</span>
            </div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.8029706517345!2d17.93634360544745!3d50.6679186746847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471053ead276f5c5%3A0xe301241fc0df2020!2sSGA%20Domini%20Opole%20-%20Szko%C5%82a%20Gimnastyki%20Artystycznej!5e0!3m2!1sru!2spl!4v1768856789222!5m2!1sru!2spl"
                width="${width}"
                height="${height}"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
        <div class="locations__card">
            <div class="locations__card__address">
                <span class="locations__card__city">City: <b>Opole</b></span>
                <span class="locations__card__street">Street: <i>Majora 'Hubala' 2</i>, School 25</span>
                <span class="locations__card__code">Post code: 45-267</span>
            </div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.1245429950936!2d17.950608600000002!3d50.68051320000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471053bc5eead91d%3A0x851df7680a0bf2a9!2sPubliczna%20Szko%C5%82a%20Podstawowa%20nr%205%20z%20Oddzia%C5%82ami%20Integracyjnymi%20im%20Karola%20Musio%C5%82a!5e0!3m2!1sru!2spl!4v1768857808795!5m2!1sru!2spl"
                width="${width}"
                height="${height}"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
        <div class="locations__card">
            <div class="locations__card__address">
                <span class="locations__card__city">City: <b>Brzeg</b></span>
                <span class="locations__card__street">Street: <i>Poprzeczna 1</i>, School 6</span>
                <span class="locations__card__code">Post code: 49-304</span>
            </div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1497.7728600373505!2d17.462885486043394!3d50.85072760149036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47102fdf7e58ecd3%3A0x8340c54af71738d9!2sPubliczna%20Szko%C5%82a%20Podstawowa%20nr%206%20im.%20Tadeusza%20Ko%C5%9Bciuszki%20w%20Brzegu!5e0!3m2!1sru!2spl!4v1768857968612!5m2!1sru!2spl"
                width="${width}"
                height="${height}"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>`;
    const pl = `
    <h1>Lokalizacje</h1>
    <div class="locations">
        <div class="locations__card">
            <div class="locations__card__address">
                <span class="locations__card__city">Miasto: <b>Opole</b></span>
                <span class="locations__card__street">Ulica: <i>Ozimska 48a</i>, Liceum 8</span>
                <span class="locations__card__code">Kod pocztowy: 45-368</span>
            </div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.8029706517345!2d17.93634360544745!3d50.6679186746847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471053ead276f5c5%3A0xe301241fc0df2020!2sSGA%20Domini%20Opole%20-%20Szko%C5%82a%20Gimnastyki%20Artystycznej!5e0!3m2!1sru!2spl!4v1768856789222!5m2!1sru!2spl"
                width="${width}"
                height="${height}"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
        <div class="locations__card">
            <div class="locations__card__address">
                <span class="locations__card__city">Miasto: <b>Opole</b></span>
                <span class="locations__card__street">Ulica: <i>Majora 'Hubala' 2</i>, Szkoła 25</span>
                <span class="locations__card__code">Kod pocztowy: 45-267</span>
            </div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.1245429950936!2d17.950608600000002!3d50.68051320000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471053bc5eead91d%3A0x851df7680a0bf2a9!2sPubliczna%20Szko%C5%82a%20Podstawowa%20nr%205%20z%20Oddzia%C5%82ami%20Integracyjnymi%20im%20Karola%20Musio%C5%82a!5e0!3m2!1sru!2spl!4v1768857808795!5m2!1sru!2spl"
                width="${width}"
                height="${height}"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            </iframe>
        </div>
        <div class="locations__card">
            <div class="locations__card__address">
                <span class="locations__card__city">Miasto: <b>Brzeg</b></span>
                <span class="locations__card__street">Ulica: <i>Poprzeczna 1</i>, Szkoła 6</span>
                <span class="locations__card__code">Kod pocztowy: 49-304</span>
            </div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1497.7728600373505!2d17.462885486043394!3d50.85072760149036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47102fdf7e58ecd3%3A0x8340c54af71738d9!2sPubliczna%20Szko%C5%82a%20Podstawowa%20nr%206%20im.%20Tadeusza%20Ko%C5%9Bciuszki%20w%20Brzegu!5e0!3m2!1sru!2spl!4v1768857968612!5m2!1sru!2spl"
                width="${width}"
                height="${height}"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>`;
    const ua = `
    <h1>Локації</h1>
    <div class="locations">
        <div class="locations__card">
            <div class="locations__card__address">
                <span class="locations__card__city">Місто: <b>Opole</b></span>
                <span class="locations__card__street">Вулиця: <i>Ozimska 48a</i>, Ліцей №8</span>
                <span class="locations__card__code">Поштовий індекс: 45-368</span>
            </div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.8029706517345!2d17.93634360544745!3d50.6679186746847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471053ead276f5c5%3A0xe301241fc0df2020!2sSGA%20Domini%20Opole%20-%20Szko%C5%82a%20Gimnastyki%20Artystycznej!5e0!3m2!1sru!2spl!4v1768856789222!5m2!1sru!2spl"
                width="${width}"
                height="${height}"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
        <div class="locations__card">
            <div class="locations__card__address">
                <span class="locations__card__city">Місто: <b>Opole</b></span>
                <span class="locations__card__street">Вулиця: <i>Majora 'Hubala' 2</i>, Школа №25</span>
                <span class="locations__card__code">Поштовий індекс: 45-267</span>
            </div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.1245429950936!2d17.950608600000002!3d50.68051320000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471053bc5eead91d%3A0x851df7680a0bf2a9!2sPubliczna%20Szko%C5%82a%20Podstawowa%20nr%205%20z%20Oddzia%C5%82ami%20Integracyjnymi%20im%20Karola%20Musio%C5%82a!5e0!3m2!1sru!2spl!4v1768857808795!5m2!1sru!2spl"
                width="${width}"
                height="${height}"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
        <div class="locations__card">
            <div class="locations__card__address">
                <span class="locations__card__city">Місто: <b>Brzeg</b></span>
                <span class="locations__card__street">Вулиця: <i>Poprzeczna 1</i>, Школа №6</span>
                <span class="locations__card__code">Поштовий індекс: 49-304</span>
            </div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1497.7728600373505!2d17.462885486043394!3d50.85072760149036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47102fdf7e58ecd3%3A0x8340c54af71738d9!2sPubliczna%20Szko%C5%82a%20Podstawowa%20nr%206%20im.%20Tadeusza%20Ko%C5%9Bciuszki%20w%20Brzegu!5e0!3m2!1sru!2spl!4v1768857968612!5m2!1sru!2spl"
                width="${width}"
                height="${height}"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>`

    switch (currentLang) {
        case languages.pl:
            return pl;
        case languages.en:
            return en;
        case languages.ua:
            return ua;
    }
}

function getDocuments() {
    const width = activeScreenSize === screenSize.xs ? 300 : 500;
    const height = activeScreenSize === screenSize.xs ? 500 : 370;

    const en = `<h1>Documents</h1><div class="documents"><div class="documents__card"><h2 class="documents__card__title">Domini competition rules</h2><embed src="./documents/regulamin_pl.pdf" width="${width}px" height="${height}vh"/></div>`;
    const pl = `<h1>Dokumenty</h1><div class="documents"><div class="documents__card"><h2 class="documents__card__title">Domini regulamin startu w zawodach</h2><embed src="./documents/regulamin_pl.pdf" width="${width}px" height="${height}vh"/></div></div>`;
    const ua = `<h1>Документи</h1><div class="documents"><div class="documents__card"><h2 class="documents__card__title">Правила змагань клубу Domini</h2><embed src="./documents/regulamin_pl.pdf" width="${width}px" height="${height}vh"/></div></div>`;

    switch (currentLang) {
        case languages.pl:
            return pl;
        case languages.en:
            return en;
        case languages.ua:
            return ua;
    }
}