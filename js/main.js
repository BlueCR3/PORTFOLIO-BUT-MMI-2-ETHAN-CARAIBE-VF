// Tableau contenant les projets avec leurs titres, descriptions et images associées
const projects = [
  {
    title: "Projet 1: Créer un post Instagram pour une marque de voiture",
    description: "Dans ce projet, il fallait créer un poste de voiture autour de la marque Aixam. Pour commencer, il fallait créer un fichier sur Photoshop avec les dimensions suivantes : 1080 pixels par 1350 pixels.Ensuite, il fallait changer la couleur de la voiture qui était rouge pour qu'elle devienne bleu en utilisant un masque de saturation . Après on devait créer un arrière plan afin de rajouter les infos suivantes :le modèle de la voiture, le slogan, le prix du véhicule et enfin le logo de la marque. Sachant qu'il fallait varier les typographies et bien respecter les espaces entre chaque élément pour créer un post agréable visuellement.",
    image: "images/post-voiture-1080x1350-cp.jpg",
    link:"https://www.canva.com/design/DAGm4Ma85Mw/UYUFDwJchmaSkditvLz2Dg/view?utm_content=DAGm4Ma85Mw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h86a8d4eb7a",
    category: "Exprimer"
  },
  {
    title: "Projet 2: Visuel de promotion pour un espace thermoludique ",
    description: "Dans ce projet, il faillait créer un visuel de promotion pour un espace thermoludique qui se nommme Vitalys. Il fallait donc créer l'identité visuelle en commençant par la crétion du logo.Ensuite, mon camarade a créé le flyer sur Canva en inscrutant des images dans des cadres circulaires. Pour les images ainsi que le background, il s'est inspiré de l'ancien espace thermoludique de Ravine Chaude qui se situait au Lamentin.Enfin, il a rajouté les informations suivantes : le nom de l'enseigne, le slogan et la date de réouverture. ",
    image: "images/Affiche-Vitalys-cp.jpg",
    link: "https://www.canva.com/design/DAGm4HNe9GY/zqqKKqi6Lo1yl_j5m7SSew/view?utm_content=DAGm4HNe9GY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb0d1f8e301",
    category: "Exprimer"
  },
  {
    title: "Projet 3: Création d'un logo unique, Dragonix le studio de jeu de combat Next Gen",
    description: "Dans ce projet, il fallait créer un logo . Donc pour se faire il fallait déjà donner les valeurs de la marque ensuite choisir une typographie pour donner une identité visuelle. Après, il fallait se l'approprier c'est-à-dire la déformer, rajouter des effets comme de la saturation, du dégradé, un contour ou autre pour la rendre unique. Enfin, on devait intégrer le logo sur divers mockups par exemples des produits dérivés et faire en sorte que le logo soit responsive donc qu'il soit adaptable à différents supports (site,papeterie,réseaux sociaux, télévision, documents officiels etc.). Bien sûr, Le logo doit être uniforme et équilibré pour garantir une identité visuelle cohérente, facilement reconnaissable et professionnelle. Un design équilibré assure une bonne lisibilité et une harmonie visuelle, quelle que soit sa taille ou son support, tout en offrant une polyvalence technique pour s’adapter à différents contextes (fonds clairs, sombres, monochromes). Cette uniformité préserve l’impact visuel et l’intégrité de la marque, renforçant sa fiabilité et sa capacité à marquer durablement l’esprit du public. ",
    image: "images/Plan-de-travail-9_3-cp.jpg",
    link: "https://www.canva.com/design/DAGcM9i2V-E/j12JE-KQPLoScWYfmk4MVg/view?utm_content=DAGcM9i2V-E&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3f354637ea",
    category: "Concevoir"
  },
  {
    title: "Projet 4: Réaliser un visionboard",
    description: "Pour ce travail , il fallait réaliser un collage ou une affiche représentant votre image de soi idéale via un vision board branding (soit par canva ou tout autre outil dédié ) en utilisant des mots , des affirmations , des lieux , des personnes qui vous inspirent par exemple.",
    image: "images/My-Vision-Board-cp 3.jpg",
    link: "https://www.canva.com/design/DAF1wsKcaUk/Af4gws3IdFzYdtLatbncwA/view?utm_content=DAF1wsKcaUk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h53ca4d089c",
    category: "Entreprendre"
  },
  {
    title: "Projet 5: SAE 1.05 : Produire un site web",
    description: "Dans ce troisième projet , l’objectif était de développer pour le web et les médias numériques . Pour commencer , il fallait constituer un groupe de 3 , trouver le nom d’une agence et choisir un sujet pour la création du site . Par exemple avec mon groupe , notre agence s’appelait  » Watermelon Agency » et le thème était sur la culture guadeloupéenne. Ensuite , il fallait faire une brève présentation de notre thématique . Puis constituer une « première maquette » ( une ébauche) et plus tard , une maquette animée qui a été réalisée par mes camarades à l’aide du logiciel « Figma » . On a également fais une répartition des tâches : une personne pour le design des pages , un autre pour la programmation en HTML et CSS et moi qui faisait la recherches des informations. Notre page web est constitué de 4 pages : une page d’accueil et les trois autres traitent sur un sujet de la culture guadeloupéenne ( Cuisine , Danses , Arts). De mon côté , je me suis renseigné sur chaque sujet en faisant des recherches sur internet et j’ai aussi cherché des images pour illustrer les pages de notre site mais j’ai aussi aidé ma camarade pour le code en réalisant 2 pages du site et après , elle a amélioré la mise en page afin que les pages soient plus agréables visuellement . Enfin , je suis particulièrement satisfait de ce projet car il est celui que je trouve le mieux réalisé pour le moment",
    image: "images/Culture-Gwada-1-cp.jpg",
    link: "https://culture-guadeloupeenne.onrender.com/",
    category: "Développer"
  },
  {
    title: "Projet 6: Projet tournois de jeux vidéos",
    description: "Pour ce travail en groupe , il fallait effectuer un projet quelconque en faisant un planning ,un SMART ainsi qu’une affiche . Pour ce faire , nous avons décidé de créer un tournois de jeux vidéos où la participation était gratuite . Avant tout ça , nous avons répartis les tâches :  la partie communication , design , budgétaire et matérielle avec des deadlines pour chaque tâche. Ensuite , on a pensé aux lots pour les gagnants qui sont au nombre de 3 ( figurine , casque et manette PS5) . On a vérifié qu’on avait tous le matériel qu’on avait à disposition ( manettes , ordinateurs et câbles). On a établi un budget de 200€ pour financer tous notre projet ainsi qu’une tombola pour ceux qui voulaient gagner un lot. Enfin , nous avons réservé une salle à l’université , communiquer notre tournoi via WhatsApp vu qu’il était uniquement pour la classe. ",
    image: "images/Affiche-Gaming-Tournament-cp.jpg",
    link: "https://www.canva.com/design/DAGm4Me-jhg/ca33ec5SBwGbj40pF9Vu2g/view?utm_content=DAGm4Me-jhg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbaa569b1db",
    category: "Entreprendre"
  },
  {
    title: "Projet 7 : Affiche gardien de la galaxie",
    description: "Pour ce devoir , il fallait créer une affiche pour un autre film en reprenant la technique utilisée pour le tutoriel AFFICHE X-MEN. En l’occurrence , j’ai pris comme personnage Star Lord du film « Les Gardiens de la Galaxie » en incrustant à un fond de type paysage extraterrestre et pour rajouter du réalisme j’ai repris la police d’écriture exacte ( Guardian) . Tout cela en m’inspirant du tutoriel évoqué précédemment.",
    image: "images/Affiche gardien de la galaxie 2.png", // mets le vrai nom de ton image ici
    link: "https://www.canva.com/design/DAGm4LKYzfA/jkJBF8rqKDWi9t2rKSmZjQ/view?utm_content=DAGm4LKYzfA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hdcaa445dde",
    category: "Exprimer"
  },
  {
  title: "Projet 8 : SAE 1.04 : Produire un contenu audio et visuel :",
  description: "Dans ce projet , en groupe , il fallait trouver une idée , créer un scénario , faire le découpage technique , tourner le film et enfin , faire un montage de ce dernier . L’ objectif était de concevoir un court-métrage d’une fiction de 3 minutes maximum . Voici notre synopsis : Nous suivons la vie d’un homme passionné par le mime, mais malheureusement, son talent est incompris et se retrouve souvent moqué et insulté par les autres. Il se sent seul et rejeté à cause de sa passion. On a également fais la répartition des rôles : un caméraman , trois personnages principaux et 2 figurants . Dans mon cas , j’étais caméraman et donc je me suis occupé du tournage de chaque séquence . Chaque membre du groupe a apporté son point de vue pour chaque prise afin d’améliorer ou non la qualité du film .",
  image: "images/miniature silent resilience.jpg", // miniature de ta vidéo
  videoLink: "https://youtu.be/VSV6v8G04TM", // remplace avec ton lien
  category: "Exprimer"
  },
// Projet 9 : Présentation Canva
  {
  title: "Projet 9 : Stratégie de communication pour l’agence Penchard Voyages",
  description: "Pour ce travail, il fallait présenter une agence de voyage en analysant sa strategie de communication. Pour ce faire, il fallait choisir une agence, s’informer sur eux. Ensuite, on devait repérer les axes de communication, les cibles (touristes, homme d’affaire), les moyens / canaux de communications (réseaux sociaux, campagnes…). Pour terminer, quels seraient les points à ameliorer sur leurs communications par rapport à la veille concurrentielle.",
  image: "images/miniaPenchardVoyages.png", // miniature de présentation Canva
  link: "https://www.canva.com/design/DAF9hgMg5fk/tj5q3TEPBid1fU-6yhUauA/view?utm_content=DAF9hgMg5fk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8031a5b60c", // lien Canva
  category: "Comprendre"
  },

// Projet 10 : Vidéo Audit – Partie 1
  {
  title: "Projet 10 : SAE 1.01 : Auditer une communication numérique",
  description: "Dans ce premier projet , le but était de comprendre les écosystèmes, les besoins des utilisateurs et les dispositifs de communication numérique. Pour ce faire , nous devons former un groupe de 4 personnes , choisir 2 vidéos qui proviennent d’ une chaîne YouTube qui se nomme « Cellule Enov » . Ensuite , nous devons analyser chacune des vidéos en donnant les points positifs et négatifs afin de savoir ce qu’il fallait améliorer . Par exemple , il fallait vérifier si la vidéo était de bonne qualité au niveau visuel et sonore , si les explications étaient claires et précises, si la vidéo était référencée ou pas , si la vidéo était structurée ( avec une introduction , un développement , une conclusion) ou encore si le langage et le format était adapté au public visé . Tous ces critères permettaient d’apporter des améliorations à ces dernières.",
  image: "images/miniaVidéoCelluleEnov.png",
  videoLink: "https://youtu.be/i03nImANt1k?si=dkYsDkVAuSJQ318M",
  category: "Comprendre"
  },
  {
    title: "Projet 11 : Concevoir une affiche pour présenter les différentes filières de L'IUT ",
    description: "Dans ce projet, il fallait créer un visuel pour promouvoir les filières de l’IUT de la Guadeloupe. Pour ce faire, j’ai conçu un flyers en intégrant chaque filière sous forme de carte avec pour chacun un code couleurs (par exemple le violet pour le BUT MMI), une icône qui représente la promo en question, un QR Code qui renvoi à chaque formation avec une couleur dédiée ainsi qu’une description rapide en ce qui concerne les parcours. Pour finir, j’ai rajouté les coordonnées de L’IUT avec l’adresse, le mail ainsi que le numéro de téléphone et bien sûr le logo officiel de ce dernier dans un coin de l’affiche. J’ai utilisé un fond dégradé simple mélangeant du gris et du blanc ainsi qu’une police moderne afin que le visuel reste sobre, lisible et moderne, tout en le rendant attrayant.",
    image: "images/Affiche-formations-IUT-de-la-Guadeloupe-V2.jpg",
    link: "https://www.canva.com/design/DAGm4b3asew/9jFQQ3SsQd8_qg2sC1igrQ/view?utm_content=DAGm4b3asew&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbc9f03ec26",
    category: "Concevoir"
  },
  {
    title: "Projet 12 : SAE 1.02 : Concevoir une recommandation de communication numérique ",
    description: "Dans ce second projet , le but était de concevoir ou coconcevoir une réponse stratégique pertinente à une problématique complexe. Tout d'abord , on devait choisir une ou plusieurs notions ( grammaire , conjugaison …) pour promouvoir les cours en anglais. Ensuite , en tant que chargés de communication juniors, nous devons concevoir une recommandation de communication pour la sortie ou le repositionnement d’un produit ou d’un service dans un contexte international. En l'occurrence ici , c'était le repositionnement d'un service car il fallait créer une affiche ludique et attractive en anglais qui présentait une notion d'un cours afin de permettre aux élèves/étudiants de continuer l'apprentissage de cette langue vivante.",
    image: "images/English.png",
    link: "https://www.canva.com/design/DAFyUNRujp8/2Ht9FxQdbNnNgxMOk1ualQ/view?utm_content=DAFyUNRujp8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha472e828f2",
    category: "Concevoir"
  },
  {
    title: "Projet 13 : Design émotionnel pour une campagne de sensibilisation (chlordécone)",
    description: "Dans ce devoir , il fallait créer un design émotionnel pour une campagne de sensibilisation à la pollution au chlordécone en Guadeloupe . L’objectif était de permettre aux étudiants d’appréhender, les principes du design émotionnel en les invitant à créer une affiche, un produit ou une page d’accueil d’un site internet pour une campagne de sensibilisation à la pollution au chlordécone en Guadeloupe. Tout d’abord , il fallait identifier le problème en analysant les effets néfastes de la pollution au chlordécone sur l’environnement (sol, mer rivière…), les habitants, les plantations et les émotions ressenties face à ce problème (colère,tristesse, impuissance, etc.). Ensuite , il fallait définir les objectifs émotionnels . Puis , j’ai du appliquer les techniques de design émotionnel en faisant du storytelling  , un design sensoriel et d’interaction . Enfin , j’ai créer une affiche qui permet de diffuser le message de manière concise et percutante dans des espaces publics.",
    image: "images/Affiche-de- campagne-de sensibilisation-sur le-chlordécone.jpg",
    link: "https://www.canva.com/design/DAGDFYbt4aE/LvLMNvd8bfHjnrczHnVi5g/view?utm_content=DAGDFYbt4aE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2e31defddb",
    category: "Concevoir"
  },
  {
    title: "Projet 14: SAE 2.02 : Concevoir un produit ou un service et sa communication",
    description: "Dans ce projet, les objectifs étaient :  de concevoir ou co-concevoir une réponse stratégique pertinente à une problématique complexe d’exprimer un message avec les médias numériques pour informer et communiquer , de développer pour le web et les médias numériques et d’entreprendre dans le secteur du numérique . Pour commencer , il fallait constituer un groupe de 3 et après il fallait se répartir les rôles et les tâches , c’est-à-dire une personne faisait la partie design , une autre la communication/marketing et la dernière la création du site web. Pour ma part , je me suis occupé de la création d’un site de type vitrine pour une marque de thé glacé en Guadeloupe (Thé Pays) en intégrant 4 pages principales : Accueil , Nos boissons ( shop) , A propos de nous et Contact en reprenant les codes et valeurs de l’entreprise.  J’ai également assurer la gestion et la suivi du projet en faisant des comptes rendus et un diagramme de Gantt .", 
    image: "images/minia site thé pays.png",
    link: "https://xn--thpays-cva.com/",
    category: "Développer"
  },
  {
    title: "Projet 15: Vidéo type Day in my life à l’ASFO",
    description: "Type : Vidéo storytelling Outils utilisés : Smartphone, montage vidéo (Canva et Zub Title) Objectif : Mettre en scène une journée type de formation à l’ASFO à travers une narration immersive et rythmée Dans le cadre de ma formation, j’ai réalisé une vidéo de type “Day in my life” visant à illustrer, de manière authentique et dynamique, une journée typique passée à l’ASFO. Ce projet avait pour but de combiner narration personnelle, prise de vue, montage et storytelling, tout en adoptant un ton à la fois informatif et engageant. La vidéo suit le déroulé complet de ma journée, depuis mon réveil jusqu’au retour à la maison, en passant par le trajet en bus, les cours (dont un exposé sur le Green IT), la pause déjeuner dans un restaurant local, et un atelier de création graphique. Le récit est ponctué de touches d’humour, de réflexions personnelles et de commentaires en voix off pour renforcer l'immersion. Ce projet m’a permis de travailler l’écriture de script, la gestion du rythme en montage, la voix off ainsi que la mise en scène du quotidien dans une logique de contenu engageant, proche des codes utilisés sur les réseaux sociaux.",
    image: "images/Day in my Life by EC.png",
     link: "https://www.canva.com/design/DAGVYG3a2Bo/mzSUH_haA0OEdbBK1RmuBQ/watch?utm_content=DAGVYG3a2Bo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h489805ea3b",
    category: "Entreprendre"
  },
  {
    title: "Projet 16 : Stratégie de communication pour l'espace thermoludique Vitalys",
    description: "Dans le cadre d’un travail de groupe réalisé en BUT MMI, nous avons conçu une stratégie de communication complète pour Vitalys, un centre de bien-être et d’activités aquatiques situé en Guadeloupe. L’objectif était de promouvoir sa réouverture en touchant plusieurs publics : jeunes actifs, familles, seniors et entreprises. Nous avons défini des cibles précises, élaboré des messages adaptés à chacun, et proposé un plan de communication multicanal mêlant supports print, digital, radio, événements et influence. Le projet incluait également la création d’une identité visuelle forte (nom, slogan, logo), la réalisation d’une affiche promotionnelle, d’un spot radio, et la conception d’un rétroplanning et d’un budget prévisionnel de 20 000 €. Cette expérience m’a permis de mobiliser des compétences en stratégie, création graphique, rédaction marketing et gestion de projet, tout en apprenant à travailler efficacement en équipe sur une campagne concrète et professionnelle.",
    image: "images/miniaVitalys.png",
    link: "https://www.canva.com/design/DAGW1Ov4n2Q/Iji-YDa1n1isiIAQfPCnmg/view?utm_content=DAGW1Ov4n2Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3a6387f84c",
    category: "Comprendre"
  },
  {
    title:"Projet 17 : Animation d’intro vidéo pour le projet Interface 2025 (BUT 2 MMI)",
    description:"Pour remettre en contexte ce projet se déroule lors de la période de projet Interface 2025, un événement incontournable rassemblant des experts du numérique et des passionnés des métiers de l’innovation pour partager les dernières tendances et les meilleures pratiques en matière de design, développement, marketing numérique et gestion de projets. Cette mission pédagogique se déroule au Québec (Canada) du 24 mai au 30 mai 2025. J’ai donc voulu créer une animation avec notre logo pour de futures vidéos. Pour ce faire, j’ai pris le logo du BUT MMI sur notre drive dans la partie communication et création, je l’ai ensuite importer sur After Effect. J’ai en suite fais un travail de pré-composition en mettant le logo en blanc après j’ai utilisé l’effet “Vega” pour n’avoir que le contour blanc autour des lettres pour que le logo apparaisse progressivement. Après , j’ai utilisé un autre effet qui s’appelle “CC Radial Fast Blur” pour ajouter un flou de mouvement qui donne l’impression que le logo bouge. J’ai dupliqué une deuxième fois pour accentuer l’effet en question en jouant plus sur l’opacité. Par la suite, je l’ai mis sur un fond blanc pour que le logo est une ombre portée derrière lui et pour rajouter un peu de réalisme à cette ombre j’ai rajouté un spot de lumière. Puis, j’ai ajouté une caméra pour donner un effet de retour en arrière (en jouant sur la position de la caméra) avec une légère  déformation du logo rendant le tout plus dynamique et plus agréable à l’œil. Enfin, après que les lettres du logo sois formé, je fais apparaître subtilement le logo original suivi d’un texte présentant le nom du projet.",
    image: "images/Animation d'intro vidéo Projet Interface 2025 BUT2 MMI.png",
    link: "https://www.canva.com/design/DAGm5WpfK74/M7KsMgaxPpJRRO6MfogFhA/watch?utm_content=DAGm5WpfK74&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7bbcf7d8b9",
    category: "Entreprendre"
  },
  {
    title:"Projet 18 : Etude de Cas : La Pépinière Citoyenne",
    description:"Dans le cadre de ma formation en BUT MMI, j’ai mené une étude de cas autour de la création d’une stratégie éditoriale complète pour La Pépinière Citoyenne, une association étudiante fictive portant un projet écologique local : la mise en place d’un jardin partagé à Saint-Denis. L’objectif était de concevoir une campagne digitale permettant de mobiliser une communauté engagée en vue de réussir une campagne de crowdfunding. J’ai commencé par une analyse approfondie des cibles, en identifiant quatre profils principaux : étudiants engagés, habitants du quartier, militants écologistes et anciens élèves. J’ai ensuite défini les canaux de communication adaptés (Instagram, TikTok, Facebook, Twitter, LinkedIn) et élaboré une charte éditoriale claire, au ton positif, humain et pédagogique. Un calendrier éditorial de 4 semaines a été créé, avec des publications variées : vidéos teaser, infographies, témoignages, contenus interactifs. J’ai également conçu un logo symbolisant l’entraide, la jeunesse et la nature, en cohérence avec les valeurs du projet. L’animation de la communauté s’appuyait sur des sondages, défis, remerciements et contenus participatifs. Enfin, j’ai prévu des indicateurs de performance (KPI) pour évaluer la portée, l’engagement, les conversions et ajuster la stratégie en temps réel. Ce projet m’a permis de mobiliser des compétences en communication, UX, planification de contenu et analyse stratégique, tout en valorisant une cause environnementale.",
    image: "images/Logo La Pépinière Citoyenne.png",
    link:"https://www.canva.com/design/DAGn1ywW-3E/xC2E7JKWYKGXGL2S8PFONA/view?utm_content=DAGn1ywW-3E&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h46c7a1c649",
    category: "Comprendre"
  },  
  {
    title:"Projet 19 : Interview de Catherine (Atelier Créature) – Interface 2025",
    description: "À l’occasion de l’événement Interface 2025 à Québec, nous avons réalisé en groupe une interview vidéo de Catherine, représentante de l’entreprise Atelier Créature, une marque textile indépendante basée dans le quartier Petit Champlain. L’objectif de ce projet était de mettre en lumière un acteur local du secteur créatif, tout en produisant un contenu professionnel adapté aux formats numériques actuels. Atelier Créature se spécialise dans la création de vêtements personnalisés BtoB (t-shirts, casquettes, tote bags…) pour des événements ou des marques, avec une production interne et des collections originales en collaboration avec des artistes locaux. Catherine nous a présenté leur démarche, leur identité visuelle forte et leur présence à Interface à travers des produits créés pour l'événement. Nous avons filmé l’interview au format vertical (9:16), en utilisant une caméra DJI Osmo Pocket 3 et un micro-cravate, pour optimiser la diffusion sur Instagram et TikTok. J’ai ensuite assuré la postproduction avec CapCut : Ajout d’une intro animée personnalisée, conçue en amont ; Intégration de sous-titres manuels, avec une attention particulière à l’orthographe, à la syntaxe et à la fidélité des propos de l’intervenante ; Isolation du bruit de fond et amélioration de la voix via les outils intégrés ; Insertion d’une transition de distorsion dynamique entre l’introduction et le cœur de l’interview, pour renforcer le rythme ; Utilisation d’un arrière-plan jaune sous les textes, en écho aux couleurs des produits de l’Atelier. La vidéo a été exportée en 1080p afin d’assurer une bonne qualité tout en restant légère pour une diffusion fluide sur les plateformes sociales.Ce projet m’a permis de mobiliser des compétences en production audiovisuelle, communication professionnelle, création de contenu optimisé pour le web, mais aussi en mise en relation avec un acteur d’un écosystème créatif local. Il illustre ma capacité à collaborer en équipe, à produire un contenu cohérent, dynamique et engageant, et à m’insérer dans un contexte événementiel réel.",
    image:"images/Animation d'intro vidéo Projet Interface 2025 BUT2 MMI.png ",
    videoLink:"https://youtube.com/shorts/T5DOwkHfDKQ",
    category: "Entreprendre"
  },
  {
    title:"Projet 20 : SAE 4.CREA.02 – Story FAQ Instagram pour l’IUT de la Guadeloupe",
    description: "Dans cette SAE , pour remettre en contexte l’objectif était de mobiliser les compétences de création, de communication digitale et de gestion de projet dans une situation réaliste : le lancement d’un compte Instagram institutionnel. Donc pour renforcer sa visibilité et son attractivité auprès des lycéens, étudiants et partenaires locaux.  Pour ce faire, nous avons créer un calendrier éditoriale sur une durée de 2 semaines pour savoir quel type de contenu nous allons publier (carrousel, story, réel, post), à quel filière s’adresse t’elle (IUT, GEA, MMI, GB, CS) et enfin quels jours seraient poster chaque contenu.Maintenant, je vais vous présenter l’un des contenues que nous avons réalisé en groupe. Dans ce projet le but étant de créer une story Instagram de type F.A.Q (Foire Aux Questions) pour informer les prochains étudiants intégrants la 2ème années pour les filières suivantes : BUT MMI, BUT GB en parcours SEE et les BUT GEA. Nous avons donc créer ce projet sur Canva en groupe, tout d’abord, nous avons créer une page de couverture avec un étudiant mis en valeur avec le logo officiel de l’IUT de la Guadeloupe et pour la police et les couleurs nous avons respecté la charte graphique du groupe création de contenu pour garder une cohérence sur les autres contenus.La seconde page se concentre sur les frais d’inscriptions, plus précisément la CVEC, qui est une taxe obligatoire perçue en parallèle aux droits d'inscription dans l'enseignement supérieur . Ensuite, nous avons créer un lien cliquable sur Instagram pour accéder aux réinscriptions pour éviter de passer par le site de L’Université des Antilles. Par la suite , nous avons établis une liste concise des documents à fournir en s’informant au préalable sur le site de l’université pour éviter les oublis de ces derniers. Pour permettre une meilleure lisibilité nous avons surligné les informations clés en orange. De plus, pour ces filières dès la deuxième année nous sommes en alternance certes mais les cours se déroulent désormais dans un CFA, il faut donc également s’inscrire dessus. Donc pareil, nous avons surligné les infos importantes et rajouté un lien qui renvoie directement au CFA. Enfin, nous avons mis les coordonnées pour contacter le service de scolarité : le mail, le numéro de téléphone fixe et l’adresse du lieu. Ainsi qu’une dernière page, s’il y a d’autres questions éventuelles pour guider au mieux nos futurs étudiants. ",
    image: "images/STORY FAQ IUT COUVERTURE.png",
    link:"https://www.canva.com/design/DAGsmQVEJBg/dW0gqF-p3wzu-84q8IzVdw/view?utm_content=DAGsmQVEJBg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h99bcf71d32",
    category: "Exprimer"
  },
]
let currentFilteredProjects = []; // <-- Tableau des projets affichés

function renderProjects(category = "all") {
  const container = document.getElementById("projectList");
  container.innerHTML = "";

  // Filtrage
  const filtered = category === "all"
    ? projects
    : projects.filter(p => p.category === category);

  // 🔁 On stocke les projets affichés
  currentFilteredProjects = filtered;

  // Création des cartes
  filtered.forEach((p, index) => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";
    col.innerHTML = `
      <div class="project-card">
        <img src="${p.image}" alt="${p.title}" class="project-image" data-index="${index}">
        <div class="project-title">${p.title}</div>
      </div>
    `;
    container.appendChild(col);
  });

  // 🔁 Clic sur les images
  document.querySelectorAll(".project-image").forEach((img) => {
    img.addEventListener("click", () => {
      currentProjectIndex = parseInt(img.getAttribute("data-index")); // ← index dans currentFilteredProjects
      openModal(currentProjectIndex); // On affiche le bon projet
    });
  });
}


// Ajoute le clic sur les boutons de filtre
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-category");

    // Gestion de l'état "actif" sur le bouton
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    renderProjects(category);
  });
});


// Variable pour suivre l'index du projet actuellement affiché dans le modal
let currentProjectIndex = 0;

// Récupération du modal Bootstrap et des éléments HTML associés
const modal = new bootstrap.Modal(document.getElementById("projectModal"));
const modalTitle = document.getElementById("modalProjectTitle");
const modalImage = document.getElementById("modalProjectImage");
const modalDescription = document.getElementById("modalProjectDescription");
const prevButton = document.getElementById("prevProject");
const nextButton = document.getElementById("nextProject");

// Ajout d'un gestionnaire d'événement sur chaque image de projet
document.querySelectorAll(".project-image").forEach((img, index) => {
  img.addEventListener("click", () => {
    currentProjectIndex = index; // Met à jour l'index du projet sélectionné
    openModal(currentProjectIndex); // Ouvre le modal avec les infos du projet
  });
});

// Gestion du bouton "précédent" dans le modal
prevButton.addEventListener("click", () => {
  // Décrémente l'index du projet, et revient au dernier projet si l'index est négatif
  currentProjectIndex = currentProjectIndex = (currentProjectIndex - 1 + currentFilteredProjects.length) % currentFilteredProjects.length;
  openModal(currentProjectIndex);
});

// Gestion du bouton "suivant" dans le modal
nextButton.addEventListener("click", () => {
  // Incrémente l'index du projet, et revient au premier projet si on dépasse le dernier
  currentProjectIndex = (currentProjectIndex + 1) % currentFilteredProjects.length;
  openModal(currentProjectIndex);
});

// Fonction pour ouvrir le modal et afficher les informations du projet sélectionné
function openModal(index) {
  const project = currentFilteredProjects[index];

  modalTitle.textContent = project.title;
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = "";

  let content;

  if (project.videoLink) {
    content = document.createElement("div");
    content.innerHTML = `
      <img src="${project.image}" alt="Miniature de la vidéo" class="img-fluid mb-3">
      <div class="text-center">
        <a href="${project.videoLink}" target="_blank" class="btn btn-danger" rel="noopener noreferrer">
          <i class="bi bi-youtube"></i> Voir sur YouTube
        </a>
      </div>
    `;
  }
  
  else if (project.link) {
    // Lien externe (Canva)
    content = document.createElement("div");
    content.innerHTML = `
      <img src="${project.image}" alt="Miniature présentation" class="img-fluid mb-3">
      <div class="text-center">
        <a href="${project.link}" target="_blank" class="btn btn-primary" rel="noopener noreferrer">Voir la présentation</a>
      </div>
    `;
  } else {
    // Image classique
    content = document.createElement("img");
    content.src = project.image;
    content.alt = "Image du projet";
    content.className = "img-fluid mb-3";
  }

  const description = document.createElement("p");
  description.textContent = project.description;
  description.className = "mt-3";

  modalBody.appendChild(content);
  modalBody.appendChild(description);

  modal.show();
}



// Ajout d'un écouteur d'événements au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  renderProjects(); // Affiche tous les projets au début
});


  // Ajoute un gestionnaire d'événements pour un défilement fluide au clic
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Empêche le comportement par défaut du lien
      const targetId = link.getAttribute("href").substring(1); // Récupère l'ID de la section ciblée
      const targetSection = document.getElementById(targetId);

      // Effectue un défilement fluide vers la section
      window.scrollTo({
        top: targetSection.offsetTop - 50, // Ajuste la position en fonction de la barre de navigation
        behavior: "smooth", // Animation fluide
      });

      // Met à jour l'état actif des liens
      links.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Sélectionne toutes les sections de la page
  const sections = document.querySelectorAll("section");

  //Ajoute un écouteur d'événements pour détecter la section active lors du défilement
  window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 60; // Ajuste la position en fonction de la barre de navigation
      const sectionHeight = section.offsetHeight;
      if (
        pageYOffset >= sectionTop &&
        pageYOffset < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id"); // Récupère l'ID de la section visible
      }
    });

    // Met à jour la classe active des liens de navigation
    links.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });


// Gestion du menu hamburger sur mobile
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");

  // Ajoute un gestionnaire d'événements pour afficher/masquer le menu mobile
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
  });
});

// Attend que le DOM soit complètement chargé avant d'exécuter le script
document.addEventListener("DOMContentLoaded", () => {
  // Sélectionne toutes les barres de progression sur la page
  const progressBars = document.querySelectorAll(".progress-bar");

  // Crée un observateur pour détecter quand les barres de progression entrent dans le champ de vision
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Vérifie si l'élément est visible à l'écran
          let progressBar = entry.target;
          let maxWidth = progressBar.getAttribute("aria-valuenow"); // Récupère la valeur cible de la barre (pourcentage)

          // Applique la largeur correspondant à la valeur cible pour animer la barre
          progressBar.style.width = maxWidth + "%";
        }
      });
    },
    { threshold: 1.0 }
  ); // L'animation ne démarre que lorsque 100% de l'élément est visible

  // Initialise les barres à 0% au chargement de la page pour éviter qu'elles soient déjà remplies
  progressBars.forEach((bar) => {
    bar.style.width = "0%";
    observer.observe(bar); // Observe chaque barre de progression
  });
});
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêcher l'envoi classique

    let form = this;
    let formData = new FormData(form);
    let formMessage = document.getElementById("formMessage");

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          formMessage.className = "alert alert-success";
          formMessage.textContent = "Votre message a été envoyé avec succès !";
          form.reset(); // Réinitialisation du formulaire
        } else {
          throw new Error("Erreur lors de l'envoi du message.");
        }
      })
      .catch((error) => {
        // Message d'erreur
        formMessage.className = "alert alert-danger";
        formMessage.textContent =
          "Une erreur s'est produite. Veuillez réessayer plus tard.";
      })
      .finally(() => {
        formMessage.classList.remove("d-none");
      });
  });
// Vérification de l'adresse mail
document.getElementById("email").addEventListener("input", function () {
  let emailHelp = document.getElementById("emailHelp");
  if (this.value.includes("@")) {
    emailHelp.classList.add("d-none");
  } else {
    emailHelp.classList.remove("d-none");
  }
});



