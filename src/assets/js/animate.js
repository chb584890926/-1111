function animate(dom,obj,fn){
    clearInterval(dom.timer);

    dom.timer = setInterval(function(){
        var bool = true;
        for(var k in obj) {

            if(k=="opacity"){

                var objAttr= parseFloat(getAttr(dom,k))*100;
            }else{
                var objAttr = parseInt(getAttr(dom,k));
            }

            var speed = (obj[k]-objAttr)/10;

            speed = speed>0 ?Math.ceil(speed):Math.floor(speed);

            if(objAttr!=obj[k]){

                bool=false;

            }

            if(k=="opacity"){

                 dom.style.filter = "alpha(opacity:"+objAttr + speed+")";
                 dom.style[k] = (objAttr + speed)/100;

            }else{

                  dom.style[k] = objAttr + speed +"px";

            }
        }
            if(bool){
                clearInterval(dom.timer);
                if(fn){
                    fn.call(dom);
                }
            }
    },30)

}


function getAttr(dom,attr){

    if(dom.currentStyle){
        return dom.currentStyle[attr];
    }else{
        return getComputedStyle(dom,null)[attr];
    }

}












