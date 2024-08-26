/**
 *
 * @author Paulo
 */

import javax.swing.JOptionPane;

public class Rota {

    public void planejarDia() {
	// codigo principal do exercicio
        int quantidadeRotas = Integer.parseInt(JOptionPane.showInputDialog("Quantas rotas serão realizadas no dia?"));

        double totalKm = 0;
        double totalLitrosCombustivel = 0;

        for (int i = 1; i <= quantidadeRotas; i++) {
            double kmRota = Double.parseDouble(JOptionPane.showInputDialog("Informe a km da rota " + i));
            totalKm += kmRota;

            double litrosNecessarios = kmRota / 2.5;
            totalLitrosCombustivel += litrosNecessarios;
        }

        double valorLitroDiesel = Double.parseDouble(JOptionPane.showInputDialog("Informe o valor do litro de óleo diesel:"));

        double custoTotal = totalLitrosCombustivel * valorLitroDiesel;

        String resultado = "Total de km: " + totalKm + " km\n"
                + "Litros de combustível necessários: " + totalLitrosCombustivel + " litros\n"
                + "Valor a ser desembolsado: R$ " + custoTotal;

        JOptionPane.showMessageDialog(null, resultado);
    }
}