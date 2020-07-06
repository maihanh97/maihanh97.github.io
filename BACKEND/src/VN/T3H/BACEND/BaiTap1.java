package VN.T3H.Session2;

import java.util.Scanner;

public class BaiTap1 {
	public static void main(String[] args) {
		int[] arr = {90,90,20,27,35,22,10,8,8};
		int n,k;
		Scanner sc = new Scanner(System.in);
		System.out.println("Chèn phần tử: ");
		n = sc.nextInt();
		System.out.println("Vào vị trí: ");
		k = sc.nextInt();
		chenPhanTu(n, k, arr);
		
		
		System.out.println("\nXóa phần tử trùng nhau trong mảng:\nKết quả: ");
		xoaPhanTu(arr);
	}
	
	public static void chenPhanTu(int n,int k, int[] arr) {
		for(int i=0;i<k;i++) {
			System.out.print(arr[i]+" ");
		}
		System.out.print(n+" ");
		for(int i=k;i<arr.length;i++) {
			System.out.print(arr[i]+" ");
		}
	}
	public static void xoaPhanTu(int[] arr) {
		int i,j,k;
		int n=arr.length;
		for (i = 1; i < n; i++){
			for (j = 0; j < i; j++){
				if (arr[i] == arr[j]){						
					for (k = i; k < n; k++){
						arr[k] = arr[k + 1];
						n--;
						i--;
					}
				}				
			}
		}
		
		for(i=0;i<n;i++) {
			System.out.print(arr[i]+" ");
		}
	
	}
	
}
