const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╭━━━━〔 *${settings.botName || 'LASER-MD'}* 〕━━━━╮
┃ 🛠️ Version: *${settings.version || '3.0.0'}*
┃ 👤 Owner: *${settings.botOwner || 'Dev Weed'}*
┃ 📺 YT: ${global.ytch}
╰━━━━━━━━━━━━━━━━━━━━━━━╯

*COMMAND LIST:*

🤖─────────────────🤖
🥷𝐈𝐁𝐑𝐀𝐇𝐈𝐌𝐀 𝐒𝐎𝐑𝐘 𝐒𝐀𝐂𝐊𝐎🥷
🤖─────────────────🤖

🥷──────────────────🥷
『 𝗚𝗘𝗡𝗘𝗥𝗔𝗟-𝗖𝗘𝗡𝗧𝗥𝗔𝗟-𝗛𝗘𝗫 』
│ ⬡ .help → aide du bot
│ ⬡ .menu → afficher le menu
│ ⬡ .ping → vitesse du bot
│ ⬡ .alive → état du bot
│ ⬡ .tts <text> → texte en audio
│ ⬡ .owner → propriétaire
│ ⬡ .joke → blague
│ ⬡ .quote → citation
│ ⬡ .fact → fait intéressant
│ ⬡ .weather → météo
│ ⬡ .news → actualités
│ ⬡ .attp → texte en sticker
│ ⬡ .lyrics → paroles musique
│ ⬡ .8ball → boule magique
│ ⬡ .groupinfo → infos groupe
│ ⬡ .staff → staff du groupe
│ ⬡ .vv → voir vue unique
│ ⬡ .trt → traduction
│ ⬡ .ss → capture écran
│ ⬡ .jid → identifiant chat
│ ⬡ .url → lien raccourci
╰──────────────────🥷

🥷──────────────────🥷
『 𝗔𝗗𝗠𝗜𝗡-𝗖𝗘𝗡𝗧𝗥𝗔𝗟-𝗛𝗘𝗫 』
│ ⬡ .ban → bannir membre
│ ⬡ .kick → expulser membre
│ ⬡ .warn → avertir membre
│ ⬡ .promote → rendre admin
│ ⬡ .demote → retirer admin
│ ⬡ .mute → muter groupe
│ ⬡ .unmute → démuter groupe
│ ⬡ .delete → supprimer message
│ ⬡ .clear → nettoyer chat
│ ⬡ .tagall → mentionner tous
│ ⬡ .hidetag → tag caché
│ ⬡ .antilink → anti-lien
│ ⬡ .antibadword → anti-insultes
│ ⬡ .welcome → message bienvenue
│ ⬡ .goodbye → message au revoir
│ ⬡ .setgname → changer nom groupe
│ ⬡ .setgpp → photo du groupe
╰──────────────────🥷

🥷──────────────────🥷
『 𝗢𝗪𝗡𝗘𝗥-𝗖𝗘𝗡𝗧𝗥𝗔𝗟-𝗛𝗘𝗫 』
│ ⬡ .mode → public / privé
│ ⬡ .clearsession → supprimer session
│ ⬡ .cleartmp → vider fichiers tmp
│ ⬡ .update → mettre à jour bot
│ ⬡ .settings → paramètres bot
│ ⬡ .autostatus → statut auto
│ ⬡ .autoread → lecture auto
│ ⬡ .anticall → bloquer appels
│ ⬡ .pmblocker → bloquer mp
│ ⬡ .setpp → photo profil bot
│ ⬡ .setmention → mention auto
╰──────────────────🥷

🥷──────────────────🥷
『 𝗘𝗗𝗜𝗧𝗜𝗡𝗚-𝗖𝗘𝗡𝗧𝗥𝗔𝗟-𝗛𝗘𝗫 』
│ ⬡ .sticker → créer sticker
│ ⬡ .simage → sticker image
│ ⬡ .remini → améliorer qualité
│ ⬡ .removebg → enlever fond
│ ⬡ .blur → flouter image
│ ⬡ .crop → recadrer image
│ ⬡ .meme → créer meme
│ ⬡ .take → récupérer média
│ ⬡ .emojimix → mixer emojis
│ ⬡ .igs → story instagram
│ ⬡ .igsc → commentaires IG
╰──────────────────🥷

🥷──────────────────🥷
『 𝗔𝗜 & 𝗚𝗔𝗠𝗘𝗦-𝗖𝗘𝗡𝗧𝗥𝗔𝗟-𝗛𝗘𝗫 』
│ ⬡ .gpt → ChatGPT
│ ⬡ .gemini → IA Gemini
│ ⬡ .imagine → générer image IA
│ ⬡ .flux → image flux
│ ⬡ .sora → vidéo IA
│ ⬡ .tictactoe → jeu morpion
│ ⬡ .hangman → jeu pendu
│ ⬡ .trivia → quiz culture
│ ⬡ .truth → vérité
│ ⬡ .dare → action
╰──────────────────🥷

🥷──────────────────🥷
『 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥-𝗖𝗘𝗡𝗧𝗥𝗔𝗟-𝗛𝗘𝗫 』
│ ⬡ .play → jouer musique
│ ⬡ .song → télécharger musique
│ ⬡ .video → télécharger vidéo
│ ⬡ .spotify → musique spotify
│ ⬡ .ytmp4 → vidéo youtube
│ ⬡ .instagram → télécharger IG
│ ⬡ .facebook → télécharger FB
│ ⬡ .tiktok → télécharger TikTok
╰──────────────────🥷

🥷──────────────────🥷
『 𝗧𝗘𝗫𝗧𝗠𝗔𝗞𝗘𝗥-𝗖𝗘𝗡𝗧𝗥𝗔𝗟-𝗛𝗘𝗫 』
│ ⬡ .neon → texte néon
│ ⬡ .glitch → texte glitch
│ ⬡ .fire → texte feu
│ ⬡ .ice → texte glace
│ ⬡ .snow → texte neige
│ ⬡ .matrix → texte matrix
│ ⬡ .hacker → style hacker
│ ⬡ .devil → style démon
│ ⬡ .sand → texte sable
╰──────────────────🥷

🥷──────────────────🥷
『 𝗦𝗬𝗦𝗧𝗘𝗠-𝗖𝗘𝗡𝗧𝗥𝗔𝗟-𝗛𝗘𝗫 』
│ ⬡ .git → info git
│ ⬡ .github → lien github
│ ⬡ .sc → code source
│ ⬡ .repo → dépôt bot
│ ⬡ .script → script bot
╰──────────────────🥷

🥷───────────────────🥷
        ⚡ 𝗜𝗕-𝗖𝗘𝗡𝗧𝗥𝗔𝗟-𝗛𝗘𝗫 ⚡
   propulsé par 𝗜𝗕𝗦𝗔𝗖𝗞𝗢™
🥷───────────────────🥷

*Join our channel for updates:*`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        const contextInfo = {
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363317041132843@newsletter',
                newsletterName: 'Ibsacko🥷',
                serverMessageId: -1
            }
        };

        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo
            }, { quoted: message });
        } else {
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
