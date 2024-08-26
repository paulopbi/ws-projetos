#include <stdio.h>
#include <stdlib.h>

int main () {
	system("color 0B");
	
	int *ptr;
	printf("Endereco sem alocacao dinamica: %p.\n\n", ptr);
	
	ptr = (int *) malloc(sizeof (int));
	printf("Endereco apos a alocacao dinamica: %p. \n\nValor do ponteiro com alocacao dinamica: %d.\n\n", ptr, *ptr);
	
	*ptr = 10;
	
	printf("Endereco apos a alocacao dinamica e atribuicao do valor ao ponteiro: %p. \n\nValor do ponteiro apois a atribuicao: %d.\n\n", ptr, *ptr);
	
	system("pause");
	
	return (0);
} 