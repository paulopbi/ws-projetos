package Exames;

import javax.swing.JOptionPane;

public class Main {

    public static void main(String[] args) {

        int opcao;
        do {

            opcao = Integer.parseInt(JOptionPane.showInputDialog("""
            Escolha o tipo de exame:
            1 - Exame de Glicemia
            2 - Exame de Colesterol
            3 - Exame de Triglicerídeos
            0 - Sair"""));

            switch (opcao) {
                case 1:
                    ExameGlicemia exGlicemia = new ExameGlicemia();
                    exGlicemia.cadastrarExame();
                    exGlicemia.mostrarResultado();
                    break;
                case 2:
                    ExameColesterol exColesterol = new ExameColesterol();
                    exColesterol.cadastrarExame();
                    exColesterol.mostrarResultado();
                    break;
                case 3:
                    ExameTriglicerideos exTriglicerideos = new ExameTriglicerideos();
                    exTriglicerideos.cadastrarExame();
                    exTriglicerideos.mostrarResultado();
                    break;
                case 0:
                    JOptionPane.showMessageDialog(null, "Saindo do programa.");
                    break;
                default:
                    JOptionPane.showMessageDialog(null, "Opção inválida. Por favor, escolha uma opção válida.");
            }

        } while (opcao != 0);
    }
}
