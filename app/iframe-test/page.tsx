import Script from "next/script";

export default function IframeTestPage() {
    return (
      <main className="min-h-screen p-8">
        <div id="interact-66df5302b0830e0d4fca7e2c"></div>
        <Script id="interact-script">
          {`var app_66df5302b0830e0d4fca7e2c;(function(d, t){var s=d.createElement(t),options={"appId":"66df5302b0830e0d4fca7e2c","width":"800","height":"800","async":true,"host":"quiz.tryinteract.dev"};s.src='https://i.tryinteract.com/embed/app.js';s.onload=s.onreadystatechange=function(){var rs=this.readyState;if(rs)if(rs!='complete')if(rs!='loaded')return;try{app_66df5302b0830e0d4fca7e2c=new InteractApp();app_66df5302b0830e0d4fca7e2c.initialize(options);app_66df5302b0830e0d4fca7e2c.display();}catch(e){}};var scr=d.getElementsByTagName(t)[0],par=scr.parentNode;par.insertBefore(s,scr);})(document,'script');`}
        </Script>
      </main>
    );
  }
  