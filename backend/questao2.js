function isBalanced (arg) {
    const first = arg[0]
    const last = arg[arg.length-1]
    const arrayExpressions = []
    const OParenthese = '('
    const OBrace = '{'
    const OBracket = '['
    const CParenthese = ')'
    const CBrace = '}'
    const CBracket = ']'
  
    if(first == ")" || first == "}" || first == "]"){
        return 'NÃO'
    }
    if(last == "(" || last == "{" || last == "[") {
        return 'NÃO'
    }
    if(arg.length % 2 != 0) {
        return 'NÃO'
    }
    for (let i = 0; i < arg.length; i++) { 
		switch(arg[i]) {
			case OParenthese:
				arrayExpressions.push(OParenthese);
				break;
			case OBracket: 
				arrayExpressions.push(OBracket);
				break;
			case OBrace:
				arrayExpressions.push(OBrace);
				break;
			case CParenthese:
				if (arrayExpressions.pop() != OParenthese) {
					return 'NAO';
				}
				break;
			case CBracket:
				if (arrayExpressions.pop() != OBracket) {
					return 'NAO';
				}
				break;
			case CBrace:
				if (arrayExpressions.pop() != OBrace) {
					return 'NAO';
				}
				break;
		}
	}
	return 'SIM';    
}
console.log(isBalanced('{(([])])}'))


//base de pensamento e algoritmo em https://gist.github.com/Viny2999/29b7cb1cd05af6d20fa163bb44f3f43b

// Se houver brac de abertura, este só podera ser fechado caso todos os outros dentro tenham sido fechados  tbm 

// se houver brac de fechamento na primeira posição, ERRADO

// se houver brac de abertura na ultima posição, ERRADO
