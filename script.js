function main () {
    var screen = '';
    var choice1 = '';
    var choice2 = '';
    var func = '';
    var answer = '';
    var done = false;
    var linanswer;
    var a=0,b=0,y=0,c=0;
$('.grid').click(function() {
    $(this).fadeTo('fast',0.3);
    $(this).fadeTo('slow',1);
        switch ($(this).attr('id')) {
                case 'r1': screen+='1'; $('#bar').append('1'); break;
                case 'r2': screen+='2'; $('#bar').append('2'); break;
                case 'r3': screen+='3'; $('#bar').append('3'); break;
                case 'div': choice1 = screen; screen=''; func = '/'; $('#bar').append('/'); break;
                case 'r4': screen+='4'; $('#bar').append('4'); break;
                case 'r5': screen+='5'; $('#bar').append('5'); break;
                case 'r6': screen+='6'; $('#bar').append('6'); break;
                case 'mult': choice1 = screen; screen=''; func = '*'; $('#bar').append('*'); break;
                case 'r7': screen+='7'; $('#bar').append('7'); break;
                case 'r8': screen+='8'; $('#bar').append('8'); break;
                case 'r9': screen+='9'; $('#bar').append('9'); break;
                case 'add': choice1 = screen; screen=''; func = '+'; $('#bar').append('+'); break;
                case 'clear': screen=''; $('#bar').text(''); break;
                case '0': screen+='0'; $('#bar').append('0'); break;
                case 'enter': choice2 = screen; screen=''; calculate(); break;
                case 'sub': choice1 = screen; screen=''; func = '-'; $('#bar').append('-'); break; 
        };
    
    });
    
    function calculate() {
        choice1 = Number(choice1);
        choice2 = Number(choice2);
        switch (func) {
            case '/': answer = choice1 / choice2; break;
            case '*': answer = choice1 * choice2; break;
            case '+': answer = choice1 + choice2; break;
            case '-': answer = choice1 - choice2; break;
        }
        $('#bar').append('='+answer);
        done = true;
    }
    
}
$(document).ready(main);