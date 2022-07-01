let calc='';
let ch="";
var tab=new Array();
let caracter=0;
function f_calc(n)
{
    document.getElementById('screen').focus();
       
       switch (n) {
           case 'ce':
                tab=new Array();
                document.getElementById('screen').value='';          
                calc='';
                ch='';
                break;
            case '-':
            case '*':
            case '/':
            case '+':
                        tab.push(ch.toString());

                       /* alert(tab.slice(tab.length-2));
                        if (tab.slice(tab.length-2)=n){*/
                            
                            if(caracter==1 ){
                            tab.pop();
                            tab.pop();
                        }
                        if(ch.length!=0){
                        calc=calcule(tab);
                       document.getElementById('screen').value=calc;
                       caracter=1;
                       ch="";
                       tab.push(n);}
                                
                        break;
        
            case '=':
                        if(caracter==1){
                            tab.pop(); 
                        }
                        tab.push(ch);
                        calc=calcule(tab);
                        document.getElementById('screen').value=calc;
                        ch='';
                        break;
            case '+-':
                        ch=ch*(-1);
                        document.getElementById('screen').value=ch;
                        break;
            case '←':ch=ch.substring(0,ch.length-1);
                    document.getElementById('screen').value=ch;
                        
                        break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
               /* alert(tab[tab.length]);
            if (tab[tab.length]=='/' || tab[tab.length]=='+' || tab[tab.length]=='-' || tab[tab.length]=='*') {
                
                document.getElementById('screen').value=n; 
               

            } else{*/
                caracter=0;
                ch=ch+n;
                document.getElementById('screen').value=ch; 
               
                           

                break;
            case '.':
                if(ch.length!=0||caracter!=1 && ch.indexOf('.')==-1){
                    ch=ch+'.';
                    document.getElementById('screen').value=ch; 
                }
                                 
                 
                break;
            case '%':
                if(ch.length!=0||caracter!=1){
                    ch=ch/(100);
                    document.getElementById('screen').value=ch; 
                }
                break;
           
           
       }
       return true;
}
function calcule(tableau){
    
    //alert("cal"+tableau.join(''));
    return eval(tableau.join(''));
        
   
}