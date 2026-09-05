document.addEventListener('DOMContentLoaded', async () => {
  const CANVAS = document.getElementById('screen');
  const CTX = CANVAS.getContext('2d');
  const FLOP = new Image();  
  FLOP.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAX0lEQVQ4T2NkoBAwwhiCgoL/YWxiwPv378F6wQRIM0wAmY9LHJk9SA2AORHicATA5h2sXiAGDGIDsPkdGeCNRphmXOGBLI/TAFyaYQBd7SAxAOY0qCuJAjCv4vUvMQAA+OS0EQStf0UAAAAQZGVCR0JGQUEwQTYwMTkyOUY0QzMkcI1kAAAAAElFTkSuQmCC";

  function PUTRECTF(X, Y, WIDTH, HEIGHT, COL) {
    CTX.fillStyle = COL;
    CTX.fillRect(X, Y, WIDTH, HEIGHT);
  }

  function PUTRECTB(X,Y,WIDTH,HEIGHT,THICK,COL){
    CTX.strokeStyle = COL;
    CTX.lineWidth = THICK;
    const OFF = (THICK % 2 === 1) ? 0.5 : 0;
    CTX.strokeRect(X+OFF,Y+OFF,WIDTH,HEIGHT);
  }

  function PUTICON(X,Y,ICON,COL){
    CTX.drawImage(ICON,X,Y);
  } 

  function PUTSTR(X,Y,STR,COL){
    CTX.fillStyle = COL;
    CTX.fillText(STR,X,Y);
  }

  function PUTMESSAGE(WIDTH,HEIGHT,MESSAGE,ICON,IWIDTH,IHEIGHT){
    const INDEX = 0;
    const CHARCORD = 0;
    const ICORD = 0;
    const ALIGNX = 320-(WIDTH/2);
    const ALIGNY = 240-(HEIGHT/2);
    const CHARX = 52+ALIGNX;
    const CHARY = ((HEIGHT-8)>>1) + ALIGNY;
    const ICORDX = ALIGNX + 16;
    const ICORDY = ALIGNY + ((HEIGHT - IHEIGHT) >> 1);
    PUTRECTB(ALIGNX,ALIGNY,WIDTH,HEIGHT,2,"#000000");
    PUTRECTF(ALIGNX+2,ALIGNY+2,WIDTH-4,HEIGHT-4,"#FFFFFF");
    PUTRECTB(ALIGNX+4,ALIGNY+4,WIDTH-8,HEIGHT-8,2,0);
    PUTSTR(CHARX,CHARY,MESSAGE,"#000000");
    PUTICON(ICORDX,ICORDY,ICON,"#000000");
} 
  await FLOP.decode();
  CTX.font = '8px "BC1.0"';
  CTX.textBaseline = 'top';
  PUTRECTF(0,0,640,480,"#FFFFFF");
  PUTMESSAGE(320,90,"Welcome.",FLOP,16,16);

});
