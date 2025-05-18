function updateTimeDiff() {
    const elements = document.querySelectorAll(".js-time-diff");

    function format(seconds) {
        const abs = Math.abs(seconds);
        const sign = seconds < 0 ? "-" : "";
        const hours = Math.floor(abs / 3600);
        const minutes = Math.floor((abs % 3600) / 60);
        const secs = abs % 60;
        return `${sign}${hours}h ${minutes}m ${secs}s`;
    }

    elements.forEach(el => {
        const datetimeStr = el.dataset.target;
        const offset = parseInt(el.dataset.offset || "0", 10) * 3600;

        const targetTime = new Date(datetimeStr);
        if (isNaN(targetTime)) {
            el.textContent = "[Invalid date]";
            return;
        }

        function update() {
            const now = new Date();
            const diffSeconds = Math.floor((targetTime.getTime() - now.getTime()) / 1000) - offset;
            el.textContent = format(diffSeconds);
        }

        update(); // run once immediately
        setInterval(update, 1000); // then update every second
    });
}
updateTimeDiff()
