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

var Sen=[{p:"personalname",l:"familyname",q:"familybirth"},{e:"c_email",w:"website",B:"blog",P:"photosite",t:"hometel",k:"worktel",u:"mobile",S:"skype",a:"address",C:"othercontact"},{v:"birthplace",y:"deathplace",U:"burialplace",j:"profession",E:"employer",I:"interests",A:"activities",o:"bionotes"}];
var Sv1={e:"Email",w:"Website",B:"Blog",P:"Photo site",t:"Home tel",k:"Work tel",u:"Mobile",S:"Skype",a:"Address",C:"Other"};
var Sv2={v:"Birth place",y:"Death place",U:"Burial place",F:"Burial date",j:"Profession",E:"Company",I:"Interests",A:"Activities",o:"Bio notes"};
var Spt={m:"Married",e:"Engaged",r:"Relationship",s:"Separated",d:"Divorced",a:"Annulled"};
var Sat={b:"Biological",a:"Adopted",f:"Foster",s:"Step"};
var Sur={w:"website",B:"blog",P:"photos"};
var Sec=",de,del,la,von,van,den,der,of,the,and,y,da,dos,das,by,in,las,av,le,du,di,af,della,ap,und,do,ferch,och,zu,zur,des,bei,los,";
var Spe;
var Spa=0;
var Sed=false;
var Srl;
var Sps=null;
var Spd=null;
var Spl=null;
var disable_family_tests=false;
function SPL(){
CE(parent);
}
function SPW(i){
return Ewr||(i&&(Ewp==i));
}
function SPN(p){
return FDN(p,false,1,NGS(),NGB(),true);
}
function SSE(i,e){
var pi=Spe;
Spe=i;
var p=Efa[i];
var md=(Spe==GV("personid"));
var v=GE("nametitle");
v.innerHTML=EH(SPN(p));
v.className=p.p?"sname":"sdefname";
SV("shareperson","Invite "+p.h+" to share family");
SS("hideurl",false);
GE("switchpanel3").style.display=p.cp?"block":"none";
if(!md){
SV("showpath","Show relationship to "+p.h);
SS("showpath",true);
}else{
SS("showpath",false);
}
var uf=p.w?"w":(p.B?"B":(p.P?"P":null));
SS("showurl",uf?true:false);
if(uf){
SV("urlmode",Sur[uf]);
GE("urllink").href=p[uf];
SV("showurl","Show "+(false?"my":(p.h+"'s"))+" "+Sv1[uf].toLowerCase());
}
SSA((((Spa==3)&&!p.cp)||((pi!=i)&&((e=="edit")||Sed)))?0:Spa,(e=="edit")?((Sed&&(pi==i))?null:true):false);
SIU(false);
}
function SSA(_a,_b){
if(Sed&&((_a!=Spa)||(_b===false))){
try{
GE("switchlink"+_a).focus();
}
catch(e){
}
}
Spa=_a;
if(_b!==null){
Sed=_b;
}
var f=Efa;
var p=f[Spe];
var md=(Spe==GV("personid"));
var pw=SPW(Spe);
if(!pw){
Sed=false;
}
for(var j=0;j<=3;j++){
GE("switchpanel"+j).className=((_a==j)?"sswitched":"sswitch");
GE("switchlink"+j).className=((_a==j)?"sswitchedlink":"");
}
SR("personalview",(Spa==0)&&!Sed);
SR("personaledit",(Spa==0)&&Sed);
SR("personaleditdeath",(Spa==0)&&(p.z==1)&&Sed);
SR("partnersviewedit",(Spa==3));
SR("contactview",(Spa==1)&&!Sed);
SR("contactedit",(Spa==1)&&Sed);
SR("bioview",(Spa==2)&&!Sed);
SR("bioedit1",(Spa==2)&&Sed);
SR("bioeditdeath",(Spa==2)&&(p.z==1)&&Sed);
SR("bioedit2",(Spa==2)&&Sed);
SR("viewfooter",pw&&(!Sed));
SR("editfooter",Sed);
SR("readonlyfooter",(!staticMode)&&(!Ewr)&&(!Ewp));
SR("writemefooter",(!Ewr)&&pw);
SR("writenotfooter",Ewp&&!pw);
SV("editbutton",(Spa==3)?"Edit partnership details":("Edit "+(md?"my":(p.h+"'s"))+" details"));
SS("nonrelations",true);
SS("shareperson",(!staticMode)&&GV("sessionid")&&(p.z!="1")&&!md);
SS("nonediting",!Sed);
SR("relactions",Ewr&&!Sed);
if(Sed){
var df=(_b===true);
for(var j in Sen[Spa]){
SV(Sen[Spa][j],p[j]);
if(df&&(j!="y")&&!GV(Sen[Spa][j])){
FS(Sen[Spa][j]);
df=false;
}
}
}else{
if(Ewr){
SRP(false);
}
}
if(_a==1){
SP1(_b===true);
}else{
if(_a==2){
SP2(_b===true);
}else{
if(_a==3){
SP3(_b===true);
}else{
SP0(_b===true);
}
}
}
SSF();
}
function SSF(){
var om=!staticMode;
var sl=ESL();
SR("importfooter",om&&(!sl.n)&&(!sl.s)&&(!sl.i));
SR("downloadfooter",om&&GV("sessionid")&&GV("familyid")&&sl.s&&(!sl.n)&&!sl.i);
SR("clearfooter",om&&(sl.n||sl.i)&&!sl.s);
}
function SWA(p){
SSA(p,Sed);
}
function SED(){
ECS();
ESE(false,[Spe],Spe);
}
function SAS(){
EFE(true);
}
function SCS(){
EFE(false);
}
function SRR(e){
var v=GE(e);
while(v.firstChild){
v.removeChild(v.firstChild);
}
}
function SJR(e,v,h,s){
var r=document.createElement("TR");
var a=document.createElement("TD");
a.className="sboth";
a.innerHTML=h?v:EL(v);
a.colSpan=s;
r.appendChild(a);
GE(e).appendChild(r);
}
function SSR(e,t,v,h,a){
var r=document.createElement("TR");
r.vAlign=a||"top";
var a=document.createElement("TD");
a.className="sleft";
if(t){
a.innerHTML=EH(t+":");
}
var b=document.createElement("TD");
b.className="sright";
b.innerHTML=h?v:EL(v);
r.appendChild(a);
r.appendChild(b);
GE(e).appendChild(r);
return r;
}
function SUR(e,t,i,v,s){
SJR(e,"<INPUT TYPE=\"submit\" VALUE=\""+EH(t)+"\" ID=\""+EH(i+v)+"\" CLASS=\"sbutton\" onClick=\"SCB('"+EH(i)+"','"+EH(v)+"'); return false;\">",true,s);
}
function SPP(i,ra,s){
var f=Efa;
var bn=NGB();
var sf=NGS();
var rn=[];
for(j=0;j<ra.length;j++){
var pi=f[ra[j]];
var l=bn?(pi.q||pi.l):(pi.l||pi.q);
rn[rn.length]={i:ra[j],l:l?l.toLowerCase():"zzz",p:pi.p?pi.p.toLowerCase():"zzz",n:FDN(pi,false,1,sf,bn,true)+FYS(pi)};
}
rn.sort(NSN);
var v=GE(i);
v.options.length=0;
v.options[v.options.length]=new Option("","");
for(j=0;j<rn.length;j++){
var l=v.options.length;
v.options[l]=new Option(rn[j].n,rn[j].i);
if(rn[j].i==s){
v.selectedIndex=l;
}
}
}
function SPT(i,b,s){
var v=GE(i);
v.options.length=0;
v.options[v.options.length]=new Option("","");
for(var j in Sat){
if((j!="b")||b){
v.options[v.options.length]=new Option(Sat[j],j);
}
}
SO(i,s);
}
function SUT(i,df){
var f=Efa;
var t=GO(i);
var w=df?"mother":"father";
if(t&&f[t]){
var p=f[t];
if(p.g=="m"){
var w="father";
}else{
if(p.g=="f"){
var w="mother";
}else{
if((p.g||"").charAt(0)=="o"){
var w="parent";
}
}
}
}
ST(i+"title",w);
}
function SLR(e,s){
SJR(e,"<IMG CLASS=\"blankpixel\" WIDTH=\"1\" HEIGHT=\"4\">",true,s);
}
function SRB(t,i,v){
SUR("relactions",t,i,v,1);
}
function SPR(e){
SRR("relactions");
if(e){
SS("nonrelations",false);
}
}
function SRP(e){
SPR(e);
var f=Efa;
var p=f[Spe];
if(e){
var fd=false;
var ns=false;
SRB("Change parents","treeparents","");
var ot=p.b&&parseInt(p.b.substring(0,4),10);
var bs=FLS(f,Spe,false,ot);
if(bs.length){
SRB(ot?"Change multiple birth order":"Change sibling order","changeorder","");
}
if(p.cp){
SRB(((p.cp>1)||!p.s)?"Change partners":"Change partner","changespouse","");
}
if(Spe==Efo){
fd=true;
}else{
if(!disable_family_tests){
var cf=FDF(f,Efo,null,null,null);
var df=FDF(f,Efo,Spe,null,null);
if((df.length-cf.length)>1){
ns=true;
}
}
if(!ns){
SRB("Delete "+p.h,"delete",Spe);
}
}
SRB("Cancel","cancel","");
if(ns){
SJR("relactions","<BR>This person cannot be deleted because that would split the tree. Try deleting outer people on the tree first.",true,1);
}
if(fd){
SJR("relactions","<BR>This person started the tree and cannot be deleted.",true,1);
}
}else{
var md=(GV("personid")==Spe);
var ap=p.fg||Ead||(GV("personid")==Efo);
SJR("relactions",md?"Click to add your relatives:":("Click to add relatives of "+p.h+":"),false,1);
if(ap){
if(p.f&&p.m){
}else{
if(p.f){
SRB((p.X||p.Y)?"Add primary mother":"Add mother","choosemother","");
}else{
if(p.m){
SRB((p.X||p.Y)?"Add primary father":"Add father","choosefather","");
}else{
SRB((p.X||p.Y)?"Add primary parents":"Add parents","addparents","");
}
}
}
}
if(p.s||p.cp){
SRB("Add partner/ex","choosespouse","");
}else{
SRB("Add partner/ex","choosespouse","");
}
var sc=p.g||(p.s&&f[p.s].g);
if(ap){
SRB("Add brother/sister","addsibling","");
}
if(sc){
SRB("Add child","addchild","");
}
if(ap){
if(p.X&&p.Y){
}else{
if(p.Y){
SRB("Add secondary mother","choosemother2","");
}else{
if(p.X){
SRB("Add secondary father","choosefather2","");
}else{
if(p.f||p.m){
SRB("Add secondary parents","addparents2","");
}
}
}
}
}
var cf=0;
for(var j in f){
cf++;
if(cf>1){
SRB("Change or delete","morelactions","");
break;
}
}
if(!sc){
SJR("relactions","<BR>To add children, set this person's gender first.",true,1);
}
if(!ap){
var si=GV("sessionid");
if(md){
SJR("relactions","<BR>To add your parents, brothers or sisters, "+"please "+(si?"":"sign in then ")+"create a new family branch.",true,1);
if(si){
SRB("Create new family for me","startbranch","");
}
}else{
SJR("relactions","<BR>To add "+p.h+"'s parents, brothers or sisters, "+"a new family branch can be created"+(si?"":" after signing in")+".",true,1);
if(si){
SRB("Create new family for "+p.h,"startbranch","");
}
}
}
var ad=GE("advertisement");
if(ad){
SLR("relactions",1);
SLR("relactions",1);
SJR("relactions",ad.innerHTML,true,1);
}
}
}
function SP0(e){
var f=Efa;
var p=f[Spe];
var g=p.g||"";
if(Sed){
GE("gender_f").checked=(g=="f");
GE("gender_m").checked=(g=="m");
GE("gender_o").checked=(g.charAt(0)=="o");
GE("othergenderdiv").style.display=(g.charAt(0)=="o")?"block":"none";
GE("alive").checked=(p.z!="1");
if(e){
SH("birthdate",SDH("birth","SCV('birth');"));
SSD("birth",p.b);
SH("deathdate",SDH("death","SCV('death');"));
SSD("death",p.d);
SV("othergender",(g.charAt(0)=="o")?p.g.substring(1):"");
}
}else{
SRR("personalview");
var bn=NGB();
SSR("personalview","Full name",FDN(p,true,1,NGS(),bn,false),false);
if(p.q&&p.l&&(p.q!=p.l)){
SSR("personalview",bn?"Surname now":"Surname at birth",bn?p.l:p.q,false);
}
SSR("personalview","Gender",Fgn[g]?Fgn[g]:((g.charAt(0)=="o")?g.substring(1):Fgn[""]),false);
SSR("personalview","Birth date",FDT(p.b,true),false);
if(p.z==1){
SSR("personalview","Death date",FDT(p.d,true),false);
}
}
}
function SP1(e){
var f=Efa;
var p=f[Spe];
if(!Sed){
SRR("contactview");
for(var j in Sv1){
if(p[j]||((!staticMode)&&((j=="e")||(j=="w")||(j=="t")||(j=="a")))){
if(j=="e"){
SSR("contactview",Sv1[j],p[j]?("<A HREF=\"mailto:"+EH(p[j])+"\">"+EH(p[j])+"</A>"):"",true);
}else{
if(j=="S"){
SSR("contactview",Sv1[j],p[j]?("<A HREF=\"callto:"+EH(p[j])+"\">"+EH(p[j])+"</A>"):"",true);
}else{
if((j=="w")||(j=="B")||(j=="P")){
SSR("contactview",Sv1[j],p[j]?("<A HREF=\""+EH(p[j])+"\" TARGET=\"_new\" onClick=\"return UL(this);\">"+EH(p[j])+"</A>"):"",true);
}else{
SSR("contactview",Sv1[j],p[j],false);
}
}
}
}
}
if(staticMode&&!Esa){
SJR("contactview","&nbsp;<BR>To protect your privacy, phone numbers, addresses and emails have been removed.",true,2);
}
}
}
function SP2(e){
var f=Efa;
var p=f[Spe];
if(Sed){
if(e){
SH("burialdate",SDH("burial","SCV('burial');"));
SSD("burial",p.F);
}
}else{
SRR("bioview");
for(var j in Sv2){
if(p[j]||(j=="v")||(j=="y")||(j=="j")){
if(((j!="y")&&(j!="U")&&(j!="F"))||(p.z==1)){
SSR("bioview",Sv2[j],(j=="F")?FDT(p[j],true):p[j],false);
}
}
}
}
}
function S3R(f,p,pi,rc){
if(rc&&GE("partnersviewedit").firstChild){
SLR("partnersviewedit",2);
}
var cp=(p.s==pi)||(p.z==1);
var pl=(p.z!=1)&&(f[pi].z==1);
var gpi=new String(p.gp?p.gp[pi]:"");
if(rc){
SSR("partnersviewedit",FTP(f,p,pi,f[pi]),"<A HREF=\"#\" onClick=\"ESP('"+pi+"', true); return false;\">"+EH(SPN(f[pi]))+"<A>",true);
}
if(gpi=="m"){
var t={m:"Wedding date",w:"Location",z:((cp||pl)?"":"End date")};
}else{
if(gpi=="e"){
var t={r:"Engagement date",z:((cp||pl)?"":"End date")};
}else{
if(gpi=="r"){
var t={b:"Start date",z:((p.s==pi)?"":"End date")};
}else{
if(gpi=="s"){
var t={m:"Wedding date",w:"Location",s:"Separation date"};
}else{
if(gpi=="d"){
var t={m:"Wedding date",w:"Location",d:"Divorce date"};
}else{
if(gpi=="a"){
var t={m:"Wedding date",w:"Location",a:"Annulment date"};
}else{
var t={};
}
}
}
}
}
}
if(Sed){
var e="partner"+pi+"g";
if(rc){
SSR("partnersviewedit","Type","<SELECT ID=\""+EH(e)+"\" CLASS=\"sselect\" onChange=\"SCP('g', '"+EH(pi)+"')\"></SELECT>",true,"middle");
var v=GE(e);
v.options.length=0;
v.options[v.options.length]=new Option("","");
for(var j in Spt){
v.options[v.options.length]=new Option(Spt[j],j);
}
}
SO(e,gpi);
for(var ti in t){
if(t[ti]){
var tpi=p[ti+"p"]?p[ti+"p"][pi]:"";
if(ti=="w"){
var e="partner"+pi+ti;
if(rc){
SSR("partnersviewedit",t[ti],"<INPUT ID=\""+EH(e)+"\" CLASS=\"sfield\" onChange=\"SCP('"+ti+"', '"+EH(pi)+"');\">",true,"middle");
}
SV(e,tpi);
}else{
S3D(pi,t[ti],ti,tpi,rc);
}
}
}
}else{
if(rc){
for(var ti in t){
if(t[ti]){
var tpi=p[ti+"p"]?p[ti+"p"][pi]:"";
SSR("partnersviewedit",t[ti],(ti=="w")?tpi:FDT(tpi,true),false);
}
}
}
}
}
function S3D(pi,t,ti,d,rc){
if(rc){
var s=EH(pi+ti);
var o="SCP('"+EH(ti)+"', '"+EH(pi)+"');";
var h=SDH("partner"+s,o);
SSR("partnersviewedit",t,h,true,"baseline");
SSD("partner"+pi+ti,d);
}
}
function SDH(i,c){
return "<SPAN ID=\""+i+"options\" STYLE=\"display:none;\"><SELECT ID=\""+i+"variant\" CLASS=\"sselect\" onChange=\""+c+"\"></SELECT><br/></SPAN>"+"<SELECT ID=\""+i+"dom1\" CLASS=\"sselect\" TITLE=\"Day\" onChange=\""+c+"\"></SELECT>&nbsp;"+"<SELECT ID=\""+i+"month1\" CLASS=\"sselect\" TITLE=\"Month\" onChange=\""+c+"\"></SELECT>&nbsp;"+"<INPUT ID=\""+i+"year1\" CLASS=\"syear\" TITLE=\"Year\" onChange=\""+c+"\" MAXLENGTH=4>"+"<SPAN ID=\""+i+"expand\" CLASS=\"sexpand\"> <A HREF=\"#\" onClick=\"SDR('"+i+"')\" TITLE=\"Show more date options\">&#x25BA;</A></SPAN>"+"<SPAN ID=\""+i+"date2\" STYLE=\"display:none;\"> to<br/>"+"<SELECT ID=\""+i+"dom2\" CLASS=\"sselect\" TITLE=\"Day\" onChange=\""+c+"\"></SELECT>&nbsp;"+"<SELECT ID=\""+i+"month2\" CLASS=\"sselect\" TITLE=\"Month\" onChange=\""+c+"\"></SELECT>&nbsp;"+"<INPUT ID=\""+i+"year2\" CLASS=\"syear\" TITLE=\"Year\" onChange=\""+c+"\" MAXLENGTH=4></SPAN>";
}
function SDR(i){
SS(i+"options",true);
SS(i+"expand",false);
}
function SP3(e){
var f=Efa;
var p=f[Spe];
var rr={};
if(p.s){
rr[p.s]=true;
}
for(var pi in p.pc){
if(pi!=p.s){
rr[pi]=true;
}
}
if(Sed){
var rl=Spe;
for(var pi in rr){
rl+=" "+(p.gp?p.gp[pi]:"")+pi+(p.ep?p.ep[pi]:"");
}
var rc=(rl!=Srl);
Srl=rl;
}else{
Srl=null;
var rc=true;
}
if(rc){
SRR("partnersviewedit");
}
for(var pi in rr){
S3R(f,p,pi,rc);
}
}
function SSG(v){
EFC(Spe,{g:v});
EUF();
}
function SCV(i){
if(i=="birth"){
EFC(Spe,{b:SGD("birth")});
SHD("birth");
}else{
if(i=="death"){
EFC(Spe,{d:SGD("death")});
SHD("death");
}else{
if(i=="burial"){
EFC(Spe,{F:SGD("burial")});
SHD("burial");
}else{
if(i=="alive"){
EFC(Spe,{z:(GE(i).checked?"0":"1")});
}else{
if(i=="othergender"){
EFC(Spe,{g:"o"+GV(i)});
}else{
for(k=0;k<Sen.length;k++){
for(var j in Sen[k]){
if(i==Sen[k][j]){
var c={};
var v=new String(GV(i));
v=v.replace(/^\s+|\s+$/g,"");
if((j=="p")||(j=="l")||(j=="q")){
var s=v.split(" ");
for(w=0;w<s.length;w++){
if((s[w].length)&&(Sec.indexOf(","+s[w]+",")<0)&&(s[w].indexOf("'")<0)){
s[w]=s[w].charAt(0).toUpperCase()+s[w].substring(1);
}
}
v=s.join(" ");
}
if((j=="w")||(j=="B")||(j=="P")){
if(v.length&&(v.indexOf("://")<0)){
v="http://"+v;
}
}
c[j]=v;
EFC(Spe,c);
}
}
}
}
}
}
}
}
EUF();
}
function SCP(ti,pi){
var e="partner"+pi+ti;
var c={};
if(ti=="g"){
c[ti]=GO(e);
}else{
if(ti=="w"){
c[ti]=GV(e);
}else{
c[ti]=SGD(e);
SHD(e);
}
}
EPC(Spe,pi,c);
EUF();
}
function SCM(s){
var f=Efa;
var x=s?"2":"";
var tm=GO("treemother"+x);
var tf=GO("treefather"+x);
SPP("treefather"+x,FAR(f,Spe,tm),tm?f[tm].es:tf);
if(!GO("treefather"+x)){
SO("treefather"+x,f[Spe][s?"X":"f"]);
}
SUT("treemother"+x);
SUT("treefather"+x);
}
function SCF(s){
SUT("treefather"+(s?"2":""));
}
function SCT(s){
if(!s){
SPT("treeparenttype2",GO("treeparenttype")!="b",GO("treeparenttype2"));
}
}
function SFV(i){
if(!GV(i)){
if(i=="familybirth"){
var sn=GV("familyname");
if(sn){
EFC(Spe,{q:sn});
SV(i,sn);
if(GV(i)){
GE(i).blur();
setTimeout("FS('"+i+"')",0);
}
}
}
}
}
function SAP(f,ti,oi,spt,spm,apt,apm){
if(oi){
var op=f[oi];
}
if(oi&&(op.es||op.cp)){
if((op.es)&&(op.es!=ti)){
SRB(spt+SPN(f[op.es]),spm,op.es);
}
for(var pi in op.pc){
if((pi!=op.es)&&(pi!=ti)){
SRB(spt+SPN(f[pi]),spm,pi);
}
}
if(apm){
SRB(apt,apm,"");
}
}else{
if(apm){
SCB(apm,"");
}
}
}
function SPX(f,i1,i2,ap){
if(i1&&i2&&f[i1]&&f[i2]&&(ap||!FMS(f,i1,i2))){
if(!(f[i1].ep&&f[i1].ep[i2]&&f[i2].ep&&f[i2].ep[i1])){
EPC(i1,i2,{e:1});
}
}
}
function SCB(i,v){
var f=Efa;
var p=f[Spe];
if((i=="addparents")||(i=="addparentsstop")){
if(i=="addparents"){
ECS();
}
var pd=(p.z==1)&&(p.c.length>0);
for(var j=0;j<p.c.length;j++){
if(f[p.c[j]].z!=1){
pd=false;
}
}
var fi=EFI();
var fo={"^":Spe,g:"m",l:p.q};
if(pd){
fo.z=1;
}
EFC(fi,fo);
var mi=EFI();
var mo={"^":Spe,g:"f",s:fi,l:p.q};
if(pd){
mo.z=1;
}
EFC(mi,mo);
EFC(Spe,{m:mi,f:fi});
if(i=="addparents"){
ESE(true,[mi,fi],Spe);
}
}else{
if(i=="choosemother"){
SPR(true);
SAP(f,p.m,p.f,"Set mother to ","setmother","Add new mother","addmother");
SRB("Cancel","cancel","");
}else{
if(i=="choosefather"){
SPR(true);
SAP(f,p.f,p.m,"Set father to ","setfather","Add new father","addfather");
SRB("Cancel","cancel","");
}else{
if(i=="choosemother2"){
SPR(true);
SAP(f,p.X,p.Y,"Set secondary mother to ","setmother2","Add new secondary mother","addmother2");
SRB("Cancel","cancel","");
}else{
if(i=="choosefather2"){
SPR(true);
SAP(f,p.Y,p.X,"Set secondary father to ","setfather2","Add new secondary father","addfather2");
SRB("Cancel","cancel","");
}else{
if(i=="changeorder"){
SPR(true);
var ot=p.b&&parseInt(p.b.substring(0,4),10);
var bs=FLS(f,Spe,false,ot);
for(var j=0;j<bs.length;j++){
if(FCC(f[bs[j]],p)>=0){
break;
}
}
SRB("Move left (born earlier)","moveleft","");
SRB("Move right (born later)","moveright","");
SRB("Done","movedone","");
SD("moveleft",j<=0);
SD("moveright",j>=bs.length);
}else{
if((i=="moveleft")||(i=="moveright")){
var ot=p.b&&parseInt(p.b.substring(0,4),10);
var bs=FLS(f,Spe,false,ot);
for(var si=0;si<bs.length;si++){
if(FCC(f[bs[si]],p)>=0){
break;
}
}
for(var j=0;j<bs.length;j++){
if(FPO(f[bs[j]],ot)===null){
EFC(bs[j],{O:FBO(f,bs.slice(0,j),bs.slice(j+1),ot)});
}
}
var d=(i=="moveleft")?-1:1;
while(true){
si+=d;
if((si<0)||(si>bs.length)){
break;
}
if((si==0)||(si==bs.length)||(FPO(f[bs[si-1]],ot)!=FPO(f[bs[si]],ot))){
EFC(Spe,{O:FBO(f,bs.slice(0,si),bs.slice(si),ot)});
break;
}
}
EUF();
SCB("changeorder","");
}else{
if(i=="movedone"){
ESS();
SSA(Spa,false);
}else{
if((i=="choosespouse")||(i=="changespouse")){
SPR(true);
if((i=="changespouse")||!p.s){
for(var pi in p.pc){
if(pi!=p.s){
SRB("Set partner to "+SPN(f[pi]),"setspouse",pi);
}
}
}
if(i=="choosespouse"){
SRB("Add new partner","addspouse","");
SRB("Add new ex-partner","addexspouse","");
var ra=FPR(f,Spe);
if(ra.length){
SRB("Partner with person already on tree","treespouse","");
}
}
if(i=="changespouse"){
if(p.s){
SRB("Set no current partner","setspouse","");
}
if(!disable_family_tests){
var cf=FDF(f,Spe,null,null,null);
}
for(var pi in p.pc){
if((pi!=p.s)&&!FLP(f,Spe,pi).length){
if(!disable_family_tests){
var df=FDF(f,Spe,null,Spe,pi);
}
if(disable_family_tests||(df.length<=cf.length)){
SRB("Remove ex-partner "+SPN(f[pi]),"notexspouse",pi);
}
}
}
}
SRB("Cancel","cancel","");
}else{
if(i=="addchild"){
SPR(true);
var ct="";
var vt=v;
if(v=="a"){
ct="adopted ";
}else{
if(v=="f"){
ct="foster ";
}else{
vt=" ";
}
}
if(p.es){
SRB("Add "+ct+"child with "+SPN(f[p.es]),"addchildwith",vt+p.es);
}
for(var pi in p.pc){
if(pi!=p.es){
SRB("Add "+ct+"child with "+SPN(f[pi]),"addchildwith",vt+pi);
}
}
SRB("Add "+ct+"child with new "+((p.g=="m")?"mother":"father"),"addchildwithnew",v);
SRB("Add "+ct+"child without "+((p.g=="m")?"mother":"father"),"addchildwithout",v);
if(!v){
SRB("Add adopted child","addchild","a");
SRB("Add foster child","addchild","f");
}
SRB("Cancel","cancel","");
}else{
if(i=="addchildwith"){
ECS();
var ci=EFI();
var vt=v.substring(0,1);
var pi=v.substring(1);
var mi=FSM(f,Spe,pi)?Spe:pi;
var fi=FSM(f,Spe,pi)?pi:Spe;
var c={"^":Spe,m:mi,f:fi};
if(FMS(f,mi,fi)){
c.l=p.l;
c.q=p.l;
}
if((vt=="a")||(vt=="f")){
c.V=vt;
}
EFC(ci,c);
ESE(true,[ci],ci);
}else{
if((i=="addchildwithnew")||(i=="addchildwithout")){
ECS();
var ci=EFI();
var c={"^":Spe};
if(p.g=="m"){
c.f=Spe;
}else{
c.m=Spe;
}
if(v){
c.V=v;
}
if(i=="addchildwithnew"){
var pi=EFI();
if(p.g=="m"){
c.m=pi;
}else{
c.f=pi;
}
EFC(ci,c);
EFC(pi,{"^":ci,g:(p.g=="m")?"f":"m"});
ESE(true,[ci,pi],ci);
}else{
c.l=p.l;
c.q=p.l;
EFC(ci,c);
ESE(true,[ci],ci);
}
}else{
if(i=="addsibling"){
ECS();
var ap=!(p.m||p.f);
if(ap){
SCB("addparentsstop","");
}
var si=EFI();
EFC(si,{"^":Spe,m:p.m,f:p.f,l:p.q,q:p.q});
ESE(true,ap?[si,p.m,p.f]:[si],si);
}else{
if(i=="addmother"){
ECS();
SPX(f,p.f,p.m,false);
var mi=EFI();
EFC(Spe,{m:mi});
EFC(mi,{"^":Spe,g:"f"});
ESE(true,[mi],Spe);
}else{
if(i=="addfather"){
ECS();
SPX(f,p.f,p.m,false);
var fi=EFI();
EFC(Spe,{f:fi});
EFC(fi,{"^":Spe,g:"m"});
ESE(true,[fi],Spe);
}else{
if(i=="addmother2"){
ECS();
SPX(f,p.X,p.Y,false);
var mi=EFI();
EFC(Spe,{X:mi});
EFC(mi,{"^":Spe,g:"f"});
ESE(true,[mi],Spe);
}else{
if(i=="addfather2"){
ECS();
SPX(f,p.X,p.Y,false);
var fi=EFI();
EFC(Spe,{Y:fi});
EFC(fi,{"^":Spe,g:"m"});
ESE(true,[fi],Spe);
}else{
if(i=="addspouse"){
ECS();
SPX(f,Spe,p.s,true);
var si=EFI();
EFC(si,{"^":Spe,s:Spe,l:p.l});
ESE(true,[si],Spe);
}else{
if(i=="addexspouse"){
ECS();
var si=EFI();
EFC(si,{"^":Spe});
EPC(Spe,si,{e:1});
ESE(true,[si],Spe);
}else{
if(i=="notexspouse"){
EPC(Spe,v,{e:""});
ESS();
EUF();
}else{
if(i=="treespouse"){
SPR(true);
SJR("relactions","Choose the person to partner with:",false,1);
SJR("relactions","<SELECT ID=\"treepartner\" CLASS=\"sselect\"></SELECT>",true,1);
SLR("relactions",1);
SRB("Add as current partner","treeaddspouse","");
SRB("Add as ex-partner","treeaddexspouse","");
SRB("Cancel","cancel","");
SPP("treepartner",FPR(f,Spe),null);
}else{
if(i=="treeaddspouse"){
SCB("setspouse",GO("treepartner"));
}else{
if(i=="treeaddexspouse"){
ECS();
EPC(Spe,GO("treepartner"),{e:1});
ESS();
EUF();
}else{
if(i=="setmother"){
SPX(f,p.f,p.m,false);
EFC(Spe,{m:v});
ESS();
EUF();
}else{
if(i=="setfather"){
SPX(f,p.f,p.m,false);
EFC(Spe,{f:v});
ESS();
EUF();
}else{
if(i=="setmother2"){
SPX(f,p.X,p.Y,false);
EFC(Spe,{X:v});
ESS();
EUF();
}else{
if(i=="setfather2"){
SPX(f,p.X,p.Y,false);
EFC(Spe,{Y:v});
ESS();
EUF();
}else{
if(i=="setstepmother"){
SPX(f,p.X,p.Y,false);
EFC(Spe,{X:v,W:"s"});
ESS();
EUF();
}else{
if(i=="setstepfather"){
SPX(f,p.X,p.Y,false);
EFC(Spe,{Y:v,W:"s"});
ESS();
EUF();
}else{
if(i=="setspouse"){
SPX(f,Spe,p.s,true);
if(v){
SPX(f,v,f[v].s,true);
}
EFC(Spe,{s:v});
ESS();
EUF();
}else{
if(i=="treeparents"){
SPR(true);
SJR("relactions","Set the <SPAN ID=\"treemothertitle\">mother</SPAN>:",true,1);
SJR("relactions","<SELECT ID=\"treemother\" CLASS=\"sselect\" onChange=\"SCM(false)\"></SELECT>",true,1);
SLR("relactions",1);
SJR("relactions","Set the <SPAN ID=\"treefathertitle\">father</SPAN>:",true,1);
SJR("relactions","<SELECT ID=\"treefather\" CLASS=\"sselect\" onChange=\"SCF(false)\"></SELECT>",true,1);
SLR("relactions",1);
SJR("relactions","Type of these parents:",false,1);
SJR("relactions","<SELECT ID=\"treeparenttype\" CLASS=\"sselect\" onChange=\"SCT(false)\"></SELECT>",true,1);
SLR("relactions",1);
SLR("relactions",1);
SJR("relactions","Set the secondary <SPAN ID=\"treemother2title\">mother</SPAN>:",true,1);
SJR("relactions","<SELECT ID=\"treemother2\" CLASS=\"sselect\" onChange=\"SCM(true)\"></SELECT>",true,1);
SLR("relactions",1);
SJR("relactions","Set the secondary <SPAN ID=\"treefather2title\">father</SPAN>:",true,1);
SJR("relactions","<SELECT ID=\"treefather2\" CLASS=\"sselect\" onChange=\"SCF(true)\"></SELECT>",true,1);
SLR("relactions",1);
SJR("relactions","Type of secondary parents:",false,1);
SJR("relactions","<SELECT ID=\"treeparenttype2\" CLASS=\"sselect\" onChange=\"SCT(true)\"></SELECT>",true,1);
SLR("relactions",1);
SLR("relactions",1);
SRB("Switch primary and secondary parents","switchparents","");
SRB("Set parents and types","treesetparents","");
SRB("Cancel","cancel","");
SPP("treemother",FAR(f,Spe,null),p.m);
SPP("treefather",FAR(f,Spe,p.m),p.f);
SPP("treemother2",FAR(f,Spe,null),p.X);
SPP("treefather2",FAR(f,Spe,p.X),p.Y);
SPT("treeparenttype",true,p.V);
SPT("treeparenttype2",p.V!="b",p.W);
SUT("treemother",true);
SUT("treefather",false);
SUT("treemother2",true);
SUT("treefather2",false);
}else{
if((i=="switchparents")||(i=="treesetparents")){
var s={m:GO("treemother"),f:GO("treefather"),V:GO("treeparenttype"),X:GO("treemother2"),Y:GO("treefather2"),W:GO("treeparenttype2")};
if(i=="switchparents"){
s={m:s.X,f:s.Y,V:s.W,X:s.m,Y:s.f,W:s.V};
}
var n={};
var o={};
for(var j in s){
if(s[j]!=(p[j]||"")){
n[j]=s[j];
o[j]=p[j];
}
}
if(!disable_family_tests){
var cf=FDF(f,Spe,null,null,null);
}
SPX(f,p.f,p.m,false);
SPX(f,p.X,p.Y,false);
EFC(Spe,n);
EUS(true,null,null,false,false);
if(!disable_family_tests){
var df=FDF(f,Spe,null,null,null);
}
if(disable_family_tests||(df.length>cf.length)){
RE("This choice of parents is not allowed because it would split the tree. Try deleting the parents and their relatives instead.");
EFC(Spe,o);
}
ESS();
EUF();
}else{
if(i=="addparents2"){
SPR(true);
SRB("Add adopted parents","addparents2go","a");
SRB("Add foster parents","addparents2go","f");
if(p.V){
if(p.V!="b"){
SRB("Add biological parents","addparents2go","b");
}
}else{
SRB("Add biological parents (was adopted)","addparents2go","ba");
SRB("Add biological parents (was fostered)","addparents2go","bf");
}
SAP(f,p.m,p.f,"Set stepmother to ","setstepmother",null,null);
SAP(f,p.f,p.m,"Set stepfather to ","setstepfather",null,null);
SRB("Choose parents from tree","treeparents","");
SRB("Cancel","cancel","");
}else{
if(i=="addparents2go"){
ECS();
var fi=EFI();
var fo={"^":Spe,g:"m"};
EFC(fi,fo);
var mi=EFI();
var mo={"^":Spe,g:"f",s:fi};
EFC(mi,mo);
var po={X:mi,Y:fi,W:v.substring(0,1)};
var t1=v.substring(1,2);
if(t1){
po.V=t1;
}
EFC(Spe,po);
ESE(true,[mi,fi],Spe);
}else{
if(i=="delete"){
var p=Efa[v];
if(confirm("Are you sure you want to permanently delete "+SPN(p)+"?")){
var ni=p["^"];
if((!ni)||(!f[ni])){
ni=p["^"]||p.es||p.f||p.m||p.X||p.Y||p.c[0];
}
ECS();
SPX(f,p.f,p.m,false);
SPX(f,p.X,p.Y,false);
ESP(ni,true);
EFC(v,{x:""});
EUF();
}
}else{
if(i=="cancel"){
SSA(Spa,false);
}else{
if(i=="morelactions"){
SRP(true);
}else{
if(i=="startbranch"){
var md=(GV("personid")==Spe);
if(confirm("This will create a new family for "+(md?"your":(p.h+"'s"))+" relatives. Are you sure you want to proceed?")){
GE("startbranch").value="Please wait a few moments...";
EFB(Spe);
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
}
}
}
}
}
}
}
function NSN(a,b){
if(a.l<b.l){
return -1;
}else{
if(b.l<a.l){
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
return 0;
}
function SSD(i,d){
var v=GE(i+"variant");
v.options.length=0;
for(var j in Fvn){
v.options[v.options.length]=new Option(Fvn[j],j);
}
for(n=1;n<=2;n++){
var v=GE(i+"dom"+n);
v.options.length=0;
v.options[v.options.length]=new Option("",0);
for(var j=1;j<=31;j++){
v.options[v.options.length]=new Option(j,j);
}
var v=GE(i+"month"+n);
v.options.length=0;
v.options[v.options.length]=new Option("",0);
for(var j=1;j<=12;j++){
v.options[v.options.length]=new Option(Fmn[j],j);
}
}
var p=FPS(d?d.toString():"");
SV(i+"variant",p.v);
SS(i+"options",p.v);
SS(i+"expand",!p.v);
SO(i+"dom1",p.d1);
SO(i+"month1",p.m1);
SV(i+"year1",p.y1);
SO(i+"dom2",p.d2);
SO(i+"month2",p.m2);
SV(i+"year2",p.y2);
SHD(i);
}
function SHD(i){
var v=GV(i+"variant");
SS(i+"date2",v=="bet");
}
function SXD(i){
SS(i+"options",true);
SS(i+"expand",false);
}
function SGD(i){
return FBS(GV(i+"variant"),GV(i+"dom1"),GV(i+"month1"),GV(i+"year1"),GV(i+"dom2"),GV(i+"month2"),GV(i+"year2"));
}
function SSU(s){
SS("showurl",!s);
SS("hideurl",s);
}
function SIU(u){
var p=Efa[Spe];
var r=p?p.r:null;
var pw=(!Sed)&&SPW(Spe)&&GV("familyid");
u=u&&pw;
if(u){
var v=GE("uploadiframe");
v.src="imageupload.php?f="+escape(GV("familyid"))+"&p="+escape(GV("personid"))+"&c="+escape(GV("checksum"))+"&i="+escape(Spe)+(r?"&r="+escape(r):"");
}else{
if(r){
var v=GE("personimage");
SIV(r,v);
v.title=pw?"Click to change photo":"";
}
}
SV("uploadbutton",(Spe==GV("personid"))?"Add my photo":("Add photo for "+p.h));
SS("uploadbutton",pw&&(!r)&&(!u));
SS("uploadiframe",u);
SS("personimage",r&&(!u));
}
function SIV(r,v){
var e=r.split(" ");
var s=EIU(e[0]);
if(v.src!=s){
if(e[1]&&e[2]){
v.style.width=Math.max(8,e[1])+"px";
v.style.height=Math.max(8,e[2])+"px";
}else{
v.style.width="";
v.style.height="";
v.className="blankpixel";
}
v.src=s;
}
}
function SIC(){
if(SPW(Spe)&&!Sed){
SIU(true);
}
}
function SIF(f,i,r,w,h){
EFC(i,{r:(r?(r+" "+w+" "+h):r)});
ESS();
EUF();
SIU(false);
}
function SIA(){
SIU(false);
}
function SCC(){
if(confirm("Are you sure you want to clear this entire family and start again? "+"None of your work will be saved!")){
ESA();
}
}
function SUP(i){
if(i){
ST("pathtitle",SPN(Efa[i]));
Sps=GV("personid");
if(!(Sps&&Efa[Sps])){
Sps=Efo;
}
Spd=i;
SS("pathstartid",false);
SS("changepathstart",true);
}
SH("pathcontent",TPH(Efa,FCP(Efa,Sps,Spd,true),NGB(),NGS(),false));
SSP(Spe);
}
function SSP(i){
var p=Efa[i];
var e=GE("path-"+Spl);
if(e){
e.className="pi";
}
var e=GE("path-"+i);
if(e){
e.className="ps";
}
Spl=i;
}
function SEP(i,e){
GE("shortpath-"+i).style.display=e?"none":"inline-block";
GE("longpath-"+i).style.display=e?"inline-block":"none";
}
function SPS(){
var ra=[];
for(var j in Efa){
ra[ra.length]=j;
}
SPP("pathstartid",ra,Sps);
var d="path-"+Sps;
e=GE(d);
if(e){
SS(d,false);
}
SS("pathstartid",true);
SS("changepathstart",false);
}
function SSS(){
Sps=GO("pathstartid");
SUP(null);
var d="path-"+Sps;
e=GE(d);
if(e){
SS(d,false);
}
}
