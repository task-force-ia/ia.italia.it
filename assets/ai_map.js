var type = "Tipo";
var digit = "filtro";
var name = "Nome";

function adatta() {
  screen_width = document.documentElement.clientWidth;

  if (screen_width > 1440) {
    $(".ai-map .modal-content").css("height", "80%");
    $(".ai-map .modal-content").css("width", "60%");
    type = "Tipologia";
    digit = "digita per filtrare...";
    name = "Denominazione";
  } 
    else
  {
    $(".modal-content").css("height","95%");
      $(".modal-content").css("width","80%");
      type = "Tipo";
      digit = "filtro";
      name = "Nome";
  }
}

$(document).ready(function() {
  adatta();
});

$(window).resize(function() {
  $("#iaMapping").tabulator("redraw");
  adatta();
});

$(function() {
  $("#iaMapping").tabulator({
    groupStartOpen: true,
    layout: "fitColumns",
    pagination: "local",
    paginationSize: 20,
    movableColumns: true,
    responsiveLayout: true,
    langs: {

      "it-IT": {
        "pagination": {
          "first": "Prima",
          "first_title": "Prima Pagina",
          "last": "Ultima",
          "last_title": "Ultima Pagina",
          "prev": "Precedente",
          "prev_title": "Pagina Precedente",
          "next": "Successiva",
          "next_title": "Pagina Successiva",
        },
        "headerFilters": {
          "default": digit,
        }
      },
      "en-US": {

        "columns": {
          "denominazione": "Name",
          "tipologia": "Type",
          "settore": "Sector",
          "website": "Website",
          "citta": "City",
          "regione": "Region",
          "tecnologie": "Technologies",
        },
        "pagination": {
          "first": "First",
          "first_title": "First Page",
          "last": "Last",
          "last_title": "Last Page",
          "prev": "Prev",
          "prev_title": "Prev Page",
          "next": "Next",
          "next_title": "Next Page",
        },
        "headerFilters": {
          "default": "filter column...",
        }
      }
    },

    initialSort: [{
      column: "denominazione",
      dir: "asc"
    }, ],

    columns: [{
        title: name,
        field: "denominazione",
        headerFilter: "input"
      },
      {
        title: type,
        field: "tipologia",
        headerFilter: true
      },
      {
        title: "Settore",
        field: "settore",
        headerFilter: true
      },
      {
        title: "Sito Web",
        field: "website",
        headerFilter: "input"
      },
      {
        title: "Città",
        field: "citta",
        headerFilter: "input"
      },
      {
        title: "Regione",
        field: "regione",
        headerFilter: true
      },
      {
        title: "Tecnologie",
        field: "tecnologie",
        headerFilter: true
      }
    ],
    rowClick: function(e, row) {
      $("#dettaglio").attr("src", "/assets/ai_map/details/detail_" + row.getData().id + ".html");
      modal.style.display = "block";
    },


  });

  $("#iaMapping").tabulator("hideColumn", "tecnologie");
  $("#iaMapping").tabulator("hideColumn", "settore");

  if (document.documentElement.clientWidth < 600)
    $("#iaMapping").tabulator("hideColumn", "website");
  
   var userLang = navigator.language || navigator.userLanguage;
	  $("#iaMapping").tabulator("setLocale", userLang);



				var tabledata = [
				
				{id:1,tipologia:"Incubatore",denominazione:"RuralHack",website:"http://www.ruralhack.org  ",citta:"Napoli",regione:"Campania",settore:"Agricoltura",tecnologie:"Elaborazione Linguaggio Naturale, Robotica/Sistemi Autonomi"},
{id:2,tipologia:"Azienda",denominazione:"Userbot",website:"https://userbot.ai",citta:"Milano",regione:"Lombardia",settore:"Customer Service",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning, Sistemi Esperti, Chatbot"},
{id:3,tipologia:"Azienda",denominazione:"Gear",website:"http://www.gear.it",citta:"Reggio Emilia",regione:"Emilia-Romagna",settore:"Software per document management",tecnologie:"Elaborazione Linguaggio Naturale, Chatbot"},
{id:5,tipologia:"Startup",denominazione:"Xteam SW",website:"http://www.xteamsoftware.com",citta:"Rovigo",regione:"Veneto",settore:"Ambiente, Agricoltura, Educazione, Ricerca Applicata / Statistica, Salute, Smart-Cities",tecnologie:"Computer Vision, Elaborazione Linguaggio Naturale, Machine/Deep Learning"},
{id:6,tipologia:"Azienda",denominazione:"Competitoor",website:"https://competitoor.com",citta:"Carpi",regione:"Emilia-Romagna",settore:"Pubblicità / Marketing, Ecommerce ",tecnologie:"Machine/Deep Learning"},
{id:7,tipologia:"Centro di Ricerca",denominazione:"Centro Piaggio UniPI",website:"http://www.centropiaggio.unipi.it",citta:"Pisa",regione:"Toscana",settore:"Robotica",tecnologie:"Machine/Deep Learning, Robotica/Sistemi Autonomi"},
{id:8,tipologia:"Azienda",denominazione:"Buzzoole",website:"http://www.buzzoole.com",citta:"Napoli",regione:"Campania",settore:"Pubblicità / Marketing",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning"},
{id:9,tipologia:"Azienda",denominazione:"Dentsu Aegis",website:"http://www.dentsuaegisnetwork.it/",citta:"Milano",regione:"Lombardia",settore:"Pubblicità / Marketing",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning, Chatbot, Cognitive Cybersecurity"},
{id:10,tipologia:"Azienda",denominazione:"Ermes Security",website:"https://www.ermessecurity.com",citta:"Torino",regione:"Piemonte",settore:"Sicurezza / Cybersecurity",tecnologie:"Machine/Deep Learning"},
{id:11,tipologia:"Startup",denominazione:"DTOKlab",website:"http://www.dtoklab.com",citta:"Rende (CS)",regione:"Calabria",settore:"Ricerca Applicata / Statistica, Smart-Cities, Social media communication",tecnologie:"Machine/Deep Learning, Data mining services"},
{id:12,tipologia:"Azienda",denominazione:"Almawave",website:"http://www.almawave.it",citta:"Roma",regione:"Lazio",settore:"Agricoltura, Pubblica amministrazione centrale, Pubblica amministrazione territoriale (regionale e locale), Sicurezza / Cybersecurity, Smart-Cities",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning, Sistemi Esperti, Chatbot, Cognitive Cybersecurity"},
{id:13,tipologia:"Azienda",denominazione:"Livetech",website:"http://www.ilivetech.it",citta:"Rende, Roma, Milano",regione:"Calabria, Lazio, Lombardia",settore:"Economia e Finanza / Fintech /Assicurazioni, Energia, Pubblica amministrazione centrale, Pubblicità / Marketing, Robotica, Sicurezza / Cybersecurity",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning, Recommender Systems, Robotica/Sistemi Autonomi, Sistemi Esperti, Chatbot, Cognitive Cybersecurity, Sistemi di data mapping automatici, classificazione dei dati su base concettuale, creazione id datalake virtuali"},
{id:14,tipologia:"Startup",denominazione:"Kellify",website:"http://kellify.com/",citta:"Genova",regione:"Liguria",settore:"Economia e Finanza / Fintech /Assicurazioni",tecnologie:"Machine/Deep Learning"},
{id:15,tipologia:"Startup",denominazione:"All Industries",website:"http://www.allindustries.it/",citta:"Roma",regione:"Lazio",settore:"Economia e Finanza / Fintech /Assicurazioni, Pubblica amministrazione centrale, Pubblica amministrazione territoriale (regionale e locale), Smart-Cities, Trasporti",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning, Chatbot"},
{id:16,tipologia:"Startup",denominazione:"Next to me",website:"http://www.nextome.net",citta:"Conversano",regione:"Puglia",settore:"Automotive, Industria di precisione, Sicurezza / Cybersecurity, Smart-Cities, Trasporti",tecnologie:"Machine/Deep Learning, Recommender Systems"},
{id:17,tipologia:"Startup",denominazione:"Scratch and Screen",website:"https://www.scratchandscreen.com",citta:"Milano",regione:"Lombardia",settore:"Pubblicità / Marketing",tecnologie:"Machine/Deep Learning, Chatbot"},
{id:18,tipologia:"Startup",denominazione:"Zoro",website:"https://www.zoro.ai",citta:"Milano",regione:"Lombardia",settore:"Digital transformation",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning, Chatbot"},
{id:19,tipologia:"Azienda",denominazione:"The Fool",website:"http://thefool.it",citta:"Milano",regione:"Lombardia",settore:"Pubblicità / Marketing, Ricerca Applicata / Statistica, Sicurezza / Cybersecurity",tecnologie:"Machine/Deep Learning, Chatbot, Cognitive Cybersecurity"},
{id:20,tipologia:"Startup",denominazione:"Wissen Search",website:"http://www.wissensearch.it",citta:"Roma",regione:"Lazio",settore:"Educazione",tecnologie:"Sistemi Esperti"},
{id:21,tipologia:"Azienda",denominazione:"Spitch",website:"https://spitch.ch/it/",citta:"Milano",regione:"Lombardia",settore:"Economia e Finanza / Fintech /Assicurazioni",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning, Chatbot"},
{id:22,tipologia:"Azienda",denominazione:"Penta Technology",website:"http://www.pentatechnology.it",citta:"Napoli",regione:"Campania",settore:"Ambiente, Smart-Cities, Earth Observation",tecnologie:"Machine/Deep Learning, Sistemi Esperti"},
{id:23,tipologia:"Startup",denominazione:"Nami Lab",website:"http://www.nami-lab.com",citta:"Milano",regione:"Lombardia",settore:"Economia e Finanza / Fintech /Assicurazioni, Educazione, Energia, Entertainment and Music",tecnologie:"Machine/Deep Learning, Recommender Systems"},
{id:24,tipologia:"Startup",denominazione:"Elif Lab",website:"http://www.eliflab.com",citta:"Monza, Milano",regione:"Lombardia",settore:"Pubblicità / Marketing, Ricerca Applicata / Statistica, Politica",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning, Recommender Systems, Sistemi Esperti, Chatbot"},
{id:25,tipologia:"Startup",denominazione:"Metaliquid",website:"http://www.meta-liquid.com/",citta:"Milano",regione:"Lombardia",settore:"Media / Broadcast",tecnologie:"Computer Vision, Machine/Deep Learning"},
{id:26,tipologia:"Azienda",denominazione:"Orobix",website:"http://www.orobix.com",citta:"Bergamo",regione:"Lombardia",settore:"Bioinformatica, Energia, Industria di precisione, Industria pesante, Robotica, Salute, Gaming",tecnologie:"Computer Vision, Machine/Deep Learning, Recommender Systems, Robotica/Sistemi Autonomi, Algoritmi di Ottimizzazione"},
{id:27,tipologia:"Startup",denominazione:"Good Buy Auto",website:"http://goodbuyauto.it",citta:"Milano",regione:"Lombardia",settore:"Automotive",tecnologie:"Machine/Deep Learning"},
{id:28,tipologia:"Università",denominazione:"MEFI - UniPV",website:"https://www.facebook.com/groups/bigmefi/",citta:"Pavia",regione:"Lombardia",settore:"Economia e Finanza / Fintech /Assicurazioni, Ricerca Applicata / Statistica",tecnologie:"Machine/Deep Learning, Sistemi Esperti"},
{id:29,tipologia:"Azienda",denominazione:"Heres",website:"https://heres.ai/",citta:"Bologna",regione:"Emilia-Romagna",settore:"eCommerce, Retail, Servizi",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning, Chatbot"},
{id:30,tipologia:"Università",denominazione:"DISIM - UnivAQ",website:"http://www.disim.univaq.it",citta:"L'Aquila",regione:"Abruzzo",settore:"Educazione, Ricerca Applicata / Statistica, Robotica",tecnologie:"Logic Multi Agent System Framework DALI"},
{id:31,tipologia:"Azienda",denominazione:"Vidiemme Consulting",website:"https://www.vidiemme.it/",citta:"Milano",regione:"Lombardia",settore:"Sviluppo software custom",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning, Chatbot"},
{id:32,tipologia:"Azienda",denominazione:"Reveal",website:"http://www.revealsrl.it/",citta:"Roma",regione:"Lazio",settore:"Economia e Finanza / Fintech /Assicurazioni, Industria pesante, Pubblicità / Marketing, Ricerca Applicata / Statistica, Sicurezza / Cybersecurity",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning, Recommender Systems, Cognitive Cybersecurity"},
{id:33,tipologia:"Azienda",denominazione:"Hopenly",website:"http://www.hopenly.com",citta:"Reggio Emilia",regione:"Emilia-Romagna",settore:"Automotive, Economia e Finanza / Fintech /Assicurazioni, Pubblicità / Marketing, Ricerca Applicata / Statistica, Sicurezza / Cybersecurity",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning, Cognitive Cybersecurity"},
{id:34,tipologia:"Azienda",denominazione:"Magneticast",website:"http://www.magneticast.com",citta:"Acireale (CT)",regione:"Sicilia",settore:"Pubblicità / Marketing, Retail",tecnologie:"Computer Vision, Machine/Deep Learning"},
{id:35,tipologia:"Centro di Ricerca",denominazione:"IASI CNR",website:"http://www.iasi.cnr.it",citta:"Roma",regione:"Lazio",settore:"Ricerca di base e applicata",tecnologie:"Motore di ricerca semantico"},
{id:36,tipologia:"Azienda",denominazione:"Gruppo Pragma",website:"http://www.gruppopragma.it",citta:"Trieste",regione:"Friuli Venezia Giulia",settore:"Educazione",tecnologie:"Elaborazione Linguaggio Naturale, Chatbot"},
{id:37,tipologia:"Azienda",denominazione:"Vetrya",website:"http://www.vetrya.it",citta:"Orvieto",regione:"Umbria",settore:"Media, Telco, ",tecnologie:"Computer Vision, Elaborazione Linguaggio Naturale, Chatbot, Cognitive Cybersecurity, Cognitive Services "},
{id:38,tipologia:"PA",denominazione:"Comune Rimini",website:"http://www.comune.rimini.it",citta:"Rimini",regione:"Emilia-Romagna",settore:"Pubblica amministrazione territoriale (regionale e locale)",tecnologie:"Computer Vision, Machine/Deep Learning"},
{id:39,tipologia:"Startup",denominazione:"EntityMind",website:"http://www.entitymind.com",citta:"Modena",regione:"Emilia-Romagna",settore:"Economia e Finanza / Fintech /Assicurazioni, Educazione, Industria di precisione, Industria pesante, Pubblica amministrazione centrale, Pubblica amministrazione territoriale (regionale e locale), Pubblicità / Marketing, Supporto Help Desk",tecnologie:"Chatbot, Embodied Cognition"},
{id:40,tipologia:"Centro di Ricerca",denominazione:"Economy Up",website:"https://www.economyup.it",citta:"Milano",regione:"Lombardia",settore:"Industria 4.0",tecnologie:"Computer Vision, Machine/Deep Learning, Robotica/Sistemi Autonomi, Sistemi Esperti, IoT"},
{id:41,tipologia:"Azienda",denominazione:"Athlos",website:"http://www.athlos.biz",citta:"Cagliari",regione:"Sardegna",settore:"Pubblica amministrazione territoriale (regionale e locale), Ricerca Applicata / Statistica, Robotica, Salute",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning, Robotica/Sistemi Autonomi, Chatbot"},
{id:42,tipologia:"PA",denominazione:"INGV",website:"http://www.ingv.it",citta:"Roma, Palermo",regione:"Lazio, Sicilia",settore:"Ambiente, Educazione, Pubblica amministrazione centrale, Ricerca Applicata / Statistica",tecnologie:"Machine/Deep Learning, Recommender Systems, Sistemi Esperti"},
{id:43,tipologia:"Azienda",denominazione:"Domino",website:"https://www.domino.it/it",citta:"Torino",regione:"Piemonte",settore:"Agricoltura, Automotive, Educazione, Energia, Industria pesante, Pubblicità / Marketing, Robotica, Salute, Trasporti, turismo, cultura, no-profit, sport, beauty",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning, Chatbot"},
{id:44,tipologia:"Università",denominazione:"SWAP - UniBA",website:"http://www.di.uniba.it/~swap/",citta:"Bari",regione:"Puglia",settore:"Economia e Finanza / Fintech /Assicurazioni, Pubblica amministrazione centrale, Pubblica amministrazione territoriale (regionale e locale), Pubblicità / Marketing, Ricerca Applicata / Statistica, Robotica, Smart-Cities",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning, Recommender Systems, Robotica/Sistemi Autonomi, Sistemi Esperti, Chatbot"},
{id:45,tipologia:"Università",denominazione:"UniOr Napoli",website:"http://www.unior.it",citta:"Napoli",regione:"Campania",settore:"Linguistica computazionale e trattamento automatico del linguaggio naturale",tecnologie:"Elaborazione Linguaggio Naturale, Chatbot"},
{id:47,tipologia:"Centro di Ricerca",denominazione:"Egovmetrics",website:"http://www.egovmetrics.com",citta:"Rizziconi (RC)",regione:"Calabria",settore:"Pubblica amministrazione centrale, Sicurezza / Cybersecurity, Paesi Balcani ",tecnologie:"Machine/Deep Learning, Cognitive Cybersecurity"},
{id:48,tipologia:"Università",denominazione:"Aimage Lab UniMORE",website:"http://aimagelab.unimore.it",citta:"Modena",regione:"Emilia-Romagna",settore:"Automotive, Ricerca Applicata / Statistica, Sicurezza / Cybersecurity, Smart-Cities, Ricerca in Visione Artificiale",tecnologie:"Computer Vision, Machine/Deep Learning"},
{id:49,tipologia:"Startup",denominazione:"RiAtlas",website:"http://web.unisa.it/ricerca/spin-off/unisa",citta:"Fisciano (SA)",regione:"Campania",settore:"Salute",tecnologie:"Machine/Deep Learning, Recommender Systems, Sistemi Esperti"},
{id:50,tipologia:"Startup",denominazione:"MVMANT",website:"http://www.mvmant.it",citta:"Mirabella Imbaccari (CT)",regione:"Sicilia",settore:"Trasporti",tecnologie:"Machine/Deep Learning"},
{id:51,tipologia:"Azienda",denominazione:"Axel",website:"http://www.axel.ai",citta:"Milano",regione:"Lombardia",settore:"Informatica e servizi",tecnologie:"Computer Vision, Elaborazione Linguaggio Naturale, Machine/Deep Learning, Chatbot"},
{id:52,tipologia:"Azienda",denominazione:"Casaleggio Associati",website:"https://www.casaleggio.it/studi-ricerche/",citta:"Milano",regione:"Lombardia",settore:"Consulenza e ricerca",tecnologie:""},
{id:53,tipologia:"Azienda",denominazione:"Loop AI Lab",website:"http://www.loop.ai/media-relations",citta:"Milano, Bologna",regione:"Lombardia, Emilia-Romagna",settore:"Ambiente, Agricoltura, Automotive, Bioinformatica, Economia e Finanza / Fintech /Assicurazioni, Educazione, Energia, Industria di precisione, Industria pesante, Robotica, Salute, Smart-Cities, Trasporti, Trasversale per qualsiasi industria",tecnologie:"Machine/Deep Learning, Cognitive Cybersecurity, Unsupervised Cognitive Computing"},
{id:54,tipologia:"Incubatore",denominazione:"Luiss Enlabs Worklab AI",website:"https://luissenlabsacceleration.com/ai/",citta:"Roma",regione:"Lazio",settore:"Economia e Finanza / Fintech /Assicurazioni",tecnologie:"Machine/Deep Learning, Robotica/Sistemi Autonomi, Chatbot, Cognitive Cybersecurity"},
{id:55,tipologia:"Azienda",denominazione:"Morpheos",website:"http://www.morpheos.eu/",citta:"Catania",regione:"Sicilia",settore:"Ricerca Applicata / Statistica, Robotica, Smart-Cities",tecnologie:"Computer Vision, Elaborazione Linguaggio Naturale, Machine/Deep Learning, Robotica/Sistemi Autonomi, Chatbot"},
{id:56,tipologia:"Startup",denominazione:"Aikospace",website:"http://www.aikospace.com",citta:"Torino",regione:"Piemonte",settore:"Spazio",tecnologie:"Machine/Deep Learning, Robotica/Sistemi Autonomi, Sistemi Esperti"},
{id:57,tipologia:"Università",denominazione:"CORPUS-FICLIT-UniBo",website:"http://corpora.ficlit.unibo.it/",citta:"Bologna",regione:"Emilia-Romagna",settore:"Educazione, Pubblica amministrazione territoriale (regionale e locale), Ricerca Applicata / Statistica",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning"},
{id:58,tipologia:"Azienda",denominazione:"EOS",website:"http://www.eosdev.it",citta:"Pisa",regione:"Toscana",settore:"Economia e Finanza / Fintech /Assicurazioni",tecnologie:"Machine/Deep Learning, Recommender Systems, Sistemi Esperti"},
{id:59,tipologia:"Azienda",denominazione:"OTUS",website:"http://otustechnology.com",citta:"Genova, Milano, Pescara",regione:"Liguria, Lombardia, Abruzzo",settore:"Automotive, Energia, Pubblica amministrazione territoriale (regionale e locale), Ricerca Applicata / Statistica, Robotica, Salute, Sicurezza / Cybersecurity, Smart-Cities",tecnologie:"Computer Vision, Machine/Deep Learning"},
{id:60,tipologia:"Azienda",denominazione:"Cyberdyne",website:"http://www.cyberdyne.it",citta:"Pescara",regione:"Abruzzo",settore:"Automotive, Servizi",tecnologie:"Machine/Deep Learning, Sistemi Esperti, Computational Intelligence Optimization"},
{id:61,tipologia:"Università",denominazione:"CLP-UniUD",website:"http://clp.dimi.uniud.it/",citta:"Udine",regione:"Friuli Venezia Giulia",settore:"Bioinformatica, Educazione, Energia, Ricerca Applicata / Statistica, Smart-Cities, Pianificazione ",tecnologie:"Robotica/Sistemi Autonomi, Sistemi Esperti, Rappresentazione della conoscenza e ragionamento automatico"},
{id:62,tipologia:"Centro di Ricerca",denominazione:"Dip.Informatica - UniRoma1",website:"https://www.di.uniroma1.it/",citta:"Roma",regione:"Lazio",settore:"Educazione",tecnologie:"Computer Vision, Elaborazione Linguaggio Naturale, Machine/Deep Learning, Recommender Systems, Cognitive Cybersecurity"},
{id:63,tipologia:"Azienda",denominazione:"Exprivia",website:"http://www.exprivia.it",citta:"Molfetta (BA)",regione:"Puglia",settore:"Economia e Finanza / Fintech /Assicurazioni, Pubblica amministrazione centrale, Smart-Cities",tecnologie:"Computer Vision, Elaborazione Linguaggio Naturale, Machine/Deep Learning, Recommender Systems, Chatbot"},
{id:64,tipologia:"Startup",denominazione:"OBDA Systems",website:"https://www.obdasystems.com",citta:"Roma",regione:"Lazio",settore:"Pubblica amministrazione centrale, Pubblica amministrazione territoriale (regionale e locale), Knowledge-based Systems",tecnologie:"Knowledge Reasoning"},
{id:65,tipologia:"Azienda",denominazione:"Explora",website:"https://www.explora-biotech.com",citta:"Mestre",regione:"Veneto",settore:"Bioinformatica, Synthetic Biology",tecnologie:"Machine/Deep Learning, Sistemi Esperti, Network Analysis "},
{id:66,tipologia:"Università",denominazione:"Dip.Informatica - UniPI",website:"http://www.di.unipi.it/groups/ciml/",citta:"Pisa",regione:"Toscana",settore:"Educazione",tecnologie:"Machine/Deep Learning"},
{id:67,tipologia:"Azienda",denominazione:"CELI",website:"https://www.celi.it/",citta:"Torino, Milano",regione:"Piemonte, Lombardia",settore:"Automotive, Economia e Finanza / Fintech /Assicurazioni, Educazione, Pubblica amministrazione centrale, Pubblica amministrazione territoriale (regionale e locale), Salute, Smart-Cities",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning, Recommender Systems, Chatbot"},
{id:68,tipologia:"Azienda",denominazione:"Expert System",website:"http://www.expertsystem.com/",citta:"Modena",regione:"Emilia-Romagna",settore:"Economia e Finanza / Fintech /Assicurazioni, Energia, Militare, Pubblica amministrazione centrale, Pubblica amministrazione territoriale (regionale e locale), Sicurezza / Cybersecurity, Smart-Cities, IT",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning, Sistemi Esperti, Chatbot, Cognitive Cybersecurity, Risk Management, Knowledge Management, RPA"},
{id:69,tipologia:"Università",denominazione:"ART-UniROma3 Tor Vergata",website:"http://art.uniroma2.it/",citta:"Roma",regione:"Lazio",settore:"web semantico",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning, Chatbot, gestione ontologie"},
{id:70,tipologia:"Startup",denominazione:"Babelscape",website:"http://babelscape.com",citta:"Roma",regione:"Lazio",settore:"Economia e Finanza / Fintech /Assicurazioni, Educazione, Militare, Pubblica amministrazione centrale, Salute, Sicurezza / Cybersecurity, Editoria",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning"},
{id:72,tipologia:"Università",denominazione:"Laboratorio Kelsen - UniSA",website:"http://www.laboratoriokelsen.unisa.it",citta:"Salerno",regione:"Campania",settore:"Ricerca scientifica",tecnologie:""},
{id:73,tipologia:"Azienda",denominazione:"Eclettica",website:"http://www.eclettica.net",citta:"Fisciano (SA)",regione:"Campania",settore:"Robotica, Sicurezza / Cybersecurity, ICT/ AI /SVILUPPO SOFTWARE",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning, Robotica/Sistemi Autonomi, Chatbot"},
{id:74,tipologia:"Università",denominazione:"Laboratorio IA - UniPA",website:"http://www.diid.unipa.it/networks/ndslab/",citta:"Palermo",regione:"Sicilia",settore:"Ambiente, Agricoltura, Automotive, Educazione, Energia, Industria di precisione, Ricerca Applicata / Statistica, Sicurezza / Cybersecurity, Smart-Cities, Trasporti",tecnologie:"Machine/Deep Learning, Recommender Systems, Robotica/Sistemi Autonomi, Sistemi Esperti, Cognitive Cybersecurity"},
{id:75,tipologia:"Azienda",denominazione:"Dedagroup",website:"http://www.dedagroup.it/home",citta:"Trento",regione:"Trentino Alto-Adige",settore:"Economia e Finanza / Fintech /Assicurazioni, Energia, Pubblica amministrazione centrale, Pubblica amministrazione territoriale (regionale e locale), Pubblicità / Marketing, Ricerca Applicata / Statistica, Robotica, Salute, Sicurezza / Cybersecurity, Smart-Cities, Trasporti",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning, Recommender Systems, Robotica/Sistemi Autonomi, Sistemi Esperti, Chatbot"},
{id:76,tipologia:"Startup",denominazione:"Conversate",website:"http://www.conversate.eu",citta:"Milano",regione:"Lombardia",settore:"Economia e Finanza / Fintech /Assicurazioni, Energia, Pubblicità / Marketing",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning, Chatbot"},
{id:77,tipologia:"Startup",denominazione:"ELSE corp",website:"http://www.else-corp.com",citta:"Milano",regione:"Lombardia",settore:"Fashion Retail",tecnologie:"Machine/Deep Learning, Recommender Systems"},
{id:78,tipologia:"Startup",denominazione:"Brain Control",website:"http://www.braincontrol.com",citta:"Siena",regione:"Toscana",settore:"Bioinformatica, Robotica, Salute",tecnologie:"Machine/Deep Learning"},
{id:79,tipologia:"Startup",denominazione:"Kaitiaki",website:"http://www.kaitiaki.it",citta:"Udine",regione:"Friuli Venezia Giulia",settore:"Salute, Sicurezza / Cybersecurity",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning, Cognitive Cybersecurity"},
{id:80,tipologia:"Startup",denominazione:"Resonance AI",website:"https://www.resonance-ai.com",citta:"Roma",regione:"Lazio",settore:"Automotive, Pubblicità / Marketing, Smart-Cities",tecnologie:"Machine/Deep Learning"},
{id:81,tipologia:"Azienda",denominazione:"Grottini Lab",website:"https://www.grottinilab.com",citta:"Portorecanati (MC)",regione:"Marche",settore:"Sicurezza / Cybersecurity, Smart-Cities, retail, logistica, museale, produzione",tecnologie:"Computer Vision, Machine/Deep Learning"},
{id:82,tipologia:"Azienda",denominazione:"enGenome",website:"http://engenome.com",citta:"Pavia",regione:"Lombardia",settore:"Bioinformatica, Salute",tecnologie:"Machine/Deep Learning, Sistemi Esperti"},
{id:83,tipologia:"Azienda",denominazione:"MindIT",website:"http://www.minditsolutions.it/en/index.html",citta:"Bologna",regione:"Emilia-Romagna",settore:"Energia, Industria di precisione, Industria pesante, Pubblica amministrazione territoriale (regionale e locale), Pubblicità / Marketing",tecnologie:"Machine/Deep Learning, Combinatorial Optimization"},
{id:84,tipologia:"Azienda",denominazione:"QuestIT",website:"https://www.quest-it.com",citta:"Siena",regione:"Toscana",settore:"Pubblicità / Marketing, Smart-Cities",tecnologie:"Computer Vision, Elaborazione Linguaggio Naturale, Machine/Deep Learning, Sistemi Esperti, Chatbot"},
{id:86,tipologia:"Azienda",denominazione:"XTN Cognitive Security",website:"https://www.xtn-lab.com",citta:"Trento",regione:"Trentino Alto-Adige",settore:"Sicurezza / Cybersecurity",tecnologie:"Machine/Deep Learning, Sistemi Esperti, Cognitive Cybersecurity"},
{id:87,tipologia:"Startup",denominazione:"Invictus ",website:"https://invictus.bet",citta:"Roma",regione:"Lazio",settore:"Economia e Finanza / Fintech /Assicurazioni",tecnologie:"Machine/Deep Learning"},
{id:88,tipologia:"Azienda",denominazione:"The Digital Box",website:"https://www.thedigitalbox.com",citta:"Gioia del Colle (BA)",regione:"Puglia",settore:"Pubblicità / Marketing",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning, Recommender Systems, Chatbot"},
{id:89,tipologia:"Startup",denominazione:"Smarthink",website:"http://www.smarthink.eu",citta:"Busto Arsizio (VA)",regione:"Lombardia",settore:"Educazione",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning, Recommender Systems"},
{id:90,tipologia:"Centro di Ricerca",denominazione:"ICAR CNR",website:"https://www.icar.cnr.it/",citta:"Napoli, Rende, Palermo",regione:"Campania, Calabria, Sicilia",settore:"Salute, Sicurezza / Cybersecurity, Smart-Cities",tecnologie:"Computer Vision, Elaborazione Linguaggio Naturale, Machine/Deep Learning, Robotica/Sistemi Autonomi, Sistemi Esperti"},
{id:91,tipologia:"Università",denominazione:"DEIB Polimi AirLab",website:"http://www.deib.polimi.it/eng/research-lines/details/118",citta:"Milano",regione:"Lombardia",settore:"Educazione, Ricerca Applicata / Statistica, Robotica",tecnologie:"Computer Vision, Machine/Deep Learning, Robotica/Sistemi Autonomi, Sistemi Esperti, Computer Games, Human-Computer Interaction, Affective Computing"},
{id:92,tipologia:"Centro di Ricerca",denominazione:"HER",website:"https://www.he-r.it/",citta:"Roma",regione:"Lazio",settore:"Educazione, Energia, Ricerca Applicata / Statistica, Smart-Cities, cultura, arte, etnografia, antropologia",tecnologie:"Computer Vision, Elaborazione Linguaggio Naturale, Machine/Deep Learning, Sistemi Esperti"},
{id:93,tipologia:"Centro di Ricerca",denominazione:"KRDB",website:"http://krdb.eu",citta:"Bolzano",regione:"Trentino Alto-Adige",settore:"Educazione, Ricerca di base e applicata",tecnologie:"Elaborazione Linguaggio Naturale, Modellazione concettuale e rappresentazione della conoscenza; Integrazione e accesso intelligente ai dati"},
{id:94,tipologia:"Azienda",denominazione:"Energy Way",website:"https://www.energyway.it/",citta:"Modena",regione:"Emilia-Romagna",settore:"Consulenza",tecnologie:"Machine/Deep Learning"},
{id:96,tipologia:"Azienda",denominazione:"Mivoq",website:"https://www.mivoq.it",citta:"Padova",regione:"Veneto",settore:"Informatica e telecomunicazioni",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning"},
{id:97,tipologia:"Università",denominazione:"DISI Unitn",website:"http://disi.unitn.it",citta:"Trento",regione:"Trentino Alto-Adige",settore:"Educazione",tecnologie:"Computer Vision, Elaborazione Linguaggio Naturale, Machine/Deep Learning, Recommender Systems, Robotica/Sistemi Autonomi, Sistemi Esperti, Cognitive Cybersecurity"},
{id:98,tipologia:"Università",denominazione:"IBISLAB UniPr",website:"http://ibislab.ce.unipr.it",citta:"Parma",regione:"Emilia-Romagna",settore:"Educazione, Ricerca Applicata / Statistica, Controllo di qualita' industriale",tecnologie:"Computer Vision, Machine/Deep Learning, Evolutionary Computation"},
{id:99,tipologia:"Azienda",denominazione:"DLV System",website:"http://www.dlvsystem.com",citta:"Rende (CS)",regione:"Calabria",settore:"Bioinformatica, Energia, Robotica, Salute, Smart-Cities, Trasporti, La tecnologia DLV è general purpose, facilmente verticalizzabile in diversi domini applicativi",tecnologie:"Knowledge Representation and Reasoning, Answer Set Programming, Logica Deduttiva"},
{id:100,tipologia:"Università",denominazione:"LIS UniPmn",website:"http://www.di.unipmn.it/en/research-en/labs-en/lis-en.html",citta:"Alessandria",regione:"Piemonte",settore:"Educazione, Ricerca di base ed applicata",tecnologie:"Machine/Deep Learning, Rappresentazione della conoscenza e ragionamento con formalismi logici (logiche descrittive non monotone, answer set programming); a vincoli temporali; probabilistici (reti bayesiane). Ragionamento basato su casi."},
{id:101,tipologia:"Azienda",denominazione:"Datamantix",website:"http://www.datamantix.it",citta:"Udine",regione:"Friuli Venezia Giulia",settore:"Ricerca Applicata / Statistica",tecnologie:"Computer Vision, Elaborazione Linguaggio Naturale, Machine/Deep Learning, Recommender Systems, Chatbot"},
{id:102,tipologia:"Centro di Ricerca",denominazione:"Semeion",website:"http://www.semeion.it",citta:"Roma",regione:"Lazio",settore:"Ambiente, Agricoltura, Economia e Finanza / Fintech /Assicurazioni, Militare, Pubblica amministrazione centrale, Pubblica amministrazione territoriale (regionale e locale), Ricerca Applicata / Statistica, Salute, Sicurezza / Cybersecurity",tecnologie:"Machine/Deep Learning, Cognitive Cybersecurity"},
{id:103,tipologia:"Università",denominazione:"PraLab UniCa",website:"http://pralab.diee.unica.it/",citta:"Cagliari",regione:"Sardegna",settore:"Sicurezza / Cybersecurity, Gruppo di ricerca universitario",tecnologie:"Computer Vision, Machine/Deep Learning"},
{id:104,tipologia:"Startup",denominazione:"HitBytes",website:"https://hitbytes.io",citta:"Milano",regione:"Lombardia",settore:"Economia e Finanza / Fintech /Assicurazioni, Educazione, Pubblica amministrazione centrale, Pubblica amministrazione territoriale (regionale e locale), Pubblicità / Marketing, Salute, Smart-Cities, Trasporti, Customer Services",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning, Recommender Systems, Chatbot"},
{id:105,tipologia:"Azienda",denominazione:"IT Logix",website:"http://www.itlogix.it",citta:"Viterbo",regione:"Lazio",settore:"Ambiente, Agricoltura, Bioinformatica, Educazione, Pubblica amministrazione territoriale (regionale e locale), Robotica",tecnologie:"Computer Vision, Elaborazione Linguaggio Naturale, Machine/Deep Learning, Robotica/Sistemi Autonomi, Sistemi Esperti"},
{id:106,tipologia:"Azienda",denominazione:"AGS",website:"https://www.ags-it.com/",citta:"Pero (MI)",regione:"Lombardia",settore:"Economia e Finanza / Fintech /Assicurazioni, Ricerca Applicata / Statistica, Robotica",tecnologie:"Computer Vision, Elaborazione Linguaggio Naturale, Machine/Deep Learning"},
{id:107,tipologia:"Azienda",denominazione:"E-land / E-Puma",website:"http://www.e-puma.it",citta:"Reggio Emilia",regione:"Emilia-Romagna",settore:"Automotive, Economia e Finanza / Fintech /Assicurazioni, Educazione, Energia, Pubblica amministrazione centrale, Pubblica amministrazione territoriale (regionale e locale), Pubblicità / Marketing, Salute, Smart-Cities, Trasporti",tecnologie:"Elaborazione Linguaggio Naturale, Chatbot"},
{id:108,tipologia:"Azienda",denominazione:"E4 Computer engineering",website:"http://www.e4company.com",citta:"Scandiano (RE)",regione:"Emilia-Romagna",settore:"IT ",tecnologie:"Computer Vision, Elaborazione Linguaggio Naturale, Machine/Deep Learning, Recommender Systems, Robotica/Sistemi Autonomi, Sistemi Esperti, Chatbot, Cognitive Cybersecurity, Infrastruttura per IA "},
{id:109,tipologia:"Azienda",denominazione:"GIS Data",website:"http://www.gisdata.it",citta:"Savona",regione:"Liguria",settore:"Energia, Pubblica amministrazione territoriale (regionale e locale), Smart-Cities, Trasporti",tecnologie:"Computer Vision, Machine/Deep Learning"},
{id:110,tipologia:"Azienda",denominazione:"NITE",website:"http://www.nitesrl.com",citta:"Fisciano (SA)",regione:"Campania",settore:"Gestione Documenti",tecnologie:"Computer Vision, Machine/Deep Learning"},
{id:111,tipologia:"Startup",denominazione:"Pikkart",website:"http://www.pikkart.com",citta:"Modena",regione:"Emilia-Romagna",settore:"Pubblicità / Marketing, Industria 4.0",tecnologie:"Computer Vision, Machine/Deep Learning"},
{id:113,tipologia:"Azienda",denominazione:"Bioretics",website:"http://www.bioretics.com",citta:"Cesena (FC)",regione:"Emilia-Romagna",settore:"Ricerca Applicata / Statistica, ICT",tecnologie:"Computer Vision, Machine/Deep Learning"},
{id:114,tipologia:"Azienda",denominazione:"Mantica",website:"http://www.mantica.com",citta:"Roma",regione:"Lazio",settore:"Automotive, Economia e Finanza / Fintech /Assicurazioni, Energia, Pubblica amministrazione centrale, Pubblica amministrazione territoriale (regionale e locale), Pubblicità / Marketing, Ricerca Applicata / Statistica, Salute, Sicurezza / Cybersecurity",tecnologie:"Machine/Deep Learning, Recommender Systems, Sistemi Esperti, Cognitive Cybersecurity"},
{id:115,tipologia:"Azienda",denominazione:"GeCo",website:"http://www.ge.co.it",citta:"Genova ",regione:"Liguria",settore:"Ricerca Applicata / Statistica, Sicurezza / Cybersecurity, Trasporti",tecnologie:"Machine/Deep Learning, Sistemi Esperti"},
{id:116,tipologia:"Azienda",denominazione:"Wunderman",website:"http://www.wunderman.com",citta:"Milano, Roma",regione:"Lombardia, Lazio",settore:"Bioinformatica, Pubblicità / Marketing, Ricerca Applicata / Statistica, Robotica, Salute, Sicurezza / Cybersecurity, Smart-Cities",tecnologie:"Computer Vision, Elaborazione Linguaggio Naturale, Machine/Deep Learning, Recommender Systems, Robotica/Sistemi Autonomi, Sistemi Esperti, Chatbot, Cognitive Cybersecurity, Marketing Automation"},
{id:117,tipologia:"Azienda",denominazione:"KMLE - Konica Minolta",website:"http://research.konicaminolta.eu/",citta:"Roma",regione:"Lazio",settore:"Ricerca Applicata / Statistica, Robotica, Salute, Sicurezza / Cybersecurity",tecnologie:"Computer Vision, Elaborazione Linguaggio Naturale, Machine/Deep Learning, Recommender Systems, Robotica/Sistemi Autonomi, Cognitive Cybersecurity"},
{id:118,tipologia:"Azienda",denominazione:"Modelway",website:"http://modelway.it/",citta:"Torino",regione:"Piemonte",settore:"Ambiente, Automotive, Energia, Industria di precisione, Robotica, Trasporti, Aerospazio",tecnologie:"Machine/Deep Learning, Sistemi Esperti, Sensori Virtuali; Modelli Predittivi"},
{id:119,tipologia:"Startup",denominazione:"Holsys",website:"http://www.holsys.com",citta:"Taranto",regione:"Puglia",settore:"ICT",tecnologie:"Machine/Deep Learning, Sistemi Esperti, Holonic technology - sviluppata dalla Holsys S.r.l."},
{id:120,tipologia:"Startup",denominazione:"Eti3",website:"http://www.eti3.it/",citta:"Città di Castello (PG)",regione:"Umbria",settore:"Smart-Cities",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning"},
{id:121,tipologia:"Azienda",denominazione:"Engineering",website:"http://www.eng.it",citta:"Roma",regione:"Lazio",settore:"Informatica",tecnologie:"Computer Vision, Elaborazione Linguaggio Naturale, Machine/Deep Learning, Recommender Systems, Robotica/Sistemi Autonomi, Sistemi Esperti, Chatbot, Cognitive Cybersecurity"},
{id:122,tipologia:"Startup",denominazione:"Toc Toc",website:"https://www.toctoc.me/",citta:"Roma",regione:"Lazio",settore:"ICT, Information Communication Technology",tecnologie:"Chatbot"},
{id:123,tipologia:"Azienda",denominazione:"Cedat85",website:"http://www.cedat85.com",citta:"Roma, S.Vito Normanni (BR), Padova",regione:"Lazio, Puglia, Veneto",settore:"Pubblica amministrazione centrale, Pubblica amministrazione territoriale (regionale e locale), Sicurezza / Cybersecurity, Smart-Cities, Media - Call Center - IT - Professional Services",tecnologie:"Elaborazione Linguaggio Naturale, Chatbot"},
{id:124,tipologia:"Università",denominazione:"Dip. Informatica - UniTO",website:"http://beta.di.unito.it/index.php/italiano/ricerca/gruppi/ai/presentazione",citta:"Torino",regione:"Piemonte",settore:"Automotive, Bioinformatica, Educazione, Pubblica amministrazione territoriale (regionale e locale), Ricerca Applicata / Statistica, Robotica, Smart-Cities",tecnologie:"Computer Vision, Elaborazione Linguaggio Naturale, Machine/Deep Learning, Recommender Systems, Robotica/Sistemi Autonomi, Sistemi Esperti"},
{id:125,tipologia:"Centro di Ricerca",denominazione:"ILC CNR",website:"http://www.ilc.cnr.it/",citta:"Pisa, Genova",regione:"Toscana, Liguria",settore:"Ambiente, Smart-Cities",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning"},
{id:126,tipologia:"PA",denominazione:"Regione Marche",website:"http://www.regione.marche.it",citta:"Ancona",regione:"Marche",settore:"Pubblica amministrazione territoriale (regionale e locale)",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning, Chatbot"},
{id:127,tipologia:"Acceleratore",denominazione:"Gellify",website:"https://www.gellify.com/",citta:"Casalecchio di Reno (BO), Milano",regione:"Emilia-Romagna, Lombardia",settore:"Economia e Finanza / Fintech /Assicurazioni, Industria di precisione, Sicurezza / Cybersecurity, Industria 4.0; Fintech; Artificial Intelligence",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning, Recommender Systems"},
{id:128,tipologia:"Startup",denominazione:"Catchy",website:"http://www.catchy.buzz/ ",citta:"Roma",regione:"Lazio",settore:"Data Journalism",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning, Recommender Systems"},
{id:129,tipologia:"Università",denominazione:"Cineca",website:"https://www.cineca.it",citta:"Casalecchio di Reno (BO)",regione:"Emilia-Romagna",settore:"Ambiente, Bioinformatica, Educazione, Energia, Pubblica amministrazione centrale, Ricerca Applicata / Statistica, Salute, Sicurezza / Cybersecurity, Processi amministrativi e organizzativi delle Università",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning, Chatbot"},
{id:130,tipologia:"Acceleratore",denominazione:"NAStartUp",website:"http://www.nastartup.it",citta:"Napoli",regione:"Campania",settore:"Smart-Cities",tecnologie:"Si da supporto alle Startup che sviluppano tecnologie"},
{id:131,tipologia:"Startup",denominazione:"Indigo",website:"https://ndg.ai/",citta:"Milano",regione:"Lombardia",settore:"Chatbot, Machine Learning, Artificial Intelligence",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning, Chatbot"},
{id:132,tipologia:"Azienda",denominazione:"Rulex",website:"https://www.rulex.ai/",citta:"Genova",regione:"Liguria",settore:"Automotive, Bioinformatica, Economia e Finanza / Fintech /Assicurazioni, Energia, Industria di precisione, Industria pesante, Pubblicità / Marketing, Robotica, Salute, Public Utilities, Regulatory Compliance",tecnologie:"Machine/Deep Learning, Recommender Systems, Robotica/Sistemi Autonomi, Sistemi Esperti"},
{id:133,tipologia:"Startup",denominazione:"Namu",website:"https://www.namu.io",citta:"Milano",regione:"Lombardia",settore:"Economia e Finanza / Fintech /Assicurazioni, Pubblicità / Marketing",tecnologie:"Machine/Deep Learning, Chatbot"},
{id:134,tipologia:"Azienda",denominazione:"U-Hopper",website:"http://www.u-hopper.com/",citta:"Trento",regione:"Trentino Alto-Adige",settore:"Smart-Cities, AI solutions per la PA",tecnologie:"Chatbot"},
{id:135,tipologia:"Azienda",denominazione:"Alkemylab",website:"http://alkemylab.it/",citta:"Milano, Roma, Cagliari e Rende",regione:"Lombardia, Lazio, Sardegna, Calabria",settore:"Ricerca Applicata / Statistica",tecnologie:"Computer Vision, Elaborazione Linguaggio Naturale, Machine/Deep Learning, Recommender Systems"},
{id:136,tipologia:"Startup",denominazione:"Jetware",website:"http://jetware.io",citta:"Roma",regione:"Lazio",settore:"Ricerca Applicata / Statistica, Sicurezza / Cybersecurity, Tecnologie dell'informazione e della comunicazion",tecnologie:"Computer Vision, Elaborazione Linguaggio Naturale, Machine/Deep Learning, Recommender Systems"},
{id:137,tipologia:"Centro di Ricerca",denominazione:"Datalifelab",website:"https://www.datalifelab.eu/",citta:"Firenze",regione:"Toscana",settore:"Ricerca Applicata / Statistica, Smart-Cities",tecnologie:"Computer Vision, Elaborazione Linguaggio Naturale, Machine/Deep Learning, Chatbot"},
{id:138,tipologia:"Azienda",denominazione:"Eudata",website:"http://www.eudata.com/",citta:"Milano",regione:"Lombardia",settore:"Automotive, Economia e Finanza / Fintech /Assicurazioni, Energia, Salute, Trasporti, Customer Service",tecnologie:"Chatbot, VoiceBOT"},
{id:139,tipologia:"Startup",denominazione:"Youaremyguide",website:"https://youaremyguide.com",citta:"Torino",regione:"Piemonte",settore:"Pubblicità / Marketing",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning, Recommender Systems, Chatbot"},
{id:140,tipologia:"PA",denominazione:"Soresa",website:"http://www.soresa.it",citta:"Napoli",regione:"Campania",settore:"Pubblica amministrazione territoriale (regionale e locale), Salute",tecnologie:"Chatbot"},
{id:141,tipologia:"Startup",denominazione:"Evo Pricing",website:"https://evopricing.com/",citta:"Torino",regione:"Piemonte",settore:"Consulenza; IT",tecnologie:"Machine/Deep Learning, Analitica Predittiva"},
{id:142,tipologia:"Azienda",denominazione:"Kode",website:"https://www.kode-solutions.net/it/index.html",citta:"Pisa",regione:"Toscana",settore:"Ambiente, Automotive, Bioinformatica, Energia, Industria pesante, Ricerca Applicata / Statistica, Robotica, Salute",tecnologie:"Computer Vision, Machine/Deep Learning, Recommender Systems"},
{id:143,tipologia:"Startup",denominazione:"Cynny",website:"http://www.cynny.it",citta:"Firenze",regione:"Toscana",settore:"Pubblicità / Marketing",tecnologie:"Computer Vision, Machine/Deep Learning"},
{id:144,tipologia:"PA",denominazione:"Dip. Informatica - UniParthenope",website:"https://informatica.uniparthenope.it/",citta:"Napoli",regione:"Campania",settore:"Automotive, Educazione, Ricerca Applicata / Statistica, Robotica, Sicurezza / Cybersecurity",tecnologie:"Computer Vision, Elaborazione Linguaggio Naturale, Machine/Deep Learning, Recommender Systems, Robotica/Sistemi Autonomi, Chatbot"},

{id:145,tipologia:"Startup",denominazione:"App2check",website:"https://www.app2check.com/",citta:"Genova",regione:"Liguria",settore:"Economia e Finanza / Fintech /Assicurazioni, Energia, Pubblica amministrazione centrale, Pubblica amministrazione territoriale (regionale e locale), Pubblicità / Marketing, Ricerca Applicata / Statistica, Salute, Smart-Cities, Trasporti",tecnologie:"Elaborazione Linguaggio Naturale, Machine/Deep Learning, Sistemi Esperti, Chatbot, Cognitive Cybersecurity, Sentiment Analysis"},
{id:146,tipologia:"Centro di Ricerca",denominazione:"Modict",website:"http://modict.com/",citta:"Lecce",regione:"Puglia",settore:"Ricerca Applicata / Statistica",tecnologie:"Machine/Deep Learning"},
{id:147,tipologia:"Azienda",denominazione:"OnAIR",website:"http://www.onairweb.com",citta:"Genova",regione:"Liguria",settore:"Ambiente, Ricerca Applicata / Statistica, Smart-Cities, Trasporti",tecnologie:"Computer Vision, Machine/Deep Learning, Predictive Analytics"},

				];




  $("#download").click(function() {
    $("#iaMapping").tabulator("download", "xlsx", "data.xlsx");
  });

  $("#iaMapping").tabulator("setData", tabledata);
  
  var modal = document.getElementById('modalDetail');
  var span = document.getElementsByClassName("close")[0];

  span.onclick = function() {
      modal.style.display = "none";
  }
  
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
});
