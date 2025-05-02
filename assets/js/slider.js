
  // Dati immagini
  const images = [
    { src: "assets/img/tombraider.jpg", caption: "Tomb Raider" },
    { src: "assets/img/quake.jpg", caption: "Quake 1" },
    { src: "assets/img/gta5.jpg", caption: "Grand theft auto 5" }
  ];

  // Slider 1: caption sotto
  let indexBottom = 0;
  function showBottom(i) {
    indexBottom = (i + images.length) % images.length;
    document.getElementById("slider-img-bottom").src = images[indexBottom].src;
    document.getElementById("caption-bottom").textContent = images[indexBottom].caption;
  }
  setInterval(() => showBottom(indexBottom + 1), 5000);

  // Slider 2: caption sovrapposta
  let indexOverlay = 0;
  function showOverlay(i) {
    indexOverlay = (i + images.length) % images.length;
    document.getElementById("slider-img-overlay").src = images[indexOverlay].src;
    document.getElementById("caption-overlay").textContent = images[indexOverlay].caption;
  }
  setInterval(() => showOverlay(indexOverlay + 1), 5000);

  // Toggle tra slider
  function toggleSlider() {
    const bottom = document.getElementById("slider-bottom");
    const overlay = document.getElementById("slider-overlay");
    if (bottom.style.display === "none") {
      bottom.style.display = "block";
      overlay.style.display = "none";
    } else {
      bottom.style.display = "none";
      overlay.style.display = "block";
    }
  }

  // Mostra subito prima immagine all'avvio
  showBottom(indexBottom);
  showOverlay(indexOverlay);

