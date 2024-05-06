import Script from 'next/script';

export default function SeoScripts() {
    return (
        <>
            <Script type="text/javascript" strategy="afterInteractive" id="trades-gtm">
                {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PQXSWZZ')
`}
            </Script>
            <Script type="text/javascript" strategy="afterInteractive" id="trades-rudder">
                {`
  !function(){"use strict";window.RudderSnippetVersion="3.0.3";var sdkBaseUrl="https://cdn.rudderlabs.com/v3"
  ;var sdkName="rsa.min.js";var asyncScript=true;window.rudderAnalyticsBuildType="legacy",window.rudderanalytics=[]
  ;var e=["setDefaultInstanceKey","load","ready","page","track","identify","alias","group","reset","setAnonymousId","startSession","endSession","consent"]
  ;for(var n=0;n<e.length;n++){var t=e[n];window.rudderanalytics[t]=function(e){return function(){
  window.rudderanalytics.push([e].concat(Array.prototype.slice.call(arguments)))}}(t)}try{
  new Function('return import("")'),window.rudderAnalyticsBuildType="modern"}catch(a){}
  if(window.rudderAnalyticsMount=function(){
  "undefined"==typeof globalThis&&(Object.defineProperty(Object.prototype,"__globalThis_magic__",{get:function get(){
  return this},configurable:true}),__globalThis_magic__.globalThis=__globalThis_magic__,
  delete Object.prototype.__globalThis_magic__);var e=document.createElement("script")
  ;e.src="".concat(sdkBaseUrl,"/").concat(window.rudderAnalyticsBuildType,"/").concat(sdkName),e.async=asyncScript,
  document.head?document.head.appendChild(e):document.body.appendChild(e)
  },"undefined"==typeof Promise||"undefined"==typeof globalThis){var d=document.createElement("script")
  ;d.src="https://polyfill-fastly.io/v3/polyfill.min.js?version=3.111.0&features=Symbol%2CPromise&callback=rudderAnalyticsMount",
  d.async=asyncScript,document.head?document.head.appendChild(d):document.body.appendChild(d)}else{
  window.rudderAnalyticsMount()}window.rudderanalytics.load("23q2RYgM6ev2bBShYbfvfFtBwIg","https://tradeschrzxqe.dataplane.rudderstack.com",{})}();
`}
            </Script>

            <noscript>
                {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
                {/* biome-ignore lint/a11y/useIframeTitle: <explanation> */}
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-PQXSWZZ"
                    height="0"
                    width="0"
                    style={{ display: 'none', visibility: 'hidden' }}
                ></iframe>
            </noscript>
        </>
    );
}
