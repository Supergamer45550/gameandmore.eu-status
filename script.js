//Script für Pingen der Website

async function checkServer(serverId, url) {
    try {
        const response = await fetch(url, { method: 'HEAD', mode: 'no-cors' });
        document.querySelector(`#${serverId} span`).textContent = "Online";
        document.querySelector(`#${serverId}`).classList.add("online");
    } catch (error) {
        document.querySelector(`#${serverId} span`).textContent = "Offline";
        document.querySelector(`#${serverId}`).classList.add("offline");
    }
}

function updateStatus() {
checkServer("server1", "https://dev.gameandmore.eu/");
checkServer("server2", "https:/forum.gameandmore.eu");
checkServer("status-server", "https://supergamer45550.github.io/gameandmore.eu-status/");
}


updateStatus();
setInterval(updateStatus, 5000); 