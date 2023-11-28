function showEmotion(emotion) {
  var emotionText = document.getElementById('emotion-text');
  var buttonsContainer = document.getElementById('buttons-container');

  if (emotion === '... si tu as besoin de motivation') {
    emotionText.textContent = `Allez mon p’tit keur, que ce soit pour aller à la salle, faire du bricolage, faire un truc administratif ou juste sortir de ton lit bien chaud (dans lequel j’aimerais être), c’est le moment ! Hop hop hop on se lève, on se prépare et on fait ce qu’on a à faire ! A 3 tu y vas : 1, 2, 3 ! (Après c’est aussi ok de s’écouter, de ne pas dépasser ses limites et de prendre du repos <3).`;
    emotionText.style.color = '#000000';
    emotionText.style.padding = '60px'
    emotionText.style.fontSize = '16px';
    emotionText.style.fontWeight = 'bold';
    emotionText.style.textAlign = 'center';
  } else if (emotion === '... si tu as besoin d\'amour') {
    emotionText.textContent = `
    Je t’aime mon p’tit keur. Je le dis tellement de fois que je pense que tu ne doutes pas de mon amour pour toi.
    Depuis ce fameux match de hockey en Suède, il n’y a pas un seul jour pendant lequel je n’ai pas pensé à toi.
    Je t’aime un peu plus chaque jour, et à chaque fois que je te découvre et que j’en apprends un peu plus sur qui tu es et ton histoire.
  `;
    emotionText.style.color = '#000000';
    emotionText.style.padding = '60px'
    emotionText.style.fontSize = '16px';
    emotionText.style.fontWeight = 'bold';
    emotionText.style.textAlign = 'center';
  } else if (emotion === '... si tu as besoin de réconfort, tu te sens triste ou seul') {
    emotionText.textContent = `C’est ok de ne pas se sentir au top de temps en temps, il ne faut pas culpabiliser mais accepter ces émotions qui nous traversent. Les émotions sont fantastiques mais elles peuvent parfois nous mettre mal à l’aise. Alors fais quelque chose qui te plaît et qui te fait du bien, prend du temps pour toi, et ça ira mieux ! <3`;
    emotionText.style.color = '#000000';
    emotionText.style.padding = '60px'
    emotionText.style.fontSize = '16px';
    emotionText.style.fontWeight = 'bold';
    emotionText.style.textAlign = 'center';
  } else if (emotion === '... si tu as envie de te sentir proche de moi') {
    emotionText.textContent = `Je suis là mon p’tit keur, je ne compte pas partir de sitôt. Imagine-moi tranquillement chez moi, sur mon téléphone ou en train de faire le ménage (ma passion favorite), et sûrement en train de penser à toi, ou de ressasser les souvenirs qu’on a ensemble. Et tu peux faire de même : regarder des photos de nous et quelques-unes des centaines de vidéos que j’ai prises de toi. <3`;
    emotionText.style.color = '#000000';
    emotionText.style.padding = '60px'
    emotionText.style.fontSize = '16px';
    emotionText.style.fontWeight = 'bold';
    emotionText.style.textAlign = 'center';
  } else if (emotion === '... si tu es en colère, tu as envie de te calmer') {
    emotionText.textContent = `Tout ce que tu ressens est valide, peu importe ce qui te met en colère, tu es légitime de ressentir ce sentiment désagréable. Recentre-toi, respire et essaie de faire ressortir des choses positives concernant la situation. Tu peux venir me parler de la situation et extérioriser, ça fait toujours du bien de parler de ce qui nous tracasse, et je ne te jugerai jamais.`;
    emotionText.style.color = '#000000';
    emotionText.style.padding = '60px'
    emotionText.style.fontSize = '16px';
    emotionText.style.fontWeight = 'bold';
    emotionText.style.textAlign = 'center';
  } else if (emotion === '... si tu ne te sens pas bien, tu as mal quelque part') {
    emotionText.textContent = `Tu es dans une situation inconfortable, tu as peut-être un mal de tête ou de ventre (pas parce que tu as mangé quelque chose de vegan j’espère). Déjà sache que je suis désolée que ça t’arrive et que je ne me sens pas bien quand tu ne te sens pas bien. Je sais que tu ne préfères pas prendre de médicaments alors allonge-toi tranquillement, regarde une vidéo, scrolle sur Dealabs ou essaie de te reposer et de t’endormir si possible (et imagine que je suis dans ton dos collée à toi et que la chaleur de mon corps t’apaise).`;
    emotionText.style.color = '#000000';
    emotionText.style.padding = '60px'
    emotionText.style.fontSize = '16px';
    emotionText.style.fontWeight = 'bold';
    emotionText.style.textAlign = 'center';
  } else if (emotion === '... si tu as besoin d\'amour (encore)') {
    emotionText.textContent = `JE T’AIME MAXIME OLIVIER JEAN-LUC SABIN GUILAIN CASTAING. J’aime tes yeux qui brillent, ton petit cul rebondi, ta moustache, tes biceps, ton sourire, ton ventre, tes cuisses, tes pieds, bref, j’aime tout chez toi, de ta tête à tes pieds. J’aime aussi ta personnalité, ton sens de l’humour, ta curiosité, ton côté joueur, ta culture générale, ta gentillesse et ta serviabilité. Tu es incroyable et j’aimerais que tu puisses te voir à travers mes yeux.`;
    emotionText.style.color = '#000000';
    emotionText.style.padding = '60px'
    emotionText.style.fontSize = '16px';
    emotionText.style.fontWeight = 'bold';
    emotionText.style.textAlign = 'center';
  } else if (emotion === '... si tu te sens fatigué') {
    emotionText.textContent = `Repose-toi mon p’tit keur, fais-toi passer en priorité et prends du temps pour toi, pour recharger tes batteries. Fais quelque chose que tu aimes, fais une sieste, fais ce que tu veux mais ralentis le rythme, respire, regarde autour de toi et sois dans le moment présent. Essaye d’en faire moins et de ne pas dire oui à tout ce qu’on te propose pour te préserver.`;
    emotionText.style.color = '#000000';
    emotionText.style.padding = '60px'
    emotionText.style.fontSize = '16px';
    emotionText.style.fontWeight = 'bold';
    emotionText.style.textAlign = 'center';
  } else if (emotion === '... si tu as envie d\'être excité, de prendre soin de Popol (-18)') {
    emotionText.textContent = `Mmmmhhhh… tu ne peux pas savoir comme j’aime parler de Popol, le voir se réveiller, s’agrandir et se durcir. Je l’aime tellement que si je pouvais je le mettrais dans ma bouche à n’importe quel moment parce que je sais que tu adores ça (et j’aime le mettre mou dans ma bouche et le sentir se durcir). J’adore quand on fait l’amour, sentir tes va-et-vient réguliers et t’entendre prendre du plaisir (et oh mon dieu comme j’aime quand on le fait deux fois d’affilée). Et voilà, maintenant j’ai envie de toi…`;
    emotionText.style.color = '#000000';
    emotionText.style.padding = '60px'
    emotionText.style.fontSize = '16px';
    emotionText.style.fontWeight = 'bold';
    emotionText.style.textAlign = 'center';
  } else if (emotion === '... si tu doutes de toi, tu as besoin d\'un petit coup de boost') {
    emotionText.textContent = `Déjà ça m’étonnerait que tu aies cliqué sur ce bouton car je ne comprends pas comment tu pourrais douter de toi, t’es inkrédible ! Tu as des capacités incroyables, qu’elles soient mentales ou techniques. Tu as une culture générale surprenante, un sens de la réflexion et de l’argumentation époustouflant, tu as fait (et réussi) des études poussées dans un domaine précis (tu es clairement un expert), tu sais utiliser tes mains et bricole comme un Dieu, bref, tu es vraiment incroyable.`;
    emotionText.style.color = '#000000';
    emotionText.style.padding = '60px'
    emotionText.style.fontSize = '16px';
    emotionText.style.fontWeight = 'bold';
    emotionText.style.textAlign = 'center';
  } else {
    emotionText.textContent = `J’aime te faire plaisir et te faire des petites attentions, que ce soit te faire à manger, nettoyer ta chambre, te faire un massage ou te faire un cadeau. J’ai envie de te donner tout l’amour que j’ai (et j’en ai beaucoup). J’ai envie de te faire des bisous et des câlins tout le temps. J’ai envie d’exprimer mon amour envers toi sous toutes les formes possibles et inimaginables : contact physique, lettre d’amour, cadeaux, petites attentions, … et je regorge d’inspiration pour te faire plaisir. Je t’aime <3`;
    emotionText.style.color = '#000000';
    emotionText.style.padding = '60px'
    emotionText.style.fontSize = '16px';
    emotionText.style.fontWeight = 'bold';
    emotionText.style.textAlign = 'center';
}

  buttonsContainer.appendChild(initialEmotionText.cloneNode(true));}
