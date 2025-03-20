const albums = [
    {
        title: "Bleach",
        description: "Premier album studio de Nirvana, sorti en 1989.",
        year: 1989,
        image: "assets/img/vinyls/bleach.jpg"
    },
    {
        title: "Nevermind",
        description: "Album iconique sorti en 1991, contenant le hit 'Smells Like Teen Spirit'.",
        year: 1991,
        image: "assets/img/vinyls/nevermind.jpg"
    },
    {
        title: "In Utero",
        description: "Dernier album studio de Nirvana, sorti en 1993.",
        year: 1993,
        image: "assets/img/vinyls/in_utero.jpg"
    },
    {
        title: "MTV Unplugged in New York",
        description: "Album live acoustique enregistré en 1993 et sorti en 1994.",
        year: 1994,
        image: "assets/img/vinyls/mtv.jpg"
    },
    {
        title: "From the Muddy Banks of the Wishkah",
        description: "Compilation d'enregistrements live de Nirvana, sortie en 1996.",
        year: 1996,
        image: "assets/img/vinyls/muddy_banks.jpg"
    },
    {
        title: "Live at Reading",
        description: "Enregistrement du concert mythique de Nirvana au festival de Reading en 1992, sorti en 2009.",
        year: 2009,
        image: "assets/img/vinyls/live_at_reading.jpg"
    },
    {
        title: "Live at the Paramount",
        description: "Concert enregistré en 1991 et sorti officiellement en 2019.",
        year: 2019,
        image: "assets/img/vinyls/live_at_the_paramount.jpg"
    },
    {
        title: "Live and Loud",
        description: "Concert filmé en 1993 et sorti officiellement en 2019.",
        year: 2019,
        image: "assets/img/vinyls/live_and_loud.jpg"
    }
];

const albumImage = document.getElementById("album-image");
const albumItems = document.querySelectorAll("#album-list li");

// Affichage initial
albumImage.src = albums[0].image;
albumImage.alt = albums[0].title;
albumItems[0].classList.add("active");

albumItems.forEach((li, index) => {
    li.addEventListener("click", function () {
        if (albumImage.src !== albums[index].image) {
            document.querySelectorAll("#album-list li").forEach(el => el.classList.remove("active"));
            li.classList.add("active");

            // Ajouter la classe de sortie
            albumImage.classList.add("slide-out");

            setTimeout(() => {
                // Avant de changer l’image, on enlève les classes pour éviter le rebond
                albumImage.classList.remove("slide-in", "slide-out");

                // Mettre à jour l’image
                albumImage.src = albums[index].image;
                albumImage.alt = "Image de l'album " + albums[index].title;

                // Ajouter la classe d’entrée après un petit délai
                setTimeout(() => {
                    albumImage.classList.add("slide-in");
                }, 10);
            }, 500);
        }
    });
});

