function bukaURL() {
    var url = document.getElementById("urlInput").value;

    if (url) {
        try {
            new URL(url);
            window.open(url, "_blank");
        } catch (_) {
            alert("URL tidak valid.");
        }
    } else {
        alert("Silakan masukkan URL.");
    }
}
