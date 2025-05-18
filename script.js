const span = document.getElementById("countdown");
  const endTime = new Date(span.dataset.time);

  function updateCountdown() {
    const now = new Date();
    const diff = endTime - now;

    if (diff <= 0) {
      span.textContent = "TODAY!!!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    span.textContent = `${days}d ${hours}h ${mins}m ${secs}s`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
