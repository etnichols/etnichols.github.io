import { PROD_APP_ID } from '@/data/test-app-ids'
import Script from 'next/script'

export default function EmbedProd() {
  return (
    <>
      <div id={`interact-${PROD_APP_ID}`}></div>
      <Script>{`var ${PROD_APP_ID};(function(d, t){var s=d.createElement(t),options={"appId":"${PROD_APP_ID}","width":"800","height":"800","async":true,"host":"quiz.tryinteract.com","mobile":true};s.src='https://i.tryinteract.com/embed/app.js';s.onload=s.onreadystatechange=function(){var rs=this.readyState;if(rs)if(rs!='complete')if(rs!='loaded')return;try{${PROD_APP_ID}=new InteractApp();${PROD_APP_ID}.initialize(options);${PROD_APP_ID}.display();}catch(e){}};var scr=d.getElementsByTagName(t)[0],par=scr.parentNode;par.insertBefore(s,scr);})(document,'script');`}</Script>
    </>
  )
}
