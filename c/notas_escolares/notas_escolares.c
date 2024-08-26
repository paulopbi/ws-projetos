#include <stdio.h>
#include <stdlib.h>

int main (void) {
	float nota;
	
	printf("Digite a sua nota: ");
	scanf("%f", &nota);
	
		if(nota >= 7.0){
			printf("Sua nota foi %.1f. Aprovado!", nota);
		} else if (nota >= 3.0 && nota <= 6.0) {
			printf("Sua nota foi %.1f. Voce esta reprovado mas podera fazer a recuperacao!", nota);
		} else {
			printf("Sua nota foi %.1f. Voce esta reprovado e nao pode fazer recuperacao!", nota);
		}
		
	return (0);
}