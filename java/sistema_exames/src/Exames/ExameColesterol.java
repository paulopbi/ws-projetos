package Exames;

import javax.swing.JOptionPane;

public class ExameColesterol extends Exame {

    private double quantidadeLDL;
    private double quantidadeHDL;
    private String risco;
    private String classificacaoLDL;
    private String classificacaoHDL;

    public String getClassificacaoLDL() {
        return classificacaoLDL;
    }

    public void setClassificacaoLDL(String classificacaoLDL) {
        this.classificacaoLDL = classificacaoLDL;
    }

    public String getClassificacaoHDL() {
        return classificacaoHDL;
    }

    public void setClassificacaoHDL(String classificacaoHDL) {
        this.classificacaoHDL = classificacaoHDL;
    }

    public double getQuantidadeLDL() {
        return quantidadeLDL;
    }

    public void setQuantidadeLDL(double quantidadeLDL) {
        this.quantidadeLDL = quantidadeLDL;
    }

    public double getQuantidadeHDL() {
        return quantidadeHDL;
    }

    public void setQuantidadeHDL(double quantidadeHDL) {
        this.quantidadeHDL = quantidadeHDL;
    }

    public String getRisco() {
        return risco;
    }

    public void setRisco(String risco) {
        this.risco = risco.toUpperCase();
    }

    @Override
    public void cadastrarExame() {
        super.cadastrarExame();
        double quantLDL = Double.parseDouble(JOptionPane.showInputDialog("Digite a quantidade de LDL (mg/dL):"));
        this.setQuantidadeLDL(quantLDL);
        double quantHDL = Double.parseDouble(JOptionPane.showInputDialog("Digite a quantidade de HDL (mg/dL):"));
        this.setQuantidadeHDL(quantHDL);
        String riscoPac = JOptionPane.showInputDialog("Digite o risco do paciente (B - Baixo, M - Médio, A - Alto):");
        this.setRisco(riscoPac);

    }

    public void classificaoExame() {
        if ("A".equals(this.getRisco()) && this.getQuantidadeLDL() < 50) {
            this.setClassificacaoLDL("BOM");
        } else if ("M".equals(this.getRisco()) && this.getQuantidadeLDL() < 70) {
            this.setClassificacaoLDL("BOM");
        } else if ("B".equals(this.getRisco()) && this.getQuantidadeLDL() < 100) {
            this.setClassificacaoLDL("BOM");
        } else {
            this.setClassificacaoLDL("RUIM");
        }

        if ((super.getIdade() <= 19 && this.getQuantidadeHDL() > 45) || (super.getIdade() > 19 && this.getQuantidadeHDL() > 40)) {
            this.setClassificacaoHDL("BOM");

        } else {
            this.setClassificacaoHDL("RUIM");
        }
    }

    public void mostrarResultado() {
        classificaoExame();
        JOptionPane.showMessageDialog(null, "Nome do Paciente: " + super.getNomePaciente() + "\nIdade: "
                + super.getIdade() + "\nTipo de sangue: " + super.getTipoSanguineo() + "\nQuantidade de LDL: "
                + this.getQuantidadeLDL() + " mg/dL" + "\nQuantidade de HDL: " + this.getQuantidadeHDL() + " mg/dL"
                + "\nClassificação LDL: " + this.getClassificacaoLDL() + "\nClassificação HDL: " + this.getClassificacaoHDL());
    }

}
