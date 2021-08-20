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

var Ecf=["male","female","other","living","deceased"];
var Elf=["current","otherpartner","biological","otherparent"];
var Efa={};
var Efo;
var Ewr;
var Ewp=null;
var Ead;
var Eve;
var Esd=null;
var Eeq=[];
var Esc=false;
var Ess="",Eis="";
var Eec=null;
var Epc=null;
var Esa;
var Elh,Ech;
var Elb=null;
var Ebi;
var Esb;
var Eoh=null;
function PL(){
if(!staticMode){
CE();
}
if(hideSidebar){
ESI(false);
}
if(staticMode||((typeof (Ajax)!="undefined")&&Ajax.getTransport())){
window.onbeforeunload=EPU;
var c=GC("zoomfactor");
var zf=parseFloat((c===null)?defaultZoom:c);
SV("showzoom",zf);
var c=GC("showdetail");
Esd=(c===null)?defaultDetail:c;
NSD(Esd);
for(var j=0;j<Ecf.length;j++){
var f=Ecf[j];
var c=GC("color"+f);
SV("color"+f,(c===null)?defaultColors[f]:decodeURIComponent(c));
}
for(var j=0;j<Elf.length;j++){
var f=Elf[j];
var c=GC("line"+f);
SV("line"+f,(c===null)?defaultLines[f]:decodeURIComponent(c));
}
var c=GC("showbirthname");
SO("showbirthname",(c===null)?defaultBirthName:c);
var c=GC("showsurnamefirst");
SO("showsurnamefirst",(c===null)?defaultSurnameFirst:c);
var c=GC("showmaleleft");
SO("showmaleleft",(c===null)?defaultMaleLeft:c);
var c=GC("showcousins");
SO("showcousins",(c===null)?defaultCousins:c);
var c=GC("showchildren");
SO("showchildren",(c===null)?defaultChildren:c);
var c=GC("showparents");
SO("showparents",(c===null)?defaultParents:c);
var c=GC("widthfactor");
var wf=parseFloat((c===null)?defaultWidth:c);
SV("showwidth",wf);
Ebi=(document.all&&(navigator.userAgent.toLowerCase().indexOf("msie")>=0));
Esb=(navigator.userAgent.toLowerCase().indexOf("safari")>=0);
TIS(GE("treemargin"));
if(staticMode){
Ewr=false;
Efo=GV("founderid");
var h=new String(window.location.hash);
if(h.length&&(h.charAt(0)=="#")){
h=h.substring(1);
}
var a=h.split(":");
var m=a[0];
var i=a[1];
if(i){
SV("viewpersonid",i);
}
if(m){
SV("viewmode",m);
}
SS("printbutton",false);
ERP(false);
}else{
Ewr=true;
Ead=true;
Efo=GV("personid");
var fi=GV("familyid");
var ic=GV("importcacheid");
if(fi||ic){
AG("family_read",{f:fi,i:ic,p:GV("personid"),c:GV("checksum"),s:GV("sessionid")},EFR,fi&&(ic||GV("newscript").length));
}else{
ERP(false);
}
}
}else{
SS("treebg",false);
SS("noajax",true);
}
}
function EPR(){
NPF();
}
function ESB(l){
if(!Esb){
if(Ebi){
Eoh=l;
setTimeout("GE('backframe').src='back.htm?"+l+"';",100);
}else{
window.location.hash=l;
}
}
}
function EBI(l){
var h=new String(l.search);
var p=h.lastIndexOf("?");
if(p>=0){
h=h.substring(p+1);
}
if(Eoh&&(Eoh!=h)){
return;
}
Eoh=null;
window.location.hash=h;
}
function EBT(){
if(!Esb){
var h=new String(window.location.hash);
if(h.length&&(h.charAt(0)=="#")){
h=h.substring(1);
}
if(Eoh&&(Eoh!=h)){
return;
}
var a=h.split(":");
var m=a[0];
var i=a[1];
Elh=Ech;
Ech=m;
if((i&&(i!=GV("viewpersonid")))||(m&&(m!=GV("viewmode")))){
if((Eec!==null)&&(i==Epc)&&(m==="view")){
EFE(false);
}else{
if(i&&Efa[i]){
SV("viewpersonid",i);
}
if(m){
SV("viewmode",m);
}
EUS(false,null,null,true,true);
}
}
}
}
function EPU(e){
if((!Esc)&&(!staticMode)){
if(GV("newscript").length||GV("importcacheid")){
e=e||window.event;
var m="If you leave this page before saving, your changes to this family will be lost.";
e.returnValue=m;
return m;
}
}
}
function ESC(){
Esc=true;
}
function EFR(_16,_17,_18){
if(_18.ok){
Efa={};
if(_18.f){
if(_18.ar){
ERS(_18.t);
Ess=_18.t;
Eve=_18.v;
Ewr=_18.aw;
Ewp=_18.pw?GV("personid"):null;
Ead=_18.aa;
Efo=_18.fp;
}else{
RE("You do not have permission to view this family");
}
}
if(_18.m){
ERS(_18.m);
Eis=_18.m;
if(_18.ro){
staticMode=true;
Esa=true;
Ewr=false;
Ewp=false;
SS("do_signin",false);
SH("lfooterlinks","Family displayed via the <A HREF=\"http://www.familyecho.com/\" TARGET=\"_blank\">Family Echo</A> API.");
}
if(_18.lo){
SH("lfamilyname",_18.lo);
}
}
}else{
RE("This family could not currently be located. This may be due to occasional system maintenance, so please try again in a few hours.");
}
ERP(_17);
}
function ERP(_19){
ERS(GV("newscript"));
if(Esd===null){
Esd="";
for(var j in Efa){
if(Efa[j].r){
Esd="r";
}
}
NSD(Esd);
}
EUS(true,null,GV("viewmode"),true,false);
if(_19){
ESS();
}else{
EUL(false);
}
setInterval(EBT,250);
}
function EUS(r,i,m,d,s,_20){
var pi=Evp=GV("viewpersonid");
var pm=viewMode=GV("viewmode");
if(r){
var ap=GV("personid");
if(Efo&&!Efa[Efo]){
Efa[Efo]={};
}
FRF(Efa,ap,Efo);
if(ap&&Efa[ap]){
NSP(ap);
SV("name",FDN(Efa[ap],false,1,false,false,false));
SV("email",Efa[ap].e);
}else{
NSP(Efo);
}
var fc=0;
for(var j in Efa){
fc++;
}
NCP(fc);
if((staticMode||GV("familyid"))&&Efo&&Efa[Efo]){
var fb=FDN(Efa[Efo],false,1,false,false,false);
if(!staticMode){
var _27=GE("lfamilyinfo"),_28="Founded by "+fb,_29="<a href=\"\" onclick=\"ESM('history'); return false\">View history...</a>";
_27.innerHTML=EH(_28)+" - "+_29;
}else{
ST("lfamilyinfo","Founded by "+fb);
}
}else{
ST("lfamilyinfo","");
}
}
if(i){
Evp=i;
}
if(m){
viewMode=m;
}
if((!Evp)||(!Efa[Evp])){
if(Efo&&Efa[Efo]){
Evp=Efo;
}else{
for(Evp in Efa){
break;
}
}
}
SV("viewpersonid",Evp);
SV("viewmode",viewMode);
if(viewMode=="history"){
ESI(true);
if((!Esb&&Elh!=viewMode)||(Esb&&m)){
GE("extraframe").src="history.php?f="+escape(GV("familyid"))+"&p="+escape(GV("personid"))+"&c="+escape(GV("checksum"))+"&s="+escape(GV("sessionid"));
}
SI("extradiv",true);
}else{
if(viewMode=="share"){
ESI(true);
GE("extraframe").src="share.php?f="+escape(GV("familyid"))+"&p="+escape(GV("personid"))+"&c="+escape(GV("checksum"))+"&i="+escape(Evp)+"&s="+escape(GV("sessionid"))+"&z="+((Efa[Evp].z!="1")?0:1)+(_20!==undefined?"&return="+_20:"");
SI("extradiv",true);
}else{
if(viewMode=="download"){
ESI(true);
GE("extraframe").src="download.php?f="+escape(GV("familyid"))+"&p="+escape(GV("personid"))+"&c="+escape(GV("checksum"))+"&s="+escape(GV("sessionid"));
SI("extradiv",true);
}else{
if(viewMode=="print"){
ESI(true);
if(m){
GE("extraframe").src="print.php?f="+escape(GV("familyid"))+"&p="+escape(GV("personid"))+"&c="+escape(GV("checksum"))+"&s="+escape(GV("sessionid"));
}
SI("extradiv",true);
}else{
if(viewMode=="import"){
ESI(true);
GE("extraframe").src="import.php?p="+escape(GV("personid"));
SI("extradiv",true);
}else{
if(viewMode=="importfinish"){
}else{
if(GI("extradiv")){
GE("extraframe").src="";
SI("extradiv",false);
}
}
}
}
}
}
}
if(navigator.userAgent.match(/(iPod|iPhone|iPad)/)&&navigator.userAgent.match(/AppleWebKit/)){
SS("extradiv",GI("extradiv"));
}
SSE(Evp,viewMode);
var uf=(viewMode=="website")?"w":((viewMode=="blog")?"B":((viewMode=="photos")?"P":null));
if(uf){
GE("externalurl").src=Efa[Evp][uf];
SS("externaldiv",true);
SSU(true);
}else{
if(GS("externaldiv")){
SS("externaldiv",false);
GE("externalurl").src="";
SSU(false);
}
}
if(i||m){
ESB(viewMode+":"+Evp);
}
if(d||(Evp!=pi)){
TRT(Efa,Evp,GV("personid"),Esd,NGB(),NGS(),NGR(),NGL(),NGM(),NGH(),NGA(),NGC(),pi,GV("showzoom"),GV("showwidth"),s);
NRT();
}
if(m=="path"){
SUP(Evp);
SS("pathdiv",true);
}
if(viewMode=="path"){
SSP(Evp);
}else{
SS("pathdiv",false);
}
if(r||(Evp!=pi)){
if(parent&&parent.postMessage){
parent.postMessage("focus="+Evp,"*");
}
}
}
function EUF(){
EUS(true,null,null,true,false);
}
function ERF(){
EUS(false,null,null,true,true);
}
function ERI(){
EUS(false,null,null,true,false);
}
function ESP(i,s){
EHW();
for(var j=0;j<(Eeq.length-1);j++){
if(Eeq[j]==i){
Eeq.splice(j,1);
EUS(false,i,"edit",false,s);
return;
}
}
var vm=GV("viewmode");
Eeq=[];
EUS(false,i,((vm=="share")||(vm=="print")||(vm=="history")||(vm=="path"))?null:"view",false,s);
}
function ESM(m,_30){
EUS(false,null,m,false,false,_30);
}
function ECS(){
Eec=GV("newscript").length;
Epc=GV("viewpersonid");
}
function ESE(r,i,b){
Eeq=[];
for(var j=1;j<i.length;j++){
Eeq[Eeq.length]=i[j];
}
Eeq[Eeq.length]=b;
EHW();
EUS(r,i[0],"edit",r,true);
}
function EFE(a){
if(a){
if(Eeq.length<=1){
ESS();
EHW();
EUS(false,Eeq.length?Eeq[0]:null,"view",false,true);
Eec=null;
}else{
EUS(false,Eeq.shift(),"edit",false,true);
}
}else{
if(Eec!==null){
ESM("view");
Efa={};
ERS(Ess);
ERS(Eis);
var ks=GV("newscript");
ks=ks.substring(0,Eec);
SV("newscript",ks);
ERS(ks);
Eec=null;
EUS(true,Epc,"view",true,true);
}else{
EUS(true,null,"view",true,true);
}
EUL(false);
}
}
function EFV(i,p,v){
if(i){
Efa[i]=Efa[i]||{};
if((p=="x")||(p=="s")){
if(Efa[i].s&&Efa[Efa[i].s]){
Efa[Efa[i].s].s=null;
}
}
if(p=="x"){
delete Efa[i];
}else{
if((p=="s")&&v){
Efa[v]=Efa[v]||{};
if(Efa[v].s&&Efa[Efa[v].s]){
Efa[Efa[v].s].s=null;
}
Efa[v].s=i;
}
Efa[i][p]=v?v:null;
}
}
}
function EPV(i1,i2,p,v){
if(i1&&i2){
Efa[i1]=Efa[i1]||{};
Efa[i2]=Efa[i2]||{};
var fn=p+"p";
Efa[i1][fn]=Efa[i1][fn]||{};
Efa[i2][fn]=Efa[i2][fn]||{};
Efa[i1][fn][i2]=v.length?v:null;
Efa[i2][fn][i1]=v.length?v:null;
}
}
function ERS(s){
var c=ECL(s);
for(var j=0;j<c.length;j++){
var e=c[j];
var i=e.t.substring(1,e.t.length);
var v=e.v.replace(/\\t/g,"\t").replace(/\\n/g,"\n").replace(/\\\\/g,"\\");
if(e.t.charAt(0)=="i"){
EFV(i,e.p,v);
}else{
if(e.t.charAt(0)=="p"){
var ii=i.split(" ");
EPV(ii[0],ii[1],e.p,v);
}
}
}
}
function ECL(s){
var l=NE(s).split("\n");
var c=[];
for(var j=0;j<l.length;j++){
var e=l[j].split("\t");
for(var k=1;k<e.length;k++){
c[c.length]={t:e[0],p:e[k].charAt(0),v:e[k].substring(1,e[k].length)};
}
}
return c;
}
function EOS(s){
var c=ECL(s);
var os="";
var pi=null;
var pc=[];
for(var j=0;j<c.length;j++){
var e=c[j];
if(e.t!=pi){
if(pi){
os+=pi+"\t"+pc.join("\t")+"\n";
}
pi=e.t;
pc=[];
}
var pl=pc.length;
pc[((pl>0)&&(pc[pl-1].charAt(0)==e.p))?(pl-1):pl]=e.p+e.v;
}
if(pi){
os+=pi+"\t"+pc.join("\t")+"\n";
}
return os;
}
function EFC(i,c){
for(var p in c){
var v=c[p]?NE(new String(c[p])):"";
EFV(i,p,v);
GE("newscript").value+="\ni"+i+"\t"+p.charAt(0)+v.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t");
}
EUL(false);
}
function EPC(i1,i2,c){
for(var p in c){
var v=c[p]?NE(new String(c[p])):"";
EPV(i1,i2,p,v);
GE("newscript").value+="\np"+i1+" "+i2+"\t"+p.charAt(0)+v.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t");
}
EUL(false);
}
function EFI(){
var c="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
for(var j=0;j<1000;j++){
var i="";
for(k=0;k<5;k++){
i+=c.charAt(Math.floor(Math.random()*(k?36:26)));
}
if(!Efa[i]){
break;
}
}
return i;
}
var Edf=false;
function ESS(){
if(!staticMode){
var fi=GV("familyid");
var ic=GV("importcacheid");
if(fi&&!Edf){
var len=GV("newscript").length;
if(len||ic){
Edf=true;
AP("family_append",{f:fi,i:ic,p:GV("personid"),c:GV("checksum"),v:Eve},EOS(GV("newscript")),ESR,len);
EUL(false);
}else{
Edf=true;
EUL(false);
Edf=false;
setTimeout("EUL(true);",500);
}
}
}
}
function ESR(_63,len,_65){
Edf=false;
if(_65.ok){
Eve=_65.v;
Ess+="\n"+Eis;
Eis="";
SV("importcacheid","");
var ns=GV("newscript");
Ess+=ns.substring(0,len);
SV("newscript",ns.substring(len,ns.length));
if(_65.t){
Efa={};
ERS(_65.t);
Ess=_65.t;
ERS(GV("newscript"));
EUS(true,null,null,true,false);
}
}else{
RE("The family could not be saved - please try again");
}
EUL(true);
}
function EUL(js){
if(!staticMode){
var len=GV("newscript").length;
var ic=GV("importcacheid");
if(Edf){
p="lsaving";
}else{
if(len||ic){
p="lsave";
}else{
if(!Ewr){
p=Ewp?"lwriteone":"lreadonly";
}else{
p=js?"lsaved":"linitial";
}
}
}
var es=["linitial","lreadonly","lwriteone","lsave","lsaving","lsaved"];
for(j=0;j<es.length;j++){
SS(es[j],p==es[j]);
}
var fi=GV("familyid");
var si=GV("sessionid");
SS("savefamily",(Ewr||len||ic)&&fi);
SS("sharefamily",Ewr&&si&&fi);
SSF();
}
}
function EAS(){
AP("userfamily_add",{s:GV("sessionid"),f:GV("familyid"),p:GV("personid"),c:GV("checksum")},"",EAR,null);
}
function EAR(_6d,_6e,_6f){
if(_6f.ok){
ST("lfamilyname",_6f.n);
SS("addfamily",false);
}else{
RE(_6f.er||"The family could not be added");
}
}
function EBS(){
var ap=GV("personid");
ESP((ap&&Efa[ap])?ap:Efo,true);
}
function ECZ(zi){
var zf=Math.max(0.5,Math.min(4,GV("showzoom")*(zi?1.138788634756692:0.878126080186649)));
SC("zoomfactor",zf);
SV("showzoom",zf);
ERF();
}
function ESZ(){
SC("zoomfactor",GV("showzoom"));
ERI();
}
function ECD(_73){
var i=_73.id;
if(i.substr(0,7)=="detail_"){
var d=i.substr(7);
var c=_73.checked;
if(d.substr(0,1)=="0"){
c=!c;
}
var ds="."+(Esd||"")+".";
if(c){
if(ds.indexOf("."+d+".")<0){
Esd=(ds+d);
}
}else{
Esd=ds.replace(new RegExp("\\."+d+"\\.","g"),".");
}
Esd=Esd.replace(/^\.+/,"").replace(/\.+$/,"");
NSD(Esd);
SC("showdetail",Esd);
ERF();
}
}
function ECR(_78){
var i=_78.id;
if(i.substr(0,5)=="color"){
var f=i.substr(5);
SC("color"+f,_78.value);
ERF();
}
}
function ECE(_7b){
var i=_7b.id;
if(i.substr(0,4)=="line"){
var f=i.substr(4);
SC("line"+f,_7b.value);
ERF();
}
}
function ERC(f,c){
SV("color"+f,c);
SC("color"+f,c);
ERF();
}
function ESN(){
SC("showbirthname",NGB());
ERF();
}
function ESF(){
SC("showsurnamefirst",NGS());
ERF();
}
function EML(){
SC("showmaleleft",NGM());
ERF();
}
function ECO(){
SC("showcousins",NGC());
ERF();
}
function ECH(){
SC("showchildren",NGH());
ERF();
}
function ECP(){
SC("showparents",NGH());
ERF();
}
function ECW(){
SC("widthfactor",GV("showwidth"));
ERI();
}
function ERW(){
SV("showwidth",1);
SC("widthfactor",1);
ERF();
}
function ETK(){
var ns=!GS("keydiv");
if(ns){
KDK(GE("keycontent"));
}
SS("keydiv",ns);
NKS(ns);
}
function ETO(){
var s=!GS("optionsdiv");
SS("optionsdiv",s);
SH("optionslinktext",s?"Hide":"Show");
GE("treemargin").style.paddingBottom=(s?(GE("optionsdiv").offsetHeight+"px"):0);
TCD(Evp,250);
}
function ETI(){
var w=GE("leftdiv").offsetWidth;
var s=TGS();
var v=GI("leftdiv");
ESI(!v);
NHF();
TSD(s.left+(v?-w:w),s.top);
TCD(Evp,250);
}
function ESI(s){
var c=s?"marginon":"marginoff";
GE("treemargin").className=c;
GE("externalmargin").className=c;
GE("navmargin").className=c;
GE("welcomemargin").className=c;
GE("keymargin").className=c;
GE("optionsmargin").className=c;
SI("leftdiv",s);
NSS(s);
}
function EFB(i){
var sf=FCS(Efa,i);
SV("do_startbranch",sf.join("\t"));
document.topform.submit();
}
function EIU(r){
if(staticMode){
var e=GE("image-"+r);
return e?e.src:"image-"+r+".jpg";
}else{
return BR("ap/","image_read",{f:GV("familyid"),p:GV("personid"),c:GV("checksum"),r:r});
}
}
function EHW(){
SS("welcomediv",false);
}
function KDK(o){
var d=TND();
TAE(d,"m",{g:"m",h:"Blue is male"},0,0,false);
TAE(d,"f",{g:"f",h:"Pink is female"},1,0,false);
TAE(d,"w",{h:"Thick\nlines..."},0,1,false);
TAE(d,"h",{h:"...show partners"},1,1,false);
TAL(d,0,1,1,1,2);
TAE(d,"b",{g:"f",h:"Mother"},2.5,0,false);
TAE(d,"g",{g:"m",h:"Father"},3.5,0,false);
TAL(d,2.5,0,3.5,0,1);
TAE(d,"d",{g:"f",h:"Daughter"},2.5,1,false);
TAE(d,"s",{g:"m",h:"Son"},3.5,1,false);
TAL(d,3,0,3,0.5,1);
TAL(d,2.5,0.5,3.5,0.5,1);
TAL(d,2.5,0.5,2.5,1,1);
TAL(d,3.5,0.5,3.5,1,1);
TAE(d,"z",{h:"Deceased are faded",z:1},5,0,false);
TAE(d,"o",{h:"Dotted lines lead to more"},5,1,false);
TAL(d,5,1,5,0.6,0);
TAL(d,5,1,4.55,1,0);
TRD(d,"",false,NGR(),NGL(),o,null,false,false,1,1,null);
}
function ESL(){
return {s:Ess.length,i:Eis.length,n:GV("newscript").length};
}
function ECI(c,s){
EHW();
SV("importcacheid",c);
SV("newscript","");
Efa={};
Eis=s;
ERS(s);
EUS(true,null,"view",true,false);
EUL(false);
}
function ESA(){
SV("importcacheid","");
SV("newscript","");
Efa={};
Eis="";
EUS(true,null,"edit",true,false);
EUL(false);
SS("welcomediv",true);
}
function EES(s){
SS("exporttext",s);
if(s){
SV("exporttext",GV(s).trim());
GE("exporttext").select();
GE("exporttext").scrollTop=0;
}else{
SV("exporttext","");
}
var ls=["","gedcom","newscript","csv","text"];
for(var j=0;j<ls.length;j++){
GE("export_show_"+ls[j]).className=(s==ls[j])?"selbold":"";
}
}
