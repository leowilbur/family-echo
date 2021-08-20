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

function NSS(s){
SS("sidehide",s);
SS("sideshow",!s);
}
function NKS(s){
SH("keylinktext",s?"Hide":"Show");
}
function NSD(d){
GE("detail_0p").checked=true;
GE("detail_0lq").checked=true;
var ds=(d+"").split(".");
var db={};
for(var i=0;i<ds.length;i++){
db[ds[i]]=true;
var e=GE("detail_"+ds[i]);
if(e){
e.checked=(ds[i].substr(0,1)=="0")?false:true;
}
}
SD("detail_pm",db["0p"]);
SD("detail_0lq",db["0p"]);
}
function NGR(){
var c={};
for(j=0;j<Ecf.length;j++){
var f=Ecf[j];
c[f]=GV("color"+f);
}
return c;
}
function NGL(){
var l={};
for(j=0;j<Elf.length;j++){
var f=Elf[j];
l[f]=GV("line"+f);
}
return l;
}
function NGB(){
return parseInt(GO("showbirthname"));
}
function NGS(){
return parseInt(GO("showsurnamefirst"));
}
function NGM(){
return parseInt(GO("showmaleleft"));
}
function NGC(){
return parseInt(GO("showcousins"));
}
function NGH(){
return parseInt(GO("showchildren"));
}
function NGA(){
return parseInt(GO("showparents"));
}
function NSP(i){
ST("backtotext",(i==GV("personid"))?"me":(Efa[i]?Efa[i].h:"start"));
}
function NRT(){
}
function NPF(){
var r=GE("findfield").getBoundingClientRect();
GE("findlist").style.left=r.left+"px";
}
function NCP(i){
GE("findfield").placeholder=i+((i==1)?" person":" people");
}
function NFF(){
NPF();
NUF(null);
SS("findlist",true);
}
function NHF(){
SS("findlist",false);
}
function NIF(){
SS("findlist",true);
setTimeout("NUF("+GV("findfield").length+");",100);
}
function NUF(vl){
var ev=GV("findfield");
if((vl!==null)&&(vl!=ev.length)){
return;
}
var ss=ev.trim().toLowerCase().split(" ");
var bn=NGB();
var sf=NGS();
var jn=[];
for(var j in Efa){
var p=Efa[j];
var m=((p.l||"")+" "+(p.q||"")+" "+(p.p||"")).toLowerCase();
var i=true;
for(k=0;k<ss.length;k++){
if(m.indexOf(ss[k])<0){
i=false;
break;
}
}
if(i){
var sn1=(bn?(p.q||p.l):(p.l||p.q))||"";
var sn2=(sn1?(bn?p.l:p.q):"")||"";
if(sn1==sn2){
sn2="";
}
jn[jn.length]={i:j,l:sn1,q:sn2,p:(p.p||""),n:(FDN(p,true,2,sf,bn,false)+FYS(p)).trim()};
}
}
jn.sort(NSB);
var esc=/[-\/\\^$*+?.()|[\]{}]/g;
var reg="";
for(k=0;k<ss.length;k++){
if(ss[k].length){
reg+=EH(ss[k]).replace(esc,"\\$&")+"|";
}
}
if(reg.length){
var exp=new RegExp(reg.slice(0,-1),"ig");
}else{
var exp=null;
}
var h="";
for(j=0;j<jn.length;j++){
if(jn[j].n.length){
var hn=EH(jn[j].n);
if(exp){
hn=hn.replace(exp,"<u>$&</u>");
}
h+="<a href=\"#\" onClick=\"ESP('"+jn[j].i+"', true); return false;\">"+hn+"</a>";
}
}
if(!h){
h="<div>No matches found</div>";
}
var v=GE("findlist");
v.innerHTML=h;
}
function NSB(a,b){
if(a.l<b.l){
return -1;
}else{
if(b.l<a.l){
return 1;
}
}
if(a.q<b.q){
return -1;
}else{
if(b.q<a.q){
return 1;
}
}
if(a.p<b.p){
return -1;
}else{
if(b.p<a.p){
return 1;
}
}
if(a.n<b.n){
return -1;
}else{
if(b.n<a.n){
return 1;
}
}
return 0;
}
