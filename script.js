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
    },
    {
        id: 21,
        municipality: "Piancó/PB",
        location: "Igreja de Nossa Senhora da Conceição (Piancozinho) (Poço 19)",
        depth: 100,
        drilling: "2018 (Abril)",
        installation: "2018 (Abril)",
        cost: "R$ 14.400,00",
        sponsor: "Claudia Raia",
        lat: -7.1656,
        lng: -37.9145,
        status: "installed"
    },
    {
        id: 22,
        municipality: "Santana dos Garrotes/PB",
        location: "Comunidade Rural Alto da Palestina (Poço 20)",
        depth: 60,
        drilling: "2018 (Abril)",
        installation: "2018 (Abril)",
        cost: "R$ 11.186,00",
        sponsor: "Claudia Raia",
        lat: -7.3956,
        lng: -37.9545,
        status: "installed"
    },
    {
        id: 23,
        municipality: "Serra Grande/PB",
        location: "Comunidade Rural Lourenço (Poço 21)",
        depth: 50,
        drilling: "2018 (Abril)",
        installation: "2018 (Abril)",
        cost: "R$ 10.971,00",
        sponsor: "Ronaldo Fenômeno e Celina Locks",
        lat: -6.9556,
        lng: -38.3345,
        status: "installed"
    },
    {
        id: 24,
        municipality: "Piancó/PB",
        location: "Comunidade Rural de Pilões I (Viveiro de Plantas Nativas) (Poço 22)",
        depth: 100,
        drilling: "2018 (Abril)",
        installation: "2018 (Abril)",
        cost: "R$ 19.733,00",
        sponsor: "Edson Arantes do Nascimento (Pelé)",
        lat: -7.2256,
        lng: -37.9545,
        status: "installed"
    },
    {
        id: 25,
        municipality: "Piancó/PB",
        location: "ONG Arca dos Anjos Sem Asas (Com. Rural Carneiro) (Poço 23)",
        depth: 100,
        drilling: "2018 (Dez)",
        installation: "2019 (Abril)",
        cost: "R$ 17.677,00",
        sponsor: "Emilia Pedersen",
        lat: -7.1356,
        lng: -37.9945,
        status: "installed"
    },
    {
        id: 26,
        municipality: "Santana dos Garrotes/PB",
        location: "Assentamento Cedro (Com. Rural Cedro) (Poço 24)",
        depth: 52,
        drilling: "2018 (Dez)",
        installation: "Prefeitura",
        cost: "R$ 3.700,00",
        sponsor: "Dr. Eduardo Gomes de Azevedo",
        lat: -7.3256,
        lng: -38.0245,
        status: "installed"
    },
    {
        id: 27,
        municipality: "Nova Olinda/PB",
        location: "Projeto Transformai (Distrito de Mangueza) (Poço 25)",
        depth: 70,
        drilling: "2018 (Dez)",
        installation: "2019 (Abril)",
        cost: "R$ 12.687,00",
        sponsor: "Dr. José Câmara",
        lat: -7.4756,
        lng: -38.0445,
        status: "installed"
    },
    {
        id: 28,
        municipality: "Santana dos Garrotes/PB",
        location: "Distrito de Palestina (área urbana) (Poço 26)",
        depth: 86,
        drilling: "2018 (Dez)",
        installation: "Prefeitura",
        cost: "R$ 7.100,00",
        sponsor: "Edu Gasper",
        lat: -7.3856,
        lng: -37.9545,
        status: "installed"
    },
    {
        id: 29,
        municipality: "Santana dos Garrotes/PB",
        location: "Comunidade Rural Caiçara (Poço 27)",
        depth: 52,
        drilling: "2018 (Dez)",
        installation: "Prefeitura",
        cost: "R$ 3.700,00",
        sponsor: "Neymar Jr.",
        lat: -7.3356,
        lng: -38.0145,
        status: "installed"
    },
    {
        id: 30,
        municipality: "Piancó/PB",
        location: "Projeto Orcarzinho (Comunidade rural Ferrão) (Poço 28)",
        depth: 73,
        drilling: "2018 (Dez)",
        installation: "2019 (Abril)",
        cost: "R$ 11.919,00",
        sponsor: "Ronaldo Fenômeno",
        lat: -7.2456,
        lng: -37.9045,
        status: "installed"
    },
    {
        id: 31,
        municipality: "Piancó/PB",
        location: "Comunidade Rural Pitombeira (Poço 1) (Poço 29)",
        depth: 50,
        drilling: "2018 (Dez)",
        installation: "2019 (Abril)",
        cost: "R$ 10.986,00",
        sponsor: "Pelé",
        lat: -7.1256,
        lng: -37.9445,
        status: "installed"
    },
    {
        id: 32,
        municipality: "Piancó/PB",
        location: "Comunidade Rural Pitombeira (Poço 2) (Poço 30)",
        depth: 101,
        drilling: "2018 (Dez)",
        installation: "2019 (Abril)",
        cost: "R$ 19.702,00",
        sponsor: "Amir Slama",
        lat: -7.1156,
        lng: -37.9545,
        status: "installed"
    },
    {
        id: 33,
        municipality: "Piancó/PB",
        location: "Comunidade Rural Xique-xique/Saboeiro (Poço 31)",
        depth: 80,
        drilling: "2018 (Dez)",
        installation: "2019 (Abril)",
        cost: "R$ 15.785,00",
        sponsor: "Clemilda Thomé",
        lat: -7.2356,
        lng: -37.8845,
        status: "installed"
    },
    {
        id: 34,
        municipality: "Santana dos Garrotes/PB",
        location: "Comunidade Rural Caiçara dos Leites (Poço 32)",
        depth: 30,
        drilling: "2018 (Dez)",
        installation: "Prefeitura",
        cost: "R$ 3.500,00",
        sponsor: "Clemilda Thomé",
        lat: -7.3456,
        lng: -38.0345,
        status: "installed"
    },
    {
        id: 35,
        municipality: "Itaporanga/PB",
        location: "Hospital Distrital Dr. José Gomes da Silva (Poço 33)",
        depth: 60,
        drilling: "2018 (Abril)",
        installation: "2019 (Abril)",
        cost: "R$ 11.523,00",
        sponsor: "Clemilda Thomé",
        lat: -7.2956,
        lng: -38.1545,
        status: "installed"
    },
    {
        id: 36,
        municipality: "Serra Grande/PB",
        location: "Comunidade Rural Capim Verde (Poço 1) (Poço 34)",
        depth: 60,
        drilling: "2018 (Dez)",
        installation: "Prefeitura",
        cost: "R$ 4.500,00",
        sponsor: "Clemilda Thomé",
        lat: -6.9656,
        lng: -38.3445,
        status: "installed"
    },
    {
        id: 37,
        municipality: "Serra Grande/PB",
        location: "Comunidade Rural Capim Verde (Poço 2) (Poço 35)",
        depth: 86,
        drilling: "2018 (Dez)",
        installation: "Prefeitura",
        cost: "R$ 7.100,00",
        sponsor: "Clemilda Thomé",
        lat: -6.9756,
        lng: -38.3545,
        status: "installed"
    },
    {
        id: 38,
        municipality: "Serra Grande/PB",
        location: "Comunidade Rural Nicó (Poço 36)",
        depth: 102,
        drilling: "2018 (Dez)",
        installation: "Não Instalado",
        cost: "R$ 8.700,00",
        sponsor: "Poço Seco",
        lat: -6.9456,
        lng: -38.3245,
        status: "not_installed"
    },
    {
        id: 39,
        municipality: "Serra Grande/PB",
        location: "Comunidade Rural Espera (Poço 37)",
        depth: 75,
        drilling: "2018 (Dez)",
        installation: "Prefeitura",
        cost: "R$ 6.000,00",
        sponsor: "Bazar Iódice",
        lat: -6.9856,
        lng: -38.3645,
        status: "installed"
    },
    {
        id: 40,
        municipality: "Serra Grande/PB",
        location: "Comunidade Rural Timbaúba (Poço 38)",
        depth: 80,
        drilling: "2018 (Dez)",
        installation: "Não Instalado",
        cost: "R$ 6.500,00",
        sponsor: "Poço Seco",
        lat: -6.9356,
        lng: -38.3145,
        status: "not_installed"
    },
    {
        id: 41,
        municipality: "Emas/PB",
        location: "1ª Igreja Batista de Emas (Obra Social) (Poço 39)",
        depth: 102,
        drilling: "2018 (Dez)",
        installation: "2019 (Abril)",
        cost: "R$ 17.338,00",
        sponsor: "Claudia Martinez",
        lat: -7.0656,
        lng: -37.8745,
        status: "installed"
    },
    {
        id: 42,
        municipality: "Emas/PB",
        location: "EEEFM Profa Margarida Remígio Loureiro (Poço 40)",
        depth: 130,
        drilling: "2018 (Dez)",
        installation: "Não Instalado",
        cost: "R$ 11.500,00",
        sponsor: "Poço Seco",
        lat: -7.0756,
        lng: -37.8845,
        status: "not_installed"
    },
    {
        id: 43,
        municipality: "Piancó/PB",
        location: "Comunidade Rural Santa Cruz/Jatobá (Poço 41)",
        depth: 75,
        drilling: "2019 (Jan)",
        installation: "2019 (Abril)",
        cost: "R$ 14.075,00",
        sponsor: "Hozana Maria Rodrigues das Chagas",
        lat: -7.2556,
        lng: -37.9245,
        status: "installed"
    },
    {
        id: 44,
        municipality: "Piancó/PB",
        location: "Rua João Paulo II, Bairro Cossaco (Poço 42)",
        depth: 40,
        drilling: "2019 (Jan)",
        installation: "2019 (Abril)",
        cost: "R$ 9.385,00",
        sponsor: "Clemilda Thomé",
        lat: -7.1956,
        lng: -37.9345,
        status: "installed"
    },
    {
        id: 45,
        municipality: "Piancó/PB",
        location: "Comunidade Rural Várzea da Cachoeira (Poço 43)",
        depth: 33,
        drilling: "2019 (Jan)",
        installation: "2019 (Abril)",
        cost: "R$ 10.992,00",
        sponsor: "Gustavo Zybersztajn",
        lat: -7.2656,
        lng: -37.8945,
        status: "installed"
    },
    {
        id: 46,
        municipality: "Pedra Branca/PB",
        location: "EMEB Profa. Laura de Sousa Oliveira (Poço 44)",
        depth: 80,
        drilling: "2019 (Março)",
        installation: "2019 (Março)",
        cost: "R$ 15.257,00",
        sponsor: "Colgate-Palmolive",
        lat: -7.4256,
        lng: -38.0645,
        status: "installed"
    },
    {
        id: 47,
        municipality: "Piancó/PB",
        location: "Núcleo de Integração Rural do Sítio Bela Vista (Poço 45)",
        depth: 50,
        drilling: "2019 (Jul)",
        installation: "2019 (Dez)",
        cost: "R$ 12.501,00",
        sponsor: "Jairo Goldflus/Banco Máxima S/A",
        lat: -7.2756,
        lng: -37.9145,
        status: "installed"
    },
    {
        id: 48,
        municipality: "Piancó/PB",
        location: "Comunidade Rural Riacho da Cruz (Poço 46)",
        depth: 50,
        drilling: "2019 (Out)",
        installation: "2019 (Dez)",
        cost: "R$ 11.750,00",
        sponsor: "Banco Máxima S/A",
        lat: -7.2856,
        lng: -37.9045,
        status: "installed"
    },
    {
        id: 49,
        municipality: "Conceição/PB",
        location: "Hospital e Maternidade Caçula Leite (Poço 47)",
        depth: 50,
        drilling: "2019 (Nov)",
        installation: "2019 (Dez)",
        cost: "R$ 9.495,00",
        sponsor: "Banco Máxima S/A",
        lat: -7.5556,
        lng: -38.5045,
        status: "installed"
    },
    {
        id: 50,
        municipality: "Piancó/PB",
        location: "Centro Love Together Brasil (Poço 50)",
        depth: 70,
        drilling: "2021 (Maio)",
        installation: "2022 (Agosto)",
        cost: "R$ 24.540,00",
        sponsor: "Ima Brands e Cado Presentes",
        lat: -7.1956,
        lng: -37.9245,
        status: "installed"
    },
    {
        id: 51,
        municipality: "Piancó/PB",
        location: "Comunidade Rural Santa Cruz/Jatobá 1 (Poço 51)",
        depth: 82,
        drilling: "2023 (Nov)",
        installation: "2024 (Fev)",
        cost: "R$ 26.409,00",
        sponsor: "Pedro Scooby e Pompeu Belusci e Família",
        lat: -7.2456,
        lng: -37.9345,
        status: "installed"
    },
    {
        id: 52,
        municipality: "Piancó/PB",
        location: "Comunidade Rural Santa Cruz Jatobá 2 (Poço 52)",
        depth: 105,
        drilling: "2023 (Nov)",
        installation: "2024 (Fev)",
        cost: "R$ 25.943,00",
        sponsor: "Empresas Nutty Bavarian e Terra Molhada",
        lat: -7.2556,
        lng: -37.9445,
        status: "installed"
    },
    {
        id: 53,
        municipality: "Serra Grande/PB",
        location: "Comunidade Rural Santana (Poço 53)",
        depth: 150,
        drilling: "2023 (Dez)",
        installation: "Prefeitura",
        cost: "R$ 17.930,00",
        sponsor: "Fulvio André de Mena Rebouças",
        lat: -6.9956,
        lng: -38.3745,
        status: "installed"
    },
    {
        id: 54,
        municipality: "Serra Grande/PB",
        location: "Comunidade Rural Aguiar Velho (Poço 54)",
        depth: 100,
        drilling: "2023 (Dez)",
        installation: "Poço Seco",
        cost: "R$ 12.504,00",
        sponsor: "Empresa Jequitiba Investimentos - Poço Seco",
        lat: -7.0056,
        lng: -38.3845,
        status: "not_installed"
    },
    {
        id: 55,
        municipality: "Serra Grande/PB",
        location: "Comunidade Cuscuzeiro (Poço 55)",
        depth: 100,
        drilling: "2023 (Dez)",
        installation: "Poço Seco",
        cost: "R$ 12.984,00",
        sponsor: "Empresa OFNER (Fernando Costa) - Poço Seco",
        lat: -7.0156,
        lng: -38.3945,
        status: "not_installed"
    },
    {
        id: 56,
        municipality: "Serra Grande/PB",
        location: "Comunidade Rural Aguiar de Cima (Poço 56)",
        depth: 70,
        drilling: "2023 (Dez)",
        installation: "Prefeitura",
        cost: "R$ 8.828,00",
        sponsor: "Ima Brands e Cado Presentes",
        lat: -7.0256,
        lng: -38.4045,
        status: "installed"
    },
    {
        id: 57,
        municipality: "Serra Grande/PB",
        location: "Comunidade Rural Timbaúba (Poço 57)",
        depth: 70,
        drilling: "2023 (Dez)",
        installation: "Prefeitura",
        cost: "R$ 8.828,00",
        sponsor: "Ima Brands e Cado Presentes",
        lat: -7.0356,
        lng: -38.4145,
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
