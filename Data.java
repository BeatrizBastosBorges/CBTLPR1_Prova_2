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
