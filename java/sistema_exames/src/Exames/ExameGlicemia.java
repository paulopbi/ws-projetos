package Exames;

import javax.swing.JOptionPane;

class ExameGlicemia extends Exame {

    private double quantidadeGlicose;
    private String resultadoGlicemia;

    public String getResultadoGlicemia() {
        return resultadoGlicemia;
    }

    public void setResultadoGlicemia(String resultadoGlicemia) {
        this.resultadoGlicemia = resultadoGlicemia;
    }

    public double getQuantidadeGlicose() {
        return quantidadeGlicose;
    }

    public void setQuantidadeGlicose(double quantidadeGlicose) {
        this.quantidadeGlicose = quantidadeGlicose;
    }

    @Override
    public void cadastrarExame() {
        super.cadastrarExame();
        double quantGlicose = Double.parseDouble(JOptionPane.showInputDialog("Digite a quantidade de Glicose (mg/dL):"));
        this.setQuantidadeGlicose(quantGlicose);

    }

    public void classificaoExame() {
        if (this.getQuantidadeGlicose() < 100) {
            this.setResultadoGlicemia("Normoglicemia");
        } else if (this.getQuantidadeGlicose() < 126) {
            this.setResultadoGlicemia("Pré-diabetes");
        } else {
            this.setResultadoGlicemia("Diabetes estabelecido");
        }
    }

    public void mostrarResultado() {
        classificaoExame();
        JOptionPane.showMessageDialog(null, "Nome do Paciente: " + super.getNomePaciente() + "\nIdade: "
                + super.getIdade() + "\nTipo de sangue: " + super.getTipoSanguineo() + "\nQuantidade de LDL: "
                + this.getQuantidadeGlicose() + " mg/dL" + "\nClassificação HDL: " + this.getResultadoGlicemia());
    }
}
