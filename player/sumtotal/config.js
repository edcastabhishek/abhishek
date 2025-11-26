if (GmCXt === undefined) {
    var GmCXt = {};
}

GmCXt.conf = {};
GmCXt.conf.version = "2025.5.3.1";
GmCXt.conf.env = "qa";
GmCXt.conf.infra = "aws";

GmCXt.conf.creatorApp = 'mgExt';
GmCXt.conf.playerApp = 'mgPlayer';
GmCXt.conf.appName = "mgPlayer";

GmCXt.conf.allowedDomains = [];
GmCXt.conf.appTypeExt = 'Extension';
GmCXt.conf.appTypeScript = 'JScript';
GmCXt.conf.appTypeElectron = 'electron';
GmCXt.conf.Premise = 'Premise';
GmCXt.conf.runEnv = "browser";
GmCXt.conf.msgPrefix = "mgPlayerJSqa_";

GmCXt.conf.showWidget = false;

GmCXt.conf.playerExtension = GmCXt.conf.playerApp + GmCXt.conf.appTypeExt;
GmCXt.conf.playerJS = GmCXt.conf.playerApp + GmCXt.conf.appTypeScript;

GmCXt.conf.websiteUrl = "https://myguide.org";
GmCXt.conf.privacyPolicyUrl = "https://www.cornerstoneondemand.com/client-privacy-policy/";
GmCXt.conf.termsURL = "https://www.cornerstoneondemand.com/terms-of-use/";
GmCXt.conf.feedbackDetails = "mailto:support@csod.com?Subject=MyGuide Feedback";
GmCXt.conf.adminEmail = "<a href='mailto:admin@edcast.com' target='_top'>admin@edcast.com</a>";
GmCXt.conf.hideCaptcha = "";

try {
    chrome.runtime.onMessage.addListener(function() {
        return true;
    });
    GmCXt.conf.appType = GmCXt.conf.appTypeExt;
} catch (e) {
    try {
        let uri = safari.extension.baseURI;
        if (uri !== null) {
            GmCXt.conf.appType = GmCXt.conf.appTypeExt;
        }
    } catch (e2) {
        GmCXt.conf.appType = GmCXt.conf.appTypeScript;
    }
}

// Default true, guideme icon will be visible on all urls. 
// If false, guideme icon will only be visible on urls where user have created tours. 

GmCXt.conf.allUrls = true;

GmCXt.setConfig = function() {
    GmCXt.conf.clientJsBaseUrl = "https://edcastabhishek.github.io/abhishek/player/sumtotal/";
    GmCXt.conf.chromeExtensionUrl = "";
    GmCXt.conf.webServiceUrl = "https://api-qa.cmnetwork.co/v3/";
    GmCXt.conf.staticContentPath = "https://cdn-qa.cmnetwork.co/guideme-assests/";
    GmCXt.conf.webPortalUrl = "https://admin-qa.cmnetwork.co/";
    GmCXt.conf.analyticsPath = "https://insights-api-qa.cmnetwork.co/";
    GmCXt.conf.analyticsPortalUrl = "https://insights-qa.cmnetwork.co/";

    GmCXt.conf.cdn = "https://cdn-qa.cmnetwork.co/";
    GmCXt.conf.jsonStorageUrl = "https://cdn-qa.cmnetwork.co/";
    GmCXt.conf.ssoApiUrl = "https://sso-qa.cmnetwork.co/saml2/sp/session/";
    GmCXt.conf.ssoRedirectionUrl = "https://sso-qa.cmnetwork.co/saml2/sp/sso/";
    GmCXt.conf.ssoApiUrlCreator = "https://sso-qa.cmnetwork.co/saml2/sp/creator_session/";
    GmCXt.conf.ssoRemoveCookieUrl = "";
    GmCXt.conf.ssoConfigUrl = "https://cdn-qa.cmnetwork.co/guideme-auth-qa/objects/";
    GmCXt.conf.publicTimestampUrl = "https://cdn-qa.cmnetwork.co/guideme-auth-qa/timestamp/";
};

GmCXt.setConfig();

(function() {
    if (GmCXt.conf.appType === GmCXt.conf.appTypeExt) {

        let root = '';

        if (GmCXt.browserApp === 'Safari') {
            root = safari.extension.baseURI;
        } else if (GmCXt.browserApp === 'firefox' ) {

            root = chrome.extension.getURL('');

        } else {
            root = chrome.runtime.getURL('');
        }
    }

})();

GmCXt.conf.appConfig = {
    login: {guideme: 1},
    testme: 1,
    customer: 'sumtotal',
    desktopCommunication: false,
    iframeInjection: true,
    trackNetwork:false
};