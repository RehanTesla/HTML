function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");
    const ms = String(now.getMilliseconds()).padStart(3, "0");

    document.getElementById("clock").textContent = `${h}:${m}:${s}.${ms}`;

    const days = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu"
    ];
    const months = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember"
    ];
    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const date = now.toLocaleDateString("id-ID");

    document.getElementById("date").textContent = `${day}, ${month}, ${date}`;
}

setInterval(updateClock, 1);
