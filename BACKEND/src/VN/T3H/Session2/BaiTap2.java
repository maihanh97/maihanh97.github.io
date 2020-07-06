package VN.T3H.Session2;

import java.util.Scanner;

public class BaiTap2 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Nhập vào số hộ dân: ");
		int sohodan = sc.nextInt();
		int[] arr = new int[sohodan];
		System.out.println("Nhập vào số điện tiêu thụ của từng hộ: ");
		for(int i=0;i<sohodan;i++) {
			arr[i] = sc.nextInt();
		}
		double[] tiendien = new double[sohodan];
		for(int i=0;i<sohodan;i++) {
			if(arr[i]<=50) {
				tiendien[i] = arr[i]*1.549;
			}
			else if(arr[i]>=51 && arr[i]<=100) {
				tiendien[i] = arr[i]*1.600;
			}
			else if(arr[i]>=101 && arr[i]<=200) {
				tiendien[i] = arr[i]*1.857;
			}
			else if(arr[i]>=201 && arr[i]<=300) {
				tiendien[i] = arr[i]*2.340;
			}
			else if(arr[i]>=301 && arr[i]<=400) {
				tiendien[i] = arr[i]*2.615;
			}
			else {
				tiendien[i] = arr[i]*2.701;
			}
		}
		
		System.out.println("Số tiền điện của từng hộ là: ");
		for(int i=0;i<sohodan;i++) {
			System.out.println((i+1)+" "+tiendien[i]+" VND ");
		}
		
	}
}
