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

var ios=navigator.userAgent.match(/(iPod|iPhone|iPad)/)&&navigator.userAgent.match(/AppleWebKit/);
function TND(){
return {l:0,r:0,w:0,t:0,b:0,h:0,e:{},n:[],yl:{},yr:{}};
}
function TAE(d,i,p,x,y,k){
var di=d.e[i];
if(di){
i+=Math.random(0,999999);
}
d.e[i]={p:p,x:x,y:y,k:k,d:di};
d.l=Math.min(d.l,x);
d.r=Math.max(d.r,1+x);
d.w=d.r-d.l;
d.t=Math.min(d.t,y);
d.b=Math.max(d.b,1+y);
d.h=d.b-d.t;
if(d.yl[y]===undefined){
d.yl[y]=x;
}else{
d.yl[y]=Math.min(d.yl[y],x);
}
if(d.yr[y]===undefined){
d.yr[y]=1+x;
}else{
d.yr[y]=Math.max(d.yr[y],1+x);
}
}
function TAL(d,x1,y1,x2,y2,t){
d.n[d.n.length]={x1:x1,y1:y1,x2:x2,y2:y2,t:t};
}
function TAD(od,d,dx,dy){
for(var j=0;j<d.n.length;j++){
var n=d.n[j];
TAL(od,n.x1+dx,n.y1+dy,n.x2+dx,n.y2+dy,n.t);
}
for(var i in d.e){
var e=d.e[i];
TAE(od,e.p.i,e.p,e.x+dx,e.y+dy,e.k);
}
}
function TDS(yb,zf,wf){
var sp=yb.r;
var mn=yb.pm;
var ya=[yb.bd,yb.j,yb.b,yb.v,yb.d,yb.y,yb.F,yb.U,yb.e,yb.e,yb.tku,yb.tku,yb.a,yb.a,yb.E,yb.I,yb.A];
var yc=0;
for(j=0;j<ya.length;j++){
if(ya[j]){
yc++;
}
}
var sz={Tew:parseInt(((yc||sp||mn)?100:80)*zf*wf),nameheight:parseInt((yb["0p"]?0:40)*zf),Tph:parseInt((yb.r?100:0)*zf),Tdh:parseInt(20*yc*zf),Tmh:parseInt(40*zf),Ths:parseInt(20*zf),Tvs:parseInt(40*zf),Tfs:parseInt(12*zf),Tds:parseInt(10*zf)};
sz.Teh=parseInt(Math.max(sz.nameheight+sz.Tph+sz.Tdh,sz.Tmh));
return sz;
}
function TRD(d,y,bn,sf,c,ls,o,oi,wp,pr,zf,wf,_2a){
var _2b=wp?(ios?1920:19200):0;
var _2c=wp?(ios?1200:12000):0;
var yb={};
var ys=y.split(".");
for(var j=0;j<ys.length;j++){
yb[ys[j]]=true;
}
var mn=yb["pm"];
var sp=yb["r"];
var spn=!yb["0p"];
var ssn=!yb["0lq"];
var sz=TDS(yb,zf,wf);
var tw=(sz.Tew+sz.Ths)*d.w-sz.Ths;
var th=(sz.Teh+sz.Tvs)*d.h-sz.Tvs;
if(!wp){
ox=sz.Tew/2-d.l*(sz.Tew+sz.Ths);
oy=sz.Teh/2-d.t*(sz.Teh+sz.Tvs);
}else{
if(ios){
if(!(o.ios_width&&o.ios_height)){
o.ios_width=GE("treebg").offsetWidth;
o.ios_height=GE("treebg").offsetHeight;
}
ox=o.ios_width/2+_2b/2;
oy=o.ios_height/2+_2c/2;
o.style.left=(-_2b/2)+"px";
o.style.top=(-_2c/2)+"px";
}else{
if(oi&&o.ps[oi]&&d.e[oi]){
ox=o.ps[oi].x-d.e[oi].x*(sz.Tew+sz.Ths);
oy=o.ps[oi].y-d.e[oi].y*(sz.Teh+sz.Tvs);
}else{
ox=_2b-d.l*(sz.Tew+sz.Ths);
oy=_2c-d.t*(sz.Teh+sz.Tvs);
}
}
}
o.innerHTML="";
o.ps={};
o.es={l:(ox+(d.l-0.5)*(sz.Tew+sz.Ths)),t:(oy+(d.t-0.5)*(sz.Teh+sz.Tvs)),r:(ox+(d.r-0.5)*(sz.Tew+sz.Ths)),b:(oy+(d.b-0.5)*(sz.Teh+sz.Tvs))};
var s=o.style;
if(!wp){
s.width=(tw+_2b*2)+"px";
s.height=(th+_2c*2)+"px";
}
for(var g=1;g>=0;g--){
for(var j=0;j<d.n.length;j++){
var n=d.n[j];
var ss=TGT(n.t,ls);
if(ss.g?(!g):g){
continue;
}
var l=Math.min(n.x1,n.x2);
var r=Math.max(n.x1,n.x2);
var t=Math.min(n.y1,n.y2);
var b=Math.max(n.y1,n.y2);
var v=document.createElement("div");
v.className=(ss.d==2)?"ddashed":((ss.d==1)?"ddotted":"dline");
var ok=ss.d?0:ss.k;
var s=v.style;
s.width=((r==l)?ok:(r-l)*(sz.Tew+sz.Ths)+ok)+"px";
s.height=((b==t)?ok:(b-t)*(sz.Teh+sz.Tvs)-(ss.d?1:0))+"px";
s.left=ox+(l*(sz.Tew+sz.Ths))-((r==l)?(ss.k/2):(ss.k/2))+"px";
s.top=oy+(t*(sz.Teh+sz.Tvs))-((b==t)?(ss.k/2):0)+"px";
s[ss.d?"borderColor":"backgroundColor"]=ss.g?"#bbbbbb":"#444444";
if(ss.d){
s.borderTopWidth=ss.k+"px";
s.borderLeftWidth=ss.k+"px";
}
o.appendChild(v);
}
}
for(var i in d.e){
var e=d.e[i];
var rs="";
var fn=FDN(e.p,true,1,sf,bn,true);
var cc=((e.p.z=="1")&&!pr)?"dcelld":"dcella";
var _46=((e.p.z=="1")&&!pr)?c.deceased:c.living;
var sh=sz.nameheight;
if(sp&&e.p.r){
var ey=e.p.r.split(" ");
var uf=EIU||(opener&&opener.top&&opener.top.EIU);
if(uf){
var u=uf(ey[0]);
var ew=sz.Tew-4;
var eh=Math.min(sz.Tew-4,sz.Tph);
if(ey[1]&&ey[2]){
if(parseInt(ey[1])>parseInt(ey[2])){
eh=Math.floor(ew*ey[2]/ey[1]);
}else{
ew=Math.floor(eh*ey[1]/ey[2]);
}
if((Math.abs(ey[1]-ew)<=3)&&(Math.abs(ey[2]-eh)<=3)){
ew=ey[1];
eh=ey[2];
}
}
rs+="<TR><TD CLASS=\""+cc+"\" style=\"color:"+_46+"\"><IMG SRC=\""+u+"\" WIDTH=\""+ew+"\" HEIGHT=\""+eh+"\" TITLE=\""+EH(fn)+"\"></TD></TR>";
sh+=sz.Tph;
}
}
if(y){
var ey=TGL(yb,e.p);
if(ey&&ey.length){
rs+="<TR><TD CLASS=\""+cc+"\" STYLE=\"font-size:"+sz.Tds+"px;color:"+_46+"\" TITLE=\""+EH(ey.replace(/\n/g,", "))+"\">"+EL(ey)+"</TD></TR>";
sh+=sz.Tdh;
}
}
var sx=ox+(e.x)*(sz.Tew+sz.Ths);
var sy=oy+(e.y)*(sz.Teh+sz.Tvs);
sh=Math.max(sh,sz.Tmh);
TRB(o,sx-(sz.Tew/2),sy-(sh/2),sz.Tew,sh,e.k?3:1,(e.p.g=="f")?c.female:((e.p.g=="m")?c.male:(((e.p.g||"").charAt(0)=="o")?c.other:"#FFFFFF")),defaultColors.borders,null);
var v=document.createElement("div");
v.className="di";
var s=v.style;
s.width=sz.Tew+"px";
s.height=sh+"px";
s.left=(sx-(sz.Tew/2))+"px";
s.top=(sy-(sh/2))+"px";
if(wp){
v.onmousedown=TCT;
v.id=i;
v.pid=e.p.i;
o.ps[i]={x:sx,y:sy};
}
if(spn){
var tn=FDN(e.p,mn,ssn,sf,bn,true);
var ns="<TR><TD CLASS=\""+cc+"\" STYLE=\"font-size:"+(e.d?sz.Tds:sz.Tfs)+"px;color:"+_46+"\""+" TITLE=\""+(e.d?"Duplicate: ":"")+EH(fn)+"\">"+(e.d?"<I>Duplicate:</I><BR>":"")+(spn?((e.m?"<B>":"")+EL(tn)+(e.m?"</B>":"")):"")+"</TD></TR>";
}else{
var ns="";
}
v.innerHTML="<TABLE WIDTH=\"100%\" HEIGHT=\"100%\" STYLE=\"table-layout:fixed;\">"+ns+rs+"</TABLE>";
o.appendChild(v);
}
}
function TGT(t,ls){
var o="normal";
var tl=t.toLowerCase();
switch(tl){
case "s":
o=ls.current;
break;
case "p":
o=ls.otherpartner;
break;
case "b":
o=ls.biological;
break;
case "c":
o=ls.otherparent;
break;
}
var s={k:2,g:false,d:0};
switch(o){
case "thin":
s.k=1;
break;
case "thick":
s.k=4;
break;
case "gray":
s.g=true;
break;
case "dashed":
s.d=2;
break;
}
if(t==tl){
s.d=1;
s.k=Math.min(2,s.k);
}
return s;
}
function TGL(yb,p){
var ey="";
if(yb["bd"]){
var bs=FYT(p.b);
var ds=(p.z=="1")?FYT(p.d):"";
if(bs&&ds){
ey+=bs+(((""+bs+ds).indexOf("~")>=0)?" \u2013 ":"\u2013")+ds+"\n";
}else{
if(bs){
ey+="Born "+bs+"\n";
}else{
if(ds){
ey+="Died "+ds+"\n";
}
}
}
}
if(yb["j"]&&p.j){
ey+=p.j+"\n";
}
if(yb["b"]||yb["v"]){
var bs=yb["b"]?FDT(p.b,false):"";
var vs=yb["v"]?(p.v||""):"";
if(bs||vs){
ey+="Born "+bs+((bs&&vs)?", ":"")+vs+"\n";
}
}
if((yb["d"]||yb["y"])&&(p.z=="1")){
var ds=yb["d"]?FDT(p.d,false):"";
var ys=yb["y"]?(p.y||""):"";
if(ds||ys){
ey+="Died "+ds+((ds&&ys)?", ":"")+ys+"\n";
}
}
if((yb["F"]||yb["U"])&&(p.z=="1")){
var Fs=yb["F"]?FDT(p.F,false):"";
var Us=yb["U"]?(p.U||""):"";
if(Fs||Us){
ey+="Buried "+Fs+((Fs&&Us)?", ":"")+Us+"\n";
}
}
if(yb["e"]&&p.e){
ey+=p.e.replace(/@/g,"@ ")+"\n";
}
if(yb["tku"]){
if(p.t){
ey+=p.t+" (h)\n";
}
if(p.k){
ey+=p.k+" (w)\n";
}
if(p.u){
ey+=p.u+" (m)\n";
}
}
if(yb["a"]&&p.a){
ey+=p.a+"\n";
}
if(yb["E"]&&p.E){
ey+=p.E+"\n";
}
if(yb["I"]&&p.I){
ey+=p.I+"\n";
}
if(yb["A"]&&p.A){
ey+=p.A+"\n";
}
return ey.trim();
}
function TCD(i,t){
var o=GE("treebg");
if(i&&o.ps[i]){
var dw,dh;
dw=o.offsetWidth;
dh=o.offsetHeight;
if(GS("navdiv")){
dh-=GE("navdiv").offsetHeight;
}
if(GS("optionsdiv")){
dh-=GE("optionsdiv").offsetHeight;
}
if((dw<64)||(dw>4096)){
dw=self.outerWidth;
}
if((dh<64)||(dh>4096)){
dh=self.outerHeight;
}
var sx=o.ps[i].x-dw/2;
var sy=o.ps[i].y-dh/2;
if(o.es){
var as={l:sx+64,t:sy+32,r:sx+dw-32,b:sy+dh-64};
sx+=0.9*(Math.min(0,Math.max(o.es.l-as.l,o.es.r-as.r))+Math.max(0,Math.min(o.es.l-as.l,o.es.r-as.r)));
sy+=0.9*(Math.min(0,Math.max(o.es.t-as.t,o.es.b-as.b))+Math.max(0,Math.min(o.es.t-as.t,o.es.b-as.b)));
}
var scs=DT();
TSS(sx,sy,scs,scs+t,"_sel");
}
}
function TRB(o,l,t,w,h,k,bg,bo,_70){
v=document.createElement("div");
v.className="dbox";
var s=v.style;
if(_70){
s.visibility="hidden";
v.id=_70;
}
s.position="absolute";
s.width=(w)+"px";
s.height=(h)+"px";
s.left=(l-k)+"px";
s.top=(t-k)+"px";
s.background=bg;
s.borderWidth=k+"px";
s.borderColor=bo;
o.appendChild(v);
}
var Tpd=false;
var Tdx,Tdy,moveobject;
function TGS(){
var e=GE("treebg");
if(self.pageYOffset){
scrolltop=self.pageYOffset;
scrollleft=self.pageXOffset;
}else{
if(document.documentElement&&document.documentElement.scrollTop){
scrolltop=document.documentElement.scrollTop;
scrollleft=document.documentElement.scrollLeft;
}else{
if(document.body){
scrolltop=document.body.scrollTop;
scrollleft=document.body.scrollLeft;
}
}
}
return {top:-(e.offsetTop-e.parentNode.offsetTop),left:-(e.offsetLeft-e.parentNode.offsetLeft)};
}
function TIS(o){
moveobject=o;
o.onmousedown=function(_74){
NHF();
_74=_74?_74:window.event;
Tpd=true;
scrollpos=TGS();
Tdx=scrollpos.left+_74.screenX;
Tdy=scrollpos.top+_74.screenY;
};
document.onmouseup=function(_75){
Tpd=false;
};
document.onmousemove=function(_76){
_76=_76?_76:window.event;
if(Tpd){
TSS(Tdx-_76.screenX,Tdy-_76.screenY,0,0,null);
}
};
document.body.onselectstart=function(_77){
if(Tpd){
return false;
}
};
o.ontouchstart=function(_78){
if((_78.target==moveobject)&&(_78.touches.length==1)){
NHF();
Tpd=true;
scrollpos=TGS();
Tdx=scrollpos.left+_78.touches[0].screenX;
Tdy=scrollpos.top+_78.touches[0].screenY;
_78.preventDefault();
}
};
o.ontouchend=function(_79){
if(Tpd){
Tpd=false;
_79.preventDefault();
}
};
document.ontouchmove=function(_7a){
if(Tpd){
TSS(Tdx-_7a.touches[0].screenX,Tdy-_7a.touches[0].screenY,0,0,null);
_7a.preventDefault();
}
};
}
var Tst=null,Tsf,Tsd,Tss,Tse,Tsv;
function TSS(x,y,scs,scf,scv){
if(Tst){
clearTimeout(Tst);
Tst=null;
}
Tsf=TGS();
Tsd={top:y,left:x};
Tss=scs;
Tse=scf;
Tsv=scv;
if(DT()>=scf){
TST();
}else{
Tst=setTimeout("TST()",10);
}
}
function TST(){
var n=DT();
if(n>=Tse){
TSD(Tsd.left,Tsd.top);
if(Tsv&&GE(Tsv)){
SI(Tsv,true);
}
}else{
var p=(n-Tss)/(Tse-Tss);
p=1-Math.pow(0.5,p/0.2);
TSD(Tsf.left+p*(Tsd.left-Tsf.left),Tsf.top+p*(Tsd.top-Tsf.top));
Tst=setTimeout("TST()",10);
}
}
function TSD(x,y){
if(true){
GE("treebg").style.left=-x;
GE("treebg").style.top=-y;
}
}
function TCT(){
if(parent&&parent.postMessage){
parent.postMessage("click="+this.pid,"*");
}
ESP(this.pid,true);
}
function TFE(o,i){
return (o.ps&&i)?o.ps[i]:null;
}
function TRT(f,i,m,y,bn,sf,c,l,fl,ch,ph,co,pi,zf,wf,s){
var o=GE("treebg");
var _97=null;
if(TFE(o,i)){
var oi=i;
var sd=0;
if(i!=pi){
_97="_sel";
if(GE(_97)){
SI(_97,false);
}
}
}else{
var oi=TFE(o,pi)?pi:null;
var sd=oi?250:0;
}
TRD(BFT(f,i,m,ch,ph,co,fl),y,bn,sf,c,l,o,oi,true,false,zf,wf,_97);
if(s&&noCentering){
if(_97&&GE(_97)){
SI(_97,true);
}
}else{
setTimeout("TCD('"+i+"', "+(s?250:0)+")",sd);
}
}
function TPH(f,p,bn,sf,s){
if(p){
var h="";
for(var j=0;j<p.length;j++){
var t=p[j].t;
var i=p[j].i;
var e=f[i];
var fn=FDN(e,true,1,sf,bn,true);
var nj=p[j+1]||s;
var ni=nj?nj.i:null;
var n=ni?f[ni]:{};
var rh="";
switch(t){
case "p":
rh=FTP(f,e,ni,n);
break;
case "o":
if(n&&((n.m==i)||(n.f==i))&&Sat[n.V]){
rh=Sat[n.V]+" ";
}else{
if(n&&((n.X==i)||(n.Y==i))&&Sat[n.W]){
rh=Sat[n.W]+" ";
}else{
rh="";
}
}
if(n.g=="f"){
rh+="Daughter";
}else{
if(n.g=="m"){
rh+="Son";
}else{
rh+="Child";
}
}
break;
case "s":
if(((e.m||e.f)&&FTM(n,e.m,e.f))||((e.X||e.Y)&&FTM(n,e.X,e.Y))){
rh="";
}else{
rh="Half-";
}
if(n.g=="f"){
rh+="Sister";
}else{
if(n.g=="m"){
rh+="Brother";
}else{
rh+="Sibling";
}
}
break;
case "a":
if(ni&&((e.m==ni)||(e.f==ni))&&Sat[e.V]){
rh=Sat[e.V]+" ";
}else{
if(ni&&((e.X==ni)||(e.Y==ni))&&Sat[e.W]){
rh=Sat[e.W]+" ";
}else{
rh="";
}
}
if(n.g=="f"){
rh+="Mother";
}else{
if(n.g=="m"){
rh+="Father";
}else{
rh+="Parent";
}
}
break;
case "oi":
if(n.g=="f"){
rh+="Daughter-in-law";
}else{
if(n.g=="m"){
rh+="Son-in-law";
}else{
rh+="Child-in-law";
}
}
break;
case "ai":
if(n.g=="f"){
rh+="Mother-in-law";
}else{
if(n.g=="m"){
rh+="Father-in-law";
}else{
rh+="Parent-in-law";
}
}
break;
case "si":
if(n.g=="f"){
rh+="Sister-in-law";
}else{
if(n.g=="m"){
rh+="Brother-in-law";
}else{
rh+="Sibling-in-law";
}
}
break;
case "x":
rh="Unrelated";
break;
default:
var t1=t.substring(0,1);
var d=t.substring(1);
if((t1=="a")||(t1=="o")){
if(d<=4){
for(var k=2;k<d;k++){
rh+="Great-";
}
}else{
rh+="Great x"+(d-2)+"-";
}
if(t1=="a"){
if(n.g=="f"){
rh+="Grandmother";
}else{
if(n.g=="m"){
rh+="Grandfather";
}else{
rh+="Grandparent";
}
}
}else{
if(n.g=="f"){
rh+="Granddaughter";
}else{
if(n.g=="m"){
rh+="Grandson";
}else{
rh+="Grandchild";
}
}
}
}else{
if(t1=="c"){
switch(parseInt(d)){
case 1:
break;
case 2:
rh+="Second ";
break;
case 3:
rh+="Third ";
break;
case 4:
rh+="Fourth ";
break;
case 5:
rh+="Fifth ";
break;
case 6:
rh+="Sixth ";
break;
case 7:
rh+="Seventh ";
break;
case 8:
rh+="Eighth ";
break;
case 9:
rh+="Ninth ";
break;
case 10:
rh+="Tenth ";
break;
default:
rh+="Degree "+d+" ";
break;
}
rh+="Cousin";
}else{
if(t1=="u"){
if(d<=3){
for(var k=1;k<d;k++){
rh+="Great-";
}
}else{
rh+="Great x"+(d-1)+"-";
}
if(n.g=="f"){
rh+="Aunt";
}else{
if(n.g=="m"){
rh+="Uncle";
}else{
rh+="Auncle";
}
}
}else{
if(t1=="n"){
if(d<=3){
for(var k=1;k<d;k++){
rh+="Great-";
}
}else{
rh+="Great x"+(d-1)+"-";
}
if(n.g=="f"){
rh+="Niece";
}else{
if(n.g=="m"){
rh+="Nephew";
}else{
rh+="Nibling";
}
}
}
}
}
}
break;
}
if(rh.substring(0,5)=="Step "){
rh="Step"+rh.substring(5).toLowerCase();
}
if(j||!s){
h+="<p class=\"pi\" id=\"path-"+i+"\"><a href=\"#\" onClick=\"ESP('"+i+"', true); return false;\">"+EH(fn)+"</a></p>";
if(rh){
h+="<p class=\"pa\">&darr;</p>";
}
}
if(p[j].p){
h+="<p id=\"shortpath-"+i+"\" class=\"pr\"><a href=\"#\" onClick=\"SEP('"+i+"', true); return false;\" title=\"Expand this relationship\">"+rh+"</a></p>";
h+="<div id=\"longpath-"+i+"\" style=\"display:none;\">";
h+="<p class=\"pr\"><a href=\"#\" onClick=\"SEP('"+i+"', false); return false;\" title=\"Contract this relationship\">"+rh+"</a></p>";
h+="<div class=\"pl\">";
h+=TPH(f,p[j].p,bn,sf,p[j+1]);
h+="</div></div>";
}else{
if(rh){
h+="<p class=\"pr\">"+rh+"</p>";
}
}
}
return h;
}else{
return "";
}
}
