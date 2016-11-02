#include<iostream>
#include<string>
using namespace std ;

class Time
{
	protected:
	int hour;
	int min;
	int sec;

	public:
// Default constructor
	Time()
	{ 
		hour = 0; 
		min = 0; 
		sec = 0; 
	}

// Constructor
	Time(int h, int m, int s)
	{ 
		hour = h; 
		min = m; 
		sec = s; 
	}

// Accessor functions

	int getHour()
	{
		return hour;
	}


	int getMin() const
	{ 
		return min; 
	}

	int getSec() const
	{ 
		return sec; 
	}
	
	void showTime()
	{
		cout << getHour() << ":" << getMin() << ":" << getSec() << endl;
	}
	
	
};




class MilTime:public Time 
{
	int milHour;
	int milSeconds;
	
	public :
		
	MilTime(int h,int m,int s)
	{	
		milHour = h; 
		min = m; 
		sec = s; 
	}
	
	void setTime()
	{
		
		if(milHour<12)
		milHour=milHour+12 ;
		
		else
		milHour=milHour ;
	}
	
	int getMilHour()
	{
		return milHour ;
	}

	
	void showMilTime()
	{
		cout << getMilHour() << getMin()<<" hours" ;
	}
	
	int badHour(int)
	{
		if(getMilHour()>23 || getMilHour()<0 )
		{
			string e = "error";
			throw e;
		}
		return static_cast<int>(getMilHour());
	}	
	
	int badSeconds(int)
	{
		if(getMin()>59||getMin()<0)
		{
			string e = "error";
			throw e;
		}
		return static_cast<int>(getMin());
	}	
	
};




int main()
{
	int h,m,s;
	
	
	cout<<"input hour :";
	cin>>h;
	
	
	
	cout<<"input minutes : ";
	cin>>m;
	
	cout<<"input seconds : ";
	cin>>s;
	
	Time showday(h,m,s);
	
	showday.showTime();
	
	MilTime input(h,m,s);
	input.setTime();
	
	
	
	try
	{
		input.badHour(input.getMilHour());	
	}
	catch(string e)
	{
		cout<<e<<endl;
	}

	try
	{
		input.badSeconds(input.getMin());	
	}
	catch(string e)
	{
		cout<<e<<endl;
	}
	
	input.showMilTime();
	
	
	
	return 0;
}
