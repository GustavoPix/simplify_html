(function Simpq(){

    var _objScreenListener = [];
    var _objOffScreenListener = [];

    window.addEventListener('load', function(){
        window.footer = $('footer');
        window.header = $('header');
        window.body = $('body');
        
        window.addEventListener("scroll",function(){
            _objScreenListener.forEach((element,i) => {
                if (element.element.offsetTop>scrollY && element.element.offsetTop < scrollY + innerHeight)
                {
                    if (!element.entered)
                    {
                        element.entered = true;
                        element.f();
                        if (!element.repeater)
                            _objScreenListener.splice(i,1);
                    }
                }
                else if (element.entered)
                    element.entered = false;
            });
            
        });
        window.addEventListener("scroll",function(){
            _objOffScreenListener.forEach((element,i) => {
                if (element.element.offsetTop>scrollY && element.element.offsetTop < scrollY + innerHeight)
                {
                    if (!element.entered)
                        element.entered = true;
                }
                else if (element.entered)
                {
                    element.f();
                    if (!element.repeater)
                        _objScreenListener.splice(i,1);
                    element.entered = false;
                }
            });
            
        });
    });
    
        
    
    function $(query) {
        return document.querySelector(query);
    }
    function $$(query)
    {
        return document.querySelectorAll(query);
    }
    function $Class(query)
    {
        return this.$('.' + query);
    }
    function $$Class(query)
    {
        return this.$$('.' + query);
    }
    function $Id(query)
    {
        return this.$('#' + query);
    }
    function $$Id(query)
    {
        return this.$$('#' + query);
    }
    function Add(content)
    {
        return this.appendChild(content);
    }
    function CreateElement(tag,content)
    {
        var a = document.createElement(tag);
        a.innerHTML = content;
        return a;
    }
    function Delete(element)
    {
        var a = element || this;
        if (a != window)
            a.parentNode.removeChild(a);
        else
            console.error("window não pode ser deletado");
            
    }
    function Listen(type,f){
        this.addEventListener(type,f);
    }
    function Click(f)
    {
        Listen("click",f);
    }
    function OnScreen(f,repeater)
    {
        _objScreenListener.push({
            element:this,
            repeater:repeater || false,
            f:f,
            entered:false
        });
    }
    function OffScreen(f,repeater)
    {
        _objOffScreenListener.push({
            element:this,
            repeater:repeater || false,
            f:f,
            entered:false
        });
    }

    window.query =  {
        $:$,
        $$:$$,
        $Class:$Class,
        $$Class:$$Class,
        $Id:$Id,
        $$Id:$$Id
    }
    window.deleteElement = Delete;
    window.createElement = CreateElement;

    HTMLElement.prototype.listen= Listen;
    HTMLElement.prototype.click = Click;
    HTMLElement.prototype.addElement = Add;
    HTMLElement.prototype.deleteThis = Delete;
    HTMLElement.prototype.onScreen = OnScreen;
    HTMLElement.prototype.offScreen = OffScreen;


    function sleep(ms)
    {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

})();
