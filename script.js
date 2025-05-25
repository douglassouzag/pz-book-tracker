const STORAGE_KEY = 'book-tracker-aquired';
const PROFILES_KEY = 'book-tracker-profiles';
const CURRENT_PROFILE_KEY = 'book-tracker-current-profile';

const CATEGORY_ICONS = {
    'Agriculture': 'fa-seedling',
    'Aiming': 'fa-bullseye',
    'Animal Care': 'fa-dog',
    'Butchering': 'fa-drumstick-bite',
    'Carpentry': 'fa-hammer',
    'Carving': 'fa-tree',
    'Cooking': 'fa-utensils',
    'Electrical': 'fa-bolt',
    'First Aid': 'fa-kit-medical',
    'Fishing': 'fa-fish',
    'Foraging': 'fa-leaf',
    'Glassmaking': 'fa-wine-bottle',
    'Knapping': 'fa-gem',
    'Long Blade': 'fa-person-rifle',
    'Maintenance': 'fa-screwdriver-wrench',
    'Masonry': 'fa-cubes',
    'Mechanics': 'fa-car',
    'Metalworking': 'fa-industry',
    'Pottery': 'fa-mug-hot',
    'Reloading': 'fa-bomb',
    'Tailoring': 'fa-scissors',
    'Tracking': 'fa-paw',
    'Trapping': 'fa-spider',
    'Welding': 'fa-fire',
};

const TRANSLATIONS = {
    en: {
        title: "PZ Book Tracker",
        searchPlaceholder: "Search books...",
        defaultProfile: "Default Profile",
        createNewProfile: "Create new profile",
        renameProfile: "Rename profile",
        deleteProfile: "Delete profile",
        exportBookmarks: "Export bookmarks",
        importBookmarks: "Import bookmarks",
        markAll: "Mark All",
        unmarkAll: "Unmark All",
        markAllBooks: "Mark All Books",
        unmarkAllBooks: "Unmark All Books",
        markAllCategory: "Mark all books in this category",
        unmarkAllCategory: "Unmark all books in this category",
        enterNewName: "Enter new profile name:",
        profileName: "Profile name",
        cancel: "Cancel",
        confirm: "Confirm",
        defaultProfileRenameError: "The default profile cannot be renamed.",
        defaultProfileDeleteError: "The default profile cannot be deleted.",
        deleteProfileConfirm: "Are you sure you want to delete this profile?",
        markAllConfirm: "Are you sure you want to mark ALL books in ALL categories?",
        unmarkAllConfirm: "Are you sure you want to unmark ALL books in ALL categories?",
        markCategoryConfirm: "Are you sure you want to mark all books in this category?",
        unmarkCategoryConfirm: "Are you sure you want to unmark all books in this category?",
        importSuccess: "Import completed! {count} books were updated.",
        importError: "Error importing file. Please check if the file is valid.",
        of: "of",
        collected: "collected books",
        createdBy: "Created by",
        language: "Language"
    },
    pt: {
        title: "Rastreador de Livros PZ",
        searchPlaceholder: "Pesquisar livros...",
        defaultProfile: "Perfil Padrão",
        createNewProfile: "Criar novo perfil",
        renameProfile: "Renomear perfil",
        deleteProfile: "Excluir perfil",
        exportBookmarks: "Exportar marcações",
        importBookmarks: "Importar marcações",
        markAll: "Marcar Todos",
        unmarkAll: "Desmarcar Todos",
        markAllBooks: "Marcar Todos os Livros",
        unmarkAllBooks: "Desmarcar Todos os Livros",
        markAllCategory: "Marcar todos os livros desta categoria",
        unmarkAllCategory: "Desmarcar todos os livros desta categoria",
        enterNewName: "Digite o novo nome do perfil:",
        profileName: "Nome do perfil",
        cancel: "Cancelar",
        confirm: "Confirmar",
        defaultProfileRenameError: "O perfil padrão não pode ser renomeado.",
        defaultProfileDeleteError: "O perfil padrão não pode ser excluído.",
        deleteProfileConfirm: "Tem certeza que deseja excluir este perfil?",
        markAllConfirm: "Tem certeza que deseja marcar TODOS os livros em TODAS as categorias?",
        unmarkAllConfirm: "Tem certeza que deseja desmarcar TODOS os livros em TODAS as categorias?",
        markCategoryConfirm: "Tem certeza que deseja marcar todos os livros desta categoria?",
        unmarkCategoryConfirm: "Tem certeza que deseja desmarcar todos os livros desta categoria?",
        importSuccess: "Importação concluída! {count} livros foram atualizados.",
        importError: "Erro ao importar arquivo. Por favor, verifique se o arquivo é válido.",
        of: "de",
        collected: "livros coletados",
        createdBy: "Criado por",
        language: "Idioma"
    },
    es: {
        title: "Rastreador de Libros PZ",
        searchPlaceholder: "Buscar libros...",
        defaultProfile: "Perfil Predeterminado",
        createNewProfile: "Crear nuevo perfil",
        renameProfile: "Renombrar perfil",
        deleteProfile: "Eliminar perfil",
        exportBookmarks: "Exportar marcadores",
        importBookmarks: "Importar marcadores",
        markAll: "Marcar Todos",
        unmarkAll: "Desmarcar Todos",
        markAllBooks: "Marcar Todos los Libros",
        unmarkAllBooks: "Desmarcar Todos los Libros",
        markAllCategory: "Marcar todos los libros en esta categoría",
        unmarkAllCategory: "Desmarcar todos los libros en esta categoría",
        enterNewName: "Ingrese el nuevo nombre del perfil:",
        profileName: "Nombre del perfil",
        cancel: "Cancelar",
        confirm: "Confirmar",
        defaultProfileRenameError: "El perfil predeterminado no puede ser renombrado.",
        defaultProfileDeleteError: "El perfil predeterminado no puede ser eliminado.",
        deleteProfileConfirm: "¿Está seguro de que desea eliminar este perfil?",
        markAllConfirm: "¿Está seguro de que desea marcar TODOS los libros en TODAS las categorías?",
        unmarkAllConfirm: "¿Está seguro de que desea desmarcar TODOS los libros en TODAS las categorías?",
        markCategoryConfirm: "¿Está seguro de que desea marcar todos los libros en esta categoría?",
        unmarkCategoryConfirm: "¿Está seguro de que desea desmarcar todos los libros en esta categoría?",
        importSuccess: "¡Importación completada! {count} libros fueron actualizados.",
        importError: "Error al importar archivo. Por favor, verifique si el archivo es válido.",
        of: "de",
        collected: "libros recolectados",
        createdBy: "Creado por",
        language: "Idioma"
    },
    fr: {
        title: "Suivi de Livres PZ",
        searchPlaceholder: "Rechercher des livres...",
        defaultProfile: "Profil par Défaut",
        createNewProfile: "Créer un nouveau profil",
        renameProfile: "Renommer le profil",
        deleteProfile: "Supprimer le profil",
        exportBookmarks: "Exporter les marque-pages",
        importBookmarks: "Importer les marque-pages",
        markAll: "Tout Marquer",
        unmarkAll: "Tout Démarrer",
        markAllBooks: "Marquer Tous les Livres",
        unmarkAllBooks: "Démarrer Tous les Livres",
        markAllCategory: "Marquer tous les livres de cette catégorie",
        unmarkAllCategory: "Démarrer tous les livres de cette catégorie",
        enterNewName: "Entrez le nouveau nom du profil :",
        profileName: "Nom du profil",
        cancel: "Annuler",
        confirm: "Confirmer",
        defaultProfileRenameError: "Le profil par défaut ne peut pas être renommé.",
        defaultProfileDeleteError: "Le profil par défaut ne peut pas être supprimé.",
        deleteProfileConfirm: "Êtes-vous sûr de vouloir supprimer ce profil ?",
        markAllConfirm: "Êtes-vous sûr de vouloir marquer TOUS les livres dans TOUTES les catégories ?",
        unmarkAllConfirm: "Êtes-vous sûr de vouloir démarrer TOUS les livres dans TOUTES les catégories ?",
        markCategoryConfirm: "Êtes-vous sûr de vouloir marquer tous les livres de cette catégorie ?",
        unmarkCategoryConfirm: "Êtes-vous sûr de vouloir démarrer tous les livres de cette catégorie ?",
        importSuccess: "Importation terminée ! {count} livres ont été mis à jour.",
        importError: "Erreur lors de l'importation du fichier. Veuillez vérifier si le fichier est valide.",
        of: "sur",
        collected: "livres collectés",
        createdBy: "Créé par",
        language: "Langue"
    },
    it: {
        title: "Tracciatore Libri PZ",
        searchPlaceholder: "Cerca libri...",
        defaultProfile: "Profilo Predefinito",
        createNewProfile: "Crea nuovo profilo",
        renameProfile: "Rinomina profilo",
        deleteProfile: "Elimina profilo",
        exportBookmarks: "Esporta segnalibri",
        importBookmarks: "Importa segnalibri",
        markAll: "Segna Tutti",
        unmarkAll: "Deseleziona Tutti",
        markAllBooks: "Segna Tutti i Libri",
        unmarkAllBooks: "Deseleziona Tutti i Libri",
        markAllCategory: "Segna tutti i libri in questa categoria",
        unmarkAllCategory: "Deseleziona tutti i libri in questa categoria",
        enterNewName: "Inserisci il nuovo nome del profilo:",
        profileName: "Nome del profilo",
        cancel: "Annulla",
        confirm: "Conferma",
        defaultProfileRenameError: "Il profilo predefinito non può essere rinominato.",
        defaultProfileDeleteError: "Il profilo predefinito non può essere eliminato.",
        deleteProfileConfirm: "Sei sicuro di voler eliminare questo profilo?",
        markAllConfirm: "Sei sicuro di voler segnare TUTTI i libri in TUTTE le categorie?",
        unmarkAllConfirm: "Sei sicuro di voler deselezionare TUTTI i libri in TUTTE le categorie?",
        markCategoryConfirm: "Sei sicuro di voler segnare tutti i libri in questa categoria?",
        unmarkCategoryConfirm: "Sei sicuro di voler deselezionare tutti i libri in questa categoria?",
        importSuccess: "Importazione completata! {count} libri sono stati aggiornati.",
        importError: "Errore durante l'importazione del file. Verifica che il file sia valido.",
        of: "di",
        collected: "libri raccolti",
        createdBy: "Creato da",
        language: "Lingua"
    },
    ru: {
        title: "Трекер Книг PZ",
        searchPlaceholder: "Поиск книг...",
        defaultProfile: "Профиль по умолчанию",
        createNewProfile: "Создать новый профиль",
        renameProfile: "Переименовать профиль",
        deleteProfile: "Удалить профиль",
        exportBookmarks: "Экспорт закладок",
        importBookmarks: "Импорт закладок",
        markAll: "Отметить Все",
        unmarkAll: "Снять Отметки",
        markAllBooks: "Отметить Все Книги",
        unmarkAllBooks: "Снять Отметки со Всех Книг",
        markAllCategory: "Отметить все книги в этой категории",
        unmarkAllCategory: "Снять отметки со всех книг в этой категории",
        enterNewName: "Введите новое имя профиля:",
        profileName: "Имя профиля",
        cancel: "Отмена",
        confirm: "Подтвердить",
        defaultProfileRenameError: "Профиль по умолчанию нельзя переименовать.",
        defaultProfileDeleteError: "Профиль по умолчанию нельзя удалить.",
        deleteProfileConfirm: "Вы уверены, что хотите удалить этот профиль?",
        markAllConfirm: "Вы уверены, что хотите отметить ВСЕ книги во ВСЕХ категориях?",
        unmarkAllConfirm: "Вы уверены, что хотите снять отметки со ВСЕХ книг во ВСЕХ категориях?",
        markCategoryConfirm: "Вы уверены, что хотите отметить все книги в этой категории?",
        unmarkCategoryConfirm: "Вы уверены, что хотите снять отметки со всех книг в этой категории?",
        importSuccess: "Импорт завершен! {count} книг было обновлено.",
        importError: "Ошибка импорта файла. Пожалуйста, проверьте, что файл действителен.",
        of: "из",
        collected: "собранных книг",
        createdBy: "Создано",
        language: "Язык"
    },
    zh: {
        title: "PZ 书籍追踪器",
        searchPlaceholder: "搜索书籍...",
        defaultProfile: "默认档案",
        createNewProfile: "创建新档案",
        renameProfile: "重命名档案",
        deleteProfile: "删除档案",
        exportBookmarks: "导出书签",
        importBookmarks: "导入书签",
        markAll: "全选",
        unmarkAll: "取消全选",
        markAllBooks: "标记所有书籍",
        unmarkAllBooks: "取消所有书籍标记",
        markAllCategory: "标记此类别中的所有书籍",
        unmarkAllCategory: "取消此类别中所有书籍的标记",
        enterNewName: "输入新的档案名称：",
        profileName: "档案名称",
        cancel: "取消",
        confirm: "确认",
        defaultProfileRenameError: "默认档案无法重命名。",
        defaultProfileDeleteError: "默认档案无法删除。",
        deleteProfileConfirm: "确定要删除此档案吗？",
        markAllConfirm: "确定要标记所有类别中的所有书籍吗？",
        unmarkAllConfirm: "确定要取消所有类别中所有书籍的标记吗？",
        markCategoryConfirm: "确定要标记此类别中的所有书籍吗？",
        unmarkCategoryConfirm: "确定要取消此类别中所有书籍的标记吗？",
        importSuccess: "导入完成！已更新 {count} 本书籍。",
        importError: "导入文件时出错。请检查文件是否有效。",
        of: "共",
        collected: "本已收集书籍",
        createdBy: "创建者",
        language: "语言"
    }
};

const STYLE_KEY = 'book-tracker-style';

let currentLanguage = localStorage.getItem('book-tracker-language') || 'en';

function t(key, params = {}) {
    let text = TRANSLATIONS[currentLanguage][key] || TRANSLATIONS.en[key];
    if (params) {
        Object.keys(params).forEach(param => {
            text = text.replace(`{${param}}`, params[param]);
        });
    }
    return text;
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('book-tracker-language', lang);
    updateUILanguage();
}

function updateUILanguage() {
    // Update title
    document.title = t('title');
    document.querySelector('h1').textContent = t('title');

    // Update search placeholder
    document.getElementById('search-input').placeholder = t('searchPlaceholder');

    // Update profile controls
    document.getElementById('new-profile-button').title = t('createNewProfile');
    document.getElementById('rename-profile-button').title = t('renameProfile');
    document.getElementById('delete-profile-button').title = t('deleteProfile');

    // Update import/export buttons
    const exportButton = document.getElementById('export-button');
    if (exportButton) {
        exportButton.title = t('exportBookmarks');
        exportButton.innerHTML = `<i class="fa-solid fa-file-export"></i> ${t('exportBookmarks')}`;
    }

    const importButton = document.querySelector('.import-button');
    if (importButton) {
        importButton.title = t('importBookmarks');
        importButton.innerHTML = `<i class="fa-solid fa-file-import"></i> ${t('importBookmarks')}`;
    }

    // Update footer
    const footerSpan = document.querySelector('.footer-content span');
    if (footerSpan) {
        footerSpan.textContent = t('createdBy');
    }

    // Update language selector
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.value = currentLanguage;
    }

    // Re-render books to update all text
    renderBooks();
}

function splitTitleAndDescription(book) {
    // Exemplo: "Carpentry I: A Guide to Nailing" => title: "Carpentry I", desc: "A Guide to Nailing"
    const match = book.title.match(/^(.*?\b[IVX]+):?\s*(.*)$/i);
    if (match) {
        return {
            main: match[1].trim(),
            desc: match[2].trim()
        };
    } else {
        return {
            main: book.title,
            desc: ''
        };
    }
}

const books = [
    {"title": "Agriculture I: Better Gardening", "id": "bookfarming1", "aquired": false, "skill": "Agriculture"},
    {"title": "Agriculture II: Growing Food at Home", "id": "bookfarming2", "aquired": false, "skill": "Agriculture"},
    {"title": "Agriculture III: Liam Keating's Subsistence Farming", "id": "bookfarming3", "aquired": false, "skill": "Agriculture"},
    {"title": "Agriculture IV: The Science of Crop Genetics and Yields", "id": "bookfarming4", "aquired": false, "skill": "Agriculture"},
    {"title": "Agriculture V: USDA Guide to Agricultural Output Maximization", "id": "bookfarming5", "aquired": false, "skill": "Agriculture"},
    {"title": "Aiming I: Better Aiming", "id": "bookaiming1", "aquired": false, "skill": "Aiming"},
    {"title": "Aiming II: Drawing and Shooting", "id": "bookaiming2", "aquired": false, "skill": "Aiming"},
    {"title": "Aiming III: Leading Moving Targets", "id": "bookaiming3", "aquired": false, "skill": "Aiming"},
    {"title": "Aiming IV: Long Range Sniping Tactics", "id": "bookaiming4", "aquired": false, "skill": "Aiming"},
    {"title": "Aiming V: Secrets From the World's Best Snipers", "id": "bookaiming5", "aquired": false, "skill": "Aiming"},
    {"title": "Animal Care I: A Tale of St. Francis", "id": "bookhusbandry1", "aquired": false, "skill": "Animal Care"},
    {"title": "Animal Care II: Animal Welfare Basics", "id": "bookhusbandry2", "aquired": false, "skill": "Animal Care"},
    {"title": "Animal Care III: How Animals Think: A Helpful Guide", "id": "bookhusbandry3", "aquired": false, "skill": "Animal Care"},
    {"title": "Animal Care IV: The Wants and Needs of Diverse Fauna", "id": "bookhusbandry4", "aquired": false, "skill": "Animal Care"},
    {"title": "Animal Care V: Wilds Tamed: An In-Depth Comparative", "id": "bookhusbandry5", "aquired": false, "skill": "Animal Care"},
    {"title": "Butchering I: Butchering Basics", "id": "bookbutchering1", "aquired": false, "skill": "Butchering"},
    {"title": "Butchering II: From Chuck to Shank", "id": "bookbutchering2", "aquired": false, "skill": "Butchering"},
    {"title": "Butchering III: Hunter's Guide to Butchering", "id": "bookbutchering3", "aquired": false, "skill": "Butchering"},
    {"title": "Butchering IV: Master Butcher's Complete Guide", "id": "bookbutchering4", "aquired": false, "skill": "Butchering"},
    {"title": "Butchering V: The Ergonomics of Tools in Meat Cutting Operations", "id": "bookbutchering5", "aquired": false, "skill": "Butchering"},
    {"title": "Carpentry I: A Guide to Nailing", "id": "bookcarpentry1", "aquired": false, "skill": "Carpentry"},
    {"title": "Carpentry II: Carpentry, Woodcraft Style", "id": "bookcarpentry2", "aquired": false, "skill": "Carpentry"},
    {"title": "Carpentry III: Hand Crafted Shelving and Storage", "id": "bookcarpentry3", "aquired": false, "skill": "Carpentry"},
    {"title": "Carpentry IV: Making Your Own Cabin From Scratch", "id": "bookcarpentry4", "aquired": false, "skill": "Carpentry"},
    {"title": "Carpentry V: Site Joinery and Architectural Carpentry", "id": "bookcarpentry5", "aquired": false, "skill": "Carpentry"},
    {"title": "Carving I: Beginners Carving", "id": "bookcarving1", "aquired": false, "skill": "Carving"},
    {"title": "Carving II: Cool Woodshaping Projects!", "id": "bookcarving2", "aquired": false, "skill": "Carving"},
    {"title": "Carving III: Grinling Gibbons: His Life and Works", "id": "bookcarving3", "aquired": false, "skill": "Carving"},
    {"title": "Carving IV: Medieval Wood and Bone Carving Techniques", "id": "bookcarving4", "aquired": false, "skill": "Carving"},
    {"title": "Carving V: The Art and Process of Natural Material Carving", "id": "bookcarving5", "aquired": false, "skill": "Carving"},
    {"title": "Cooking I: Better Burger Flipping", "id": "bookcooking1", "aquired": false, "skill": "Cooking"},
    {"title": "Cooking II: Essential Home Cooking Guide", "id": "bookcooking2", "aquired": false, "skill": "Cooking"},
    {"title": "Cooking III: Flavorful Cuisine - 1993 Edition", "id": "bookcooking3", "aquired": false, "skill": "Cooking"},
    {"title": "Cooking IV: Professional Tips from a Master Chef", "id": "bookcooking4", "aquired": false, "skill": "Cooking"},
    {"title": "Cooking V: Ruban Vert Gourmet - Complete Cooking Techniques", "id": "bookcooking5", "aquired": false, "skill": "Cooking"},
    {"title": "Electrical I: Basic Electronics", "id": "bookelectrician1", "aquired": false, "skill": "Electrical"},
    {"title": "Electrical II: Kentucky AV Guide '93", "id": "bookelectrician2", "aquired": false, "skill": "Electrical"},
    {"title": "Electrical III: Practical Wiring Guide", "id": "bookelectrician3", "aquired": false, "skill": "Electrical"},
    {"title": "Electrical IV: Telecommunications in the 20th Century", "id": "bookelectrician4", "aquired": false, "skill": "Electrical"},
    {"title": "Electrical V: Understanding Integrated Controls for Electronic Systems", "id": "bookelectrician5", "aquired": false, "skill": "Electrical"},
    {"title": "First Aid I: A Scouts Injury Guide", "id": "bookfirstaid1", "aquired": false, "skill": "First Aid"},
    {"title": "First Aid II: Bandaging and Suturing", "id": "bookfirstaid2", "aquired": false, "skill": "First Aid"},
    {"title": "First Aid III: Emergency Paramedics Manual", "id": "bookfirstaid3", "aquired": false, "skill": "First Aid"},
    {"title": "First Aid IV: Gray's Anatomy of the Human Body", "id": "bookfirstaid4", "aquired": false, "skill": "First Aid"},
    {"title": "First Aid V: Surgical Techniques of the Operating Room", "id": "bookfirstaid5", "aquired": false, "skill": "First Aid"},
    {"title": "Fishing I: Dean's Good Fishing Guide", "id": "bookfishing1", "aquired": false, "skill": "Fishing"},
    {"title": "Fishing II: Fly Fishing, with JR Hartley", "id": "bookfishing2", "aquired": false, "skill": "Fishing"},
    {"title": "Fishing III: Fresh and Saltwater Fishing", "id": "bookfishing3", "aquired": false, "skill": "Fishing"},
    {"title": "Fishing IV: Latest Rod and Net Techniques", "id": "bookfishing4", "aquired": false, "skill": "Fishing"},
    {"title": "Fishing V: The Authoritative Kentucky Fishing Guide", "id": "bookfishing5", "aquired": false, "skill": "Fishing"},
    {"title": "Foraging I: A Feast in the Forest", "id": "bookforaging1", "aquired": false, "skill": "Foraging"},
    {"title": "Foraging II: Dean's Guide to Sticks & Stones", "id": "bookforaging2", "aquired": false, "skill": "Foraging"},
    {"title": "Foraging III: Finding The Treasure in the Trash", "id": "bookforaging3", "aquired": false, "skill": "Foraging"},
    {"title": "Foraging IV: Survival Foraging: How Nature Can Save Your Life", "id": "bookforaging4", "aquired": false, "skill": "Foraging"},
    {"title": "Foraging V: US Park Service Complete Nature Census - Kentucky", "id": "bookforaging5", "aquired": false, "skill": "Foraging"},
    {"title": "Glassmaking I: Glass: A History", "id": "bookglassmaking1", "aquired": false, "skill": "Glassmaking"},
    {"title": "Glassmaking II: From Sand to Glass: A Journey", "id": "bookglassmaking2", "aquired": false, "skill": "Glassmaking"},
    {"title": "Glassmaking III: Laboratory Manual of Glassblowing", "id": "bookglassmaking3", "aquired": false, "skill": "Glassmaking"},
    {"title": "Glassmaking IV: Secrets of the Carlow Crystal Makers", "id": "bookglassmaking4", "aquired": false, "skill": "Glassmaking"},
    {"title": "Glassmaking V: Venetian Glass: An Electron Microprobe Analysis", "id": "bookglassmaking5", "aquired": false, "skill": "Glassmaking"},
    {"title": "Knapping I: Flint Knapping 101", "id": "bookflintknapping1", "aquired": false, "skill": "Knapping"},
    {"title": "Knapping II: Guide to Kentucky Geology", "id": "bookflintknapping2", "aquired": false, "skill": "Knapping"},
    {"title": "Knapping III: Lithic Technology Manual 1993", "id": "bookflintknapping3", "aquired": false, "skill": "Knapping"},
    {"title": "Knapping IV: Schmidt Rock Hardness Testing Techniques", "id": "bookflintknapping4", "aquired": false, "skill": "Knapping"},
    {"title": "Knapping V: Technological Morphometrics of Clovis Artifacts", "id": "bookflintknapping5", "aquired": false, "skill": "Knapping"},
    {"title": "Long Blade I: Cool Swords!", "id": "booklongblade1", "aquired": false, "skill": "Long Blade"},
    {"title": "Long Blade II: Fencing: A History", "id": "booklongblade2", "aquired": false, "skill": "Long Blade"},
    {"title": "Long Blade III: Old Sword-Play by Alfred Hutton", "id": "booklongblade3", "aquired": false, "skill": "Long Blade"},
    {"title": "Long Blade IV: The Zettels of Johannes Liechtenauer", "id": "booklongblade4", "aquired": false, "skill": "Long Blade"},
    {"title": "Long Blade V: Wear Analysis of Selected Medieval Swords", "id": "booklongblade5", "aquired": false, "skill": "Long Blade"},
    {"title": "Maintenance I: Basic Repairs", "id": "bookmaintenance1", "aquired": false, "skill": "Maintenance"},
    {"title": "Maintenance II: Better Tools, Made Easy", "id": "bookmaintenance2", "aquired": false, "skill": "Maintenance"},
    {"title": "Maintenance III: Home Guide to Tool Repairs", "id": "bookmaintenance3", "aquired": false, "skill": "Maintenance"},
    {"title": "Maintenance IV: Maintaining High Grade Tools", "id": "bookmaintenance4", "aquired": false, "skill": "Maintenance"},
    {"title": "Maintenance V: Understanding Biomechanics of Tool Use", "id": "bookmaintenance5", "aquired": false, "skill": "Maintenance"},
    {"title": "Masonry I: A Bricklayer's Life", "id": "bookmasonry1", "aquired": false, "skill": "Masonry"},
    {"title": "Masonry II: Flooring: Do It Yourself", "id": "bookmasonry2", "aquired": false, "skill": "Masonry"},
    {"title": "Masonry III: Dibnah's Guide to Bricks", "id": "bookmasonry3", "aquired": false, "skill": "Masonry"},
    {"title": "Masonry IV: Secrets of a Professional Mason", "id": "bookmasonry4", "aquired": false, "skill": "Masonry"},
    {"title": "Masonry V: Statistical Analysis of Historic Masonry Constructions", "id": "bookmasonry5", "aquired": false, "skill": "Masonry"},
    {"title": "Mechanics I: Carzone's Repair Guide", "id": "bookmechanic1", "aquired": false, "skill": "Mechanics"},
    {"title": "Mechanics II: How Vehicle Engines Work", "id": "bookmechanic2", "aquired": false, "skill": "Mechanics"},
    {"title": "Mechanics III: Laine's Repair Manual '93", "id": "bookmechanic3", "aquired": false, "skill": "Mechanics"},
    {"title": "Mechanics IV: Long Term Vehicle Maintenance", "id": "bookmechanic4", "aquired": false, "skill": "Mechanics"},
    {"title": "Mechanics V: Mastering Automotive Fault Diagnosis Techniques", "id": "bookmechanic5", "aquired": false, "skill": "Mechanics"},
    {"title": "Metalworking I: Elementary Forge Practice", "id": "bookblacksmith1", "aquired": false, "skill": "Metalworking"},
    {"title": "Metalworking II: General Purpose Blacksmithing", "id": "bookblacksmith2", "aquired": false, "skill": "Metalworking"},
    {"title": "Metalworking III: Old West Smiths and Their Secrets", "id": "bookblacksmith3", "aquired": false, "skill": "Metalworking"},
    {"title": "Metalworking IV: Really Hard Steel Co. Workers Handbook", "id": "bookblacksmith4", "aquired": false, "skill": "Metalworking"},
    {"title": "Metalworking V: The Complete Encyclopedia of Metallurgy", "id": "bookblacksmith5", "aquired": false, "skill": "Metalworking"},
    {"title": "Pottery I: Ancient Pottery", "id": "bookpottery1", "aquired": false, "skill": "Pottery"},
    {"title": "Pottery II: Build Your Own Kiln", "id": "bookpottery2", "aquired": false, "skill": "Pottery"},
    {"title": "Pottery III: Glazing Ceramics at Home", "id": "bookpottery3", "aquired": false, "skill": "Pottery"},
    {"title": "Pottery IV: Ming Chinese Masterworks: A Guide", "id": "bookpottery4", "aquired": false, "skill": "Pottery"},
    {"title": "Pottery V: Pyrometamorphic Process of Ceramic Materials", "id": "bookpottery5", "aquired": false, "skill": "Pottery"},
    {"title": "Reloading I: Basic Reloading", "id": "bookreloading1", "aquired": false, "skill": "Reloading"},
    {"title": "Reloading II: Dead Man's Click", "id": "bookreloading2", "aquired": false, "skill": "Reloading"},
    {"title": "Reloading III: Jungle Style Reloading", "id": "bookreloading3", "aquired": false, "skill": "Reloading"},
    {"title": "Reloading IV: Strippers, Speedloaders, and Bolt Action", "id": "bookreloading4", "aquired": false, "skill": "Reloading"},
    {"title": "Reloading V: The Ultimate Encyclopedia of Reloading Techniques", "id": "bookreloading5", "aquired": false, "skill": "Reloading"},
    {"title": "Tailoring I: Basic Clothing Repair", "id": "booktailoring1", "aquired": false, "skill": "Tailoring"},
    {"title": "Tailoring II: From Rags to Royalty: A Sewing Guide", "id": "booktailoring2", "aquired": false, "skill": "Tailoring"},
    {"title": "Tailoring III: Haute Couture Tailoring Methods", "id": "booktailoring3", "aquired": false, "skill": "Tailoring"},
    {"title": "Tailoring IV: Modern Patterns from the Catwalks of Paris", "id": "booktailoring4", "aquired": false, "skill": "Tailoring"},
    {"title": "Tailoring V: Textile Production and Manufacturing Techniques", "id": "booktailoring5", "aquired": false, "skill": "Tailoring"},
    {"title": "Tracking I: Animal Pawprints", "id": "booktracking1", "aquired": false, "skill": "Tracking"},
    {"title": "Tracking II: Hunting with Hemingway", "id": "booktracking2", "aquired": false, "skill": "Tracking"},
    {"title": "Tracking III: Long Range Animal Tracking", "id": "booktracking3", "aquired": false, "skill": "Tracking"},
    {"title": "Tracking IV: The Smell of Ivory: An African Adventure", "id": "booktracking4", "aquired": false, "skill": "Tracking"},
    {"title": "Tracking V: Understanding Animal Behavior Through Spoor Placement", "id": "booktracking5", "aquired": false, "skill": "Tracking"},
    {"title": "Trapping I: Basic Pest Control", "id": "booktrapping1", "aquired": false, "skill": "Trapping"},
    {"title": "Trapping II: Better Trapping, with Dean", "id": "booktrapping2", "aquired": false, "skill": "Trapping"},
    {"title": "Trapping III: Park Rangers Wildlife Handbook '93", "id": "booktrapping3", "aquired": false, "skill": "Trapping"},
    {"title": "Trapping IV: Research on Rodents and Mammals of Kentucky", "id": "booktrapping4", "aquired": false, "skill": "Trapping"},
    {"title": "Trapping V: The Encyclopedia of Applied Animal Psychology", "id": "booktrapping5", "aquired": false, "skill": "Trapping"},
    {"title": "Welding I: Basics of Welding", "id": "bookmetalwelding1", "aquired": false, "skill": "Welding"},
    {"title": "Welding II: Building with Metal", "id": "bookmetalwelding2", "aquired": false, "skill": "Welding"},
    {"title": "Welding III: Machining Metal: The Mass Genfac Guide", "id": "bookmetalwelding3", "aquired": false, "skill": "Welding"},
    {"title": "Welding IV: Ore to Sheets: A Complete Metalworking Manual", "id": "bookmetalwelding4", "aquired": false, "skill": "Welding"},
    {"title": "Welding V: Technological Fundamentals of Metal Fabrication", "id": "bookmetalwelding5", "aquired": false, "skill": "Welding"}
];

function loadProfiles() {
    const savedProfiles = localStorage.getItem(PROFILES_KEY);
    const profiles = savedProfiles ? JSON.parse(savedProfiles) : { default: { name: 'Default Profile' } };
    const currentProfile = localStorage.getItem(CURRENT_PROFILE_KEY) || 'default';
    
    const select = document.getElementById('profile-select');
    select.innerHTML = '';
    
    Object.entries(profiles).forEach(([id, profile]) => {
        const option = document.createElement('option');
        option.value = id;
        option.textContent = profile.name;
        if (id === currentProfile) {
            option.selected = true;
        }
        select.appendChild(option);
    });
    
    return { profiles, currentProfile };
}

function saveProfiles(profiles) {
    localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
}

function createNewProfile() {
    const { profiles } = loadProfiles();
    const profileId = 'profile_' + Date.now();
    const profileName = `Profile ${Object.keys(profiles).length + 1}`;
    
    profiles[profileId] = { name: profileName };
    saveProfiles(profiles);
    
    // Reset book states for new profile
    books.forEach(book => {
        book.aquired = false;
    });
    
    localStorage.setItem(CURRENT_PROFILE_KEY, profileId);
    loadProfiles();
    saveAquiredToStorage();
    updateProgressBar();
    renderBooks();
}

function showRenameModal(currentName, onConfirm) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-message">${t('enterNewName')}</div>
            <input type="text" class="modal-input" value="${currentName}" placeholder="${t('profileName')}">
            <div class="modal-buttons">
                <button class="modal-button cancel">${t('cancel')}</button>
                <button class="modal-button confirm">${t('confirm')}</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    const input = modal.querySelector('.modal-input');
    input.focus();
    input.select();

    const handleConfirm = () => {
        const newName = input.value.trim();
        if (newName) {
            modal.remove();
            document.body.style.overflow = '';
            onConfirm(newName);
        }
    };

    const handleCancel = () => {
        modal.remove();
        document.body.style.overflow = '';
    };

    modal.querySelector('.confirm').addEventListener('click', handleConfirm);
    modal.querySelector('.cancel').addEventListener('click', handleCancel);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) handleCancel();
    });

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleConfirm();
    });
}

function renameProfile() {
    const { profiles, currentProfile } = loadProfiles();
    if (currentProfile === 'default') {
        showModal(t('defaultProfileRenameError'), () => {});
        return;
    }
    
    showRenameModal(profiles[currentProfile].name, (newName) => {
        profiles[currentProfile].name = newName;
        saveProfiles(profiles);
        loadProfiles();
    });
}

function deleteProfile() {
    const { profiles, currentProfile } = loadProfiles();
    if (currentProfile === 'default') {
        showModal(t('defaultProfileDeleteError'), () => {});
        return;
    }
    
    showModal(t('deleteProfileConfirm'), () => {
        delete profiles[currentProfile];
        saveProfiles(profiles);
        localStorage.setItem(CURRENT_PROFILE_KEY, 'default');
        loadProfiles();
        loadAquiredFromStorage();
        updateProgressBar();
        renderBooks();
    });
}

function changeProfile(event) {
    const profileId = event.target.value;
    localStorage.setItem(CURRENT_PROFILE_KEY, profileId);
    loadAquiredFromStorage();
    updateProgressBar();
    renderBooks();
}

function loadAquiredFromStorage() {
    const { currentProfile } = loadProfiles();
    const storageKey = `${STORAGE_KEY}_${currentProfile}`;
    const saved = localStorage.getItem(storageKey);
    if (!saved) return;
    try {
        const state = JSON.parse(saved);
        books.forEach(book => {
            if (state[book.id] !== undefined) {
                book.aquired = state[book.id];
            }
        });
    } catch {}
}

function saveAquiredToStorage() {
    const { currentProfile } = loadProfiles();
    const storageKey = `${STORAGE_KEY}_${currentProfile}`;
    const state = {};
    books.forEach(book => {
        state[book.id] = book.aquired;
    });
    localStorage.setItem(storageKey, JSON.stringify(state));
}

function groupByCategory(books) {
    const categories = {};
    books.forEach(book => {
        if (!categories[book.skill]) categories[book.skill] = [];
        categories[book.skill].push(book);
    });
    return categories;
}

function unmarkAllBooks() {
    showModal(t('unmarkAllConfirm'), () => {
        books.forEach(book => {
            book.aquired = false;
        });
        saveAquiredToStorage();
        updateProgressBar();
        renderBooks();
    });
}

function markAllBooks() {
    showModal(t('markAllConfirm'), () => {
        books.forEach(book => {
            book.aquired = true;
        });
        saveAquiredToStorage();
        updateProgressBar();
        renderBooks();
    });
}

function markCategoryBooks(categoryBooks) {
    showModal(t('markCategoryConfirm'), () => {
        categoryBooks.forEach(book => {
            book.aquired = true;
        });
        saveAquiredToStorage();
        updateProgressBar();
        renderBooks();
    });
}

function updateProgressBar() {
    const container = document.getElementById('progress-bar-container');
    const total = books.length;
    const collected = books.filter(b => b.aquired).length;
    const percent = Math.round((collected / total) * 100);
    container.innerHTML = `
        <div class="progress-bar-outer">
            <div class="progress-bar-inner" style="width: ${percent}%;"></div>
        </div>
        <div class="progress-bar-label">
            ${collected} ${t('of')} ${total} ${t('collected')} (${percent}%)
            <div class="global-buttons">
                <button class="global-mark-button" title="${t('markAllBooks')}">
                    <i class="fa-solid fa-check-double"></i> ${t('markAllBooks')}
                </button>
                <button class="global-unmark-button" title="${t('unmarkAllBooks')}">
                    <i class="fa-solid fa-eraser"></i> ${t('unmarkAllBooks')}
                </button>
                <button id="export-button" title="${t('exportBookmarks')}">
                    <i class="fa-solid fa-file-export"></i> ${t('exportBookmarks')}
                </button>
                <label for="import-input" class="import-button" title="${t('importBookmarks')}">
                    <i class="fa-solid fa-file-import"></i> ${t('importBookmarks')}
                </label>
                <input type="file" id="import-input" accept=".json" style="display: none;">
            </div>
        </div>
    `;
    
    container.querySelector('.global-mark-button').addEventListener('click', markAllBooks);
    container.querySelector('.global-unmark-button').addEventListener('click', unmarkAllBooks);
    container.querySelector('#export-button').addEventListener('click', exportBookmarks);
    container.querySelector('#import-input').addEventListener('change', importBookmarks);
}

function createCategoryProgressBar(categoryBooks) {
    const total = categoryBooks.length;
    const collected = categoryBooks.filter(b => b.aquired).length;
    const percent = Math.round((collected / total) * 100);
    const wrapper = document.createElement('div');
    wrapper.className = 'category-progress-bar-container';
    wrapper.innerHTML = `
        <div class="category-progress-bar-outer">
            <div class="category-progress-bar-inner" style="width: ${percent}%;"></div>
        </div>
        <div class="category-progress-bar-label">${collected} of ${total} (${percent}%)</div>
    `;
    return wrapper;
}

function createBookCard(book) {
    const card = document.createElement('div');
    card.className = 'book-card';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = book.aquired;
    checkbox.addEventListener('change', () => {
        book.aquired = checkbox.checked;
        saveAquiredToStorage();
        updateProgressBar();
        renderBooks();
    });
    const { main, desc } = splitTitleAndDescription(book);
    const bookIcon = document.createElement('i');
    bookIcon.className = 'fa-solid fa-book book-title-icon';
    bookIcon.setAttribute('aria-hidden', 'true');
    const title = document.createElement('span');
    title.textContent = ' ' + main;
    if (desc) {
        title.className = 'has-tooltip';
        title.setAttribute('data-tooltip', desc);
    }
    card.appendChild(checkbox);
    card.appendChild(bookIcon);
    card.appendChild(title);
    return card;
}

function showModal(message, onConfirm) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-message">${message}</div>
            <div class="modal-buttons">
                <button class="modal-button cancel">${t('cancel')}</button>
                <button class="modal-button confirm">${t('confirm')}</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';

    const handleConfirm = () => {
        modal.remove();
        document.body.style.overflow = '';
        onConfirm();
    };

    const handleCancel = () => {
        modal.remove();
        document.body.style.overflow = '';
    };

    modal.querySelector('.confirm').addEventListener('click', handleConfirm);
    modal.querySelector('.cancel').addEventListener('click', handleCancel);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) handleCancel();
    });
}

function unmarkCategoryBooks(categoryBooks) {
    showModal(t('unmarkCategoryConfirm'), () => {
        categoryBooks.forEach(book => {
            book.aquired = false;
        });
        saveAquiredToStorage();
        updateProgressBar();
        renderBooks();
    });
}

let searchTerm = '';

function filterBooks(books) {
    if (!searchTerm) return books;
    
    const searchLower = searchTerm.toLowerCase();
    return books.filter(book => {
        const title = book.title.toLowerCase();
        const skill = book.skill.toLowerCase();
        return title.includes(searchLower) || skill.includes(searchLower);
    });
}

function renderBooks() {
    loadAquiredFromStorage();
    updateProgressBar();
    const container = document.getElementById('book-list');
    container.innerHTML = '';
    const categories = groupByCategory(books);
    const columns = document.createElement('div');
    columns.className = 'columns';
    
    Object.keys(categories).forEach(category => {
        const filteredBooks = filterBooks(categories[category]);
        if (filteredBooks.length === 0) return;
        
        const col = document.createElement('div');
        col.className = 'category-column';
        const header = document.createElement('h2');
        const icon = document.createElement('i');
        icon.className = `fa-solid ${CATEGORY_ICONS[category] || 'fa-book'}`;
        icon.style.marginRight = '0.5em';
        header.appendChild(icon);
        header.appendChild(document.createTextNode(category));
        col.appendChild(header);
        col.appendChild(createCategoryProgressBar(filteredBooks));
        filteredBooks.forEach(book => {
            col.appendChild(createBookCard(book));
        });
        
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'category-buttons';
        
        const markButton = document.createElement('button');
        markButton.className = 'mark-button';
        markButton.innerHTML = `<i class="fa-solid fa-check-double"></i> ${t('markAll')}`;
        markButton.title = t('markAllCategory');
        markButton.addEventListener('click', () => markCategoryBooks(categories[category]));
        
        const unmarkButton = document.createElement('button');
        unmarkButton.className = 'unmark-button';
        unmarkButton.innerHTML = `<i class="fa-solid fa-eraser"></i> ${t('unmarkAll')}`;
        unmarkButton.title = t('unmarkAllCategory');
        unmarkButton.addEventListener('click', () => unmarkCategoryBooks(categories[category]));
        
        buttonContainer.appendChild(markButton);
        buttonContainer.appendChild(unmarkButton);
        col.appendChild(buttonContainer);
        
        columns.appendChild(col);
    });
    container.appendChild(columns);
}

function handleSearch(event) {
    searchTerm = event.target.value.trim();
    renderBooks();
}

function clearSearch() {
    const searchInput = document.getElementById('search-input');
    searchInput.value = '';
    searchTerm = '';
    renderBooks();
}

function exportBookmarks() {
    const state = {};
    books.forEach(book => {
        state[book.id] = book.aquired;
    });
    
    const dataStr = JSON.stringify(state, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'pz-book-tracker-' + new Date().toISOString().split('T')[0] + '.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

function importBookmarks(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const state = JSON.parse(e.target.result);
            let importedCount = 0;
            
            books.forEach(book => {
                if (state[book.id] !== undefined) {
                    book.aquired = state[book.id];
                    importedCount++;
                }
            });
            
            saveAquiredToStorage();
            updateProgressBar();
            renderBooks();
            
            event.target.value = '';
            
            showModal(t('importSuccess', { count: importedCount }), () => {});
        } catch (error) {
            showModal(t('importError'), () => {});
            console.error('Import error:', error);
        }
    };
    reader.readAsText(file);
}

window.onload = () => {
    loadProfiles();
    loadAquiredFromStorage();
    updateUILanguage();
    renderBooks();
    
    // Add event listeners for import/export
    document.getElementById('export-button').addEventListener('click', exportBookmarks);
    document.getElementById('import-input').addEventListener('change', importBookmarks);
    
    // Add event listeners for profile management
    document.getElementById('profile-select').addEventListener('change', changeProfile);
    document.getElementById('new-profile-button').addEventListener('click', createNewProfile);
    document.getElementById('rename-profile-button').addEventListener('click', renameProfile);
    document.getElementById('delete-profile-button').addEventListener('click', deleteProfile);
    
    // Add event listeners for search
    document.getElementById('search-input').addEventListener('input', handleSearch);
    document.getElementById('clear-search').addEventListener('click', clearSearch);
    
    // Add event listener for language selection
    document.getElementById('language-select').addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });

    
};
