package Com.CodingTask;
import java.util.*;
public class WeirdNotWeird {

	public static void main(String[] args) {
		Scanner num=new Scanner(System.in);
		 int N = num.nextInt();
	       
	        if(N%2==0)
	        {
	            if(N>2 && N<5)
	            
	            System.out.println("Not Weird");
	            else if(N>6 && N<20)
	            System.out.println("Weird");
	            else
	            	if(N!=0)
	            System.out.println("Not Weird");
	            
	        }
	        else
	        {
	        	if(N!=0)
	            System.out.println("Weird");
	        }

	       num.close();
	    }
	


	}


