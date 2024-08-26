#include <stdio.h>
#include <stdlib.h>

int main (void) {
	int valor, antecessor, sucessor;
	
	printf("Insira algum numero: ");
	scanf("%d", &valor);
	
	printf("O valor digitado foi: %d.\n", valor);
	printf("O antecessor e: %d.\n", valor - 1);
	printf("O sucessor e: %d.\n", valor + 1);
	
	return (0);
}