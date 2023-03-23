
function typeWriterAnimation(elementId, getTitleFunction) {
    var string = getTitleFunction();
    var title = string.split("");
    var el = document.getElementById(elementId);
    var cursor = document.createElement('span');
  
    cursor.innerHTML = '&#9608;';
    cursor.classList.add('cursor');
    el.appendChild(cursor);
  
    
    (function animate() {
        if (title.length > 0) {
            el.insertBefore(document.createTextNode(title.shift()), cursor);
            var minDelay = 50;
            var maxDelay = 250;
            var delay = Math.random() * (maxDelay - minDelay) + minDelay;
            var running = setTimeout(animate, delay);
        } else {
            // Timeout for blinking cursor after writing animation
            setTimeout(() => {
                cursor.style.display = 'none';
            }, 3000);
        }
    })();
  }
  