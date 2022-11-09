package java_first_project;

public class Rectangle {
	//필드 (선언)
	private int width;
	private int height;
	private static int COUNT = 0; 
	public static int getCount() {
		return COUNT;
	}
	
//	private static double pi = 3.14; // 이미 공간을 할당 잗음. 독립된 공간임. 
//	
//	public static double getPi() { // 객체를 생성하기 전에 static pi를 가져오고 싶으면, 여기서 static 붙이기 
//		return pi;
//	}
	
	//생성자 (초기화)
	public Rectangle(int num1) {
		COUNT++;
		this.width = num1;
	}
	
	//ㄷ다른 클래스에서 값을 가져옴
	public int getWidth() {
		return width; 
	}

	// 다른 클래스에서 width 값을 변경한다. private에서는 설정변경 못하니까. 
	public void setWidth(int width) {
		this.width = width; 
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}
	public int area() {
		return this.width*this.height;
	}
}
