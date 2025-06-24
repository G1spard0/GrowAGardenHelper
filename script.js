async function loadData() {
  try {
    const res = await fetch('data.json');
    const data = await res.json();

    const seedShop = document.getElementById('seed-shop');
    const gearShop = document.getElementById('gear-shop');
    const weather = document.getElementById('weather');
    const lastUpdated = document.getElementById('last-updated');

    seedShop.innerHTML = data.seedShop.map(item => `<li>${item}</li>`).join('');
    gearShop.innerHTML = data.gearShop.map(item => `<li>${item}</li>`).join('');
    weather.textContent = data.weather;

    const date = new Date(data.updatedAt);
    lastUpdated.textContent = date.toLocaleString();
  } catch (err) {
    console.error('Error loading data:', err);
  }
}

loadData();
