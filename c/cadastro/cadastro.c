#include <stdio.h>
#include <stdlib.h>
#define marcaDeAgua "Criado por Paulo Victor em 2023\n\n"

int main(void) {
	char nome[40], email[40];
	int idade, cpf, op;
	
	printf("    ____              __         _    ___      __            \n");
    printf("   / __ \\____ ___  __/ /___     | |  / (_)____/ /_____  _____\n");
    printf("  / /_/ / __ `/ / / / / __ \\    | | / / / ___/ __/ __ \\/ ___/\n");
    printf(" / ____/ /_/ / /_/ / / /_/ /    | |/ / / /__/ /_/ /_/ / /    \n");
    printf("/_/    \\__,_/\\__,_/_/\\____/     |___/_/\\___/\\__/\\____/_/\n");
    printf("                                                              \n");
    
    system("color 0B");
	
	printf("Sistema de cadastro de usuarios \n\n");
		
	do {
		printf("Digite o seu nome: \n");
		scanf("%s", &nome);
		
		printf("\nDigite o seu email: \n");
		scanf("%s", &email);
			
		printf("\nDigite a sua idade: \n");
		scanf("%d", &idade);
		
		printf("\nDigite seu cpf: \n");
		scanf("%d", &cpf);
		
		printf("\n\nSe voce deseja cadastrar outro usuario aperte a tecla 1, se nao, aperte a tecla 0: ");
		scanf("%d", &op);
		
		printf("\n\nDados cadastrados no sistema: \n\n nome: %s\n idade: %d\n cpf: %d\n email: %s\n", nome, idade, cpf, email);
		
		printf("\n\n%s", marcaDeAgua);
	} while (op == 1);
	
	system("pause");
	
	printf("%s", marcaDeAgua);

}