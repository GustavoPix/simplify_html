(function Simpq(){

    window.addEventListener('load', function(){
        window.footer = $('footer');
        window.header = $('header');
        window.body = $('body');
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
    HTMLElement.prototype.addElement = Add;
    HTMLElement.prototype.deleteThis = Delete;

})();
