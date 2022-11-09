package java_first_project;
import second.Second;

public class Test extends Second {
	//필드
	public int num;
	public String str = "문자열";
	
	//리턴타입
//	public int test() { // 리턴타입 void : 리턴값 없다. public클래스: 어디서든 사용 가능함 
//		return 123;
//	}
	
	//constructor(생성자) 클래스 이름과 같아야함
	public Test(int num1) {
		//가장 가까운 num을 부르려면 그냥 num
		//전역 선언한 클래스 num은 this.num
		this.num = num1; // -> 클래스 num은 현재 생성자의 매개변수 num이다.   
	}
	//메소드
	public void testMethod() {
		Second sec = new Second();
//		int a = sec.num1;
		
		System.out.println("test");
	}
	
}
