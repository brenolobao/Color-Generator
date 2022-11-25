const button = document.querySelector('.button')
button.addEventListener('click',function(){
  document.querySelector('.container').style.background = gerar_cor()
  document.querySelector('.color').innerText = document.querySelector('.container').style.background
})
function gerar_cor(opacidade = 1) {
            let r = Math.random() * 255;
            let g = Math.random() * 255;
            let b = Math.random() * 255;

            return `rgba(${r.toFixed(1)}, ${g.toFixed(1)}, ${b.toFixed(1)}, ${opacidade})`;
        }