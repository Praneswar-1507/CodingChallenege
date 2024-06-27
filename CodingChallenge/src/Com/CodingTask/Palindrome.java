package Com.CodingTask;
import java.util.*;
public class Palindrome {

	public static void main(String[] args) {
		 Scanner sc=new Scanner(System.in);
	        String A=sc.next();
	        StringBuilder build = new StringBuilder(A);
	        String s = build.reverse().toString();
	        
	        if(A.equals(s))
	        {
	            System.out.println("Yes");
	        }
	        else{
	            System.out.println("No" );
	        }
	    }
	}

	
