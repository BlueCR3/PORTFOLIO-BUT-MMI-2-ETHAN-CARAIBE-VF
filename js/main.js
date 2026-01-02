// Tableau contenant les projets avec leurs titres, descriptions et images associées
const projects = [
  {
    title: "Créer un post Instagram pour une marque de voiture",
    description: "Création d’un post Instagram promotionnel pour la marque Aixam sur Photoshop. Retouche de la couleur du véhicule, conception d’un arrière-plan et intégration du modèle, slogan, prix et logo avec une composition harmonieuse et lisible. ",
    image: "images/post-voiture-1080x1350-cp.jpg",
    link:"https://www.canva.com/design/DAGm4Ma85Mw/UYUFDwJchmaSkditvLz2Dg/view?utm_content=DAGm4Ma85Mw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h86a8d4eb7a",
    category: "Exprimer"
  },
  {
    title: "Visuel de promotion pour un espace thermoludique ",
    description: "Conception d’un flyer pour la réouverture de l’espace thermoludique Vitalys. Création du logo, mise en page sur Canva avec images inspirées de Ravine Chaude et intégration des informations clés : nom, slogan, date d’ouverture.",
    image: "images/Affiche-Vitalys-cp.jpg",
    link: "https://www.canva.com/design/DAGm4HNe9GY/zqqKKqi6Lo1yl_j5m7SSew/view?utm_content=DAGm4HNe9GY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb0d1f8e301",
    category: "Exprimer"
  },
  {
    title: "Création d'un logo unique, Dragonix le studio de jeu de combat Next Gen",
    description: "Création d’un logo original pour un studio de jeux de combat : choix typographique, ajout d’effets visuels et déclinaisons sur mock-ups pour garantir une identité cohérente, responsive et impactante sur tout support.",
    image: "images/Plan-de-travail-9_3-cp.jpg",
    link: "https://www.canva.com/design/DAGcM9i2V-E/j12JE-KQPLoScWYfmk4MVg/view?utm_content=DAGcM9i2V-E&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3f354637ea",
    category: "Concevoir"
  },
  {
    title: "Réaliser un visionboard",
    description: "Réalisation d’un vision board branding illustrant mon image de soi idéale à travers un collage de mots, lieux et personnes inspirantes. Conçu sur Canva, ce projet m’a permis d’explorer l’expression visuelle personnelle et le travail sur l’identité à travers la composition et le symbolisme graphique.",
    image: "images/My-Vision-Board-cp 3.jpg",
    link: "https://www.canva.com/design/DAF1wsKcaUk/Af4gws3IdFzYdtLatbncwA/view?utm_content=DAF1wsKcaUk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h53ca4d089c",
    category: "Entreprendre"
  },
  {
    title: "SAE 1.05 : Produire un site web",
    description: "Création en groupe d’un site web sur la culture guadeloupéenne, avec 4 pages thématiques. Participation à la recherche de contenu et au développement HTML/CSS du site. Travail collaboratif sur Figma et contribution à la mise en page responsive.",
    image: "images/Culture-Gwada-1-cp.jpg",
    link: "https://culture-guadeloupeenne.onrender.com/",
    category: "Développer"
  },
  {
    title: "Projet tournois de jeux vidéos",
    description: "Mise en place d’un tournoi e-sport étudiant, de la planification à la communication. Répartition des rôles, création d’un budget prévisionnel de 200 €, conception d’une affiche et gestion logistique complète de l’événement à l’université.",
    image: "images/Affiche-Gaming-Tournament-cp.jpg",
    link: "https://www.canva.com/design/DAGm4Me-jhg/ca33ec5SBwGbj40pF9Vu2g/view?utm_content=DAGm4Me-jhg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbaa569b1db",
    category: "Entreprendre"
  },
  {
    title: "Affiche gardien de la galaxie",
    description: "Réalisation d’une affiche inspirée du tutoriel “Affiche X-Men” en utilisant Photoshop. Incrustation du personnage Star-Lord sur un fond extraterrestre, travail sur la typographie originale et la composition pour obtenir un rendu réaliste et professionnel.",
    image: "images/Affiche gardien de la galaxie 2.png", // mets le vrai nom de ton image ici
    link: "https://www.canva.com/design/DAGm4LKYzfA/jkJBF8rqKDWi9t2rKSmZjQ/view?utm_content=DAGm4LKYzfA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hdcaa445dde",
    category: "Exprimer"
  },
  {
  title: "SAE 1.04 : Produire un contenu audio et visuel :",
  description: "Conception en groupe d’un court-métrage de 3 minutes, de l’écriture du scénario au montage final. J’ai assuré la captation vidéo en tant que cameraman et participé à la direction artistique pour garantir la cohérence visuelle du projet.",
  image: "images/miniature silent resilience.jpg", // miniature de ta vidéo
  videoLink: "https://youtu.be/VSV6v8G04TM", // remplace avec ton lien
  category: "Exprimer"
  },
// Projet 9 : Présentation Canva
  {
  title: "Stratégie de communication pour l’agence Penchard Voyages",
  description: "Analyse complète de la stratégie de communication de l’agence : identification des cibles, canaux utilisés et positionnement. Proposition d’axes d’amélioration à partir d’une veille concurrentielle et d’une étude de marché.",
  image: "images/miniaPenchardVoyages.png", // miniature de présentation Canva
  link: "https://www.canva.com/design/DAF9hgMg5fk/tj5q3TEPBid1fU-6yhUauA/view?utm_content=DAF9hgMg5fk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8031a5b60c", // lien Canva
  category: "Comprendre"
  },

// Projet 10 : Vidéo Audit – Partie 1
  {
  title: "SAE 1.01 : Auditer une communication numérique",
  description: "Réalisation d’un audit de vidéos YouTube de la chaîne Cellule Enov. Évaluation de la qualité visuelle, sonore et de la pertinence du discours. Identification des points d’amélioration en termes de référencement et structure narrative.",
  image: "images/miniaVidéoCelluleEnov.png",
  videoLink: "https://youtu.be/i03nImANt1k?si=dkYsDkVAuSJQ318M",
  category: "Comprendre"
  },
  {
    title: "Concevoir une affiche pour présenter les différentes filières de L'IUT ",
    description: "Conception d’un flyer institutionnel présentant les formations de l’IUT de la Guadeloupe : mise en page colorée et hiérarchisée, intégration de QR codes interactifs, typographie moderne et respect de la charte graphique de l’établissement.",
    image: "images/Affiche-formations-IUT-de-la-Guadeloupe-V2.jpg",
    link: "https://www.canva.com/design/DAGm4b3asew/9jFQQ3SsQd8_qg2sC1igrQ/view?utm_content=DAGm4b3asew&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbc9f03ec26",
    category: "Concevoir"
  },
  {
    title: "SAE 1.02 : Concevoir une recommandation de communication numérique ",
    description: "Conception d’une affiche promotionnelle en anglais destinée à valoriser l’apprentissage des langues. Élaboration d’une stratégie visuelle et rédactionnelle ludique pour rendre le message attractif et adapté à un public étudiant.",
    image: "images/English.png",
    link: "https://www.canva.com/design/DAFyUNRujp8/2Ht9FxQdbNnNgxMOk1ualQ/view?utm_content=DAFyUNRujp8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha472e828f2",
    category: "Concevoir"
  },
  {
    title: "Design émotionnel pour une campagne de sensibilisation (chlordécone)",
    description: "Création d’une affiche de sensibilisation sur la pollution au chlordécone. Application des principes du design émotionnel (storytelling, couleurs, composition) pour susciter l’empathie et inciter à la prise de conscience écologique.",
    image: "images/Affiche-de- campagne-de sensibilisation-sur le-chlordécone.jpg",
    link: "https://www.canva.com/design/DAGDFYbt4aE/LvLMNvd8bfHjnrczHnVi5g/view?utm_content=DAGDFYbt4aE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2e31defddb",
    category: "Concevoir"
  },
  {
    title: "SAE 2.02 : Concevoir un produit ou un service et sa communication",
    description: "Conception d’un site vitrine pour une marque de thé glacé locale. Gestion du projet web complet : création des pages principales, élaboration du diagramme de Gantt et suivi du planning. Projet associant design, communication et développement web.",
    image: "images/minia site thé pays.png",
    link: "https://xn--thpays-cva.com/",
    category: "Développer"
  },
  {
    title: "Vidéo type Day in my life à l’ASFO",
    description: "Réalisation d’une vidéo storytelling “Day in My Life à l’ASFO “, illustrant une journée de formation de façon immersive et rythmée. Tournée au smartphone et montée sur Canva et Zubtitle, la vidéo combine narration, humour et voix off pour un rendu authentique. Ce projet m’a permis de travailler le storytelling, le montage et la mise en scène du quotidien.",
    image: "images/Day in my Life by EC.png",
     link: "https://www.canva.com/design/DAGVYG3a2Bo/mzSUH_haA0OEdbBK1RmuBQ/watch?utm_content=DAGVYG3a2Bo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h489805ea3b",
    category: "Entreprendre"
  },
  {
    title: "Stratégie de communication pour l'espace thermoludique Vitalys",
    description: "Réalisation d’une campagne complète pour la réouverture du centre Vitalys : définition des cibles, choix des canaux, création d’une identité visuelle et d’un plan média. Élaboration d’un budget de 20 000 € et d’un rétroplanning.",
    image: "images/miniaVitalys.png",
    link: "https://www.canva.com/design/DAGW1Ov4n2Q/Iji-YDa1n1isiIAQfPCnmg/view?utm_content=DAGW1Ov4n2Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3a6387f84c",
    category: "Comprendre"
  },
  {
    title:"Animation d’intro vidéo pour le projet Interface 2025 (BUT 2 MMI)",
    description:"Création d’une animation vidéo du logo MMI sur After Effects pour l’événement Interface 2025. Utilisation d’effets de lumière, flou de mouvement et caméra virtuelle pour un rendu professionnel et dynamique.",
    image: "images/Animation d'intro vidéo Projet Interface 2025 BUT2 MMI.png",
    link: "https://www.canva.com/design/DAGm5WpfK74/M7KsMgaxPpJRRO6MfogFhA/watch?utm_content=DAGm5WpfK74&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7bbcf7d8b9",
    category: "Entreprendre"
  },
  {
    title:"Etude de Cas : La Pépinière Citoyenne",
    description:"Création d’une stratégie éditoriale pour une association fictive de jardin partagé : définition des cibles, calendrier de publication, charte éditoriale et logo. Mise en place d’indicateurs pour mesurer l’engagement et les conversions.",
    image: "images/Logo La Pépinière Citoyenne.png",
    link:"https://www.canva.com/design/DAGn1ywW-3E/xC2E7JKWYKGXGL2S8PFONA/view?utm_content=DAGn1ywW-3E&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h46c7a1c649",
    category: "Comprendre"
  },  
  {
    title:"Interview de Catherine (Atelier Créature) – Interface 2025",
    description: "Tournage et montage vidéo d’une interview professionnelle durant Interface 2025. Captation au format 9:16 avec DJI Osmo Pocket 3, ajout de sous-titres, transitions et habillage graphique cohérent avec l’identité de la marque.",
    image:"images/Animation d'intro vidéo Projet Interface 2025 BUT2 MMI.png ",
    videoLink:"https://youtube.com/shorts/T5DOwkHfDKQ",
    category: "Entreprendre"
  },
  {
    title:"SAE 4.CREA.02 – Story FAQ Instagram pour l’IUT de la Guadeloupe",
    description: "Création en groupe d’une story interactive de FAQ sur Canva pour informer les futurs étudiants. Conception visuelle conforme à la charte IUT, liens cliquables vers le CFA et la CVEC, et mise en page claire et attrayante.",
    image: "images/STORY FAQ IUT COUVERTURE.png",
    link:"https://www.canva.com/design/DAGx9CwVrrQ/3KStPEcyRce4u7cCLn3sPA/view?utm_content=DAGx9CwVrrQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h15e5339ed6",
    category: "Exprimer"
  },
  {
    title:"Court-métrage thriller – Travail du hors-champ et du sound design",
    description: "Réalisation d’un court-métrage thriller reposant sur le principe du hors-champ et un travail approfondi de sound design. À partir de rushs imposés, j’ai assuré le tri des plans, le montage sur DaVinci Resolve et la création de l’ambiance sonore afin d’installer tension et narration sans montrer explicitement la violence. Ce projet met en avant des choix artistiques forts et une construction narrative immersive jouant sur l’ambiguïté et l’émotion du spectateur.",
    image: "images/CAPTURE THRILLER HORS CHAMP.png",
    videoLink: "https://youtu.be/nEBoauXwSJQ",
    category: "Exprimer"
  },
  {
    title:"GwadaCollect – Application de suivi des collectes de déchets en Guadeloupe",
    description:"GwadaCollect est un projet de groupe visant à concevoir une application mobile éco-citoyenne pour améliorer la communication autour de la collecte des déchets en Guadeloupe. La solution centralise les informations de collecte, envoie des notifications personnalisées et propose un guide du tri local. Ce projet m’a permis de travailler sur la réflexion stratégique, l’analyse des besoins utilisateurs et la conception d’un service numérique à impact local.",
    image: "",
    link: "https://www.canva.com/design/DAG1n7LIqwo/E2RX_kUmHXKaFAPkbQr2lw/view?utm_content=DAG1n7LIqwo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8dab637b84",
    category: "Entreprendre"
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














