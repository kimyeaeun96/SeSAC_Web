package java_first_project;

import java.util.Scanner;
import java.util.InputMismatchException;

import java.util.Arrays; // Arrays 클래스를 부른다.
import java.util.ArrayList;

public class Main {
	// String 배열. 매개변수 args
	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("숫자를 입력해주세요.");
		int num = 0; // 초기화한 변수만 선언한다. 
		try {
			//예외가 발생할만한 것
			num = scanner.nextInt();
		}catch(InputMismatchException e) {
			System.out.println("숫자를 입력해주세요.");
		}

		System.out.println("숫자" + " " + num);
		
		scanner.close();
		
		int num1 = 5;
		int num2 = 0;
		try {
			System.out.println(num1/num2);			
		}
		catch(ArithmeticException e){
			System.out.println("0으로 나눌 수 없어요.");
		}
		finally {
			System.out.println("finalllllly!");
		}
		System.out.print("aaaaaaaaa");
		
		//실습1----------------------------------------------------
		int[] intArray = new int[4];

		for (int i=1; i<intArray.length + 1; i++) {
			System.out.println(i);
		}			
		try {	
			System.out.println(intArray[5]);
		}
		catch(ArrayIndexOutOfBoundsException e) {		
			System.out.print("인덱스가 범위를 벗어났습니다.");
		}
		클래스---------------------------------------------------
		Test test = new Test(5); //클래스 이름, 생성자
		System.out.println(test.num);
		test.testMethod(); // 객체 안에 들어가서 메소드를 가져온다. 
		실습2 클래스실습----------------------------------------------------
		System.out.println("사각형의 거로와 세로 길이를 띄어쓰기를 기준으로 입력해주세요.");
		Scanner scanner = new Scanner(System.in);
		
		int width = scanner.nextInt();
		int height = scanner.nextInt();
		
		Rectangle rec = new Rectangle(width, height);
		System.out.print(rec.area());
		실습3 클래스실습 업그레이드----------------------------------------------------
		ArrayList<Rectangle> rectList = new ArrayList<>(); 
		Scanner scanner = new Scanner(System.in);
		while(true) {
			System.out.println("가로 세로 띄어쓰기 입력");
			int width = scanner.nextInt();
			int height = scanner.nextInt();
			
			if(width==0 && height==0) break;
			
			Rectangle rect = new Rectangle(width);
			rect.setHeight(height);
			
			rectList.add(rect);
		}
		
		for( Rectangle value: rectList ) {
			System.out.println("가로 길이는: " + value.getWidth());
			System.out.println("세로 길이는: " + value.getHeight());
			System.out.println("넓이는 " + value.area());
		}
		//실습4 클래스실습 업업그레이드----------------------------------------------------
		ArrayList<Rectangle> rectList = new ArrayList<>(); 
		Scanner scanner = new Scanner(System.in);
		while(true) {
			System.out.println("가로 세로 띄어쓰기 입력");
			int width = scanner.nextInt();
			int height = scanner.nextInt();
			
			if(width==0 && height==0) break;
			
			Rectangle rect = new Rectangle(width);
			rect.setHeight(height);
			
			rectList.add(rect);
		}
		
		for( Rectangle value: rectList ) {
			System.out.println("가로 길이는: " + value.getWidth());
			System.out.println("세로 길이는: " + value.getHeight());
			System.out.println("넓이는 " + value.area());
			System.out.println("---------------------------------------");
		}
		System.out.print("Rectangle의 인스턴스 개수는: " + Rectangle.getCount());
	}
}


