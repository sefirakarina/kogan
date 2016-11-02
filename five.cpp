#include<iostream>
using namespace std;

template <class sum>
int total(sum num)
{
	sum val = 0 ;
	sum tot=0 ;
	
	for (int i=0 ; i < num ; i++)
	{
		cout<<"value "<< i+1 <<" = ";
		cin>>val ;
		
		tot = tot + val ;
	}
	
	return tot;	
}

int main()
{
	double x=10;
	
	cout<< "sum of all num = " << total(x);
	
	return 0;
}
