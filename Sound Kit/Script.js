// Przypisanie klawiszy.
document.body.addEventListener('keypress', (e)=>{
    
    path1 = RecordPath1(e.charCode);
    path2 = RecordPath2(e.charCode);
    path3 = RecordPath3(e.charCode);
    path4 = RecordPath4(e.charCode);
    switch (e.charCode)
    {
    case 113:
    {
        let sBoom = document.querySelector('#Boom')
        sBoom.currentTime = 0
        sBoom.play()

        break; 
    }
    case 119:
    {
        let sClap = document.querySelector('#Clap')
        sClap.currentTime = 0
        sClap.play()
        break;
    }
    case 101:
    {
        let sHiHat = document.querySelector('#HiHat')
        sHiHat.currentTime = 0
        sHiHat.play()
        break;
    }
    case 97:
    {
        let sKick = document.querySelector('#Kick')
        sKick.currentTime = 0
        sKick.play()
        break;
    }
    case 115:
    {
        let sOpenHat = document.querySelector('#OpenHat')
        sOpenHat.currentTime = 0
        sOpenHat.play()
        break;
    }
    case 100:
    {
        let sRide = document.querySelector('#Ride')
        sRide.currentTime = 0
        sRide.play()
        break;
    }
    case 122:
    {
        let sSnare = document.querySelector('#Snare')
        sSnare.currentTime = 0
        sSnare.play()
        break;
    }
    case 120:
    {
        let sTink = document.querySelector('#Tink')
        sTink.currentTime = 0
        sTink.play()
        break;
    }
    case 99:
    {
        let sTom = document.querySelector('#Tom')
        sTom.currentTime = 0
        sTom.play()
        break;
    }
    }
})

//wszystko na raz
    let playAll = document.querySelector("#playAll");
    playAll.addEventListener('click' ,  function(){
        Reader1(path1);
        Reader2(path2);
        Reader3(path3);
        Reader4(path4);
    });  

function PlayPath(charCode )
{
    switch(charCode)
    {
        case 113: 
        Boom.currentTime = 0;
        Boom.play();
        break;

        case 119:
        Clap.currentTime = 0;
        Clap.play();
        break;

        case 101:
        HiHat.currentTime = 0;
        HiHat.play();
        break;

        case 97:
        Kick.currentTime = 0;
        Kick.play();
        break;

        case 115:
        OpenHat.currentTime = 0;
        OpenHat.play();
        break;

        case 100:
        Ride.currentTime = 0;
        Ride.play();
        break;

        case 122:
        Snare.currentTime = 0;
        Snare.play();
        break;

        case 120:
        Tink.currentTime = 0;
        Tink.play();
        break;

        case 99:
        Tom.currentTime = 0;
        Tom.play();
        break;
    }
}
    
    let r1 = document.querySelector("#r1");
    let play1 = document.querySelector("#play1");
    let d1 = new Date();
    let time1;
    let tab1 = new Array();
    let path1 = new Array();

// Zaznaczenie boxa nagrywanie

    r1.addEventListener( 'change', function() {
        if(this.checked) {
            d1 = new Date();
            time1 = d1.getTime();
            tab1 = new Array();
        }
    });

// Przycisk play, gra patch1

    play1.addEventListener('click' ,  function(){
        Reader1(path1);
    });  

//Nagrywanie
    
function RecordPath1(charCode)
     {
         d1 = new Date();
         if(document.querySelector("#r1").checked == true)
         {
            tab1.push(d1.getTime() - time1 , charCode);
            return tab1;
         }
         else
         {
            return tab1;
         }
     }

//Odtwarzanie ściezki dźwiękowej
    
    function Reader1(tab1)
    {
        for(let i = 0 ; i< tab1.length ; i+=2)
        {
            setTimeout(function(){PlayPath(tab1[i+1])} , tab1[i] );
        }
    }

// Nagrywanie drugiej

    let r2 = document.querySelector("#r2");
    let play2 = document.querySelector("#play2");
    let d2 = new Date();
    let time2;
    let tab2 = new Array();
    let path2 = new Array();

    r2.addEventListener( 'change', function() {
        if(this.checked) {
            d2 = new Date();
            time2 = d2.getTime();
            tab2 = new Array();
        }
    });

    play2.addEventListener('click' ,  function(){
        Reader2(path2);
    });  

    function RecordPath2(charCode)
     {
         d2 = new Date();
         if(document.querySelector("#r2").checked == true)
         {
            tab2.push(d2.getTime() - time2 , charCode);
            return tab2;
         }
         else
         {
            return tab2;
         }
     }

    function Reader2(tab2)
    {
        for(let i = 0 ; i< tab2.length ; i+=2)
        {
            setTimeout(function(){PlayPath(tab2[i+1])} , tab2[i] );
        }
    }

// Nagrywanie trzeciej

    let r3 = document.querySelector("#r3");
    let play3 = document.querySelector("#play3");
    let d3 = new Date();
    let time3;
    let tab3 = new Array();
    let path3 = new Array();

    r3.addEventListener( 'change', function() {
        if(this.checked) {
            d3 = new Date();
            time3 = d3.getTime();
            tab3 = new Array();
        }
    });

    play3.addEventListener('click' ,  function(){
        Reader3(path3);
    });  

    function RecordPath3(charCode)
     {
         d3 = new Date();
         if(document.querySelector("#r3").checked == true)
         {
            tab3.push(d3.getTime() - time3 , charCode);
            return tab3;
         }
         else
         {
            return tab3;
         }
     }

    function Reader3(tab3)
    {
        for(let i = 0 ; i< tab3.length ; i+=2)
        {
            setTimeout(function(){PlayPath(tab3[i+1])} , tab3[i] );
        }
    }

// Nagrywanie

    let r4 = document.querySelector("#r4");
    let play4 = document.querySelector("#play4");
    let d4 = new Date();
    let time4;
    let tab4 = new Array();
    let path4 = new Array();

    r4.addEventListener( 'change', function() {
        if(this.checked) {
            d4 = new Date();
            time4 = d4.getTime();
            tab4 = new Array();
        }
    });

    play4.addEventListener('click' ,  function(){
        Reader4(path4);
    });  

    function RecordPath4(charCode)
     {
         d4 = new Date();
         if(document.querySelector("#r4").checked == true)
         {
            tab4.push(d4.getTime() - time4 , charCode);
            return tab4;
         }
         else
         {
            return tab4;
         }
     }

    function Reader4(tab4)
    {
        for(let i = 0 ; i< tab4.length ; i+=2)
        {
            setTimeout(function(){PlayPath(tab4[i+1])} , tab4[i] );
        }
    }

    





