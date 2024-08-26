#include <stdio.h>
#include <stdlib.h>

int main (void) {
	int data;
	
	printf("Digite um valor de 1 ate 7: ");
	scanf("%d", &data);
	
		switch(data) {
			case 1:
				printf("Domingo");
				break;
			
			case 2:
				printf("Segunda-Feira");
				break;
				
			case 3:
				printf("Terca-Feira");
				break;
			
			case 4:
				printf("Quarta-Feira");
				break;
				
			case 5:
				printf("Quinta-Feira");
				break;
				
			case 6:
				printf("Sexta-Feira");
				break;
				
			case 7:
				printf("Sabado");
				break;
				
			default:
				printf("Valor invalido");
				break;
		}
		
	return (0);
}