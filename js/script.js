// Scroll olayında header'ı güncelle
let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.classList.remove("scroll-up");
    return;
  }

  if (currentScroll > lastScroll && !header.classList.contains("scroll-down")) {
    // Aşağı scroll
    header.classList.remove("scroll-up");
    header.classList.add("scroll-down");
  } else if (
    currentScroll < lastScroll &&
    header.classList.contains("scroll-down")
  ) {
    // Yukarı scroll
    header.classList.remove("scroll-down");
    header.classList.add("scroll-up");
  }
  lastScroll = currentScroll;
});

// Tam ekran galeri işlevselliği
const modal = document.querySelector(".fullscreen-modal");
const modalImg = modal?.querySelector("img");
const galleryItems = document.querySelectorAll(".gallery-item");
const closeBtn = document.querySelector(".modal-close");
const prevBtn = document.querySelector(".modal-prev");
const nextBtn = document.querySelector(".modal-next");
let currentIndex = 0;

// Eğer gerekli elementler yoksa işlemi durdur
if (!modal || !modalImg || !closeBtn || !prevBtn || !nextBtn) {
  console.error("Gerekli DOM elementleri bulunamadı");
} else {
  // Galeri görsellerine tıklama
  galleryItems.forEach((item, index) => {
    const img = item.querySelector("img");
    if (img) {
      item.addEventListener("click", () => {
        currentIndex = index;
        modalImg.src = img.src;
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        setTimeout(() => {
          modal.classList.add("active");
        }, 10);
      });
    }
  });

  // Kapatma butonu
  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeModal();
  });

  // Önceki/Sonraki butonları
  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    prevImage();
  });

  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    nextImage();
  });

  // Modal'a tıklayınca kapatma (arka plana tıklayınca)
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Klavye kontrolleri
  document.addEventListener("keydown", (e) => {
    if (modal.style.display === "block") {
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "ArrowRight") {
        nextImage();
      }
    }
  });

  // Modal'ı kapatma fonksiyonu
  function closeModal() {
    modal.classList.remove("active");
    setTimeout(() => {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }, 300);
  }

  // Önceki/Sonraki görsel
  function prevImage() {
    currentIndex =
      (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    updateModalImage();
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    updateModalImage();
  }

  function updateModalImage() {
    const img = galleryItems[currentIndex]?.querySelector("img");
    if (img) {
      modalImg.style.opacity = "0";
      modalImg.style.transform = "translate(-50%, -50%) scale(0.9)";

      setTimeout(() => {
        modalImg.src = img.src;
        modalImg.style.opacity = "1";
        modalImg.style.transform = "translate(-50%, -50%) scale(1)";
      }, 300);
    }
  }
}

// Video tam ekran
const mainVideo = document.querySelector(".main-video video");
if (mainVideo) {
  mainVideo.addEventListener("click", () => {
    if (mainVideo.requestFullscreen) {
      mainVideo.requestFullscreen();
    } else if (mainVideo.webkitRequestFullscreen) {
      mainVideo.webkitRequestFullscreen();
    } else if (mainVideo.msRequestFullscreen) {
      mainVideo.msRequestFullscreen();
    }
  });
}

// Sayfa yüklendiğinde çalışacak kod
window.addEventListener("load", () => {
  // Galeri elemanları
  const modal = document.querySelector(".fullscreen-modal");
  const modalImg = modal?.querySelector("img");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const closeBtn = document.querySelector(".modal-close");
  const prevBtn = document.querySelector(".modal-prev");
  const nextBtn = document.querySelector(".modal-next");
  let currentIndex = 0;

  // Eğer gerekli elementler yoksa işlemi durdur
  if (!modal || !modalImg || !closeBtn || !prevBtn || !nextBtn) {
    console.error("Gerekli DOM elementleri bulunamadı");
  } else {
    // Galeri görsellerine tıklama
    galleryItems.forEach((item, index) => {
      const img = item.querySelector("img");
      if (img) {
        item.addEventListener("click", () => {
          currentIndex = index;
          modalImg.src = img.src;
          modal.style.display = "block";
          document.body.style.overflow = "hidden";
          setTimeout(() => {
            modal.classList.add("active");
          }, 10);
        });
      }
    });

    // Kapatma butonu
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeModal();
    });

    // Önceki/Sonraki butonları
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      prevImage();
    });

    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      nextImage();
    });

    // Modal'a tıklayınca kapatma (arka plana tıklayınca)
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    // Klavye kontrolleri
    document.addEventListener("keydown", (e) => {
      if (modal.style.display === "block") {
        if (e.key === "Escape") {
          closeModal();
        } else if (e.key === "ArrowLeft") {
          prevImage();
        } else if (e.key === "ArrowRight") {
          nextImage();
        }
      }
    });

    // Modal'ı kapatma fonksiyonu
    function closeModal() {
      modal.classList.remove("active");
      setTimeout(() => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      }, 300);
    }

    // Önceki/Sonraki görsel
    function prevImage() {
      currentIndex =
        (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      updateModalImage();
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % galleryItems.length;
      updateModalImage();
    }

    function updateModalImage() {
      const img = galleryItems[currentIndex]?.querySelector("img");
      if (img) {
        modalImg.style.opacity = "0";
        modalImg.style.transform = "translate(-50%, -50%) scale(0.9)";

        setTimeout(() => {
          modalImg.src = img.src;
          modalImg.style.opacity = "1";
          modalImg.style.transform = "translate(-50%, -50%) scale(1)";
        }, 300);
      }
    }
  }

  // Video tam ekran
  const mainVideo = document.querySelector(".main-video video");
  if (mainVideo) {
    mainVideo.addEventListener("click", () => {
      if (mainVideo.requestFullscreen) {
        mainVideo.requestFullscreen();
      } else if (mainVideo.webkitRequestFullscreen) {
        mainVideo.webkitRequestFullscreen();
      } else if (mainVideo.msRequestFullscreen) {
        mainVideo.msRequestFullscreen();
      }
    });
  }
});
