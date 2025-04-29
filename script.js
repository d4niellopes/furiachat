document.addEventListener('DOMContentLoaded', function() {

    // Elementos do DOM
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const messagesContainer = document.getElementById('messages');
    const tabLinks = document.querySelectorAll('.sidebar li');
    const tabContents = document.querySelectorAll('.tab-content');
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    // Dados do chat
    const players = [
        {
            name: 'Gabriel "FalleN" Toledo',
            role: "In-Game Leader / Rifler",
            age: 33,
            nationality: "Brasileiro",
            since: "2023",
            image: "https://img-cdn.hltv.org/gallerypicture/6K31cnSQ-6ifEBK45dmXkx.jpg?ixlib=java-2.1.0&w=1200&s=a0c872fbb5f6076b38f8034aef537a43",
            bio: "Lenda do CS brasileiro, considerado um dos maiores AWPers e in-game leaders da história. Voltou à FURIA em 2023 trazendo experiência e liderança."
        },
        {
            name: 'Yuri "yuurih" Santos',
            role: "Rifler / Lurker",
            age: 25,
            nationality: "Brasileiro",
            since: "2017",
            image: "https://pbs.twimg.com/media/GfRmDX8XUAAX49m?format=jpg&name=4096x4096",
            bio: "Um dos pilares da FURIA, conhecido por sua consistência e versatilidade. Pode jogar em várias posições e é um dos melhores jogadores do time."
        },
        {
            name: 'Kaike "KSCERATO" Cerato',
            role: "Entry Fragger",
            age: 25,
            nationality: "Brasileiro",
            since: "2018",
            image: "https://s2-ge.glbimg.com/8zM0jXVD54n0RKX_g-atQqMviV4=/0x0:2048x1365/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/Y/T/i12VLhTsmXT702lT7PHw/53125374955-294b437366-k.jpg",
            bio: "Considerado um dos melhores entry fraggers do mundo. Conhecido por sua precisão e capacidade de abrir rondas para o time."
        },
        {
            name: 'Mareks “YEKINDAR” Gaļinskis',
            role: "Stand-in",
            age: 25,
            nationality: "Latvia",
            since: "2025",
            image: "https://img-cdn.hltv.org/gallerypicture/xI88WxGlL-jfX8CxJjxGmz.jpg?ixlib=java-2.1.0&w=1200&s=ee1878bda31ee00c00a94a5222ee08a1",
            bio: "Na Virtus.pro, YEKINDAR foi considerado por muitos o melhor jogador do mundo como entry"
        },
        {
            name: 'Danil "molodoy" Golubenko',
            role: "AWPer",
            age: 20,
            nationality: "Ucraniano",
            since: "2025",
            image: "https://assets.gamearena.gg/wp-content/uploads/2025/04/11165732/molodoy-furia-1024x640.jpg",
            bio: "Jogador ucraniano que chegou à FURIA em 2025. Traz uma visão estratégica internacional e experiência em times europeus."
        },
        {
            name: 'Sid "sidde" Macedo',
            role: "Coach",
            age: 28,
            nationality: "Brasileiro",
            since: "2024",
            image: "https://img-cdn.hltv.org/gallerypicture/BV6tzSGvJKWTIpKR2H9XLi.jpg?ixlib=java-2.1.0&w=1200&s=89a846d3205b447c6efe74d0414b1171",
            bio: "Head Coach do time, responsável pela organização e estratégias na equipe."
        }
    ];

    const historyTimeline = [
        {
            year: "2017",
            event: "Fundação da FURIA Esports",
            description: "A organização FURIA é fundada, inicialmente com times em diversos jogos."
        },
        {
            year: "2018",
            event: "Formação do time de CS:GO",
            description: "FURIA monta seu primeiro time de CS:GO com jogadores brasileiros promissores."
        },
        {
            year: "2019",
            event: "Primeiro título internacional",
            description: "Vitória no ECS Season 7 Finals, derrotando Team Liquid na final."
        },
        {
            year: "2020",
            event: "Consolidação no cenário internacional",
            description: "Chegam ao top 5 do ranking mundial com estilo de jogo agressivo."
        },
        {
            year: "2021",
            event: "Mudanças no elenco",
            description: "VINI é substituído por drop, trazendo nova dinâmica ao time."
        },
        {
            year: "2022",
            event: "Chegada ao Major",
            description: "Primeira participação em Major de CS:GO, chegando às semifinais."
        },
        {
            year: "2023",
            event: "Era FalleN",
            description: "Contratação da lenda FalleN e chelo, reformulando completamente o time."
        }
    ];

    const upcomingMatches = [
        {
            date: "SEM DATA MARCADA",
            time: "XX:XX",
            opponent: "...",
            tournament: "MAJOR",
            location: "China"
        }
    ];

    const funFacts = [
        "FURIA foi a primeira organização brasileira a vencer um torneio internacional de CS:GO desde a MIBR em 2006.",
        "O apelido 'FURIA' vem do estilo de jogo agressivo que o time adotou desde o início.",
        "KSCERATO já foi considerado o jogador com melhor rating HLTV em torneios internacionais.",
        "O KSCERATO quase seguiu carreira no futebol antes de se dedicar ao CS:GO!",
        "A FURIA tem uma das torcidas mais apaixonadas do CS:GO mundial, conhecida como 'FURIA FAMÍLIA'.",
        "yuurih e KSCERATO são os únicos jogadores que permaneceram no time desde sua formação.",
        "FalleN foi contratado em 2023 tornando-se o jogador mais velho da equipe.",
        "A FURIA foi o primeiro time brasileiro a vencer o Team Liquid em uma final internacional.",
        "O time é conhecido por seu mapa de assinatura, Vertigo, onde tem um dos melhores winrates do mundo.",
        "A FURIA tem um centro de treinamento de ponta em São Paulo com tecnologia de última geração."
    ];

    const news = [
        {
            title: "TACO tranquiliza torcida da FURIA por comunicação em inglês e elogia: As contratações fizeram sentido ",
            description: "O que você precisa é saber se comunicar em inglês, que é diferente de saber inglês. Você pode jogar num time que comunique em inglês e se comunicar em inglês. Isso não vai acontecer, tá? não vai acontecer isso do molodoy falar numa língua pro YEKINDAR traduzir. Não vai acontecer. Você não necessariamente precisa saber inglês 100% para jogar CS comunicando em inglês, explicou.",
            date: "25/04/2025",
            image: "https://static.draft5.gg/news/2024/05/06125822/Liquid-YEKINDAR-ESL-Pro-League-S19.jpg"
        },
        {
            title: "mch analisa passagem de YEKINDAR pela Liquid: em poucas vezes eu tinha visto um CS tão mal jogado",
            description: "Pela Virtus.pro, ele era um jogador que estava quase bugando o CS, no sentido de tipo assim 'caramba, olha como esse cara joga diferente e dá certo'. Ele resolveu ir pra Liquid e esse estilo dele começou a funcionar menos. Com todo o respeito ao YEKINDAR, mas nos últimos momentos ele estava sendo um jogador quase cômico. - diz",
            date: "25/04/2025",
            image: "https://i.ytimg.com/vi/Z2o47kVJjBY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLARuZAYLjM4WSC7NkGbWQH4hg3MMg"
        },
        {
            title: "fer diz que FalleN é 'muito bom de rifle' e opina sobre YEKINDAR: 'É ruim demais'",
            description: "'O FalleN vai entender o jogo muito mais rápido do que os caras porque agora tá de rifle, vai começar a agir e a galera não vai conseguir entender esse ritmo, isso que vai ser o ruim. Até ele passar isso aí em inglês, já fu###. A galera não sabe, mas o FallleN é muito bom de rifle, só que ele vai criar uns espaços que o big picture da galera, de entendimento, não vai acompanhar. O YEKINDAR, para mim, é ruim demais. Em época de páscoa tá longe de ser bombom, no CS2 não se encontrou até hoje. Sou melhor que o YEKINDAR até três anos sem jogar.'",
            date: "25/04/2025",
            image: "https://assets.gamearena.gg/wp-content/uploads/2023/01/30012844/kEB2PD-mPuubj3SQt0TYN8-1024x683.jpg"
        }
    ];
    // Teste de como seria uma partida ao vivo (dados falsos)
    const liveMatch = {
        team1: "FURIA",
        team2: "Team Liquid",
        score1: 12,
        score2: 9,
        logo1: "https://static.draft5.gg/teams/86328-Furia-Gaming.png",
        logo2: "https://static.draft5.gg/teams/20-liquid-44ece0ab4b.png",
        map: "Mirage",
        round: "21",
        status: "AO VIVO",
        events: [
            { time: "10:32", text: "KSCERATO elimina 3 jogadores com uma granada!" },
            { time: "09:45", text: "FURIA vence o round 12" }
        ]
    };

    // Inicialização das funções
    initPlayers();
    initTimeline();
    initMatches();
    initCrowdSimulator();
    initFunFacts();
    initNews();
    initLiveMatch();
    simulateLiveUpdates();

    // Mensagem de boas-vindas
    setTimeout(() => {
        addMessage('<strong style="color: #FF5C00;">🐾 FAAALA FURIOSO! Eu sou o FURIO, seu assistente virtual. Posso te ajudar com:</strong>', false);
        setTimeout(() => {
            addMessageWithButton("📰 Últimas notícias (digite '/noticias')", "noticias");
            setTimeout(() => {
                addMessageWithButton("⚽ Informações sobre os jogadores (digite '/jogadores')", "jogadores");
                setTimeout(() => {
                    addMessageWithButton("📅 Próximos jogos (digite '/jogos')", "jogos");
                    setTimeout(() => {
                        addMessageWithButton("📜 História do time (digite '/historia')", "historia");
                        setTimeout(() => {
                            addMessageWithButton("🔍 Curiosidades (digite '/curiosidade')", "curiosidade");
                            setTimeout(() => {
                                addMessage("👉 Ou clique nos menus ao lado para navegar! 🐾", false);
                        }, 200); // Intervalos mais curtos
                    }, 200);
                }, 200);
            }, 200);
        }, 200);
      }, 200);
    }, 1000);
 
    // Envia o usuário para a respectiva aba após clicar no botão da mensagem de boas-vindas
    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') sendMessage();
    });

    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    tabLinks.forEach(link => {
        link.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            changeTab(tabId);
            
            // Fechar menu em mobile
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
    });

    // Funções
    
       // função teste para a partida ao vivo
    function initLiveMatch() {
        const container = document.getElementById('live-match-container');
        
        container.innerHTML = `
            <div class="match-status">${liveMatch.status}</div>
            <h3>${liveMatch.map} • Round ${liveMatch.round}</h3>
            
            <div class="live-score">
                <div class="team">
                    <img src="${liveMatch.logo1}" alt="${liveMatch.team1}" class="team-logo">
                    <span>${liveMatch.team1}</span>
                </div>
                
                <div class="score">${liveMatch.score1} - ${liveMatch.score2}</div>
                
                <div class="team">
                    <img src="${liveMatch.logo2}" alt="${liveMatch.team2}" class="team-logo">
                    <span>${liveMatch.team2}</span>
                </div>
            </div>
            
            <div class="match-info">
                Próximo round em: <span id="next-round-timer">00:45</span>
            </div>
        `;
    
        // Renderiza eventos
        const liveChat = document.getElementById('live-chat');
        liveMatch.events.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.className = 'live-event';
            eventElement.innerHTML = `<strong>[${event.time}]</strong> ${event.text}`;
            liveChat.appendChild(eventElement);
        });
    }
        // função para simular atualizações reais de uma partida ao vivo
    function simulateLiveUpdates() {
            // Atualiza placar aleatoriamente
            setInterval(() => {
                if(Math.random() > 0.7) {
                    liveMatch.score1++;
                    document.querySelector('.live-match-container .score').textContent = `${liveMatch.score1} - ${liveMatch.score2}`;
                    addLiveEvent("FURIA marca ponto!");
                } else if(Math.random() > 0.7) {
                    liveMatch.score2++;
                    document.querySelector('.live-match-container .score').textContent = `${liveMatch.score1} - ${liveMatch.score2}`;
                    addLiveEvent(`${liveMatch.team2} marca ponto.`);
                }
                
                liveMatch.round++;
                document.querySelector('.live-match-container h3').textContent = `${liveMatch.map} • Round ${liveMatch.round}`;
            }, 10000); // Atualiza a cada 10 segundos
        }

        // Adiciona novo evento ao chat
    function addLiveEvent(text) {
        const now = new Date();
        const timeString = `${now.getMinutes()}:${now.getSeconds().toString().padStart(2, '0')}`;
        
        const eventElement = document.createElement('div');
        eventElement.className = 'live-event';
        eventElement.innerHTML = `<strong>[${timeString}]</strong> ${text}`;
        
        const liveChat = document.getElementById('live-chat');
        liveChat.appendChild(eventElement);
        liveChat.scrollTop = liveChat.scrollHeight;
    }

        // Interações da torcida
        document.getElementById('cheer-live-btn').addEventListener('click', () => {
            addLiveEvent("⚡ Torcida da FURIA grita: VAMOOOOS FURIA!");
        });

        document.getElementById('celebrate-live-btn').addEventListener('click', () => {
            addLiveEvent("🎉 Celebração da torcida! FURIA FURIA FURIA!");
        });
    function initNews() {
        const newsGrid = document.getElementById('news-grid');
        newsGrid.innerHTML = '';
    
        news.forEach(item => {
            const newsCard = document.createElement('div');
            newsCard.className = 'news-card';
            newsCard.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="news-image">
                <div class="news-content">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <div class="news-date" style="color: #FFC400;">${item.date}</div>
                </div>
            `;
            newsGrid.appendChild(newsCard);
        });
    }

    function changeTab(tabId) {
        // Atualiza menu ativo
        tabLinks.forEach(link => link.classList.remove('active'));
        document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
        
        // Mostra conteúdo correto
        tabContents.forEach(content => content.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
    }

    function addMessage(text, isUser = true) {
        const messageDiv = document.createElement('div');
        messageDiv.className = isUser ? 'message user' : 'message bot';
        messageDiv.innerHTML = text; // Mudamos de textContent para innerHTML
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    function addMessageWithButton(text, command) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message bot';
        
        const contentDiv = document.createElement('div');
        contentDiv.style.display = 'flex';
        contentDiv.style.justifyContent = 'space-between';
        contentDiv.style.alignItems = 'center';
        contentDiv.style.width = '100%';
        
        const textSpan = document.createElement('span');
        textSpan.innerHTML = text; // Usamos innerHTML para permitir emojis
        contentDiv.appendChild(textSpan);
        
        const button = document.createElement('button');
        button.className = 'inline-command-btn';
        button.textContent = 'Clique Aqui';
        button.onclick = function() {
            document.getElementById('message-input').value = `/${command}`;
            document.getElementById('send-button').click();
        };
        contentDiv.appendChild(button);
        
        messageDiv.appendChild(contentDiv);
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }  

    function sendMessage() {
        const text = messageInput.value.trim();
        if (text) {
            addMessage(text, true);
            messageInput.value = '';
            processCommand(text);
        }
    }

    function processCommand(text) {
        // Comandos do chat
        if (text.startsWith('/')) {
            const command = text.substring(1).toLowerCase();
            
            switch(command) {
                case 'ajuda':
                    showHelp();
                    break;
                case 'jogadores':
                case 'jogador':
                    showPlayers();
                    break;
                case 'jogos':
                case 'proximos jogos':
                    showMatches();
                    break;
                case 'historia':
                case 'histórico':
                    showHistory();
                    break;
                case 'curiosidade':
                case 'curiosidades':
                    showRandomFact();
                    break;
                case 'noticias':
                case 'news':
                    showNews();
                    break;
                case 'torcida':
                    simulateCrowd();
                    break;
                default:
                    addMessage("Comando não reconhecido. Digite /ajuda para ver os comandos disponíveis.", false);
            }
        } else {
            // Resposta genérica
            setTimeout(() => {
                const randomResponses = [
                    "Vamos FURIA! #DIADEFURIA",
                    "O que mais você quer saber sobre a FURIA?",
                    "Esse time me dá orgulho!",
                    "Você sabia que a FURIA foi fundada em 2017?",
                    "Estamos ansiosos para o próximo jogo!"
                ];
                const randomIndex = Math.floor(Math.random() * randomResponses.length);
                addMessage(randomResponses[randomIndex], false);
            }, 800);
        }
    }

    function showNews() {
        changeTab('news');
        setTimeout(() => {
            addMessage("Mostrando as últimas notícias. Você também pode clicar na aba 'Notícias' ao lado.", false);
        }, 500);
    }

    
    function showHelp() {
        const commands = [
            { cmd: "jogadores", icon: "👥", label: "Mostra informações sobre o elenco atual da FURIA" },
            { cmd: "jogos", icon: "📅", label: "Próximos jogos agendados do time" },
            { cmd: "historia", icon: "🏆", label: "História e conquistas da FURIA" },
            { cmd: "noticias", icon: "📰", label: "Mostra as últimas notícias da FURIA" },
            { cmd: "curiosidade", icon: "💡", label: "Mostra uma curiosidade aleatória" },
            { cmd: "torcida", icon: "📢", label: "Simula gritos da torcida FURIA" }
        ];
    
        const helpDiv = document.createElement('div');
        helpDiv.className = 'message bot';
        
        let htmlContent = `
            <div class="help-header">
                <strong>📋 Comandos disponíveis:</strong>
                <small>Clique nos botões ou digite os comandos</small>
            </div>
            <div class="help-commands-container">
        `;
    
        commands.forEach(item => {
            htmlContent += `
                <div class="help-command-row">
                    <div class="help-command-info">
                        ${item.icon} <strong>/${item.cmd}</strong> - ${item.label}
                    </div>
                    <button class="help-command-btn" data-cmd="${item.cmd}"> Clique Aqui! </button>
                </div>
            `;
        });
    
        htmlContent += `
            </div>
            <div class="help-footer">
                <em>Você também pode navegar usando os menus laterais!</em>
            </div>
        `;
    
        helpDiv.innerHTML = htmlContent;
        messagesContainer.appendChild(helpDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
        // Adiciona eventos aos botões
        document.querySelectorAll('.help-command-btn').forEach(button => {
            button.addEventListener('click', function() {
                const cmd = this.getAttribute('data-cmd');
                messageInput.value = `/${cmd}`;
                sendMessage();
            });
        });
    }

    function showPlayers() {
        changeTab('players');
        setTimeout(() => {
            addMessage("Mostrando informações sobre os jogadores. Você também pode clicar na aba 'Jogadores' ao lado.", false);
        }, 500);
    }

    function showMatches() {
        changeTab('matches');
        setTimeout(() => {
            addMessage("Mostrando os próximos jogos. Você também pode clicar na aba 'Próximos Jogos' ao lado.", false);
        }, 500);
    }

    function showHistory() {
        changeTab('history');
        setTimeout(() => {
            addMessage("Mostrando a história da FURIA. Você também pode clicar na aba 'História' ao lado.", false);
        }, 500);
    }

    function showRandomFact() {
        changeTab('facts');
        setTimeout(() => {
            addMessage("Aqui vai uma curiosidade sobre a FURIA!", false);
            setTimeout(() => {
                document.getElementById('new-fact-btn').click();
            }, 500);
        }, 500);
    }

    function simulateCrowd() {
        changeTab('crowd');
        setTimeout(() => {
            addMessage("Ativando o simulador de torcida! Use os botões para interagir.", false);
        }, 500);
    }

    function initPlayers() {
        const playersGrid = document.getElementById('players-grid');
        playersGrid.innerHTML = '';
        
        players.forEach(player => {
            const playerCard = document.createElement('div');
            playerCard.className = player.role.includes('Coach') ? 'player-card coach' : 'player-card';
            playerCard.innerHTML = `
                <img src="${player.image}" alt="${player.name}" class="player-image">
                <div class="player-info">
                    <h3>${player.name}</h3>
                    <p><strong style="color: #FFAA00;">Função:</strong> ${player.role}</p>
                    <p><strong style="color: #FFAA00;">Idade:</strong> ${player.age} anos</p>
                    <p><strong style="color: #FFAA00;">Na equipe desde:</strong> ${player.since}</p>
                    <p>${player.bio}</p>
                </div>
            `;
            playersGrid.appendChild(playerCard);
        });
    }

    function initTimeline() {
        const timeline = document.getElementById('timeline');
        timeline.innerHTML = '';
        
        historyTimeline.forEach((item, index) => {
            const timelineItem = document.createElement('div');
            timelineItem.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
            timelineItem.innerHTML = `
                <div class="timeline-content">
                    <h3>${item.year} - ${item.event}</h3>
                    <p>${item.description}</p>
                </div>
            `;
            timeline.appendChild(timelineItem);
        });
    }

    function initMatches() {
        const matchesList = document.getElementById('matches-list');
        matchesList.innerHTML = '';
        
        upcomingMatches.forEach(match => {
            const matchCard = document.createElement('div');
            matchCard.className = 'match-card';
            matchCard.innerHTML = `
                <div class="match-date">
                    ${match.date}<br>
                    ${match.time}
                </div>
                <div class="match-teams">
                      <strong>FURIA vs ${match.opponent}</strong><br> 
                    <span class="match-tournament">${match.tournament}</span>
                </div>
                <div class="match-location">
                    ${match.location}
                </div>
            `;
            matchesList.appendChild(matchCard);
        });
    }

    function initCrowdSimulator() {
        const cheerBtn = document.getElementById('cheer-btn');
        const chantBtn = document.getElementById('chant-btn');
        const celebrateBtn = document.getElementById('celebrate-btn');
        const crowdMessages = document.getElementById('crowd-messages');
        
        const crowdSounds = [
            "GO FURIA!",
            "FURIA! FURIA! FURIA!",
            "Vai FURIA!",
            "Ole ole ole ola, FURIA FURIA!",
            "É campeão!",
            "Vamos, vamos FURIA!",
            "Sou FURIA até morrer!",
            "Dia de FURIA!",
            "Aqui é FURIA!",
            "Não tem pra ninguém!",
            "É hexa! É hexa!"
        ];
        
        cheerBtn.addEventListener('click', function() {
            const randomIndex = Math.floor(Math.random() * crowdSounds.length);
            const message = document.createElement('p');
            message.textContent = `[TORCIDA] ${crowdSounds[randomIndex]}`;
            crowdMessages.appendChild(message);
            crowdMessages.scrollTop = crowdMessages.scrollHeight;
        });
        
        chantBtn.addEventListener('click', function() {
            const message = document.createElement('p');
            message.textContent = '[TORCIDA] Vamos, vamos FURIA, esta noite temos que ganhar!';
            crowdMessages.appendChild(message);
            crowdMessages.scrollTop = crowdMessages.scrollHeight;
        });
        
        celebrateBtn.addEventListener('click', function() {
            const celebrations = [
                "[TORCIDA] GOOOOOOOL! QUE JOGADA INCRÍVEL!",
                "[TORCIDA] ISSO! CLUTCH MONSTRO!",
                "[TORCIDA] ACE! ACE! ACE!",
                "[TORCIDA] QUE RETOMADA INCRÍVEL!",
                "[TORCIDA] 1 CONTRA 4 E GANHOU! LENDA!"
            ];
            const randomIndex = Math.floor(Math.random() * celebrations.length);
            const message = document.createElement('p');
            message.textContent = celebrations[randomIndex];
            crowdMessages.appendChild(message);
            crowdMessages.scrollTop = crowdMessages.scrollHeight;
        });
    }

    function initFunFacts() {
        const factDisplay = document.getElementById('fact-display');
        const newFactBtn = document.getElementById('new-fact-btn');
        
        newFactBtn.addEventListener('click', function() {
            const randomIndex = Math.floor(Math.random() * funFacts.length);
            factDisplay.innerHTML = `<p>${funFacts[randomIndex]}</p>`;
        });
    }
});