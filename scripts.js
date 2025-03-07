document.addEventListener("DOMContentLoaded", function () {
    const teamMembers = [
        {
            name: "Monsieur Watson Williams",
            position: "Directeur Général",
            image: "assets/images/directeur.jpeg"
        },
        {
            name: "Paul Ndom",
            position: "Directeur des Projets",
            image: "assets/images/member2.jpeg"
        },
        {
            name: "Nicole Ngono",
            position: "Responsable des Ressources Humaines",
            image: "assets/images/member3.jpeg"
        },
        {
            name: "Joseph Tchoua",
            position: "Chef de Chantier",
            image: "assets/images/member4.jpeg"
        },
        {
            name: "Claire Mbarga",
            position: "Responsable Qualité et Sécurité",
            image: "assets/images/member5.jpeg"
        },
        {
            name: "Charles Moki",
            position: "Ingénieur en Génie Civil",
            image: "assets/images/member6.jpeg"
        }
    ];

    const equipeContainer = document.getElementById("equipe-members");

    teamMembers.forEach(member => {
        const memberHTML = `
            <div class="col-md-4 mb-4">
                <div class="card shadow-lg text-center">
                    <img src="${member.image}" class="card-img-top" alt="${member.name}">
                    <div class="card-body">
                        <h5 class="card-title">${member.name}</h5>
                        <p class="card-text">${member.position}</p>
                    </div>
                </div>
            </div>
        `;
        equipeContainer.innerHTML += memberHTML;
    });


    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault(); // Empêche le comportement par défaut
  
        const target = document.querySelector(this.getAttribute("href"));
        
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 100, // Ajuste la position pour éviter le chevauchement avec la navbar
            behavior: "smooth" // Animation fluide
          });
        }
      });
    });

});


  
