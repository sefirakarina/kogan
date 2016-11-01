#include <iostream>
#include <string>
using namespace std ;


class DATE
{
	private :
		int day;
		int month ;
		int year ; 
	
	public :

		
		void setDay(int dd)
		{
			day=dd;
		}
		
		void setMonth(int mm)
		{
			month=mm;
		}
		
		void setYear(int yy)
		{
			year=yy;
		}
		
		int getDay()
		{
			return day ;
		}
		int getMonth()
		{
			return month ;
		}
		int getYear()
		{
			return year ;
		}
		
		int hari(int)
		{
		
			if(day>32 || day<0)
			{
				string e = "error";
				throw e;
			}	
			
			return static_cast<int>(day);
			
		}
		
		int bulan(int)
		{
		
			if(month>12 || month<0)
			{
				string e = "error";
				throw e;
			}	
			
			return static_cast<int>(month);
			
		}
};

int main()
{
	int dd,mm,yy ;
	DATE input;
	
	cout<<"input day (1-31) : " ; 
	cin>> dd ; cout<<endl;
	
	input.setDay(dd);
	
	try
	{
		input.hari(input.getDay()); 
	}
	catch(string e)
	{
		cout<<e;
		cout<<endl;
		
	}
	
	cout <<"input month (1-12) : ";
	cin>>mm ; cout <<endl;
	
	input.setMonth(mm);
	
	try
	{
		input.bulan(input.getMonth()); 
	}
	catch(string e)
	{
		cout<<e;
		return 0;
	}
	
	cout << "input year (yyyy) : ";
	cin>>yy ; cout <<endl ;
	
	input.setYear(yy);

	
	string mmArr[12] = {"January", "February" , "March", "April",
                            "May", "June", "July", "August", "September",
                            "October", "November", "December"};
                            
    
   		 cout << input.getDay() << " " << mmArr[input.getMonth()-1] << " " << input.getYear() << endl;                           
   		 cout << input.getDay() << " / " << input.getMonth() << " / " << input.getYear() << endl;
   		 cout << mmArr[input.getMonth()-1] << " " << input.getDay() << ", " << input.getYear() << endl;

	

	return 0 ;
}





