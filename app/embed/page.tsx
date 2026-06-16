import Script from 'next/script'

export default function EmbedPage() {
  return (
    <>
      <div id="interact-6a18ceaa24d7bdaba93bcde6"></div>
      <Script>{`var app_6a18ceaa24d7bdaba93bcde6;(function(d, t){var s=d.createElement(t),options={"appId":"6a18ceaa24d7bdaba93bcde6","width":"800","height":"800","async":true,"host":"quiz.tryinteract.com","mobile":true};s.src='https://i.tryinteract.com/embed/app.js';s.onload=s.onreadystatechange=function(){var rs=this.readyState;if(rs)if(rs!='complete')if(rs!='loaded')return;try{app_6a18ceaa24d7bdaba93bcde6=new InteractApp();app_6a18ceaa24d7bdaba93bcde6.initialize(options);app_6a18ceaa24d7bdaba93bcde6.display();}catch(e){}};var scr=d.getElementsByTagName(t)[0],par=scr.parentNode;par.insertBefore(s,scr);})(document,'script');`}</Script>
    </>
  )
}
