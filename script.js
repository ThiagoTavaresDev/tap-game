let num_score = 0;
const audio = document.getElementById("audio-tap")

document.getElementById("char").addEventListener("click", () => {
    num_score += 1;
    const scoreElement = document.getElementById("score")
    scoreElement.innerHTML = num_score
    audio.play()
})

  document.body.addEventListener('click', function(event) {
    const clickEffect = document.createElement('div');
    clickEffect.classList.add('click-effect');
    
    clickEffect.style.left = `${event.clientX - 15}px`;
    clickEffect.style.top = `${event.clientY - 15}px`;
    
    document.body.appendChild(clickEffect);
    
    clickEffect.addEventListener('animationend', function() {
      clickEffect.remove();
    });
  });

  const audio_id_array = ['audio-pare','audio-chega','audio-tap','audio-tapa','audio-ui','audio-cavalo','audio-ai','audio-tome','audio-calma']

  let clickCount = 0;
  const maxClicks = 100; // Define o número máximo de cliques para ativar o efeito
  const clickSoundInterval = 4;
  document.getElementById("char").addEventListener("click", (event) => {
    clickCount += 1;
    const imageElement = document.getElementById("char");
    const explosionElement = document.getElementById("explosion");
   // const explosionSound = document.getElementById("explosionSound");
  
    // Calcula a intensidade do filtro com base no número de cliques
    const intensity = Math.min(clickCount / maxClicks, 1);
    
    // Ajusta o filtro para a imagem
    imageElement.style.filter = `hue-rotate(0deg) brightness(1) sepia(${intensity}) saturate(${10 * intensity}) hue-rotate(-50deg)`;
  
    if (clickCount >= maxClicks) {
      // Posiciona o GIF de explosão no cursor
      explosionElement.style.display = 'block';
      explosionElement.style.left = `${event.clientX - (explosionElement.width / 2)}px`;
      explosionElement.style.top = `${event.clientY - (explosionElement.height / 2)}px`;
      // Reproduz o som de explosão
     const audio_fart = document.getElementById('audio-fart');
     audio_fart.play();
     imageElement.classList.add('image-fade-out');
      // Esconde o GIF após a animação (ajuste o tempo conforme o comprimento do GIF)
      setTimeout(() => {
        explosionElement.style.display = 'none';
      }, 1000); // Tempo em milissegundos, ajuste conforme necessário
    }

    if (clickCount % clickSoundInterval === 0) {
        if(clickCount < 99){
            const randomAudioId = audio_id_array[Math.floor(Math.random() * audio_id_array.length)];
            const randomAudio = document.getElementById(randomAudioId);
            randomAudio.currentTime = 0; // Reinicia o áudio para tocar desde o início
            randomAudio.play();
        }
      }
  });

  