# REGEX

## Classe de caracteres

.       Qualquer caracter exceto quebra de linha


### Contém
\w      letra       // Equivale [a-zA-Z0-9]
\d      dígito
\s      espaço em branco

### Não Contém
\W      letra
\D      dígito
\S      espaço em branco

### Sequancias
[abc]   Qualquer um dos caracteres presentes
[^abc]  Sem um dos caracteres presentes
[a-g]   Intervalo de caracteres presentes

(hotmail|gmail)     match

## Âncoras
^abc        Começa assim
abc$        Termina assim
^abc$       Começa e termina assim

a*          0 ou mais termo
a+          1 ou mais termo
a?          0 ou 1 termo
a{5}        exatemante 5 termos
a{5,}       5 ou mais termos
a{2,5}      2 até 5 termos

ab|cd       ab OU cd




Telefone:
^\d{2}[-]?\d{4,5}[-]?\d{4}$


Email
^\w+[@]\w+[.]\w+([.]\w+)?$