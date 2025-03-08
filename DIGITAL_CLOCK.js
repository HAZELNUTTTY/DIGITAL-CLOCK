function detectBrowser() {
  const userAgent = navigator.userAgent;
  let browser = "Browser tidak dikenal";
  let version = "Versi tidak ditemukan";

  if (userAgent.includes("Chrome") && !userAgent.includes("Edg")) {
    browser = "Google Chrome";
    const match = userAgent.match(/Chrome\/([\d.]+)/);
    version = match ? match[1] : version;
  } else if (userAgent.includes("Firefox")) {
    browser = "Mozilla Firefox";
    const match = userAgent.match(/Firefox\/([\d.]+)/);
    version = match ? match[1] : version;
  } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
    browser = "Apple Safari";
    const match = userAgent.match(/Version\/([\d.]+)/);
    version = match ? match[1] : version;
  } else if (userAgent.includes("Edg")) {
    browser = "Microsoft Edge";
    const match = userAgent.match(/Edg\/([\d.]+)/);
    version = match ? match[1] : version;
  } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
    browser = "Opera";
    const match = userAgent.match(/(Opera|OPR)\/([\d.]+)/);
    version = match ? match[2] : version;
  }

  return `${browser} (v${version})`;
}

function updateClock() {
  const now = new Date();

  // membuat objek clock
  const clock = {
    am_pm: now.getHours() >= 12 ? "PM" : "AM",
    hours: now.getHours() % 12 || 12,
    minutes: String(now.getMinutes()).padStart(2, "0"),
    seconds: String(now.getSeconds()).padStart(2, "0"),
    day: now.toLocaleString("en-us", { weekday: "long" }),
    date: now.getDate(),
    month: now.toLocaleString("en-us", { month: "long" }),
    year: now.getFullYear(),
  };

  // deteksi browser dan versinya
  const browserInfo = detectBrowser();

  // format output clock
  const clockDisplay = `const clock = {
am_pm: ${clock.am_pm}
hours: ${clock.hours}
minutes: ${clock.minutes}
seconds: ${clock.seconds}
day: ${clock.day}
date: ${clock.date}
month: ${clock.month}
year: ${clock.year}
browser: ${browserInfo}
};`;

  // menampilkan hasil di elemen HTML dengan id "clock"
  document.getElementById("clock").textContent = clockDisplay;
}

// Memperbarui setiap detik
setInterval(updateClock, 1000);
updateClock();