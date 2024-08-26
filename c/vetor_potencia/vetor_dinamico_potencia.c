#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main () {
	system("color 03");
	
	int tam;
	int *vetor;
	
	printf("Escolha a quantidade de potencias de 2 que deseja ver: ");
	scanf("%d", &tam);
	
	vetor = (int *) malloc(sizeof(int) *tam);
	
	for (int i = 1; i <= tam; i++) {
		vetor[i] = pow(2, i);
		printf("Potencia %d: %d\n", i, vetor[i]);
	}
	
	system("pause");
	
	return (0);
} 