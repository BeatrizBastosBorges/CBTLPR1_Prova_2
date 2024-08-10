public class Main {
    public static void main(String[] args) {
        
        ConsultaAgendada p1 = new ConsultaAgendada(14, 30, 0, 15, 8, 2024, "Joao Silva", "Dr. Pereira");
        System.out.println("\nConsulta 1:");
        System.out.println("Data: " + p1.getData());
        System.out.println("Hora: " + p1.getHora());
        System.out.println("Paciente: " + p1.getNomePaciente());
        System.out.println("Medico: " + p1.getNomeMedico());
        System.out.println("Quantidade de consultas: " + ConsultaAgendada.getAmostra());
        System.out.println("\n");
        
        ConsultaAgendada p2 = new ConsultaAgendada();
        System.out.println("\n");
        System.out.println("Consulta 2:");
        System.out.println("Data: " + p2.getData());
        System.out.println("Hora: " + p2.getHora());
        System.out.println("Paciente: " + p2.getNomePaciente());
        System.out.println("Medico: " + p2.getNomeMedico());
        System.out.println("\n");
        System.out.println("Quantidade de consultas: " + ConsultaAgendada.getAmostra());

        System.out.println("\n");
        System.out.println("Alterando dados de p1");
        p1.setData();
        p1.setHora();
        p1.setNomePaciente();
        p1.setNomeMedico();

        System.out.println("\n");
        System.out.println("Data: " + p1.getData());
        System.out.println("Hora: " + p1.getHora());
        System.out.println("Paciente: " + p1.getNomePaciente());
        System.out.println("Medico: " + p1.getNomeMedico());
        System.out.println("\n");
        System.out.println("Quantidade de consultas: " + ConsultaAgendada.getAmostra());
    }
}
