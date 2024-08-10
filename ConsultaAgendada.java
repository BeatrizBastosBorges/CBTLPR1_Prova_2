import java.util.Scanner;

class ConsultaAgendada {
    private Data data;
    private Hora hora;
    private String nomePaciente;
    private String nomeMedico;
    private static int quantidade = 0;

    private static Scanner scan = new Scanner(System.in);

    public ConsultaAgendada() {
        this.data = new Data();
        this.hora = new Hora();
        setNomePaciente();
        setNomeMedico();
        quantidade++;
    }

    public ConsultaAgendada(int h, int mi, int s, int d, int m, int a, String p, String nomeMedico) {
        this.data = new Data(d, m, a);
        this.hora = new Hora(h, mi, s);
        this.nomePaciente = p;
        this.nomeMedico = nomeMedico;
        quantidade++;
    }

    public ConsultaAgendada(Data d, Hora h, String p, String m) {
        this.data = d;
        this.hora = h;
        this.nomePaciente = p;
        this.nomeMedico = m;
        quantidade++;
    }

    public void setData(int d, int m, int a) {
        this.data = new Data(d, m, a);
    }

    public void setData() {
        this.data = new Data();
    }

    public void setHora(int h, int mi, int s) {
        this.hora = new Hora(h, mi, s);
    }

    public void setHora() {
        this.hora = new Hora();
    }

    public void setNomePaciente(String p) {
        this.nomePaciente = p;
    }

    public void setNomePaciente() {
        
        System.out.print("Digite o nome do paciente: ");
        this.nomePaciente = scan.nextLine();
    }

    public void setNomeMedico(String m) {
        this.nomeMedico = m;
    }

    public void setNomeMedico() {
        System.out.print("Digite o nome do medico: ");
        this.nomeMedico = scan.nextLine();
    }

    public static int getAmostra() {
        return quantidade;
    }

    public String getData() {
        return this.data.mostra1();
    }

    public String getHora() {
        return this.hora.mostraHora();
    }

    public String getNomePaciente() {
        return nomePaciente;
    }

    public String getNomeMedico() {
        return nomeMedico;
    }
}
