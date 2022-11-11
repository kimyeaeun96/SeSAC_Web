package second;

public class Samsung implements Phone {
	@Override
	public void sendCall() {
		System.out.println("뚜루루루룰");
	}
	@Override
	public void receiveCall() {
		System.out.println("전화받아");
	}
}
