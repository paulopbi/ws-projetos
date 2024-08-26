#include <stdio.h>
#include <stdlib.h>

int main() {
	int numero1, numero2, quociente, resto;
	
	printf("Digite o dividendo: ");
	scanf("%d", &numero1);
	
	printf("Digite o divisor: ");
	scanf("%d", &numero2);
	
	quociente = numero1 / numero2;
	resto = numero1 % numero2;
	
	printf("O quociente e: %d, e o resto do numero digitado e: %d", quociente, resto);
	return 0;
}
