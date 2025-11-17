/*global GmCXt,guideMe*/ 
if (typeof guideMe === 'undefined') {
    guideMe = {};
}
if (!guideMe.baseUrl) {
    guideMe.baseUrl = "https://edcastabhishek.github.io/abhishek/player/sumtotal/";
} 

guideMe.getConfig = function() {
    var configPath = guideMe.baseUrl + 'config.js';
    if(typeof GmCXt === 'undefined'){
        if (configPath) {
            if (document.readyState === 'complete') {
                loadConfigFile();
            } else {
                window.addEventListener('load', function() {
                    loadConfigFile();
                });
            }
        } else {
            console.log("Invalid config path");
        }
    }

    function loadConfigFile(){
        setTimeout(function() {
            let el = document.createElement('script');
            el.onload = guideMe.getConfigCB;
            el.src = configPath;
            document.head.appendChild(el);
        }, 1000 );
    }
}; 

guideMe.getConfigCB = function() {

    GmCXt.conf.baseUrl = guideMe.baseUrl;
    let a = document.createElement('script');

    if (GmCXt.conf.allowedDomains && GmCXt.conf.allowedDomains.length && window.location.hostname.length > 0) {
        let foundDomain = false;
        for (let i = 0; i < GmCXt.conf.allowedDomains.length; i++) {
            if (window.location.hostname.indexOf(GmCXt.conf.allowedDomains[i]) >= 0) {
                foundDomain = true;
                break;
            }
        }

        if (foundDomain) {
            loadGuideMeClientFiles();
        }
    } else {
        loadGuideMeClientFiles();
    }

    function loadGuideMeClientFiles() {
        if (window.self === window.top) {
            a.src = GmCXt.conf.baseUrl + 'gm_client_1763391156542.js';
        } else {
            a.src = GmCXt.conf.baseUrl + 'gm_client_iframe_1763391156542.js';
        }
        document.head.appendChild(a);
    }
};

guideMe.detectExtension = function() {
    let playerExtImgUrl = "";

    if(playerExtImgUrl) {
        let img;
        img = new Image();
	    img.src = playerExtImgUrl;
	    img.onload = function() {
	        console.log("MyGuide player Extension installed, Skiping client JS load.");
	    };
	    img.onerror = function() {
	        guideMe.getConfig();
	    };
    } else {
        guideMe.getConfig();
    }    
};

guideMe.detectExtension();