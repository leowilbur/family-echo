/*
	This Family Echo file is Copyright (c) Familiality Ltd.

	This file may be distributed only in whole and unmodified, as part of a
	family downloaded from Family Echo. You may make this file available on the
	World Wide Web without modification, only if used to display a family
	downloaded from Family Echo. You may make copies of this file for personal
	archiving purposes, only as part of a family downloaded from Family Echo.

	This file may not be distributed or copied for any other purpose. You are
	not permitted to modify, merge, publish, sublicense, rent, sell, lease,
	loan, decompile, reverse engineer or create derivative works from this file.

	This copyright and license notice must be kept in all copies of this file.
*/

var Btc={pd:4};
function BGC(f,pi,ci,h,fl){
var ds=[],ss=[],gs=[];
var tw=0;
for(var j=0;j<ci.length;j++){
var i=ci[j];
var d=BGD(f,i,h,fl);
var pr=(f[i].m1==pi)||(f[i].f1==pi);
var gr=FNB(f[i],pi);
if(f[i].m2||f[i].f2){
TAL(d,pr?0.05:-0.05,0,pr?0.05:-0.05,-0.55,gr?"b":"c");
}
ds[ds.length]=d;
ss[ss.length]=!pr;
gs[gs.length]=gr;
tw+=d.w;
}
var fl=ds[0].l;
var lr=ds[ds.length-1].r;
return {ds:ds,ss:ss,gs:gs,tw:tw,fl:fl,lr:lr,aw:(tw+fl-lr)};
}
function BDC(d,dd,cx,cy,vx,vy,yo){
var ds=dd.ds;
var gs=dd.gs;
var aw=dd.aw;
var ax=[];
var x=cx-aw/2+dd.fl;
for(var j=0;j<ds.length;j++){
var cd=ds[j];
ax[j]=x-cd.l;
TAD(d,cd,ax[j],cy);
x+=cd.w;
}
BDL(d,vx,ax,vy,cy,gs,yo);
}
function BDL(d,vx,ax,vy,cy,gs,yo){
var sb=false;
var sg=false;
var _27=vx,_28=vx;
var _29=vx,_2a=vx;
var ay=(vy+cy)/2+yo;
for(var j=0;j<gs.length;j++){
var x=ax[j];
if(gs[j]){
sg=true;
_28=Math.min(_28,x);
_2a=Math.max(_2a,x);
}else{
sb=true;
_27=Math.min(_27,x);
_29=Math.max(_29,x);
}
TAL(d,x,ay,x,cy,gs[j]?"C":"B");
}
var _2e=Math.min(_27,_28);
var _2f=Math.max(_29,_2a);
for(var g=0;g<=1;g++){
if(g?sg:sb){
var s=g?"C":"B";
if((vx<_2e)||(vx>_2f)){
var x=(vx<_2e)?_2e:_2f;
var y=(vy+ay/2);
TAL(d,vx,vy,vx,y,s);
TAL(d,vx,y,x,y,s);
TAL(d,x,y,x,ay,s);
}else{
TAL(d,vx,vy,vx,ay,s);
}
TAL(d,g?_28:_27,ay,g?_2a:_29,ay,s);
}
}
}
function BDD(d,f,i,si,x,y,dp,sr,da){
var p=f[i];
TAE(d,i,p,x,y);
if(dp){
if(p.m1||p.f1){
TAL(d,x,y,x,y-0.425,FSB(p,1)?"c":"b");
}
if(p.m2||p.f2){
TAL(d,x+0.05,y,x+0.05,y-0.45,FSB(p,2)?"c":"b");
}
}
if((sr!==null)&&(p.cp>((si&&p.pc[si])?1:0))){
TAL(d,x,y,x+(sr?0.475:-0.475),y,(p.s&&f[p.s]&&p.s!=si)?"s":"p");
}
if(da){
var ac=FLA(f,i);
if(ac.length){
var sb=false;
var sg=false;
for(var j=0;j<ac.length;j++){
if(FNB(f[ac[j]],i)){
sg=true;
}else{
sb=true;
}
}
if(sb){
TAL(d,x,y,x,y+0.35,"b");
}
if(sg){
TAL(d,x,y,x,y+0.35,"c");
}
}
}
}
function BDA(d,f,i,si,h,dr,fx,cy,fl){
var p=f[i];
var yt=0;
for(var pi in p.pc){
if(pi!=si){
yt++;
}
}
var ot=Math.min(0.1*(yt-1),0.15);
var ly=cy+ot/2;
var lo=(yt>1)?(ot/(yt-1)):0;
var uo=0.1/(yt+1);
var uy=cy-0.5+uo*(yt+1);
var ax=[];
for(var pi in p.pc){
if(pi!=si){
BDH(d,f,i,pi,FLP(f,i,pi),h,dr,fx,cy,ly,uy,fl,ax);
ly-=lo;
uy-=uo;
}
}
}
function BDH(d,f,i,pi,ci,h,dr,fx,cy,ly,uy,fl,ax){
if(ci.length){
var ds=BGC(f,i,ci,h,fl);
var cx=dr?(d.r-ds.fl+ds.aw/2):(d.l-ds.lr-ds.aw/2);
var px=cx+(dr?0.5:-0.5);
BDC(d,ds,cx,cy+1,(pi&&f[pi])?cx:fx,ly,(pi===null)?-0.15:0);
}else{
var cx=dr?d.r:(d.l-1);
var px=cx;
}
if(pi&&f[pi]){
BDD(d,f,pi,i,px,cy,true,dr,true);
var s=FMS(f,i,pi)?"S":"P";
if(ax.length){
var xo=(dr?0.5:-0.5);
var x1=ax[0]-xo*(1+(ax.length)/10);
var x2=ax[ax.length-1]+xo+xo/10;
TAL(d,fx,ly,x1,ly,s);
TAL(d,x1,ly,x1,uy,s);
TAL(d,x1,uy,x2,uy,s);
TAL(d,x2,uy,x2,ly,s);
TAL(d,x2,ly,px,ly,s);
}else{
TAL(d,fx,ly,px,ly,s);
}
ax[ax.length]=px;
}
}
function BSS(d,f,p,si,h,dr,cy,fl){
var li=[],ri=[];
for(var j=0;j<si.length;j++){
var r=(dr===null)?(FCC(p,f[si[j]])<0):dr;
if(r){
ri[ri.length]=si[j];
}else{
li[li.length]=si[j];
}
}
var apl=BDS(d,f,p,li,h,false,cy,fl);
var apr=BDS(d,f,p,ri,h,true,cy,fl);
var al=apl[""];
var ar=apr[""];
var ap=apl;
for(var j in apr){
ap[j]=apr[j];
}
return {al:al,ar:ar,ap:ap,ll:li.length,rl:ri.length};
}
function BDS(d,f,p,si,h,dr,cy,fl){
var al={"":0};
for(var j=0;j<si.length;j++){
var k=dr?j:(si.length-j-1);
var sd=BGD(f,si[k],h,fl);
if(sd.h==1){
var x=dr?(d.yr[cy]-sd.l):(d.yl[cy]-sd.r);
}else{
var x=dr?(d.r-sd.l):(d.l-sd.r);
}
TAD(d,sd,x,cy);
if(f[si[k]].m2||f[si[k]].f2){
TAL(d,x+0.05,cy,x+0.05,cy-0.45,FNB(f[si[k]],p.m1||p.f1)?"b":"c");
}
al[f[si[k]].i]=x;
al[""]=x;
}
return al;
}
function BPS(d,f,pi,oi,ph,h,dr,fx,fl){
var p=f[pi];
if(p.m1||p.f1){
if(p.m2||p.f2){
TAL(d,fx+0.05,-1,fx+0.05,-1.45,FSB(p,2)?"c":"b");
}
if(ph<=1){
TAL(d,fx,-1,fx,-1.4,FSB(p,1)?"c":"b");
}else{
var gs=[FNB(p,p.m1||p.f1)];
var ax=[fx];
var bx=fx;
var od=oi&&f[oi]&&(f[oi].f1||f[oi].m1);
if(h>0){
var bs=FLS(f,pi,false);
if(bs.length){
if(od){
var aa=BSS(d,f,p,bs,h-1,dr,-1,fl);
}else{
var aa=BSS(d,f,p,bs,h-1,null,-1,fl);
var al=aa.ll?aa.al:fx;
var ar=aa.rl?aa.ar:fx;
var bx=(al+ar)/2;
if(Math.abs(bx-fx)>Btc.pd){
bx=fx+0.5*(aa.rl-aa.ll);
}
}
var ap=aa.ap;
for(var j=0;j<bs.length;j++){
gs[gs.length]=FNB(f[bs[j]],p.m1||p.f1);
ax[ax.length]=ap[bs[j]];
}
}
}
var ad=BGA(f,pi,ph-1,od?dr:null,h<=0,fl);
TAD(d,ad,bx,-1);
if(h>0){
BDL(d,bx+(ad.yl[-1]+ad.yr[-1]-1)/2,ax,-2,-1,gs,0);
}
}
}
}
function BGA(f,i,h,dr,da,fl){
var d=TND();
var p=f[i];
if(h>0){
var x1=0;
var x2=0;
if(p.m1||p.f1){
if(p.m1&&p.f1){
if(dr===null){
var m1=!fl;
var d1=false,d2=true;
x1-=0.5;
}else{
var m1=fl?(!dr):dr;
var d1=dr,d2=dr;
}
var i1=m1?p.m1:p.f1;
var i2=m1?p.f1:p.m1;
TAD(d,BGA(f,i1,h-1,d1,true,fl),x1,-1);
BDD(d,f,i1,i2,x1,-1,false,d1,true);
x2=d2?d.r:(d.l-1);
TAD(d,BGA(f,i2,h-1,d2,true,fl),x2,-1);
BDD(d,f,i2,i1,x2,-1,false,d2,true);
TAL(d,x1,-1,x2,-1,FMS(f,i1,i2)?"S":"P");
}else{
var pi=p.m1||p.f1;
TAD(d,BGA(f,pi,h-1,dr,true,fl),x1,-1);
BDD(d,f,pi,null,x1,-1,false,f[pi].g!=(fl?"f":"m"),false);
}
if(da){
var gr=FSB(p,1);
var x=(x1+x2)/2;
TAL(d,x,-0.5,x,-1,gr?"C":"B");
TAL(d,x,-0.5,0,-0.5,gr?"C":"B");
TAL(d,0,-0.5,0,0,gr?"C":"B");
var bs=FLS(f,i,false);
if(bs.length){
var sl=false;
var sr=false;
if((dr===null)||(!p.m1)||(!p.f1)){
for(var j=0;j<bs.length;j++){
if(FCC(p,f[bs[j]])<0){
sr=true;
}else{
sl=true;
}
}
}else{
if(dr){
sr=true;
}else{
sl=true;
}
}
var lx=x-(sl?(sr?0.05:0.1):0);
TAL(d,lx,-0.5,lx+0.1,-0.5,gr?"c":"b");
}
}
}
}else{
if(p.m1||p.f1){
TAL(d,0,-0.4,0,0,FSB(p,1)?"c":"b");
}
}
if(da&&(p.m2||p.f2)){
TAL(d,0.05,-0.45,0.05,0,FSB(p,2)?"c":"b");
}
return d;
}
function BGD(f,i,h,fl){
var p=f[i];
var d=TND();
var sr=FSM(f,i,p.es);
if(fl){
sr=!sr;
}
var sx=sr?1:-1;
if(h>0){
TAE(d,i,p,0,0);
var ac=FLA(f,i);
if(ac.length){
var ds=BGC(f,i,ac,h-1,fl);
BDC(d,ds,0,1,0,0,0);
}
if(p.es){
var tc=FLP(f,i,p.es);
if(tc.length){
var ds=BGC(f,i,tc,h-1,fl);
if(ac.length){
sx=sr?(d.r+(ds.tw-ds.fl-ds.lr)/2+0.5):(d.l-(ds.tw+ds.lr+ds.fl)/2-0.5);
}
var cx=sr?(sx-0.5):(sx+0.5);
BDC(d,ds,cx,1,cx,0,0);
}
TAL(d,0,0,sx,0,FMS(f,i,p.es)?"S":"P");
BDD(d,f,p.es,i,sx,0,true,null,false);
var pac=FLA(f,p.es);
if(pac.length){
var ds=BGC(f,p.es,pac,h-1,fl);
BDC(d,ds,sr?(d.r+(ds.tw-ds.fl-ds.lr)/2):(d.l-(ds.tw+ds.lr+ds.fl)/2),1,sx,0,-0.15);
}
BDA(d,f,p.es,i,h-1,sr,sx,0,fl);
}
BDA(d,f,i,p.es,h-1,!sr,0,0,fl);
}else{
BDD(d,f,i,null,0,0,false,sr,true);
}
return d;
}
function BGH(f,i){
var p=f[i];
var hc=p.es;
var ac=FLA(f,i);
if(hc&&(!p.m1)&&(!p.f1)&&p.pc[hc]&&(p.cp==1)&&(ac.length==0)){
return hc;
}
return null;
}
function BFT(f,i,m,ch,ph,oh,fl){
var p=f[i];
var hc=BGH(f,i);
if(ch&&hc&&!BGH(f,hc)){
var d=TND();
var od=BFT(f,hc,m,ch,ph,oh,fl);
TAD(d,od,-od.e[i].x,-od.e[i].y);
d.e[hc].k=false;
}else{
var d=BGD(f,i,ch,fl);
if(ph>0){
var px=0;
var gs=[FSB(p,1)];
var ax=[0];
var bs=FLS(f,i,false);
if(bs.length){
var aa=BSS(d,f,p,bs,oh,null,0,fl);
px=(aa.al+aa.ar)/2;
if(Math.abs(px)>Btc.pd){
px=0.5*(aa.rl-aa.ll);
}
for(var j=0;j<bs.length;j++){
gs[gs.length]=FNB(f[bs[j]],p.m1||p.f1);
ax[ax.length]=aa.ap[bs[j]];
}
}
if(p.m1||p.f1){
var mx=px,fx=px;
var p2=p.m2||p.f2;
BDL(d,px,ax,-1,0,gs,0);
if(p.m1&&p.f1){
mx+=(fl?0.5:-0.5);
fx+=(fl?-0.5:0.5);
TAL(d,mx,-1,fx,-1,FMS(f,p.m1,p.f1)?"S":"P");
}
if(p.m1){
BDD(d,f,p.m1,p.f1,mx,-1,false,p2?fl:null,p2);
}
if(p.f1){
BDD(d,f,p.f1,p.m1,fx,-1,false,p2?(!fl):null,p2);
}
if(p2){
var dr2=(bs.length==0)||(aa.ll>=aa.rl);
var gr2=FSB(p,2);
var m2x=dr2?d.yr[-1]:(d.yl[-1]-1);
var f2x=m2x;
if(p.m2&&p.f2){
m2x+=(fl?(dr2?1:0):(dr2?0:-1));
f2x=m2x+(fl?-1:1);
TAL(d,m2x,-1,f2x,-1,FMS(f,p.m2,p.f2)?"S":"P");
}
var p2x=(m2x+f2x)/2;
TAL(d,0.05,0,0.05,-0.55,gr2?"C":"B");
TAL(d,0.05,-0.55,p2x,-0.55,gr2?"C":"B");
TAL(d,p2x,-0.55,p2x,-1,gr2?"C":"B");
var bs2=FLS(f,i,true);
if(bs2.length){
TAL(d,p2x,-0.55,p2x+(dr2?0.1:-0.1),-0.55,gr2?"c":"b");
}
if(p.m2){
BDD(d,f,p.m2,p.f2,m2x,-1,true,fl,false);
}
if(p.f2){
BDD(d,f,p.f2,p.m2,f2x,-1,true,!fl,false);
}
}else{
if(p.m1){
var ac=FLA(f,p.m1);
if(ac.length&&p.f1){
BDH(d,f,p.m1,null,ac,oh,fl,mx,-1,-1,-1,fl,[]);
}
BDA(d,f,p.m1,p.f1,oh,fl,mx,-1,fl);
}
if(p.f1){
var ac=FLA(f,p.f1);
if(ac.length&&p.m1){
BDH(d,f,p.f1,null,ac,oh,!fl,fx,-1,-1,-1,fl,[]);
}
BDA(d,f,p.f1,p.m1,oh,!fl,fx,-1,fl);
}
}
if(p.m1){
BPS(d,f,p.m1,p.f1,ph,oh,fl,mx,fl);
}
if(p.f1){
BPS(d,f,p.f1,p.m1,ph,oh,!fl,fx,fl);
}
}
}else{
if(p.m1||p.f1){
TAL(d,0,0,0,-0.425,FSB(p,1)?"c":"b");
if(p.m2||p.f2){
TAL(d,0.05,0,0.05,-0.45,FSB(p,2)?"c":"b");
}
}
}
}
d.e[i].k=true;
if(m&&d.e[m]){
d.e[m].m=true;
}
return d;
}
