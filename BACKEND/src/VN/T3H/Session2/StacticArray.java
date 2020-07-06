package VN.T3H.Session2;

import java.util.ArrayList;
import java.util.Arrays;

public class StacticArray {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		createArray();
//		copyArray();
		timPhanTuThieu();
		int [] arr1 = {1,2,3,4,5,6,7,8,9};
		int [] arr2 = {1,2,3,4,5,6,7,8,10};
		int [] arr3 = {1,2,3,4,5,6,7,8,9};
		
		sosanhArray(arr1, arr2);
		sosanhArray(arr1, arr3);
		
	}
	
//	public static void copyArray() {
//		int [] arr1 = {1,10,100,200,500};
//		int [] arr2 = new int[arr1.length];
//		for(int i=0;i<arr1.length;i++) {
//			arr2[i] = arr1[i];
//		}
//		System.out.println("In mảng đã tạo arr2: "+Arrays.toString(arr2));
//		
//	}
	
//	public static void createArray() {
//		int [] arr1 = {1,10,100,200,500};
//		System.out.println("In mảng đã tạo: "+Arrays.toString(arr1));
//		System.out.println("In ra vị trí đầu mảng: "+arr1[0]
//				+"\n"+"In ra vị trí cuối mảng: "+arr1[4]);
//		
//		ArrayList<String> arr4 = new ArrayList<String>();
//		arr4.add("10");
//		arr4.add("Lê Thị Thúy Hiền");
//		arr4.add("Khổng Thị Dung");
//		System.out.println("In mảng đã tạo arr4: "+arr4);
//	}
	
	public static void timPhanTuThieu() {
		int [] arr1 = {1,2,3,4,5,7,8,9,10};
		int n=arr1.length;
		int tongMang =0;
		for(int i=0;i<arr1[n-1];i++) {
			tongMang +=i;
		}
		int tongcacphantutrongmang =0;
		for(int i=0;i<n-1;i++) {
			tongcacphantutrongmang +=arr1[i];
		}
		int k =tongMang - tongcacphantutrongmang;
		System.out.print("Số còn thiếu: ");
		System.out.println(k);
	}
	
	public static void sosanhArray(int []arr1, int[] arr2) {
		if(arr1.length != arr2.length) {
			System.out.println("Hai mảng không bằng nhau!");
			return;
		}
		else {
			for(int i=0;i<arr1.length;i++) {
				if(arr1[i] != arr2[i]) {
					System.out.println("Hai mảng không bằng nhau!");
					return;
				}
			}
		}
		
		System.out.println("Hai mảng bằng nhau!");
		
	}
	
	
}
