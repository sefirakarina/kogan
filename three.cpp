#include<iostream>
#include<string>
using namespace std;

template<class mima>
void minmax(mima &var1,mima &var2)
{
	if(var1<var2)
	var1=var1;
	
	else
	var2=var1;
}

int main ()
{
	int min1,min2;
	double max1,max2;
	
	cout<<"enter min argument 1 : ";
	cin>>min1;
	
	cout<<"enter min argument 2 : ";
	cin>>min2;
	
	cout<<endl;
	
	minmax(min1,min2);
	
	cout<<"minimum value : " << min1<<endl<<endl;
	
	cout<<"enter max argument 1 : ";
	cin>>max1 ;
	
	cout<<"enter max argument 2 : ";
	cin>>max2;
	
	cout<<endl;
	
	minmax(max1,max2);
	
	cout<<"max value : "<<max2;
	

	return 0;
}

