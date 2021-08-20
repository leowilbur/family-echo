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

var Fmn=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var Fgn={"":"","f":"Female","m":"Male","o":"Other"};
var Fvn={"":"Known date","app":"Approximate","bef":"Before","aft":"After","bet":"Date range"};
function FAA(a,v){
a[a.length]=v;
}
function FRF(f,ap,fp){
for(var i in f){
var p=f[i];
p.c=[];
p.pc={};
p.fg=false;
if(p.m&&!f[p.m]){
p.m=null;
}
if(p.f&&!f[p.f]){
p.f=null;
}
if(p.s&&!f[p.s]){
p.s=null;
}
if(p.X&&!f[p.X]){
p.X=null;
}
if(p.Y&&!f[p.Y]){
p.Y=null;
}
if(p.s){
p.pc[p.s]=true;
}
if(p.ep){
for(var j in p.ep){
if(p.ep[j]&&f[j]){
p.pc[j]=true;
}
}
}
}
var ai=0;
for(var i in f){
var p=f[i];
if(p.m||p.f){
p.m1=p.m;
p.f1=p.f;
p.t1=p.V;
p.m2=p.X;
p.f2=p.Y;
p.t2=p.W;
}else{
p.m1=p.X;
p.f1=p.Y;
p.t1=p.W;
p.m2=p.f2=p.t2=null;
}
var m1=p.m1;
var f1=p.f1;
var m2=p.m2;
var f2=p.f2;
p.i=i;
p.h=null;
ai++;
p.ai=ai;
if(p.p){
p.h=FDN(p,false,0);
}
if(m1&&f1){
f[m1].pc[f1]=true;
f[f1].pc[m1]=true;
}
if(m2&&f2){
f[m2].pc[f2]=true;
f[f2].pc[m2]=true;
}
if(m1){
FAA(f[m1].c,i);
}
if(f1){
FAA(f[f1].c,i);
}
if(m2){
FAA(f[m2].c,i);
}
if(f2){
FAA(f[f2].c,i);
}
}
for(var i in f){
var p=f[i];
var mi=p.m1;
var fi=p.f1;
if(!p.h){
if(i==ap){
p.h="Me";
}else{
if(i==fp){
p.h="Founder";
}else{
var r=p["^"];
if(r&&f[r]&&f[r].h){
if((r==mi)||(r==fi)){
p.h=FPT(f[r],((p.g=="f")?"Daughter":((p.g=="m")?"Son":"Child")));
}else{
if(f[r].m==i){
p.h=FPT(f[r],(p.g=="m")?"Father":(((p.g||"").charAt(0)=="o")?"Parent":"Mother"));
}else{
if(f[r].f==i){
p.h=FPT(f[r],(p.g=="f")?"Mother":(((p.g||"").charAt(0)=="o")?"Parent":"Father"));
}else{
if(f[r].X==i){
p.h=FST(f[r],f[r].W,(p.g=="m")?"Father":(((p.g||"").charAt(0)=="o")?"Parent":"Mother"));
}else{
if(f[r].Y==i){
p.h=FST(f[r],f[r].W,(p.g=="f")?"Mother":(((p.g||"").charAt(0)=="o")?"Parent":"Father"));
}else{
if((mi&&(f[r].m==mi))||(fi&&(f[r].f==fi))){
p.h=FPT(f[r],(((f[r].m==mi)&&(f[r].f==fi))?"":"Half ")+((p.g=="f")?"Sister":((p.g=="m")?"Brother":"Sibling")));
}else{
if(r==p.s){
p.h=FPT(f[r],"Partner");
}else{
if(f[r].pc[i]){
p.h=FPT(f[r],"Ex-partner");
}
}
}
}
}
}
}
}
}
}
}
if(!p.h){
p.h="Anon "+p.ai;
}
}
p.cp=0;
for(var pi in p.pc){
p.cp++;
}
p.es=p.s||((p.cp==1)?pi:null);
}
if(fp){
FSR(f,fp,"fg",true,true,true,true,true,false);
}
}
function FSR(f,i,l,u,uu,d,dd,a,aa){
if(i&&f[i]&&!f[i][l]){
var p=f[i];
p[l]=true;
if(u){
FSR(f,p.m,l,uu,uu,dd,dd,aa,aa);
FSR(f,p.f,l,uu,uu,dd,dd,aa,aa);
FSR(f,p.X,l,uu,uu,dd,dd,aa,aa);
FSR(f,p.Y,l,uu,uu,dd,dd,aa,aa);
}
if(d){
for(var j=0;j<p.c.length;j++){
FSR(f,p.c[j],l,false,false,dd,dd,aa,aa);
}
}
if(a){
FSR(f,p.es,l,uu,uu,dd,dd,aa,aa);
for(var pi in p.pc){
FSR(f,pi,l,uu,uu,dd,dd,aa,aa);
}
}
}
}
function FDF(f,i,si,sf,st){
for(var j in f){
f[j].cf=false;
}
FCF(f,i,"cf",null,si,sf,st);
var df=[];
for(var j in f){
if(!f[j].cf){
df[df.length]=j;
}
}
return df;
}
function FCF(f,i,l,fi,si,sf,st){
if(i&&f[i]&&!f[i][l]&&(i!=si)&&((i!=st)||(fi!=sf))){
var p=f[i];
p[l]=true;
FCF(f,p.m,l,i,si,sf,st);
FCF(f,p.f,l,i,si,sf,st);
FCF(f,p.X,l,i,si,sf,st);
FCF(f,p.Y,l,i,si,sf,st);
for(var j=0;j<p.c.length;j++){
FCF(f,p.c[j],l,i,si,sf,st);
}
for(var pi in p.pc){
FCF(f,pi,l,i,si,sf,st);
}
}
}
function FCS(f,i){
for(var j in f){
f[j].sf=false;
}
FSR(f,i,"sf",true,true,true,true,false,true);
FSR(f,f[i].es,"sf",false,false,true,true,false,true);
for(var pi in f[i].pc){
FSR(f,pi,"sf",false,false,true,true,false,true);
}
var sf=[];
for(var j in f){
if(f[j].sf){
sf[sf.length]=j;
}
}
return sf;
}
function FMS(f,mi,fi){
return f[mi]&&f[fi]&&(f[mi].s==fi)&&(f[fi].s==mi);
}
function FGM(g){
return (g=="f")?-1:((g=="m")?1:0);
}
function FCM(p1,p2){
return (p1?FGM(p1.g):0)-(p2?FGM(p2.g):0);
}
function FPM(f,i){
var m=0;
if(i&&f[i]){
var ca=f[i].c;
for(var j=0;j<ca.length;j++){
var c=f[ca[j]];
if(c.m==i){
m--;
}
if(c.f==i){
m++;
}
if(c.X==i){
m--;
}
if(f.Y==i){
m++;
}
}
}
return m;
}
function FSM(f,i,si){
var cm=FPM(f,i)-FPM(f,si);
if(!cm){
cm=FCM(i?f[i]:null,si?f[si]:null);
}
return cm?(cm<0):(si?(i<si):false);
}
function FIG(g){
return (g=="m")?"f":((g=="f")?"m":null);
}
function FPR(f,i){
var p=f[i];
for(var j in f){
f[j].rf=false;
}
FSR(f,i,"rf",false,false,true,true,false,false);
f[i].rf=false;
FSR(f,i,"rf",false,false,false,false,true,false);
FSR(f,p.m,"rf",true,true,false,false,false,false);
FSR(f,p.f,"rf",true,true,false,false,false,false);
FSR(f,p.X,"rf",true,true,false,false,false,false);
FSR(f,p.Y,"rf",true,true,false,false,false,false);
var ra=[];
for(var j in f){
if(!f[j].rf){
FAA(ra,j);
}
}
return ra;
}
function FAR(f,i,si){
for(var j in f){
f[j].pf=false;
}
for(var pi in f[i].pc){
FSR(f,pi,"pf",true,false,false,false,false,false);
}
FSR(f,i,"pf",false,false,true,true,false,false);
if(si){
FPR(f,si);
}
var pa=[];
for(var j in f){
if((!f[j].pf)&&((!si)||f[si].pc[j]||(!f[j].rf))){
FAA(pa,j);
}
}
return pa;
}
function FPD(d){
try{
return {d:parseInt(d.substring(6,8),10),m:parseInt(d.substring(4,6),10),y:parseInt(d.substring(0,4),10)};
}
catch(e){
return "";
}
}
function FPS(d,o){
var s1=FPD(d);
var p={v:"",d1:s1.d,m1:s1.m,y1:s1.y};
var hi=d.indexOf("-");
if(hi>=0){
var s2=FPD(d.substring(hi+1));
if(o&&(parseInt(d.substring(0,hi),10)>parseInt(d.substring(hi+1),10))){
p={v:"",d1:s2.d,m1:s2.m,y1:s2.y};
s2=s1;
}
p.v="bet";
p.d2=s2.d;
p.m2=s2.m;
p.y2=s2.y;
}else{
if(d.indexOf("~")>=0){
p.v="app";
}else{
if(d.indexOf(">")>=0){
p.v="bef";
}else{
if(d.indexOf("<")>=0){
p.v="aft";
}
}
}
}
return p;
}
function FET(d,m,y){
return (m?((d?(d+" "):"")+Fmn[m]+(y?" ":"")):"")+(y?y:"");
}
function FDT(d,c){
var p=FPS(d?d.toString():"",true);
var s="";
if(p.v=="bet"){
if(p.y1&&p.y2&&((p.y2-p.y1)==1)&&(!p.m1)&&(!p.m2)){
var s=FCT(p.y1,p.y2);
}else{
var sy=(p.y1==p.y2);
var us=false;
if(p.m1&&p.m2&&sy){
p.y1="";
}
if(sy&&(p.m1==p.m2)&&p.d1&&p.d2){
var s1=p.d1;
us=((p.d2-p.d1)==1);
}else{
var s1=FET(p.d1,p.m1,p.y1);
us=sy&&p.m1&&p.m2&&((p.m2-p.m1)==1)&&(!p.d1)&&(!p.d2);
}
var s2=FET(p.d2,p.m2,p.y2);
if(s1&&s2){
var s=s1+(((s1+"").indexOf(" ")>0)?" ~ ":(us?"/":"~"))+s2;
}else{
if(s1||s2){
var s="approx "+s1+s2;
}
}
}
}else{
s=FET(p.d1,p.m1,p.y1);
if(s){
var es={"app":"approx ","bef":"before ","aft":"after "};
s=(es[p.v]||"")+s;
}
}
if(c&&s){
s=s.charAt(0).toUpperCase()+s.substring(1);
}
return s;
}
function FYT(d){
var p=FPS(d?d.toString():"",true);
var s="";
if(p.v=="bet"){
if(p.y1&&p.y2){
if(p.y1==p.y2){
s=p.y1;
}else{
if((p.y2-p.y1)==1){
s=FCT(p.y1,p.y2);
}else{
s=p.y1+"~"+p.y2;
}
}
}else{
if(p.y1||p.y2){
s="~"+(p.y1||"")+(p.y2||"");
}
}
}else{
s=p.y1||"";
if(s){
var es={"app":"~","bef":"~","aft":"~"};
s=(es[p.v]||"")+s;
}
}
return s;
}
function FCT(y1,y2){
var d=1000000;
if(Math.floor(y1/100)==Math.floor(y2/100)){
d=(Math.floor(y1/10)==Math.floor(y2/10))?10:100;
}
return y1+"/"+(y2%d);
}
function FYS(p){
var by=FYT(p.b);
var dy=(p.z=="1")?FYT(p.d):"";
var y=(by||"")+(((""+by+dy).indexOf("~")>=0)?" \u2013 ":"\u2013")+(dy||"");
return (by||dy)?(" ("+y.trim()+")"):"";
}
function FDE(v,m,l){
v=parseInt(v);
v="0000"+((isNaN(v)||(v<0))?0:((v>m)?m:v));
return v.substring(v.length-l,v.length);
}
function FDS(d,m,y){
return FDE(y,9999,4)+FDE(m,12,2)+FDE(d,31,2);
}
function FBS(v,d1,m1,y1,d2,m2,y2){
var s=FDE(y1,9999,4)+FDE(m1,12,2)+FDE(d1,31,2);
if(v=="bet"){
s+="-"+FDE(y2,9999,4)+FDE(m2,12,2)+FDE(d2,31,2);
}else{
if(v=="app"){
s+="~";
}else{
if(v=="bef"){
s+=">";
}else{
if(v=="aft"){
s+="<";
}
}
}
}
return s;
}
function FDN(p,mn,sn,sf,bn,ah){
var fn=p.p||"";
var n=fn;
if(!mn){
var fns=fn.trim().split(" ");
n=fns[0]||"";
}
if(n&&sn){
var an=bn?p.q:p.l;
if(!an){
an=bn?p.l:p.q;
}else{
if(sn>=2){
var cn=bn?p.l:p.q;
if(cn&&(cn!=an)){
an+="/"+cn;
}
}
}
if(an){
if(n){
if(sf){
n=an+" "+n;
}else{
n+=" "+an;
}
}else{
n=an;
}
}
}
if((!n)&&ah){
n=p.h;
}
return n;
}
function FPT(p,r){
return r+" of "+p.h;
}
function FST(p,t,r){
var s="Secondary ";
switch(t){
case "a":
s="Adopted ";
break;
case "b":
s="Biological ";
break;
case "f":
s="Foster ";
break;
case "s":
s="Step";
break;
}
return s+r+" of "+p.h;
}
function FPO(p,o){
if((!o)&&p.b&&parseInt(p.b.substring(0,4),10)){
return parseInt(p.b,10);
}
if(p.O&&!isNaN(parseFloat(p.O))){
return parseFloat(p.O);
}
return null;
}
function FBO(f,os,ys,o){
var lb=0;
var d=new Date();
var ub=parseInt(FDS(d.getDate(),1+d.getMonth(),d.getFullYear()));
for(var j=0;j<os.length;j++){
var od=FPO(f[os[j]],o);
if(od!==null){
lb=Math.max(lb,od);
}
}
for(var j=0;j<ys.length;j++){
var od=FPO(f[ys[j]],o);
if(od!==null){
ub=Math.min(ub,od);
}
}
if(ub<lb){
ub=lb+256;
}
var o=Math.round((lb+ub)/2);
if((o>lb)&&(o<ub)){
return o;
}else{
return (lb+ub)/2;
}
}
function FCC(p1,p2){
var b1=FPO(p1);
var b2=FPO(p2);
if(b1==b2){
b1=FPO(p1,true);
b2=FPO(p2,true);
}
if(b1===null){
b1=99999999;
}
if(b2===null){
b2=99999999;
}
if(b1<b2){
return -1;
}else{
if(b2<b1){
return 1;
}
}
if(p1.ai<p2.ai){
return -1;
}else{
if(p1.ai>p2.ai){
return 1;
}
}
return 0;
}
function FSC(f,ci){
var cp=[];
for(var j=0;j<ci.length;j++){
cp[cp.length]=f[ci[j]];
}
cp.sort(FCC);
ci.length=0;
for(var j=0;j<cp.length;j++){
ci[ci.length]=cp[j].i;
}
}
function FPP(p,i){
var x=null;
if(i==p.m1){
x="f1";
}else{
if(i==p.f1){
x="m1";
}else{
if(i==p.m2){
x="f2";
}else{
if(i==p.f2){
x="m2";
}
}
}
}
return x;
}
function FNB(p,pi){
if((pi==p.m1)||(pi==p.f1)){
if(p.t1){
return (p.t1=="a")||(p.t1=="f");
}else{
if(p.t2){
return p.t2=="b";
}else{
return false;
}
}
}
if((pi==p.m2)||(pi==p.f2)){
if(p.t2){
return (p.t2=="a")||(p.t2=="f");
}else{
if(p.t1){
return p.t1=="b";
}else{
return false;
}
}
}
return false;
}
function FSB(p,s){
return FNB(p,(s==2)?(p.m2||p.f2):(p.m1||p.f1));
}
function FLA(f,i){
var ac=[];
var c=f[i].c;
for(var j=0;j<c.length;j++){
var cp=f[c[j]];
var pf=FPP(cp,i);
var oi=pf?cp[pf]:null;
if(!(oi&&f[oi])){
FAA(ac,c[j]);
}
}
FSC(f,ac);
return ac;
}
function FLP(f,i,pi){
var tc=[];
var c=f[i].c;
for(var j=0;j<c.length;j++){
var cp=f[c[j]];
var pf=FPP(cp,i);
if(pf&&cp[pf]==pi){
FAA(tc,c[j]);
}
}
FSC(f,tc);
return tc;
}
function FLS(f,i,s,t){
var bs=[];
var mi=s?f[i].m2:f[i].m1;
var fi=s?f[i].f2:f[i].f1;
var cs={};
if(mi&&f[mi]){
var c=f[mi].c;
for(var j=0;j<c.length;j++){
cs[c[j]]=true;
}
}
if(fi&&f[fi]){
var c=f[fi].c;
for(var j=0;j<c.length;j++){
cs[c[j]]=true;
}
}
for(var j in cs){
if(j!=i){
if(FTM(f[j],mi,fi)){
if((!t)||(f[i].b==f[j].b)){
FAA(bs,j);
}
}
}
}
FSC(f,bs);
return bs;
}
function FTM(p,mi,fi){
return ((p.m1==mi)&&(p.f1==fi))||((p.m1==fi)&&(p.f1==mi))||((p.m2==mi)&&(p.f2==fi))||((p.m2==fi)&&(p.f2==mi));
}
function FTP(f,p,si,sp){
var cp=(p.s==si)||(p.z==1);
var pl=(p.z!=1)&&(sp.z==1);
var pw=(p.z==1)&&(sp.z!=1);
var pz=p.zp&&p.zp[si];
var gpi=new String(p.gp?p.gp[si]:"");
var s="";
var cm=-FGM(sp.g);
if(((gpi=="m")&&(cp||pl))||(gpi=="s")){
if(pl){
s=cm?((cm>0)?"Late wife":"Late husband"):"Late spouse";
}else{
if(pw){
s=cm?((cm>0)?"Widow":"Widower"):"Widowed spouse";
}else{
s=cm?((cm>0)?"Wife":"Husband"):"Spouse";
}
}
if(gpi=="s"){
s+=" (separated)";
}
}else{
if((gpi=="m")||(gpi=="d")||(gpi=="a")){
s=cm?((cm>0)?"Ex-wife":"Ex-husband"):"Ex-spouse";
}else{
if((gpi=="e")&&(cp||pl)){
if(pl){
s=(cm>0)?"Late fianc\xe9e":"Late fianc\xe9";
}else{
s=(cm>0)?"Fianc\xe9e":"Fianc\xe9";
}
}else{
if(gpi=="e"){
s=(cm>0)?"Ex-fianc\xe9e":"Ex-fianc\xe9";
}else{
if((gpi=="r")&&parseInt(pz,10)&&(!((p.z==1)&&(p.d==pz)))&&(!((sp.z==1)&&(sp.d==pz)))){
s="Ex-partner";
}else{
s=pl?"Late partner":(cp?"Partner":"Ex-partner");
}
}
}
}
}
return s;
}
function FCP(f,fi,ti,m){
var p={};
var s={};
var i=null;
p[fi]=".";
s[fi]=true;
while(!p[ti]){
var sn={};
for(var si in s){
var pc=f[si].pc;
for(var i in pc){
if(i&&f[i]&&!p[i]){
p[i]="p"+si;
sn[i]=true;
}
}
}
for(var si in s){
var c=f[si].c;
for(var j=0;j<c.length;j++){
i=c[j];
if(i&&f[i]&&!p[i]){
p[i]="o"+si;
sn[i]=true;
}
}
}
for(var si in s){
var tp=[f[si].m,f[si].f,f[si].X,f[si].Y];
for(j=0;j<tp.length;j++){
var pi=tp[j];
if(pi&&f[pi]){
var c=f[pi].c;
for(var k=0;k<c.length;k++){
i=c[k];
if(i&&f[i]&&!p[i]){
p[i]="s"+si;
sn[i]=true;
}
}
}
}
}
for(var si in s){
i=f[si].m;
if(i&&f[i]&&!p[i]){
p[i]="a"+si;
sn[i]=true;
}
i=f[si].f;
if(i&&f[i]&&!p[i]){
p[i]="a"+si;
sn[i]=true;
}
}
for(var si in s){
i=f[si].X;
if(i&&f[i]&&!p[i]){
p[i]="a"+si;
sn[i]=true;
}
i=f[si].Y;
if(i&&f[i]&&!p[i]){
p[i]="a"+si;
sn[i]=true;
}
}
s=sn;
sc=0;
for(var j in s){
sc++;
}
if(!sc){
break;
}
}
var r=[{"t":".","i":ti}];
if(p[ti]){
i=ti;
while(true){
var ni=p[i].substring(1);
if(!ni){
break;
}
r[r.length]={"t":p[i].substring(0,1),"i":ni};
i=ni;
}
}else{
r[r.length]={"t":"x","i":fi};
}
r=r.reverse();
return m?FMP(f,r):r;
}
function FMP(f,r){
for(var j=0;j<(r.length-1);j++){
r[j].p=[{"i":r[j].i,"t":r[j].t}];
}
for(var j=0;j<(r.length-1);j++){
if((r[j].t=="a")){
var d=1;
while(r[j+d]&&(r[j+d].t=="a")){
d++;
}
if(r[j+d]&&(r[j+d].t=="s")){
var ic=true;
for(var k=1;k<=d;k++){
if(!(r[j+d+k]&&(r[j+d+k].t=="o"))){
ic=false;
break;
}
}
if(ic){
FME(r,j+1,d*2,"c"+d);
}
}
}
}
for(var j=0;j<(r.length-1);j++){
if(r[j].t=="a"){
var d=1;
while(r[j+1]&&(r[j+1].t=="a")){
FME(r,j+1,1,"a"+(++d));
}
if(r[j+1]&&(r[j+1].t=="s")){
FME(r,j+1,1,"u"+d);
if(FIM(f,r,j+1)){
FME(r,j+1,1,"u"+d);
}
}else{
if((d==1)&&FIM(f,r,j-1)){
FME(r,j,1,"ai");
}
}
}
if(r[j].t=="o"){
var d=1;
while(r[j+1]&&(r[j+1].t=="o")){
FME(r,j+1,1,"o"+(++d));
}
if(r[j-1]&&(r[j-1].t=="s")){
FME(r,j,1,"n"+d);
if(FIM(f,r,j-2)){
FME(r,j-1,1,"n"+d);
}
}else{
if((d==1)&&FIM(f,r,j+1)){
FME(r,j+1,1,"oi");
}
}
}
}
for(var j=0;j<(r.length-1);j++){
if(FIM(f,r,j)){
if(r[j+1]&&(r[j+1].t=="s")){
FME(r,j+1,1,"si");
if(FIM(f,r,j+1)){
FME(r,j+1,1,"si");
}
}else{
if(r[j-1]&&(r[j-1].t=="s")){
FME(r,j,1,"si");
}
}
}
}
for(var j=0;j<(r.length-1);j++){
if(r[j].p.length==1){
r[j].p=null;
}
}
return r;
}
function FME(r,i,n,t){
FAP(r,i,n,r[i-1].p);
r[i-1].t=t;
r.splice(i,n);
}
function FAP(r,i,n,p){
for(var j=i;j<(i+n);j++){
if(r[j].p){
FAP(r[j].p,0,r[j].p.length,p);
}else{
p[p.length]={"i":r[j].i,"t":r[j].t};
}
}
}
function FIM(f,r,j){
if(r[j]&&r[j+1]&&(r[j].t=="p")){
var jp=f[r[j].i];
var gjp=(jp&&jp.gp)?jp.gp[r[j+1].i]:"";
if((gjp=="m")||(gjp=="s")){
return true;
}
}
return false;
}
