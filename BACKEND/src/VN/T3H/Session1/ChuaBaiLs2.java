package VN.T3H.Session1;

import java.util.Scanner;

public class ChuaBaiLs2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int sum =0;
		int a=0;
		Scanner sc = new Scanner(System.in);
		System.out.println("Nhập vào b = ");
		int b = sc.nextInt();
		while(a<b) {
			sum += a;
			a++;
		}
		System.out.println("Tổng các số nh�? hơn "+b+" = "+sum);
		

	}

}
