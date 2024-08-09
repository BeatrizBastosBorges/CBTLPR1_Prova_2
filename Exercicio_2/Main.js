import java.util.Scanner;
import java.util.Date;
import java.text.DateFormat;

class Data {
    private int dia;
    private int mes;
    private int ano;

    private static Scanner scan = new Scanner(System.in);

    public Data() {
        try {
            setAno();
            setMes();
            setDia();
        } catch (Exception e) {
            System.out.println("Erro ao entrar com a data: " + e.getMessage());
        }
    }

    public Data(int d, int m, int a) {
        try {
            setAno(a);
            setMes(m);
            setDia(d);
        } catch (Exception e) {
            System.out.println("Erro ao entrar com a data: " + e.getMessage());
        }
    }

    public int getDia() {
        return dia;
    }

    public void setDia(int dia) {
        if (isDiaValido(dia, this.mes, this.ano)) {
            this.dia = dia;
        } else {
            System.out.println("Dia invalido para a data fornecida.");
        }
    }

    public void setDia() {
        try {
            System.out.print("Digite o dia: ");
            int dia = scan.nextInt();
            if (isDiaValido(dia, this.mes, this.ano)) {
                this.dia = dia;
            } else {
                System.out.println("Dia invalido. Tente novamente.");
                setDia();
            }
        } catch (Exception e) {
            System.out.println("Erro ao entrar com o dia: " + e.getMessage());
            scan.nextLine();
            setDia();
        }
    }

    public int getMes() {
        return mes;
    }

    public void setMes(int mes) {
        if (mes >= 1 && mes <= 12) {
            this.mes = mes;
        } else {
            System.out.println("Mes invalido.");
        }
    }

    public void setMes() {
        try {
            System.out.print("Digite o mes: ");
            int mes = scan.nextInt();
            if (mes >= 1 && mes <= 12) {
                this.mes = mes;
            } else {
                System.out.println("Mes invalido. Tente novamente.");
                setMes();
            }
        } catch (Exception e) {
            System.out.println("Erro ao entrar com o mes: " + e.getMessage());
            scan.nextLine();
            setMes();
        }
    }

    public int getAno() {
        return ano;
    }

    public void setAno(int ano) {
        this.ano = ano;
    }

    public void setAno() {
        try {
            System.out.print("Digite o ano: ");
            this.ano = scan.nextInt();
        } catch (Exception e) {
            System.out.println("Erro ao entrar com o ano: " + e.getMessage());
            scan.nextLine();
            setAno();
        }
    }

    public String mostra1() {
        return String.format("%d/%d/%d", this.dia, this.mes, this.ano);
    }

    public String mostra2() {
        String[] mesesPorExtenso = {"Janeiro", "Fevereiro", "Marco", "Abril", 
                                    "Maio", "Junho", "Julho", "Agosto", 
                                    "Setembro", "Outubro", "Novembro", "Dezembro"};
        return String.format("%d de %s de %d", this.dia, mesesPorExtenso[this.mes - 1], this.ano);
    }

    public boolean bissexto() {
        return (this.ano % 4 == 0 && (this.ano % 100 != 0 || this.ano % 400 == 0));
    }

    public int diasTranscorridos() {
        int[] diasPorMes = {31, (bissexto() ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
        int diasTranscorridos = 0;

        for (int i = 0; i < this.mes - 1; i++) {
            diasTranscorridos += diasPorMes[i];
        }

        diasTranscorridos += this.dia;

        return diasTranscorridos;
    }

    public void apresentaDataAtual() {
        try {
            Date dataAtual = new Date();
            DateFormat formatoData = DateFormat.getDateInstance(DateFormat.FULL);
            System.out.println("Data atual: " + formatoData.format(dataAtual));
        } catch (Exception e) {
            System.out.println("Erro ao obter a data atual: " + e.getMessage());
        }
    }

    private boolean isDiaValido(int dia, int mes, int ano) {
        if (mes < 1 || mes > 12) return false;

        int[] diasPorMes = {31, (bissexto() ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
        return dia >= 1 && dia <= diasPorMes[mes - 1];
    }
}

class Hora {
    private int hora;
    private int minuto;
    private int segundo;

    public Hora() {
        this.hora = 0;
        this.minuto = 0;
        this.segundo = 0;
    }

    public Hora(int h, int mi, int s) {
        this.hora = h;
        this.minuto = mi;
        this.segundo = s;
    }

    public int getHora() {
        return hora;
    }

    public void setHora(int hora) {
        this.hora = hora;
    }

    public int getMinuto() {
        return minuto;
    }

    public void setMinuto(int minuto) {
        this.minuto = minuto;
    }

    public int getSegundo() {
        return segundo;
    }

    public void setSegundo(int segundo) {
        this.segundo = segundo;
    }

    public String mostraHora() {
        return String.format("%02d:%02d:%02d", this.hora, this.minuto, this.segundo);
    }
}

class ConsultaAgendada {
    private Data data;
    private Hora hora;
    private String nomePaciente;
    private String nomeMedico;
    private static int quantidade = 0;

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
        Scanner scan = new Scanner(System.in);
        System.out.print("Digite o nome do paciente: ");
        this.nomePaciente = scan.nextLine();
    }

    public void setNomeMedico(String m) {
        this.nomeMedico = m;
    }

    public void setNomeMedico() {
        Scanner scan = new Scanner(System.in);
        System.out.print("Digite o nome do medico: ");
        this.nomeMedico = scan.nextLine();
    }

    public static int getQuantidade() {
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
