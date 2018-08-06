/*!
 * bulma-toast 1.1.0 
 * (c) 2018-present @rfoel <rafaelfr@outlook.com> 
 * Released under the MIT License.
 */
const defaults={message:'Your message here',duration:2e3,position:'top-right'};let initialized=!1,containers={},positions={};function init(){containers={noticesTopLeft:document.createElement('div'),noticesTopRight:document.createElement('div'),noticesBottomLeft:document.createElement('div'),noticesBottomRight:document.createElement('div'),noticesTopCenter:document.createElement('div'),noticesBottomCenter:document.createElement('div'),noticesCenter:document.createElement('div')};containers.noticesTopLeft.setAttribute('style',`${'width:100%;z-index:99999;position:fixed;pointer-events:none;display:flex;flex-direction:column;padding:15px;'}left:0;top:0;text-align:left;align-items:flex-start;`),containers.noticesTopRight.setAttribute('style',`${'width:100%;z-index:99999;position:fixed;pointer-events:none;display:flex;flex-direction:column;padding:15px;'}right:0;top:0;text-align:right;align-items:flex-end;`),containers.noticesBottomLeft.setAttribute('style',`${'width:100%;z-index:99999;position:fixed;pointer-events:none;display:flex;flex-direction:column;padding:15px;'}left:0;bottom:0;text-align:left;align-items:flex-start;`),containers.noticesBottomRight.setAttribute('style',`${'width:100%;z-index:99999;position:fixed;pointer-events:none;display:flex;flex-direction:column;padding:15px;'}right:0;bottom:0;text-align:right;align-items:flex-end;`),containers.noticesTopCenter.setAttribute('style',`${'width:100%;z-index:99999;position:fixed;pointer-events:none;display:flex;flex-direction:column;padding:15px;'}top:0;left:0;right:0;text-align:center;align-items:center;`),containers.noticesBottomCenter.setAttribute('style',`${'width:100%;z-index:99999;position:fixed;pointer-events:none;display:flex;flex-direction:column;padding:15px;'}bottom:0;left:0;right:0;text-align:center;align-items:center;`),containers.noticesCenter.setAttribute('style',`${'width:100%;z-index:99999;position:fixed;pointer-events:none;display:flex;flex-direction:column;padding:15px;'}top:0;left:0;right:0;bottom:0;flex-flow:column;justify-content:center;align-items:center;`),Object.keys(containers).forEach(a=>document.body.appendChild(containers[a])),positions={"top-left":containers.noticesTopLeft,"top-right":containers.noticesTopRight,"top-center":containers.noticesTopCenter,"bottom-left":containers.noticesBottomLeft,"bottom-right":containers.noticesBottomRight,"bottom-center":containers.noticesBottomCenter,center:containers.noticesCenter},initialized=!0}function toast(a){initialized||init();let b=Object.assign({},defaults,a);const c=createToast(b),d=positions[b.position]||positions[defaults.position];d.appendChild(c)}function createToast(a){const b=document.createElement('div');let c=`width:auto;opacity:0.8;pointer-events:auto;display:inline-flex;`,d=['notification'];if(a.type&&d.push(a.type),b.classList=d.join(' '),a.dismissible){let a=document.createElement('button');a.className='delete',a.addEventListener('click',()=>{b.remove()}),b.insertAdjacentElement('afterbegin',a)}else c+='padding: 1.25rem 1.5rem';b.setAttribute('style',c),b.insertAdjacentText('beforeend',a.message);const e=new Timer(()=>{b.remove()},a.duration);return b.addEventListener('mouseover',()=>{e.pause()}),b.addEventListener('mouseout',()=>{e.resume()}),b}function Timer(a,b){let c,d,e=b;this.pause=function(){window.clearTimeout(c),e-=new Date-d},this.resume=function(){d=new Date,window.clearTimeout(c),c=window.setTimeout(a,e)},this.resume()}export{toast};
