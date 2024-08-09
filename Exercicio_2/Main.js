public class Main {
    public static void main(String[] args) {
        ConsultaAgendada consulta1 = new ConsultaAgendada();
        System.out.println("Consulta 1:");
        System.out.println("Data: " + consulta1.getData());
        System.out.println("Hora: " + consulta1.getHora());
        System.out.println("Paciente: " + consulta1.getNomePaciente());
        System.out.println("Medico: " + consulta1.getNomeMedico());
        System.out.println("Quantidade de consultas: " + ConsultaAgendada.getQuantidade());

        ConsultaAgendada consulta2 = new ConsultaAgendada(14, 30, 0, 15, 8, 2024, "Joao Silva", "Dr. Pereira");
        System.out.println("\nConsulta 2:");
        System.out.println("Data: " + consulta2.getData());
        System.out.println("Hora: " + consulta2.getHora());
        System.out.println("Paciente: " + consulta2.getNomePaciente());
        System.out.println("Medico: " + consulta2.getNomeMedico());
        System.out.println("Quantidade de consultas: " + ConsultaAgendada.getQuantidade());

        Data data = new Data(5, 12, 2024);
        Hora hora = new Hora(9, 0, 0);
        ConsultaAgendada consulta3 = new ConsultaAgendada(data, hora, "Maria Oliveira", "Dr. Souza");
        System.out.println("\nConsulta 3:");
        System.out.println("Data: " + consulta3.getData());
        System.out.println("Hora: " + consulta3.getHora());
        System.out.println("Paciente: " + consulta3.getNomePaciente());
        System.out.println("Medico: " + consulta3.getNomeMedico());
        System.out.println("Quantidade de consultas: " + ConsultaAgendada.getQuantidade());
    }
}
