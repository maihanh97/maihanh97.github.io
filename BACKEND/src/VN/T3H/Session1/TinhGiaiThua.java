package VN.T3H.Session1;

import java.util.Scanner;

public class TinhGiaiThua {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int k=3;
		while(k>0) {
			System.out.println("Nhập vào n = ");
			int n = sc.nextInt();
			System.out.print("Giai thừa của "+ n+ " = ");
			tinhGiaiThua(n);
			k--;
		}
		
	}
	
	public static void tinhGiaiThua(int n) {
		int giaithua = 1;
		for(int i=1;i<=n;i++) {
			giaithua *=i;
		}
		System.out.println(giaithua);
	}
}
