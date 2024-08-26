#include <stdio.h>

int fibonacci (int x) {
	if (x == 0 || x == 1) {
		return x;
	} else {
		return fibonacci (x-2) + fibonacci (x-1);
	}
}

int main (){
	
	int num, resposta;
	
	printf("Digite um numero inteiro: ");
	scanf("%d", &num);
	
	resposta = fibonacci(num);
	
	printf("O valor e: %d\n", resposta);
	
	return 0;
}
