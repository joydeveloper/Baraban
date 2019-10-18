function BuildElement(etype,eparent,id,eclass,){
    let instance= document.createElement(etype);
    if(eclass!=null || eclass!=undefined) 
    instance.className=eclass;
    if(id!=null || id!=undefined) 
    instance.id=id;
    if(eparent!=null || eparent!=undefined)
     document.getElementById(eparent).appendChild(instance);
     return instance;
 }
 function ParentSet(instance,eparent)
 {
    if(eparent!=null || eparent!=undefined)
    document.getElementById(eparent).appendChild(instance);
}
function IdSet(instance,id){
    if(id!=null || id!=undefined) 
    instance.id=id;
}
function CssSet(instance,eclass)
{
    if(eclass!=null || eclass!=undefined) 
    instance.className=eclass;
}
function AddText(instance,text){
    if(text!=null || text!=undefined)
{
   instance.appendChild(document.createTextNode(text));
}
}
function CreateUL(names, classname) {
    var tul = document.createElement("UL");
    tul.className = classname;
    for (i = 0; i < names.length; i++) {
        var tli = document.createElement("LI");
        var t = document.createTextNode(names[i]);
        tli.appendChild(t);
        tul.appendChild(tli)
    }
    document.body.appendChild(tul);
    return tul;
}

