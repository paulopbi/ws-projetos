package Exames;

import javax.swing.JOptionPane;

class ExameTriglicerideos extends Exame {

    private double quantidadeTriglicerideos;
    private String resultadoTriglicerideos;

    public String getResultadoTriglicerideos() {
        return resultadoTriglicerideos;
    }

    public void setResultadoTriglicerideos(String resultadoTriglicerideos) {
        this.resultadoTriglicerideos = resultadoTriglicerideos;
    }

    public double getQuantidadeTriglicerideos() {
        return quantidadeTriglicerideos;
    }

    public void setQuantidadeTriglicerideos(double quantidadeTriglicerideos) {
        this.quantidadeTriglicerideos = quantidadeTriglicerideos;
    }

    @Override
    public void cadastrarExame() {
        super.cadastrarExame();
        double quantTriglicerideos = Double.parseDouble(JOptionPane.showInputDialog("Digite a quantidade de Triglicerideos (mg/dL):"));
        this.setQuantidadeTriglicerideos(quantTriglicerideos);
    }

    public void classificaoExame() {

        if (super.getIdade() <= 9 && this.getQuantidadeTriglicerideos() < 75) {
            this.setResultadoTriglicerideos("Triglicerideos - BOM");
        } else if (super.getIdade() <= 19 && this.getQuantidadeTriglicerideos() < 90) {
            this.setResultadoTriglicerideos("Triglicerideos - BOM");
        } else if (super.getIdade() > 19 && this.getQuantidadeTriglicerideos() < 150) {
            this.setResultadoTriglicerideos("Triglicerideos - BOM");
        } else {
            this.setResultadoTriglicerideos("Triglicerideos - RUIM");
        }
    }

    public void mostrarResultado() {
        classificaoExame();
        JOptionPane.showMessageDialog(null, "Nome do Paciente: " + super.getNomePaciente() + "\nIdade: "
                + super.getIdade() + "\nTipo de sangue: " + super.getTipoSanguineo() + "\nQuantidade de LDL: "
                + this.getQuantidadeTriglicerideos() + " mg/dL" + "\nClassificação HDL: " + this.getResultadoTriglicerideos());
    }
}
