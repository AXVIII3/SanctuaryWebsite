import java.util.*;
class Insertion
{
    void insertion_sort()
    {
        int n = arr.length;
        for (int i = 1; i < n; ++i) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }
    void display()
    {
        int n = arr.length;
        for (int i = 0; i < n; ++i)
            System.out.print(arr[i] + " ");
 
        System.out.println();
    }
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        int arr[]=new int(n);
        System.out.println("Enter theno. ")
        System.out.println("Enter the elements of the array");

        Insertion ob = new Insertion();
        ob.sort(arr);
 
        
    }
}
