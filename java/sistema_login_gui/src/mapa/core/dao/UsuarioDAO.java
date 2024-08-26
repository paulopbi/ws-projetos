package mapa.core.dao;

import mapa.core.entity.Usuario;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import mapa.core.dao.conexao.ConexaoJDBC;
import java.sql.SQLException;
import javax.swing.JOptionPane;

public class UsuarioDAO {
    public void inserir(Usuario usuario) {
        String sql = "INSERT INTO usuario(nome,login,senha,email)VALUES(?,?,?,?)";
        PreparedStatement ps;
        
        try {
            ps = ConexaoJDBC.getConexao().prepareStatement(sql);
            ps.setString(1, usuario.getNome());
            ps.setString(2, usuario.getLogin());
            ps.setString(3, usuario.getSenha());
            ps.setString(4, usuario.getEmail());
            
            ps.execute();
        }catch(SQLException e) {
            e.printStackTrace();
        }
    }
    
    public Usuario fazerLogin(String usuario, String senha) {
        
        String sql = "SELECT id, nome, login, senha, email from usuario where login = ? and senha = ?";
        PreparedStatement ps;
        ResultSet rs;
        try {
            ps = ConexaoJDBC.getConexao().prepareStatement(sql);

            ps.setString(1, usuario);
            ps.setString(2, senha);

            rs = ps.executeQuery();

            if (rs.next()) {
                JOptionPane.showMessageDialog(null, "Acesso Autorizado");
            } else {
                JOptionPane.showMessageDialog(null, "Acesso Negado");
            }

        } catch (SQLException e) {
            e.printStackTrace();
            JOptionPane.showMessageDialog(null, "Acesso negado!!!  motivo: " + e);
        }
        return null;
    }
}
