import java.util.Scanner;

class Hora {
    private int hora;
    private int minuto;
    private int segundo;

    private static Scanner scan = new Scanner(System.in);

    public Hora() {
        try{
            setHora();
            setMinuto();
            setSegundo();
        } catch (Exception e) {
            System.out.println("Erro ao entrar com a data: " + e.getMessage());
        }
    }

    public Hora(int h, int mi, int s) {
        try{
            setHora(h);
            setMinuto(mi);
            setSegundo(s);
        } catch (Exception e) {
            System.out.println("Erro ao entrar com a data: " + e.getMessage());
        }
    }

    public int getHora() {
        return hora;
    }

    public void setHora(int hora) {
        this.hora = hora;
    }

    public void setHora() {
        try {
            System.out.print("Digite a hora: ");
            int hora = scan.nextInt();
            if (hora >= 0 && hora <= 23) {
                this.hora = hora;
            } else {
                System.out.println("Hora invalida.");
                setHora();
            }
        } catch (Exception e) {
            System.out.println("Erro ao entrar com a hora: " + e.getMessage());
            scan.nextLine();
            setHora();
        }
    }

    public int getMinuto() {
        return minuto;
    }

    public void setMinuto(int minuto) {
        this.minuto = minuto;
    }

    public void setMinuto() {
        try {
            System.out.print("Digite o minuto: ");
            int minuto = scan.nextInt();
            if (minuto >= 0 && minuto <= 60) {
                this.minuto = minuto;
            } else {
                System.out.println("Minuto invalido.");
                setMinuto();
            }
        } catch (Exception e) {
            System.out.println("Erro ao entrar com o minuto: " + e.getMessage());
            scan.nextLine();
            setMinuto();
        }
    }

    public int getSegundo() {
        return segundo;
    }

    public void setSegundo(int segundo) {
        this.segundo = segundo;
    }

    public void setSegundo() {
        try {
            System.out.print("Digite o segundo: ");
            int segundo = scan.nextInt();
            if (segundo >= 0 && segundo <= 60) {
                this.segundo = segundo;
            } else {
                System.out.println("Segundo invalido.");
                setSegundo();
            }
        } catch (Exception e) {
            System.out.println("Erro ao entrar com o segundo: " + e.getMessage());
            scan.nextLine();
            setSegundo();
        }
    }

    public String mostraHora() {
        return String.format("%02d:%02d:%02d", this.hora, this.minuto, this.segundo);
    }
}
