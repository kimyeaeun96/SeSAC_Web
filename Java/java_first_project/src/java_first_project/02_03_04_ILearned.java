package java_first_project;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {
  public static int average(int num1, int num2, int num3, int num4, int num5) {
    return num1 + num2 + num3 + num4 + num5;
  }
  
  public static void main(String[] args) {
    System.out.print("5개의 정수를 입력하세요.");
    Scanner scanner = new Scanner(System.in);
    int anum = scanner.nextInt();
    int bnum = scanner.nextInt();
    int cnum = scanner.nextInt();
    int dnum = scanner.nextInt();
    int Enum = scanner.nextInt();
    System.out.print("평균은 " + (double)average(anum, bnum, cnum, dnum, Enum)/5); // (double):강제형변환
    
    //ArrayList
    System.out.println("ArrayList" );
    ArrayList<String> arrayList1 = new ArrayList<>();
    Scanner scanner = new Scanner(System.in);
    while (true) {
      System.out.println(": ");
      String str1 = scanner.nextLine();
      if (str1.equals("exit"))
        break; 
      arrayList1.add(str1);
    } 
    for (String value : arrayList1)
      System.out.println(value); 
  }
}
