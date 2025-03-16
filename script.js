document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Mencegah form dari pengiriman langsung

  // Ambil nilai input
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Cek validasi login (contoh: username: admin, password: 12345)
  if (username === "admin" && password === "12345") {
      alert("Login berhasil!");
      document.getElementById("loginPage").style.display = "none";
      document.getElementById("dialogPage").style.display = "block";
      showNextLine(); // Memulai dialog
  } else {
      document.getElementById("error-message").innerText = "Username atau password salah.";
      document.getElementById("error-message").style.display = "block";
  }
});

const dialogLines = [
  "????: \"sekarang bagaimana ini?! Mereka mengancam bahwa mereka mengetahui keluarga ku?! Apa kau sengaja menjadikan kami sebagai umpan?! Ya?! Sebagai cuci tangan mu?!\"",
  "Kegaduhan terdengar dari saluran telefon itu. Sepertinya keadaan didalam sana sangatlah kacau, karena salah satu perampok itu berhasil di bongkar.",
  "????: \"tenangkanlah dirimu, (???). Kita bisa menggunakan rencana kedua. Agar Kalian bisa keluar dari sana hidup hidup.\"",
  "????: \"aku akan menyerahkan diriku!! Dan keluar dari rencana busuk mu ini! Sialan!\"",
  "Namun tak lama setelah itu terdengar suara tembakan yang di Kegaduhan sepertinya terdengar semakin kacau.",
  "????: \"jika kau ingin sebegitunya menyerahkan diri, lebih baik ku bunuh saja kau sekalian keparat.\"",
  "????: \"hentikan, (???) Jalankan rencana kedua, kumpulkan seluruh sandera ke tempat dimana mereka...(1). Lalu (???) Bawalah manager bank menuju ke tempat dimana..(2). Kita tunggu sampai mereka melakukan apa yang kita minta\"",
  "????: \"ada satu masalah disini, kita tak punya banyak waktu-\"",
  "????: \"bunuh semua sandera jika rencana kita tak berjalan dalam waktu 1 jam, para polisi sialan itu akan merasakan akibatnya karena mereka berani mendengar percakapan kita.\""
];

const dialogContainer = document.getElementById("dialog");
const gunshotSound = document.getElementById("gunshot-sound");

let index = 0;

function showNextLine() {
  if (index < dialogLines.length) {
      const line = document.createElement("div");
      line.className = "dialog-line";
      line.textContent = dialogLines[index];

      if (dialogLines[index].includes("tembakan")) {
          line.classList.add("gunshot");
          gunshotSound.play();
      }

      dialogContainer.appendChild(line);

      setTimeout(() => {
          line.style.opacity = 1;
          line.style.transform = "translateX(0)";
      }, 100);

      index++;
      setTimeout(showNextLine, 2000);
  } else {
      const finalLine = document.createElement("div");
      finalLine.className = "dialog-line final";
      finalLine.textContent = "Rekaman CCTV berakhir.";
      dialogContainer.appendChild(finalLine);
  }
}
