// Dados dos poços
const wellsData = [
    {
        id: 1,
        municipality: "Piancó/PB",
        location: "EEEFM Beatriz Loureiro Lopes (Poço Vandalizado)",
        depth: 80,
        drilling: "2015 (Jun)",
        installation: "2015 (Jun)",
        cost: "R$ 8.000,00",
        sponsor: "Constanza Pascoiato",
        lat: -7.1956,
        lng: -37.9245,
        status: "installed"
    },
    {
        id: 2,
        municipality: "Piancó/PB",
        location: "Conjunto Socorro Brasilino (ONG Missão Josué) (Poço 11)",
        depth: 43,
        drilling: "2016 (Ago)",
        installation: "2016 (Ago)",
        cost: "R$ 5.492,00",
        sponsor: "Constanza Pascoiato",
        lat: -7.1856,
        lng: -37.9345,
        status: "installed"
    },
    {
        id: 3,
        municipality: "Piancó/PB",
        location: "EMEIF Maria de Lourdes Paulino (Poço Seco)",
        depth: 50,
        drilling: "2016 (Nov)",
        installation: "Não Instalado",
        cost: "R$ 2.000,00",
        sponsor: "Poço Seco",
        lat: -7.2056,
        lng: -37.9145,
        status: "not_installed"
    },
    {
        id: 4,
        municipality: "Piancó/PB",
        location: "Escola estadual de Ensino Médio Inovador (Poço 12)",
        depth: 50,
        drilling: "2016 (Nov)",
        installation: "2016 (Nov)",
        cost: "R$ 10.500,00",
        sponsor: "Constanza Pascoiato",
        lat: -7.1756,
        lng: -37.9445,
        status: "installed"
    },
    {
        id: 5,
        municipality: "Piancó/PB",
        location: "Creche Municipal Cecília Maria (Poço 1)",
        depth: 35,
        drilling: "2017 (Maio)",
        installation: "2017 (Maio)",
        cost: "R$ 5.250,00",
        sponsor: "Amir Silva",
        lat: -7.1656,
        lng: -37.9545,
        status: "installed"
    },
    {
        id: 6,
        municipality: "Piancó/PB",
        location: "EMEIF Luciano Freire de Farias (Poço 2)",
        depth: 44,
        drilling: "2017 (Maio)",
        installation: "2017 (Maio)",
        cost: "R$ 5.250,00",
        sponsor: "Julio Okubo",
        lat: -7.2156,
        lng: -37.9045,
        status: "installed"
    },
    {
        id: 7,
        municipality: "Piancó/PB",
        location: "EMEIF Pedro Inocêncio da Silva - COM.Rural Pocinhos (Poço 3)",
        depth: 28,
        drilling: "2017 (Maio)",
        installation: "2017 (Maio)",
        cost: "R$ 5.250,00",
        sponsor: "Donata Meirelles",
        lat: -7.1556,
        lng: -37.9645,
        status: "installed"
    },
    {
        id: 8,
        municipality: "Piancó/PB",
        location: "Comunidade Rural Gravatá de Baixo (Poço 4)",
        depth: 57,
        drilling: "2017 (Maio)",
        installation: "2017 (Maio)",
        cost: "R$ 6.050,00",
        sponsor: "Daniela Falcão",
        lat: -7.2256,
        lng: -37.8945,
        status: "installed"
    },
    {
        id: 9,
        municipality: "Santana do Garrotes/PB",
        location: "EMEIF Maria Santarinha de Azevedo (Poço 5)",
        depth: 34,
        drilling: "2017 (Maio)",
        installation: "2017 (Maio)",
        cost: "R$ 5.250,00",
        sponsor: "Rest. Hendricks / The Society Model Management",
        lat: -7.3656,
        lng: -37.9845,
        status: "installed"
    },
    {
        id: 10,
        municipality: "Santana do Garrotes/PB",
        location: "Comunidade Rural Curral Velho (Poço 6)",
        depth: 44,
        drilling: "2017 (Maio)",
        installation: "Prefeitura",
        cost: "R$ 5.250,00",
        sponsor: "Bazar Amor por Estilo",
        lat: -7.3756,
        lng: -37.9745,
        status: "installed"
    },
    {
        id: 11,
        municipality: "Santana do Garrotes/PB",
        location: "Comunidade Rural Gangorra (Poço 7)",
        depth: 70,
        drilling: "2017 (Maio)",
        installation: "Prefeitura",
        cost: "R$ 6.250,00",
        sponsor: "Bazar Amor por Estilo / Herchovich Mr. Alexandre",
        lat: -7.3556,
        lng: -37.9945,
        status: "installed"
    },
    {
        id: 12,
        municipality: "Santana do Garrotes/PB",
        location: "EMEIF Julio Laurindo de Almeida - Pitombeira de Dentro (Poço 8)",
        depth: 47,
        drilling: "2017 (Maio)",
        installation: "Prefeitura",
        cost: "R$ 5.250,00",
        sponsor: "Paulo Borges",
        lat: -7.3456,
        lng: -38.0045,
        status: "installed"
    },
    {
        id: 13,
        municipality: "Piancó/PB",
        location: "EMEIF Maria de Lourdes Freitas Dantas (Poço 9)",
        depth: 50,
        drilling: "2017 (Jun)",
        installation: "2017 (Jun)",
        cost: "R$ 9.900,00",
        sponsor: "Sprogtheffer",
        lat: -7.1456,
        lng: -37.9745,
        status: "installed"
    },
    {
        id: 14,
        municipality: "Piancó/PB",
        location: "Hospital Regional Wenceslau Lopes (Poço 10)",
        depth: 150,
        drilling: "2017 (Jun)",
        installation: "2017 (Jun)",
        cost: "R$ 19.286,00",
        sponsor: "Friends S2gether",
        lat: -7.1956,
        lng: -37.9245,
        status: "installed"
    },
    {
        id: 15,
        municipality: "Piancó/PB",
        location: "Missão Evangélica Pentecostal do Brasil (Obra Social) (Poço 13)",
        depth: 120,
        drilling: "2017 (Dez)",
        installation: "2018 (Fev)",
        cost: "R$ 16.908,00",
        sponsor: "El Shadai",
        lat: -7.2056,
        lng: -37.9345,
        status: "installed"
    },
    {
        id: 16,
        municipality: "Piancó/PB",
        location: "Comunidade Rural Junco (Poço 14)",
        depth: 70,
        drilling: "2017 (Dez)",
        installation: "2018 (Fev)",
        cost: "R$ 10.161,00",
        sponsor: "Elyzer",
        lat: -7.1756,
        lng: -37.9845,
        status: "installed"
    },
    {
        id: 17,
        municipality: "Santana do Garrotes/PB",
        location: "Comunidade Rural Palestina (Poço 15)",
        depth: 50,
        drilling: "2017 (Dez)",
        installation: "2018 (Fev)",
        cost: "R$ 9.205,00",
        sponsor: "Javé-Rapha",
        lat: -7.3856,
        lng: -37.9645,
        status: "installed"
    },
    {
        id: 18,
        municipality: "Boa Ventura/PB",
        location: "Conjunto Habitacional Flávio Arruda (ONG Missão Josué) (Poço 16)",
        depth: 80,
        drilling: "2017 (Dez)",
        installation: "2018 (Fev)",
        cost: "R$ 11.377,00",
        sponsor: "Kadosh",
        lat: -7.8756,
        lng: -38.2345,
        status: "installed"
    },
    {
        id: 19,
        municipality: "Olho D'água/PB",
        location: "EMEIF Manoel Procópio de Araújo (Sítio De Socorro) (Poço 17)",
        depth: 45,
        drilling: "2017 (Dez)",
        installation: "2018 (Fev)",
        cost: "R$ 7.316,00",
        sponsor: "Eloim",
        lat: -7.5456,
        lng: -38.1145,
        status: "installed"
    },
    {
        id: 20,
        municipality: "Piancó/PB",
        location: "3ª Companhia de PMPE (13º BPM/PB) (Poço 18)",
        depth: 98,
        drilling: "2018 (Abril)",
        installation: "2018 (Abril)",
        cost: "R$ 14.957,00",
        sponsor: "Claudia Raia",
        lat: -7.1856,
        lng: -37.9145,
        status: "installed"
    }
];

// Inicializar o mapa centrado na região dos poços (Piancó/PB)
const map = L.map('map').setView([-7.3, -38.0], 9);

// Adicionar camada do mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Ícones personalizados
const installedIcon = L.divIcon({
    className: 'custom-div-icon',
    html: `<div style="
        background: linear-gradient(135deg, #27ae60, #2ecc71);
        border: 3px solid white;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: 12px;
        box-shadow: 0 3px 10px rgba(0,0,0,0.3);
    ">💧</div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15]
});

const notInstalledIcon = L.divIcon({
    className: 'custom-div-icon',
    html: `<div style="
        background: linear-gradient(135deg, #e74c3c, #c0392b);
        border: 3px solid white;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: 12px;
        box-shadow: 0 3px 10px rgba(0,0,0,0.3);
    ">⚠️</div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15]
});

// Adicionar marcadores para cada poço
wellsData.forEach(well => {
    const icon = well.status === 'installed' ? installedIcon : notInstalledIcon;
    const statusText = well.status === 'installed' ? 'Instalado' : 'Não Instalado';
    const statusClass = well.status === 'installed' ? 'status-installed' : 'status-not-installed';
    
    const popupContent = `
        <div class="custom-popup">
            <div class="popup-header">
                <div class="popup-title">Poço #${well.id}</div>
                <div class="popup-subtitle">${well.municipality}</div>
            </div>
            <div class="popup-content">
                <div class="info-row">
                    <span class="info-label">Local:</span>
                    <span class="info-value">${well.location}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Profundidade:</span>
                    <span class="info-value">${well.depth}m</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Perfuração:</span>
                    <span class="info-value">${well.drilling}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Status:</span>
                    <span class="info-value ${statusClass}">${statusText}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Custo:</span>
                    <span class="info-value">${well.cost}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Patrocinador:</span>
                    <span class="info-value">${well.sponsor}</span>
                </div>
            </div>
        </div>
    `;
    
    L.marker([well.lat, well.lng], { icon: icon })
        .bindPopup(popupContent, {
            maxWidth: 350,
            className: 'custom-popup-container'
        })
        .addTo(map);
});

// Animação de entrada dos marcadores
setTimeout(() => {
    map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
            const element = layer.getElement();
            if (element) {
                element.style.animation = 'bounceIn 0.6s ease-out';
                element.style.animationDelay = Math.random() * 2 + 's';
            }
        }
    });
}, 500);