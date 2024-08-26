package Exames;

import java.time.LocalDate;
import javax.swing.JOptionPane;

public abstract class Exame {

    LocalDate dAtual = LocalDate.now();
    private String nomePaciente;
    private String tipoSanguineo;
    private int anoNascimento;
    private int idade;

    public int getIdade() {
        return idade;
    }

    public String getNomePaciente() {
        return nomePaciente;
    }

    public void setNomePaciente(String nomePaciente) {
        this.nomePaciente = nomePaciente.toUpperCase();
    }

    public String getTipoSanguineo() {
        return tipoSanguineo;
    }

    public void setTipoSanguineo(String tipoSanguineo) {
        this.tipoSanguineo = tipoSanguineo.toUpperCase();
    }

    public int getAnoNascimento() {
        return anoNascimento;
    }

    public void setAnoNascimento(int anoNascimento) {
        this.idade = dAtual.getYear() - anoNascimento;
        this.anoNascimento = anoNascimento;
    }

    public void cadastrarExame() {
        String nome = JOptionPane.showInputDialog("Digite o nome do paciente:");
        this.setNomePaciente(nome);
        String tipoSangue = JOptionPane.showInputDialog("Digite o tipo sanguíneo do paciente:");
        this.setTipoSanguineo(tipoSangue);
        int anoNasc = Integer.parseInt(JOptionPane.showInputDialog("Digite o ano de nascimento do paciente:"));
        this.setAnoNascimento(anoNasc);
    }

}
