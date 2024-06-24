// Objek untuk menyimpan pengaturan
const settings = {
    title: "Vynaa Valerie | Always happy",
    metaTitle: "Vynaa Valerie|| Always happy",
    metaDescription: "Developer & Creator",
    metaKeywords: "Vynaa, profil, siapa Vynaa?",
    metaRobots: "index, follow",
    profileImage: "media/profile.jpg",
    name: "Vynaa Valerie ",
    occupation: "Creator & Developer",
    location: "📍 Pekanbaru, Riau, Indonesia",
    socialLinks: [
        { name: "Instagram", url: "https://instagram.com/vynaa_valerie" },
        { name: "WhatsApp", url: "https://wa.me/message/2MOJNXNC45Y5E1" },
        { name: "YouTube", url: "https://youtube.com/@VynaaChan" },
        { name: "Facebook", url: "https://facebook.com/your-facebook" },
        { name: "Donasi", url: "https://saweria.co/vynaabot" },
        { name: "Github", url: "https://github.com/VynaaValerie" }
        // Tambahkan link sosial lainnya di sini
    ]
};

// Fungsi untuk mengisi konten halaman dari settings.js
function fillContent() {
    document.title = settings.title;
    document.getElementById("meta-title").setAttribute("content", settings.metaTitle);
    document.getElementById("meta-description").setAttribute("content", settings.metaDescription);
    document.getElementById("meta-keywords").setAttribute("content", settings.metaKeywords);
    document.getElementById("meta-robots").setAttribute("content", settings.metaRobots);
    document.getElementById("profile-image").setAttribute("src", settings.profileImage);
    document.querySelector(".name").textContent = settings.name;
    document.getElementById("occupation").textContent = settings.occupation;
    document.getElementById("location").innerHTML = `<i class="fa fa-map-marker icon" aria-hidden="true"></i> ${settings.location}`;

    const socialLinksContainer = document.getElementById("social-links");
    settings.socialLinks.forEach(link => {
        const linkElement = document.createElement("a");
        linkElement.setAttribute("href", link.url);
        linkElement.setAttribute("target", "_blank");
        linkElement.textContent = link.name;
        socialLinksContainer.appendChild(linkElement);
    });

    // Menambahkan centang hijau
    const checkmark = document.createElement("div");
    checkmark.classList.add("checkmark");
    document.querySelector(".verified").appendChild(checkmark);
}

// Memanggil fungsi untuk mengisi konten saat halaman dimuat
fillContent();
